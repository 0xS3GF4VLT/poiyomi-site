const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Poiyomi Shader',
  tagline: 'Creating a highly versatile shader for your Unity projects!',
  url: 'https://poiyomi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/poi-circle.ico.png',
  organizationName: 'Poiyomi', // Usually your GitHub org/user name.
  projectName: 'poiyomi-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Poiyomi Shader',
      logo: {
        alt: 'Poiyomi Logo',
        src: 'img/poi-circle.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://patreon.com/poiyomi',
          label: 'Patreon',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Patreon',
              href: 'https://patreon.com/poiyomi',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/a3pPUjQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/poiyomi/PoiyomiToonShader',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Poiyomi, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
