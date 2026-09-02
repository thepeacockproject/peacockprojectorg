export default {
    sidebar: [
        {
            type: "doc",
            label: "Home",
            id: "home"
        },
        {
            type: "doc",
            id: "intel/what-is-peacock"
        },
        {
            type: "category",
            label: "User Guide",
            link: {
                type: "generated-index",
                slug: "intel"
            },
            items: [
                "intel/requirements",
                "intel/installation",
                {
                    type: "category",
                    label: "Linux and macOS",
                    items: [
                        "guides/linux-setup",
                        "guides/macos-crossover-setup",
                    ]
                },
                "intel/updating",
                "intel/autosplitter-setup",
                "intel/loadout-profiles-elp",
                "features/progression-transfer",
                "intel/faq",
                {
                    type: "category",
                    label: "Troubleshooting Guides",
                    link: {
                        type: "generated-index",
                        slug: "troubleshooting"
                    },
                    items: [
                        "troubleshooting/fix-port-in-use",
                        "troubleshooting/missing-strings",
                        "troubleshooting/patcher-errors"
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Features",
            link: {
                type: "generated-index",
                slug: "features"
            },
            items: [
                "features/elusive-targets",
                "features/plugins",
                "features/progression-transfer"
            ]
        },
        {
            type: "doc",
            id: "custom-content"
        },
        {
            type: "doc",
            id: "ghost-mode"
        },
        {
            type: "doc",
            id: "initiatives"
        },
        {
            type: "doc",
            id: "roadmaps"
        },
        {
            type: "doc",
            id: "credits"
        },
        {
            type: "link",
            href: "/plugins",
            label: "Plugin Development"
        },
        {
            type: "category",
            label: "Legal",
            items: ["legal/privacy-policy", "legal/terms-of-service"]
        }
    ]
}
