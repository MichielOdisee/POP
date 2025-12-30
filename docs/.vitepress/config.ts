import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  lang: 'nl-BE',
  title: 'POP',
  description: 'Persoonlijk Ontwikkelingsplan',

  themeConfig: {
    nav: [
      { text: 'Introductie', link: '/' },
      { text: 'Semantisch Web', link: '/semantischweb' }, 
      { text: 'Linked Data', link: '/linkeddata' }, 
      { text: 'RDF', link: '/rdf' },
      { text: 'SPARQL', link: '/sparql' },      
      { text: 'RDF Schema en OWL', link: '/owlenrdfschema' },
    ],

    sidebar: [
      
      {
        text: 'Hoofdstuk 1',
        items: [
          { text: 'Introductie', link: '/' },
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
