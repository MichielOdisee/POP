import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  lang: 'nl-BE',
  title: 'Open Kennis',
  description: 'Gratis cursus over open data, interoperabiliteit en Linked Data',

  themeConfig: {
    nav: [
      { text: 'Open Kennis', link: '/' },
      { text: 'Cursusintroductie', link: '/intro' },
      { text: 'Semantisch Web', link: '/semantischweb' }, 
      { text: 'Linked Data', link: '/linkeddata' }, 
      { text: 'RDF', link: '/rdf' },
      { text: 'SPARQL', link: '/sparql' },      
      { text: 'RDF Schema en OWL', link: '/owlenrdfschema' },
    ],

    sidebar: [
      {
        text: 'Open Kennis',
        items: [
          { text: 'Over deze website', link: '/' },
        ],
      },
      {
        text: 'Interoperabiliteit & het Semantische Web ',
        items: [
          { text: 'Introductie cursus', link: '/intro' },
          { text: 'Semantisch Web', link: '/semantischweb' },
          { text: 'Linked Data', link: '/linkeddata' },
          { text: 'RDF', link: '/rdf' },
          { text: 'SPARQL', link: '/sparql' },
          { text: 'RDF Schema en OWL', link: '/owlenrdfschema' },
        ],
      },
    ],
  },
});
