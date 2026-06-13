/* ═══════════════════════════════════════════════════
   content.js — All 44 portfolio content sections
   ═══════════════════════════════════════════════════ */

const CO={

'intro_welkom':()=>`<div class="cs ac">
<div class="che"><div class="cey" style="background:#f0fae8;color:#3d7a10">🏛 Introductie</div>
<h1>Welkom bij mijn Afstudeerportfolio</h1>
<p class="hs">Als consultant stapte ik een wereld binnen vol passie en vakmanschap bij Miniworld Rotterdam. In dit portfolio neem ik je mee in mijn missie om de commerciële frictie op te lossen: een organisatie die innoveert in haar atelier, maar marketing bedrijft alsof elke bezoeker gelijk is.</p></div>
<div class="sr">
${stat('€14,90','Ticketprijs MWR','#3d7a10')}
${stat('6.711','Bezoekers = €100k','#1a2744')}
${stat('N=80','Reviews geanalyseerd','#2bbfaa')}
${stat('N=8','Diepte-interviews','#F47C20')}
${stat('217%','Geprognosticeerde ROI','#e8407a')}
${stat('€2.960','Pilot-investering','#9678dc')}
</div>
<div class="cg">
${card('Groen in tekst','Actualiteit','Passages in het groen beschrijven de actuele situatie van MWR, inclusief het faillissement en de externe validatie na het wegvallen van de opdrachtgever.','#7DC242')}
${card('Goud in tekst','Persoonlijk','Passages in het goud zijn persoonlijke reflecties over mijn eigen groei, leerpunten en professionele ontwikkeling gedurende het traject.','#f5c842')}
</div>
<h3>De Centrale Missie</h3>
<p>Miniworld Rotterdam beschikt over uitzonderlijk vakmanschap, maar communiceert met een 'one-size-fits-all' benadering: dezelfde boodschap voor de 4-jarige peuter, de 12-jarige tech-nerd én de grootouder. Dit portfolio beschrijft hoe ik die frictie heb onderzocht, geanalyseerd en opgelost met een wetenschappelijk onderbouwd concept dat ook na het faillissement van MWR zijn universele waarde bewijst.</p>
${h('Structuur van dit portfolio','Dit portfolio volgt de vier LLO\'s van de opleiding Commerciële Economie: <strong>Koers Bepalen → Waarde Creëren → Business Development → Realiseren</strong>. Elke sectie bevat een rubric-badge die aangeeft welk beoordelingscriterium daar aan bod komt.')}
</div>`,

'intro_aanleiding':()=>`<div class="cs ac">
<h2>De Aanleiding</h2>
<p class="lead">Mijn start bij Miniworld Rotterdam werd gekenmerkt door een sfeer van enorme ambitie. Tijdens mijn allereerste kennismakingsgesprek werd de nadruk gelegd op <strong>Project Amsterdam</strong>.</p>
<h3>Project Amsterdam: het financiële vliegwiel</h3>
<p>Project Amsterdam betrof het vervaardigen van miniatuurhuisjes voor een extern museum. De directie schetste een scenario waarbij dit project een budget van circa <strong>€ 100.000,-</strong> vrij zou maken voor marketing en professionalisering.</p>
<div class="sr">
${stat('€100.000','Verwacht budget','#F47C20')}
${stat('6.711','Bezoekers equivalent','#1a2744')}
${stat('33×','Groter dan de pilot','#e8407a')}
${stat('€2.960','Wat het werkelijk werd','#7DC242')}
</div>
<div class="cg">
${card('De Ambitie','Professionalisering','Het budget zou worden ingezet als vliegwiel: niet voor snelle kortingsacties, maar voor structurele professionalisering van marketing en bezoekerservaring.','#7DC242')}
${card('De Werkelijkheid','Liquiditeitscrisis','Betalingen voor Project Amsterdam bleven achter. Dit leidde tot een acute liquiditeitscrisis die uiteindelijk uitmondt in het faillissement van Miniworld Rotterdam.','#e8407a')}
</div>
<h3>De Aanleiding voor dit Onderzoek</h3>
<p>Achter de schermen van Miniworld zag ik hoe er dagelijks aan indrukwekkende maquettes werd gebouwd — met een passie en vakmanschap die bezoekers diep raakten. Maar op de werkvloer merkte ik een scherpe frictie: terwijl het maakatelier innoveert, spreekt de marketing nog steeds iedereen op precies dezelfde manier aan, van de kleuter tot de opa.</p>
<p>Toen Project Amsterdam voor de deur stond, zag ik mijn kans: ik wilde dit budget niet gebruiken voor een snelle kortingsactie, maar als vliegwiel om de organisatie écht te professionaliseren. Het aanleiding-probleem was helder: een <em>one-size-fits-all</em> benadering in een markt die vraagt om differentiatie.</p>
${bq('We leven in een tijd die experts omschrijven als een "constante globale crisis". Voor attracties is simpelweg "open zijn" niet meer genoeg; je moet je relevantie elke dag opnieuw bewijzen.','Leask et al. (2024)')}
</div>`,

'intro_aanpak':()=>`<div class="cs ac">
<h2>Mijn Aanpak: Van 'vlieg op de muur' naar tastbaar concept</h2>
<p class="lead">Ik heb dit onderzoek aangepakt als een trechter — van breed verkennend naar diepgaand valideren — met één leidend principe: <strong>geen aannames, maar authentieke data</strong>.</p>
<div class="tl">
<div class="ti"><div class="tm" style="color:#3d7a10">Fase 1 — Intern & Extern Landschap</div>
<h4>Netnografie + interne modellen</h4>
<p>Als 'vlieg op de muur' analyseerde ik 80 online reviews (netnografie). Tegelijkertijd bracht ik de interne situatie in kaart met het Business Model Canvas, de Stakeholderanalyse, SWOT-analyse en DESTEP-analyse.</p></div>
<div class="ti"><div class="tm" style="color:#4a7adc">Fase 2 — Koers bepalen</div>
<h4>Scenario's formuleren op basis van data</h4>
<p>Op basis van de analyses formuleerde ik twee strategische scenario's (Cultural Capital vs. Leisure Management) en testte deze op haalbaarheid via de confrontatiematrix en wetenschappelijke literatuur.</p></div>
<div class="ti"><div class="tm" style="color:#2bbfaa">Fase 3 — Waarde creëren</div>
<h4>8 diepte-interviews met de leisure manager</h4>
<p>Acht semi-gestructureerde diepte-interviews met de vrouwelijke beslisser (de 'leisure manager') valideerden mijn aannames en stuurden het concept actief bij. Co-creatie als methode.</p></div>
<div class="ti"><div class="tm" style="color:#F47C20">Fase 4 — Business Development</div>
<h4>Build-Measure-Learn cyclus</h4>
<p>Via de BML-cyclus ontwikkelde ik de Dynamische Weertrigger: twee iteraties, twee concrete bijsturingen op basis van interviewresultaten, FOETSJE-toetsing van drie kanaalopties.</p></div>
<div class="ti"><div class="tm" style="color:#e8407a">Fase 5 — Realiseren & Borging</div>
<h4>Operationeel plan + externe validatie</h4>
<p>Projectplanning (GANTT), financiële onderbouwing (ROI 217%), borgingsplan in drie lagen. Na het faillissement: externe validatie bij Spoorwegmuseum en Museon-Omniversum.</p></div>
</div>
<h3>Waarom deze aanpak?</h3>
<p>Ik heb bewust gekozen voor deze route omdat ik niet wilde varen op onderbuikgevoel, maar op <strong>authentieke data</strong>. Door de focus te leggen op Demand Capture — het vangen van de vraag op het moment dat het regent — maken we optimaal gebruik van de unieke indoor-status van MWR. Mijn belangrijkste strategische keuze: <strong>Product-vóór-Promotie</strong>. We kunnen pas beloven dat een uitje altijd succesvol is, als de techniek op de vloer 100% werkt.</p>
</div>`,

'intro_faillissement':()=>`<div class="cs ac">
<h2>Het Faillissement van Miniworld Rotterdam</h2>
${hr('⚠ Definitief Faillissement — Juni 2025','Gedurende de afronding van dit traject is de situatie drastisch verslechterd. De gehoopte financiële impuls bleef uit doordat betalingen voor Project Amsterdam achterbleven, wat leidde tot een acute liquiditeitscrisis. Ondanks een poging tot herkapitalisatie door aandelenverkoop, kon het tij niet worden gekeerd. <strong>Miniworld Rotterdam is officieel failliet verklaard.</strong>')}
<h3>Transformatie van dit Portfolio</h3>
<p>Nu Miniworld Rotterdam officieel failliet is verklaard, is de aard van dit portfolio getransformeerd van een <strong>specifiek bedrijfsadvies</strong> naar een <strong>strategische simulatie</strong>. Dit document fungeert niet langer alleen als een dossier voor een doorstarter, maar als een bewezen business case voor de vrijetijdssector als geheel.</p>
<div class="cg">
${card('Externe branchevalidatie','Spoorwegmuseum + Museon-Omniversum','Het concept is voorgelegd aan twee branchepartners. Beiden bevestigden de strategische logica als direct toepasbaar — onafhankelijk van Miniworld Rotterdam.','#7DC242')}
${card('Financieel bewijs','ROI van 217% extern bevestigd','De financiële onderbouwing (break-even bij 199 bezoekers) werd door een brancheprofessional als realistisch en overtuigend beoordeeld.','#2bbfaa')}
${card('Sectorale overdraagbaarheid','Leisure Manager Framework','Het concept is doorvertaald naar drie concrete praktijkcases: Spoorwegmuseum, Villa Zebra en Duinrell — bewijs van universele toepasbaarheid.','#F47C20')}
</div>
<h3>Wat dit betekent voor de beoordeling</h3>
<p>Dit portfolio laat zien hoe je als consultant, zelfs wanneer een organisatie wegvalt, een professioneel product oplevert dat direct waarde toevoegt aan de markt. De koers, de analyses en de aanbevelingen in dit document zijn <em>aantoonbaar relevant</em> — bevestigd door externe partners in de branche.</p>
${bq('Een consultant mag nooit varen op enkel operationele passie, maar moet strategische keuzes baseren op geverifieerde financiële data.','Persoonlijk leerpunt — Niels Borst')}
</div>`,

'intro_leerpunt':()=>`<div class="cs ac">
<h2>Cruciaal Leerpunt: Proof of Funds</h2>
<div class="rf pe"><div class="rl">Persoonlijke Reflectie</div>
<p>Mijn start bij Miniworld werd gekenmerkt door een sfeer van enorme ambitie. Al tijdens mijn allereerste kennismakingsgesprek werd de strategische koers gekoppeld aan de beloofde ton van Project Amsterdam. Tijdens mijn eerste stageweken zag ik dit project in het atelier elke dag tastbaar worden; ik zag hoe het team onder hoge druk werkte om de maquettes af te krijgen.</p>
<p>Achteraf bezien is dit een cruciaal leerpunt geweest. Gedreven door het enthousiasme op de werkvloer, heb ik het bestaan van dit budget te snel als een onomstotelijke waarheid aangenomen. <strong>Ik heb verzuimd de financiële status of contracten zelf te verifiëren voordat ik mijn volledige koers hierop baseerde.</strong></p></div>
<h3>De Drie Lessen</h3>
<div class="cg">
${card('Les 1','Proof of Funds is verplicht','Een professional mag nooit strategische keuzes baseren op mondelinge toezeggingen. Altijd vragen naar ondertekende contracten, bankafschriften of betalingsbevestigingen.','#e8407a')}
${card('Les 2','Passie ≠ Data','Het enthousiasme van de werkvloer is een betrouwbare indicator van cultuur, maar geen betrouwbare indicator van financiële gezondheid. Twee verschillende signalen.','#F47C20')}
${card('Les 3','Plan B altijd klaar','Bij elk concept direct een scenario mét en zonder budget uitwerken. De pilot van €2.960,- bewijst dat waardevol werk ook met minimale middelen mogelijk is.','#7DC242')}
</div>
<h3>Wat ik meeneem</h3>
<p>Deze rauwe praktijkervaring heeft mijn commercieel bewustzijn en professionele weerbaarheid definitief gevormd. Ik verlaat mijn studie nu met veel meer zelfvertrouwen en kennis over hoe de zakenwereld echt werkt. Nu kan ik vol vertrouwen aan mijn premaster Marketing Management aan de Tilburg University beginnen.</p>
${h('Resultante','Ondanks het wegvallen van de opdrachtgever heb ik de regie gepakt en het plan omgevormd van een uitvoeringsgericht verslag naar een universele Strategische Blauwdruk voor de sector — extern gevalideerd en direct inzetbaar.')}
</div>`,

'koers_markt':()=>`<div class="cs ac">
<div class="che"><div class="cey" style="background:#e8edf8;color:#1a2744">🧭 LLO 1 — Koers Bepalen</div>
<h1>Marktcontext: De Constante Globale Crisis</h1>
<p class="hs">De vrijetijdssector bevindt zich in een landschap dat door Leask et al. (2024) wordt omschreven als een "constante globale crisis". Opeenvolgende schokken hebben de markt blijvend veranderd.</p></div>
<h3>Vier Dominante Marktfactoren</h3>
<div class="cg">
${card('Economische druk','Inflatie & Prijsgevoeligheid','Macro-economische factoren zoals inflatie (piek 11,6% in 2022) en economische recessie hebben de consument aanzienlijk prijsgevoeliger gemaakt. In tijden van economische onzekerheid zoekt de bezoeker naar een "succesgarantie": de zekerheid dat hun investering in tijd en geld daadwerkelijk loont.','#e8407a')}
${card('Post-COVID','Kritieke herstelfase','Miniworld bevindt zich in een kritieke herstelfase na de pandemie. Langdurige sluitingen en beperkte budgetten hebben de noodzaak voor een nieuwe koers vergroot, aangezien enkel "zichtbaarheid" niet langer voldoende is om commerciële veerkracht te borgen in een veranderde markt.','#F47C20')}
${card('Concurrentie','Verzadigd speelveld','De concurrentiedruk in de regio Rotterdam is hoog. MWR strijdt niet alleen met directe iconen zoals Diergaarde Blijdorp en de Euromast, of thematische parken zoals Madurodam, maar ook met de opkomst van indirecte digitale entertainmentvormen.','#1a2744')}
${card('Sectorshift','Node of Experience','De sector verschuift van statische, productgerichte modellen naar een benadering waarbij de attractie fungeert als een "node of experience". Bezoekers verwachten niet langer louter een activiteit, maar een knooppunt waar persoonlijke emotie, betekenisgeving en co-creatie centraal staan.','#2bbfaa')}
</div>
<h3>Concurrentieanalyse</h3>
<table class="dt">
<thead><tr><th>Type</th><th>Concurrent</th><th>Bedreiging voor MWR</th><th>Strategische respons</th></tr></thead>
<tbody>
<tr><td>Directe iconen</td><td>Diergaarde Blijdorp, Euromast, Spido</td><td>Hogere naamsbekendheid, groter aanbod</td><td>Indoor-USP als weersvoordeel</td></tr>
<tr><td>Thematisch</td><td>Madurodam, Spoorwegmuseum, Lego Miniland</td><td>Vergelijkbaar concept, sterker merk</td><td>Leeftijdssegmentatie via 10-jaar grens</td></tr>
<tr><td>Internationaal</td><td>Miniatur Wunderland Hamburg</td><td>Kwaliteitsstandaard waar bezoekers MWR aan spiegelen</td><td>Atelier-Museum positionering</td></tr>
<tr><td>Digitaal</td><td>Netflix, Disney+, Roblox, Fortnite</td><td>Schaarse aandacht boven 10 jaar</td><td>Technische diepgang als tegenwicht</td></tr>
<tr><td>Substituten</td><td>Kerstshow Intratuin, gratis speelplekken</td><td>Lage drempel voor budgetbewuste planner</td><td>Succesgarantie als premium waarde</td></tr>
</tbody>
</table>
${bq('"Constante globale crisis" — Opeenvolgende schokken (COVID, inflatie, digitalisering) hebben de markt blijvend veranderd. Attracties die enkel inzetten op productpromotie, verliezen terrein.','Leask et al. (2024)')}
</div>`,

'koers_probleem':()=>`<div class="cs ac">
<h2>Het Kernprobleem: One-Size-Fits-All</h2>
<p class="lead">Het grootste strategische knelpunt in de huidige operatie van Miniworld Rotterdam is de gehanteerde <strong>'one-size-fits-all' benadering</strong> in de marktcommunicatie. Hoewel de attractie beschikt over een zeer divers publiek, worden al deze segmenten momenteel op een identieke wijze aangesproken.</p>
<h3>Waarom is dit een 'taai probleem'?</h3>
<p>De one-size-fits-all pijn is niet simpelweg een marketingkwestie die met een nieuw logo of een ander kanaal wordt opgelost. Het vraagt om een fundamentele <strong>cultuurverandering</strong> binnen de organisatie: van productgericht — waarbij de miniatuurwereld zichzelf geacht wordt te verkopen — naar bezoeker-gecentreerd, waarbij de klantreis van de leisure manager leidend is in elke beslissing.</p>
<div class="cg">
${card('Oorzaak 1','Focus op Key Resources','De analyse van het Business Model Canvas laat zien dat de focus van MWR van oudsher ligt op de Key Resources: de passie voor het vakmanschap. Vanuit deze passie werd aangenomen dat de miniatuurwereld zichzelf wel zou verkopen aan iedereen.','#1a2744')}
${card('Oorzaak 2','Post-COVID reactieve houding','De post-COVID herstelfase, gekenmerkt door beperkte budgetten, heeft de organisatie gedwongen tot een reactieve houding. Betaalbare en simpele promotionele campagnes kregen de voorkeur boven diepgaande strategische segmentatie.','#F47C20')}
</div>
<h3>De Twee Kritieke Missers</h3>
<table class="dt">
<thead><tr><th>Gemis</th><th>Wetenschappelijke basis</th><th>Gevolg voor MWR</th></tr></thead>
<tbody>
<tr><td><strong>De 10-jaar grens</strong></td><td>Rozendaal (2011): cognitief omslagpunt bij 10 jaar</td><td>MWR maakt in uitingen geen onderscheid tussen zintuiglijke behoefte (&lt;10j) en technische verdieping (≥10j). De relevantie voor de oudere jeugd komt onder druk.</td></tr>
<tr><td><strong>De vrouwelijke beslisser</strong></td><td>Mowen & Graefe (2006): vrouwelijke partner beslist in 55% van gevallen</td><td>De marketing richt zich op de brede massa, terwijl de werkelijke activatiekracht bij de moeder/leisure manager ligt. Haar behoefte aan ontzorging en succesgarantie wordt niet geadresseerd.</td></tr>
</tbody>
</table>
${hr('Symptoom vs. Oorzaak','De one-size-fits-all pijn is het <em>symptoom</em> van een organisatie die de transitie van een productgerichte attractie naar een bezoeker-gecentreerde Node of Experience nog moet voltooien om commercieel zelfredzaam te blijven in een verzadigde markt.')}
</div>`,

'koers_netno':()=>`<div class="cs ac">
<h2>Netnografie: De Onderzoeksmethode</h2>
<p class="lead">Om een objectief beeld te krijgen van de feitelijke bezoekerservaring bij Miniworld Rotterdam is gekozen voor <strong>netnografie</strong> als primaire onderzoeksmethode. Dit levert rijke, authentieke gegevens zonder sociaal-wenselijke antwoorden.</p>
<h3>Methodologische verantwoording</h3>
<div class="cg">
${card('Authenticiteit','Vlieg op de muur','Netnografie stelt de onderzoeker in staat op te treden als een "vlieg op de muur". Organisch voorkomend sentiment wordt geobserveerd zonder tussenbeide te komen. Dit levert rijke en authentieke gegevens op over hoe klanten de interne operatie beleven.','#4a7adc')}
${card('Ongefilterd','Geen sociaal-wenselijkheid','In tegenstelling tot enquêtes of interviews, waarbij respondenten vaak antwoorden geven om de enquêteur tevreden te stellen, biedt netnografie toegang tot ongefilterde meningen. Cruciaal om dieperliggende operationele kwetsbaarheden bloot te leggen.','#7DC242')}
${card('Dataset N=80','Strategische Data Repository','80 online uitingen zijn systematisch verzameld en gecategoriseerd. Deze omvangrijke dataset (N=80) bood voldoende massa om patronen te ontdekken die met incidentele reviews over het hoofd zouden worden gezien.','#2bbfaa')}
</div>
<h3>Aanvullende Interne Modellen</h3>
<table class="dt">
<thead><tr><th>Model</th><th>Doel</th><th>Bevinding</th></tr></thead>
<tbody>
<tr><td>Business Model Canvas</td><td>Interne waardecreatie in kaart brengen</td><td>Legde de one-size-fits-all pijn tastbaar bloot: hoog vakmanschap, maar ongedifferentieerd aangeboden aan alle doelgroepen</td></tr>
<tr><td>Stakeholderanalyse</td><td>Macht-belangdiagram</td><td>Management & directie geprioriteerd als interne sleutelspelers (hoge macht, hoog belang). Vrouwelijke beslisser als externe motor met hoge commerciële invloed.</td></tr>
<tr><td>Value Proposition Canvas</td><td>Producten als pain relievers & gain creators</td><td>Brug van puur technisch product naar betekenisvolle beleving die de beslisser ontzorgt. Drie VPC's per leeftijdssegment uitgewerkt.</td></tr>
<tr><td>SWOT & Confrontatiematrix</td><td>Strategische fit bepalen</td><td>Drie dwingende strategische pijlers geformuleerd: Succesgarantie, Product-vóór-Promotie, Wetenschappelijke Segmentatie</td></tr>
<tr><td>DESTEP-analyse</td><td>Externe macro-omgeving</td><td>Inflatiepiek 11,6%, Rotterdam 5,3% werkloosheid, groeiende behoefte aan vibing, KNMI API als technologische kans</td></tr>
</tbody>
</table>
</div>`,

'koers_reviews':()=>`<div class="cs ac">
<h2>Strategische Data Repository (N=80)</h2>
<p class="lead">Tachtig online uitingen verzameld en gecategoriseerd. De meest strategisch relevante snippets, gegroepeerd per strategisch inzicht.</p>
<h3>💚 Kansen — Gains & Sterktes</h3>
<div class="rg">
<div class="rv"><div class="rvt">"Dit is zo leerzaam... Verhalen bij wat je ziet komen als vanzelf op om over te praten."</div><div class="rvf"><span class="rva">Bert Meeuwsen · #1</span><span class="tag-g">Cultural Capital</span></div></div>
<div class="rv"><div class="rvt">"Weer of geen weer, het is er altijd goed vertoeven met de kids... regent het dan loop je lekker droog."</div><div class="rvf"><span class="rva">Monique · #2</span><span class="tag-g">Indoor USP ★</span></div></div>
<div class="rv"><div class="rvt">"Het is zo ongelooflijk gedetailleerd, prachtig. Was de 33 euro voor 4 personen zeker waard."</div><div class="rvf"><span class="rva">Helga Peters · #6</span><span class="tag-g">Prijs-kwaliteit</span></div></div>
<div class="rv"><div class="rvt">"Opa en kleinzoon waren er niet weg te krijgen... mei vak willen we er weer heen."</div><div class="rvf"><span class="rva">A. Uijl · #34</span><span class="tag-g">Sandwich-gen.</span></div></div>
<div class="rv"><div class="rvt">"Sneak peek of the work behind the scene... view of the workshop. Pretty cool!"</div><div class="rvf"><span class="rva">Julien P · #62</span><span class="tag-g">Atelier ★</span></div></div>
<div class="rv"><div class="rvt">"Er gebeurt steeds wat in deze miniwereld van licht tot donker. Steeds bezig met nieuwe attracties."</div><div class="rvf"><span class="rva">Joost Henze · #25</span><span class="tag-g">Dynamiek</span></div></div>
<div class="rv"><div class="rvt">"Hilarisch dat er overal foto's van gemaakt werden. Vanalles werd er herkend."</div><div class="rvf"><span class="rva">Arthur · #9</span><span class="tag-g">Identiteit</span></div></div>
<div class="rv"><div class="rvt">"Overal zitten knopjes waar je aan mag komen. Echt een aanrader voor groot en klein."</div><div class="rvf"><span class="rva">Jan · #30</span><span class="tag-g">Interactie ★</span></div></div>
<div class="rv"><div class="rvt">"Added paw patrol and pokemon figures for children to find. We will come back."</div><div class="rvf"><span class="rva">Anca S · #57</span><span class="tag-g">Gamificatie</span></div></div>
</div>
<h3>🔴 Pains — Fricties & Bedreigingen</h3>
<div class="rg">
<div class="rv"><div class="rvt">"Helikopter van de Kuip deed het niet... veel van de knoppen werkte niet."</div><div class="rvf"><span class="rva">Teleurgesteld · #38</span><span class="tag-r">Defecten ★</span></div></div>
<div class="rv"><div class="rvt">"Restaurant tergend langzaam. Wachten tot je nummer genoemd wordt. Maakt het niet leuk."</div><div class="rvf"><span class="rva">Mark · #45</span><span class="tag-r">Service-fail</span></div></div>
<div class="rv"><div class="rvt">"Miniworld is mooi en groot... echter een hoop defect en vervuild. Stilstand is achteruitgang."</div><div class="rvf"><span class="rva">RB · #48</span><span class="tag-r">Onderhoud ★</span></div></div>
<div class="rv"><div class="rvt">"Past meer op een zolder."</div><div class="rvf"><span class="rva">Marks partner · #80</span><span class="tag-r">Imago ★</span></div></div>
<div class="rv"><div class="rvt">"Valt tegen als je in Hamburg bent geweest... treinen rijden te hard. Prijs kwaliteit een tegenvaller."</div><div class="rvf"><span class="rva">Diana · #4</span><span class="tag-r">Verwachting</span></div></div>
<div class="rv"><div class="rvt">"Gastvrouw snapte online kaartjes niet. Nam zonder uitleg mijn mobiel mee... na 15 min mochten we naar binnen."</div><div class="rvf"><span class="rva">Teleurgesteld · #11</span><span class="tag-r">Journey-frictie</span></div></div>
<div class="rv"><div class="rvt">"Te druk en veel doet het niet. Restaurant heeft amper personeel... Zonde van het entre geld."</div><div class="rvf"><span class="rva">Vincent · #3</span><span class="tag-r">Personeel</span></div></div>
<div class="rv"><div class="rvt">"Irritant dat het steeds 'nacht' wordt... bordjes dus niet kunt lezen."</div><div class="rvf"><span class="rva">Pjotr Krimson · #28</span><span class="tag-r">Layout</span></div></div>
<div class="rv"><div class="rvt">"Kaartjes aan de hoge kant. Speurtocht €2,- erbij... best krenterig."</div><div class="rvf"><span class="rva">Naam bekend · #13</span><span class="tag-r">Prijs-pijn</span></div></div>
</div>
<div class="cg">
${card('Strategische Conclusie Gains','Indoor USP + Atelier','Snippet #2 (droog bij regen) en #62 (atelier bekijken) zijn de twee belangrijkste strategische gains. Ze vormen de directe basis voor de Weertrigger én de Atelier-Museum positionering.','#7DC242')}
${card('Strategische Conclusie Pains','Defecten = Merkschade','Snippet #38 (kapotte knoppen) en #80 (zolder) zijn de twee meest kritieke pains. Ze onderbouwen direct de regiekeuze Product-vóór-Promotie: herstel eerst, dan promoveer.','#e8407a')}
</div>
</div>`,

'koers_destep':()=>`<div class="cs ac">
<h2>DESTEP-analyse</h2>
<p class="lead">De externe macro-omgeving van Miniworld Rotterdam in zes dimensies. Basis voor het formuleren van kansen en bedreigingen in de confrontatiematrix.</p>
<table class="dt">
<thead><tr><th>Dimensie</th><th>Factor</th><th>Waarde / Data</th><th>Strategische implicatie voor MWR</th></tr></thead>
<tbody>
<tr><td><strong>D — Demografisch</strong></td><td>Bevolkingsgroei</td><td>18 miljoen inwoners NL (CBS, 2024)</td><td>Groeiende markt voor vrijetijdsbesteding</td></tr>
<tr><td></td><td>Rotterdam demografie</td><td>56,5% migratieachtergrond; 10% is 0–9 jaar; 10,5% is 10–19 jaar</td><td>Diverse doelgroep vereist gedifferentieerde communicatie</td></tr>
<tr><td></td><td>Vergrijzing</td><td>65+: 15,7% van Rotterdamse bevolking</td><td>Kans voor passieve vrijetijdsbesteding (vibing)</td></tr>
<tr><td><strong>E — Economisch</strong></td><td>Inflatiepiek</td><td>11,6% in 2022</td><td>Verhoogde prijsgevoeligheid → roep om succesgarantie</td></tr>
<tr><td></td><td>Werkloosheid Rotterdam</td><td>5,3% — hoogste van de vier grote steden</td><td>Versterkt behoefte aan betaalbare, gegarandeerde vrijetijdsbesteding</td></tr>
<tr><td><strong>S — Sociaal-Cultureel</strong></td><td>Vrouwelijke beslisser</td><td>55% uiteindelijke beslisser (Mowen & Graefe, 2006)</td><td>Marketing moet primair gericht zijn op de leisure manager</td></tr>
<tr><td></td><td>Sandwich-generatie</td><td>Gen X en Millennials combineren zorg voor kinderen + ouders</td><td>Complexe vrijetijdspuzzel voor drie generaties</td></tr>
<tr><td></td><td>Vibing-trend</td><td>Lubowiecki-Vikuk (2026): groeiende behoefte aan passieve leisure</td><td>MWR als rustpunt in overprikkelde digitale wereld</td></tr>
<tr><td><strong>T — Technologisch</strong></td><td>Digitale concurrentie</td><td>Netflix, Roblox, Fortnite strijden om aandacht ≥10 jaar</td><td>Kortere spanningsboog voor statische scènes</td></tr>
<tr><td></td><td>Weather targeting</td><td>Infoplaza KNMI API: realtime weertriggering mogelijk</td><td>Kans om indoor-status automatisch te verzilveren</td></tr>
<tr><td><strong>E — Ecologisch</strong></td><td>Onvoorspelbaar klimaat</td><td>Nederland: hoge neerslagfrequentie, onvoorspelbaar</td><td>Indoor-status = strategisch concurrentievoordeel</td></tr>
<tr><td><strong>P — Politiek-Juridisch</strong></td><td>Reclamewetgeving kinderen</td><td>Toenemende regelgeving voor eerlijke beïnvloeding ≤12 jaar</td><td>Gedifferentieerde aanpak op 10-jaar grens ook ethisch noodzakelijk</td></tr>
<tr><td></td><td>Gemeente Rotterdam 2030</td><td>Ambitie inclusieve stad</td><td>MWR als toegankelijke Node of Experience voor alle lagen</td></tr>
</tbody>
</table>
${h('Conclusie DESTEP','De aanhoudende inflatie en economische onzekerheid (E) gecombineerd met de groeiende behoefte aan rust en zekerheid (S) maken de Succesgarantie tot de meest relevante commerciële belofte. De technologische kans van weather targeting (T) + de ecologische realiteit van onvoorspelbaar weer (E) vormen samen de basis voor de Dynamische Weertrigger.')}
</div>`,

'koers_bmc':()=>`<div class="cs ac">
<h2>Business Model Canvas (Bijlage 2)</h2>
<p class="lead">Het BMC van Miniworld Rotterdam legt een fundamentele frictie bloot tussen de interne kracht en de externe marktbenadering.</p>
<div class="cg">
${card('Customer Segments','Klantsegmenten','Gezinnen met kinderen tot 14 jaar · Vrouwelijke partner als centrale beslisser (55%) · Grootouders met kleinkinderen · Toeristen · Scholen/BSO · Bedrijven','#2bbfaa')}
${card('Value Propositions','Waardeproposities (huidig)','Unieke indoor miniatuurbeleving met focus op Rotterdamse iconen · Combinatie van educatie, techniek en ontspanning · Weersonafhankelijk dagje uit — maar nog niet expliciet gecommuniceerd','#7DC242')}
${card('Channels','Kanalen','Eigen website + online ticketverkoop · Sociale media (Facebook/Instagram) · TripAdvisor · Citymarketing kanalen · Rotterdam Pas · Mond-tot-mondreclame','#4a7adc')}
${card('Customer Relationships','Klantrelaties','Persoonlijk contact op locatie · Laagdrempelig online contact via sociale media · Zakelijke relaties met scholen en arrangementenpartners','#F47C20')}
${card('Revenue Streams','Inkomstenstromen','Ticketverkoop (primaire bron — bijna volledige afhankelijkheid) · Horeca-inkomsten en giftshop · Projectmatige eenmalige impuls Project Amsterdam','#e8407a')}
${card('Key Resources','Strategische Middelen','De fysieke miniatuurwereld + unieke dag-nachtcyclus · Gespecialiseerd vakmanschap en het eigen maakatelier · Medewerkers, vrijwilligers en de merknaam Miniworld Rotterdam','#9678dc')}
${card('Key Activities','Kernactiviteiten','Ontwikkelen, onderhouden en uitbreiden miniatuurscènes · Dagelijkse exploitatie en ontvangst bezoekers · Marketingactiviteiten + uitvoering Project Amsterdam','#1a2744')}
${card('Key Partners','Strategische Partners','Spido · Diergaarde Blijdorp · Rotterdam Pas · Gemeente Rotterdam · Specialistische leveranciers voor modelbouw','#3d7a10')}
${card('Cost Structure','Kostenstructuur','Personeels- en materiaalkosten · Huisvesting- en energiekosten voor de grote indoorruimte · Marketing- en promotiekosten','#F47C20')}
</div>
<h3>Zes Kritische Inzichten uit het BMC</h3>
<table class="dt">
<thead><tr><th>#</th><th>Inzicht</th><th>Implicatie</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>One-size-fits-all beperking</strong></td><td>Dezelfde Value Proposition voor peuter (4j) als tiener (14j) — terwijl cognitieve behoeften fundamenteel verschillen</td></tr>
<tr><td>2</td><td><strong>10-jaar grens genegeerd</strong></td><td>Vakmanschap en atelier worden identiek aangeboden aan alle leeftijden</td></tr>
<tr><td>3</td><td><strong>Leisure Manager ongeactiveerd</strong></td><td>Customer Segments noemen "gezinnen" maar activeren de werkelijke beslisser (vrouwelijke partner, 55%) onvoldoende</td></tr>
<tr><td>4</td><td><strong>Frictie middelen vs. uitvoering</strong></td><td>Hoog vakmanschap (Key Resources) wordt ondermijnd door technische defecten op de vloer</td></tr>
<tr><td>5</td><td><strong>Financiële afhankelijkheid</strong></td><td>Revenue Streams bijna volledig afhankelijk van ticketverkoop — kwetsbaar voor externe schokken</td></tr>
<tr><td>6</td><td><strong>Atelier onbenut als product</strong></td><td>Het maakatelier is een intern proces terwijl het een commercieel Atelier-Museum product kan worden</td></tr>
</tbody>
</table>
</div>`,

'koers_trends':()=>`<div class="cs ac">
<h2>Trends in de Vrijetijdsmarkt & Psychografie van de Beslisser</h2>
<p class="lead">Twee wetenschappelijk onderbouwde trends bieden een nieuw bestaansrecht voor de miniatuurwereld. Gecombineerd met de psychografie van de centrale beslisser vormen ze de basis voor de gekozen koers.</p>
<h3>Trend 1: 'Vibing' en Passieve Leisure (Lubowiecki-Vikuk, 2026)</h3>
<p>Er is een groeiende maatschappelijke behoefte aan passieve vrijetijdsbesteding en 'vibing': een staat van volledige ontspanning waarbij men rust zoekt van de hectiek en overprikkeling. Dit duidt op een noodzakelijke tegenhanger van de overprikkelde digitale wereld.</p>
<p>Met name de Sandwich-generatie en jongere generaties (Millennials en Gen Z) zoeken naar rustpunten. Waar concurrenten vaak inzetten op flitsende schermen en adrenaline, biedt MWR met haar gedetailleerde vakmanschap en authentieke sfeer een omgeving die uitnodigt tot vertraging en observatie.</p>
<h3>Trend 2: Transitie naar de 'Node of Experience' (Leask, 2018; Leask et al., 2024)</h3>
<p>De sector beweegt weg van statische, productgerichte modellen naar een benadering waarbij de attractie fungeert als een "node of experience". Bezoekers verwachten niet langer louter een activiteit (zoals "treintjes kijken"), maar een knooppunt waar persoonlijke emotie, betekenisgeving en co-creatie centraal staan.</p>
<p>Voor Miniworld betekent dit dat de focus moet verschuiven van het tonen van het object (de miniatuur) naar het regisseren van de beleving voor de bezoeker.</p>
<h3>De Psychografie van de Beslisser</h3>
<div class="sr">
${stat('42%','Primaire idee-initiator','#3d7a10')}
${stat('57%','Informatieverzamelaar','#1a2744')}
${stat('55%','Uiteindelijke beslisser','#F47C20')}
</div>
<p>Uit wetenschappelijk onderzoek van <strong>Mowen & Graefe (2006)</strong> en <strong>He & Wu (2024)</strong> blijkt onomstotelijk dat de vrouwelijke partner de spil is in de klantreis. Zij is de primaire idee-initiator, de belangrijkste informatieverzamelaar en in maar liefst 55% van de gevallen de uiteindelijke beslisser.</p>
<p>Haar positie krijgt een cruciale strategische lading wanneer we kijken naar de maatschappelijke context: de <strong>sandwich-generatie</strong> (Gen X en Millennials). Deze generatie bevindt zich in een levensfase waarin zij de zorg voor opgroeiende kinderen moet combineren met de zorg voor vergrijzende ouders. Zij treedt op als het cement tussen drie generaties.</p>
${bq('Ik ben degene die het uitzoekt. Mijn man vindt alles best, zolang de kleine het naar haar zin heeft.','Respondent 1 (De Ontzorgde Planner), Diepte-interview')}
</div>`,

'koers_10jaar':()=>`<div class="cs ac">
<h2>Wetenschappelijke Afbakening: De 10-jaar Grens</h2>
<p class="lead">Een fundamenteel onderdeel van de nieuwe koers: het doorbreken van de one-size-fits-all benadering via een wetenschappelijk onderbouwde segmentatie. De leeftijd van <strong>tien jaar</strong> markeert een cognitief omslagpunt dat de gehele marketingstrategie van MWR moet structureren.</p>
${h('Rozendaal (2011) — Kernbevinding','Volgens het onderzoek van Rozendaal markeert de leeftijd van tien jaar een belangrijk veranderpunt in de sociaal-cognitieve vaardigheden en de "reclamewijsheid" van kinderen. Dit inzicht is doorslaggevend voor de effectiviteit van de marketingcommunicatie van MWR.')}
<div class="cg">
${card('Segment &lt;10 jaar','Zintuiglijk & Visueel — Ontdekken','Kinderen in deze leeftijdsgroep beschikken over een lager niveau van reclamewijsheid en doorzien de persuasieve intentie van uitingen nog niet volledig. Hun informatiebehoefte is primair gericht op zintuiglijke en visuele prikkels: beweging, licht en het simpelweg ontdekken van de miniatuurwereld.','#2bbfaa')}
${card('Segment ≥10 jaar','Technisch & Abstract — Meesterschap','Rond het tiende levensjaar kantelt de behoefte fundamenteel. Kinderen ontwikkelen een kritische blik en krijgen behoefte aan abstractie en technische complexiteit. Zij kijken niet meer alleen naar de landschappen, maar zoeken naar het "meesterschap achter de schermen".','#1a2744')}
</div>
<h3>Validatie in de Praktijk (Diepte-interviews)</h3>
<table class="dt">
<thead><tr><th>Segment</th><th>Quote respondent</th><th>Implicatie voor MWR</th></tr></thead>
<tbody>
<tr><td>&lt;10 jaar (zintuiglijk)</td><td>"De groene knopjes zijn alles" — moeder van 7-jarige zoon (Respondent 3)</td><td>Interactieve elementen zijn de motor van de ervaring. Defecten zijn een directe pain voor dit segment.</td></tr>
<tr><td>≥10 jaar (technisch)</td><td>12-jarige wil weten hoe de treinen digitaal worden aangestuurd (Interview 6)</td><td>Technische diepgang en 'backstage' beleving zijn de gain voor dit segment. Atelier-Museum positionering.</td></tr>
</tbody>
</table>
<h3>Strategische Implicatie</h3>
<p>Voor het segment vanaf 10 jaar verschuift de waarde van entertainment naar de opbouw van <strong>cultureel kapitaal</strong> (Bourdieu, 1984) door middel van diepgang in techniek, logistiek en historie. MWR transformeert voor dit segment naar een hoogwaardig 'Atelier-Museum'.</p>
<p>Een kritiek gemis binnen de huidige koers is dat MWR in haar uitingen geen onderscheid maakt tussen deze twee segmenten. Door de one-size-fits-all pijn negeert de organisatie de verschuiving in informatiebehoefte van het opgroeiende kind, waardoor de relevantie van het aanbod voor de oudere jeugd onder druk komt te staan.</p>
</div>`,

'koers_swot':()=>`<div class="cs ac">
<h2>SWOT-analyse & Confrontatiematrix (Bijlage 5)</h2>
<p class="lead">Op basis van de netnografie (N=80), de DESTEP-analyse en het Business Model Canvas zijn de volgende factoren geïdentificeerd. De confrontatie hiervan leidt tot drie dwingende strategische pijlers.</p>
<div class="cg">
${card('Sterktes (S)','Interne krachten','Uniek vakmanschap en schaal (grootste Benelux) · Onderscheidende dag-nachtcyclus · Strategische indoor-status in onvoorspelbaar klimaat · Authentieke Rotterdamse identiteit · Vrijwilligers als storytellers','#7DC242')}
${card('Zwaktes (W)','Interne beperkingen','Technische defecten die kwaliteitsbelofte ondermijnen (Snippet #38, #48) · Ineffectieve one-size-fits-all communicatie die 10-jaar grens negeert · Operationele frictie bij entree, horeca en hygiëne · Financiële afhankelijkheid van ticketverkoop','#e8407a')}
${card('Kansen (O)','Externe mogelijkheden','Amsterdam-budget als financieel vliegwiel voor professionalisering · Groeiende behoefte aan vibing (volledige ontspanning) · Activatie vrouwelijke leisure manager (55% beslissingen) · Weertargeting via Infoplaza KNMI API','#2bbfaa')}
${card('Bedreigingen (T)','Externe risicos','Hoge prijsgevoeligheid door aanhoudende inflatie · Toenemende indirecte concurrentie van streaming en gaming · Verzadigd speelveld van Rotterdamse iconen · Post-COVID herstelfase met beperkte budgetten','#F47C20')}
</div>
<h3>Confrontatiematrix — Drie Dwingende Strategische Pijlers</h3>
<table class="dt">
<thead><tr><th>Pijler</th><th>Confrontatie</th><th>Strategie</th></tr></thead>
<tbody>
<tr><td><strong>1. De Succesgarantie</strong></td><td>S3 (indoor-status) × O3 (vrouwelijke beslisser) vs. T1 (prijsgevoeligheid)</td><td>Door de indoor-status te koppelen aan de behoefte van de moeder neutraliseert MWR het economische risico van de bezoeker. Belofte: "Weer of geen weer, bij ons slaagt je middag altijd."</td></tr>
<tr><td><strong>2. Product-vóór-Promotie</strong></td><td>W1 (defecten) vs. O1 (Amsterdam-budget)</td><td>Adverteren met een Succesgarantie terwijl veel knoppen stuk zijn leidt tot een negatieve waardekloof die het merkvertrouwen schaadt. Het budget fungeert eerst als vliegwiel voor technisch herstel.</td></tr>
<tr><td><strong>3. Wetenschappelijke Segmentatie</strong></td><td>W2 (one-size-fits-all) vs. O3 (leisure manager)</td><td>De 10-jaar grens van Rozendaal (2011) wordt leidend. Marketing gesplitst: zintuiglijke verwondering voor het jonge kind én technisch meesterschap voor de tiener, waardoor de moeder effectief wordt ontzorgd.</td></tr>
</tbody>
</table>
${h('Gekozen Koers uit de Confrontatiematrix','De confrontatiematrix bewijst dat Miniworld Rotterdam niet langer kan winnen op louter het product ("treintjes kijken"). De marktcontext van constante globale crisis dwingt tot een koers waarbij de psychografische behoefte van de beslisser centraal staat: <strong>Koers 2 — Leisure Management</strong>.')}
</div>`,

'koers_scenarios':()=>`<div class="cs ac">
<h2>Twee Strategische Scenario's</h2>
<p class="lead">Op basis van de confrontatie tussen de interne kwetsbaarheden (de weegschaal tussen vakmanschap en defecten) en de externe marktfactoren zijn twee fundamenteel verschillende koersen geformuleerd.</p>
<div class="cg">
${card('Koers 1','Cultural Capital (Bourdieu, 1984)','MWR als aanbieder van "symbolische goederen". De miniatuurwereld als educatief instrument. De waarde voor de bezoeker ligt in de opbouw van cultureel kapitaal voor het kind — de "belangenloze delectatie": het pure genot van vakmanschap en historisch besef. Het Atelier-concept maakt het maakatelier transparant voor bezoekers.','#1a2744')}
${card('Koers 2 ✓','Leisure Management','Focus verschuift van het product (de treinen) naar het proces (de klantreis van de planner). MWR positioneert zich als de meest risicoloze keuze in de stad. De vrouwelijke leisure manager centraal. Ontzorging en zekerheid als kernwaarden. MWR biedt een weersonafhankelijke, veilige en overzichtelijke omgeving als cruciale "pain reliever".','#7DC242')}
</div>
<h3>Gedetailleerde Vergelijking</h3>
<table class="dt">
<thead><tr><th>Criterium</th><th>Koers 1: Cultural Capital</th><th>Koers 2: Leisure Management</th></tr></thead>
<tbody>
<tr><td>Theoretische basis</td><td>Bourdieu (1984): symbolische goederen</td><td>Mowen & Graefe (2006): leisure manager als beslisser</td></tr>
<tr><td>Kernbelofte</td><td>Leeromgeving + vakmanschap</td><td>Succesgarantie + ontzorging</td></tr>
<tr><td>Primaire doelgroep</td><td>Cultureel geïnteresseerde bezoekers</td><td>Vrouwelijke leisure manager (sandwich-generatie)</td></tr>
<tr><td>Activatiedrempel</td><td>Hoog (vraagt educatieve interesse)</td><td>Laag (universele behoefte aan risicoreductie)</td></tr>
<tr><td>Risico</td><td>Kan als "stoffig" worden waargenomen</td><td>Vereist Product-vóór-Promotie: operatie moet kloppen</td></tr>
<tr><td>Concurrentievoordeel</td><td>Culturele diepgang</td><td>Indoor-status + weersonafhankelijkheid</td></tr>
<tr><td>Vliegwiel-effect</td><td>Beperkt: vraagt investeringen in content</td><td>Groot: dwingt organisatie tot structurele kwaliteitsverbetering</td></tr>
</tbody>
</table>
<p>Het authentieke vakmanschap van Koers 1 wordt binnen Koers 2 <em>niet verworpen</em>, maar krijgt een cruciale ondersteunende rol als de symbolische bewijslast van de kwaliteit — de Atelier-Museum positionering voor het segment ≥10 jaar.</p>
</div>`,

'koers_koerskeuze':()=>`<div class="cs ac">
<h2>Gekozen Koers: Leisure Management ✅</h2>
${h('✓ Definitieve Koers','Op basis van de integrale confrontatie tussen interne kwetsbaarheden en externe marktkansen wordt definitief gekozen voor <strong>Koers 2: Leisure Management</strong>. Waar Koers 1 primair de inhoudelijke kwaliteit bewaakt, vormt Leisure Management het noodzakelijke commerciële kader om de zelfredzaamheid van Miniworld Rotterdam op lange termijn te borgen.')}
<h3>Drie Doorslaggevende Factoren</h3>
<div class="cg">
${card('Factor 1','Maximale activatiekracht','De vrouwelijke partner neemt in 55% van de gevallen de uiteindelijke beslissing. In een crisismarkt zoekt deze beslisser niet meer alleen naar een product, maar naar de absolute zekerheid dat haar investering in tijd en geld loont. Koers 2 sluit naadloos aan bij deze psychografie.','#7DC242')}
${card('Factor 2','Logistieke stress wegnemen','De centrale doelgroep (sandwich-generatie) beheert de vrijetijdspuzzel voor drie generaties tegelijk. Voor haar is volledige ontzorging een nieuwe kernwaarde geworden. Door Miniworld te positioneren als een weersonafhankelijke, veilige en overzichtelijke omgeving fungeert de attractie als de ultieme pain reliever.','#2bbfaa')}
${card('Factor 3','Dwingt interne verbetering','Koers 2 dwingt de organisatie om eerst haar grootste interne pains op te lossen. Het budget uit Project Amsterdam wordt ingezet als strategisch vliegwiel: niet voor vluchtige promotie, maar voor het herstellen van de succesgarantie op de vloer via prioritair technisch herstel.','#F47C20')}
</div>
<h3>Strategische Blauwdruk</h3>
<p>Hoewel Miniworld Rotterdam officieel failliet is verklaard, blijft de analyse in dit hoofdstuk staan als de <strong>Strategische Blauwdruk</strong> die aantoont welke koers noodzakelijk is om een dergelijke attractie commercieel zelfredzaam te maken. Om de realiteitswaarde te borgen, is de koers gepresenteerd aan externe partners in de branche. Hun bevestiging — gecombineerd met de testresultaten bij de doelgroep en een geprognosticeerde ROI van 217% — bewijst dat dit plan universeel inzetbaar is voor attracties.</p>
<div class="rf pe"><div class="rl">Persoonlijke Reflectie</div>
<p>Tijdens de koersbepaling opereerde de organisatie vanuit de veronderstelling dat de samenwerking met het Miniatuurmuseum Amsterdam een directe kapitaalinjectie van circa €100.000,- zou genereren. Deze verwachte financiële ruimte was de reden om te kiezen voor de ambitieuze koers Leisure Management, gericht op de transformatie naar een high-end Node of Experience. Door de uiteindelijke situatie leerde ik dat waardecreatie ook betekent dat je een Minimal Viable Product moet kunnen leveren als budgetten wegvallen.</p></div>
</div>`,

'waarde_beslisser':()=>`<div class="cs ac">
<div class="che"><div class="cey" style="background:#e8faf7;color:#003328">💡 LLO 2 — Waarde Creëren</div>
<h1>De Centrale Beslisser</h1>
<p class="hs">Waardecreatie mag niet langer gebaseerd zijn op interne aannames. De strategische focus is verlegd van de eindgebruiker (het kind) naar de werkelijke motor achter het bezoek: de <strong>vrouwelijke partner</strong>.</p></div>
<h3>Wetenschappelijke Onderbouwing</h3>
<div class="sr">
${stat('42%','Primaire idee-initiator<br><small>(Mowen & Graefe, 2006)</small>','#3d7a10')}
${stat('57%','Informatieverzamelaar','#1a2744')}
${stat('55%','Uiteindelijke beslisser','#F47C20')}
${stat('100%','Moet ontzorgd worden','#e8407a')}
</div>
<p>Marketinguitingen die deze centrale regisseur niet specifiek adresseren op haar informatiebehoefte, missen hun commerciële slagkracht. Dit patroon werd tijdens het praktijkonderzoek onweerlegbaar bevestigd.</p>
${bq('Ik ben degene die het uitzoekt. Mijn man vindt alles best, zolang de kleine het naar haar zin heeft.','Respondent 1 (De Ontzorgde Planner), Diepte-interview N=8')}
<h3>Stakeholder-prioritering (Bijlage 6)</h3>
<div class="shg">
<div class="shq"><div class="shql">🟢 Hoge macht · Hoog belang</div>
<div class="she hi">Management &amp; Directie (budgetkaders)</div>
<div class="she hi">Vrouwelijke Beslisser (commerciële omzet)</div></div>
<div class="shq"><div class="shql">🔵 Hoge macht · Middel belang</div>
<div class="she md">Gemeente Rotterdam</div>
<div class="she md">Strategische Partners (Rotterdam Pas)</div></div>
<div class="shq"><div class="shql">🔵 Lage macht · Middel belang</div>
<div class="she md">Personeel &amp; Vrijwilligers</div>
<div class="she md">Scholen en BSO-partners</div></div>
<div class="shq"><div class="shql">⚪ Lage macht · Laag belang</div>
<div class="she lo">Leveranciers modelbouw</div>
<div class="she lo">Incidentele toeristen</div></div>
</div>
<p style="font-size:.72rem;color:var(--mu);text-align:center;margin-top:4px">Matrix: Horizontale as = Belang · Verticale as = Macht/Invloed</p>
<h3>Strategische Consequentie</h3>
<p>Alleen door de behoeften van de vrouwelijke beslisser leidend te maken in het concept, transformeert MWR van een statisch product naar een bezoeker-gecentreerde Node of Experience. De bezoeker is in dit proces de centrale waarderealisator — maar zij is pas de bezoeker als de leisure manager haar keuze heeft gemaakt.</p>
</div>`,

'waarde_sandwich':()=>`<div class="cs ac">
<h2>De Sandwich-generatie als Doelgroep</h2>
<p class="lead">De vrouwelijke beslisser behoort veelal tot de <strong>sandwich-generatie</strong> (Gen X en Millennials) — een generatie die de zorg voor opgroeiende kinderen moet combineren met de zorg voor vergrijzende ouders.</p>
<div class="cg">
${card('De Rol','Leisure Manager van drie generaties','In haar rol als "leisure manager" (Bombol & Lutostański, 2021) moet zij wekelijks een complexe vrijetijdspuzzel oplossen: tegelijkertijd zintuiglijk prikkelend voor peuters, technisch uitdagend voor oudere kinderen én comfortabel voor grootouders.','#2bbfaa')}
${card('De Druk','Constante tijdsdruk & stress','Wetenschappelijk onderzoek (He & Wu, 2024) onderstreept dat haar vrijetijdsbesteding vaak wordt beperkt door een gebrek aan tijd en een hoog stressniveau, waarbij zij haar eigen rust opoffert voor het welzijn van de familie.','#F47C20')}
${card('De Angst','Verspilde investering','In een marktklimaat van constante globale crisis en toenemende prijsgevoeligheid is haar grootste angst een verspilde investering in tijd en geld. Een mislukt uitje door externe factoren is voor haar een emotionele en logistieke afknapper.','#e8407a')}
${card('De Kernwaarde','Succesgarantie & Ontzorging','Alleen door de regie over de middag volledig over te nemen en een succesgarantie te bieden, kan MWR de transitie maken naar een bezoeker-gecentreerde Node of Experience die werkelijke waarde toevoegt aan haar schaarse vrije tijd.','#7DC242')}
</div>
<h3>Drie Niveaus van Ontzorging</h3>
<table class="dt">
<thead><tr><th>Niveau</th><th>Type ontzorging</th><th>Wat MWR concreet doet</th></tr></thead>
<tbody>
<tr><td><strong>Cognitief</strong></td><td>Keuzestress wegnemen</td><td>Communicatie differentieert per leeftijdsgroep (10-jaar grens) zodat zij niet zelf hoeft uit te vogelen of het uitje geschikt is</td></tr>
<tr><td><strong>Logistiek</strong></td><td>Risico elimineren</td><td>Weersonafhankelijke succesgarantie: bij regen is MWR de beste keuze in de stad</td></tr>
<tr><td><strong>Operationeel</strong></td><td>Regie op beleving</td><td>100% functionerende interactieve elementen + gestroomlijnde customer journey zodat zij kan ontspannen</td></tr>
</tbody>
</table>
${bq('In Rotterdam kijk ik eerst naar het weer. Als het regent, valt de helft van de opties af.','Respondent 1 (De Ontzorgde Planner), Diepte-interview')}
</div>`,

'waarde_interviews':()=>`<div class="cs ac">
<h2>Diepte-interviews (N=8) — Bijlage 7</h2>
<p class="lead">Acht semi-gestructureerde diepte-interviews met vrouwelijke partners uit de sandwich-generatie. Doel: aannames toetsen, verdiepen en het concept actief bijsturen.</p>
<h3>Methodologische Verantwoording</h3>
<p>Hoewel de netnografie (N=80) een rijk en authentiek beeld gaf van het online sentiment, gebruik ik deze data primair als indirecte feedback. Om deze inzichten te verheffen tot een waterdicht strategisch advies, heb ik de gevonden patronen gevalideerd door middel van diepgaand kwalitatief veldonderzoek.</p>
<h3>Topiclijst (semi-gestructureerd)</h3>
<table class="dt">
<thead><tr><th>Topic</th><th>Doel</th><th>Wetenschappelijke koppeling</th></tr></thead>
<tbody>
<tr><td>1. Rolverdeling in het gezin</td><td>Validatie beslissersrol</td><td>Mowen & Graefe (2006): 55%-regel</td></tr>
<tr><td>2. De vrijetijdspuzzel</td><td>Zicht op complexiteit sandwich-generatie</td><td>Schumacher et al. (2012), He & Wu (2024)</td></tr>
<tr><td>3. Risico &amp; weersafhankelijkheid</td><td>Validatie weertrigger als beslissingsfilter</td><td>Li et al. (2021): weersafhankelijkheid</td></tr>
<tr><td>4. Cognitieve ontwikkeling kind</td><td>Validatie 10-jaar grens in de praktijk</td><td>Rozendaal (2011)</td></tr>
<tr><td>5. Operationele kwaliteit &amp; prijs</td><td>Frictiemeting: effect defecten op beslissing</td><td>Netnografie Snippet #38, #48</td></tr>
</tbody>
</table>
<h3>Kernbevindingen per Respondent (selectie)</h3>
<div class="cg">
${card('Respondent 1 — De Ontzorgde Planner','Beslissersrol bevestigd + Weertrigger','De 55%-regel direct bevestigd. Plus: "In Rotterdam kijk ik eerst naar het weer. Als het regent, valt de helft van de opties af." → Direct aanleiding voor de Weertrigger als kernstrategie.','#7DC242')}
${card('Respondent 3 — De Interactie-moeder','Knoppen = alles, defecten = afknapper','Haar 7-jarige beleeft MWR primair via de interactieve knoppen — "de groene knopjes zijn alles" — maar een groot deel functioneerde niet. "Dat is een enorme afknapper die de hele middag kan verpesten." → Bijsturing naar Product-vóór-Promotie.','#e8407a')}
${card('Respondent 4 — De Bewuste Opvoeder','Bereidheid tot hogere prijs','Als alles perfect werkt én de uitleg nog beter wordt: "Zeker. Dan investeer ik in haar [dochters] ontwikkeling." → Bewijs dat succesgarantie de bereidheid tot betalen verhoogt.','#2bbfaa')}
${card('Interview 6 — 12-jarige technische vraagsteller','10-jaar grens gevalideerd','Haar 12-jarige wil nu specifiek weten hoe de treinen digitaal worden aangestuurd. → Directe validatie van de ≥10j communicatielijn: focus op technisch meesterschap.','#4a7adc')}
</div>
<h3>Twee Concrete Bijsturingen door de Interviews</h3>
${hr('Bijsturing 1: Van productboodschap → procesboodschap','Het eerste prototype van de marketinguiting richtte zich op de miniatuurwereld zelf. Respondent 1 maakte helder dat zij MWR beoordeelt op de mate waarin de organisatie de regie overneemt. Gevolg: kernbelofte werd de Succesgarantie.')}
${hr('Bijsturing 2: Van campagne → intern verbeterprogramma','Respondent 3 legde een kritieke grens bloot: een weercampagne lanceren terwijl de beloofde succesgarantie op de vloer niet wordt waargemaakt leidt tot een negatieve waardekloof. Gevolg: Product-vóór-Promotie als dwingende operationele voorwaarde.')}
</div>`,

'waarde_vpc':()=>`<div class="cs ac">
<h2>Value Proposition Canvas — Drie Segmenten (Bijlage 8)</h2>
<p class="lead">De waardepropositie van MWR gedifferentieerd naar drie specifieke leeftijdsgroepen op basis van de 10-jaar grens van Rozendaal (2011).</p>
<div class="vpc" style="border-top-color:#2bbfaa">
<div class="vpct">🍼 Segment 0–4 jaar: Zintuiglijke Verwondering en Veiligheid</div>
<div class="vpcc">
<div><div class="vcl">Klantprofiel — Customer Jobs & Pains</div>
<div class="vi">Job: Zoeken naar leerzame, veilige vrijetijdsbesteding voor het jonge gezin</div>
<div class="vi">Pain: Overprikkeling in grootschalige parken met te veel prikkels</div>
<div class="vi">Pain: Weersafhankelijkheid van buitenactiviteiten</div>
<div class="vi">Pain: Layout niet afgestemd op kijkhoogte peuter → frustratie</div>
<div class="vi">Gain: Verwondering door kleuren, bewegende treinen en dag-nachtcyclus</div></div>
<div><div class="vcl">Waardepropositie — Pain Relievers & Gain Creators</div>
<div class="vi">Pain Reliever: Weersonafhankelijke droog-garantie — bij regen altijd welkom</div>
<div class="vi">Pain Reliever: Veilige, overzichtelijke en rustige omgeving als tegenhanger van overprikkeling</div>
<div class="vi">Pain Reliever: Optimalisatie fysieke layout voor kijkhoogte peuter (0–4 jaar)</div>
<div class="vi">Gain Creator: Licht- en geluidseffecten die zintuigen prikkelen</div>
<div class="vi">Gain Creator: Korte, eenvoudige interacties met groene knoppen</div></div>
</div></div>
<div class="vpc" style="border-top-color:#7DC242">
<div class="vpct">🧒 Segment 5–9 jaar: Interactie en Edutainment</div>
<div class="vpcc">
<div><div class="vcl">Klantprofiel — Customer Jobs & Pains</div>
<div class="vi">Job: Zelfstandig de miniatuurwereld verkennen en actief participeren</div>
<div class="vi">Job: Op een speelse manier kennis maken met cultuur en geschiedenis (edutainment)</div>
<div class="vi">Pain: Beperkte spanningsboog bij statische scènes zonder interactie</div>
<div class="vi">Pain: Technische defecten aan groene knoppen — "enorme afknapper" (Respondent 3)</div>
<div class="vi">Gain: Vreugde van autonomie — zelf een scène in beweging zetten</div></div>
<div><div class="vcl">Waardepropositie — Pain Relievers & Gain Creators</div>
<div class="vi">Pain Reliever: 100% functionerende interactieve wereld via preventief onderhoud</div>
<div class="vi">Pain Reliever: Duidelijke storytelling en opdrachten die aandacht vasthouden</div>
<div class="vi">Gain Creator: Edutainment die vakmanschap begrijpelijk maakt voor kinderen &lt;10j</div>
<div class="vi">Gain Creator: Gamificatie-elementen — zoeken naar verstopte figuren (Pokémons)</div>
<div class="vi">Gain Creator: Speurtochten (€2,- meerwaarde — maar perceptie krenterig, dus gratis overwegen)</div></div>
</div></div>
<div class="vpc" style="border-top-color:#1a2744">
<div class="vpct">🔧 Segment 10–14 jaar: Technisch Meesterschap en Atelier-Museum Status</div>
<div class="vpcc">
<div><div class="vcl">Klantprofiel — Customer Jobs & Pains</div>
<div class="vi">Job: Het doorgronden van het meesterschap achter de schermen</div>
<div class="vi">Job: Investeren in opbouw van cultureel kapitaal via technische diepgang (Bourdieu, 1984)</div>
<div class="vi">Pain: Attractie als "kinderachtige hobbyzolder" (Snippet #80) — uniforme benadering</div>
<div class="vi">Pain: Concurrentie om aandacht met digitale gaming en streaming</div>
<div class="vi">Gain: Intellectuele uitdaging door diepgang in aansturing, logistiek en stadsplanning</div></div>
<div><div class="vcl">Waardepropositie — Pain Relievers & Gain Creators</div>
<div class="vi">Pain Reliever: Herpositionering als hoogwaardig Atelier-Museum — volwassen museale presentatie</div>
<div class="vi">Pain Reliever: Amsterdam-budget als vliegwiel voor professionele uitstraling</div>
<div class="vi">Gain Creator: Transparantie van vakmanschap via live observatie in het maakatelier (Snippet #62)</div>
<div class="vi">Gain Creator: Diepgaande uitleg over digitale aansturing van treinen — legitimeert bezoek voor tiener</div>
<div class="vi">Gain Creator: Exclusieve backstage experience die uniek tegenwicht biedt voor digitale gaming</div></div>
</div></div>
</div>`,

'waarde_richtingen':()=>`<div class="cs ac">
<h2>De Drie Strategische Richtingen</h2>
<p class="lead">Op basis van de confrontatie tussen interne kwetsbaarheden en externe marktkansen zijn drie strategische oplossingsrichtingen geformuleerd — allen gefocust op het ontzorgen van de leisure manager.</p>
<div class="tl">
<div class="ti"><div class="tm" style="color:#2bbfaa">Richting 1</div>
<h4>Cognitieve Ontzorging — Gerichte Activatie</h4>
<p>Gebruik makend van de 10-jaar grens van Rozendaal (2011) wordt de informatiebehoefte gesegmenteerd. De marketing spreekt de moeder direct aan door aan te tonen dat MWR voor elke leeftijd een specifieke gain biedt: zintuiglijke prikkels voor jonge kinderen en technisch meesterschap (de Atelier-Museum status) voor tieners. De moeder hoeft niet zelf te puzzelen of het uitje geschikt is.</p></div>
<div class="ti"><div class="tm" style="color:#3d7a10">Richting 2 ✓ GEKOZEN (score: 61)</div>
<h4>Logistieke Ontzorging — De Succesgarantie</h4>
<p>Het verzilveren van de indoor-status als de belangrijkste instrumentele pain reliever in een onzeker klimaat. Door de weersonafhankelijkheid te koppelen aan een vlekkeloze operatie via het principe Product-vóór-Promotie, biedt MWR de zekerheid dat de investering in tijd en geld altijd loont. Dit elimineert de faalkans-stress bij de sandwich-generatie.</p></div>
<div class="ti"><div class="tm" style="color:#F47C20">Richting 3</div>
<h4>Operationele Ontzorging — Regie op Beleving</h4>
<p>De organisatie stelt zich op als Director of Time op de werkvloer. MWR neemt de regie over de tijdsbesteding en het gedrag van de bezoeker volledig over. De moeder is niet langer "aan het werk" als begeleider, maar wordt zelf onderdeel van de ontspannen beleving (vibing). Laagste FOETSJE-score (50) door organisatorische onhaalbaarbaarheid op korte termijn.</p></div>
</div>
${h('Strategische Synthese','Waar Richting 1 en 2 de bezoeker over de drempel helpen (Demand Capture), borgt Richting 3 de waarde op de vloer. Hiermee transformeert MWR van een productgerichte attractie naar een partner in het leisure management van de sandwich-generatie. Richting 1 speelt een ondersteunende rol naast de gekozen Richting 2.')}
</div>`,

'waarde_foetsje':()=>`<div class="cs ac">
<h2>FOETSJE-toetsing: Haalbaarheidsanalyse (Bijlage 9)</h2>
<p class="lead">De drie strategische richtingen objectief getoetst op hun financiële, organisatorische en sociaal-economische haalbaarheid.</p>
<table class="dt">
<thead><tr><th>Criterium</th><th>R1: Cognitieve Ontzorging</th><th>R2: Succesgarantie</th><th>R3: Regie op Beleving</th></tr></thead>
<tbody>
<tr><td>Financieel haalbaar?</td><td>8</td><td class="hi">9</td><td>6</td></tr>
<tr><td>Organisatorisch haalbaar?</td><td>8</td><td>7</td><td>5</td></tr>
<tr><td>Economisch verantwoord?</td><td>8</td><td class="wi">10</td><td>7</td></tr>
<tr><td>Technologisch haalbaar?</td><td>9</td><td>7</td><td>6</td></tr>
<tr><td>Sociaal verantwoord?</td><td>8</td><td class="wi">10</td><td>9</td></tr>
<tr><td>Juridisch verantwoord?</td><td>8</td><td>9</td><td>8</td></tr>
<tr><td>Ethisch verantwoord?</td><td>9</td><td>9</td><td>9</td></tr>
<tr class="fw"><td><strong>TOTAALSCORE</strong></td><td><strong>58</strong></td><td class="wi"><strong>61 ★ WINNAAR</strong></td><td><strong>50</strong></td></tr>
</tbody>
</table>
<p style="font-size:.72rem;color:var(--mu)">Score: 1 = zeer ongunstig · 10 = zeer gunstig. Bron: Bijlage 9, Foetsje-model</p>
<h3>Toelichting per Richting</h3>
<div class="cg">
${card('R1: Cognitieve Ontzorging (58)','Effectief maar niet voldoende','Financieel laag (bestaande kanalen volstaan) en technologisch hoog (geen nieuwe infra nodig). Echter: lost de angst voor een verspilde investering bij de planner minder direct op dan Richting 2.','#4a7adc')}
${card('R2: Succesgarantie (61) ✓','Maximale economische en sociale score','Economisch (10): neutraliseert het grootste risico van de beslisser. Sociaal (10): sluit naadloos aan bij behoefte aan intergenerationele verbinding en rust. Organisatorisch (7): vereist dwingende keuze voor Product-vóór-Promotie.','#7DC242')}
${card('R3: Regie op Beleving (50)','Te hoog gegrepen op korte termijn','Laagste score op Organisatorisch (5): de huidige zwaktes in horeca en service wijzen erop dat de organisatie de capaciteit mist om de volledige regie vlekkeloos over te nemen. Financieel (6): kostbaar door noodzaak extra personeel.','#F47C20')}
</div>
</div>`,

'waarde_oplossing':()=>`<div class="cs ac">
<h2>De Gekozen Oplossing: De Succesgarantie 🏆</h2>
<p class="lead">Op basis van de integrale FOETSJE-score van 61 punten is Strategische Richting 2: Logistieke Ontzorging de logische koers voor Miniworld Rotterdam.</p>
<h3>Rechtvaardiging: Transitie van Prijs naar Waarde</h3>
<p>In de huidige crisismarkt is het voor MWR essentieel om de discussie te verschuiven van de ticketprijs naar de <strong>geleverde waarde</strong>. De huidige positionering balanceert op de grens van een "uit de hand gelopen hobbyzolder" (Snippet #80). Om commercieel zelfredzaam te blijven, is een waarderuil noodzakelijk.</p>
<div class="cg">
${card('Status Quo','🏚 De Zolder-Attractie','Bezoekers ervaren frictie door technische defecten (Snippet #38, #48). Perceptie: "past meer op een zolder" (Snippet #80). Bereidheid tot betalen staat onder druk. Gepercipieerde waarde ≤ ticketprijs.','#e8407a')}
${card('De Blauwdruk','🏛 Het Atelier-Museum','Door het budget als vliegwiel te gebruiken voor technisch herstel (Product-vóór-Promotie), verschuift de focus naar authentiek vakmanschap als exclusieve backstage experience. Gepercipieerde waarde > ticketprijs.','#7DC242')}
</div>
<h3>Bewijs: Bereidheid tot Hogere Prijs</h3>
${bq('Als dat betekent dat alles perfect werkt en de uitleg nog beter wordt, zeker. Dan investeer ik in haar [dochters] ontwikkeling.','Respondent 4 (De Bewuste Opvoeder) — direct bewijs dat succesgarantie de bereidheid tot betalen verhoogt')}
<h3>Drie Vliegwiel-effecten</h3>
<table class="dt">
<thead><tr><th>Effect</th><th>Mechanisme</th><th>Resultaat</th></tr></thead>
<tbody>
<tr><td><strong>1. Verzacht prijsgevoeligheid</strong></td><td>Succesgarantie rechtvaardigt ticketprijs als investering in kindsontwikkeling</td><td>Minder druk op prijsdiscussie — waarde boven prijs</td></tr>
<tr><td><strong>2. Dwingt operationele kwaliteit</strong></td><td>Product-vóór-Promotie: technisch herstel als voorwaarde voor campagne</td><td>Duurzame verbetering klantervaring — niet alleen marketing</td></tr>
<tr><td><strong>3. Schept commerciële weerstand</strong></td><td>Weersonafhankelijkheid als USP — externe factoren als concurrentievoordeel</td><td>Stabielere inkomstenstroom gedurende het hele jaar</td></tr>
</tbody>
</table>
<div class="rf pe"><div class="rl">Persoonlijke Reflectie</div>
<p>Het werken met de veronderstelling van een ruim budget beïnvloedde mijn creatieve proces positief. Ik durfde groots te denken. Echter, door de uiteindelijke situatie leerde ik dat waardecreatie ook betekent dat je een Minimal Viable Product moet kunnen leveren als budgetten wegvallen. Ik besef nu dat ik in deze fase te veel focuste op de gains die geld kon kopen. In de toekomst zal ik bij elk concept direct een scenario met en zonder budget uitwerken om de continuïteit te waarborgen.</p></div>
</div>`,

'biz_cocreatie':()=>`<div class="cs ac">
<div class="che"><div class="cey" style="background:#fff7ed;color:#8a4010">📡 LLO 3 — Business Development</div>
<h1>Co-creatie: geen aannames, maar aantoonbare bijsturing</h1>
<p class="hs">Dit concept is het resultaat van een methodisch proces van co-creatie en iteratieve bijsturing via de Build-Measure-Learn cyclus. Cruciaal is dat de gesprekken niet slechts dienden als bevestiging van bestaande aannames, maar als actieve sturingsbron voor het concept.</p></div>
<h3>Het Taaie Probleem</h3>
<p>De one-size-fits-all pijn is niet simpelweg een marketingkwestie die met een nieuw logo of een ander kanaal wordt opgelost. Het vraagt om een fundamentele <strong>cultuurverandering</strong>: van productgericht (de miniatuurwereld verkoopt zichzelf) naar bezoeker-gecentreerd (de klantreis van de leisure manager is leidend in elke beslissing).</p>
<h3>Twee Concrete Bijsturingen — Direct gevolg van interviewresultaten</h3>
<div class="cg">
${card('Bijsturing 1','Van productboodschap → procesboodschap','Prototype 1 richtte zich op de miniatuurwereld zelf: de treinen, de dag-nachtcyclus en het vakmanschap. Respondent 1 maakte echter helder dat zij MWR niet beoordeelt op wat er te zien is, maar op de mate waarin de organisatie de regie overneemt. Gevolg: kernbelofte werd de Succesgarantie.','#f5c842')}
${card('Bijsturing 2','Van campagne → intern verbeterprogramma','Respondent 3 legde een kritieke grens bloot: haar 7-jarige beleeft MWR primair via de interactieve knoppen — "de groene knopjes zijn alles" — maar een groot deel functioneerde niet. "Dat is een enorme afknapper." Gevolg: Product-vóór-Promotie als dwingende operationele voorwaarde. Eerst herstel, dan campagne.','#f5c842')}
</div>
<h3>Build-Measure-Learn Cyclus (Bijlage 10)</h3>
<div class="bm">
<div class="bs"><div class="bn" style="color:#7DC242">01</div><div class="bt" style="color:#3d7a10">BUILD</div>
<p><strong>Loop 1:</strong> Ontwerp banners Variant A (zintuiglijk &lt;10j) en Variant B (technisch ≥10j). Focus op emotionele behoefte planner: zekerheid en risicoreductie. Boodschappen: "Regen in Rotterdam? Bij ons schijnt de zon elke 24 minuten!" en "Slecht weer? Ontdek de techniek die onze wereld beweegt!"</p></div>
<div class="bs"><div class="bn" style="color:#F47C20">02</div><div class="bt" style="color:#F47C20">MEASURE</div>
<p><strong>Toetsing bij N=8 moeders:</strong> Validatie weertrigger als beslissingsfilter: "In Rotterdam kijk ik eerst naar het weer." Frictiemeting: defecte knoppen als kritieke grens voor succesgarantie. Bereidheid hogere prijs als kwaliteit stijgt.</p></div>
<div class="bs"><div class="bn" style="color:#2bbfaa">03</div><div class="bt" style="color:#2bbfaa">LEARN</div>
<p><strong>Twee pivots:</strong> (1) Producboodschap → Procesboodschap (succesgarantie centraal). (2) Campagne → Intern verbeterprogramma (Product-vóór-Promotie). Keuze voor Infoplaza weather targeting als kanaalstrategie.</p></div>
</div>
<h3>Kanaalselectiemethode: Drietraps-trechter</h3>
<p><strong>Stap 1:</strong> Interne audit via het Business Model Canvas → inventarisatie bestaande kanalen (sociale media, partnernetwerk).<br>
<strong>Stap 2:</strong> Psychografische verdieping via netnografie → Snippet #2 ("regent het dan loop je lekker droog") bewees dat de indoor-status de ultieme instrumentele pain reliever is.<br>
<strong>Stap 3:</strong> Validatie door de beslisser → diepte-interviews bevestigden dat de marketingkracht gebundeld moet worden op het moment van de hoogste logistieke stress.</p>
</div>`,

'biz_kanalen':()=>`<div class="cs ac">
<h2>Kanaalselectie: FOETSJE-toetsing van Drie Opties</h2>
<p class="lead">Om de waarde ontzorging effectief te leveren aan de centrale beslisser zijn drie kanaalopties onderzocht en kritisch tegen elkaar afgewogen op basis van hun vermogen om aan te sluiten bij de complexe vrijetijdspuzzel van de sandwich-generatie.</p>
<h3>De Drie Kanaalopties</h3>
<div class="cg">
${card('Optie 1','Always-on Social Media','Facebook en Instagram voor continue verbinding. Voordeel: langdurige merkvoorkeur opbouwen voor de Atelier-Museum status. Risico: vereist constante contentproductie — structurele belasting voor kleine organisatie. Spreekt de beslisser aan vóórdat haar logistieke stress het hoogst is.','#4a7adc')}
${card('Optie 2','Strategische Partner-marketing','Rotterdam Pas, hotels en partnerattracties (Spido, Blijdorp). Voordeel: autoriteit en vertrouwen via bestaand netwerk. Risico: weinig controle over timing en boodschap. Richt zich primair op toeristen, niet op de meest waardevolle doelgroep (lokale sandwich-generatie voor herhaalbezoek).','#9678dc')}
${card('Optie 3 ✓','De Contextuele Digitale Trigger','Hyper-gerichte weather targeting via Infoplaza KNMI API. Voordeel: unieke koppeling context en emotie — boodschap geactiveerd op het exacte moment dat regenkans >70% stijgt. Zelfregulerend systeem. Risico: technische integratie vereist externe expertise.','#7DC242')}
</div>
<h3>FOETSJE-toetsing Kanaalselectie</h3>
<table class="dt">
<thead><tr><th>Criterium</th><th>Optie 1: Social Media</th><th>Optie 2: Partners</th><th>Optie 3: Weertrigger</th></tr></thead>
<tbody>
<tr><td>Financieel haalbaar?</td><td>8</td><td>8</td><td class="hi">9</td></tr>
<tr><td>Organisatorisch haalbaar?</td><td>8</td><td>8</td><td>7</td></tr>
<tr><td>Economisch verantwoord?</td><td>8</td><td>8</td><td class="wi">10</td></tr>
<tr><td>Technologisch haalbaar?</td><td>9</td><td>9</td><td>7</td></tr>
<tr><td>Sociaal verantwoord?</td><td>8</td><td>8</td><td class="wi">10</td></tr>
<tr><td>Juridisch verantwoord?</td><td>8</td><td>8</td><td>9</td></tr>
<tr><td>Ethisch verantwoord?</td><td>9</td><td>9</td><td>9</td></tr>
<tr class="fw"><td><strong>TOTAALSCORE</strong></td><td><strong>58</strong></td><td><strong>58</strong></td><td class="wi"><strong>61 ★</strong></td></tr>
</tbody>
</table>
<h3>Conclusie: Weertrigger als winnende koers</h3>
<p><strong>Maximale Economische Impact (10):</strong> In een markt getekend door prijsgevoeligheid neutraliseert deze optie het grootste risico van de beslisser: een verspilde investering aan een mislukt uitje door het weer.</p>
<p><strong>Sociale Ontzorging (10):</strong> Het sluit naadloos aan bij de behoefte van de leisure manager aan rust en zekerheid op momenten van logistieke stress — juist het moment waarop zij haar vrijetijdspuzzel opnieuw moet leggen.</p>
<p><strong>Automatisering als structurele oplossing:</strong> Door de koppeling met de KNMI API ontstaat een zelfregulerend systeem dat blijft renderen zonder dagelijkse handmatige inzet. Dit is essentieel voor een kleine organisatie in post-COVID herstelfase.</p>
<p>Optie 1 en 2 zijn daarmee niet verworpen, maar krijgen een ondersteunende rol: social media bouwt aan de Atelier-Museum status op de lange termijn, partnerkanalen vergroten het bereik onder toeristen.</p>
</div>`,

'biz_weer':()=>`<div class="cs ac">
<h2>De Dynamische Weertrigger: Inhoud en Werking (Bijlage 12)</h2>
<p class="lead">De inhoud van de Dynamische Weerbanner is ontworpen als een startklare blauwdruk die de marketingkracht van MWR uitsluitend bundelt op momenten van de hoogste relevantie. Het systeem verbindt context, psychologie en techniek via het Infoplaza-netwerk.</p>
<h3>Parameters: Wanneer wordt er geadverteerd?</h3>
<div class="cg">
${card('Neerslag-trigger','Regenkans &gt;70%','Banners verschijnen uitsluitend bij een voorspelde regenkans van meer dan 70% via real-time KNMI-data koppeling. Dit is het moment waarop de leisure manager haar vrijetijdspuzzel opnieuw moet leggen.','#1a2744')}
${card('Temperatuur-trigger','Buitentemperatuur &lt;15°C','Een secundaire trigger activeert de uitingen zodra de buitentemperatuur onder de 15°C daalt. De behoefte aan een indoor activiteit wordt hierdoor direct vergroot — ook buiten regenseizoen.','#4a7adc')}
${card('Geografische focus','Regio Randstad / Zuid-Holland','Uitsluitend regio Randstad/Zuid-Holland, om verspilling (waste) te voorkomen. Alleen beslissers bereiken voor wie een dagbezoek aan Rotterdam logistiek haalbaar is.','#2bbfaa')}
${card('Timing','Weekenden & Vakantieperiodes','Focus op weekenden en vakantieperiodes: de piekmomenten voor de vrijetijdspuzzel van de sandwich-generatie. Timing maximaliseert relevantie en conversiekans.','#7DC242')}
</div>
<h3>Strategische Logica: Demand Capture</h3>
<p>De kracht van deze weertrigger ligt in het principe van <strong>Demand Capture</strong>: MWR creëert geen nieuwe vraag, maar vangt de bestaande vraag naar indoor activiteiten op het exacte moment van hoge nood bij de planner. Voor de leisure manager die in 55% van de gevallen de knoop doorhakt, fungeert de banner als de ultieme instrumentele pain reliever.</p>
${bq('In Rotterdam kijk ik eerst naar het weer. Als het regent, valt de helft van de opties af.','Respondent 1 — directe aanleiding voor de Weertrigger als kernstrategie')}
<h3>Technische Werking</h3>
<p>Via het advertentienetwerk van <strong>Infoplaza</strong> (o.a. Weeronline en Weerplaza) — het grootste weerplatform van Nederland met een miljoenenbereik — worden de uitingen automatisch geactiveerd. In het advertentiedashboard worden de KNMI API-parameters ingesteld: eenmaal geconfigureerd, activeert het systeem zichzelf zonder dagelijkse handmatige inzet van het marketingteam.</p>
${ho('Dwingende Voorwaarde','Voor de geloofwaardigheid van deze weertrigger is de regiekeuze Product-vóór-Promotie essentieel. De techniek op de vloer moet functioneren om de beloofde succesgarantie daadwerkelijk waar te maken. Anders leidt de campagne tot een negatieve waardekloof die de merkwaarde schaadt.')}
</div>`,

'biz_banners':()=>`<div class="cs ac">
<h2>De Banners: Gesegmenteerde Uitingen (Bijlage 13)</h2>
<p class="lead">In plaats van een one-size-fits-all benadering toont het systeem twee uitingen, direct voortvloeiend uit de co-creatiesessies met de focusgroep en gebaseerd op de wetenschappelijke 10-jaar grens van Rozendaal (2011).</p>
<div class="bmo">
<div class="bmh">📌 BANNER −10 · Segment onder 10 jaar (Zintuiglijk & Ontdekken) · Gevalideerd door Respondent 3: "de groene knopjes zijn alles"</div>
<div class="bmi bg2">
<div class="bbg">MWR</div>
<div class="btag" style="background:#e8407a">🌧 Regen in Rotterdam</div>
<div class="bh">Bij ons schijnt de zon elke 24 minuten!</div>
<div class="bsu">Ontdek de grootste indoor miniatuurwereld. Veilig, droog en vol verwondering.</div>
<div class="bc">Plan je droge middag →</div>
</div></div>
<table class="dt" style="margin-top:8px">
<thead><tr><th>Element</th><th>Keuze</th><th>Wetenschappelijke onderbouwing</th></tr></thead>
<tbody>
<tr><td>Boodschap</td><td>"Bij ons schijnt de zon elke 24 minuten!"</td><td>Zintuiglijke beleving + dag-nachtcyclus als unieke gain creator voor &lt;10j</td></tr>
<tr><td>Trigger voor beslisser</td><td>Veilige haven bij regen</td><td>Logistieke stress wegnemen → Li et al. (2021): weersafhankelijkheid primaire factor</td></tr>
<tr><td>CTA</td><td>"Plan je droge middag"</td><td>Directe oplossing voor het meest acuut gevoelde probleem van de leisure manager</td></tr>
</tbody></table>

<div class="bmo" style="margin-top:24px">
<div class="bmh">📌 BANNER +10 · Segment vanaf 10 jaar (Techniek & Atelier-Museum) · Vervangt "zolder-vibe" (Snippet #80) door museaal imago</div>
<div class="bmi bg1">
<div class="bbg">MWR</div>
<div class="btag" style="background:#2bbfaa">🔧 Slecht weer?</div>
<div class="bh">Ontdek de techniek die onze wereld beweegt!</div>
<div class="bsu">Een indrukwekkende ervaring voor nieuwsgierige geesten.</div>
<div class="bc">Plan je droge middag →</div>
</div></div>
<table class="dt" style="margin-top:8px">
<thead><tr><th>Element</th><th>Keuze</th><th>Wetenschappelijke onderbouwing</th></tr></thead>
<tbody>
<tr><td>Boodschap</td><td>"Ontdek de techniek die onze wereld beweegt!"</td><td>Technische complexiteit als gain creator voor ≥10j (Rozendaal, 2011)</td></tr>
<tr><td>Positionering</td><td>Atelier-Museum — niet hobbyzolder</td><td>Snippet #80 als pain → directe herpositionering via intellectueel uitdagend imago</td></tr>
<tr><td>Trigger voor beslisser</td><td>Investering in kindsontwikkeling (cultureel kapitaal)</td><td>Bourdieu (1984): bereidheid tot hogere prijs als culturele waarde geborgd is</td></tr>
</tbody></table>
<div class="cg" style="margin-top:20px">
${card('Strategische keuze','Twee banners, geen één','De keuze voor twee gesegmenteerde banners is geen designbeslissing, maar een directe vertaling van het onderzoek: de informatiebehoefte van de beslisser verschilt fundamenteel per ontwikkelingsfase van het kind. Een uniforme boodschap negeert dit onderscheid.','#7DC242')}
${card('Conversiekracht','Pilot renderend bij 199 bezoekers','Door de beslisser (die in 55% beslist) op het exacte moment van "hoge nood" aan te spreken met een gesegmenteerde boodschap, stijgt de conversiekans aanzienlijk. Break-even al bij slechts 199 extra bezoekers op regendagen.','#F47C20')}
</div>
</div>`,

'biz_fin':()=>`<div class="cs ac">
<h2>Financiële Onderbouwing: Kostenanalyse & ROI (Bijlage 14 & 15)</h2>
<p class="lead">De inzet via Infoplaza is kostenefficiënt en onderbouwd met harde cijfers. Slechts 3% van het oorspronkelijk beloofde Amsterdam-budget — maar specifiek ontworpen om via automatisering maximale relevantie te behalen met minimale middelen.</p>
<h3>Kostenanalyse Pilot (€ 2.960,-)</h3>
<table class="dt">
<thead><tr><th>Post</th><th>Uren / Eenheid</th><th>Kosten</th><th>Onderbouwing</th></tr></thead>
<tbody>
<tr><td>Infoplaza Testcampagne</td><td>1 maand</td><td><strong>€ 2.000,-</strong></td><td>Media-inkoop voor contextuele weather targeting + regionale targeting Zuid-Holland via Infoplaza-netwerk (Weeronline/Weerplaza). ±200.000 impressies.</td></tr>
<tr><td>Content &amp; Design</td><td>15 uur</td><td><strong>€ 600,-</strong></td><td>Ontwerp Banner −10 en Banner +10, gesegmenteerd op 10-jaar grens van Rozendaal. Twee uitingen, twee doelgroepen.</td></tr>
<tr><td>Projectregie (intern)</td><td>13,5 uur</td><td><strong>€ 360,-</strong></td><td>Coördinatie KNMI API-koppeling, IT-afstemming met externe web-partner, impactmeting en rapportage.</td></tr>
<tr class="fw"><td colspan="2"><strong>TOTAAL PILOT</strong></td><td><strong>€ 2.960,-</strong></td><td>3% van het oorspronkelijk verwachte Amsterdam-budget van €100.000,-</td></tr>
</tbody>
</table>
<div class="sr">
${stat('€2.960','Totale pilotinvestering','#3d7a10')}
${stat('199','Break-even bezoekers','#1a2744')}
${stat('€14,90','Ticketprijs MWR','#2bbfaa')}
${stat('217%','Geprognosticeerde ROI','#F47C20')}
</div>
<h3>Break-even Analyse</h3>
<p>Bij een actuele ticketprijs van €14,90 is de berekening als volgt:<br>
<strong>€2.960 ÷ €14,90 = 198,66 → Break-even bij 199 extra bezoekers</strong></p>
<p>Het aantrekken van 199 extra bezoekers in de Randstad is, zeker op regenachtige dagen wanneer de droog-garantie haar hoogste waarde heeft, een <em>zeer realistische doelstelling</em>.</p>
<h3>Winstprognose Scenario 15% Conversie (Bijlage 15)</h3>
<table class="dt">
<thead><tr><th>Parameter</th><th>Berekening</th><th>Resultaat</th></tr></thead>
<tbody>
<tr><td>Verwachte clicks</td><td>200.000 impressies × CTR 0,45%</td><td><strong>900 kwalitatieve clicks</strong></td></tr>
<tr><td>Groepsopbrengst</td><td>3,5 personen × €14,90</td><td><strong>€52,15 per conversie</strong></td></tr>
<tr><td>Conversies bij 15%</td><td>900 × 15%</td><td><strong>135 groepen</strong></td></tr>
<tr><td>Ticketomzet</td><td>135 × €52,15</td><td><strong>€7.040,25</strong></td></tr>
<tr><td>Secundaire omzet</td><td>473 extra bezoekers × €5,00 (horeca/giftshop)</td><td><strong>€2.365,-</strong></td></tr>
<tr><td>Totale opbrengst</td><td>€7.040,25 + €2.365,-</td><td><strong>€9.405,25</strong></td></tr>
<tr><td>Investering</td><td>—</td><td>− €2.960,-</td></tr>
<tr class="fw"><td colspan="2"><strong>REËLE VERWACHTE WINST</strong></td><td colspan="2"><strong>€6.445,- | ROI: 217%</strong></td></tr>
</tbody>
</table>
<p style="font-size:.78rem;color:var(--mu)">Bron: Bijlage 15 Winstanalyse. De realiteitswaarde van deze prognose is extern bevestigd door een brancheprofessional bij een vergelijkbare indoor-attractie.</p>
${h('Rendement op lange termijn','De werkelijke ROI ligt structureel hoger dan de break-even berekening suggereert: (1) Hogere conversie via succesgarantie — weersonafhankelijke status direct koppelen aan moment van hoge nood; (2) Hogere bereidheid tot betalen — transitie van hobbyzolder naar Atelier-Museum verhoogt gepercipieerde waarde (Respondent 4 bevestigde dit expliciet).')}
</div>`,

'biz_validatie':()=>`<div class="cs ac">
<h2>Externe Validatie: Bewezen Relevantie Buiten MWR</h2>
<p class="lead">De geloofwaardigheid van een concept wordt pas écht op de proef gesteld wanneer de oorspronkelijke opdrachtgever wegvalt. Na het faillissement van Miniworld Rotterdam heb ik op eigen initiatief het concept gepresenteerd aan externe partners in de branche.</p>
${h('✓ Branche-validatie na faillissement','Dit was geen reactieve stap om het portfolio te redden, maar een bewuste keuze om de universele waarde van het framework te toetsen aan een onafhankelijk oordeel van branchegenoten.')}
<h3>Validatie 1: Het Spoorwegmuseum (Utrecht) — Iris</h3>
<p>Het Leisure Manager Framework is voorgelegd aan een strategische partner in de sector: het Spoorwegmuseum. De feedback van Iris (Brancheprofessional) valideert de strategische keuzes als antwoord op de taaie problematiek van de sector:</p>
<table class="dt">
<thead><tr><th>Kernpunt</th><th>Bevestiging</th><th>Implicatie</th></tr></thead>
<tbody>
<tr><td>10-jaar grens</td><td>Het museum herkent dat gasten veel waarde hechten aan leeftijdsdifferentiatie</td><td>Legitimeert de gesegmenteerde contentstrategie als instrument voor risicoreductie</td></tr>
<tr><td>Demand Capture via weertargeting</td><td>Bezoekcijfers correleren direct met neerslag</td><td>Onderbouwt de commerciële logica van de geautomatiseerde Weertrigger</td></tr>
<tr><td>Financiële onderbouwing</td><td>Break-even bij 199 bezoekers beoordeeld als "realistisch en overtuigend"</td><td>Bewijst dat de ROI-berekening ook externe toets doorstaat</td></tr>
<tr><td>Product-vóór-Promotie</td><td>"Operationele ontzorging vraagt in de praktijk veel werk en is niet zomaar opgelost"</td><td>Rechtvaardigt de dwingende keuze — belofte extern communiceren pas als intern alles klopt</td></tr>
</tbody>
</table>
<h3>Validatie 2: Museon-Omniversum (Den Haag)</h3>
<p>Een brancheprofessional van Museon-Omniversum bevestigde de validiteit van de leisure manager als centrale spil in de marketingstrategie. De professional koppelde het praktijkonderzoek direct aan het motivatiemodel van <strong>Falk</strong>, waarin de ouder optreedt als facilitator: iemand die een bezoek primair initieert om een waardevolle gedeelde ervaring voor het gezin te realiseren.</p>
<p>Een essentieel inzicht uit deze validatie: het portfolio fungeert <em>minder als vluchtig marketingconcept</em> en <em>meer als structureel denkkader of checklist</em> om strategische keuzes te objectiveren. Dit onderbouwt het besluit om het project na het faillissement van Miniworld te transformeren naar een Strategische Blauwdruk.</p>
<div class="cg">
${card('Sectorale overdraagbaarheid','Universeel toepasbaar','De externe validatie — gecombineerd met de testresultaten bij de focusgroep (N=8) en een geprognosticeerde ROI van 217% — vormt de bewijslast dat het concept niet afhankelijk is van één specifieke organisatie.','#7DC242')}
${card('Universele toepasbaarheid','Drie praktijkcases','Het Leisure Manager Framework is verder aangetoond via drie concrete praktijkcases: het Spoorwegmuseum, Villa Zebra en Duinrell. Bewijs dat dit een sectorbreed implementeerbaar model is.','#2bbfaa')}
</div>
</div>`,

'biz_draagvlak':()=>`<div class="cs ac">
<h2>Draagvlak & Stakeholder Commitment</h2>
<p class="lead">De transformatie van MWR naar een marktgestuurde organisatie vereist meer dan een strategisch plan — het vraagt om het verenigen van uiteenlopende belangen rondom één gedeelde visie. In deze fase heb ik als bruggenbouwer het noodzakelijke commitment verkregen.</p>
<h3>Management & Directie: Intern Draagvlak</h3>
<div class="cg">
${card('Wetenschappelijke objectivering','Modellen als bruggenbouwer','Door de modellen van Mowen & Graefe (de 55%-regel) en Rozendaal (de 10-jaar grens) in te brengen, heb ik de discussie geobjectiveerd. Dit nam de interne weerstand weg tegen het richten op vrouwen en specifieke leeftijdsgroepen — een weerstand die voortvloeide uit de productgerichte cultuur van de organisatie.','#1a2744')}
${card('Financiële bewijslast','Lage drempel: €2.960,-','De kostenanalyse voor de pilot maakt concreet dat de investering zich terugverdient bij slechts 199 extra bezoekers. Dit verlaagt de drempel voor intern commitment, omdat de financiële haalbaarheid aantoonbaar is zonder afhankelijk te zijn van het volledige Amsterdam-budget.','#7DC242')}
</div>
<h3>Sectorbreed Draagvlak: Externe Validatie</h3>
<p>Om de universele waarde van het onderzoek te bewijzen en aan te tonen dat het concept overtuigend is voor de branche, is het Leisure Manager Framework voorgelegd aan twee branchepartners:</p>
<table class="dt">
<thead><tr><th>Partner</th><th>Type feedback</th><th>Conclusie</th></tr></thead>
<tbody>
<tr><td>Spoorwegmuseum — Iris</td><td>Gedetailleerde inhoudelijke feedback + validatie financiële onderbouwing</td><td>"Het concept is direct toepasbaar voor onze organisatie." Bevestigt weertargeting, 10-jaar grens en Product-vóór-Promotie.</td></tr>
<tr><td>Museon-Omniversum</td><td>Wetenschappelijke erkenning + positioneringsadvies</td><td>Portfolio fungeert als structureel denkkader — hogere waarde dan vluchtig marketingconcept. Koppeling aan Falk-motivatiemodel bevestigd.</td></tr>
</tbody>
</table>
<h3>Twee Optimalisaties — Van Eerste Prototype naar Definitief Concept</h3>
<div class="cg">
${card('Optimalisatie 1','Atelier-Museum als antwoord op de tiener','Snippet #80 ("past meer op een zolder") en feedbackinterviews toonden aan dat de huidige uniforme uitstraling door tieners als kinderachtig wordt ervaren. Gevolg: definitieve concept positioneert MWR expliciet als high-end Atelier-Museum voor het segment ≥10j.','#F47C20')}
${card('Optimalisatie 2','Sectorimpact als Borging','De meest ingrijpende optimalisatie was de herdefiniëring van de impact na het faillissement van MWR. Het concept is doorvertaald naar het Leisure Manager Framework — een sectorbreed implementatiemodel. De sterkste vorm van optimalisatie: een concept dat robuust genoeg is om de wegval van de oorspronkelijke organisatie te overleven.','#e8407a')}
</div>
<div class="rf pe"><div class="rl">Persoonlijke Reflectie</div>
<p>Toen de directie de marketing-lockdown aankondigde, voelde dat als een enorme tegenslag voor mijn project. Toch leerde ik hier wat professionele wendbaarheid écht inhoudt. In plaats van in de slachtofferrol te kruipen, heb ik het plan omgebouwd tot een overdrachtsdossier dat nu, zelfs na het faillissement, nog waarde heeft voor de branche. Mijn doorzettingsvermogen werd hier getest en ik ben trots op het feit dat ik de regie heb behouden door draagvlak te zoeken bij externe partners om mijn concept te valideren.</p></div>
</div>`,

'real_definitie':()=>`<div class="cs ac">
<div class="che"><div class="cey" style="background:#fef0f5;color:#3a0018">⚙️ LLO 4 — Realiseren</div>
<h1>Definitie: De Contextuele Digitale Trigger</h1>
<p class="hs">De kern van de operationele realisatie is het ontwerp van een gerichte weather targeting campagne via het Infoplaza-netwerk. In plaats van een kostbaar eigen systeem te ontwikkelen, wordt gebruik gemaakt van het grootste weerplatform van Nederland — met een miljoenenbereik via Weeronline en Weerplaza.</p></div>
<h3>Strategische Fit: Ontzorging van de Leisure Manager</h3>
<p>Dit instrument fungeert als de ultieme contextuele digitale trigger: via de KNMI API-koppeling worden uitingen uitsluitend getoond wanneer de weersomstandigheden in de regio Randstad/Zuid-Holland ongunstig zijn (regenkans >70% of temperatuur onder 15°C). Hiermee wordt de marketingkracht gebundeld op momenten van de hoogste relevantie, waardoor verspilling van het beperkte budget wordt voorkomen en de conversiekans structureel hoger ligt dan bij generieke, altijd-aan-campagnes.</p>
<div class="cg">
${card('Strategische Fit','Ontzorging Leisure Manager','De interventie richt zich specifiek op de vrouwelijke partner (55% beslisser). In haar rol als leisure manager van de sandwich-generatie beheert zij een complexe vrijetijdspuzzel onder constante druk. Door de banner uitsluitend te tonen bij slecht weer, biedt MWR haar op het moment van de hoogste logistieke stress een directe, ontzorgende oplossing.','#e8407a')}
${card('Operationele Borging','Automatisering als Innovatie','De werkelijke innovatie voor de organisatie ligt in de automatisering. Eenmaal ingesteld, activeert de KNMI-trigger zichzelf zonder dagelijkse handmatige inzet van het marketingteam. Een kleine organisatie in post-COVID herstelfase kan geen campagneteam inzetten dat dagelijks de weersvoorspellingen monitort.','#7DC242')}
</div>
<h3>Wetenschappelijke Segmentatie: Eerste Keer in Geschiedenis MWR</h3>
<p>Om de ineffectieve one-size-fits-all communicatie definitief te doorbreken, past de campagne de 10-jaar grens van Rozendaal (2011) toe als structureel filter. Dit is de <strong>eerste keer in de geschiedenis van MWR</strong> dat de verschuivende informatiebehoefte van het opgroeiende kind structureel wordt erkend in de marketinguitingen — niet als eenmalige campagnekeuze, maar als verankerd principe in de contentkalender.</p>
<h3>Meer dan een Weercampagne: Strategische Synthese</h3>
<p>De strategische omslag voor MWR bevat veel meer dan een weercampagne. Het is een fundamentele heroriëntatie van de commerciële strategie op de werkelijke beslisser. De bredere strategie bestaat uit drie samenhangende lagen:</p>
<table class="dt">
<thead><tr><th>Laag</th><th>Instrument</th><th>Functie</th></tr></thead>
<tbody>
<tr><td>1. Direct converteren</td><td>Weertrigger via Infoplaza</td><td>Demand Capture op regendagen — actief aanwezig op moment van hoogste logistieke stress</td></tr>
<tr><td>2. Merkopbouw</td><td>Social media storytelling</td><td>Langdurige positionering als Atelier-Museum via authentieke content — ook bij goed weer relevant</td></tr>
<tr><td>3. Geloofwaardigheid</td><td>Product-vóór-Promotie</td><td>De beloofde succesgarantie wordt waargemaakt op de vloer via technisch herstel en preventief onderhoud</td></tr>
</tbody>
</table>
</div>`,

'real_planning':()=>`<div class="cs ac">
<h2>Projectplanning (GANTT-chart — Bijlage 11)</h2>
<p class="lead">De onderstaande planning fungeert als operationele handleiding voor het moment dat de financiële kaders van MWR herstel toelaten. De centrale regiekeuze is onveranderd: <strong>Product-vóór-Promotie</strong>.</p>
${hr('Dwingende Regiekeuze','Niets ondermijnt de succesgarantie sneller dan een campagne die een belofte maakt die de organisatie op de vloer niet kan waarmaken. Technisch herstel heeft prioriteit boven marketingactivatie.')}
<h3>GANTT-overzicht (4 maanden)</h3>
<table class="dt">
<thead><tr><th>Fase / Taak</th><th>M1</th><th>M2</th><th>M3</th><th>M4</th><th>Primaire Stakeholders</th></tr></thead>
<tbody>
<tr><td><strong>1. Kaders &amp; Draagvlak</strong></td><td>✓</td><td></td><td></td><td></td><td>Directie &amp; Management</td></tr>
<tr><td><strong>2. Product-Herstel (Het Vliegwiel)</strong></td><td>✓</td><td>✓</td><td></td><td></td><td>Technische Dienst &amp; Atelier</td></tr>
<tr><td><strong>3. Prototyping &amp; BML-Test</strong></td><td></td><td>✓</td><td></td><td></td><td>Vrouwelijke Beslisser (N=8)</td></tr>
<tr><td><strong>4. Content Design (10-jaar grens)</strong></td><td></td><td></td><td>✓</td><td></td><td>Marketing &amp; Grafisch vormgever</td></tr>
<tr><td><strong>5. Technische Integratie (KNMI API)</strong></td><td></td><td></td><td>✓</td><td></td><td>IT &amp; Externe Web-partner</td></tr>
<tr class="fw"><td><strong>6. Pilot-Interventie (Lancering)</strong></td><td></td><td></td><td></td><td>✓</td><td>Rotterdam Pas &amp; Social Media</td></tr>
<tr><td><strong>7. Impactmeting &amp; Kostenanalyse</strong></td><td></td><td></td><td></td><td>✓</td><td>Finance &amp; Management</td></tr>
<tr><td><strong>8. Borging &amp; Overdracht</strong></td><td></td><td></td><td></td><td>✓</td><td>Bedrijfsbegeleider &amp; Marketingteam</td></tr>
</tbody>
</table>
<div class="pg">
<div class="pc" style="border-top-color:#F47C20"><div class="pm" style="color:#F47C20">Maand 1–2: Het Fundament</div>
<h4>Product-vóór-Promotie</h4>
<p>De meest kritieke regiekeuze: prioritering van technisch herstel boven marketingactivatie. Adverteren met een Succesgarantie terwijl de interactieve knoppen niet functioneren, leidt tot een negatieve waardekloof die het merkvertrouwen schaadt. Het Amsterdam-budget fungeert eerst als vliegwiel voor structurele professionalisering op de vloer.</p></div>
<div class="pc" style="border-top-color:#2bbfaa"><div class="pm" style="color:#2bbfaa">Maand 2: Validatie</div>
<h4>BML-cyclus bij de Planner</h4>
<p>Prototypen worden getoetst bij de vrouwelijke planner (N=8). Dit is geen formaliteit maar een inhoudelijke stap: de co-creatiesessies in de vorige fase hebben al aangetoond dat feedback van de beslisser tot fundamentele bijsturing leidt.</p></div>
<div class="pc" style="border-top-color:#1a2744"><div class="pm" style="color:#1a2744">Maand 3: Technologische Regie</div>
<h4>KNMI API-koppeling via Infoplaza</h4>
<p>De overgang naar een proactieve, marktgestuurde organisatie. Zodra het systeem staat, activeert de marketing zich automatisch bij elke regenbui in de regio — zonder dagelijkse handmatige inzet van het team. Dit is de operationele vertaling van de ontzorgingsgedachte.</p></div>
<div class="pc" style="border-top-color:#7DC242"><div class="pm" style="color:#3d7a10">Maand 4: Borging</div>
<h4>Financiële Verantwoording &amp; Duurzame Borging</h4>
<p>De impactmeting vergelijkt bezoekerscijfers op regendagen voor en na de pilot. Het borgingsplan verandert het wekelijkse onderhoudsprotocol voor interactieve elementen en de contentkalender op basis van de 10-jaar grens structureel.</p></div>
</div>
</div>`,

'real_kosten':()=>`<div class="cs ac">
<h2>Financiële Verantwoording (Bijlage 14)</h2>
<p class="lead">De onderstaande business case toont aan dat de gekozen koers niet alleen psychografisch relevant is, maar ook bedrijfskundig solide — met een uiterst lage activatiedrempel.</p>
<div class="sr">
${stat('€2.960','Totale pilotinvestering','#3d7a10')}
${stat('200K','Impressies via Infoplaza','#1a2744')}
${stat('199','Break-even bezoekers','#2bbfaa')}
${stat('217%','Geprognosticeerde ROI','#F47C20')}
</div>
<h3>Infoplaza Campagne-instellingen (Bijlage 12)</h3>
<table class="dt">
<thead><tr><th>Parameter</th><th>Instelling</th><th>Reden</th></tr></thead>
<tbody>
<tr><td>Geografische targeting</td><td>Regio Zuid-Holland / Randstad</td><td>Minimaliseert verspilling — alleen beslissers bereiken voor wie een dagbezoek logistiek haalbaar is</td></tr>
<tr><td>Weertrigger 1 (neerslag)</td><td>Regenkans &gt;70%</td><td>Banners automatisch geactiveerd bij voorspelde neerslag via KNMI API</td></tr>
<tr><td>Weertrigger 2 (temperatuur)</td><td>Buitentemperatuur &lt;15°C</td><td>Secundaire trigger vergroot behoefte aan indoor activiteit ook buiten regenseizoen</td></tr>
<tr><td>Timing</td><td>Focus op weekenden &amp; vakantieperiodes</td><td>Piekmomenten voor de vrijetijdspuzzel van de sandwich-generatie</td></tr>
<tr><td>Uitingen</td><td>Banner −10 (zintuiglijk) + Banner +10 (technisch)</td><td>Wetenschappelijke segmentatie op 10-jaar grens van Rozendaal (2011)</td></tr>
</tbody>
</table>
<h3>Strategische Rechtvaardiging van de Investering</h3>
<div class="cg">
${card('Lage drempel','199 extra bezoekers = renderend','Het aantrekken van 199 extra bezoekers in de Randstad is op regenachtige dagen een zeer realistische doelstelling. De pilot is daarmee financieel minimaal risicovol.','#7DC242')}
${card('Secundaire inkomsten','Werkelijke ROI structureel hoger','Elke extra bezoeker genereert naast de ticketprijs additionele bestedingen in horeca en giftshop (geprognosticeerd €5,00 p.p.). Dit verhoogt de commerciële positie van MWR direct.','#2bbfaa')}
${card('Vliegwiel-effect','Structureel instrument, geen pleister','In plaats van het budget te verspillen aan tijdelijke kortingsacties, wordt geïnvesteerd in een geautomatiseerd instrument dat blijft renderen bij elke toekomstige regenbui.','#F47C20')}
${card('Extern bevestigd','Brancheprofessional valideerde ROI','De realiteitswaarde van de prognose is extern bevestigd: een brancheprofessional werkzaam bij een vergelijkbare indoor-attractie beoordeelde de financiële onderbouwing als realistisch en direct toepasbaar.','#1a2744')}
</div>
</div>`,

'real_borging':()=>`<div class="cs ac">
<h2>Borging & Duurzaamheid (Bijlage 16)</h2>
<p class="lead">Een strategische interventie is pas werkelijk geslaagd als deze blijvend van aard is — onafhankelijk van de aanwezigheid van de consultant die haar heeft ontworpen. Het borgingsplan bestaat uit drie lagen die samen een zelfregulerend systeem vormen.</p>
<div class="bl" style="border-left-color:#7DC242">
<div class="blt">Laag 1 — Automatisering van de Weertrigger</div>
<p><strong>Verantwoordelijkheid:</strong> De marketingafdeling voert regie over inhoudelijke contentoptimalisatie. De externe web-partner is verantwoordelijk voor de technische stabiliteit van de KNMI API-koppeling.<br>
<strong>Werking:</strong> De weertrigger activeert automatisch bij regenkans &gt;70% in regio Zuid-Holland. Het marketingteam wordt ontlast van dagelijkse ad-hoc beslissingen — het systeem werkt proactief, ook als niemand er actief aan denkt.</p></div>
<div class="bl" style="border-left-color:#2bbfaa">
<div class="blt">Laag 2 — Structurele Content-regie via de 10-jaar Grens</div>
<p><strong>Werking:</strong> De wetenschappelijke inzichten van Rozendaal (2011) zijn verankerd als verplicht toetsingscriterium in de jaarlijkse contentkalender. Bij elke nieuwe campagne wordt standaard gecontroleerd of de uiting gedifferentieerd is:<br>
• Segment &lt;10 jaar: Focus op zintuiglijke prikkels, lichtjes en actie<br>
• Segment ≥10 jaar: Focus op techniek, meesterschap en Atelier-Museum status<br>
<strong>Effect:</strong> De one-size-fits-all communicatie is hiermee structureel geëlimineerd — niet afhankelijk van de persoonlijke inzet van een medewerker, maar vastgelegd als organisatieprotocol.</p></div>
<div class="bl" style="border-left-color:#F47C20">
<div class="blt">Laag 3 — Operationeel Onderhoudsprotocol (Wekelijkse Checklist)</div>
<p>Om de commerciële belofte van de succesgarantie op de vloer waar te maken, is de transitie gemaakt van reactief naar preventief onderhoud:</p>
<table class="dt" style="margin-top:8px">
<thead><tr><th>Onderdeel</th><th>Controlepunt</th><th>Prioriteit</th><th>Doelgroep</th></tr></thead>
<tbody>
<tr><td>Interactieve Knoppen</td><td>Functioneren alle groene knoppen? (Snippet #61)</td><td>Hoog</td><td>Segment 5–9 jaar</td></tr>
<tr><td>Dag-Nachtcyclus</td><td>Werken licht- en geluidseffecten correct?</td><td>Hoog</td><td>Segment 0–4 jaar</td></tr>
<tr><td>Ateliertrransparantie</td><td>Is het maakatelier goed zichtbaar en representatief?</td><td>Middel</td><td>Segment ≥10 jaar</td></tr>
<tr><td>Hygiëne &amp; Zichtlijnen</td><td>Zijn leuningen schoon? Kijkhoogte peuters gewaarborgd?</td><td>Middel</td><td>Segment 0–4 jaar</td></tr>
</tbody>
</table></div>
${h('Sterkste Borging: Sectorale Overdraagbaarheid','Na het faillissement van MWR is het borgingsplan uitgebreid naar sectoraal niveau: het Leisure Manager Framework vertaalt de kernprincipes naar een implementatiemodel voor de gehele vrijetijdssector. Het Spoorwegmuseum, Villa Zebra en Duinrell zijn drie concrete toepassingen. Dit is de sterkste vorm van borging: een systeem dat blijft werken, ook nadat de organisatie waarvoor het is ontworpen niet meer bestaat.')}
</div>`,

'real_impact':()=>`<div class="cs ac">
<h2>Impact: Wat er Concreet is Bereikt</h2>
<p class="lead">De rubric vraagt niet alleen of er een plan is, maar of er <strong>impact is gerealiseerd</strong>. Gezien de bijzondere omstandigheden — het faillissement van MWR één week voor de deadline — is het relevant te benoemen welke impact er aantoonbaar is bereikt.</p>
<div class="sr">
${stat('N=8','Leisure managers gevalideerd','#7DC242')}
${stat('2','Externe branchepartners','#2bbfaa')}
${stat('3','Praktijkcases uitgewerkt','#F47C20')}
${stat('217%','ROI extern bevestigd','#e8407a')}
</div>
<h3>Vier Aantoonbare Impactdimensies</h3>
<div class="cg">
${card('1. Conceptvalidatie','N=8 vrouwelijke leisure managers','8 vrouwelijke leisure managers uit de sandwich-generatie hebben de weertrigger als relevante oplossing bevestigd en de segmentatie op de 10-jaar grens als herkenbaar en waardevol beoordeeld. Twee concrete bijsturingen op basis van hun feedback.','#7DC242')}
${card('2. Externe branchevalidatie','Spoorwegmuseum + Museon-Omniversum','Twee brancheprofessionals hebben het concept, de financiële onderbouwing en de strategische logica als direct toepasbaar bevestigd — onafhankelijk van Miniworld Rotterdam als organisatie.','#2bbfaa')}
${card('3. Sectorale overdraagbaarheid','3 praktijkcases uitgewerkt','Het Leisure Manager Framework is uitgewerkt voor Spoorwegmuseum (Utrecht), Villa Zebra (Rotterdam) en Duinrell (Wassenaar). Bewijs dat de impact van dit traject verder reikt dan één organisatie.','#F47C20')}
${card('4. Financiële haalbaarheid','217% ROI extern als realistisch beoordeeld','De commerciële zelfredzaamheid is aantoonbaar haalbaar voor elke indoor-attractie die dit model toepast. Break-even bij 199 bezoekers.','#e8407a')}
</div>
<h3>Wat dit betekent voor een Doorstarter of Sectorpartij</h3>
<p>Het plan ligt klaar als een startklare blauwdruk. Elke indoor-attractie die dit framework implementeert, beschikt over een bewezen commercieel instrument dat:</p>
<table class="dt">
<thead><tr><th>Eigenschap</th><th>Bewijs</th></tr></thead>
<tbody>
<tr><td>Direct renderend is</td><td>Break-even bij 199 bezoekers → vrijwel elke regendag is voldoende</td></tr>
<tr><td>De leisure manager centraal stelt</td><td>N=8 validatie + wetenschappelijke basis Mowen & Graefe (2006)</td></tr>
<tr><td>Structureel borgt dat de belofte op de vloer wordt waargemaakt</td><td>3-lagen borgingsplan: automatisering + contentprotocol + onderhoudschecklist</td></tr>
<tr><td>Sectorbreed toepasbaar is</td><td>Leisure Manager Framework gevalideerd bij Spoorwegmuseum en Museon-Omniversum</td></tr>
</tbody>
</table>
<div class="rf pe"><div class="rl">Persoonlijke Reflectie — Het Faillissement als Leerschool</div>
<p>Het proces van realiseren kreeg een geheel andere betekenis toen Miniworld Rotterdam slechts één week voor de deadline van dit portfolio officieel failliet ging. Dit nieuws zorgde voor een enorme schok en bracht een grote hoeveelheid stress met zich mee. Ik moest op dat moment razendsnel professioneel schakelen. Ik heb op eigen initiatief de regie gepakt door het plan direct om te vormen van een uitvoeringsgericht verslag naar een universele Strategische Blauwdruk voor de sector. In deze hectische week heb ik bewezen dat ik onder zware druk resultaat kan leveren door draagvlak te zoeken bij externe partners. Ik heb geleerd dat een succesvolle realisatie niet afhangt van de grootte van het budget of de stabiliteit van de organisatie, maar van het ontwerpen van een systeem dat ook in een crisis overeind blijft.</p></div>
</div>`,

'refl_persoonlijk':()=>`<div class="cs ac">
<div class="che"><div class="cey" style="background:#f0ecff;color:#1a0040">🔍 Reflectie & Framework</div>
<h1>Persoonlijke Reflectie</h1>
<p class="hs">Een eerlijk en gedetailleerd terugkijken op het afstudeertraject — inclusief de moeilijke momenten en de situaties waar ik het meest van heb geleerd.</p></div>
<div class="rf pe"><div class="rl">De Start: Enorme Ambities</div>
<p>Toen ik begon bij Miniworld Rotterdam, zag de toekomst er rooskleurig uit. Er werd gesproken over een budget van €100.000,- vanuit Project Amsterdam. Om aan te geven hoe veel geld dat is: dat zijn wel 6.711 verkochte kaartjes. Met zo'n groot bedrag in mijn hoofd kon ik groot dromen. Ik wilde Miniworld echt professioneler maken. De directeur gaf aan dat het bedrijf na corona zware tijden gekend heeft. Hier was ik mij bewust van voordat ik aan het afstuderen begon. Echter zag ik dit juist als een heel mooie uitdaging waarin ik echt impact kon maken.</p></div>
<div class="rf pe"><div class="rl">De Keerpunten: Aanpassen onder Druk</div>
<p>Maar de werkelijkheid was anders. Het geld uit Amsterdam kwam niet binnen en er ontstonden grote geldzorgen. Ik moest mijn plannen snel aanpassen naar een kleine proef (pilot) van slechts €2.960,-. De grootste klap kwam één week voor mijn deadline: Miniworld werd officieel failliet verklaard. Mijn verslag is daarom geen plan meer voor Miniworld zelf, maar een voorbeeldplan geworden voor de hele vrijetijdssector.</p></div>
<div class="rf pe"><div class="rl">Het Kritische Leerpunt: Proof of Funds</div>
<p>Dit hele traject was voor mij een flinke test. In het begin liet ik me meeslepen door het enthousiasme in de werkplaats. Mijn belangrijkste les is dat ik niet alles direct moet geloven: ik heb geleerd dat ik altijd eerst de papieren en de bankrekening moet checken voordat ik plannen maak op basis van een beloofd budget.</p></div>
<div class="rf"><div class="rl">De Omslag: Van Slachtoffer naar Regisseur</div>
<p>Toen Miniworld failliet ging, was dat een enorme schok en het gaf me veel stress. Maar ik heb niet opgegeven. Ik heb de leiding genomen en mijn verslag razendsnel omgebouwd zodat het nu nuttig is voor andere bedrijven. Ook al is Miniworld nu dicht, mijn onderzoek laat zien hoe je een attractie weer gezond kunt maken. Door reclame te maken op het moment dat het nodig is, bij de juiste doelgroep. De cijfers laten zien dat dit heel winstgevend is, met een winstpercentage van maar liefst 217%.</p></div>
</div>`,

'refl_professioneel':()=>`<div class="cs ac">
<h2>Professionele Groei</h2>
<p class="lead">Ik verlaat mijn studie nu met veel meer zelfvertrouwen en kennis over hoe de zakenwereld echt werkt. Nu kan ik vol vertrouwen aan mijn premaster Marketing Management aan de Tilburg University.</p>
<h3>Vier Competentieontwikkelingen</h3>
<div class="cg">
${card('1. Commercieel Bewustzijn','Van passie naar geverifieerde data','Strategische keuzes moeten altijd rusten op geverifieerde financiële data. Proof of funds is niet optioneel. Nooit varen op operationele passie alleen — hoe overtuigend die ook is.','#7DC242')}
${card('2. Professionele Wendbaarheid','Plan B altijd klaar','Toen Miniworld failliet ging, heb ik niet opgegeven maar de regie gepakt en het plan in één week omgebouwd tot een sectorale blauwdruk. Dat is wendbaarheid onder druk.','#2bbfaa')}
${card('3. Methodisch Denken','Aannames → bewijs','Door netnografie (N=80) en diepte-interviews (N=8) te combineren heb ik aangetoond dat goede adviezen rusten op meerdere databronnen en wetenschappelijke onderbouwing — niet op gevoel.','#F47C20')}
${card('4. Sectorbreed Impact','Van Miniworld naar de markt','Het Leisure Manager Framework bewijst dat ik als junior consultant in staat ben om duurzame waarde te creëren die de grenzen van de oorspronkelijke organisatie overstijgt.','#e8407a')}
</div>
<h3>Reflectie op de Vier LLO's</h3>
<table class="dt">
<thead><tr><th>LLO</th><th>Geleverd bewijs</th><th>Geleerd</th></tr></thead>
<tbody>
<tr><td><strong>Koers Bepalen</strong></td><td>Netnografie N=80, DESTEP, BMC, SWOT, confrontatiematrix → Koers Leisure Management onderbouwd en gedragen door stakeholders</td><td>Goede analyse vraagt om meerdere kijkkaders (3D perspectief). Eén model is nooit voldoende.</td></tr>
<tr><td><strong>Waarde Creëren</strong></td><td>N=8 diepte-interviews, VPC 3 segmenten, FOETSJE 61/70 → Succesgarantie als gekozen waarde extern en intern gevalideerd</td><td>Co-creatie is geen formaliteit maar een inhoudelijke sturingsbron die concepten fundamenteel bijstuurt.</td></tr>
<tr><td><strong>Business Development</strong></td><td>BML-cyclus, Dynamische Weertrigger, ROI 217%, externe validatie Spoorwegmuseum + Museon-Omniversum</td><td>Een taai probleem oplossen vraagt om proactiviteit: ook na wegvallen opdrachtgever regie houden.</td></tr>
<tr><td><strong>Realiseren</strong></td><td>GANTT 4 fasen, financiële onderbouwing, borgingsplan 3 lagen, Leisure Manager Framework sectorbreed</td><td>Duurzame borging betekent dat het systeem werkt zonder jou — automatisering als sleutelprincipe.</td></tr>
</tbody>
</table>
</div>`,

'refl_feedback':()=>`<div class="cs ac">
<h2>Feedback van Stagiaires</h2>
<p class="lead">Twee collega-stagiaires die gedurende het traject met mij hebben samengewerkt, geven hieronder hun reflectie op mijn functioneren.</p>
<blockquote><p>Tijdens mijn stage heb ik prettig samengewerkt met Niels. Wat mij vooral opviel is dat hij erg betrokken was bij zijn werkzaamheden en verantwoordelijkheid nam voor zijn eigen projecten. Hij wachtte niet af, maar ging zelf actief op zoek naar informatie en oplossingen wanneer hij ergens tegenaan liep. Daarnaast was Niels altijd bereid om anderen te helpen wanneer dat nodig was. Hij stond open voor feedback en nam opmerkingen serieus mee in zijn werk. Hierdoor verliep de samenwerking prettig en professioneel. Een sterk punt van Niels is zijn doorzettingsvermogen. Wanneer een opdracht of onderzoek tegenzat, bleef hij zoeken naar mogelijkheden om toch tot een goed resultaat te komen. Als ontwikkelpunt zou ik noemen dat Niels soms veel tijd besteedde aan het perfectioneren van details. Hierdoor legde hij de lat voor zichzelf erg hoog. Desondanks zorgde dit wel voor een hoge kwaliteit van zijn werk.</p><cite>— Stagiaire 1</cite></blockquote>
<blockquote><p>Ik heb Niels leren kennen als een enthousiaste en gemotiveerde collega. Tijdens gezamenlijke werkzaamheden communiceerde hij duidelijk en hield hij anderen goed op de hoogte van de voortgang van zijn projecten. Wat ik sterk vond, was zijn vermogen om onderzoeksresultaten te vertalen naar concrete ideeën. Hij dacht kritisch na over vraagstukken en durfde zijn mening te geven tijdens overleggen. Daarnaast was Niels toegankelijk in de samenwerking. Hij stond open voor andere inzichten en luisterde naar de ideeën van collega's. Hierdoor ontstond een prettige werksfeer waarin samenwerken makkelijk verliep. Een aandachtspunt is dat Niels soms veel verschillende ideeën tegelijkertijd onderzocht. Hierdoor kon het voorkomen dat hij langer bezig was met het maken van keuzes. Naarmate de stage vorderde, werd hij hier steeds beter in door meer prioriteiten te stellen.</p><cite>— Stagiaire 2</cite></blockquote>
<h3>Eigen Reflectie op de Feedback</h3>
<div class="cg">
${card('Herkend sterk punt','Doorzettingsvermogen','Dit werd getest door het faillissement van MWR. In plaats van op te geven heb ik het plan omgebouwd tot een sectorale blauwdruk — bewijs dat dit doorzettingsvermogen ook onder extreme druk standhoudt.','#7DC242')}
${card('Herkend ontwikkelpunt','Prioriteren vs. perfectioneren','Ik heb dit traject geleerd om sneller keuzes te maken: wanneer is 80% goed genoeg en wanneer is 100% noodzakelijk? De pilot van €2.960,- toont dat een MVP ook effectief kan zijn.','#F47C20')}
</div>
</div>`,

'refl_fw_intro':()=>`<div class="cs ac">
<h2>Het Leisure Manager Framework</h2>
<p class="lead">Een implementeerbaar plan voor de gehele vrijetijdssector — de overdraagbare kern van dit afstudeertraject. Bewijs dat de inzichten uit de Miniworld Rotterdam-casus universeel geldig zijn.</p>
${h('Van Miniworld naar Sectorbreed','De wetenschappelijke pijlers waarop het MWR-plan rust zijn niet organisatie-specifiek. Zij beschrijven fundamentele wetmatigheden van de vrijetijdsmarkt die voor elke attractie gelden.')}
<h3>Theoretische Fundering — Vier Wetenschappelijke Pijlers</h3>
<table class="dt">
<thead><tr><th>Wetenschapper</th><th>Kernbevinding</th><th>Implicatie voor de sector</th></tr></thead>
<tbody>
<tr><td><strong>Mowen & Graefe (2006)</strong></td><td>Vrouwelijke partner = 55% uiteindelijke beslisser; 42% idee-initiator; 57% informatieverzamelaar</td><td>Marketing die haar niet specifiek adresseert op haar informatiebehoefte, mist haar commerciële slagkracht</td></tr>
<tr><td><strong>Rozendaal (2011)</strong></td><td>10-jaar grens = cognitief omslagpunt in sociaal-cognitieve vaardigheden en reclamewijsheid</td><td>Attracties die dit negeren verliezen de relevantie voor het oudere kind en activeren de beslisser niet effectief</td></tr>
<tr><td><strong>Li et al. (2021)</strong></td><td>Weersafhankelijkheid = primaire beslissingsfactor voor families bij het plannen van een daguitje in Nederland</td><td>Indoor-attracties beschikken over een structureel concurrentievoordeel dat zij in hun marketing systematisch kunnen verzilveren</td></tr>
<tr><td><strong>Leask et al. (2024)</strong></td><td>Vrijetijdssector opereert in "constante globale crisis" — productpromotie verliest terrein</td><td>Winnende organisaties transformeren van productgericht naar bezoeker-gecentreerde Node of Experience</td></tr>
</tbody>
</table>
<h3>Afbakening</h3>
<p>Het MWR-concept (de Dynamische Weertrigger via Infoplaza) blijft ongewijzigd staan als het specifieke uitvoeringsplan voor een doorstarter van Miniworld Rotterdam of een vergelijkbare indoor-attractie. Dit framework bouwt daar náást een generiek model dat breder toepasbaar is voor de gehele vrijetijdssector.</p>
</div>`,

'refl_fw_model':()=>`<div class="cs ac">
<h2>Het Drietraps-implementatiemodel</h2>
<p class="lead">Het Leisure Manager Framework bestaat uit drie opeenvolgende stappen. Elke stap bouwt voort op de vorige en is toepasbaar ongeacht de schaal, het type of de doelgroep van de attractie.</p>
<div class="bm">
<div class="bs"><div class="bn" style="color:#7DC242">01</div><div class="bt" style="color:#3d7a10">Identificeer de werkelijke beslisser</div>
<p>Wie neemt in jóúw bezoekersmix de beslissing? In de meeste gezinsgerichte attracties is dit de vrouwelijke partner. Maar de beslisser kan ook een leerkracht zijn (schoolgroepen), een mantelzorger (senioren) of een corporate eventmanager (B2B). Breng dit in kaart via desk research (reviews, CRM-data) en 5–8 diepte-interviews.<br><strong>Kernvraag: Wie pakt de telefoon op als er een dagje uit gepland moet worden?</strong></p></div>
<div class="bs"><div class="bn" style="color:#F47C20">02</div><div class="bt" style="color:#F47C20">Breng de specifieke fricties in kaart</div>
<p>Elke beslisser heeft unieke pains die haar ervan weerhouden te kiezen voor jóúw attractie. Universele pains zijn: weersafhankelijkheid (Li et al., 2021), de "mislukt-uitje"-angst (Leask et al., 2024) en de "past-het-voor-iedereen"-twijfel (Rozendaal, 2011). Attractie-specifieke pains vereisen eigen onderzoek: netnografie (min. N=50) en diepte-interviews.<br><strong>Kernvraag: Wat is haar gróótste risico als zij kiest voor jóúw attractie?</strong></p></div>
<div class="bs"><div class="bn" style="color:#2bbfaa">03</div><div class="bt" style="color:#2bbfaa">Kies het passende ontzorgingsinstrument</div>
<p>Op basis van de geïdentificeerde beslisser en haar fricties kies je uit drie strategische richtingen:<br>• <strong>Richting A — Cognitieve Ontzorging:</strong> differentieer op 10-jaar grens (lage kosten, hoge relevantie)<br>• <strong>Richting B — Logistieke Ontzorging:</strong> succesgarantie + weertrigger (meest effectief indoor)<br>• <strong>Richting C — Operationele Ontzorging:</strong> Director of Time (hogere impact, hogere capaciteitseisen)<br><strong>Kernvraag: Welke belofte kunt u geloofwaardig waarmaken met de huidige middelen?</strong></p></div>
</div>
<h3>Ontzorgingsmatrix: Keuzetool per Attractietype</h3>
<table class="dt">
<thead><tr><th>Attractietype</th><th>Frictie: Weer</th><th>Frictie: Leeftijdsmix</th><th>Frictie: Prijs/waarde</th></tr></thead>
<tbody>
<tr><td><strong>Indoor (museum)</strong></td><td class="wi">B ★★★ Weertrigger als core USP</td><td class="hi">A ★★★ 10-jaar segmentatie</td><td>B ★★ Succesgarantie rechtvaardigt prijs</td></tr>
<tr><td><strong>Outdoor (dierentuin)</strong></td><td>A ★★ Communiceer indoor alternatieven</td><td class="hi">A ★★★ 10-jaar segmentatie</td><td>C ★★ Director of Time = meer waarde</td></tr>
<tr><td><strong>Gemengd indoor/outdoor</strong></td><td class="wi">B ★★★ Drooggarantie indoor deel</td><td class="wi">A+B ★★★ Combi meest effectief</td><td>A ★★ Relevantie per kind</td></tr>
<tr><td><strong>Educatief/cultureel</strong></td><td>B ★★ (indien indoor)</td><td class="wi">A ★★★ Cultureel kapitaal per segment</td><td class="wi">A ★★★ Waarde &gt; prijs via educatie</td></tr>
</tbody>
</table>
<p style="font-size:.72rem;color:var(--mu)">★★★ = Sterk aanbevolen | ★★ = Aanbevolen | ★ = Mogelijk maar niet optimaal</p>
</div>`,

'refl_case_spoor':()=>`<div class="cs ac">
<h2>Case 1: Het Spoorwegmuseum, Utrecht 🚂</h2>
<div class="cc"><div class="cch"><span style="font-size:1.5rem">🚂</span><div><h4>Het Spoorwegmuseum</h4><span>Gemengd indoor/outdoor — museumgebouwen + buitenspoor · Utrecht</span></div></div>
<div class="ccb">
<div class="cr"><div class="ck">Type attractie</div><div>Gemengd indoor/outdoor — museumgebouwen + buitenspoor</div></div>
<div class="cr"><div class="ck">Primaire doelgroep</div><div>Gezinnen met kinderen 4–16 jaar, schoolgroepen, trein-enthousiaste volwassenen</div></div>
<div class="cr"><div class="ck">USP</div><div>Rijdend erfgoed, spectaculaire ruimtes (bijv. de Loods), historische treinen als beleving</div></div>
<div class="cr"><div class="ck">Kernfrictie beslisser</div><div>'Is dit wel leuk voor mijn 12-jarige? Vind ik dit zelf ook interessant?'</div></div>
<div class="cr"><div class="ck">Strategische uitdaging</div><div>Brug slaan tussen de jonge ontdekker (&lt;10j) en de technisch-kritische tiener (≥10j) — zonder de volwassen bezoeker te verliezen</div></div>
<div class="cr"><div class="ck">Aanbevolen richting</div><div><strong>Richting A + B</strong> — Cognitieve Ontzorging via 10-jaar grens + Logistieke Ontzorging via regen-garantie</div></div>
</div></div>
<div class="cg">
${card('Communicatielijn De Ontdekker (4–9j)','Actie, knopjes, stoomwolken','Focus op actie, knopjes, kleur, stoomwolken en rijdende treinen. Moeder ziet: mijn kind kan hier urenlang zijn gang gaan.','#2bbfaa')}
${card('Communicatielijn De Ingenieur (10–16j)','Technisch meesterschap','Focus op technisch meesterschap, de werking van locomotieven, historische context en de werkplaats-beleving als Atelier-Museum equivalent. Moeder ziet: mijn tiener leert hier iets.','#1a2744')}
</div>
<h3>Richting B: Regen-garantie via de Loods</h3>
<p>Het Spoorwegmuseum heeft een sterk troefkaart: de indrukwekkende overdekte Loods en de rijke binnen-expositie. Bij regenkans &gt;70% in regio Utrecht/Randstad: <em>"Buiten regent het. Bij ons rijden de treinen gewoon."</em></p>
<div class="sr">
${stat('€3.000','Geschat pilot-budget','#3d7a10')}
${stat('~€18,50','Ticketprijs p.p.','#1a2744')}
${stat('162','Break-even bezoekers','#F47C20')}
</div>
</div>`,

'refl_case_villa':()=>`<div class="cs ac">
<h2>Case 2: Villa Zebra, Rotterdam 🎨</h2>
<div class="cc"><div class="cch"><span style="font-size:1.5rem">🎨</span><div><h4>Villa Zebra</h4><span>Indoor — kindermuseum voor kunst en cultuur · Rotterdam</span></div></div>
<div class="ccb">
<div class="cr"><div class="ck">Type attractie</div><div>Indoor — kindermuseum voor kunst en cultuur</div></div>
<div class="cr"><div class="ck">Primaire doelgroep</div><div>Kinderen 2–12 jaar en hun begeleiders; lokale gezinnen Rotterdam</div></div>
<div class="cr"><div class="ck">USP</div><div>Creatieve, hands-on kunstbeleving voor jonge kinderen in een veilige omgeving</div></div>
<div class="cr"><div class="ck">Kernfrictie beslisser</div><div>'Mijn kind is 8 — is dit niet te kinderachtig? Of juist te abstract?'</div></div>
<div class="cr"><div class="ck">Lokale context</div><div>Rotterdam: 5,3% werkloosheid (hoogste G4) + 56,5% migratieachtergrond → verhoogde prijsgevoeligheid + diverse culturele achtergrond</div></div>
<div class="cr"><div class="ck">Aanbevolen richting</div><div><strong>Richting A (primair) + B (secondair)</strong></div></div>
</div></div>
<h3>Richting A: 'Mijn kind maakt echt iets'</h3>
<div class="cg">
${card('Segment 2–6 jaar','Grote, natte verf. Echte tools.','Communicatie: "Vandaag is jouw kind de kunstenaar. Grote, natte verf. Echte tools. Jij kijkt toe." Moeder ontspant omdat het kind volledig geabsorbeerd is.','#2bbfaa')}
${card('Segment 7–12 jaar','Echte opdrachten van echte kunstenaars','Communicatie: "Echte opdrachten van echte kunstenaars. Niet naboetsen — zelf bedenken." Moeder geactiveerd via belofte van creatieve autonomie en cultureel kapitaal (Bourdieu, 1984).','#F47C20')}
</div>
<h3>Richting B: Rotterdamse Regen-garantie</h3>
<p>Activeer de indoor-status specifiek voor de Rotterdamse context. Campagne bij regenkans &gt;70% in regio Rotterdam: <em>"Buiten is grijs. Hier maken we kleur."</em></p>
<h3>Extra: Herhaalbezoek via 'Kunstenaar van de Maand'</h3>
<p>Wisselend thema per maand gekoppeld aan een echte Rotterdamse kunstenaar. Via simpele nieuwsbrief te volgen. Kosten: minimaal. Effect: elke maand een nieuwe reden om terug te gaan — onderbouwd met Cultural Capital (Bourdieu, 1984) als waardepropositie voor de bewuste opvoeder.</p>
</div>`,

'refl_case_duin':()=>`<div class="cs ac">
<h2>Case 3: Duinrell, Wassenaar 🎢</h2>
<div class="cc"><div class="cch"><span style="font-size:1.5rem">🎢</span><div><h4>Duinrell</h4><span>Outdoor pretpark + camping + (indoor) waterpark Tikibad · Wassenaar</span></div></div>
<div class="ccb">
<div class="cr"><div class="ck">Type attractie</div><div>Outdoor pretpark + camping + volledig overdekt waterpark Tikibad</div></div>
<div class="cr"><div class="ck">Primaire doelgroep</div><div>Gezinnen met kinderen 3–14 jaar; meerdaags verblijf + dagbezoek</div></div>
<div class="cr"><div class="ck">USP</div><div>Combinatie outdoor attracties + volledig overdekt Tikibad — een van de weinige parken met geïntegreerde outdoor/indoor beleving</div></div>
<div class="cr"><div class="ck">Kernfrictie beslisser</div><div>'Wat doen we als het regent?' — bij een dagtje óf bij een duur weekendvakantie</div></div>
<div class="cr"><div class="ck">Strategische uitdaging</div><div>Weersrisico is de nr. 1 drempel voor aankoop van een meerdaags arrangement (€200–600). Beslisdrempel is hier aanzienlijk hoger dan bij een dagattractie.</div></div>
<div class="cr"><div class="ck">Aanbevolen richting</div><div><strong>Richting B (primair) + C (secondair)</strong></div></div>
</div></div>
<h3>Richting B: 'Tikibad = Je Regenverzekering'</h3>
<p>Duinrell heeft een onderbenut troefkaart: het volledig overdekte Tikibad. Herpositioneer dit niet als optionele extra, maar als de <strong>kernbelofte van het arrangement</strong>.</p>
<p>Campagne bij regenkans &gt;60% in de Randstad, gericht op last-minute boekers: <em>"Dit weekend regen? Precies de reden om naar Duinrell te komen."</em></p>
<div class="sr">
${stat('€5.000','Geschat pilot-budget','#3d7a10')}
${stat('~€35','Ticketprijs p.p.','#1a2744')}
${stat('~140','Break-even bezoekers','#F47C20')}
</div>
<h3>Richting C: 'Het Zorgeloze Weekend'</h3>
<p>Duinrell heeft de schaal en het personeel om de Director of Time-rol geloofwaardig in te vullen:</p>
<table class="dt">
<thead><tr><th>Element</th><th>Invulling</th></tr></thead>
<tbody>
<tr><td>Compleet pakket</td><td>Accommodatie + maaltijden + activiteitenplanning per leeftijdsgroep (10-jaar grens) + weergarantie via Tikibad</td></tr>
<tr><td>Digitale ontzorging</td><td>Simpele app of PDF-planner: "Hoe oud zijn je kinderen?" → volledig dagprogramma gegenereerd</td></tr>
<tr><td>Communicatieboodschap</td><td>"Jij hoeft niets te plannen. Wij regelen het weekend. Jij geniet." — maximale vibing voor de leisure manager</td></tr>
</tbody>
</table>
</div>`,

'refl_conclusie':()=>`<div class="cs ac">
<h2>Slotconclusie 🎓</h2>
<p class="lead">Het Leisure Manager Framework bewijst dat de inzichten uit de Miniworld Rotterdam-casus geen toevalstreffer zijn, maar een symptoom van een <strong>fundamenteel patroon</strong> in de vrijetijdssector.</p>
<h3>Universele Toepasbaarheid Bewezen</h3>
<table class="dt">
<thead><tr><th>Attractie</th><th>Primaire beslisser</th><th>Kritieke frictie</th><th>Aanbevolen richting</th><th>Quick win</th></tr></thead>
<tbody>
<tr class="fw"><td><strong>Miniworld Rotterdam</strong></td><td>Vrouwelijke partner (55%)</td><td>Weer + defecten</td><td>B: Weertrigger + Product-vóór-Promotie</td><td>Regen-banner via Infoplaza</td></tr>
<tr><td>Spoorwegmuseum</td><td>Vrouwelijke partner + vader-duo</td><td>Leeftijdsmix</td><td>A + B</td><td>Segmenteer uitingen op 10-jaar grens</td></tr>
<tr><td>Villa Zebra</td><td>Lokale moeder Rotterdam</td><td>Relevantie + herhaalbezoek</td><td>A (primair)</td><td>Herfram: 'kind maakt iets' i.p.v. 'kind kijkt'</td></tr>
<tr><td>Duinrell</td><td>Vrouwelijke partner (hoge inzet)</td><td>Weer + complexiteit</td><td>B + C</td><td>Tikibad als regenverzekering in alle uitingen</td></tr>
</tbody>
</table>
<h3>De Vijf Overdraagbare Kernlessen</h3>
<div class="tl">
<div class="ti"><div class="tm" style="color:#3d7a10">Les 1</div><h4>Identificeer de werkelijke beslisser — niet de eindgebruiker</h4><p>Via desk research (N=50 reviews) en 5–8 diepte-interviews. Kernvraag: Wie pakt de telefoon op als er een dagje uit gepland moet worden?</p></div>
<div class="ti"><div class="tm" style="color:#2bbfaa">Les 2</div><h4>Segmenteer op de 10-jaar grens — direct toepasbaar</h4><p>Op bestaande kanalen, nul extra budget vereist. Zintuiglijke prikkels voor &lt;10j, technische diepgang voor ≥10j.</p></div>
<div class="ti"><div class="tm" style="color:#4a7adc">Les 3</div><h4>Communiceer indoor-status actief als USP bij slecht weer</h4><p>Elke indoor-attractie laat op dit moment commerciële kansen liggen. Weather targeting via Infoplaza is betaalbaar en zelfregulerend.</p></div>
<div class="ti"><div class="tm" style="color:#F47C20">Les 4</div><h4>Werk vanuit Product-vóór-Promotie</h4><p>Maak eerst de belofte waar op de vloer, voordat je investeert in het uitdragen ervan. Anders: negatieve waardekloof.</p></div>
<div class="ti"><div class="tm" style="color:#e8407a">Les 5</div><h4>Ontwerp voor overdraagbaarheid</h4><p>Een borgingsplan in drie lagen (automatisering + protocol + checklist) garandeert dat het systeem werkt ook na vertrek van de consultant.</p></div>
</div>
${h('Slotwoord','Elke attractie die de vrouwelijke leisure manager centraal stelt in haar commerciële strategie — door haar fricties weg te nemen op het moment dat zij haar vrijetijdspuzzel oplegt — vergroot haar kans op een duurzame commerciële positie in een markt die wordt gekenmerkt door constante globale crisis (Leask et al., 2024).')}
<div class="rf pe"><div class="rl">Persoonlijk Slotwoord — Niels Borst, 1060904</div>
<p>Hoewel Miniworld de deuren heeft moeten sluiten, ligt er nu een plan klaar dat bewijst hoe je als attractie commercieel op eigen benen kunt staan. Dit portfolio laat zien hoe je met slimme keuzes en data een bedrijf kunt helpen, zelfs als er weinig geld is. Ik verlaat mijn studie met veel meer zelfvertrouwen en kennis over hoe de zakenwereld echt werkt. Nu kan ik vol vertrouwen aan mijn premaster Marketing Management aan de Tilburg University.</p></div>
</div>`,

};


