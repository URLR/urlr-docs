/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mySidebar: [
    'intro', 
    {
      type: 'category',
      label: 'Domaines personnalisés', 
      items: [
        {
          type: 'doc',
          id: 'custom-domain/config',
          label: 'Configuration'
        }
      ],
    },
    {
      type: 'category',
      label: 'Imports', 
      items: [
        {
          type: 'doc',
          id: 'imports/link',
          label: 'Liens'
        }
      ],
    },
    {
      type: 'category',
      label: 'Intégrations', 
      items: [
        {
          type: 'doc',
          id: 'integrations/webhooks',
          label: 'Webhooks'
        }
      ],
    },
  ],
};
module.exports = sidebars;
