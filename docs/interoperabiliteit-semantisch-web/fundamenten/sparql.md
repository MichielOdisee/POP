# SPARQL

Waar **RDF** beschrijft *hoe* we data modelleren, beschrijft **SPARQL** *hoe* we die data kunnen **opzoeken, combineren en analyseren**. SPARQL is de standaard **querytaal** van het semantische web, vergelijkbaar met de rol die SQL speelt voor relationele databanken.

De naam staat voor **SPARQL Protocol and RDF Query Language**. Net zoals RDF een W3C-standaard is, geldt dat ook voor SPARQL. Dat betekent dat elke dataset die RDF gebruikt, in principe bevraagd kan worden met dezelfde querytaal, ongeacht waar die data vandaan komt. Dat is weer een cruciale bouwsteen voor die **interoperabiliteit** binnen het semantische web. 

## Van triples naar patronen

RDF-data bestaat uit **triples**: subject – predicaat – object. SPARQL werkt door **patronen van triples** te beschrijven die je zoekt in een dataset.

Je vraagt dus niet:

> “Geef mij een tabel met deze kolommen”

maar eerder:

> “Zoek alle combinaties van triples die aan dit patroon voldoen”

Een SPARQL-query beschrijft **welke relaties en waarden samen moeten voorkomen**, niet hoe ze fysiek zijn opgeslagen. Dat maakt SPARQL bijzonder flexibel bij het combineren van data uit verschillende bronnen.


## Een eerste SPARQL-query

Vertrek opnieuw van het voorbeeld uit RDF:

```turtle
@prefix ex: <http://example.org/> .

ex:Michiel ex:volgt ex:POP .
```

Stel dat we willen weten **wie welk vak volgt**. In SPARQL schrijven we dan:

```sparql
PREFIX ex: <http://example.org/>

SELECT ?student ?vak
WHERE {
  ?student ex:volgt ?vak .
}
```

Wat gebeurt hier?

* `PREFIX` werkt net zoals bij Turtle en maakt URI’s leesbaar
* `SELECT` bepaalt **welke variabelen** je als resultaat wil zien
* `WHERE` bevat een **triple pattern**
* Variabelen herken je aan het `?`-teken

De query zegt letterlijk:

> “Zoek alle triples waarin *iets* (`?student`) de relatie `ex:volgt` heeft met *iets anders* (`?vak`)”

Het resultaat is geen tabel uit één databank, maar een **set bindings** die voldoet aan dit patroon.


## SPARQL als verbindende laag

Een belangrijk verschil met SQL is dat SPARQL **niet vertrekt van één gesloten schema**. Je hoeft vooraf niet exact te weten welke tabellen of kolommen bestaan. In plaats daarvan werk je met **URI’s en relaties** die betekenis dragen.

Dat maakt SPARQL bijzonder geschikt om:

* data uit **meerdere datasets** te combineren
* datasets te bevragen die je zelf niet beheert
* verbanden te leggen die niet expliciet in één databron zitten

Een SPARQL-query kan zelfs data ophalen van **externe endpoints** via het web, zolang die RDF en SPARQL ondersteunen. Dit sluit rechtstreeks aan bij het idee van **Linked Data** en het web als globale datastructuur. 



## Meer dan alleen SELECT

Hoewel `SELECT` het meest gebruikt wordt, ondersteunt SPARQL meerdere queryvormen:

* **SELECT** – geeft variabelen terug (meest gebruikt)
* **ASK** – geeft true/false terug (bestaat dit patroon?)
* **CONSTRUCT** – bouwt nieuwe RDF-triples op basis van een query
* **DESCRIBE** – vraagt een beschrijving van een resource op

Voor leerdoeleinden starten we bijna altijd met `SELECT`, omdat deze vorm het duidelijkst toont **hoe patronen gematcht worden** tegen RDF-data. 



## Waarom SPARQL essentieel is voor interoperabiliteit

SPARQL maakt het mogelijk om:

* RDF-data **los van implementatie** te bevragen
* semantische relaties expliciet te gebruiken in queries
* data uit verschillende bronnen **zonder voorafgaande afstemming** te combineren

In combinatie met RDF en gedeelde vocabularia vormt SPARQL de **operationele laag** van het semantische web: hier wordt betekenis niet alleen gemodelleerd, maar ook **actief benut**.

In de volgende hoofdstukken gaan we dieper in op filters, optionele patronen, datatypes en hoe SPARQL-complexiteit groeit naarmate je rijkere semantische modellen gebruikt.

**Bron:** Learning SPARQL, hoofdstukken *Introducing SPARQL* en *Basic Graph Patterns* 

Met **SPARQL** hebben we geleerd hoe we informatie uit RDF-grafen kunnen halen. Maar zodra datasets groter worden en door meerdere systemen gebruikt worden, volstaat het niet meer om enkel data op te slaan en te bevragen. We moeten ook vastleggen **wat die data betekent**. In het volgende hoofdstuk introduceren we **RDF Schema** en **OWL**, waarmee we vocabularia en ontologieën definiëren.
