import { defineConfig } from 'vitepress';

const title = 'Solidity Toolkit | NONCEPT';
const description = 'A toolkit for Solidity Smart Contracts development.';
const url = 'https://noncept.github.io/solidity-toolkit';
const image = 'https://noncept.github.io/solidity-toolkit/images/solidity-toolkit.png';
const repo = 'https://github.com/noncept/solidity-toolkit.git';

export default defineConfig({
  title: 'Solidity Toolkit',
  titleTemplate: 'NONCEPT',
  description: description,
  base: '/solidity-toolkit/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/solidity-toolkit/favicon.ico' }],
    ['meta', { name: 'title', property: 'og:title', content: title }],
    ['meta', { name: 'description', property: 'og:description', content: description }],
    ['meta', { name: 'image', property: 'og:image', content: image }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: image }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'twitter:title', content: title }],
    ['meta', { property: 'twitter:description', content: description }],
    ['meta', { property: 'twitter:image', content: image }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    siteTitle: 'Solidity Toolkit',
    socialLinks: [{ icon: 'github', link: repo }],
    search: {
      provider: 'local',
    },
  },
});
