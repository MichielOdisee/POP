import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/POP/',                 
  lang: 'nl-BE',
  title: 'POP',
  description: 'Persoonlijk Ontwikkelingsplan',

  themeConfig: {
    nav: [
      { text: 'POP', link: '/' },
      { text: 'Document', link: '/example' },
    ],

    sidebar: [
      {
        text: 'Inhoud',
        items: [
          { text: 'POP', link: '/' },
          { text: 'Document', link: '/example' },
        ],
      },
    ],
  },
});
