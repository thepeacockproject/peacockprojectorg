export default {
    sidebar: [
        {
            type: "category",
            label: "Plugin Development",
            link: {
                type: "generated-index",
                slug: "/",
            },
            items: [
                "what-is-a-plugin",
                "prep",
                {
                    type: "category",
                    label: "Examples",
                    link: {
                        type: "generated-index",
                        slug: "/plugin-dev/examples",
                    },
                    items: [
                        "examples/hello-world",
                        "examples/contracts",
                        "examples/campaigns-playnext",
                    ],
                }
            ],
        },
    ],
}
