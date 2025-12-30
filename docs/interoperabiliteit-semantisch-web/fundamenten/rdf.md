# RDF

RDF is geen dataformaat, maar een **datamodel**. Dat betekent dat RDF beschrijft **hoe** data wordt voorgesteld, niet **in welk bestandsformaat**. Er bestaan verschillende syntactische vormen (zoals Turtle, RDF/XML of JSON-LD) om RDF-data op te slaan, maar ze volgen allemaal hetzelfde onderliggende model.

In dit datamodel worden feiten uitgedrukt aan de hand van **drieledige uitspraken**, ook wel **triples** genoemd. Elke triple stelt een klein feit voor en kan worden gezien als een eenvoudige zin.

Een triple bestaat uit drie onderdelen: het **subject**, het **predicaat** en het **object**. Het subject verwijst naar de **resource** (het ding) dat beschreven wordt, het predicaat is de **eigenschap** of relatie, en het object is de **waarde** van die eigenschap of een andere resource.

RDF staat voor **Resource Description Framework** en vormt de basis om gestructureerde, betekenisvolle data op een consistente manier te beschrijven.

**Bron:** *Learning SPARQL* (O’Reilly), hoofdstuk *The Data to Query*, p. 2

### Voorbeeld

Stel dat we een eenvoudig feit willen beschrijven:

> *Michiel volgt het vak POP.*

In RDF drukken we dit uit met een **triple**:

* **Subject**: Michiel
* **Predicaat**: volgt
* **Object**: POP

In **Turtle-syntax** ziet dat er zo uit:

```turtle
@prefix ex: <http://example.org/> .

ex:Michiel ex:volgt ex:POP .
```

Hierbij:

* `ex:Michiel` is de **resource** die beschreven wordt (het subject)
* `ex:volgt` is de **eigenschap** of relatie (het predicaat)
* `ex:POP` is de **waarde** of een andere resource (het object)

Elke triple stelt één enkel feit voor. Door meerdere triples te combineren, ontstaat een netwerk van betekenisvolle relaties. Dat netwerk maakt het mogelijk om data te **koppelen, te hergebruiken en te bevragen**, wat de basis vormt voor interoperabiliteit binnen het semantische web.

Net zoals een zin in het Engels, eindigen Turtle- en SPARQL-triples meestal met een punt. De spaties die je vaak vóór de punt ziet, zijn technisch niet verplicht, maar worden meestal gebruikt om de data leesbaarder te maken voor mensen.

De eerste niet-lege regel is een **triple die eindigt met een punt**. Deze regel geeft aan dat het prefix **`ex`** zal staan voor de URI
`http://example.org/`.
De prefixes mag je zelf bepalen. Wat belangrijk is, is de URI dat deze representeerd.

Dit is vergelijkbaar met hoe een XML-document een namespace definieert via een attribuut zoals
`xmlns:ex="http://example.org/"`.

Het **subject** en het **predicaat** van een RDF-triple moeten telkens tot een **specifieke namespace** behoren. Dat is belangrijk om verwarring te vermijden wanneer deze data later gecombineerd wordt met andere datasets waarin gelijkaardige namen kunnen voorkomen. Daarom worden ze voorgesteld met **URI’s**. Prefixen maken het eenvoudiger om met deze URI’s te werken, omdat je niet telkens de volledige namespace moet uitschrijven.

### Wat is een URI?
Een **URI** (Uniform Resource Identifier) is een unieke identificatie voor iets. **URL’s** (Uniform Resource Locators), ook wel webadressen genoemd, zijn één specifieke vorm van een URI. Een locator helpt je om iets te vinden, zoals een webpagina (bijvoorbeeld `http://www.example.org/index.html`), terwijl een identifier dient om iets **eenduidig te benoemen**.

Zo is de unieke identifier voor *Michiel* in dit voorbeeld
`http://example.org/Michiel`.
Een URI kan eruitzien als een URL en er kan eventueel ook een webpagina op dat adres bestaan, maar dat hoeft niet. De **hoofdfunctie van een URI** is niet om een webpagina aan te duiden, maar om iets een **unieke en ondubbelzinnige naam** te geven.


In het volgende hoofdstuk introduceren we SPARQL, de querytaal waarmee RDF-data kan worden opgezocht, gefilterd en gecombineerd.



PAGINA 30 EN 31 moeten erin DATA TYPING 