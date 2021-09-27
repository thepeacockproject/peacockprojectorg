/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "The Peacock Project",
    tagline:
        "A replacement for HITMAN&trade; 3's servers that runs on your machine.",
    url: "https://thepeacockproject.org",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "/favicon.ico",
    organizationName: "RDIL",
    projectName: "peacockprojectorg",
    baseUrlIssueBanner: false,
    themeConfig: {
        navbar: {
            logo: {
                src: "/ModifiedFinalLogo.png",
                alt: "Peacock Logo",
            },
            title: "The Peacock Project",
            items: [
                {
                    type: "doc",
                    position: "left",
                    docId: "home",
                    label: "Wiki",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Wiki",
                    items: [
                        {
                            label: "Bug Tracker",
                            to: "/wiki/bugs",
                        },
                        {
                            label: "Requested Features",
                            to: "/wiki/features",
                        },
                        {
                            label: "Knowledge Base",
                            to: "/wiki/intel",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Testimonials",
                            to: "/testimonials"
                        },
                        {
                            label: "Ghost Mode",
                            to: "/wiki/ghost-mode",
                        },
                        {
                            label: "Branding",
                            to: "/branding",
                        },
                        {
                            label: "Credits",
                            to: "/wiki/credits",
                        },
                    ],
                },
                {
                    title: "Other",
                    items: [
                        {
                            label: "Privacy Policy",
                            to: "/wiki/legal/privacy-policy"
                        },
                    ],
                }
            ],
            logo: {
                alt: "Peacock Feather Logo",
                src: "/ModifiedFinalLogo.png",
                // href: "https://thepeacockproject.org/branding",
            },
            copyright: `Copyright © ${new Date().getFullYear()} The Peacock Project. Not owned, affiliated with, or endorsed by IO Interactive. HITMAN™ is a registered trademark of Square Enix Group.`,
        },
    },
    themes: [
        [
            "@docusaurus/theme-classic",
            {
                customCss: require.resolve("./src/css/custom.css"),
            },
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                sidebarPath: require.resolve("./sidebars.js"),
                routeBasePath: "/wiki/",
                showLastUpdateTime: true,
            },
        ],
        "@docusaurus/plugin-content-pages",
        "docusaurus-lunr-search",
        require.resolve("./testimonialsPlugin.js"),
        [
            "@docusaurus/plugin-sitemap",
            {
                changefreq: "weekly",
            },
        ],
    ],
}
