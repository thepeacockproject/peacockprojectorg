import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"
import OpenIcon from "../components/open-icon.svg"
import CustomLight from "../../static/img/home/CustomLight.svg"
import FastLight from "../../static/img/home/FastLight.svg"
import EasyLight from "../../static/img/home/EasyLight.svg"
import Translate, { translate } from "@docusaurus/Translate"

const features = [
    {
        title: translate({
            message: "Fast",
            description: "Homepage 'fast' feature header",
        }),
        imageUrl: <FastLight className={styles.featureImage} />,
        description: (
            <Translate
                id="homepage.fastDescription"
                description="The homepage's 'Fast' feature description"
            >
                Peacock is built to be fast. Latency, lag, and delays are not
                fun, which is why we put a focus on eliminating these factors
                wherever possible.
            </Translate>
        ),
    },
    {
        title: translate({
            message: "Easy to set up",
            description: "Homepage 'Easy to set up' feature header",
        }),
        imageUrl: <EasyLight className={styles.featureImage} />,
        description: (
            <Translate
                id="homepage.easyToSetUpDescription"
                description="The homepage's 'Easy to set up' feature description"
            >
                It's really easy to give Peacock a go. Assuming you own the
                game, you can join our Discord, and perform the less than 3
                minute set-up process.
            </Translate>
        ),
    },
    {
        title: translate({
            message: "Custom content",
            description: "Homepage 'Custom content' feature header",
        }),
        imageUrl: <CustomLight className={styles.featureImage} />,
        description: (
            <Translate
                id="homepage.customContentDescription"
                description="The homepage's 'Custom content' feature description"
            >
                We feature exclusive, custom content every month!
            </Translate>
        ),
    },
]

function Feature({ imageUrl, title, description }) {
    return (
        <div className={clsx("col col--4", styles.feature)}>
            {imageUrl && <div className="text--center">{imageUrl}</div>}
            <h3 className="text--center">{title}</h3>
            <p className="text--center">{description}</p>
        </div>
    )
}

function Home() {
    return (
        <Layout
            title={"Home"}
            description={
                "Homepage for The Peacock Project, a replacement for HITMAN&trade;'s servers that runs on your machine."
            }
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">The Peacock Project</h1>
                    <p className="hero__subtitle">
                        <Translate
                            id="homepage.subtitle"
                            description="The homepage's subtitle."
                        >
                            A replacement for HITMAN&trade;'s servers that runs
                            on your machine.
                        </Translate>
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
                                styles.fixedWidthBtn
                            )}
                            to="/testimonials"
                        >
                            <Translate
                                id="homepage.testimonialsButton"
                                description="The homepage's 'read what our users say' button."
                            >
                                Read what our users say
                            </Translate>
                        </Link>
                    </div>
                </section>
                <section
                    className={clsx(styles.bottomCardSpace, styles.enableGrid)}
                >
                    <h3
                        className={clsx("text--center", styles.bottomCardSpace)}
                    >
                        <Translate
                            id="homepage.joinDiscordLabel"
                            description="The text on top of the go to Discord button on the home page."
                        >
                            Ready to give Peacock a shot?
                        </Translate>
                    </h3>
                    <div
                        className={clsx(styles.buttons, styles.bottomCardSpace)}
                    >
                        <a
                            href="/discord"
                            className={clsx(
                                "button button--success button--lg",
                                styles.fixedWidthBtn
                            )}
                        >
                            <Translate
                                id="homepage.joinDiscordButton"
                                description="The text on the join our Discord button on the home page."
                            >
                                Join our Discord!
                            </Translate>{" "}
                            <OpenIcon className={styles.icon} />
                        </a>
                    </div>
                    <small className="text--center">
                        <Translate
                            id="homepage.joinDiscordButtonBelowText"
                            description="The text below the join our Discord button on the home page."
                        >
                            (Downloads are available on Discord)
                        </Translate>
                    </small>
                </section>
            </main>
        </Layout>
    )
}

export default Home
