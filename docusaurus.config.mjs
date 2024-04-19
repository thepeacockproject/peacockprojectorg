import { createRequire } from "module"

const require = createRequire(import.meta.url)

/** @type {import("@docusaurus/types").DocusaurusConfig} */
export default {
    title: "The Peacock Project",
    tagline:
        "A replacement for the HITMAN&trade; World of Assassination (1, 2, and 3)'s servers that runs on your machine.",
    url: "https://thepeacockproject.org",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "/favicon.ico",
    organizationName: "thepeacockproject",
    projectName: "peacockprojectorg",
    baseUrlIssueBanner: false,
    i18n: {
        defaultLocale: "en",
        locales: ["en", "nl", "pt-BR", "zh"],
        localeConfigs: {
            en: {
                htmlLang: "en-US"
            },
            nl: {
                htmlLang: "nl-NL"
            },
            "pt-BR": {
                htmlLang: "pt-BR"
            },
            zh: {
                htmlLang: "zh-CN"
            }
        }
    },
    themeConfig: {
        metadata: [
            {
                name: "keywords",
                content: "peacock,project,hitman,server,replacement,offline"
            }
        ],
        navbar: {
            logo: {
                src: "/img/feather.png",
                alt: "Peacock Logo"
            },
            title: "The Peacock Project",
            items: [
                {
                    type: "doc",
                    position: "left",
                    docId: "home",
                    label: "Wiki"
                },
                {
                    href: "/wiki/intel/installation",
                    label: "Installation Guide",
                    position: "left"
                },
                {
                    href: "https://github.com/thepeacockproject",
                    label: "GitHub",
                    position: "left"
                },
                {
                    href: "https://discord.gg/F8qQTfnajw",
                    label: "Discord",
                    position: "left"
                },
                {
                    type: "localeDropdown",
                    position: "right"
                }
            ]
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Wiki",
                    items: [
                        {
                            label: "Knowledge Base",
                            to: "/wiki/intel"
                        },
                        {
                            label: "Help/Bugs/Feature Requests (in our Discord)",
                            href: "https://discord.gg/F8qQTfnajw"
                        },
                        {
                            label: "Plugin Development",
                            to: "/plugins"
                        }
                    ]
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Ghost Mode",
                            to: "/wiki/ghost-mode"
                        },
                        {
                            label: "Branding",
                            to: "/branding"
                        },
                        {
                            label: "Credits",
                            to: "/wiki/credits"
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/thepeacockproject"
                        }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        {
                            label: "Privacy Policy",
                            to: "/wiki/legal/privacy-policy"
                        },
                        {
                            label: "Terms of Service",
                            to: "/wiki/legal/terms-of-service"
                        }
                    ]
                }
            ],
            logo: {
                alt: "Peacock Feather Logo",
                src: "/img/feather.png",
                href: "https://thepeacockproject.org/branding"
            },
            copyright: `Copyright © ${new Date().getFullYear()} The Peacock Project. Not owned by, affiliated with, or endorsed by IO Interactive.<br /><br /><small class="ioi-copyright">HITMAN 3 © 2020 IO Interactive A/S. HITMAN™ 2 © 2018 IO Interactive A/S. HITMAN™ © 2019 IO Interactive A/S. IO Interactive, IOI logos, HITMAN, HITMAN logos, and WORLD OF ASSASSINATION are trademarks or registered trademarks owned by or exclusively licensed to IO Interactive A/S. All other trademarks are the property of their respective owners.</small>`
        },
        docs: {
            sidebar: {
                hideable: true
            }
        },
        algolia: {
            appId: "6G48SB1UKC",
            apiKey: "ce01e2bfd0860bfa392b4ad2720b9f8a",
            indexName: "thepeacockproject",
            contextualSearch: true,
            searchPagePath: "search",
            insights: false
        }
    },
    themes: [
        [
            "@docusaurus/theme-classic",
            {
                customCss: require.resolve("./src/css/custom.css")
            }
        ],
        "@docusaurus/theme-search-algolia"
    ],
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                sidebarPath: require.resolve("./sidebars.mjs"),
                routeBasePath: "/wiki/",
                editUrl: ({ locale, docPath }) => {
                    if (locale !== `en`) {
                        return `https://crowdin.com/project/peacock/${locale}`
                    }
                    return `https://github.com/thepeacockproject/peacockprojectorg/edit/main/docs/${docPath}`
                },
                showLastUpdateTime: true
            }
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "plugin-dev",
                sidebarPath: require.resolve("./sidebarsPluginDev.mjs"),
                routeBasePath: "/plugins/",
                path: "plugin-dev",
                editUrl: ({ locale, docPath }) => {
                    if (locale !== `en`) {
                        return `https://crowdin.com/project/peacock/${locale}`
                    }
                    return `https://github.com/thepeacockproject/peacockprojectorg/edit/main/plugin-dev/${docPath}`
                },
                showLastUpdateTime: true
            }
        ],
        "@docusaurus/plugin-content-pages",
        [
            "@docusaurus/plugin-sitemap",
            {
                changefreq: "weekly"
            }
        ],
        [
            "@docusaurus/plugin-ideal-image",
            {
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2
            }
        ]
    ]
}
