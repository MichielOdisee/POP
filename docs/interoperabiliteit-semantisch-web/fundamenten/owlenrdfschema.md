# RDF Schema en OWL

*Betekenis expliciet maken in het semantische web*

RDF laat ons toe om dingen vast te leggen in de vorm van triples. Maar RDF alleen volstaat niet om 'interoperabele' systemen te bouwen. Het beschrijft *dat* er relaties bestaan, maar niet wat die relaties betekenen of hoe ze geïnterpreteerd moeten worden.

Zodra data gedeeld wordt tussen meerdere systemen, organisaties of domeinen, ontstaat de nood om betekenis **expliciet vast te leggen**. Dat is precies de rol van **RDF Schema (RDFS)** en **OWL (Web Ontology Language)**. Deze standaarden bouwen voort op RDF en maken het mogelijk om vocabularia en ontologieën te definiëren: formele afspraken over begrippen, relaties en regels.

## Waarom RDF alleen niet voldoende is

Beschouw de volgende RDF-triple:

```turtle
ex:Michiel ex:volgt ex:POP .
```

Voor een mens is de betekenis waarschijnlijk duidelijk. Voor een machine is dit echter te abstract: drie resources verbonden door een relatie. Zonder bijkomende informatie weet een systeem niet of `ex:Michiel` een persoon is, een dier of erger, een webstudent. Of `ex:POP` een vak voorstelt, of wat de relatie `ex:volgt` precies inhoudt.

Wanneer zulke data wordt gecombineerd met andere datasets, kan dit leiden tot misinterpretaties. Interoperabiliteit vereist daarom dat deze semantische context **niet impliciet blijft**, maar expliciet wordt gemodelleerd.


## RDF Schema

**RDF Schema (RDFS)** is de eerste semantische uitbreidingslaag bovenop RDF. Met RDFS kan je de basisstructuur van een vocabularium vastleggen. Het biedt constructies om klassen, subklassen en eigenschappen te beschrijven, en om relaties tussen die elementen te definiëren.

Met RDFS kan je onder andere aangeven:

* welke **klassen** bestaan binnen een domein
* hoe klassen zich tot elkaar verhouden via **subklassen**
* welke **eigenschappen** gebruikt worden
* op welke types resources die eigenschappen van toepassing zijn

Door deze structuur toe te voegen, kan een systeem eenvoudige conclusies trekken op basis van de data, zonder dat alles expliciet hoeft te worden opgeslagen.

## Domein, bereik en afleiding

Een belangrijk concept binnen RDFS is het vastleggen van het domein en bereik van eigenschappen. Hiermee beschrijf je welk type resource typisch als subject of object voorkomt bij een bepaalde relatie.

Het domein zegt wie iets doet, en het bereik zegt wat er gedaan wordt.
Bijvoorbeeld: bij de relatie 'volgt' is degene die volgt een student, en wat gevolgd wordt een vak.

Wanneer een eigenschap een domein Student en een bereik Vak heeft, kan een systeem uit het gebruik van die eigenschap automatisch afleiden tot welke klassen de betrokken resources behoren. Ziet een systeem bijvoorbeeld dat Michiel POP volgt, dan kan het besluiten dat Michiel een student is en POP een vak.

Dit automatisch afleiden noemt men **inferentie**: het afleiden van nieuwe kennis op basis van bestaande data en semantische regels.

RDFS-inferentie blijft bewust beperkt en voorspelbaar. Ze voegt structuur toe, maar vermijdt complexe logica. Dat maakt RDF Schema geschikt als eerste stap in semantisch modelleren.


## OWL

Voor complexere domeinen is RDF Schema vaak niet voldoende. **OWL (Web Ontology Language)** breidt de mogelijkheden verder uit en laat toe om rijkere semantiek vast te leggen.

Met OWL kan je bijvoorbeeld formeel beschrijven:

* dat twee klassen **equivalent** zijn
* dat bepaalde klassen elkaar **uitsluiten**
* dat een eigenschap specifieke kenmerken heeft, zoals symmetrie
* dat een relatie exact één of meerdere waarden mag hebben

OWL maakt het mogelijk om **logische regels** te koppelen aan je datamodel. Hierdoor kunnen systemen niet alleen structureren, maar ook controleren, afleiden en consistentie bewaken binnen een kennisgraaf.


## Wanneer RDF Schema volstaat en wanneer OWL nodig wordt

In veel toepassingen volstaat RDF Schema om betekenis voldoende expliciet te maken. Dit geldt vooral wanneer de focus ligt op gegevensdeling, hergebruik en eenvoudige inferentie.

OWL wordt relevant wanneer het domein inhoudelijk complexer wordt en wanneer betekenis niet langer vrijblijvend mag zijn. In zulke gevallen is het belangrijk dat systemen dezelfde aannames maken en dat tegenstrijdigheden opgespoord kunnen worden.

In de praktijk worden RDFS en OWL vaak gecombineerd: RDF Schema legt de basisstructuur vast, terwijl OWL gericht wordt ingezet om semantische nuances toe te voegen waar nodig.


## Ontologieën als gedeelde afspraken

Een **ontologie** is meer dan een technisch model. Het is een gedeelde, expliciete beschrijving van hoe een domein begrepen wordt. Door ontologieën te publiceren en te hergebruiken, kunnen verschillende systemen data uitwisselen zonder vooraf bilaterale afspraken te maken.

Dit maakt ontologieën een cruciaal instrument voor interoperabiliteit binnen het semantische web, zeker wanneer data over organisatie- of landsgrenzen heen gebruikt wordt.

## De rol van RDFS en OWL binnen het semantische web

Samen met RDF en SPARQL vormen RDFS en OWL de kern van de semantische webstack:

* RDF beschrijft **feiten**
* RDFS en OWL beschrijven **betekenis en regels**
* SPARQL maakt die betekenis **bevraagd en bruikbaar**

Door deze combinatie ontstaat een web waarin data niet alleen gedeeld wordt, maar ook correct geïnterpreteerd kan worden door verschillende systemen.
