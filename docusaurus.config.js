const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Poiyomi Shader',
  tagline: 'Creating a highly versatile shader for your Unity projects!',
  url: 'https://0xS3GF4VLT.github.io',
  baseUrl: '/poiyomi-site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/poi-circle.ico.png',
  organizationName: '0xS3GF4VLT', // Usually your GitHub org/user name.
  projectName: 'poiyomi-site', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
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
      theme: darkCodeTheme,
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
