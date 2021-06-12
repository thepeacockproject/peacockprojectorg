const fs = require("fs/promises")

module.exports = function (context) {
    return {
        name: "docusaurus-peacock-testmonials-plugin",

        async loadContent() {
            return JSON.parse((await fs.readFile("static/testimonials.json")).toString())
        },

        async contentLoaded({ content, actions }) {
            const testiDataPath = await actions.createData(
                "testimonialsData.json",
                JSON.stringify(content),
            )

            actions.addRoute({
                path: "/testimonials",
                component: "@site/src/components/TestimonialsComponent",
                modules: {
                    // propName -> JSON file path
                    data: testiDataPath,
                },
                exact: true,
            })
        },
    }
}