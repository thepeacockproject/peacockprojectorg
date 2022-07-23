const fs = require("fs")
const os = require("os")
const path = require("path")
const lunr = require("lunr")
const { Worker } = require("worker_threads")

// local imports
const utils = require("./utils")

module.exports = (context, options) => {
    options = options || {}
    let languages

    const guid = String(Date.now())
    const fileNames = {
        searchDoc: `search-doc-${guid}.json`,
        lunrIndex: `lunr-index-${guid}.json`,
    }

    return {
        name: "docusaurus-lunr-search",
        configureWebpack(config) {
            // Multilingual issue fix
            const generatedFilesDir = config.resolve.alias["@generated"]
            languages = utils.generateLunrClientJS(
                generatedFilesDir,
                options.languages
            )
            return {}
        },
        async contentLoaded({ actions }) {
            actions.setGlobalData({ fileNames: fileNames })
        },
        async postBuild({ routesPaths = [], outDir, baseUrl }) {
            const [files] = utils.getFilePaths(
                routesPaths,
                outDir,
                baseUrl,
                options
            )
            const searchDocuments = []
            const lunrBuilder = lunr(function (builder) {
                if (languages) {
                    this.use(languages)
                }
                this.ref("id")
                this.field("title", { boost: 200 })
                this.field("content", { boost: 2 })
                this.field("keywords", { boost: 100 })
                this.metadataWhitelist = ["position"]

                const { build } = builder
                builder.build = () => {
                    builder.build = build
                    return builder
                }
            })

            const addToSearchData = (d) => {
                lunrBuilder.add({
                    id: searchDocuments.length,
                    title: d.title,
                    content: d.content,
                    keywords: d.keywords,
                })
                searchDocuments.push(d)
            }

            await buildSearchData(
                files,
                addToSearchData
            )
            const lunrIndex = lunrBuilder.build()

            const searchDocFileContents = JSON.stringify(searchDocuments)
            fs.writeFileSync(
                path.join(outDir, fileNames.searchDoc),
                searchDocFileContents
            )

            const lunrIndexFileContents = JSON.stringify(lunrIndex)
            fs.writeFileSync(
                path.join(outDir, fileNames.lunrIndex),
                lunrIndexFileContents
            )
        },
    }
}

function buildSearchData(files, addToSearchData) {
    if (!files.length) {
        return Promise.resolve()
    }
    let activeWorkersCount = 0
    const workerCount = Math.max(2, os.cpus().length)

    let indexedDocuments = 0 // Documents that have added at least one value to the index

    return new Promise((resolve, reject) => {
        let nextIndex = 0

        const handleMessage = ([isDoc, payload], worker) => {
            if (isDoc) {
                addToSearchData(payload)
            } else {
                indexedDocuments += payload

                if (nextIndex < files.length) {
                    worker.postMessage(files[nextIndex++])
                } else {
                    worker.postMessage(null)
                }
            }
        }

        for (let i = 0; i < workerCount; i++) {
            if (nextIndex >= files.length) {
                break
            }
            const worker = new Worker(path.join(__dirname, "html-to-doc.js"))
            worker.on("error", reject)
            worker.on("message", (message) => {
                handleMessage(message, worker)
            })
            worker.on("exit", (code) => {
                if (code !== 0) {
                    reject(new Error(`Scanner stopped with exit code ${code}`))
                } else {
                    // Worker #${i} completed their work in worker pool
                    activeWorkersCount--
                    if (activeWorkersCount <= 0) {
                        // No active workers left, we are done
                        resolve(indexedDocuments)
                    }
                }
            })

            activeWorkersCount++
            worker.postMessage(files[nextIndex++])
        }
    })
}
