export default {
    sidebar: [
        {
            type: "doc",
            label: "Home",
            id: "home",
        },
        {
            type: "doc",
            id: "intel/what-is-peacock",
        },
        {
            type: "category",
            label: "User Guide",
            link: {
                type: "generated-index",
                slug: "intel",
            },
            items: [
                "intel/requirements",
                "intel/installation",
                "guides/linux-setup",
                "intel/updating",
                "intel/autosplitter-setup",
                "intel/loadout-profiles-elp",
                "intel/faq",
                {
                    type: "category",
                    label: "Troubleshooting Guides",
                    link: {
                        type: "generated-index",
                        slug: "troubleshooting",
                    },
                    items: [
                        "troubleshooting/fix-port-in-use"
                    ],
                },
            ],
        },
        {
            type: "doc",
            id: "custom-content",
        },
        {
            type: "doc",
            id: "ghost-mode",
        },
        {
            type: "doc",
            id: "initiatives",
        },
        {
            type: "doc",
            id: "roadmaps",
        },
        {
            type: "doc",
            id: "credits",
        },
        {
            type: "category",
            label: "Legal",
            items: ["legal/privacy-policy", "legal/terms-of-service"],
        },
    ],
}
