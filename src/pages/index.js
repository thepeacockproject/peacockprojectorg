import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"

const features = [
    {
        title: "Fast",
        imageUrl: "img/fast.svg",
        description: (
            <>
                Peacock is built to be fast. Latency, lag, and delays are not fun, which is why we put a focus on eliminating these factors wherever possible.
            </>
        ),
    },
    {
        title: "Easy to set up",
        imageUrl: "img/easy.svg",
        description: (
            <>
                It's really easy to give Peacock a go. Assuming you own the game, you can join our Discord, and perform the less then 3 minute set-up process.
            </>
        ),
    },
    {
        title: "Custom content",
        imageUrl: "img/custom.svg",
        description: (
            <>
                Most players and fans of the game can agree that content from the main game is getting a bit stale. We feature exclusive, custom content every month!
            </>
        ),
    },
]

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <div className={clsx("col col--4", styles.feature)}>
            {imgUrl && null /*(
                <div className="text--center">
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )*/}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function Home() {
    return (
        <Layout
            title={`Home`}
            description="Homepage for The Peacock Project, a replacement for HITMAN&trade; 3's servers that runs on your machine."
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">The Peacock Project</h1>
                    <p className="hero__subtitle">A replacement for HITMAN&trade; 3's servers that runs on your machine.</p>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    )
}

export default Home
