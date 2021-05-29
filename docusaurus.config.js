/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "The Peacock Project",
    tagline: "The Peacock Project Wiki",
    url: "https://thepeacockproject.org",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "null",
    organizationName: "RDIL",
    projectName: "peacockprojectorg",
    themeConfig: {
        navbar: {
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
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} The Peacock Project. Not owned, affiliated with, or endorsed by IO Interactive. HITMAN™ is a registered trademark of IO Interactive.`,
        },
    },
    themes: [
        [
            "@docusaurus/theme-classic",
            {
                customCss: require.resolve("./src/css/custom.css"),
            }
        ]
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
    ],
}
