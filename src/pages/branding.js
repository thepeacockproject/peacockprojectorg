import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "./styles.module.css"

export default function Branding() {
    return (
        <Layout
            title="Branding"
            description="Peacock's branding guidelines, including logos, names, and other details."
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Branding</h1>
                    <p className="hero__subtitle">
                        Guidelines for Peacock's branding.
                    </p>
                </div>
            </header>
            <main className={styles.brandingText}>
                <section>
                    <p>Being a community project, we don't really have too many rules regarding our media presence, but there are a few things that you should in mind, when you reference our project, use our logo, or promote us.</p>
                </section>
                <section>
                    <h2>Logo</h2>
                    <p>Our logo (The Peacock Feather Logo), may be obtained below (free of charge), provided you agree to the following terms:</p>
                    <ul>
                        <li>Do not edit, modify, distort, recolor, or reconfigure The Peacock Feather Logo in any way, except for rotating it or resizing it for use in a larger picture.</li>
                        <li>You may not claim you created it, or use it outside of directly referencing or promoting our project.</li>
                        <li>In the case that you use the logo inside a larger picture, you may not overlay it with anything. It must be completely on top of all other image layers.</li>
                        <li>You may not use the logo to spread false information, rumors, or leaks relating to Peacock or HITMAN&trade;.</li>
                        <li>The logo may not be used for any commercial purposes without prior written authorization from a project staff member.</li>
                    </ul>
                    <div className="container">
                        <div className={clsx("card item shadow--md", styles.cardSpace)}>
                            <div className="card__body">
                                <img aria-describedby="logo-caption" src="/ModifiedFinalLogo.png" alt="Peacock Feather Logo" width={300} height={144} />
                                <p id="logo-caption">The Peacock Feather Logo, made by rdil.</p>
                                <a href="https://thepeacockproject.org/ModifiedFinalLogo.png" target="_blank" rel="noopener noreferrer">.PNG</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.cardSpace}>
                    <h2>Naming</h2>
                    <p>Please refer to Peacock using one of the following terms:</p>
                    <ul>
                        <li>The Peacock Project</li>
                        <li>Peacock</li>
                    </ul>
                    <p>To prevent confusion, please avoid using these terms:</p>
                    <ul>
                        <li>peacock</li>
                        <li>Peacock Server</li>
                        <li>The Peacock Server</li>
                        <li>Peacock Emulator</li>
                    </ul>
                </section>
            </main>
        </Layout>
    )
}