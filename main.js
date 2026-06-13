/* ═══════════════════════════════════════════════════
   data.js — CM, RUB, SEC data definitions
   ═══════════════════════════════════════════════════ */

const CM = [
  {id:'intro',  title:'Introductie',         icon:'🏛', color:'#7DC242', lo:null,
   num:1, desc:'Aanleiding, aanpak en context van het afstudeertraject.',
   tags:['Aanleiding','Faillissement','Leerpunten','Context']},
  {id:'koers',  title:'Koers Bepalen',        icon:'🧭', color:'#4a7adc', lo:'koers',
   num:2, desc:'LLO 1 — Commerciële koers uitzetten op basis van marktanalyse en visie.',
   tags:['Netnografie N=80','SWOT','DESTEP','10-jaar grens','BMC']},
  {id:'waarde', title:'Waarde Creëren',       icon:'💡', color:'#2bbfaa', lo:'waarde',
   num:3, desc:'LLO 2 — Duurzame waarde creëren voor klant, organisatie en maatschappij.',
   tags:['VPC 3 segmenten','Interviews N=8','FOETSJE','Leisure Manager']},
  {id:'biz',    title:'Business Development', icon:'📡', color:'#F47C20', lo:'biz',
   num:4, desc:'LLO 3 — Onderscheidende concepten ontwikkelen in co-creatie met stakeholders.',
   tags:['Co-creatie','Weertrigger','ROI 217%','BML-cyclus']},
  {id:'real',   title:'Realiseren',           icon:'⚙️', color:'#e8407a', lo:'real',
   num:5, desc:'LLO 4 — Duurzaam commercieel product realiseren met aantoonbare impact.',
   tags:['GANTT','€2.960,-','Borging 3 lagen','Impact']},
  {id:'refl',   title:'Reflectie & Framework',icon:'🔍', color:'#9678dc', lo:null,
   num:6, desc:'Persoonlijke groei, professionele ontwikkeling en het Leisure Manager Framework.',
   tags:['Professionele groei','LM Framework','3 Cases','Slotconclusie']}
];

const RUB = {
  koers:{
    title:'LLO 1 — Koers Bepalen',
    noten:'Inzicht in de situatie · Visie · Formuleren van de koers',
    niveaus:{
      bekwaam:'De analyse toont een compleet landschap van het vraagstuk. De student heeft deze analyse gebruikt om een visie over het vraagstuk te vormen en heeft hiermee de koers geformuleerd. In het proces richting koers bepalen heeft de student de belangrijkste stakeholders betrokken.',
      gevorderd:'Bij de analyse heeft de student verscheidene kijkkaders toegepast, deze gedegen onderbouwd en toont zo een uitgebreid landschap van het vraagstuk. Vervolgens geeft de visie richting voor duurzame verandering. De door de student geformuleerde koers wordt gedragen door enkele stakeholders.',
      excellent:'Bij de analyse is buiten de gebaande paden getreden. Daarnaast geeft de visie richting voor vernieuwing/verrassing. Verder heeft de student de koers dermate krachtig geformuleerd dat deze in de organisatie zichtbaar wordt.'
    },
    cols:[
      {t:'Inzicht in de situatie', color:'#4a7adc', items:[
        'Passende theorieën toegepast om inzicht in de situatie te krijgen (BMC, SWOT, DESTEP, Netnografie N=80)',
        'Situatie methodisch geanalyseerd met onderbouwd kijkkader',
        'Relevante context met betrekking tot het vraagstuk geanalyseerd — gefilterd wat wel en niet relevant is',
        'In beeld gebracht welke belangen er spelen bij de opdrachtgever en andere relevante stakeholders',
        'Verschillende invalshoeken gebruikt om naar het probleem te kijken (3D perspectief — gevorderd)'
      ]},
      {t:'Visie', color:'#7aacff', items:[
        'Verbinding gelegd tussen belangen, kennis en middelen',
        'Kansen in de markt op waarde geschat en meegenomen in de koers',
        'Met de visie ingegaan op een (blijvend) concurrentievoordeel (indoor-status als USP)',
        'Op basis van het inzicht in de situatie een passende probleemafbakening / strategische richting geformuleerd'
      ]},
      {t:'Formuleren van de koers', color:'#b0d0ff', items:[
        'Koers geformuleerd en in woord en beeld gebracht (Koers Bepalen: Leisure Management)',
        'Koers gebaseerd op input van relevante stakeholders (directie, doelgroep, netnografie)',
        'Koers gecommuniceerd met de betrokken stakeholders',
        'Koers aangepast aan de context en opdrachtgever (Miniworld Rotterdam)'
      ]}
    ]
  },
  waarde:{
    title:'LLO 2 — Waarde Creëren',
    noten:'Inzicht in de stakeholders · Interpretatie · De gekozen waarde',
    niveaus:{
      bekwaam:'De student gebruikt kennis vanuit de markt en theorie om richting te geven aan het concept. De student kan duiden wat de waarde is van zijn concept aan de hand van zijn onderzoek. De beoogde waarde is waardevol voor de organisatie/afdeling, de klant en past bij het probleem/de geformuleerde koers.',
      gevorderd:'De richting aan het concept wordt gegeven door vervlochten kennis vanuit de markt en de theorie. De student kan naast de beoogde waarde ook de risico\'s duiden aan de hand van zijn onderzoek. De beoogde waarde is waardevol voor meerdere organisaties/afdelingen en andere stakeholders.',
      excellent:'De student kan (de omgeving van) de stakeholders weergeven door buiten de gebaande paden te treden. De student is in staat om kritisch in te spelen op nieuwe inzichten die tijdens het onderzoek naar voren komen. De beoogde waarde is waardevol voor de maatschappij.'
    },
    cols:[
      {t:'Inzicht in de stakeholders', color:'#2bbfaa', items:[
        'Doelgroepkeuze gebaseerd op relevant onderzoek (wetenschappelijk: Mowen & Graefe, Rozendaal)',
        'Inzicht in klantgedrag aan de hand van desk- en fieldresearch (netnografie + 8 diepte-interviews)',
        'Achterliggende motivaties in beeld gebracht (de vrijetijdspuzzel van de sandwich-generatie)',
        'Wensen van de klant, organisatie en het kader vanuit de maatschappij meegenomen in de waardecreatie',
        'Gebruik gemaakt van co-creatie (N=8 diepte-interviews als actieve sturingsbron voor het concept)'
      ]},
      {t:'Interpretatie', color:'#7fe8d8', items:[
        'Aantoonbaar gemaakt dat er sprake is van waardecreatie (VPC drie segmenten uitgewerkt)',
        'Aangegeven wat nodig is om tot de waarde te komen (Product-vóór-Promotie als dwingende voorwaarde)',
        'De waarde volledig aannemelijk gemaakt voor belanghebbenden (FOETSJE-toetsing score 61/70)',
        'De analyse vertaald naar een passend concept bij de gekozen waarde (Succesgarantie + Atelier-Museum)'
      ]},
      {t:'De gekozen waarde', color:'#b0f8ee', items:[
        'Een duurzame invulling van de gekozen koers (Leisure Management → Succesgarantie)',
        'Duidelijk een toevoeging voor stakeholders en mogelijk ook de maatschappij (sectorbreed framework)',
        'In lijn met de geformuleerde koers (Logistieke Ontzorging sluit aan op Leisure Management)'
      ]}
    ]
  },
  biz:{
    title:'LLO 3 — Business Development',
    noten:'Concept · Draagvlak · Optimalisatie',
    niveaus:{
      bekwaam:'Er is kritisch gereflecteerd op het concept en er heeft bijstelling/aanpassing plaatsgevonden op basis van input van stakeholders. Het concept is een oplossing voor en is passend bij het probleem. De student heeft bewezen draagvlak bij een aantal relevante stakeholders voor het concept en de cijfermatige onderbouwing van het concept is realistisch en in redelijke mate relevant en overtuigend.',
      gevorderd:'Het concept is op een proactieve manier tot stand gekomen door verschillende aanpassingen/bijstellingen te maken. Het concept is vernieuwend gezien de context en gedegen onderbouwd. De student heeft niet alleen draagvlak, maar ook de juiste stakeholders betrokken bij de ontwikkeling van het concept.',
      excellent:'De student heeft het concept op meerdere manieren getest en testresultaten zijn gebruikt om het concept te verbeteren. Het concept draagt oplossingen aan voor complexe (taaie) problematieken van de organisatie. Dit concept is volledig tot stand gekomen door co-creatie en de cijfermatige onderbouwing is realistisch, volledig relevant en zeer overtuigend.'
    },
    cols:[
      {t:'Concept', color:'#F47C20', items:[
        'Concept ontstaan door een creatief denkproces (Dynamische Weertrigger via Infoplaza KNMI API)',
        'Beargumenteerd vanuit eerdere analyses, onderzoeksresultaten en learnings vanuit de theorie',
        'Creatief: legt bijzondere verbanden, is origineel voor het bedrijf en/of de branche',
        'Oplossing voor complexe taaie problematiek: one-size-fits-all doorbroken via 10-jaar grens + weertargeting'
      ]},
      {t:'Draagvlak', color:'#ffc07a', items:[
        'Gedragen en financieel onderbouwd concept ontwikkeld (business case: €2.960,- pilot, ROI 217%)',
        'Vernieuwing gebracht voor belangrijke stakeholders (directie, externe branchepartners)',
        'Rekening gehouden met verschillende belangen (management, bezoeker, maatschappij)',
        'Relevante en juiste stakeholders betrokken (focusgroep N=8, Spoorwegmuseum, Museon-Omniversum)'
      ]},
      {t:'Optimalisatie', color:'#ffe8c8', items:[
        'Geanticipeerd op veranderingen tijdens het traject (faillissement MWR → sectorale blauwdruk)',
        'Actiegericht onderzoek uitgevoerd en testfasen doorlopen (BML-cyclus: 2 prototypen getest)',
        'Concept getest en testresultaten benut ter verbetering (2 concrete bijsturingen aangetoond)',
        'Initiatief getoond om tot optimalisatie te komen — iteratief gewerkt gedurende het hele traject'
      ]}
    ]
  },
  real:{
    title:'LLO 4 — Realiseren',
    noten:'Impact · Leiderschap · Duurzaamheid van de oplossing',
    niveaus:{
      bekwaam:'De student heeft de beoogde waarde concreet en consistent geoperationaliseerd en heeft concrete stappen genomen om op korte termijn impact te realiseren. Hierbij heeft de student de benodigde stakeholders betrokken. De student heeft gedurende het gehele proces de regie in handen.',
      gevorderd:'De student heeft de beoogde waarde concreet en consistent geoperationaliseerd en heeft concrete stappen genomen om op lange termijn impact te realiseren/borgen. Hierin heeft de student de benodigde stakeholders betrokken. De student kiest tijdens het gehele proces beargumenteerd een aanpak.',
      excellent:'De student heeft de beoogde waarde concreet en consistent geoperationaliseerd en heeft op meerdere manieren op lange termijn impact gerealiseerd/geborgd. Hierin heeft de student de benodigde stakeholders betrokken en de organisatie op lange termijn ontzorgd.'
    },
    cols:[
      {t:'Impact', color:'#e8407a', items:[
        'Gezorgd voor positieve invloed vanuit commerciële doelstellingen en financiële uitgangspunten',
        'Concrete stappen ondernomen om de beoogde waarde te realiseren (pilot €2.960,- uitgewerkt)',
        'De gewenste effecten behaald / alles in werking gesteld om resultaat te behalen (extern gevalideerd)',
        'Impact gecreëerd passend bij de geformuleerde koers (N=8 validatie + branchebevestiging)'
      ]},
      {t:'Leiderschap', color:'#f7a0c0', items:[
        'Gedurende het gehele traject proactief opgesteld (ook na faillissement regie behouden)',
        'Leiding gegeven aan de uitvoering van het proces (plan omgevormd tot sectorale blauwdruk)',
        'Beoogde resultaten bereikt onder druk van deadlines en procedures (1 week voor deadline: faillissement)',
        'Doorzettingsvermogen getoond (extern validatie gezocht bij Spoorwegmuseum en Museon-Omniversum)',
        'Concrete acties ondernomen gericht op het verkrijgen van commitment van de stakeholders'
      ]},
      {t:'Duurzaamheid', color:'#fde8f0', items:[
        'Oplossing gevonden die wordt gedragen in de organisatie (3-lagen borgingsplan)',
        'Zowel korte- als lange termijn acties geborgd (wekelijks protocol + geautomatiseerde KNMI-trigger)',
        'Geborgd dat de gerealiseerde oplossing in stand blijft na het vertrek van de consultant',
        'Effectiviteit van de beoogde borging onderbouwd (sectorale overdraagbaarheid via LM Framework)',
        'Oplossingen helder beschreven/weergegeven zodat ze later nagelezen kunnen worden (dit portfolio)'
      ]}
    ]
  }
};

const SEC = {
  intro:[
    {id:'welkom',        l:'Welkom & Context',       i:'🏛', rubric:[], group:'Context'},
    {id:'aanleiding',    l:'De Aanleiding',           i:'💡', rubric:['Aanleiding MWR','Project Amsterdam'], group:'Context'},
    {id:'aanpak',        l:'Mijn Aanpak',             i:'🔬', rubric:['Onderzoeksaanpak','Methodologie'], group:'Context'},
    {id:'faillissement', l:'Het Faillissement',       i:'⚠️', rubric:['Actuele context','Strategische simulatie'], group:'Context'},
    {id:'leerpunt',      l:'Leerpunt',                i:'📖', rubric:['Professionele reflectie'], group:'Context'}
  ],
  koers:[
    {id:'markt',      l:'Marktcontext',               i:'🌍', rubric:['Inzicht situatie','Externe analyse'], group:'Inzicht in de situatie'},
    {id:'probleem',   l:'Het Kernprobleem',            i:'🎯', rubric:['Inzicht situatie','Probleemafbakening'], group:'Inzicht in de situatie'},
    {id:'netno',      l:'Netnografie (N=80)',          i:'🔍', rubric:['Inzicht situatie','Methodiek'], group:'Inzicht in de situatie'},
    {id:'reviews',    l:'Review Repository',           i:'💬', rubric:['Inzicht situatie','Data-analyse'], group:'Inzicht in de situatie'},
    {id:'destep',     l:'DESTEP-analyse',              i:'🌐', rubric:['Inzicht situatie','Externe factoren'], group:'Inzicht in de situatie'},
    {id:'bmc',        l:'Business Model Canvas',       i:'🗂', rubric:['Inzicht situatie','Interne analyse'], group:'Inzicht in de situatie'},
    {id:'trends',     l:'Trends & Psychografie',       i:'📈', rubric:['Visie','Marktkansen'], group:'Visie'},
    {id:'10jaar',     l:'De 10-jaar Grens',            i:'🧒', rubric:['Visie','Wetenschappelijke basis'], group:'Visie'},
    {id:'swot',       l:'SWOT & Confrontatiematrix',   i:'📊', rubric:['Visie','Strategische richting'], group:'Visie'},
    {id:'scenarios',  l:"Strategische Scenario's",     i:'⚖️', rubric:['Formuleren koers','Scenario-analyse'], group:'Formuleren van de koers'},
    {id:'koerskeuze', l:'Gekozen Koers',               i:'✅', rubric:['Formuleren koers','Stakeholderbetrokkenheid'], group:'Formuleren van de koers'}
  ],
  waarde:[
    {id:'beslisser',  l:'De Centrale Beslisser',      i:'👩', rubric:['Inzicht stakeholders','Doelgroepkeuze'], group:'Inzicht in de stakeholders'},
    {id:'sandwich',   l:'Sandwich-generatie',          i:'🥪', rubric:['Inzicht stakeholders','Motivaties'], group:'Inzicht in de stakeholders'},
    {id:'interviews', l:'Diepte-interviews (N=8)',     i:'🎤', rubric:['Inzicht stakeholders','Co-creatie'], group:'Inzicht in de stakeholders'},
    {id:'vpc',        l:'Value Proposition Canvas',    i:'🎯', rubric:['Interpretatie','Waardecreatie'], group:'Interpretatie'},
    {id:'richtingen', l:'Drie Strategische Richtingen',i:'🛤️', rubric:['Interpretatie','Concept-richting'], group:'Interpretatie'},
    {id:'foetsje',    l:'FOETSJE-toetsing',            i:'📋', rubric:['Interpretatie','Haalbaarheid'], group:'Interpretatie'},
    {id:'oplossing',  l:'De Gekozen Oplossing',        i:'🏆', rubric:['De gekozen waarde','Duurzaamheid'], group:'De gekozen waarde'}
  ],
  biz:[
    {id:'cocreatie',  l:'Co-creatie & Bijsturing',     i:'🤝', rubric:['Concept','Optimalisatie'], group:'Concept & Optimalisatie'},
    {id:'kanalen',    l:'Kanaalselectie (FOETSJE)',     i:'📻', rubric:['Concept','Onderbouwing'], group:'Concept & Optimalisatie'},
    {id:'weer',       l:'Dynamische Weertrigger',       i:'🌧', rubric:['Concept','Creatief denkproces'], group:'Concept & Optimalisatie'},
    {id:'banners',    l:'De Banners (Uitingen)',        i:'🖼', rubric:['Concept','10-jaar grens toegepast'], group:'Concept & Optimalisatie'},
    {id:'fin',        l:'Financiële Onderbouwing',      i:'💶', rubric:['Draagvlak','ROI 217%'], group:'Draagvlak'},
    {id:'validatie',  l:'Externe Validatie',            i:'🏛', rubric:['Draagvlak','Branchebevestiging'], group:'Draagvlak'},
    {id:'draagvlak',  l:'Draagvlak & Stakeholders',    i:'🤝', rubric:['Draagvlak','Optimalisatie'], group:'Draagvlak'}
  ],
  real:[
    {id:'definitie',  l:'Definitie & Strategische Fit',i:'📌', rubric:['Impact','Operationalisatie'], group:'Impact'},
    {id:'planning',   l:'Projectplanning (GANTT)',      i:'📅', rubric:['Impact','Leiderschap'], group:'Leiderschap'},
    {id:'kosten',     l:'Financiële Verantwoording',    i:'💶', rubric:['Impact','Financiële verantwoordelijkheid'], group:'Impact'},
    {id:'borging',    l:'Borging & Duurzaamheid',       i:'🔒', rubric:['Duurzaamheid','Langetermijn borging'], group:'Duurzaamheid'},
    {id:'impact',     l:'Impact & Resultaten',          i:'🏆', rubric:['Impact','Leiderschap','Duurzaamheid'], group:'Impact'}
  ],
  refl:[
    {id:'persoonlijk', l:'Persoonlijke Reflectie',     i:'💭', rubric:['Persoonlijke groei'], group:'Reflectie'},
    {id:'professioneel',l:'Professionele Groei',       i:'📈', rubric:['Professionele ontwikkeling'], group:'Reflectie'},
    {id:'feedback',    l:'Feedback Stagiaires',         i:'💬', rubric:['Externe feedback'], group:'Reflectie'},
    {id:'fw_intro',    l:'Leisure Manager Framework',  i:'🗺', rubric:['Sectorale overdraagbaarheid'], group:'Framework'},
    {id:'fw_model',    l:'Het Drietraps-model',        i:'🔢', rubric:['Implementatiemodel'], group:'Framework'},
    {id:'case_spoor',  l:'Case: Spoorwegmuseum',       i:'🚂', rubric:['Praktijkvalidatie'], group:'Framework'},
    {id:'case_villa',  l:'Case: Villa Zebra',          i:'🎨', rubric:['Praktijkvalidatie'], group:'Framework'},
    {id:'case_duin',   l:'Case: Duinrell',             i:'🎢', rubric:['Praktijkvalidatie'], group:'Framework'},
    {id:'conclusie',   l:'Slotconclusie',              i:'🎓', rubric:['Eindconclusie'], group:'Reflectie'}
  ]
};
