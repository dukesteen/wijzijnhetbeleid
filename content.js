const SITE_CONTENT = {
  siteMeta: {
    issueLabel: "Optimist web special",
    issueTitle: "Wij zijn het beleid",
    projectLabel: "Afstudeerproject van Job Koskamp",
    subtitle: "",
    intro:
      "In een tijd waarin burgers zich steeds vaker machteloos voelen tegenover \u2018het beleid\u2019, draait Wij zijn het beleid het perspectief radicaal om: beleid ben je zelf, of je dat nu wilt of niet. In deze web special krijg je een klein voorproefje van de speciale editie van Optimist Magazine. Wij zijn het beleid laat zien hoe mensen in buurten, gemeenten en netwerken het heft in eigen handen nemen en samen met overheden en instituties nieuwe vormen van bestuur ontwikkelen. Van burgerberaden tot ambtelijke experimenten, van digitale platforms tot commons-initiatieven: Wij zijn het beleid brengt verhalen van hoop, verbeeldingskracht en radicale samenwerking. Wij zijn het beleid laat zien dat ook u onderdeel bent van beleid.",
    editorialNote: "",
    magazinePromo: {
      eyebrow: "Nu te bestellen",
      headline:
        "Bestel de Optimist Special Wij zijn het beleid hier.",
      body: "Deze special gemaakt door Optimist Magazine met Job Koskamp als gasthoofdredacteur is een tijdloze oproep tot bestuurlijke vernieuwing en radicale verandering. Met bijdragen van Kees Klomp, Shermin Armiri, Ron van Es, Henrike Gootjes, Mildred Hofkes, Marcel Kampman, Annette Nobuntu Mul, Babette Porcelijn en nog vele anderen.",
      ctaLabel: "Bestel de special",
      ctaHref:
        "https://optimismewerkt.nl/product/optimist-speciale-editie-2025/",
      imageSrc: "./images/optimist-special-cover.jpeg",
      imageAlt: "Cover van de Optimist Special Wij zijn het beleid",
    },
    foreword: {
      eyebrow: "Over de maker",
      title: "Een persoonlijke boodschap",
      paragraphs: [
        "Toen ik begon als student journalistiek, was ik eindeloos gefascineerd door politiek en bestuur. Ik was er van overtuigd dat dat mijn wereld zou worden. Ik had hoop en vertrouwen in dat systeem. Maar eerlijk is eerlijk: dat vertrouwen is in vrij korte tijd tot een dieptepunt gedaald. Niet omdat politiek soms traag is, dat hoort erbij, maar omdat het debat zo gepolariseerd, zo kil en afstandelijk is geworden. Omdat symboolpolitiek en traineerpolitiek het echte gesprek vaak verdringen. Omdat luisteren naar elkaar lijkt te zijn ingeruild voor elkaar overschreeuwen. Dat is waarom mijn enthousiasme langzaam plaats maakte voor cynisme.",
        "Misschien is dat juist waarom Wij zijn het beleid mij zo na aan het hart ligt. Het maken ervan voelde als een zoektocht: maatschappelijk, maar zeker ook persoonlijk. Want naast het politieke spel ontdekte ik een andere werkelijkheid. Een werkelijkheid die zich niet afspeelt in de wandelgangen van Den Haag, maar in buurthuizen, klaslokalen en op pleinen. Het is de wereld van bottom-up initiatieven: kleine en grote bewegingen van mensen die niet wachten tot iemand anders het oplost, maar zelf de schouders eronder zetten. Mensen die laten zien dat beleid geen papieren werkelijkheid is, maar iets dat je elke dag opnieuw vormgeeft. Wij zijn het beleid brengt hun verhalen bij elkaar. Het zijn verhalen van hoop, van verbeeldingskracht en van samenwerking voorbij de bestaande structuren. We laten zien dat verandering niet altijd groots en meeslepend hoeft te zijn, maar vaak klein begint. Dat beleid niet alleen wordt gemaakt in vergaderzalen, maar ook in buurttuinen, co\u00f6peraties en klaslokalen. Dat het naast wetten en regels net zo goed draait om relaties, vertrouwen en lef.",
        "Voor mij persoonlijk is dit een tegengif tegen cynisme. Want waar het politieke spel soms verlamt, geven deze verhalen energie. Ze laten zien dat er alternatieven bestaan, dat er altijd ruimte is om het anders te doen. En dat er talloze mensen zijn die die ruimte al volop benutten. Ik hoop dat Wij zijn het beleid ook bij jou dat effect heeft. Dat het je niet alleen inspireert, maar ook uitnodigt om jezelf te zien als onderdeel van beleid. Niet machteloos aan de zijlijn, maar actief en betrokken in het midden. Want beleid zijn wij allemaal. Wij zijn het beleid.",
      ],
      pullQuote: "Want beleid zijn wij allemaal. Wij zijn het beleid.",
    },
    author: {
      eyebrow: "",
      name: "Job Koskamp",
      role: "Afstuderend student journalistiek en maker van deze web special",
      bio: "Job Koskamp ontwikkelde deze web special als zijn afstudeerproject voor de opleiding journalistiek aan de hogeschool Windesheim in Zwolle. In samenwerking met Optimist Magazine maakte hij een magazine over nieuwe vormen van bestuur. In deze web special bundelt hij zijn eigen verhalen.",
      imageSrc: "./images/job-koskamp.jpeg",
      imageAlt: "Portret van Job Koskamp",
    },
  },
  routes: [
    { id: "home", slug: "", label: "Home", theme: "home" },
    { id: "main", slug: "verhaal", label: "De kern", theme: "main" },
    { id: "lansco", slug: "lansco", label: "LaNSCO", theme: "lansco" },
    {
      id: "markemodel",
      slug: "markemodel",
      label: "Markemodel",
      theme: "markemodel",
    },
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
      label: "De kern",
      theme: "main",
      title:
        "Wij zijn het beleid: hoe lossen we ingewikkelde maatschappelijke vraagstukken op?",
      shortTitle: "Wicked problems",
      dek: "Van Rotterdamse schuldhulp tot het Nationaal Burgerberaad Klimaat: Wij zijn het beleid in de kern volgt de vraag hoe beleid anders kan ontstaan wanneer overheden burgers, experts en initiatiefnemers hun krachten bundelen.",
      byline: "Door Job Koskamp",
      kicker: "Wij zijn het beleid in de kern",
      summary:
        "Wij zijn het beleid in de kern volgt de vraag hoe beleid anders kan ontstaan wanneer overheden burgers, experts en initiatiefnemers hun krachten bundelen.",
      heroImage: {
        src: "./images/hero-main.jpg",
        alt: "Wij zijn het beleid",
      },
      stats: [],
      sections: [
        {
          heading: "Een hardnekkig vraagstuk",
          asideLabel: "Social Debt",
          paragraphs: [
            "In Rotterdam werkt de gemeente samen met sociale onderneming Social Debt. Social Debt helpt jongeren met beginnende <span class='tooltip-trigger' data-tooltip='schulden'>schulden</span>. Schulden tot 2500 euro worden in \u00e9\u00e9n keer overgenomen, vervolgens helpen ze met het afbetalen van die schuld. \u2018Juist jongeren met een kleine schuld vallen vaak tussen wal en schip. Hun schuld is te klein voor de gemeente om in aanmerking te komen voor professionele schuldhulpverlening, met als gevolg dat ze moeten wachten tot hun probleem gegroeid is\u2019, aldus initiatiefnemer Jamal Oulel. Op deze manier voorkomt Social Debt grote schulden bij jongeren en ontlast ze de gemeente.",
            "De samenwerking tussen de gemeente Rotterdam en Social Debt is een goed voorbeeld van een innovatieve aanpak van een hardnekkig probleem. Maar niet alleen in de gemeente Rotterdam spelen dit soort problemen. Door heel Nederland kampen <span class='tooltip-trigger' data-tooltip='overheid'>overheden</span> met ingewikkelde problemen: gemeenten staan bijvoorbeeld voor lastige sociale vraagstukken, provincies proberen een oplossing te bedenken voor de stikstofcrisis en het rijk weet de afhandeling van de toeslagenaffaire maar niet tot een einde te brengen. Deze problemen vragen om een innovatieve aanpak.",
          ],
          tooltips: [
            {
              id: "overheid",
              content:
                "Volgens hoogleraar politicologie Tom van der Meer kampt de Nederlandse overheid met een betrouwbaarheidsprobleem. \u201CDe politiek functioneert onvoldoende\u201D, concludeert hij. Dit alles heeft gevolgen voor het vertrouwen dat Nederlanders hebben in de overheid. Zo is het vertrouwen van Nederlanders in de nationale politiek sinds het voorjaar van 2021 fors gedaald. In 2025 concludeerde het Sociaal en Cultureel Planbureau dat slechts zo\u2019n 40 procent van de Nederlanders nog vertrouwen had in de regering.",
            },
            {
              id: "schulden",
              content:
                "Het aantal jongeren met problematische schulden is de afgelopen vijf jaar met 70% gestegen. Uit cijfers van het Nibud blijkt dat in Nederland inmiddels \u00e9\u00e9n op de vijf jongeren te maken heeft met schulden. Rotterdam spant de kroon, daar wonen ongeveer 10.000 jongeren die door schulden en betalingsachterstanden financieel vastlopen.",
            },
          ],
        },
        {
          heading: "Wicked problems",
          asideLabel: "Complexiteit",
          paragraphs: [
            "Volgens Max Herold ontstaan er in een snel veranderende wereld steeds meer wicked problems: complexe, moeilijk af te bakenen vraagstukken zonder duidelijke oplossing. Hij werkt als organisatie\u2011, leer\u2011 en ontwikkeladviseur bij de rijksoverheid en promoveerde twee keer: in bedrijfskunde en al eerder in bestuurskunde. Sinds zijn eerste promotieonderzoek houdt hij zich al bezig met het fenomeen wicked problems.",
            "De gemeente Rotterdam weet met Social Debt, in ieder geval, een begin van een antwoord te formuleren op zo\u2019n wicked problem. Wat maakt dat het daar w\u00e9l lukt? Dat ligt volgens Herold aan de bottom-up totstandkoming van Social Debt en de verscheidenheid aan partners waar de gemeente mee samenwerkt. Dat zijn volgens hem belangrijke aspecten van de zogeheten open multi\u2011stakeholderbenadering. Ambtenaren, experts en maatschappelijke actoren worden gelijkwaardig betrokken bij de totstandkoming van beleid.",
          ],
        },
        {
          heading: "Een nieuwe manier van beleidsontwikkeling",
          asideLabel: "Open beleid",
          paragraphs: [
            "Naast dat transparantie en communicatie belangrijke aspecten zijn, vraagt de open multi-stakeholdermethode om een structureel andere benadering van vraagstukken. \u2018Nu zien we vaak een klassieke vorm van beleidsontwikkeling: een lineair proces met een kleine groep senior-ambtenaren of beleidsadviseurs die een maatschappelijk of economisch vraagstuk signaleren. Werkgroepen bestaande uit experts en ambtenaren stellen concrete doelen op. Vervolgens ontwikkelen ze verschillende aanvliegroutes die ze voorleggen bij de minister, die vervolgens een keuze maakt tussen de verschillende scenario\u2019s.\u2019 Het nadeel hiervan is volgens Herold dat er een kloof ontstaat tussen de overheid en de samenleving.",
            "Volgens Herold is het belangrijk dat de samenleving actief betrokken wordt bij de vorming van beleid. Nu is een terechte tegenwerping dat we in Nederland een lange traditie hebben van overleg met betrokken partijen: het poldermodel. Toch is dat niet voldoende volgens Herold: \u2018Binnen het poldermodel worden vaak de usual-suspects uitgenodigd om mee te praten: belangenorganisaties, vakbonden en invloedrijke bedrijven. Kleine gemeentes, mkb\u2019ers, burgers en andere partijen die vanuit de praktijk werken staan vaak buiten spel.\u2019",
          ],
        },
        {
          heading: "Lokaal werken vanuit de praktijk",
          asideLabel: "Praktijk",
          paragraphs: [
            "Social Debt laat in de gemeente Rotterdam zien dat werken vanuit de praktijk kan, maar ook op andere plekken zijn lokale en regionale overheden bezig met innovatieve oplossingen om ingewikkelde problemen aan te pakken. <a href=\"#/lansco\" class=\"story-link\">LaNSCO</a> is zo\u2019n organisatie die met tal van gemeenten samenwerkt. Het is de koepelorganisatie van sociale co\u00f6peraties. Mensen kunnen, als lid van de co\u00f6peratie, met behoud van hun uitkering beginnen met het opbouwen van hun eigen onderneming. Sociale co\u00f6peraties helpen veelal mensen met een bijstandsuitkering. Onder de vlag van de co\u00f6peratie zetten zij hun eerste stappen als ondernemer. Gaandeweg leren leden het ondernemerschap zonder dat ze financieel risico lopen en hun uitkering kwijt raken. Sommige deelnemers hebben uiteindelijk geen bijstand meer nodig, voor anderen is het een manier om zingeving te ervaren en iets terug te geven aan de maatschappij.",
            "Paul Leistra, chef inspiratie bij LaNSCO, laat weten dat hun model wel een andere houding vergt van overheden. \u2018Als we in gesprek zijn met nieuwe gemeentes, horen we vaak dat zij alles al geprobeerd hebben. Ik vraag dan altijd: \u201Cwat nou als je het mensen zelf laat proberen?\u201D Natuurlijk werkt dat niet voor iedereen, maar voor sommige mensen past een leven als ondernemer gewoon veel beter. Die kans moeten ze dan wel krijgen.\u2019",
            "Dat overheden het lastig vinden om zich te verhouden tot dit soort initiatieven merken ook Brechtje Polman en Mickey Steijaert, community builders bij kennisplatform Collectieve Kracht. Collectieve Kracht ondersteunt burgerinitiatieven. Van Stichting Lekkernass\u00fbh die in Den Haag per week met zeventig burgers zo\u2019n vijf- tot zeshonderd biologische groentepakketten maakt tot een burgerinitiatief in Serooskerke waar bewoners van De Woongaard zelf een circulaire wijk bouwden met 25 woningen van hout leem en stro.",
            "\u2018Burgerinitiatieven zijn een stille kracht, geworteld in de samenleving, die nu vaak nog geen onderdeel uitmaken van beleidsontwikkeling\u2019, aldus Steijaert. Brechtje Polman vult aan dat, omdat burgerinitiatieven buiten de kaders van overheid en markt vallen, ze tegen obstakels aanlopen. \u2018Moeizame financiering, botsende logica en een gebrek aan kennis bij beleidsmakers. Initiatiefnemers lopen vast en moeten hun activiteiten staken. Zonde, want juist burgercollectieven kunnen een sleutelrol spelen bij grote maatschappelijke uitdagingen.\u2019 Volgens hen is het daarom hard nodig dat dit soort collectieven in contact komen met elkaar, beleidsmakers, wetenschappers, financiers en andere netwerkorganisaties.",
          ],
          pullQuote:
            "Burgerinitiatieven zijn een stille kracht, geworteld in de samenleving, die nu vaak nog geen onderdeel uitmaken van beleidsontwikkeling.",
        },
        {
          heading: "Regionaal en toch bottom-up",
          asideLabel: "Schaal",
          paragraphs: [
            "Dat bottom-up organiseren niet alleen lokaal hoeft te zijn, liet het Nationaal Burgerberaad Klimaat zien. Zeven weekenden lang, van januari tot september 2025, werkten 175 burgers aan de vraag hoe Nederland duurzamer kan eten, reizen en consumeren. Deelnemers waren een afspiegeling van de samenleving: van 17 tot 89 jaar, van praktisch tot theoretisch opgeleid en met uiteenlopende meningen over klimaatbeleid. Samen ontwikkelden ze gezamenlijke aanbevelingen.",
            "\u2018Wat mij opviel: burgers toonden dat ze met respect naar elkaar konden luisteren, ook bij sterk verschillende meningen. Een deelnemer zei: \u201CIk heb geleerd dat je altijd het gesprek kunt aangaan.\u201D Ze maakten keuzes, die voor de politiek ingewikkeld zijn, gebaseerd op de wijsheid van de minderheid en de rijkdom aan perspectieven in de groep.\u2019",
            "De conclusie is volgens Meijer helder: complexe, systemische vraagstukken zoals klimaatverandering vragen nieuwe vormen van democratie. \u2018Samenwerken met mensen die anders denken dan jijzelf is niet alleen mogelijk, het werkt.\u2019",
            "Ook regionaal wordt deze bottom-up-aanpak al vertaald naar beleid. Nadat het stikstofbeleid van het Kabinet Rutte 4 op massaal protest uit de sector stuitte, besloot het kabinet de stikstofaanpak bij provincies te leggen. Tussen 2019 en 2021 werd in de provincie Gelderland het <a href=\"#/markemodel\" class=\"story-link\">Markemodel</a> ontwikkeld waarin boeren, overheden en andere belanghebbenden samen konden werken aan een duurzame landbouw.",
            "In 2022, terwijl er in heel Nederland vlaggen ondersteboven hingen, ging de pilot van start, met uiteindelijk een succesvol resultaat. Alle partijen bereikten een overeenstemming over de doelen, boeren zouden zelf in mogen vullen hoe ze die doelen zouden halen. Wat bleek: de streefwaarden, die waren opgesteld voor 2030 en 2024 binnen de drie segmenten: water, land en lucht, bleken bij de tussentijdse evaluatie in 2024 vrijwel allemaal behaald. Sterker nog, veel doelen voor 2030 waren ook al behaald of binnen handbereik.",
          ],
          pullQuote:
            "Ze maakten keuzes, die voor de politiek ingewikkeld zijn, gebaseerd op de wijsheid van de minderheid en de rijkdom aan perspectieven in de groep.",
          sectionImage: {
            src: "./images/klimaatburgerberaad.jpg",
            alt: "Overleg bij het klimaatburgerberaad",
          },
        },
        {
          heading: "De rol van politiek en ambtenaren",
          asideLabel: "Vertrouwen",
          paragraphs: [
            "Wat hebben dit soort bottom-up initiatieven dan nodig van de overheid? Herold denkt dat er een andere houding nodig is, van ambtenaren, maar ook van de politiek. \u2018Voor ambtenaren betekent dit een verschuiving van uitvoerder naar facilitator. Ze moeten de moed hebben om ruimte te maken voor burgers die zelf oplossingen aandragen, in plaats van vast te houden aan bestaande kaders.\u2019",
            "Oud-ambtenaar Emily Homburg, nu directeur van Expertisecentrum VAIA, begeleidt ambtenaren bij die veranderende rol. \u2018Ambtenaren zijn de brugfiguren tussen twee werelden. Zij bewegen tussen de overheid en de samenleving.\u2019 Zij pleit ervoor dat ambtenaren meer mens mogen zijn. Dat is goed voor zowel het beleid als de ambtenaar zelf. Het is volgens Homburg belangrijk dat ambtenaren hun contact met de samenleving omarmen en niet langer wisselen tussen hun rol van ambtenaar en burger. \u2018Als er twee werelden zijn die los van elkaar functioneren, ondermijnen ze elkaar.\u2019",
            "Voor politici geldt een vergelijkbare opgave. Herold pleit voor een politicus die durft te vragen in plaats van antwoorden te geven. \u2018De politicus van morgen nodigt uit tot gesprek en co-creatie, zodat velen meedenken en meesleutelen aan beleid. Er zijn politici nodig die de moed hebben om beleid niet in beton te gieten, maar in beweging te zetten en die twijfel niet als zwakte ziet, maar als beginpunt van wijsheid.\u2019",
            "Deze nieuwe houding is geen utopie. Het gebeurt al op diverse plekken door heel het land. Social Debt is in Rotterdam een dusdanig succes dat er gekeken wordt of er een opschaling mogelijk is om hun methode landelijk uit te rollen. Om dit soort projecten een succes te maken is er volgens Emily Homburg niet veel nodig, enkel vertrouwen. \u2018De wortels van de overheid liggen in de samenleving en bij de interactie met de burger. Beiden hebben elkaar nodig. Overheid en burgers moeten naar elkaar toe bewegen en elkaar verstaan. Ze moeten elkaar weer leren vertrouwen en dat kan alleen als je elkaar ontmoet.\u2019",
          ],
          pullQuote:
            "Overheid en burgers moeten naar elkaar toe bewegen en elkaar verstaan. Ze moeten elkaar weer leren vertrouwen en dat kan alleen als je elkaar ontmoet.",
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
      dek: "Sociale co\u00f6peraties bieden mensen in de bijstand een route naar ondernemerschap, zelfvertrouwen en zingeving. Het verhaal laat zien hoe dat model werkt en wat het betekent voor mensen.",
      byline: "Door Job Koskamp",
      kicker: "Wij zijn het beleid voor de mens",
      summary:
        "Een verhaal over wat praktijkgericht beleid voor mensen kan betekenen. Sociale co\u00f6peratie helpen mensen met een uitkering aan een zinvol bestaan. Lees hier het verhaal van Nathalie en Marcel.",
      heroImage: {
        src: "./images/hero-lansco.jpg",
        alt: "LaNSCO sociale co\u00f6peraties",
      },
      sections: [
        {
          heading: "In de bijstand, en dan?",
          asideLabel: "Bestaansminimum",
          paragraphs: [
            "Wat zou je doen als je in de bijstand terechtkomt? Misschien denk je: \u2018ach dat overkomt mij toch niet\u2019, maar toch ontvangen zo\u2019n 400.000 mensen in Nederland een bijstandsuitkering. Dat is geen pretje. Een bijstandsuitkering is nauwelijks meer dan het bestaansminimum. Bovendien worden je financi\u00ebn streng gecontroleerd en heb je een maandelijkse sollicitatieplicht. Dan hebben we het nog niet eens gehad over wat een bijstandsuitkering met je mentale gezondheid doet.",
            "Daarom zijn veel gemeenten erop gebrand om mensen die in de bijstand terechtkomen er zo snel mogelijk weer uit te krijgen. Toch zien we de afgelopen tien jaar een steeds grotere groep mensen die langdurig in de bijstand zit.",
            "Tijd om dat tij te keren. We gunnen immers iedereen een betekenisvol bestaan. Dat is precies hoe LaNSCO er ook over denkt. LaNSCO is een koepelorganisatie die sociale co\u00f6peraties door heel Nederland bijstaat.",
          ],
        },
        {
          heading: "Hoe een sociale co\u00f6peratie werkt",
          asideLabel: "Ondernemen",
          paragraphs: [
            "Sociale co\u00f6peraties zijn een groeiend fenomeen in Nederland. Mensen kunnen, met behoud van hun uitkering, beginnen met het opbouwen van hun eigen onderneming. Paul Leistra is chef inspiratie bij LaNSCO en co\u00f6rdinator bij de lokale sociale co\u00f6peratie in Delft. Hij heeft al een aantal jaar ervaring met sociale co\u00f6peraties en legt uit hoe het werkt.",
            "\u2018Bij ons krijgen mensen de ruimte om zelf aan de slag te gaan en te onderzoeken hoe ze willen bijdragen aan de maatschappij.\u2019 Als lid van een co\u00f6peratie kan je veilig, onder de vlag van de co\u00f6peratie, je eerste stappen zetten als ondernemer. Gaandeweg leren leden het ondernemerschap zonder dat ze financieel risico lopen.",
            "Hoe wordt zo\u2019n co\u00f6peratie dan gefinancierd? Een deel wordt natuurlijk gefinancierd door de gemeente waar een co\u00f6peratie actief is. Paul is als co\u00f6rdinator bijvoorbeeld niet in dienst van de co\u00f6peratie, maar van de gemeente. Alle andere uitgaven financiert de co\u00f6peratie in principe zelf met de winst die leden maken. Die winst mogen leden namelijk niet zelf houden. Een deel gaat naar de co\u00f6peratie, een ander deel als compensatie naar de gemeente of wordt verrekend met hun uitkering en een deel gaat als investering terug het bedrijf in.",
          ],
          pullQuote:
            "Bij ons krijgen mensen de ruimte om zelf aan de slag te gaan en te onderzoeken hoe ze willen bijdragen aan de maatschappij.",
        },
        {
          heading: "Meer dan ondernemen",
          asideLabel: "Zingeving door ondernemen",
          paragraphs: [
            "Naast het runnen van je eigen bedrijf heb je ook als lid van de co\u00f6peratie verantwoordelijkheden. \u2018Als mensen lid willen worden, wordt er eerst met een co\u00f6rdinator een bedrijfsplan gemaakt.\u2019 Er wordt gekeken wat iemand nodig heeft, waar ze zich in moeten ontwikkelen en welke investeringen er moeten worden gedaan. Vervolgens gaan de deelnemers hun plan pitchen bij de leden van de co\u00f6peratie. Zij bepalen samen met de co\u00f6rdinatoren of je lid mag worden van de co\u00f6peratie en klaar bent om te starten met je eigen bedrijf. \u2018Uiteindelijk zijn alle leden samen verantwoordelijk voor het reilen en zeilen van de co\u00f6peratie.\u2019",
            "Bij sociale co\u00f6peraties ligt het zwaartepunt niet alleen op ondernemen. Het zijn immers niet voor niets sociale co\u00f6peraties. Paul vertelt dat veel deelnemers een laag zelfbeeld hebben door de uitkeringssituatie waar ze in zitten. \u2018Het mooiste om te zien vind ik dat mensen zichzelf weer als waardevol beschouwen. Dat komt vaak vooral doordat ze ervaren dat ze met hun producten of diensten iets voor anderen betekenen.\u2019",
          ],
        },
        {
          heading: "Van toeslagenmoeder naar zelfstandig ondernemer",
          asideLabel: "Nathalie",
          paragraphs: [
            "Nathalie van den Heuvel is daar een goed voorbeeld van. In 2010 had ze een fijne baan, maar omdat haar zoon de diagnose autisme kreeg, moest ze minder gaan werken. Uiteindelijk was dat niet meer houdbaar en kwam ze als alleenstaande moeder in de bijstand terecht.",
            "Voor iemand die al sinds haar puberteit worstelde met depressies, was dit een zware klap. Helaas was het dieptepunt nog niet eens bereikt: na een tijdje belandden Nathalie en haar kinderen op straat. Later bleek dat zij en haar kinderen slachtoffers waren van de toeslagenaffaire.",
            "In 2019 kreeg ze een nieuwe klantmanager bij de gemeente die haar vroeg wat zij zelf eigenlijk wilde doen. \u2018Ik hield heel erg van fotografie en liet hem mijn foto\u2019s zien. Ik verwachtte dat hij me zou uitlachen, maar in plaats daarvan vertelde hij me over de sociale co\u00f6peratie de Zoete Kruimels in Zoetermeer.\u2019",
            "\u2018Als lid van de co\u00f6peratie leerde ik weer in mijzelf geloven. Als je lang in de bijstand zit, ga je op een gegeven moment echt geloven in alle vooroordelen. Ik voelde me alsof ik alleen maar mijn hand ophield en lui en waardeloos was.\u2019 Bij de co\u00f6peratie begon ze als fotograaf en breidde ze haar werkzaamheden later uit als virtual assistent.",
            "In april 2024 verdiende Nathalie genoeg om haar uitkering op te zeggen en zich in te schrijven bij de Kamer van Koophandel. \u2018Dat was een heel onwerkelijk moment: ik was aan de ene kant heel blij dat ik niet meer afhankelijk was van een uitkering en aan de andere kant was het natuurlijk heel spannend om uit de co\u00f6peratie te stappen.\u2019 Nathalie is nog steeds succesvol als ondernemer. \u2018Een negen-tot-vijfbaan is niets voor mij, ik ben heel blij dat ik dit zo kan doen. Zonder de sociale co\u00f6peratie had ik dit nooit bereikt. Het traject heeft mij mijn zelfvertrouwen teruggegeven en me doen beseffen dat ik waardevol ben.\u2019",
          ],
          pullQuote:
            "Het traject heeft mij mijn zelfvertrouwen teruggegeven en me doen beseffen dat ik waardevol ben.",
          sectionImage: {
            src: "./images/nathalie-van-den-heuvel.jpg",
            alt: "Nathalie van den Heuvel",
          },
        },
        {
          heading: "Een andere weg",
          asideLabel: "Marcel",
          paragraphs: [
            "Nathalie lijkt het schoolvoorbeeld in dit verhaal, maar Paul legt uit dat er heel veel denkbare paden zijn. \u2018Niet iedereen stroomt uit als ondernemer: sommige mensen gaan bijvoorbeeld in loondienst.\u2019",
            "Dat leek ook even het plan van Marcel Bruin. Hij belandde in de bijstand door rugproblemen en kwam terecht bij co\u00f6peratie Lichtpunt in Alkmaar waar hij drie\u00ebnhalf jaar actief was. Door zijn rugproblemen was een negen-tot-vijfbaan lastig.",
            "Op een gegeven moment besloot Marcel dat hij ondernemer wilde worden. Hij belde de gemeente en die gaf aan dat hij twee dingen kon doen. Hij kon een Bbz-uitkering aanvragen waarmee hij zelf zijn eigen bedrijf kon opstarten of lid worden van een sociale co\u00f6peratie. Marcel koos voor dat tweede en twee weken later schreef hij aan zijn bedrijfsplan. Hij begon als vormgever, maar breidde dat later uit naar vormgeving en webdesign.",
            "\u2018In het begin ging het echt als een speer, ik leerde ontzettend veel en de eerste opdrachten kwamen vrij snel binnen.\u2019 Na drie jaar bij de co\u00f6peratie werd hij aangenomen bij een webdesignbedrijf. Na een proefperiode besloot hij toch voor zichzelf te gaan. \u2018Ik heb best lang getwijfeld tussen loondienst en een eigen onderneming. Beide komen met voor- en nadelen.\u2019 Hij besloot niet terug te gaan naar de co\u00f6peratie maar een aanvraag te doen voor een Bbz-uitkering. Dat ziet hij als de volgende stap.",
            "De Bbz-uitkering zal in maanden dat hij niet voldoende verdient met zijn onderneming zijn inkomen aanvullen. \u2018Bij de co\u00f6peratie heb ik ontzettend veel geleerd en ik ben toe aan meer zelfstandigheid.\u2019 De komende drie jaar hoopt hij zijn bedrijf financieel gezond te maken, zodat hij volledig van zijn bedrijf kan leven.",
          ],
          sectionImage: {
            src: "./images/marcel-bruin.jpg",
            alt: "Marcel Bruin",
          },
        },
        {
          heading: "Een passie voor ondernemen",
          asideLabel: "Impact",
          paragraphs: [
            "Paul vindt het fantastisch om te zien dat elke deelnemer weer een ander pad bewandelt. Toch hebben ze allemaal iets gemeen. \u2018Je hoeft geen rasondernemer te zijn, maar je moet wel een passie hebben om zelf iets op te bouwen en te ondernemen. Wij kunnen je bijstaan, maar uiteindelijk doe je het allemaal zelf.\u2019",
            "Paul roept alle gemeenten in Nederland op om sociale co\u00f6peraties een kans te geven. Op de vraag naar de impact van sociale co\u00f6peraties antwoordt Paul dat dat natuurlijk wel relatief is. \u2018In mijn gemeente Delft bijvoorbeeld zijn er zo\u2019n 3000 mensen langdurig werkloos. Wij hebben gemiddeld 15 mensen in de co\u00f6peratie en twee \u00e0 drie per jaar stromen uit.\u2019",
            "Voor sommige gemeentes is dat gewoon niet voldoende. \u2018Maar toch, de co\u00f6peratie in Delft bestaat nu 8 jaar. Ik heb weleens uitgerekend wat de gemeente dan cumulatief bespaart aan uitkeringen en dan kom ik toch op een paar ton per jaar.\u2019 Bovenal benadrukt Paul de maatschappelijke waarde van de sociale co\u00f6peraties. \u2018De impact die het kan hebben op het leven van deelnemers is enorm.\u2019 De focus op uitstroom is dan ook niet essentieel.",
          ],
          pullQuote:
            "Mensen een zinvol bestaan bieden vind ik het belangrijkst.",
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
      dek: "Terwijl het landbouwdebat in Nederland op scherp stond, werkte men in de Achterhoek aan een model waarin boeren, overheden en andere partijen gezamenlijk doelen, beloningen en eigenaarschap organiseerden.",
      byline: "Door Job Koskamp",
      kicker: "Wij zijn het beleid in de praktijk",
      summary:
        "Waar dat in de rest van het land niet lukte sloten verschillende partijen in de Achterhoek een mini-landbouwakkoord door bottom-up en praktijkgerichte samenwerking. Lees hier de reconstructie.",
      heroImage: {
        src: "./images/hero-markemodel.jpg",
        alt: "Het Markemodel in de Achterhoek",
      },
      sections: [
        {
          heading: "December 2022",
          asideLabel: "Achterhoek",
          paragraphs: [
            "Het is december 2022. Wie door het land rijdt, ziet een landschap van omgekeerde vlaggen en borden met leuzen als No Farmers No Food. Twee maanden terug kwam Johan Remkes met zijn rapport, waarin de pijn en onzekerheid van veel boeren werd erkend. Tegelijkertijd concludeerde hij dat de overheid echt met beter landbouwbeleid moet komen. De sfeer in het land is uiterst gespannen. Toch staat men in de Achterhoek op het punt om tot een lokaal landbouwakkoord te komen.",
            "Carel de Vries is grondlegger van het Markemodel, het model waardoor boeren, overheden en andere betrokken partijen zoals Friesland Campina en de Rabobank, gezamenlijk tot een deal kwamen.",
          ],
        },
        {
          heading: "Ontstaan",
          asideLabel: "2013",
          paragraphs: [
            "Om precies te zijn lag de start van de kern van dit project in 2013. Destijds presenteerde LTO-Gelderland, dat bestond toen nog, een boekje met daarin een toekomstvisie van de Gelderse landbouw. Carel werd gevraagd die avond te begeleiden. Hij stelde de aanwezigen een vraag: \u201CWat gaan we hier nu praktisch mee doen?\u201D De conclusie: kringlooplandbouw moest hand in hand gaan met een eerlijk rendement. \u2018We besloten een samenwerking op te zetten tussen alle regionale boeren om samen uit te zoeken hoe we dat vorm konden geven.\u2019 Hij werd door LTO-Gelderland gevraagd een projectplan te schrijven. \u2018We hebben diezelfde avond nog een intekenlijst neergelegd voor ge\u00efnteresseerde boeren. We hadden al vrij snel 250 boerenleden in de Achterhoek.\u2019",
            "Tijdens het opzetten van dat project concludeerde Carel twee dingen. De landbouw is top-down: boeren krijgen vanuit allerlei hoeken (overheden, banken en andere grote bedrijven) eisen waar ze aan moeten voldoen en ze moeten vervolgens zelf maar uitzoeken hoe ze die eisen samenvoegen en implementeren. \u2018Dat moest anders. Boeren wilden zelf inspraak in het beleid en erkenning voor hun maatschappelijke bijdrage.\u2019 Dat zijn uiteindelijk de twee pijlers van het project geworden en vormen nog steeds de basis van het Markemodel.",
            "Verschillende partijen kregen lucht van het project. Het waterschap, de Rabobank en ForFarmers deden al vrij snel mee met de samenwerking. In 2019 liep het project op zijn eind, maar het enthousiasme was dusdanig groot, dat alle deelnemers besloten om een doorstart te maken. Er werd een vereniging opgezet en die kreeg de naam: Vruchtbare Kringloop Oost, afgekort VK-Oost.",
          ],
          pullQuote:
            "Boeren wilden zelf inspraak in het beleid en erkenning voor hun maatschappelijke bijdrage.",
        },
        {
          heading: "Het begin van meer",
          asideLabel: "Subsidie",
          paragraphs: [
            "Rond diezelfde tijd in 2019 kwamen er subsidies beschikbaar vanuit de overheid voor de totstandkoming van landbouwbeleid in samenwerking met boeren. \u2018Daar sloten wij met VK-Oost natuurlijk perfect op aan.\u2019 Carel besloot contact te zoeken met VALA (vereniging agrarisch landschapsbeheer Achterhoek), dat was de vereniging in de Achterhoek die de subsidie bij de provincie kon en mocht aanvragen. \u2018De subsidie werd toegekend en we hadden ineens een pot met geld om ons idee groots uit te werken tot een model.\u2019",
            "VK-Oost en VALA vormden een team van mensen om het model uit te werken. Dat model zou moeten voortborduren op de kernwaarden van VK-Oost: horizontale samenwerking met alle betrokken partijen, erkenning voor boeren en doelgerichte sturing. Carel werd projectleider en nodigde Johan de Kleuver uit om mee te denken aan het project. Als sociaal architect weet hij veel over sociale dynamieken en het opzetten van een horizontale organisatie.",
          ],
        },
        {
          heading: "Het Markemodel",
          asideLabel: "Twee raden",
          paragraphs: [
            "\u2018Het Markemodel is een samenwerking tussen alle betrokken partijen binnen de landbouw, waarbinnen elke partij, van boer tot overheid, evenveel rechten en plichten heeft,\u2019 aldus Johan. Samen werken al die partijen toe naar gemeenschappelijke doelen om de landbouw te verduurzamen.",
            "Johan legt uit dat het model bestaat uit twee raden. De Markeraad bestaat uit de zogenaamde \u201Csturende partijen\u201D. Dit zijn bijvoorbeeld de provincie, het rijk en het waterschap, maar ook de Rabobank en Friesland Campina. De Markeraad werkt samen \u00e9\u00e9n pakket aan doelen uit met betrekking tot bijvoorbeeld de waterkwaliteit, de stikstofuitstoot en de biodiversiteit. Daarnaast wordt er ook bedacht welke beloningen boeren ontvangen voor het behalen van bepaalde doelen.",
            "In de eerste fase van het Markemodel 2019-2021 lag de focus vooral op het uitdenken van het systeem en het opzetten van de Markeraad. Lachend vertelt Carel dat hij best verbaasd was dat de Markeraad met grote partijen zo snel tot een regionaal akkoord kwam. In maart 2021 gaf de toenmalige directeur van Friesland Campina aan dat ze juist blij waren met die regionale sturing. \u2018Als Friesland Campina geloven we niet in \u00e9\u00e9n heilige oplossing, als het gaat om de verduurzaming in de landbouw. Daarom geloven wij in het Markemodel, omdat je op regionaal niveau heel goed gericht kan sturen.\u2019",
          ],
          pullQuote:
            "Het Markemodel is een samenwerking tussen alle betrokken partijen binnen de landbouw, waarbinnen iedereen evenveel rechten en plichten heeft.",
          sectionImage: {
            src: "./images/koe-markemodel.jpg",
            alt: "Kalf en moederkoe van een natuurinclusieve boerderij in de Achterhoek",
          },
        },
        {
          heading: "Niet denken maar doen",
          asideLabel: "Pilot",
          paragraphs: [
            "Johan vertelt dat ze in 2022 vol goede moed aan de slag gingen met de tweede fase van de pilot. 35 boerenbedrijven in twee gebieden van de Achterhoek werden gevraagd om mee te doen. De Markeraad was het eens geworden en op 2 november 2022 droegen zij hun voorstel met doelen en beloningen over aan de boerenraad. De Boerenraad bestaat uit een aantal deelnemende boeren. Zij keken met hun achterban of de doelen en beloningen haalbaar waren en of het pakket nog aanpassingen behoefde.",
            "Op 9 december 2022 kwamen de twee raden samen in een dealdialoog om tot een overeenkomst te komen. Johan weet nog goed hoe spannend dat was. \u2018De rest van het land stond op z\u2019n kop, maar bij ons leek het te lukken.\u2019 En inderdaad, 9 december 2022 werd er een akkoord gesloten. Vrijwel alle partijen waren blij en dat was best uniek. Melkveehouder Hendrik Wesselink was na de dealdialoog hoopvol en optimistisch. \u2018Sinds ik als achttienjarige begon met het bedrijf heb ik nooit echt de erkenning gevoeld. Nu is dat anders, voor mij is dit geweldig.\u2019 Vanaf dat moment gingen twee groepen boeren aan de slag met het implementeren van de opgestelde doelen.",
            "Eind 2024 bleken de resultaten overweldigend positief. De streefwaarden, die waren opgesteld voor 2030 en 2024 binnen de drie segmenten: water, land en lucht, bleken bij de tussentijdse evaluatie in 2024 vrijwel allemaal behaald. Sterker nog, veel doelen voor 2030 waren ook al behaald of binnen handbereik.",
          ],
          pullQuote:
            "Sinds ik als achttienjarige begon met het bedrijf heb ik nooit echt de erkenning gevoeld. Nu is dat anders, voor mij is dit geweldig.",
        },
        {
          heading: "Opschalen: meer impact, meer risico",
          asideLabel: "Schaal",
          paragraphs: [
            "In de evaluatie van fase twee van de pilot, die mei 2025 naar buiten kwam, werd vooruitgekeken naar een eventuele opschaling van het model. Die opschaling staat inmiddels in de steigers en is behoorlijk ambitieus. Johan legt uit dat het model zich nu binnen twee sporen wil opschalen. \u2018We hebben nu een pilot gedraaid met een groep van 35 bedrijven in de Achterhoek. We moeten uiteindelijk naar circa 80 procent van alle boerenbedrijven in de Achterhoek om echt impact te maken.\u2019 Naast dat het Markemodel binnen de Achterhoek dus gaat \u201Cverdichten\u201D, willen ze ook in andere gebieden aan de slag. De hoofdfinancier, Provincie Gelderland, wilt dat het Markemodel ook uitgerold wordt in de twee andere hoofdregio\u2019s binnen de provincie.",
            "Hoewel Carel inmiddels niet meer actief betrokken is, hij werd erg ziek vlak voor de start van fase twee, benadrukt hij wel hoe belangrijk de verdichting binnen \u00e9\u00e9n regio is. \u2018Onze eerste pilot was natuurlijk met 35 bedrijven. Ik ben heel benieuwd hoe ons model functioneert als je met driehonderd bedrijven bent.\u2019 Nu wordt het project binnen de Achterhoek uitgebreid met een extra gebied, waar weer twintig \u00e0 dertig bedrijven zich bij aansluiten. Het totaal aantal deelnemende bedrijven in de provincie komt dan neer op ongeveer honderdvijftig. \u2018Ik had graag gezien dat bijvoorbeeld alle VK-Oost boeren waren uitgenodigd, dan heb je er al driehonderd en kan je \u00e9cht de impact per regio zien.\u2019 Carel benadrukt daarnaast dat je bij opschaling ook moet zorgen dat alle partijen aangehaakt blijven. \u2018De kern van het Markemodel is dat alle deelnemende partijen zich eigenaar voelen. Er bestaat het risico dat de overheid een te grote rol op zich neemt.\u2019",
            "Hoewel Johan de obstakels van Carel snapt, begrijpt hij ook waarom de provincie hier snel mee door wil. Hij geeft aan dat er al sprake van is om het project ook in andere provincies uit te rollen. \u2018Er is nu momentum met de potentie om dit model landelijk uit te rollen.\u2019 Peter Drenth, destijds betrokken namens de provincie ging zelfs een stapje verder. \u2018Voor mij is het Markemodel het model van de toekomst. Met deze pilot en het vervolg daarop zijn we bezig een nieuwe systematiek. Het Markemodel is daardoor voor de rest van Europa ook relevant en interessant.\u2019",
          ],
          pullQuote:
            "De kern van het model is dat alle deelnemende partijen zich eigenaar voelen. Er bestaat het risico dat de overheid een te grote rol op zich neemt.",
        },
      ],
      relatedStories: ["main", "lansco"],
    },
  },
};

window.SITE_CONTENT = SITE_CONTENT;
