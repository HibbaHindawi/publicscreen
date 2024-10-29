let places = [
    {
        name: "Växjö Stadsbibliotek",
        description: "Bibliotek",
        lat: 56.88046415573098,
        lng: 14.800558090209963,
        price_range: "0",
        address: "Västra Esplanaden 7",
        id: "1",
        website: "https://bibliotek.vaxjo.se/#/",
        phone_number: "0470-414 44",
        abstract: "Växjö Stadsbibliotek är en modern kulturinstitution belägen i centrala Växjö. Biblioteket erbjuder en bred samling av böcker, tidskrifter, och digitala resurser, och fungerar som en mötesplats för kunskap, läsande och kulturella aktiviteter. Med sina ljusa och inbjudande lokaler är biblioteket en central del av stadens kulturutbud och ett nav för såväl studenter som allmänheten.",
        senior_discount: "N",
        child_discount: "N",
        student_discount: "N",
        rating: "4.4",
        reviews: [
            {
                rating: "3",
                username: "Pär Wiberg",
                comment: "Bra wifi, dåliga toaletter. Om de inte var trasiga gick de inte att öppna. Man va tvungen gå en trappa upp för att växla till sig en polett. Och så ner igen, funkar inte, upp igen. Ny polett, och så ner igen. Upp o ner, upp och ner 😫"
            },
            {
                rating: "5",
                username: "Katrine Kolström",
                comment: "Mycket trevligt bibliotek med bra utbud av böcker, media och sittplaster för remote work och studier. Personalen är hjälpsam och glad. Här kan man sitta och arbeta i lugn och ro. Lite svagt wifi men det får man räkna med när man surfar på kommunal bandbredd."
            },
            {
                rating: "5",
                username: "Per-Olof Nygren",
                comment: "Var där med barnbarnen, bra upplevelse. Något för alla åldrar. Skulle kunna spendera mycket tid där."
            },
            {
                rating: "5",
                username: "Michael Holgersson",
                comment: "Väldigt bra och mycket fint bibliotek. Både för barn och vuxna . Har allt inom böcker och det finns även en restaurang . Tyckte mycket om att vara där ."
            }
        ]
    },
    {
        name: "Galleri Sigma",
        description: "Konsthall",
        lat: 56.878024417014686,
        lng: 14.81025964021683,
        price_range: "100-2000",
        address: "Kronobergsgatan 8",
        id: "2",
        website: "https://gallerisigma.konstforeningar.se/",
        phone_number: "0470-269 57",
        abstract: "Galleri Sigma är ett konstgalleri i Växjö som har fokuserat på samtida konst sedan det grundades 1972. Galleriet visar verk av såväl etablerade som nya konstnärer och fungerar som en viktig plattform för konstnärlig utveckling i regionen. Med sina regelbundna utställningar och sitt engagemang för lokal och internationell konst spelar Galleri Sigma en central roll i Växjös konstliv.",
        senior_discount: "N",
        child_discount: "N",
        student_discount: "N",
        rating: "4.3",
        reviews: [
            {
                rating: "5",
                username: "Helene Hörberg",
                comment: "Mycket trevligt galleri. Litet, gemytligt och mycket personligt. Kan verkligen rekommenderas!"
            },
            {
                rating: "4",
                username: "Angelica Rundgren",
                comment: "Alltid kul med konst"
            },
            {
                rating: "3",
                username: "Dick Andersson",
                comment: "Ok billig klippning"
            },
            {
                rating: "4",
                username: "Kenneth Aa",
                comment: "Trevligt galleri"
            }
        ]
    },
    {
        name: "Växjö Konserthus",
        description: "Konserthus",
        lat: 56.88039958605682,
        lng: 14.802993535995485,
        price_range: "300-800",
        address: "Västra Esplanaden 10-14",
        id: "3",
        website: "https://www.vaxjokonserthus.se/",
        phone_number: "0470-70 22 00",
        abstract: "Växjö Konserthus är en viktig kulturell mötesplats i Växjö, känd för sina akustiskt framstående lokaler och ett brett programutbud som inkluderar konserter, teaterföreställningar och andra evenemang. Konserthuset är hem för bland annat Musica Vitae, en kammarorkester med internationellt rykte. Med sin centrala placering och sitt rika kulturutbud lockar Växjö Konserthus både lokala och internationella artister och besökare.",
        senior_discount: "N",
        child_discount: "N",
        student_discount: "N",
        rating: "4.2",
        reviews: [
            {
                rating: "5",
                username: "smalanningen",
                comment: "Besökte Kristina Nilsson-salen vid Bo Kaspers konsert. Lokalen och arrangörerna får högsta betyg då logistik, ljud, ljus, garderob och servering sköts perfekt och serviceandan från personalen är stor"
            },
            {
                rating: "4",
                username: "Göran Tidstrand",
                comment: "Jag kollade inne i Konserthuset. Mycket vackert innehåll. Trevligt med Landshypotek och Tina Törner. God mat åt vi på buffén. Värt ett besök."
            },
            {
                rating: "4",
                username: "Jens Göransson",
                comment: "Greatest 80s. Medryckande, kul och fantastisk musik och framförd av dessa otroliga artister. Hade gärna lyssnat flera timmar till. Synd att insläppet gick lite långsamt, därav en stjärna mindre."
            },
            {
                rating: "4",
                username: "Liz Leijon",
                comment: "Bra stolar men väldigt trångt när man är lång så det blir lite obekvämt. Men bra lokal annars, man ser scenen väldigt bra. Litet café men inga sittplatser där, bara några få ståbord. Trevlig personal och fräscht överallt."
            }
        ]
    },
    {
        name: "Växjö Teater",
        description: "Teater",
        lat: 56.879856885021134,
        lng: 14.803465604782106,
        price_range: "50-350",
        address: "Västergatan 11",
        id: "4",
        website: "https://www.vaxjo.se/sidor/se-och-gora/lokaler-och-scener/vaxjo-teater.html",
        phone_number: "0470-410 00",
        abstract: "Växjö Teater är en historisk byggnad och en viktig scen för teater- och kulturföreställningar i Växjö. Byggnaden, som invigdes 1849, är en av Sveriges äldsta landsortsteatrar och bevarar sin charm med en klassisk interiör och arkitektur. Teatern erbjuder en varierad repertoar av föreställningar, från lokala produktioner till turnerande nationella ensembler, och utgör en central del av Växjös teaterliv.",
        rating: "4.4",
        senior_discount: "N",
        child_discount: "N",
        student_discount: "N",
        reviews: [
            {
                rating: "5",
                username: 'Lisbeth "Ellbett"',
                comment: "Jättefin teater! Sköna stolar! Trevlig personal!"
            },
            {
                rating: "2",
                username: "Johan Anderson Nilsson",
                comment: "Otroligt små stolar och inte bekväma. O då är jag ändå en vuxen i normal storlek. Efter en timme såg jag stjärnor flimmra framför mina ögonen, och de va inte pga av legendarerna på scen ( shout out till historiepodden), utan för den totala syrebristen som va i lokalen. Va med nöd och näppe som jag och mina kamrater lyckades ta oss ut efter föreställningen, och kunde åter känna denna livskraft många kallar luft. Plus till dom som jobba där. Dom va hjälpsamma och trevliga"
            },
            {
                rating: "1",
                username: "Ronnie Larsson",
                comment: "Orsaken till det låga betyget är att en människa som är längre än 160 cm. inte kan sitta bekvämt, på något vis. När denna gamla teater byggdes, var nog människor inte lika långa/stora som idag. Undvik platserna som man behöver gå upp en eller två trappor. Föreställningen med Anders & Måns var däremot förträfflig. :)"
            },
            {
                rating: "5",
                username: "Rhynos89",
                comment: "Stefan Sundström med sina kompanjoner. Otroligt duktig. Lokalen är trevlig. Satt på nedre plan nära scen. Rekommenderar denna teater."
            }
        ]
    }
]
let updatedInfo = [
    {
        name: "Sveriges Glasmuseum",
        id: "454",
        abstract: 'Sveriges Glasmuseum är ett nationellt museum som speglar den rika traditionen av svenskt glas och glasproduktion. Museet erbjuder en omfattande samling av glasföremål, från historiska verk till samtida glasdesign, och belyser Sveriges långa och stolta glasarv, särskilt kopplat till det kända "Glasriket". Genom utställningar och interaktiva visningar ger museet besökarna en inblick i hantverket, tekniken och konsten bakom glas, samtidigt som det lyfter fram det internationella inflytandet och innovationer inom glaskonst. Sveriges Glasmuseum är en viktig kulturell institution för både konstälskare och historieintresserade.',
        rating: "4.2",
        reviews: [
            {
                rating: "4",
                username: "Jarl Ladó",
                comment: "Ett väldigt fint och inspirerande museum om man är förtjust i glaskonst. Det finns även en stor myntutställning. Det finns också en del målningar och tavlor. En biljett kostar 150 kronor och gäller för alla tre museum. En bra shop finns också."
            },
            {
                rating: "5",
                username: "Uwuwewewe Kwazawazawa",
                comment: "Jag tillbringade min helg här inne och fick fantastisk bra hjälp av en rödhårig kille. Nog det ända stället som inte får mig att vilja flytta från växjö."
            },
            {
                rating: "4",
                username: "Adam Rooth",
                comment: "Väldigt trevligt museum med småländsk historia, både gällande leksaker, glas och mynt. Intressanta utställningar och trevlig personal. Saknar möjligtvis ett fik för en ultimat upplevelse."
            },
            {
                rating: "4",
                username: "Erik Sedell",
                comment: "Fins museum med inriktning på skog och glas. Mycket fina konstglas och intressant att läsa om glasets och hyttornas historia. Det finns även en butik och en restaurang som tyvärr var stängd när vi var där. Istället hänvisas till utvandrarnashus som hade sitt caffe öppet. Rekommenderar även ett besök på det museumet om man är här. Samma entrébiljett gäller på båda ställen. Barn och ungdomar upp till 19 år går in gratis."
            }
        ]
    },
    {
        name: "Utvandrarnas Hus",
        id: "468",
        abstract: 'Utvandrarnas Hus är ett museum och kulturcentrum som skildrar den stora svenska utvandringen till Amerika under 1800- och tidigt 1900-tal. Museet lyfter fram de personliga berättelserna och de historiska omständigheterna som ledde till att över en miljon svenskar lämnade sitt hemland för att söka ett nytt liv i Nordamerika. Genom utställningar, dokument och konstverk, inklusive verk av Vilhelm Moberg, författaren till Utvandrarserien, erbjuder Utvandrarnas Hus en djup förståelse för denna viktiga period i svensk historia. Det är en central plats för alla som vill fördjupa sig i den svenska migrationens historia och dess påverkan på både Sverige och USA.',
        rating: "4.1",
        reviews: [
            {
                rating: "5",
                username: "Lotta Palmblad",
                comment: "Det var mycket intressant att se och läsa hur de hade det innan de åkte och resan över Atlanten och hur det var för dem när de kom fram"
            },
            {
                rating: "2",
                username: "Stefan Lindgren",
                comment: "Ganska dåligt med information. Hur man tog sig till Amerika är ju rätt uppenbart, med fartyg. Hade hoppats på att få veta mycket mer om deras ankomst och hur livet blev. Inte värt 150:-"
            },
            {
                rating: "5",
                username: "Helene Hörberg",
                comment: "Här finns mycket att se fundera och lära om våra släktingar som utvandrat från Sverige och våra nyanlända som nu berikar Sverige på olika sätt"
            },
            {
                rating: "4",
                username: "Anders Gunnarsson",
                comment: 'Mycket intressant "museum" om emigrationen från Europa och i synnerhet Sverige till USA. Fina foton och intressanta berättelser. Väldigt omfattande och bitvis lite för kompakt med för mycket bilder och texter på samma ställe. Saklig, relevant och detaljerad information om ett stycke viktig svensk historia. Rimlig kostnad för entré, studentrabatt finns.'
            }
        ]
    },
    {
        name: "Växjö konsthall",
        id: "516",
        abstract: "Växjö Konsthall är en konsthall som visar ett brett spektrum av modern konst med fokus på aktuella teman och uttrycksformer. Genom sina regelbundna utställningar lyfter konsthallen fram både svenska och internationella konstnärer, och fungerar som en viktig mötesplats för konstintresserade. Med en stark koppling till lokal konstproduktion och en ambition att skapa dialog kring samtida frågor, erbjuder Växjö Konsthall en dynamisk plattform för konstnärligt utforskande och publikengagemang. Konsthallen arrangerar även workshops, föreläsningar och andra aktiviteter som gör den till en levande del av Växjös kulturliv.",
        rating: "3.7",
        reviews: [
            {
                rating: "5",
                username: "Emil Gustavsson",
                comment: "Här visas alltid viktiga och bra utställningar i flera olika tappningar. Samtidigt ett viktigt nav i Växjös samtidskonst med bland annat spännande danser, performances och föreläsningar. Fantastisk lokal mitt i centrum av staden, och mittemot biblioteket."
            },
            {
                rating: "2",
                username: "Birgitta Persson",
                comment: "Mycket märklig konst idag videokonst!???"
            }
        ]
    },
    {
        name: "",
        id: "",
        abstract: "",
        rating: "",
        reviews: [
            {
                rating: "",
                username: "",
                comment: ""
            },
            {
                rating: "",
                username: "",
                comment: ""
            },
            {
                rating: "",
                username: "",
                comment: ""
            },
            {
                rating: "",
                username: "",
                comment: ""
            }
        ]
    },
    {
        name: "Växjö Domkyrka",
        id: "618",
        abstract: "Växjö Domkyrka är en imponerande medeltida kyrkobyggnad och ett landmärke i Växjö. Den uppfördes under tidig medeltid och fungerar idag som stiftskyrka för Växjö stift och som församlingskyrka för Växjö stads- och domkyrkoförsamling. Domkyrkan är känd för sin unika arkitektur med två höga torn och sitt moderna, färgstarka glaskonstverk som pryder interiören. Den spelar en central roll i Växjös religiösa och kulturella liv och erbjuder en plats för både gudstjänster, konserter och stilla eftertanke.",
        rating: "4.5",
        reviews: [
            {
                rating: "5",
                username: "Curt Fransson",
                comment: "Väldigt fin kyrka. Bra historiebeskrivning om den. Jättefin park i anslutning till kyrkan."
            },
            {
                rating: "4",
                username: "Anna Gester",
                comment: "En domkyrka som är lite mindre än andra i Sverige. Ljust kyrkorum med ett flertal utsmyckningar i glas. Altarskåpet är skapat av konstnären Bertil Vallien. Ljusbäraren är väldigt fin, ett träd av smide och blad av glas. Väl värd ett besök!"
            },
            {
                rating: "5",
                username: "Jimmi Weiland",
                comment: "Väldigt fin kyrka."
            },
            {
                rating: "5",
                username: "Jonas Bergwall",
                comment: "En fin kyrka att titta på både i och utanför. Tog med mig dotter och hon upplevde det som fantastiskt. Mycket frågor hela tiden."
            }
        ]
    },
    {
        name: "Filmstaden Växjö",
        id: "851",
        abstract: "Filmstaden Växjö är stadens största biograf, belägen centralt och populär bland både filmälskare och barnfamiljer. Biografen erbjuder en bred repertoar av filmer, från de senaste internationella storfilmerna till svenska premiärer och barnfilmer. Med sina moderna salonger och bekväma sittplatser ger Filmstaden Växjö besökarna en högkvalitativ filmupplevelse. Biografen är en viktig del av stadens nöjesutbud och en självklar mötesplats för filmintresserade i alla åldrar.",
        rating: "4.2",
        reviews: [
            {
                rating: "4",
                username: "Andréa Lindell",
                comment: "Älskar hela upplägget i lobbyn och biljettautomaterna förenklar och kortar ner köerna i kassorna. Alltid trevlig och hjälpsam personal. Stort utbud av snacks och dryck. De stora salongerna är fina. Hade önskat ett par rader med större finare stolar som de har på en del ställen, tex i Kalmar på Baronen."
            },
            {
                rating: "1",
                username: "Cecilia Claesson",
                comment: "Bokningen hängde upp sig precis när jag höll på att betala platsbiljetterna. Just dessa platser blev sedan blockerade och när jag väl kunde boka igen så fanns bara platser kvar längst fram i salongen. För sent att planera om när hela familjen var inställda på bio. Väldigt irriterande och minus för hemsidan. Kan tycka att man borde komma tillbaks till betalning och göra om processen istället för att de ska blockeras och sen släppas till nån annan."
            },
            {
                rating: "1",
                username: "Ayan",
                comment: "Bion själv är bra och jag har haft en bra upplevelse för det mesta däremot har dem flesta anställda en attityd och vet inte hur man pratar med en kund. Dem bryr sig inte alls om vad du säger och det känns som att du pratar med en vägg."
            },
            {
                rating: "5",
                username: "Berit Ruland",
                comment: "Riktigt trevlig bioupplevelse tack vare erbjudande om specialrabatt för pensionärer dagtid. Kaffet uppskattades och filmvalet var gripande. Ska man önska något vore det lite bättre benutrymme."
            }
        ]
    },
    {
        name: "Palladium",
        id: "852",
        abstract: "Palladium är en historisk biograf och kulturarena i Växjö som har funnits sedan 1925. Med sin charmiga 1920-talsarkitektur är Palladium en nostalgisk mötesplats för filmvisningar, konserter och teaterföreställningar. Byggnaden, som har bevarats genom åren, är en av Växjös mest ikoniska kulturella platser. Förutom filmvisningar används Palladium idag även för olika evenemang och kulturella arrangemang, och fortsätter att vara en viktig del av Växjös rika kulturliv.",
        rating: "4.5",
        reviews: [
            {
                rating: "5",
                username: "Göran Svensson",
                comment: "En mysig biograf med en själ för bra film med kvalite."
            },
            {
                rating: "5",
                username: "Samuel Backgård",
                comment: "Mycket trevlig bio! Bra att ni visar filmer från hela världen och inte bara Amerikanska blockbusters som vissa andra biografer."
            },
            {
                rating: "4",
                username: "Björn Möller",
                comment: "Trivsam lokal med biosalong och möjlighet att fika och även från ht 2019 att äta. En nackdel dock är att Palladium saknar toalett för funktionshindrade, likaså finns där trappor utan hiss."
            },
            {
                rating: "4",
                username: "Lars-Åke Långh",
                comment: "Mycket trevlig underhållning i bekväm och bra lokal, med bra service"
            }
        ]
    }
]