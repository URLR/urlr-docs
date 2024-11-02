// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation | URLR',
  tagline: 'European and GDPR-compliant link shortener 🇪🇺',
  url: 'https://docs.urlr.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'urlr', // Usually your GitHub org/user name.
  projectName: 'urlr-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
      }),
    ],
    // Redoc preset
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "https://urlr.me/openapi.yaml",
            route: "/api-reference/v1/",
          },
          {
            spec: "https://urlr.me/openapi-v0.yaml",
            route: "/api-reference/v0/",
          },
        ],
        theme: {
          primaryColor: "#48aefa",
          primaryColorDark: "#48aefa",
        },
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-matomo',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'URLR',
        logo: {
          alt: 'Réducteur de lien',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'dropdown',
            label: 'API Reference',
            position: 'left',
            items: [
              {
                label: 'V1',
                href: '/api-reference/v1/',
              },
              {
                label: 'V0',
                href: '/api-reference/v0/',
              },
            ],
          },
          {
            type: 'localeDropdown',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'URLR',
            items: [
              {
                label: 'Site web',
                href: 'https://urlr.me',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/urlr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/URLRME',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/urlrme',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/URLR',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} URLR. Construit avec Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php']
      },
      matomo: {
        matomoUrl: 'https://app-14e6b143-1f29-4987-8e23-db120efbcad8.cleverapps.io/',
        siteId: '3',
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
      },
    }),
    i18n: {
      defaultLocale: 'fr',
      locales: ['fr', 'en'],
    },
};

module.exports = config;
