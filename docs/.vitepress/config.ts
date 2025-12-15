import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/POP/',
  lang: 'nl-BE',
  title: 'POP',
  description: 'Persoonlijk Ontwikkelingsplan',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Actieplan', link: '/actieplan' },
      { text: 'Einddoelen', link: '/einddoelen' },
      { text: 'POP-logboek', link: '/poplogboek' },
      { text: 'Eindrapport', link: '/eindrapportering' },
    ],

    sidebar: [
      {
        text: 'POP Overzicht',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Actieplan', link: '/actieplan' },
          { text: 'Einddoelen', link: '/einddoelen' },
          { text: 'POP-logboek', link: '/poplogboek' },
          { text: 'Eindrapportering', link: '/eindrapportering' },

        ],
      },
    ],
  },
});
