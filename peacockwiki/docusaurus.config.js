/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'The Peacock Project Wiki',
  tagline: 'The Peacock Project Wiki',
  url: 'https://thepeacockproject.org',
  baseUrl: '/wiki/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: "null",
  organizationName: 'RDIL',
  projectName: 'peacockprojectorg',
  themeConfig: {
    navbar: {
      title: 'Peacock Wiki',
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Peacock Project.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
