import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  lang: 'nl-BE',
  title: 'Open Kennis',
  description: 'Open Kennis',

  themeConfig: {
    nav: [
      { text: 'Open Kennis', link: '/' },
      {
        text: 'Onderwerpen',
        items: [
          {
            text: 'Interoperabiliteit & het Semantische Web',
            link: '/interoperabiliteit-semantisch-web/intro',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Open Kennis',
        items: [
          { text: 'Over deze website', link: '/' },
        ],
      },
      {
        text: 'Interoperabiliteit & het Semantische Web',
        items: [
          {
            text: 'Introductie Interoperabiliteit & het Semantische Web ',
            link: '/interoperabiliteit-semantisch-web/intro',
          },
          {
            text: 'Fundamenten',
            items: [
              {
                text: 'Het Semantische Web',
                link: '/interoperabiliteit-semantisch-web/fundamenten/semantischweb',
              },
              {
                text: 'Linked Data',
                link: '/interoperabiliteit-semantisch-web/fundamenten/linkeddata',
              },
              {
                text: 'RDF',
                link: '/interoperabiliteit-semantisch-web/fundamenten/rdf',
              },
              {
                text: 'SPARQL',
                link: '/interoperabiliteit-semantisch-web/fundamenten/sparql',
              },
              {
                text: 'RDF Schema en OWL',
                link: '/interoperabiliteit-semantisch-web/fundamenten/owlenrdfschema',
              },
            ],
          },
          {
            text: 'Verdieping',
            items: [
              {
                text: 'Inleiding verdieping',
                link: '/interoperabiliteit-semantisch-web/verdieping/',
              },
            ],
          },
        ],
      },
    ],
  },
});
