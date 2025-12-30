
# Wat is het “Semantische Web”?

Naarmate de interesse in het semantische web groeit, wordt de term steeds vaker gebruikt door leveranciers en platforms. Sommige producten sluiten sterk aan bij de ideeën achter het semantische web, andere veel minder. Dat kan verwarrend zijn voor wie probeert te begrijpen wat het semantische web nu écht inhoudt.

Een bruikbare definitie is deze:
het semantische web is een **verzameling van standaarden en best practices** om **data én de betekenis van die data** via het web te delen, zodat **applicaties** ermee kunnen werken. Om dit goed te begrijpen, bekijken we die definitie stap voor stap.

## Een set van standaarden

Nog vóór Tim Berners-Lee het World Wide Web uitvond, bestonden er al krachtigere hypertextsystemen. Het grote verschil was dat Berners-Lee koos voor **eenvoudige, open specificaties** die hij publiceerde als **publieke standaarden**. Daardoor kon iedereen zelf webservers, browsers en webpagina’s bouwen, en groeide het web uit tot het grootste hypertext­systeem ooit.

Om deze standaarden te bewaken, richtte hij het World Wide Web Consortium (W3C) op. Ook het semantische web is gebaseerd op **W3C-standaarden**, zoals:

* het **RDF-datamodel**
* de **SPARQL-querytaal**
* **RDF Schema** en **OWL** voor vocabularia en ontologieën

Een product kan wel “semantisch” zijn in idee, maar als het deze standaarden niet gebruikt, kan het **geen deel uitmaken van het semantische web**. Net zoals een hypertext­systeem uit de jaren ’80 geen webpagina’s kon linken zonder HTML of HTTP, kan een systeem vandaag niet deelnemen aan het semantische web zonder RDF, SPARQL en aanverwante standaarden.


## Best practices voor het delen van data via het web

Het oorspronkelijke web was vooral ontworpen voor **menselijk leesbare documenten**. Wil je bijvoorbeeld een vlucht boeken, dan ga je naar een website, vul je een formulier in en lees je het resultaat op het scherm.

Vergelijkingssites doen dit anders: zij gebruiken programma’s die webpagina’s ophalen en automatisch de nodige informatie uit de HTML halen. Dit proces heet **screen scraping**. Dat is kwetsbaar: zodra een website van structuur verandert, moet de code aangepast worden.

Om dit probleem op te lossen, introduceerde Berners-Lee het idee van **Linked Data**. Dit is een set **best practices** om data rechtstreeks via het web te delen in een **machineleesbaar formaat**, zonder screen scraping. Denk aan een agenda-app die automatisch vluchtgegevens kan ophalen van verschillende luchtvaartmaatschappijen in één uniform formaat.

Deze best practices raden onder andere aan:

* het gebruik van **URI’s** om dingen te benoemen
* het gebruik van **RDF** om data te structureren
* het gebruik van **SPARQL** om data op te vragen

Samen vormen ze de technische basis voor een interoperabel semantisch web.
## En de betekenis van die data

Het woord *semantiek* verwijst naar **betekenis**. Linked Data en de bijhorende standaarden maken het eenvoudiger om data te delen, maar ze dragen ook bij aan het vastleggen van betekenis.

URI’s geven al een eerste vorm van context. Zelfs als je niet weet wat
`OGI04ON#concept` betekent, zie je aan de URI
`https//onderwijsaanbod.odisee.be/syllabi/n/OGI04ON#concept`
dat de term afkomstig is van het onderwijsaanbod van Odisee.

Het volledig laten “begrijpen” van betekenis door computers blijft moeilijk, maar met **OWL (Web Ontology Language)** kunnen we al **waardevolle stukjes semantiek** vastleggen. Bijvoorbeeld:

* dat de relatie *partner van* **symmetrisch** is
* dat postcodes een **subset** zijn van postadressen
* dat *verkopen* het tegengestelde is van *kopen*

Door dit soort kennis expliciet te modelleren, kunnen systemen **betere conclusies trekken**, data slimmer combineren en rijkere queries uitvoeren. Dat is waar het semantische web verder gaat dan alleen data-uitwisseling: het maakt **betekenis expliciet en herbruikbaar**.

Het semantische web steunt op open standaarden en goede afspraken om data en betekenis uitwisselbaar te maken. Linked Data bouwt verder op deze ideeën en laat zien hoe ze in de praktijk toegepast worden op het web. In het volgende hoofdstuk gaan we dieper in wat het verschil is tussen Linked Data en het semantisch web.

**Bron:** *Learning SPARQL* (O’Reilly), hoofdstuk *What Exactly Is the Semantic Web?*, p. 20