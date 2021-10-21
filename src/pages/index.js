import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"
import OpenIcon from "../components/open-icon.svg"
import CustomLight from "../../static/img/home/CustomLight.svg"
import FastLight from "../../static/img/home/FastLight.svg"
import EasyLight from "../../static/img/home/EasyLight.svg"

const features = [
    {
        title: "Fast",
        imageUrl: <FastLight className={styles.featureImage} />,
        description: (
            <>
                Peacock is built to be fast. Latency, lag, and delays are not
                fun, which is why we put a focus on eliminating these factors
                wherever possible.
            </>
        ),
    },
    {
        title: "Easy to set up",
        imageUrl: <EasyLight className={styles.featureImage} />,
        description: (
            <>
                It's really easy to give Peacock a go. Assuming you own the
                game, you can join our Discord, and perform the less than 3
                minute set-up process.
            </>
        ),
    },
    {
        title: "Custom content",
        imageUrl: <CustomLight className={styles.featureImage} />,
        description: (
            <>
                We feature exclusive, custom content every month!
            </>
        ),
    },
]

function Feature({ imageUrl, title, description }) {
    return (
        <div className={clsx("col col--4", styles.feature)}>
            {imageUrl && (
                <div className="text--center">
                    {imageUrl}
                </div>
            )}
            <h3 className="text--center">{title}</h3>
            <p className="text--center">{description}</p>
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
                    <p className="hero__subtitle">
                        A replacement for HITMAN&trade; 3's servers that runs on
                        your machine.
                    </p>
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
                <section className={styles.bottomCardSpace}>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                "button button--primary button--lg",
                                styles.fixedWidthBtn,
                            )}
                            to="/testimonials"
                        >
                            Read what our users say
                        </Link>
                    </div>
                </section>
                <section className={clsx(styles.bottomCardSpace, styles.enableGrid)}>
                    <h3 className={clsx("text--center", styles.bottomCardSpace)}>Ready to give Peacock a shot?</h3>
                    <div className={clsx(styles.buttons, styles.bottomCardSpace)}>
                        <a href="/discord" className={clsx(
                            "button button--success button--lg",
                            styles.fixedWidthBtn
                        )}>Join our Discord! <OpenIcon className={styles.icon} /></a>
                    </div>
                    <small className="text--center">(Downloads are available on Discord, requires verification of game ownership)</small>
                </section>
            </main>
        </Layout>
    )
}

export default Home
