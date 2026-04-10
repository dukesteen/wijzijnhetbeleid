const SITE_CONTENT = {
  siteMeta: {
    issueLabel: "Optimist web special",
    issueTitle: "Wij zijn het beleid",
    projectLabel: "Afstudeerproject van Job Koskamp",
    subtitle: "Van theorie naar praktijk, vertaald naar een digitaal magazine.",
    intro:
      "Deze website bundelt een hoofdverhaal en twee deelverhalen over nieuwe manieren van beleidsvorming. Het vertrekpunt is steeds hetzelfde: maatschappelijke vraagstukken worden niet opgelost vanuit een gesloten systeem, maar in samenwerking met mensen die het vraagstuk iedere dag ervaren.",
    editorialNote:
      "Gebaseerd op de aangeleverde artikelen en vormgegeven in de sfeer van de attached magazine-PDFs: grote koppen, rustige seriftekst en uitgesproken themakleuren per verhaal.",
  },
  routes: [
    { id: "home", slug: "", label: "Home", theme: "home" },
    { id: "main", slug: "verhaal", label: "Hoofdverhaal", theme: "main" },
    { id: "lansco", slug: "lansco", label: "LaNSCO", theme: "lansco" },
    { id: "markemodel", slug: "markemodel", label: "Markemodel", theme: "markemodel" },
  ],
  themes: {
    home: {
      paper: "#f5ecdf",
      paperStrong: "#e8d7c8",
      surface: "#faf6f0",
      ink: "#111111",
      muted: "rgba(17, 17, 17, 0.68)",
      accent: "#c21d34",
      accentSoft: "rgba(194, 29, 52, 0.16)",
      accentContrast: "#ffffff",
      line: "rgba(17, 17, 17, 0.12)",
      displayShadow: "rgba(194, 29, 52, 0.08)",
    },
    main: {
      paper: "#f7efdf",
      paperStrong: "#efdfcb",
      surface: "#faf5ed",
      ink: "#171413",
      muted: "rgba(23, 20, 19, 0.7)",
      accent: "#9f2d24",
      accentSoft: "rgba(159, 45, 36, 0.14)",
      accentContrast: "#fff8f3",
      line: "rgba(23, 20, 19, 0.12)",
      displayShadow: "rgba(159, 45, 36, 0.1)",
    },
    lansco: {
      paper: "#d8e8f1",
      paperStrong: "#c6dce8",
      surface: "#f0ece6",
      ink: "#103043",
      muted: "rgba(16, 48, 67, 0.72)",
      accent: "#0e5e81",
      accentSoft: "rgba(14, 94, 129, 0.16)",
      accentContrast: "#f2fbff",
      line: "rgba(16, 48, 67, 0.14)",
      displayShadow: "rgba(14, 94, 129, 0.08)",
    },
    markemodel: {
      paper: "#e4efdf",
      paperStrong: "#d0e2c6",
      surface: "#f0ece6",
      ink: "#16311f",
      muted: "rgba(22, 49, 31, 0.72)",
      accent: "#1b6b34",
      accentSoft: "rgba(27, 107, 52, 0.16)",
      accentContrast: "#f4fff3",
      line: "rgba(22, 49, 31, 0.14)",
      displayShadow: "rgba(27, 107, 52, 0.08)",
    },
  },
  stories: {
    main: {
      id: "main",
      slug: "verhaal",
      label: "Hoofdverhaal",
      theme: "main",
      title: "Wicked problems: hoe lossen we ingewikkelde maatschappelijke vraagstukken op?",
      shortTitle: "Wicked problems",
      dek:
        "Van Rotterdamse schuldhulp tot het Nationaal Burgerberaad Klimaat: het hoofdverhaal volgt de vraag hoe beleid anders kan ontstaan wanneer overheden burgers, experts en initiatiefnemers niet pas achteraf maar vanaf het begin meenemen.",
      byline: "Door Job Koskamp",
      kicker: "Hoofdverhaal",
      summary:
        "Een lang verhaal over open multi-stakeholderbeleid, lokale experimenten en de veranderende rol van ambtenaren en politiek.",
      stats: [
        {
          value: 2500,
          display: "€2.500",
          prefix: "€",
          suffix: "",
          compact: "2.500",
          label: "maximale schuld die Social Debt in een keer kan overnemen",
        },
        {
          value: 70,
          display: "70%",
          prefix: "",
          suffix: "%",
          compact: "70",
          label: "stijging van jongeren met problematische schulden in vijf jaar",
        },
        {
          value: 10000,
          display: "10.000",
          prefix: "",
          suffix: "",
          compact: "10.000",
          label: "jongeren in Rotterdam die financieel vastlopen door schulden",
        },
      ],
      sections: [
        {
          heading: "Een hardnekkig vraagstuk",
          asideLabel: "Sociaal debt",
          paragraphs: [
            "In Rotterdam werkt de gemeente samen met sociale onderneming Social Debt. Social Debt helpt jongeren met beginnende schulden. Schulden tot 2500 euro worden in een keer overgenomen, waarna jongeren begeleiding krijgen bij het afbetalen van dat bedrag. Initiatiefnemer Jamal Oulel stelt dat juist jongeren met een kleine schuld vaak tussen wal en schip vallen: hun probleem is te klein voor professionele schuldhulpverlening, maar groot genoeg om snel uit de hand te lopen.",
            "De samenwerking tussen de gemeente Rotterdam en Social Debt laat zien hoe een innovatieve aanpak kan ontstaan rond een hardnekkig probleem. Het aantal jongeren met problematische schulden is de afgelopen vijf jaar namelijk met 70 procent gestegen. In Rotterdam gaat het om ongeveer 10.000 jongeren die door schulden en betalingsachterstanden financieel vastlopen. Zulke vraagstukken spelen niet alleen in Rotterdam. Overheden door heel Nederland worstelen met sociale problemen, de stikstofcrisis en de nasleep van dossiers als de toeslagenaffaire.",
          ],
          pullQuote:
            "Deze problemen vragen om een andere manier van beleidsvorming: opener, lokaler en minder lineair.",
        },
        {
          heading: "Wicked problems",
          asideLabel: "Complexiteit",
          paragraphs: [
            "Volgens organisatie-, leer- en ontwikkeladviseur Max Herold ontstaan er in een snel veranderende wereld steeds meer wicked problems: complexe, moeilijk af te bakenen vraagstukken zonder duidelijke oplossing. Zijn analyse is dat Social Debt in Rotterdam werkt omdat het initiatief bottom-up is ontstaan en omdat de gemeente samenwerkt met een gevarieerde groep partners.",
            "Herold koppelt dat aan een open multi-stakeholderbenadering. In zo'n benadering worden ambtenaren, experts en maatschappelijke actoren gelijkwaardig betrokken bij de totstandkoming van beleid. Juist die gelijkwaardigheid maakt het mogelijk om kennis uit de praktijk naar voren te halen voordat een vraagstuk wordt dichtgetimmerd in beleidsteksten of bestuurlijke scenario's.",
          ],
        },
        {
          heading: "Een nieuwe manier van beleidsontwikkeling",
          asideLabel: "Open beleid",
          paragraphs: [
            "Nu domineert nog vaak een klassieke vorm van beleidsontwikkeling: een lineair proces waarin een kleine groep senior-ambtenaren of beleidsadviseurs een maatschappelijk vraagstuk signaleert, doelen opstelt en verschillende scenario's voorlegt aan een minister. Die kiest vervolgens een richting. Volgens Herold ontstaat zo een kloof tussen overheid en samenleving.",
            "Nederland kent natuurlijk een traditie van overleg, het poldermodel. Maar ook daar schuiven vaak dezelfde partijen aan: belangenorganisaties, vakbonden en grote bedrijven. Kleine gemeenten, mkb'ers, burgers en praktijkinitiatieven komen minder makkelijk aan tafel. Wie de praktijk buiten houdt, krijgt beleid dat wel sluitend lijkt op papier maar onvoldoende gevoed is door de werkelijkheid.",
          ],
          pullQuote:
            "De samenleving moet niet alleen reageren op beleid, maar meebouwen aan de vorm ervan.",
        },
        {
          heading: "Lokaal werken vanuit de praktijk",
          asideLabel: "Praktijk",
          paragraphs: [
            "Social Debt is niet het enige voorbeeld. LaNSCO, de koepelorganisatie van sociale cooperaties, werkt met gemeenten aan trajecten waarin mensen met behoud van uitkering hun eigen onderneming kunnen opbouwen. Onder de vlag van een cooperatie zetten deelnemers hun eerste stappen als ondernemer zonder direct financieel risico te lopen.",
            "Chef inspiratie Paul Leistra merkt dat het model een andere houding vraagt van overheden. Gemeenten zeggen in eerste gesprekken vaak dat zij alles al geprobeerd hebben. Zijn tegenvraag is steevast wat er gebeurt als je mensen zelf laat proberen. Niet iedereen past bij loondienst, en niet iedereen heeft baat bij een standaard re-integratietraject.",
            "Ook kennisplatform Collectieve Kracht ziet dat burgerinitiatieven vaak buiten de beleidsvorming vallen. Community builders Brechtje Polman en Mickey Steijaert wijzen op obstakels als moeizame financiering, botsende logica en een gebrek aan kennis bij beleidsmakers. Juist daardoor lopen initiatiefnemers vast terwijl ze wel degelijk een sleutelrol kunnen spelen bij grote maatschappelijke uitdagingen.",
          ],
        },
        {
          heading: "Regionaal en toch bottom-up",
          asideLabel: "Schaal",
          paragraphs: [
            "Dat bottom-up organiseren niet alleen lokaal hoeft te zijn, liet het Nationaal Burgerberaad Klimaat zien. Zeven weekenden lang, van januari tot september 2025, werkten 175 burgers aan de vraag hoe Nederland duurzamer kan eten, reizen en consumeren. De groep was bewust een afspiegeling van de samenleving: jong en oud, praktisch en theoretisch opgeleid, met uiteenlopende opvattingen over klimaatbeleid.",
            "Voorzitter Nienke Meijer zag hoe deelnemers met respect naar elkaar leerden luisteren, ook wanneer meningen sterk verschilden. Volgens haar laat het burgerberaad zien dat complexe, systemische vraagstukken nieuwe democratische vormen vragen. Samenwerken met mensen die anders denken dan jijzelf blijkt niet alleen mogelijk, het werkt ook.",
            "Ook in Gelderland kreeg een dergelijke benadering vorm. Nadat het stikstofbeleid van kabinet-Rutte IV op massaal protest stuitte, kwam er in de provincie een model tot stand waarin boeren, overheden en andere belanghebbenden samenwerkten aan een duurzame landbouw. In 2022 ging de pilot van start. Bij een evaluatie in 2024 bleken de tussendoelen voor water, land en lucht vrijwel allemaal gehaald, en veel doelen voor 2030 al binnen bereik.",
          ],
          pullQuote:
            "Complexe vraagstukken vragen niet om meer geslotenheid, maar om meer georganiseerde ontmoeting.",
        },
        {
          heading: "De rol van politiek en ambtenaren",
          asideLabel: "Vertrouwen",
          paragraphs: [
            "Als overheden ruimte willen maken voor dit soort initiatieven, vraagt dat volgens Herold en oud-ambtenaar Emily Homburg een andere houding. Voor ambtenaren betekent het een verschuiving van uitvoerder naar facilitator. Zij bewegen tussen overheid en samenleving en kunnen juist daarom brugfiguren zijn in het proces van beleidsvorming.",
            "Homburg pleit ervoor dat ambtenaren meer mens mogen zijn en hun contact met de samenleving niet zien als iets dat buiten hun professionele rol valt. Als overheid en samenleving als twee losse werelden blijven functioneren, ondermijnen ze elkaar. De kwaliteit van beleid hangt dan ook samen met de kwaliteit van de ontmoeting.",
            "Voor politici geldt iets vergelijkbaars. Herold schetst een politicus die durft te vragen in plaats van vooral antwoorden te geven. Een politicus die uitnodigt tot gesprek en co-creatie, twijfel niet als zwakte ziet, en beleid niet in beton giet maar in beweging zet.",
            "Volgens Homburg blijft uiteindelijk een eenvoudig woord over: vertrouwen. De wortels van de overheid liggen in de samenleving. Overheid en burgers hebben elkaar nodig en moeten elkaar opnieuw leren verstaan. Dat kan alleen wanneer ze elkaar daadwerkelijk ontmoeten.",
          ],
        },
      ],
      relatedStories: ["lansco", "markemodel"],
    },
    lansco: {
      id: "lansco",
      slug: "lansco",
      label: "Deelverhaal",
      theme: "lansco",
      title: "Meer dan een uitkering: hoe mensen weer waardevol worden",
      shortTitle: "LaNSCO",
      dek:
        "Sociale cooperaties bieden mensen in de bijstand een route naar ondernemerschap, zelfvertrouwen en zingeving. Het verhaal laat zien hoe dat model werkt en waarom gemeenten er anders naar moeten kijken.",
      byline: "Door Job Koskamp",
      kicker: "Deelverhaal 01",
      summary:
        "Een reportage over sociale cooperaties, de verhalen van Nathalie en Marcel, en de vraag wat gemeenten eigenlijk als succes durven zien.",
      sections: [
        {
          heading: "In de bijstand, en dan?",
          asideLabel: "Bestaansminimum",
          paragraphs: [
            "In Nederland ontvangen ongeveer 400.000 mensen een bijstandsuitkering. Dat is zelden een comfortabele situatie. Het inkomen ligt nauwelijks boven het bestaansminimum, financien worden streng gecontroleerd en daarbovenop geldt vaak een maandelijkse sollicitatieplicht. Voor veel mensen doet zo'n uitkeringssituatie ook mentaal iets ingrijpends.",
            "Veel gemeenten zijn erop gebrand mensen zo snel mogelijk uit de bijstand te krijgen. Tegelijkertijd groeit al jaren de groep mensen die langdurig afhankelijk blijft. Dat wringt met het idee dat iedereen een betekenisvol bestaan verdient. Precies op dat punt probeert LaNSCO, de koepelorganisatie van sociale cooperaties, iets te veranderen.",
          ],
          pullQuote:
            "Niet iedereen heeft vooral een standaard traject nodig. Soms heeft iemand ruimte nodig om zelf weer iets op te bouwen.",
        },
        {
          heading: "Hoe een sociale cooperatie werkt",
          asideLabel: "Ondernemen",
          paragraphs: [
            "Binnen een sociale cooperatie kunnen mensen met behoud van uitkering een onderneming opbouwen. Paul Leistra, chef inspiratie bij LaNSCO en coordinator van een lokale cooperatie in Delft, beschrijft hoe deelnemers onder de vlag van de cooperatie hun eerste stappen zetten als ondernemer. Dat gebeurt zonder direct financieel risico.",
            "Leden zijn niet alleen bezig met hun eigen bedrijf. Ze dragen ook verantwoordelijkheid voor het gezamenlijke functioneren van de cooperatie. Nieuwe deelnemers maken eerst met een coordinator een bedrijfsplan, onderzoeken wat zij nodig hebben, en pitchen dat plan daarna voor andere leden. De groep bepaalt samen of iemand klaar is om te beginnen.",
            "De financiering is een mix. Gemeenten ondersteunen bijvoorbeeld coordinatiefuncties, terwijl cooperaties veel overige uitgaven financieren uit de opbrengsten van leden. Winst gaat dus niet volledig naar het individu, maar vloeit ook terug naar de cooperatie, naar de gemeente of naar investeringen in het eigen bedrijf.",
            "Volgens Paul ligt het zwaartepunt niet alleen op ondernemen. Veel deelnemers kampen met een laag zelfbeeld door hun uitkeringssituatie. Het krachtigste moment is vaak dat iemand zichzelf weer als waardevol gaat zien, omdat diegene ervaart opnieuw iets voor anderen te kunnen betekenen.",
          ],
        },
        {
          heading: "Nathalie: van overleven naar zelfstandigheid",
          asideLabel: "Zelfvertrouwen",
          paragraphs: [
            "Nathalie van den Heuvel had ooit een baan, maar belandde na de diagnose autisme van haar zoon, een afnemend inkomen en uiteindelijk de toeslagenaffaire in een diepe crisis. Ze kwam in de bijstand terecht en verloor gaandeweg veel van haar zelfvertrouwen.",
            "In 2019 vroeg een nieuwe klantmanager haar wat zij zelf eigenlijk wilde doen. Nathalie liet haar foto's zien en verwachtte weggewuifd te worden. In plaats daarvan hoorde zij over sociale cooperatie de Zoete Kruimels in Zoetermeer. Daar begon ze als fotograaf en groeide later ook door als virtual assistant.",
            "Binnen de cooperatie leerde ze weer in zichzelf geloven. Wie lang in de bijstand zit, vertelt Nathalie, gaat op een gegeven moment geloven in alle vooroordelen die op die positie kleven. In de cooperatie ontdekte ze opnieuw dat haar werk waarde had voor anderen.",
            "In april 2024 verdiende ze genoeg om haar uitkering op te zeggen en zich in te schrijven bij de Kamer van Koophandel. Dat moment was tegelijk bevrijdend en spannend. Toch is ze nog steeds ondernemer en noemt ze juist de ruimte van de cooperatie doorslaggevend voor dat herstel.",
          ],
          pullQuote:
            "Het traject gaf mij mijn zelfvertrouwen terug en liet me voelen dat ik waardevol ben.",
        },
        {
          heading: "Marcel: leren, twijfelen, doorgroeien",
          asideLabel: "Volgende stap",
          paragraphs: [
            "Marcel Bruin kwam door rugproblemen in de bijstand terecht en sloot zich aan bij cooperatie Lichtpunt in Alkmaar. Een traditionele negen-tot-vijfbaan paste niet goed meer bij zijn fysieke situatie. Binnen de cooperatie werkte hij aan een bedrijfsplan en begon hij als vormgever, later aangevuld met webdesign.",
            "De eerste jaren gingen snel. Marcel leerde veel en haalde al gauw opdrachten binnen. Na drie jaar kreeg hij een baan aangeboden bij een webdesignbedrijf, maar na een proefperiode besloot hij toch voor het ondernemerschap te kiezen.",
            "Hij stapte niet terug de cooperatie in, maar koos voor een Bbz-uitkering als volgende fase. Die regeling vangt maanden op waarin zijn onderneming nog onvoldoende oplevert. Voor Marcel voelde de cooperatie als een leeromgeving waarin hij genoeg had geoefend om zelfstandig verder te gaan.",
          ],
        },
        {
          heading: "Wat gemeenten als succes moeten durven zien",
          asideLabel: "Impact",
          paragraphs: [
            "Paul Leistra benadrukt dat er niet een enkel succespad bestaat. Niet iedereen stroomt uit als ondernemer; sommigen gaan later in loondienst, anderen vinden vooral meer ritme, betekenis of eigenwaarde. Juist daarom is uitstroom op zichzelf geen volledig criterium voor succes.",
            "In Delft zitten gemiddeld vijftien mensen in de cooperatie en stromen er twee of drie per jaar uit. Voor sommige gemeenten lijkt dat misschien beperkt. Maar kijk je naar de cumulatieve besparing op uitkeringen en naar de maatschappelijke opbrengst in het leven van deelnemers, dan verandert het beeld volledig.",
            "Volgens Paul hoeven deelnemers geen geboren ondernemers te zijn. Wat zij wel nodig hebben, is de wens om zelf iets op te bouwen. Zijn oproep aan gemeenten is daarom eenvoudig: geef sociale cooperaties een kans en beoordeel ze niet alleen op spreadsheets, maar ook op de betekenis die ze voor mensen kunnen hebben.",
          ],
        },
      ],
      relatedStories: ["main", "markemodel"],
    },
    markemodel: {
      id: "markemodel",
      slug: "markemodel",
      label: "Deelverhaal",
      theme: "markemodel",
      title: "Landbouw in balans: het experiment dat wel werkt?",
      shortTitle: "Markemodel",
      dek:
        "Terwijl het landbouwdebat in Nederland op scherp stond, werkte men in de Achterhoek aan een model waarin boeren, overheden en andere partijen gezamenlijk doelen, beloningen en eigenaarschap organiseerden.",
      byline: "Door Job Koskamp",
      kicker: "Deelverhaal 02",
      summary:
        "Een verhaal over horizontale samenwerking, regionale sturing en de spanning tussen succesvolle pilots en risicovolle opschaling.",
      sections: [
        {
          heading: "December 2022",
          asideLabel: "Achterhoek",
          paragraphs: [
            "Eind 2022 hing Nederland vol omgekeerde vlaggen en protestborden. Johan Remkes had kort daarvoor vastgesteld dat beter landbouwbeleid noodzakelijk was, terwijl de onzekerheid bij boeren enorm was. In die gespannen context stond men in de Achterhoek juist op het punt om tot een lokaal landbouwakkoord te komen.",
            "Carel de Vries was een van de grondleggers van het Markemodel: een manier van samenwerken waarin boeren, overheden en andere partijen zoals FrieslandCampina en Rabobank gezamenlijk afspraken maken over de verduurzaming van landbouw.",
          ],
          pullQuote:
            "Waar elders het vertrouwen wegviel, ontstond hier een overeenkomst die door vrijwel alle betrokken partijen werd gedragen.",
        },
        {
          heading: "Ontstaan",
          asideLabel: "2013",
          paragraphs: [
            "De kern van het project ligt al in 2013. Tijdens een bijeenkomst over de toekomst van landbouw in Gelderland stelde Carel de praktische vraag wat men daar nu werkelijk mee ging doen. Al snel ontstond het idee om kringlooplandbouw te koppelen aan een eerlijk rendement voor boeren.",
            "Diezelfde avond schreven geinteresseerden zich in. Binnen korte tijd sloten ongeveer 250 boeren uit de Achterhoek aan. Tijdens de verdere uitwerking werd duidelijk waarom het initiatief resoneerde: boeren wilden erkenning voor hun maatschappelijke bijdrage, inspraak in beleid en ruimte om hun bedrijf zelf vorm te geven.",
            "Precies daar zat ook de kritiek op het bestaande systeem. Landbouwbeleid werkt vaak top-down. Boeren krijgen eisen vanuit overheid, banken en grote bedrijven opgelegd en moeten vervolgens zelf uitvinden hoe zij al die eisen met elkaar verbinden. Het Markemodel wilde dat omdraaien.",
          ],
        },
        {
          heading: "Het begin van meer",
          asideLabel: "Subsidie",
          paragraphs: [
            "In 2019 kwamen er subsidies beschikbaar voor de ontwikkeling van landbouwbeleid in samenwerking met boeren. Voor de vereniging Vruchtbare Kringloop Oost, de doorstart van het eerdere initiatief, bood dat de kans om het idee uit te bouwen tot een regionaal model.",
            "Samen met VALA, de vereniging agrarisch landschapsbeheer Achterhoek, werd een team gevormd om dat model verder uit te denken. De kernwaarden bleven overeind: horizontale samenwerking, erkenning voor boeren en doelgerichte sturing.",
            "Johan de Kleuver sloot aan om de sociale dynamiek en organisatievorm mee te ontwerpen. Daarmee kreeg het project niet alleen inhoudelijke ambities, maar ook een duidelijke bestuurlijke en relationele structuur.",
          ],
        },
        {
          heading: "Het Markemodel",
          asideLabel: "Twee raden",
          paragraphs: [
            "Het Markemodel werkt met twee raden. In de Markeraad zitten de sturende partijen: provincie, rijk, waterschap, maar ook bedrijven en financiers. Zij werken samen aan een pakket aan doelen rond waterkwaliteit, stikstofuitstoot en biodiversiteit, inclusief een beloningsstructuur voor boeren.",
            "Daar tegenover staat de Boerenraad, bestaande uit deelnemende boeren. Die raad toetst met de achterban of de voorgestelde doelen en beloningen haalbaar zijn en of aanpassingen nodig zijn. Daarmee ontstaat geen inspraak achteraf, maar gezamenlijke besluitvorming over de spelregels van het experiment.",
            "In de eerste fase, tussen 2019 en 2021, lag de focus op het uitdenken van dat systeem en het organiseren van de Markeraad. Juist grote partijen als FrieslandCampina bleken de regionale sturing interessant te vinden, omdat zij niet geloofden in een enkele heilige oplossing voor verduurzaming.",
          ],
        },
        {
          heading: "Niet denken maar doen",
          asideLabel: "Pilot",
          paragraphs: [
            "In 2022 startte de tweede fase van de pilot met 35 boerenbedrijven in twee gebieden van de Achterhoek. Op 2 november droeg de Markeraad haar pakket van doelen en beloningen over aan de Boerenraad. Op 9 december 2022 kwamen beide raden samen in een dealdialoog om tot een akkoord te komen.",
            "Dat akkoord kwam er daadwerkelijk. Volgens betrokkenen was dat uniek, juist omdat de nationale discussie op dat moment volledig was vastgelopen. Boer Hendrik Wesselink zei na afloop dat hij voor het eerst sinds lange tijd weer erkenning voelde voor zijn werk.",
            "De daaropvolgende implementatie leverde sterke resultaten op. Bij de evaluatie eind 2024 bleken de tussendoelen voor 2024 vrijwel allemaal gehaald en lagen veel doelen voor 2030 al binnen handbereik.",
          ],
        },
        {
          heading: "Opschalen: meer impact, meer risico",
          asideLabel: "Schaal",
          paragraphs: [
            "De evaluatie van fase twee keek daarom meteen vooruit naar opschaling. Het model wil zich in twee richtingen uitbreiden: meer boerenbedrijven binnen de Achterhoek betrekken en tegelijk soortgelijke trajecten opzetten in andere Gelderse regio's.",
            "Johan de Kleuver ziet dat momentum als een kans om het model breder uit te rollen, mogelijk zelfs buiten Gelderland. Tegelijkertijd waarschuwde Carel de Vries al vroeg dat verdichting binnen een regio cruciaal blijft. Pas bij een veel grotere groep boeren wordt de werkelijke regionale impact goed zichtbaar.",
            "Daarmee komt ook een risico terug dat in veel beleidsinnovaties opduikt: zodra iets succesvol lijkt, neemt de overheid gemakkelijk te veel regie over. Terwijl juist gedeeld eigenaarschap de kern van het Markemodel vormt. Als een partij te dominant wordt, verdwijnt de horizontale structuur die het experiment tot nu toe sterk maakt.",
          ],
          pullQuote:
            "Het model werkt alleen zolang iedere deelnemende partij zich eigenaar blijft voelen van de uitkomst.",
        },
      ],
      relatedStories: ["main", "lansco"],
    },
  },
};

window.SITE_CONTENT = SITE_CONTENT;
