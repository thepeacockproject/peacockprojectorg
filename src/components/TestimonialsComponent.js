import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "../pages/styles.module.css"

function TestimonialsComponent({ data }) {
    return (
        <Layout
            title={`Testimonials`}
            description="What our users say about Peacock."
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Testimonials</h1>
                    <p className="hero__subtitle">
                        What our users say about Peacock.
                    </p>
                </div>
            </header>
            <main className={styles.bottomCardSpace}>
                {data && data.length > 0 && data.map((obj) => (
                    <section key={obj.author}>
                        <div className="container">
                            <div className={clsx("card item shadow--md", styles.cardSpace)}>
                                <div className="card__body">
                                    <p>"{obj.text}"</p>
                                    <p>- {obj.author}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </Layout>
    )
}

export default TestimonialsComponent
