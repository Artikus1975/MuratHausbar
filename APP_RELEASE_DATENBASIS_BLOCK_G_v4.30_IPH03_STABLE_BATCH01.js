// GENERATED READ-ONLY DATA PREVIEW. DO NOT EDIT MANUALLY.
const HB_GENERATED_DATA = {
  "meta": {
    "dataVersion": "generated-release-preview-block-g-v430-iph03-batch01",
    "generatorVersion": "block-g-v430-iph03-preview-batch01",
    "authorityPolicy": "READ_ONLY_SOURCES_NO_BACKWRITE",
    "sourceLocks": {
      "recipe_master": {
        "filename": "REZEPT_MASTER_PRIVAT_v4.30.xlsx",
        "sha256": "fa41f5bbe51f6ade2df9cc98a20e85d373547ac14309f2d75b0f126ed2e02858",
        "bytes": 135981
      },
      "inventory_master": {
        "filename": "v7.66_Inventarmaster.xlsx",
        "sha256": "2c68e80ab0f077f26184103c6650eeeca30198245d12bad64c110504eb03c3b9",
        "bytes": 104697
      },
      "glass_master": {
        "filename": "BAR_EQUIPMENT_GLASMASTER_PRIVAT_v0.01.xlsx",
        "sha256": "8df11878451bee484f77f9209c30587fe1acda7ed68d09822de6d2f8b6ab8d8b",
        "bytes": 7342
      },
      "tool_master": {
        "filename": "BAR_EQUIPMENT_WERKZEUGMASTER_PRIVAT_v0.02.xlsx",
        "sha256": "58c917d29e5c6258e5eb8438091f2fa76581f8defcc98457dfbee369a65b567a",
        "bytes": 8565
      },
      "app_baseline": {
        "filename": "HausbarNext-main 2.zip",
        "sha256": "1d0a875c7f61256a561079b33adeb388ad29625147c9a271cbda096d85dfb0d8",
        "bytes": 70142
      }
    },
    "counts": {
      "inventory": 142,
      "recipes": 70,
      "ingredients": 229,
      "requiredIngredients": 225,
      "optionalIngredients": 4,
      "exactMappings": 165,
      "nonInventoryAllowed": 64,
      "glassReferences": 103,
      "toolReferences": 197
    },
    "releaseGate": {
      "approvedRecipes": 70,
      "blockedRecipes": 0
    }
  },
  "taxonomies": {
    "recipeFilters": {
      "GESCHMACK": [
        {
          "code": "BITTER",
          "display": "Bitter",
          "description": "Deutlich bittere oder bitterherbe Prägung",
          "sort": 10,
          "visibleDefault": true
        },
        {
          "code": "FLORAL",
          "display": "Floral",
          "description": "Florale, blumige oder duftige Aromatik",
          "sort": 20,
          "visibleDefault": true
        },
        {
          "code": "FRUCHTIG",
          "display": "Fruchtig",
          "description": "Fruchtaromen jenseits reiner Zitrusprägung",
          "sort": 30,
          "visibleDefault": true
        },
        {
          "code": "KAFFEE",
          "display": "Kaffee",
          "description": "Kaffee-, Espresso- oder röstbetonte Aromatik",
          "sort": 40,
          "visibleDefault": true
        },
        {
          "code": "KRAEUTERIG",
          "display": "Kräuterig",
          "description": "Kräuterige oder botanische Aromatik",
          "sort": 50,
          "visibleDefault": true
        },
        {
          "code": "NUSSIG",
          "display": "Nussig",
          "description": "Nussige Aromatik, etwa Mandel, Haselnuss oder Walnuss",
          "sort": 60,
          "visibleDefault": true
        },
        {
          "code": "RAUCHIG",
          "display": "Rauchig",
          "description": "Rauchige oder torfige Prägung",
          "sort": 70,
          "visibleDefault": true
        },
        {
          "code": "SUESS",
          "display": "Süß",
          "description": "Deutlich süße Prägung unabhängig von cremiger Textur",
          "sort": 80,
          "visibleDefault": true
        },
        {
          "code": "TROCKEN",
          "display": "Trocken",
          "description": "Trockene, wenig süß wirkende Prägung",
          "sort": 90,
          "visibleDefault": true
        },
        {
          "code": "ZITRISCH",
          "display": "Zitrisch",
          "description": "Zitrusgeprägte Aromatik wie Zitrone, Limette oder Orange",
          "sort": 100,
          "visibleDefault": true
        }
      ],
      "STAERKE": [
        {
          "code": "LEICHT",
          "display": "Leicht",
          "description": "Sichtbare Stärke-Kategorie; wird im Rezeptmaster fachlich direkt gepflegt und nicht automatisch aus ABV oder Serviervolumen berechnet.",
          "sort": 10,
          "visibleDefault": true
        },
        {
          "code": "MITTEL",
          "display": "Mittel",
          "description": "Sichtbare Stärke-Kategorie; wird im Rezeptmaster fachlich direkt gepflegt und nicht automatisch aus ABV oder Serviervolumen berechnet.",
          "sort": 20,
          "visibleDefault": true
        },
        {
          "code": "KRAEFTIG",
          "display": "Kräftig",
          "description": "Sichtbare Stärke-Kategorie; wird im Rezeptmaster fachlich direkt gepflegt und nicht automatisch aus ABV oder Serviervolumen berechnet.",
          "sort": 30,
          "visibleDefault": true
        }
      ],
      "BASIS": [
        {
          "code": "GIN",
          "display": "Gin",
          "description": "Gin als dominante Basis",
          "sort": 10,
          "visibleDefault": true
        },
        {
          "code": "RUM_CANE",
          "display": "Rum & Cane",
          "description": "Rum, Cachaça oder verwandte Zuckerrohrbasis",
          "sort": 20,
          "visibleDefault": true
        },
        {
          "code": "WHISKY",
          "display": "Whisky",
          "description": "Whisky/Whiskey als dominante Basis",
          "sort": 30,
          "visibleDefault": true
        },
        {
          "code": "VODKA",
          "display": "Vodka",
          "description": "Vodka als dominante Basis",
          "sort": 40,
          "visibleDefault": true
        },
        {
          "code": "AGAVE",
          "display": "Agave",
          "description": "Tequila/Mezcal/Agave als dominante Basis",
          "sort": 50,
          "visibleDefault": true
        },
        {
          "code": "BRANDY_WEINBRAND",
          "display": "Brandy & Weinbrand",
          "description": "Cognac, Brandy, Pisco oder verwandte Weinbrandbasis",
          "sort": 60,
          "visibleDefault": false
        },
        {
          "code": "SCHAUMWEIN",
          "display": "Schaumwein",
          "description": "Champagner, Sekt, Prosecco oder anderer Schaumwein als dominante Rezeptbasis; bloße Topper-/Filler-Nutzung bei klarer anderer Hauptbasis fällt nicht hierunter.",
          "sort": 62,
          "visibleDefault": false
        },
        {
          "code": "PORT_SHERRY",
          "display": "Portwein & Sherry",
          "description": "Portwein oder Sherry als dominante Rezeptbasis; kleinere Modifier-Anteile in Cocktails mit klarer anderer Hauptbasis fallen nicht hierunter.",
          "sort": 64,
          "visibleDefault": false
        },
        {
          "code": "ANIS_RAKI_ABSINTHE",
          "display": "Rakı, Anis & Absinthe",
          "description": "Rakı, Absinthe oder verwandte anisgeprägte Spirituose als dominante Rezeptbasis; Rinse-/Modifier-Anteile bei klarer anderer Hauptbasis fallen nicht hierunter.",
          "sort": 66,
          "visibleDefault": false
        },
        {
          "code": "APERITIF_LIKOER",
          "display": "Aperitif & Likör",
          "description": "Aperitif, Amaro oder Likör als dominante Basis",
          "sort": 70,
          "visibleDefault": false
        },
        {
          "code": "ALKOHOLFREI",
          "display": "Alkoholfrei",
          "description": "Ohne alkoholische Basis",
          "sort": 80,
          "visibleDefault": true
        },
        {
          "code": "MEHRERE_BASEN",
          "display": "Mehrere Basen",
          "description": "Keine einzelne dominante Basisspirituose",
          "sort": 90,
          "visibleDefault": false
        }
      ],
      "DRINK_STIL": [
        {
          "code": "SOURS",
          "display": "Sour",
          "description": "Säure-Süße-Basis-Struktur",
          "sort": 10,
          "visibleDefault": true
        },
        {
          "code": "HIGHBALL_LONGDRINK",
          "display": "Longdrink & Highball",
          "description": "Längerer Drink, typischerweise mit Filler",
          "sort": 20,
          "visibleDefault": true
        },
        {
          "code": "SPRITZ_APERITIF",
          "display": "Spritz & Aperitif",
          "description": "Aperitifischer, häufig leichter/verlängerter Stil",
          "sort": 30,
          "visibleDefault": true
        },
        {
          "code": "SPIRIT_FORWARD",
          "display": "Spirit Forward",
          "description": "Kurzer, spirituosenbetonter Stil",
          "sort": 40,
          "visibleDefault": true
        },
        {
          "code": "TIKI_TROPICAL",
          "display": "Tiki & Tropical",
          "description": "Tropisch komplexer Stil",
          "sort": 50,
          "visibleDefault": false
        },
        {
          "code": "DESSERT_DRINKS",
          "display": "Dessertdrink",
          "description": "Süßer/cremiger Dessert- oder After-Dinner-Stil",
          "sort": 60,
          "visibleDefault": false
        },
        {
          "code": "CLASSIC_COCKTAILS",
          "display": "Klassischer Cocktail",
          "description": "Klassischer Stil außerhalb anderer klarer Hauptstile",
          "sort": 70,
          "visibleDefault": false
        }
      ],
      "ANLASS": [
        {
          "code": "APERITIF",
          "display": "Aperitif",
          "description": "Vor dem Essen / appetitanregend",
          "sort": 10,
          "visibleDefault": true
        },
        {
          "code": "ERFRISCHEND",
          "display": "Erfrischend",
          "description": "Leicht zugänglicher, erfrischender Wunsch",
          "sort": 20,
          "visibleDefault": true
        },
        {
          "code": "ENTSPANNT_GENIESSEN",
          "display": "Entspannt genießen",
          "description": "Ruhiger Genuss ohne Party-/Dessertfokus",
          "sort": 30,
          "visibleDefault": false
        },
        {
          "code": "PARTY",
          "display": "Party",
          "description": "Zugänglich, gesellig, unkompliziert",
          "sort": 40,
          "visibleDefault": true
        },
        {
          "code": "AFTER_DINNER",
          "display": "After Dinner",
          "description": "Digestif-/Dessert-/Abendabschluss",
          "sort": 50,
          "visibleDefault": true
        }
      ]
    }
  },
  "inventory": [
    {
      "id": "csv-001-aperol",
      "number": "1",
      "name": "Aperol",
      "producer": "Aperol",
      "category": "Aperitif / Bitter",
      "subcategory": "Aperitif",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien / Padua",
      "descriptionVisible": "Leuchtend orangefarbener italienischer Aperitif mit sanfter Bitterkeit, frischer Zitrusnote und feiner Kräuterwürze. Seine leichte, zugängliche Art macht ihn zur klassischen Basis für Spritz-Drinks und unbeschwerte Aperitif-Momente.",
      "flavorTags": [
        "Bitter",
        "Fruchtig",
        "Kräuterig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 11,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-143-amaro-averna-siciliano",
      "number": "2",
      "name": "Amaro Averna Siciliano",
      "producer": "Averna",
      "category": "Aperitif / Bitter",
      "subcategory": "Amaro",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien / Sizilien / Caltanissetta",
      "descriptionVisible": "Sizilianischer Amaro mit bittersüßer Kräuterwürze, Karamell und zitrischen Noten von Zitrone und Bitterorange. Pur oder auf Eis sowie in Black Manhattan, Amaro Highball und dunklen Whiskey-Twists treffen weiche Süße, Kräuterbitterkeit und klare Zitrusnoten aufeinander.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 29,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-003-campari",
      "number": "3",
      "name": "Campari",
      "producer": "Campari",
      "category": "Aperitif / Bitter",
      "subcategory": "Bitter Aperitif",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien / Mailand",
      "descriptionVisible": "Ikonischer roter Bitter-Aperitif aus Italien mit markanter Bitterkeit, Kräutern, Gewürzen und Orangennoten. Campari bringt Struktur, Farbe und Tiefe in Klassiker wie Negroni, Americano, Boulevardier und Campari Spritz.",
      "flavorTags": [
        "Bitter",
        "Fruchtig",
        "Kräuterig",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 25,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-004-chilla-das-original-aperitivo-bavarese",
      "number": "4",
      "name": "CHILLA Das Original Aperitivo Bavarese",
      "producer": "Lantenhammer",
      "category": "Aperitif / Bitter",
      "subcategory": "Aperitif",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Bayern / Schliersee",
      "descriptionVisible": "Grüner bayerischer Bitter-Aperitif von Lantenhammer mit Wacholder, Bergamotte, Kräutern und frischer Zitrusnote. Sein lebendiges, modernes Profil kommt im Chilla Spritz oder als Chilla Tonic auf Eis klar zur Geltung.",
      "flavorTags": [
        "Bitter",
        "Fruchtig",
        "Kräuterig",
        "Floral",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 20,
      "bottleSizeMl": 20,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-005-cynar",
      "number": "5",
      "name": "Cynar",
      "producer": "Cynar",
      "category": "Aperitif / Bitter",
      "subcategory": "Amaro / Bitter",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien",
      "descriptionVisible": "Italienischer Amaro auf Basis von Artischocke und weiteren Botanicals. Bittersüße Kräuter, eine leicht vegetale Tiefe und zurückhaltende Artischockennoten verleihen Spritzes, Amaro-Drinks und dunklen Cocktail-Twists einen eigenständigen Charakter.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Süß"
      ],
      "usageTags": [
        "Aperitif",
        "Digestif",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 16.5,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-006-ramazzotti",
      "number": "6",
      "name": "Ramazzotti",
      "producer": "Ramazzotti",
      "category": "Aperitif / Bitter",
      "subcategory": "Amaro",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien / Mailand",
      "descriptionVisible": "Klassischer italienischer Amaro mit 33 Kräutern, Gewürzen, Blüten und Früchten. Ramazzotti verbindet Orange, Kräuterwürze und bittersüße Tiefe zu einem zugänglichen Digestif und vielseitigen Amaro-Modifier.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 30,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-007-ziegler-avionic-lufthansa-aperitif",
      "number": "7",
      "name": "Ziegler AVIONIC Lufthansa Aperitif",
      "producer": "Brennerei Ziegler",
      "category": "Aperitif / Bitter",
      "subcategory": "Aperitif",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland / Freudenberg",
      "descriptionVisible": "Moderner deutscher Aperitif von Ziegler mit Pfirsich, frischer Zitrusnote, floralen Wildwiesenkräutern und feiner Bitternote. Duftige Frucht und zurückhaltende Bitterkeit entfalten sich besonders klar in Tonic- und Spritz-Serves.",
      "flavorTags": [
        "Bitter",
        "Fruchtig",
        "Kräuterig",
        "Floral",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Spritz"
      ],
      "alcoholPercent": 18,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-008-the-bitter-truth-original-celery-bitters",
      "number": "8",
      "name": "The Bitter Truth Original Celery Bitters",
      "producer": "The Bitter Truth",
      "category": "Bitters",
      "subcategory": "Cocktail Bitters",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Pikante Cocktailbitters von The Bitter Truth mit Sellerie, frischen Kräutern, Zitrus und feiner Ingwerwürze. Sie bringen herbe Frische und würzige Struktur in Bloody Mary, Martini-Varianten, Gimlets und helle Highballs.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 44,
      "bottleSizeMl": 200,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-009-the-bitter-truth-creole-bitters",
      "number": "9",
      "name": "The Bitter Truth Creole Bitters",
      "producer": "The Bitter Truth",
      "category": "Bitters",
      "subcategory": "Bitters",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Würzige Cocktailbitters von The Bitter Truth im New-Orleans-Stil mit Cayenne, rosa Pfeffer, Anis, Zimt und Fenchel. Ihre intensive Gewürzstruktur setzt in Sazerac, Manhattan-Varianten und kräftigen Rührdrinks einen markanten Akzent.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 39,
      "bottleSizeMl": 200,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-010-fee-brothers-peach-bitters",
      "number": "10",
      "name": "Fee Brothers Peach Bitters",
      "producer": "Fee Brothers",
      "category": "Bitters",
      "subcategory": "Fruit Bitters",
      "amount": "3 Flaschen",
      "originVisible": "USA",
      "originInternal": "USA",
      "descriptionVisible": "Fruchtige Cocktailbitters von Fee Brothers mit saftigem Pfirsich und feiner Bittermandelnote. Sie setzen elegante Steinfruchtakzente in Bourbon-, Rum-, Sour- und Longdrink-Varianten, ohne den Drink zu beschweren.",
      "flavorTags": [
        "Bitter",
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 1.7,
      "bottleSizeMl": 150,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-011-the-bitter-truth-jerry-thomas-own-decanter-bitters",
      "number": "11",
      "name": "The Bitter Truth Jerry Thomas’ Own Decanter Bitters",
      "producer": "The Bitter Truth",
      "category": "Bitters",
      "subcategory": "Bitters",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Historisch inspirierte Cocktailbitters von The Bitter Truth mit warmer Gewürzstruktur, dunkler Kräutertiefe und trockener Bitterkeit. In Old Fashioned, Manhattan, Sazerac-Varianten und klassischen Rührdrinks verleihen sie gereiften Spirituosen zusätzliche Tiefe.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 30,
      "bottleSizeMl": 200,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
      "number": "12",
      "name": "The Bitter Truth Old Time Aromatic Bitters",
      "producer": "The Bitter Truth",
      "category": "Bitters",
      "subcategory": "Bitters",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Klassisch inspirierte Aromatic Bitters von The Bitter Truth mit Zimt, Kardamom, Anis, Nelke und dunkler Gewürzwärme. Sie verleihen gereiften Spirituosen sowie Old Fashioned und Manhattan-Varianten Struktur und Tiefe.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 39,
      "bottleSizeMl": 200,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-013-the-bitter-truth-orange-bitters",
      "number": "13",
      "name": "The Bitter Truth Orange Bitters",
      "producer": "The Bitter Truth",
      "category": "Bitters",
      "subcategory": "Bitters",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Zitrische Cocktailbitters von The Bitter Truth mit süßer und bitterer Orangenschale, feinen Gewürzen und trockener Bitterstruktur. In Martini, Manhattan und klaren Spirit-Forward-Drinks setzen sie einen präzisen Akzent aus Zitruswürze und Bitterkeit.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 39,
      "bottleSizeMl": 200,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-014-riemerschmid-bitter-angobitter",
      "number": "14",
      "name": "Riemerschmid Bitter Angobitter",
      "producer": "Riemerschmid",
      "category": "Bitters",
      "subcategory": "Aromatic Bitters / Würzbitter",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Erding / Deutschland",
      "descriptionVisible": "Deutscher Riemerschmid Bitter Angobitter mit Enzianwurzel, Bitterorange, Chinarinde und warmer Gewürzstruktur. Seine intensive, trockene Bitterkeit setzt in Cocktails, Aperitifs und Longdrinks einen markanten, klassisch-herben Akzent.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 48,
      "bottleSizeMl": 200,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-015-1866-brandy-de-jerez-solera-gran-reserva",
      "number": "15",
      "name": "1866 Brandy de Jerez Solera Gran Reserva",
      "producer": "1866 / Osborne-Gruppe",
      "category": "Brandy",
      "subcategory": "Brandy de Jerez Solera Gran Reserva",
      "amount": "1 Flasche",
      "originVisible": "Spanien",
      "originInternal": "Málaga / Jerez; ursprünglich Larios, heute Osborne-Gruppe",
      "descriptionVisible": "Spanischer Brandy de Jerez mit tiefem Mahagoniton, reifer Trockenfrucht, Vanille, Kakao und feiner Eichenwürze. Mit weicher Textur und langem Nachhall kommt er pur als Digestif sowie zu dunkler Schokolade oder Kaffee klar zur Geltung.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-016-prince-hubert-de-polignac-vsop-harmonie-cognac",
      "number": "16",
      "name": "Prince Hubert de Polignac VSOP Harmonie Cognac",
      "producer": "Prince Hubert de Polignac",
      "category": "Cognac",
      "subcategory": "VSOP Cognac",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Cognac",
      "descriptionVisible": "Französischer VSOP-Cognac von Prince Hubert de Polignac mit reifer Frucht, weicher Holzprägung, Vanille und feiner Würze. Sein harmonisches, rundes Profil kommt pur als Digestif ebenso zur Geltung wie in klassischen Cognac-Cocktails.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-017-willi-peter-kastaniengeist",
      "number": "17",
      "name": "Willi Peter Kastaniengeist",
      "producer": "Willi Peter / Südpfalz-Destillerie",
      "category": "Edelbrand / Geist",
      "subcategory": "Kastaniengeist",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Südpfalz / Oberotterbach",
      "descriptionVisible": "Klarer Kastaniengeist von Willi Peter aus der Südpfalz mit feiner Nussigkeit, trockener Struktur und warmer, eleganter Aromatik. Eine besondere Digestif-Spezialität für puren Genuss nach dem Essen.",
      "flavorTags": [
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 350,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-018-scheibel-edles-fass-nussler-aus-walnuessen",
      "number": "18",
      "name": "Scheibel Edles Fass Nussler aus Walnüssen",
      "producer": "Scheibel",
      "category": "Edelbrand / Geist",
      "subcategory": "Nussler / Walnuss-Spirituose",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Schwarzwald",
      "descriptionVisible": "Fassgereifte Walnuss-Spirituose von Scheibel mit intensiver Nussigkeit, feiner Würze und warmer Holzreife. Ihre weiche, vollmundige Art macht sie zum stimmigen Digestif zu Schokolade und Nussdesserts.",
      "flavorTags": [
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-019-liebl-walnussgeist",
      "number": "19",
      "name": "Liebl Walnussgeist",
      "producer": "Liebl",
      "category": "Edelbrand / Geist",
      "subcategory": "Walnussgeist",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Bayern / Bad Kötzting",
      "descriptionVisible": "Klarer Walnussgeist von Liebl mit intensiver Nussigkeit, feiner Würze und leicht herber Eleganz. Trocken, präzise und charaktervoll – ein besonderer Abschluss für alle, die nussige Destillate pur genießen.",
      "flavorTags": [
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-020-nutsler-pistazie-spirituose",
      "number": "20",
      "name": "Nutsler Pistazie",
      "producer": "Nutsler",
      "category": "Edelbrand / Geist",
      "subcategory": "Pistazien-Spirituose",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Schwarzwald",
      "descriptionVisible": "Pistazien-Spirituose mit nussiger Tiefe, feiner Süße und trockener Struktur. Klar von einem Pistazienlikör abgegrenzt, zeigt sie ihren eigenständigen Charakter pur oder als nussigen Akzent zum Dessert.",
      "flavorTags": [
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 35,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-021-prinz-alte-haselnuss",
      "number": "21",
      "name": "Prinz Alte Haselnuss",
      "producer": "Prinz Fein-Brennerei",
      "category": "Edelbrand / Geist",
      "subcategory": "Haselnuss-Spezialität",
      "amount": "1 Flasche",
      "originVisible": "Österreich",
      "originInternal": "Vorarlberg",
      "descriptionVisible": "Holzfassgereifte Haselnuss-Spezialität von Prinz mit gerösteter Nuss, feiner Schokolade, Karamell und weichem Abgang. Als milder, vollmundiger Digestif begleitet sie Desserts, Kaffee und Schokolade.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 41,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-022-prinz-alte-haus-zwetschke",
      "number": "22",
      "name": "Prinz Alte Haus-Zwetschke",
      "producer": "Prinz Fein-Brennerei",
      "category": "Edelbrand / Geist",
      "subcategory": "Zwetschken-Schnaps",
      "amount": "1 Flasche",
      "originVisible": "Österreich",
      "originInternal": "Vorarlberg",
      "descriptionVisible": "Holzfassgereifter Zwetschken-Schnaps von Prinz mit reifer Frucht, feiner Würze und sanfter Holzreife. Mild und rund, verbindet er pur als Digestif dunkle Obstfrucht mit einer dezenten Fassnote.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 41,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-023-prinz-alte-kirsche",
      "number": "23",
      "name": "Prinz Alte Kirsche",
      "producer": "Prinz Fein-Brennerei",
      "category": "Edelbrand / Geist",
      "subcategory": "Kirsch-Spezialität",
      "amount": "1 Flasche",
      "originVisible": "Österreich",
      "originInternal": "Vorarlberg",
      "descriptionVisible": "Holzfassveredelte Kirsch-Spezialität von Prinz mit reifer Kirschfrucht, milder Süße und weichem, langem Abgang. Pur als Digestif oder zu dunkler Schokolade verbindet sie saftige Kirschfrucht mit sanfter Fassreife.",
      "flavorTags": [
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 41,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-024-prinz-alte-marille",
      "number": "24",
      "name": "Prinz Alte Marille",
      "producer": "Prinz Fein-Brennerei",
      "category": "Edelbrand / Geist",
      "subcategory": "Marillen-Schnaps",
      "amount": "1 Flasche",
      "originVisible": "Österreich",
      "originInternal": "Vorarlberg",
      "descriptionVisible": "Fruchtig-milder Marillen-Schnaps von Prinz mit vollreifer Aprikose, feinen Blütennoten und weicher Holzfassnote. Pur als Digestif oder zu hellen Desserts bleibt seine reife Frucht fein und ausgewogen.",
      "flavorTags": [
        "Fruchtig",
        "Floral",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 41,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-025-prinz-alte-waldhimbeere",
      "number": "25",
      "name": "Prinz Alte Waldhimbeere",
      "producer": "Prinz Fein-Brennerei",
      "category": "Edelbrand / Geist",
      "subcategory": "Waldhimbeer-Spezialität",
      "amount": "1 Flasche",
      "originVisible": "Österreich",
      "originInternal": "Vorarlberg",
      "descriptionVisible": "Fruchtige Waldhimbeer-Spezialität von Prinz mit intensiver Beerenaromatik, milder Süße und weichem Holzfasscharakter. Pur als Digestif oder zu hellen Desserts verbindet sie saftige Waldhimbeere mit sanfter Fassreife.",
      "flavorTags": [
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 41,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-026-prinz-alte-williams-christ-birne",
      "number": "26",
      "name": "Prinz Alte Williams-Christ-Birne",
      "producer": "Prinz Fein-Brennerei",
      "category": "Edelbrand / Geist",
      "subcategory": "Williamsbirnen-Spezialität",
      "amount": "1 Flasche",
      "originVisible": "Österreich",
      "originInternal": "Vorarlberg",
      "descriptionVisible": "Milde Williams-Birnen-Spezialität von Prinz mit reifer Birnenfrucht, feiner Süße und weicher Holzfassnote. Duftige Frucht und runder Charakter machen sie zu einem eleganten Digestif nach dem Essen.",
      "flavorTags": [
        "Fruchtig",
        "Floral",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 41,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-027-prinz-alter-bodensee-apfel",
      "number": "27",
      "name": "Prinz Alter Bodensee-Apfel",
      "producer": "Prinz Fein-Brennerei",
      "category": "Edelbrand / Geist",
      "subcategory": "Apfel-Schnaps",
      "amount": "1 Flasche",
      "originVisible": "Österreich",
      "originInternal": "Vorarlberg / Bodensee-Obst",
      "descriptionVisible": "Holzfassgereifter Apfel-Schnaps von Prinz mit saftiger Bodensee-Apfelfrucht, milder Süße und feiner Fassnote. Seine weiche, zugängliche Art macht ihn zu einem fruchtigen Digestif für den puren Genuss.",
      "flavorTags": [
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 41,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-028-weingut-meyer-naekel-spaetburgunder-trester",
      "number": "28",
      "name": "Weingut Meyer-Näkel Spätburgunder Trester",
      "producer": "Weingut Meyer-Näkel",
      "category": "Edelbrand / Geist",
      "subcategory": "Tresterbrand / Grappa-Art",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Ahr / Dernau",
      "descriptionVisible": "Barriquegereifter Spätburgunder-Trester vom Weingut Meyer-Näkel an der Ahr mit feiner Traubenwürze, dezenter Holzreife und trockenem, elegantem Nachhall. Eine seltene Digestif-Spezialität für ruhige Genussmomente nach dem Essen.",
      "flavorTags": [
        "Fruchtig",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 42,
      "bottleSizeMl": 350,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-029-hotel-starlino-maraschino-cherries",
      "number": "29",
      "name": "Hotel Starlino Maraschino Cherries",
      "producer": "Hotel Starlino",
      "category": "Garnish",
      "subcategory": "Cocktailkirschen",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien",
      "descriptionVisible": "Italienische Maraschino-Cocktailkirschen von Hotel Starlino mit dunkler Frucht, seidiger Süße und dichter Sirupnote. Ein hochwertiges Garnish für Manhattan, Old Fashioned, Martinez und elegante Dessertdrinks.",
      "flavorTags": [
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 400,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-030-bombay-sapphire-premier-cru-murcian-lemon",
      "number": "30",
      "name": "Bombay Sapphire Premier Cru Murcian Lemon",
      "producer": "Bombay Sapphire",
      "category": "Gin",
      "subcategory": "Citrus London Dry Gin",
      "amount": "1 Flasche",
      "originVisible": "England",
      "originInternal": "England / Murcia-Zitrus als Botanical-Herkunft",
      "descriptionVisible": "Zitrusbetonter Gin von Bombay Sapphire mit Fino-Zitrone, Mandarine und süßer Orange aus Murcia. Seine helle, frische Zitrusprägung entfaltet sich in Gin & Tonic, Martini-Varianten und zitrusbetonten Highballs.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 47,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-031-fifty-pounds-gin",
      "number": "31",
      "name": "Fifty Pounds Gin",
      "producer": "Fifty Pounds Gin / Thames Distillers",
      "category": "Gin",
      "subcategory": "London Dry Gin",
      "amount": "1 Flasche",
      "originVisible": "England",
      "originInternal": "England / London",
      "descriptionVisible": "Klassischer London Dry Gin mit klarem Wacholder, feiner Zitrusfrische und trockener, ausgewogener Struktur. Sein geradliniges Profil gibt Gin & Tonic, Martini und klassischen Gin-Cocktails eine klare, trockene Linie.",
      "flavorTags": [
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 43.5,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-032-hendrick-s-gin",
      "number": "32",
      "name": "Hendrick’s Gin",
      "producer": "Hendrick's / William Grant & Sons",
      "category": "Gin",
      "subcategory": "Scottish Botanical Gin",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Schottland / Girvan",
      "descriptionVisible": "Schottischer Gin mit Wacholder, feiner Blütenaromatik und der charakteristischen Verbindung von Gurke und Rose. In Gin & Tonic, hellen Highballs und modernen Gin-Drinks zeigt sich sein frisches, floral geprägtes Profil besonders deutlich.",
      "flavorTags": [
        "Kräuterig",
        "Floral",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 44,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-033-kyro-gin",
      "number": "33",
      "name": "Kyrö Gin",
      "producer": "Kyrö Distillery Company",
      "category": "Gin",
      "subcategory": "Finnish Rye Gin",
      "amount": "1 Flasche",
      "originVisible": "Finnland",
      "originInternal": "Finnland / Isokyrö",
      "descriptionVisible": "Finnischer Rye Gin mit warmer Roggenbasis, Wacholder und nordischen Wildkräutern. Roggenwürze und aromatische Kräuterfrische geben Gin & Tonic, Highballs und hellen Sours einen eigenständigen nordischen Charakter.",
      "flavorTags": [
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 42.6,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-034-le-tribute-gin",
      "number": "34",
      "name": "Le Tribute Gin",
      "producer": "MG Destilerías / Le Tribute",
      "category": "Gin",
      "subcategory": "Mediterranean Citrus Gin",
      "amount": "1 Flasche",
      "originVisible": "Spanien",
      "originInternal": "Spanien / Katalonien",
      "descriptionVisible": "Spanischer Gin mit Wacholder, Lemongrass und einer klaren mediterranen Zitrusprägung. Trocken und präzise strukturiert, setzt er in Gin & Tonic, Collins und hellen Highballs einen frischen Zitrusakzent.",
      "flavorTags": [
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 43,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-035-needle-blackforest-gin",
      "number": "35",
      "name": "Needle Blackforest Gin",
      "producer": "Bimmerle / Needle",
      "category": "Gin",
      "subcategory": "Black Forest Dry Gin",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Schwarzwald",
      "descriptionVisible": "Schwarzwald-Gin mit Wacholder, Fichtennadeln, Zitrus und feiner Kräuterwürze. Die frische Waldaromatik setzt in Gin & Tonic, kräuterigen Highballs und geradlinigen Gin-Cocktails einen markanten Akzent.",
      "flavorTags": [
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-036-no-3-london-dry-gin",
      "number": "36",
      "name": "No.3 London Dry Gin",
      "producer": "Berry Bros. & Rudd",
      "category": "Gin",
      "subcategory": "London Dry Gin",
      "amount": "1 Flasche",
      "originVisible": "England",
      "originInternal": "England / Niederlande als Produktionsbezug",
      "descriptionVisible": "Klassischer London Dry Gin mit präzisem Wacholder, heller Zitrusfrische und feiner Gewürzstruktur. In Martini, Gin & Tonic und klassischen Bar-Drinks bleibt seine Wacholderbasis trocken, zitrisch und klar konturiert.",
      "flavorTags": [
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 46,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-037-roku-japanese-craft-gin",
      "number": "37",
      "name": "Roku Japanese Craft Gin",
      "producer": "House of Suntory",
      "category": "Gin",
      "subcategory": "Japanese Craft Gin",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan",
      "descriptionVisible": "Japanischer Gin von Suntory mit Yuzu, Sakura, grünem Tee und Sansho-Pfeffer. Zitrusfrische, feine Blütennoten und dezente Würze verbinden sich in Gin & Tonic, Fizz-Varianten und hellen Highballs zu einem ausgewogenen Profil.",
      "flavorTags": [
        "Floral",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 43,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-038-tanqueray-london-dry-gin",
      "number": "38",
      "name": "Tanqueray London Dry Gin",
      "producer": "Tanqueray",
      "category": "Gin",
      "subcategory": "London Dry Gin",
      "amount": "1 Flasche",
      "originVisible": "England",
      "originInternal": "England",
      "descriptionVisible": "Klassischer London Dry Gin mit kräftigem Wacholder, Koriander, Angelika und Süßholz. Seine trockene, wacholderbetonte Struktur gibt Gin & Tonic, Martini, Negroni und klassischen Gin-Drinks eine markante Kontur.",
      "flavorTags": [
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 43.1,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-039-tanqueray-no-ten",
      "number": "39",
      "name": "Tanqueray No. TEN",
      "producer": "Tanqueray",
      "category": "Gin",
      "subcategory": "Citrus Gin",
      "amount": "1 Flasche",
      "originVisible": "England",
      "originInternal": "England",
      "descriptionVisible": "Zitrusbetonter Gin von Tanqueray mit Grapefruit, Orange, Limette und feiner Kamille. Die helle, präzise Zitrusstruktur setzt in Martini, Gin & Tonic und modernen Gin-Cocktails einen klaren, frischen Akzent.",
      "flavorTags": [
        "Floral",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 47.3,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-040-ukiyo-japanese-blossom-gin",
      "number": "40",
      "name": "Ukiyo Japanese Blossom Gin",
      "producer": "Ukiyo Spirits",
      "category": "Gin",
      "subcategory": "Japanese Blossom Gin",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan",
      "descriptionVisible": "Japanischer Blossom Gin mit Sakura-Blüte, zarter Blütenaromatik und frischer Zitrusnote. In Gin & Tonic, hellen Highballs und feinen Aperitif-Drinks treten Sakura und Zitrus leicht und klar hervor.",
      "flavorTags": [
        "Floral",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-041-ukiyo-japanese-nashi-pear-gin",
      "number": "41",
      "name": "Ukiyo Nashi Pear Gin",
      "producer": "Ukiyo Spirits",
      "category": "Gin",
      "subcategory": "Japanese Nashi Pear Gin",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan",
      "descriptionVisible": "Japanischer Gin mit saftiger Nashi-Birne und leichter floraler Frische. Seine weiche, helle Frucht fügt sich besonders stimmig in Gin & Tonic, fruchtige Highballs und leichte Aperitif-Drinks ein.",
      "flavorTags": [
        "Fruchtig",
        "Floral",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-042-ukiyo-tokyo-dry-gin",
      "number": "42",
      "name": "Ukiyo Tokyo Dry Gin",
      "producer": "Ukiyo Spirits",
      "category": "Gin",
      "subcategory": "Tokyo Dry Gin",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan",
      "descriptionVisible": "Trockener japanischer Gin mit klarem Wacholder, feiner Zitrusnote und subtiler Würze. In Martini, Gin & Tonic und trockenen Gin-Drinks hält er Wacholder, helle Zitrusfrische und zurückhaltende Gewürznoten in präziser Balance.",
      "flavorTags": [
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-043-ukiyo-japanese-yuzu-gin",
      "number": "43",
      "name": "Ukiyo Japanese Yuzu Gin",
      "producer": "Ukiyo Spirits",
      "category": "Gin",
      "subcategory": "Japanese Yuzu Gin",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan",
      "descriptionVisible": "Japanischer Gin mit Yuzu, Mandarine, Wacholder und feiner Gewürznote. Yuzu und Mandarine führen sein helles Zitrusprofil, während Wacholder und dezente Würze Gin & Tonic, Spritz-Varianten und zitrusbetonten Longdrinks Struktur geben.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-044-ungava-canadian-premium-gin",
      "number": "44",
      "name": "Ungava Canadian Premium Gin",
      "producer": "Ungava Spirits",
      "category": "Gin",
      "subcategory": "Canadian Arctic Gin",
      "amount": "1 Flasche",
      "originVisible": "Kanada",
      "originInternal": "Nord-Québec",
      "descriptionVisible": "Kanadischer Gin mit arktischen Botanicals, Wacholder, Beerenfrucht und feiner Kräuterwürze. Gin & Tonic, helle Highballs und moderne Sours greifen seine Beerenfrucht, florale Frische und feine Kräuterwürze besonders gut auf.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Floral"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 43.1,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-045-amarula-cream",
      "number": "45",
      "name": "Amarula Cream",
      "producer": "Amarula",
      "category": "Likör",
      "subcategory": "Cream-Likör",
      "amount": "1 Flasche",
      "originVisible": "Südafrika",
      "originInternal": "Südafrika",
      "descriptionVisible": "Südafrikanischer Cream-Likör mit Marula-Frucht, Sahne, Karamell und weicher Dessertfülle. Seine samtige Textur zeigt sich pur auf Eis ebenso stimmig wie im Kaffee, zu Eiscreme oder in cremigen After-Dinner-Drinks.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-046-baileys-original-irish-cream",
      "number": "46",
      "name": "Baileys Original Irish Cream",
      "producer": "Baileys / Diageo",
      "category": "Likör",
      "subcategory": "Irish Cream",
      "amount": "1 Flasche",
      "originVisible": "Irland",
      "originInternal": "Irland",
      "descriptionVisible": "Irischer Cream-Likör mit Whiskey, Sahne, Kakao, Vanille und weicher Süße. Pur auf Eis, im Kaffee, über Eiscreme oder in Dessertcocktails zeigt er seine samtige, cremige Fülle.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-047-mangaroca-batida-pura-coco",
      "number": "47",
      "name": "Mangaroca Batida Pura Coco",
      "producer": "Mangaroca Batida",
      "category": "Likör",
      "subcategory": "Kokoslikör / Batida",
      "amount": "1 Flasche",
      "originVisible": "Brasilien",
      "originInternal": "Brasilien",
      "descriptionVisible": "Cremiger Kokoslikör mit tropischer Süße und klarer Kokosprägung. Batida-Serves, Piña-Colada-Varianten, cremige Tropical-Drinks und sommerliche Longdrinks erhalten durch ihn weiche Fülle und einen ausgeprägten Kokoscharakter.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Longdrink & Highball",
        "Modifier",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 16,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-048-bols-apricot-brandy",
      "number": "48",
      "name": "Bols Apricot Brandy",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Aprikosenlikör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Goldener Aprikosenlikör von Bols mit saftiger Steinfrucht, feiner Mandelanmutung und einem Hauch Orange. In Mai Tai, Zombie, Apricot Sour und klassischen Fruchtdrinks verbindet er reife Aprikose mit einer dezenten Kern- und Zitrusnote.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch",
        "Nussig"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 24,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-049-bols-cherry-brandy",
      "number": "49",
      "name": "Bols Cherry Brandy",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Kirschlikör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Tiefroter Kirschlikör von Bols mit frischer Kirsche, milder Süße und feiner Mandelanmutung. In Singapore Sling, Cherry Margarita und kräftigen After-Dinner-Drinks bringt seine dunkle Kirschfrucht saftige Tiefe und eine zurückhaltende Mandelnote.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 24,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-050-bols-creme-de-cacao-brown",
      "number": "50",
      "name": "Bols Crème de Cacao Brown",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Dunkler Kakaolikör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Dunkler Kakaolikör von Bols mit bitterer Schokolade, Kakao, Vanille und feiner Orangennote. In Brandy Alexander, Espresso-Cocktails und cremigen After-Dinner-Drinks verbindet er dunkle Schokoladenfülle mit feiner Vanille- und Zitruswürze.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 24,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-051-bols-creme-de-cacao-white",
      "number": "51",
      "name": "Bols Crème de Cacao White",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Weißer Kakaolikör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Klarer Kakaolikör von Bols mit heller Schokolade, Vanille und feiner cremiger Süße. In Golden Cadillac, Grasshopper-Varianten und hellen Dessertdrinks bringt er weiche Schokoladennoten ein, ohne die Farbe des Drinks zu verdunkeln.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 24,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-052-bols-maraschino-likoer",
      "number": "52",
      "name": "Bols Maraschino Likör",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Maraschino-Likör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Klarer Maraschino-Likör von Bols mit voller Kirschfrucht, feiner Mandelanmutung und trockener Süße. In Aviation, Martinez, Last Word, Hemingway Daiquiri und feinen Sour-Varianten verbindet er reife Kirsche mit einer dezenten Kernnote.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 24,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-053-bols-peach",
      "number": "53",
      "name": "Bols Peach",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Pfirsichlikör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Pfirsichlikör von Bols mit saftiger Frucht und weicher Süße. In Woo Woo, Peach Margarita, Peach Mojito, Bellini-Varianten und sommerlichen Longdrinks bringt er einen klaren, reifen Pfirsichcharakter ein.",
      "flavorTags": [
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Longdrink & Highball",
        "Modifier"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-054-bols-sour-apple",
      "number": "54",
      "name": "Bols Sour Apple",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Apfellikör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Grüner Apfellikör von Bols mit knackiger Säure, frischer Apfelfrucht und leichter Würze. In Apple Martini, Sour Apple Spritz, Apple Fizz und hellen Longdrinks verbindet er grünen Apfel mit einer lebendigen, fruchtigen Säurespannung.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-055-bols-triple-sec",
      "number": "55",
      "name": "Bols Triple Sec",
      "producer": "Bols",
      "category": "Likör",
      "subcategory": "Triple Sec / Orangenlikör",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Amsterdam",
      "descriptionVisible": "Klarer Orangenlikör von Bols mit Curaçao-Orangenschalen, frischer Zitrusnote und trockener Süße. In Margarita, Cosmopolitan, Sidecar, White Lady und klassischen Sours verbindet er klare Orangenfrucht mit einem trockenen Zitrusprofil.",
      "flavorTags": [
        "Süß",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 38,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-056-chartreuse-verte",
      "number": "56",
      "name": "Chartreuse Verte",
      "producer": "Chartreuse",
      "category": "Likör",
      "subcategory": "Grüner Kräuterlikör",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Voiron / Isère",
      "descriptionVisible": "Kräftiger grüner Kräuterlikör aus Frankreich mit intensiver Alpenkräuterwürze, süßer Tiefe und langem, komplexem Nachhall. Pur als Digestif sowie in Last Word, Bijou und aromatischen Cocktailklassikern entfaltet er seine markante Kräuter- und Gewürzfülle.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Spirit-Forward"
      ],
      "alcoholPercent": 55,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-057-cointreau",
      "number": "57",
      "name": "Cointreau",
      "producer": "Rémy Cointreau",
      "category": "Likör",
      "subcategory": "Triple Sec / Orangenlikör",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Angers",
      "descriptionVisible": "Klarer französischer Orangenlikör mit intensiver Zitrusfrische, süßen und bitteren Orangenschalen sowie trockenem Finish. In Margarita, Sidecar, Cosmopolitan, White Lady und klassischen Sours setzt er einen präzisen Orangenakzent mit klarer Frische und trockenem Ausklang.",
      "flavorTags": [
        "Süß",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-058-disaronno-originale-amaretto",
      "number": "58",
      "name": "Disaronno Originale Amaretto",
      "producer": "Illva Saronno",
      "category": "Likör",
      "subcategory": "Amaretto",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Saronno",
      "descriptionVisible": "Italienischer Amaretto mit warmer Mandelanmutung, Aprikosenkern, Karamell und feiner Süße. Pur, auf Eis oder im Disaronno Sour verbindet seine samtige Textur nussige Wärme mit weicher Karamellfülle; auch cremigen Dessertdrinks gibt er einen runden Akzent.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 28,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-059-dom-benedictine",
      "number": "59",
      "name": "Bénédictine D.O.M.",
      "producer": "Bénédictine",
      "category": "Likör",
      "subcategory": "Kräuterlikör",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Normandie / Fécamp",
      "descriptionVisible": "Französischer Kräuterlikör aus Fécamp in der Normandie mit Honig, Zitrus, Vanille, Gewürzen und vielschichtiger Kräuteraromatik. Als Digestif oder im B&B verbindet er süße Würze mit feiner Zitrusfrische und warmer Vanillenote.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-060-galliano-l-autentico",
      "number": "60",
      "name": "Galliano L’Autentico",
      "producer": "Galliano / Lucas Bols",
      "category": "Likör",
      "subcategory": "Kräuterlikör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien / toskanischer Ursprung",
      "descriptionVisible": "Italienischer Kräuterlikör mit Anis, Vanille, Minze, Zitrus und warmer Gewürzfülle. In Harvey Wallbanger, Yellow Bird und aromatischen Cocktailklassikern verbindet er markante Aniswürze mit süßer Vanille, Minze und heller Zitrusfrische.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 42.3,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-061-galliano-vanilla",
      "number": "61",
      "name": "Galliano Vanilla",
      "producer": "Galliano / Lucas Bols",
      "category": "Likör",
      "subcategory": "Vanillelikör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien",
      "descriptionVisible": "Vanillebetonter Galliano-Likör mit Anis, Kräutern und warmer Gewürznote. In cremigen Dessertdrinks, Espresso-Cocktails und süßeren Longdrinks ergänzt seine weiche Süße die Anis- und Kräuterwürze.",
      "flavorTags": [
        "Kräuterig",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 30,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-062-giffard-creme-de-violette",
      "number": "62",
      "name": "Giffard Crème de Violette",
      "producer": "Giffard",
      "category": "Likör",
      "subcategory": "Veilchenlikör",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Französischer Veilchenlikör von Giffard mit floraler Süße, zarter Blütenaromatik und feiner Veilchennote. In Aviation, Blue Moon und klaren Sour-Varianten setzt er einen zurückhaltenden floralen Akzent.",
      "flavorTags": [
        "Floral",
        "Süß"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 16,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-063-grand-marnier-cordon-rouge",
      "number": "63",
      "name": "Grand Marnier Cordon Rouge",
      "producer": "Grand Marnier / Marnier-Lapostolle",
      "category": "Likör",
      "subcategory": "Cognac-Orangenlikör",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Französischer Orangenlikör mit Cognac, kandierter Orange, Vanille und warmer Fasswürze. Pur sowie in Sidecar-Varianten und Margarita-Twists verbindet er reife Zitrusfrucht, Vanille und Cognac zu einem vollen, warm gewürzten Profil.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-064-kahlua",
      "number": "64",
      "name": "Kahlúa",
      "producer": "Kahlúa / Pernod Ricard",
      "category": "Likör",
      "subcategory": "Kaffeelikör",
      "amount": "1 Flasche",
      "originVisible": "Mexiko",
      "originInternal": "Mexiko",
      "descriptionVisible": "Mexikanischer Kaffeelikör mit Arabica-Kaffee, Rum, Karamell und weicher Süße. In Espresso Martini, White Russian, Black Russian und cremigen After-Dinner-Drinks verbindet er kräftige Kaffeearomatik mit Rum und weicher Karamellsüße.",
      "flavorTags": [
        "Süß",
        "Kaffee"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 16,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-065-lantenhammer-raritas-kaffeelikoer",
      "number": "65",
      "name": "Lantenhammer Raritas Kaffeelikör",
      "producer": "Lantenhammer",
      "category": "Likör",
      "subcategory": "Kaffeelikör",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Bayern / Schliersee",
      "descriptionVisible": "Bayerischer Kaffeelikör von Lantenhammer mit kräftigem Röstkaffee, dunkler Süße und vollmundigem Charakter. In Espresso Martini, Kaffee-Cocktails und Dessertdrinks zeigt er eine intensive Röstkaffeearomatik; pur eignet er sich als Digestif.",
      "flavorTags": [
        "Süß",
        "Kaffee"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 25,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-066-lantenhammer-raritas-walnusslikoer",
      "number": "66",
      "name": "Lantenhammer Raritas Walnusslikör",
      "producer": "Lantenhammer",
      "category": "Likör",
      "subcategory": "Walnusslikör",
      "amount": "2 Flaschen",
      "originVisible": "Deutschland",
      "originInternal": "Bayern / Schliersee",
      "descriptionVisible": "Bayerischer Walnusslikör von Lantenhammer mit grüner Walnuss, feiner Vanille, milder Süße und langem, weichem Nachhall. Pur als Digestif sowie zu Kaffee, Eiscreme und Nussdesserts verbindet er grüne Walnuss mit sanfter Vanille und milder Süße.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 30,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-067-licor-43-original",
      "number": "67",
      "name": "Licor 43 Original",
      "producer": "Zamora Company",
      "category": "Likör",
      "subcategory": "Vanille-Zitruslikör",
      "amount": "1 Flasche",
      "originVisible": "Spanien",
      "originInternal": "Cartagena / Spanien",
      "descriptionVisible": "Spanischer Likör mit Vanille, Zitrus, feiner Kräuterwürze und warmer Süße. Pur auf Eis sowie in Kaffee-, Dessert- und fruchtigen Longdrinks verbindet er Vanille mit heller Zitrusfrische und dezenter Kräuterwürze.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 31,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-068-luxardo-maraschino",
      "number": "68",
      "name": "Luxardo Maraschino",
      "producer": "Luxardo",
      "category": "Likör",
      "subcategory": "Maraschino-Likör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Venetien / Italien",
      "descriptionVisible": "Klarer Maraschino-Likör von Luxardo mit Maraska-Kirsche, feiner Mandelanmutung und trockener Süße. In Aviation, Last Word, Martinez, Hemingway Daiquiri und klassischen Sours liefert er trockene Kirschfrucht und eine feine Kernnote.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 32,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-069-marcati-limoncello",
      "number": "69",
      "name": "Marcati Limoncello",
      "producer": "Marcati",
      "category": "Likör",
      "subcategory": "Limoncello",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien",
      "descriptionVisible": "Italienischer Limoncello von Marcati mit intensiver Zitronenschale, frischer Süße und lebendiger Säure. Eiskalt als Digestif sowie in Limoncello Spritz, Tonic-Serves und sommerlichen Drinks zeigt er ein lebendiges Wechselspiel aus Zitrusschale, Süße und Säure.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 28,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-070-molinari-caffe",
      "number": "70",
      "name": "Molinari Caffè",
      "producer": "Molinari",
      "category": "Likör",
      "subcategory": "Kaffee-Sambuca-Likör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien",
      "descriptionVisible": "Italienischer Kaffeelikör auf Sambuca-Basis mit kräftigem Kaffee, Aniswürze und dunkler Süße. Pur, auf Eis oder in Espresso-Drinks verbindet er intensive Kaffeearomatik mit dem markanten Anisprofil der Sambuca-Basis.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Kaffee"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 32,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-071-heinz-eggert-crema-di-pistacchio",
      "number": "71",
      "name": "Heinz Eggert Crema di Pistacchio",
      "producer": "Heinz Eggert GmbH & Co. KG",
      "category": "Likör",
      "subcategory": "Pistazien-Cream-Likör",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Bad Bevensen / Lüneburger Heide",
      "descriptionVisible": "Cremiger Pistazienlikör aus Deutschland mit nussiger Pistazie, milder Süße und sanfter Textur. Pur auf Eis, zu Desserts oder in cremigen Cocktails bringt er Pistazienaromatik und cremige Fülle ein.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-072-licellino-limoncello",
      "number": "72",
      "name": "Licellino Limoncello",
      "producer": "Licellino",
      "category": "Likör",
      "subcategory": "Zitronenlikör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien / sizilianische Zitronen",
      "descriptionVisible": "Italienischer Limoncello aus sizilianischen Zitronen mit ätherischer Schalenaromatik, feiner Säure und ausgewogener Süße. Eiskalt als Digestif, im Limoncello Spritz oder in sommerlichen Zitrusdrinks verbindet er Zitronenzeste mit frischer Süße und einer leicht bitteren Schalenprägung.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 28,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-073-samaani-salmari-salty-licorice-liqueur",
      "number": "73",
      "name": "Samaani Salmari Salty Licorice Liqueur",
      "producer": "Oy Shaman Spirits Ltd",
      "category": "Likör",
      "subcategory": "Salmiak-Lakritzlikör",
      "amount": "1 Flasche",
      "originVisible": "Finnland",
      "originInternal": "Finnland",
      "descriptionVisible": "Finnischer Salmiak-Lakritzlikör mit dunkler Intensität, salziger Lakritze und klarer, kühler Schärfe. Markant, eigenständig und am besten eiskalt pur oder als kräftiger Akzent in dunklen Drinks.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 21,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-074-unterthurner-kastanienlikoer",
      "number": "74",
      "name": "Unterthurner Kastanienlikör",
      "producer": "Unterthurner",
      "category": "Likör",
      "subcategory": "Kastanienlikör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Südtirol",
      "descriptionVisible": "Südtiroler Kastanienlikör von Unterthurner mit gerösteter Kastanie, milder Süße und feiner Grappanote. Pur, auf Eis oder zu Nussdesserts verbindet er Kastanienaromatik mit weichem Mundgefühl und einem Hauch Karamell.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 28,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-075-vedrenne-creme-de-cassis-supercassis",
      "number": "75",
      "name": "Védrenne Crème de Cassis / Supercassis",
      "producer": "Védrenne",
      "category": "Likör",
      "subcategory": "Cassislikör",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Burgund / Nuits-Saint-Georges",
      "descriptionVisible": "Französischer Cassislikör von Védrenne mit dichter schwarzer Johannisbeere, samtiger Süße und frischer Fruchtsäure. Klassisch für Kir, Kir Royal, Sours und elegante Beeren-Cocktails.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 20,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-076-walcher-bombardino-classico",
      "number": "76",
      "name": "Walcher Bombardino Classico",
      "producer": "Walcher",
      "category": "Likör",
      "subcategory": "Eierlikör / Bombardino",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Südtirol",
      "descriptionVisible": "Südtiroler Eierlikör-Spezialität von Walcher mit cremiger Süße, Vanille, warmer Würze und dichtem Dessertcharakter. Heiß mit Sahne, pur gekühlt oder als winterlicher Dessertdrink zeigt sie ihre weiche Textur und ausgeprägte Vanillearomatik.",
      "flavorTags": [
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-077-walcher-cappuccino",
      "number": "77",
      "name": "Walcher Cappuccino",
      "producer": "Walcher",
      "category": "Likör",
      "subcategory": "Cappuccino-Likör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Südtirol",
      "descriptionVisible": "Südtiroler Cappuccino-Likör von Walcher mit Bio-Kaffee, cremiger Textur und weicher Süße. Pur, leicht erwärmt mit Sahnehaube oder in Dessertdrinks verbindet er milde Kaffeearomatik mit cremigem Cappuccinocharakter.",
      "flavorTags": [
        "Süß",
        "Kaffee"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-078-walcher-noisetto-mit-rum",
      "number": "78",
      "name": "Walcher Noisetto mit Rum",
      "producer": "Walcher",
      "category": "Likör",
      "subcategory": "Haselnuss-Rum-Likör",
      "amount": "2 Flaschen",
      "originVisible": "Italien",
      "originInternal": "Südtirol",
      "descriptionVisible": "Südtiroler Haselnuss-Rum-Likör von Walcher mit Piemont-Haselnüssen, karibischem Rum und Kakaodestillat. Pur, über Vanilleeis oder in Dessertdrinks verbindet er volle Haselnussaromatik mit Rum, Kakao und feinen Nougatnoten.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 21,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-079-walcher-tartuffetto",
      "number": "79",
      "name": "Walcher Tartuffetto",
      "producer": "Walcher",
      "category": "Likör",
      "subcategory": "Kakao-Rum-Likör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Südtirol",
      "descriptionVisible": "Cremiger Kakao-Rum-Likör von Walcher mit dunkler Schokolade, feinem Rum und weicher Dessertfülle. Pur, warm mit Sahnehaube oder über Vanille- und Schokoladeneis verbindet er Kakao, Rum und cremige Schokoladenfülle.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-080-barsol-pisco-moscatel",
      "number": "80",
      "name": "Barsol Pisco Moscatel",
      "producer": "Barsol",
      "category": "Pisco",
      "subcategory": "Pisco Moscatel",
      "amount": "1 Flasche",
      "originVisible": "Peru",
      "originInternal": "Ica",
      "descriptionVisible": "Aromatischer peruanischer Pisco von Barsol aus Moscatel-Trauben mit floraler Frucht, klarer Traubenaromatik und feiner Würze. In Pisco Sour, Pisco Punch und hellen Aperitif-Drinks verbindet er Traubenfrucht und Blütennoten mit einem trockenen, fein würzigen Profil.",
      "flavorTags": [
        "Fruchtig",
        "Floral",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour"
      ],
      "alcoholPercent": 41.3,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-081-barsol-pisco-mosto-verde-quebranta",
      "number": "81",
      "name": "Barsol Pisco Mosto Verde Quebranta",
      "producer": "Barsol",
      "category": "Pisco",
      "subcategory": "Pisco Mosto Verde / Quebranta",
      "amount": "1 Flasche",
      "originVisible": "Peru",
      "originInternal": "Ica",
      "descriptionVisible": "Peruanischer Mosto-Verde-Pisco von Barsol aus teilweise vergorenem Quebranta-Most mit grüner Traube, Birne und Zitrus sowie Anklängen von weißer Schokolade, Kakao und Mandel. Sein mildes, ausgewogenes Profil eignet sich für den Purgenuss ebenso wie für Pisco Sour und klassische Pisco-Drinks.",
      "flavorTags": [
        "Fruchtig",
        "Zitrisch",
        "Nussig"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour"
      ],
      "alcoholPercent": 41.8,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-082-tierra-nueva-pisco-puro-2021",
      "number": "82",
      "name": "Tierra Nueva Pisco Puro 2021",
      "producer": "Tierra Nueva",
      "category": "Pisco",
      "subcategory": "Pisco Puro / Uvina",
      "amount": "1 Flasche",
      "originVisible": "Peru",
      "originInternal": "Peru",
      "descriptionVisible": "Peruanischer Pisco von Tierra Nueva aus Uvina-Trauben mit roten Früchten, klarer Traubenaromatik und feiner Kräuterwürze. In Pisco Sour, Pisco Punch und klaren Pisco-Drinks verbindet er rote Frucht und Traube mit einem trockenen, fein kräuterigen Profil.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour"
      ],
      "alcoholPercent": 42,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-083-mansinthe-absinthe",
      "number": "83",
      "name": "Mansinthe Absinthe",
      "producer": "Mansinthe / Lion Spirits / Matter-Luginbühl",
      "category": "Rakı / Anis",
      "subcategory": "Absinthe",
      "amount": "1 Flasche",
      "originVisible": "Schweiz",
      "originInternal": "Schweiz",
      "descriptionVisible": "Schweizer Absinthe mit Wermut, Anis, Fenchel und grüner Kräuterwürze. Mit eiskaltem Wasser treten seine trockene Kräuterprägung und das Zusammenspiel von Anis, Fenchel und Wermut klar hervor; in Sazerac- und Absinthe-Drinks dient er als markanter Kräuterakzent.",
      "flavorTags": [
        "Bitter",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Aperitif",
        "Modifier"
      ],
      "alcoholPercent": 66.6,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-084-pernod",
      "number": "84",
      "name": "Pernod",
      "producer": "Pernod",
      "category": "Rakı / Anis",
      "subcategory": "Anis Aperitif",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Französischer Anis-Aperitif mit Sternanis, Fenchel, Kräutern und frischer Würze. Mit kaltem Wasser oder Soda serviert zeigt er sein klares Anisprofil; in Aperitif-Drinks genügt eine sparsame Dosierung für einen markanten Kräuterakzent.",
      "flavorTags": [
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Aperitif",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-085-ricard-pastis-de-marseille",
      "number": "85",
      "name": "Ricard Pastis de Marseille",
      "producer": "Ricard / Pernod Ricard",
      "category": "Rakı / Anis",
      "subcategory": "Pastis",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich / Marseille",
      "descriptionVisible": "Klassischer Ricard Pastis de Marseille mit Anis, Lakritz, Fenchel und mediterraner Kräuterwürze. Würzig, frisch und ideal mit kaltem Wasser und Eis als leichter französischer Aperitif.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Aperitif",
        "Pur"
      ],
      "alcoholPercent": 45,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-086-molinari-sambuca-extra",
      "number": "86",
      "name": "Molinari Sambuca Extra",
      "producer": "Molinari",
      "category": "Rakı / Anis",
      "subcategory": "Sambuca",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Italien",
      "descriptionVisible": "Italienischer Sambuca mit kräftigem Anis, Lakritz, Süße und feiner Gewürzwärme. Pur oder mit Kaffeebohnen zeigt er sein markantes Anisprofil; Dessert- und Espresso-Drinks ergänzt er um süße Würze.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Kaffee"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-087-tekirdag-no-10-raki",
      "number": "87",
      "name": "Tekirdağ No.10 Rakı",
      "producer": "Tekirdağ",
      "category": "Rakı / Anis",
      "subcategory": "Rakı",
      "amount": "1 Flasche",
      "originVisible": "Türkei",
      "originInternal": "Türkei",
      "descriptionVisible": "Türkischer Rakı mit klarer Anisprägung, trockener Würze und weichem Charakter. Mit kaltem Wasser und optional Eis serviert begleitet er Meze und Fisch mit einem trockenen, klaren Anisprofil.",
      "flavorTags": [
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Aperitif",
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 47.5,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-088-yeni-raki-ala",
      "number": "88",
      "name": "Yeni Rakı Âlâ",
      "producer": "Yeni Rakı",
      "category": "Rakı / Anis",
      "subcategory": "Rakı",
      "amount": "1 Flasche",
      "originVisible": "Türkei",
      "originInternal": "Türkei",
      "descriptionVisible": "Türkischer Rakı aus sonnengetrockneten Trauben mit klarer Anisprägung, feiner Frucht und weicher Würze. Mit kaltem Wasser und optional Eis serviert begleitet er Meze und Fisch mit klarer Anisnote und feiner Traubenfrucht.",
      "flavorTags": [
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Aperitif",
        "Digestif",
        "Pur"
      ],
      "alcoholPercent": 47,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-089-rewe-feine-welt-barbados-rum-8-years",
      "number": "89",
      "name": "REWE Feine Welt Barbados Rum 8 Years Old",
      "producer": "REWE Feine Welt",
      "category": "Rum / Cachaça",
      "subcategory": "Barbados Rum",
      "amount": "1 Flasche",
      "originVisible": "Barbados",
      "originInternal": "Barbados",
      "descriptionVisible": "Acht Jahre gereifter Barbados Rum von REWE Feine Welt mit 40 % Vol. Ein unkomplizierter brauner Rum für Rum-Highballs, Cuba Libre, einfache Tiki-/Tropical-Drinks oder pur auf Eis.",
      "flavorTags": [
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball",
        "Pur",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-090-el-dorado-3-year-old-white-rum",
      "number": "90",
      "name": "El Dorado 3 Year Old White Rum",
      "producer": "Demerara Distillers",
      "category": "Rum / Cachaça",
      "subcategory": "Weißer Rum",
      "amount": "1 Flasche",
      "originVisible": "Guyana",
      "originInternal": "Demerara",
      "descriptionVisible": "Weißer Demerara-Rum aus Guyana, drei Jahre gereift und anschließend klar gefiltert. In Daiquiri, Mojito, Rum Collins und hellen Rum-Cocktails verbindet er milde tropische Frucht mit einem leichten, klaren Profil.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-091-lebkuchen-rum",
      "number": "91",
      "name": "Bar Seibert’s Lebkuchen-Rum",
      "producer": "Bar Seibert's",
      "category": "Rum / Cachaça",
      "subcategory": "Aromatisierter Rum / Gewürzrum",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland / Bar Seibert’s Spezialprodukt",
      "descriptionVisible": "Würziger Lebkuchen-Rum von Bar Seibert’s mit dunkler Süße, Wintergewürzen und weicher Rumtiefe. Ideal für festliche Drinks, Dessertcocktails, Hot Serves und winterliche Rum-Varianten.",
      "flavorTags": [
        "Kräuterig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-092-old-pascas-jamaica-dark-rum",
      "number": "92",
      "name": "Old Pascas Jamaica Dark Rum",
      "producer": "Old Pascas / Borco",
      "category": "Rum / Cachaça",
      "subcategory": "Dark Jamaica Rum",
      "amount": "1 Flasche",
      "originVisible": "Jamaika",
      "originInternal": "Jamaika",
      "descriptionVisible": "Dunkler Jamaica-Rum mit tropischer Frucht, Melasse, Rosinen, milder Würze und Eichenholz. In Planter’s Punch, Mai Tai, Zombie und kräftigen Tiki-Drinks verbindet er dunkle Frucht mit süßer Melasse und feiner Eichenwürze.",
      "flavorTags": [
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 37.5,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-093-plantation-xo-20th-anniversary",
      "number": "93",
      "name": "Plantation XO 20th Anniversary",
      "producer": "Maison Ferrand",
      "category": "Rum / Cachaça",
      "subcategory": "Gereifter Barbados Rum",
      "amount": "1 Flasche",
      "originVisible": "Barbados",
      "originInternal": "Barbados / Ferrand Cognac Cask Finish",
      "descriptionVisible": "Barbados-Rum von Maison Ferrand mit Kokos, Banane, Aprikose, Vanille, Toast und weicher Eichenwürze. Pur, im Rum Old Fashioned oder in dunklen Rumdrinks treten reife Frucht, Vanille und geröstete Fassnoten klar hervor.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-094-cachaca-magnifica",
      "number": "94",
      "name": "Cachaça Magnífica",
      "producer": "Magnífica",
      "category": "Rum / Cachaça",
      "subcategory": "Cachaça",
      "amount": "1 Flasche",
      "originVisible": "Brasilien",
      "originInternal": "Rio de Janeiro",
      "descriptionVisible": "Brasilianische Cachaça Magnífica mit frischem Zuckerrohr, grasigen Noten, tropischer Frucht und trockenem Profil. In Caipirinha, Batidas, Cachaça Sour und tropischen Highballs bringt sie ihre klare Zuckerrohr- und Fruchtprägung ein.",
      "flavorTags": [
        "Fruchtig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-095-bols-grenadine-syrup",
      "number": "95",
      "name": "Bols Grenadine Syrup",
      "producer": "Bols",
      "category": "Sirup / Mixer",
      "subcategory": "Grenadine-Sirup",
      "amount": "1 Flasche",
      "originVisible": "Niederlande",
      "originInternal": "Niederlande / Holland",
      "descriptionVisible": "Roter Grenadine-Sirup von Bols mit Granatapfel, ausgeprägter Süße und intensiver Farbe. In Tequila Sunrise, Planter’s Punch, Zombie, Limonaden und alkoholfreien Drinks sorgt er für rote Frucht, Süße und einen kräftigen Farbton.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Modifier",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-096-giffard-sirop-sucre-de-canne",
      "number": "96",
      "name": "Giffard Sirop Sucre de Canne",
      "producer": "Giffard",
      "category": "Sirup / Mixer",
      "subcategory": "Rohrzuckersirup",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Klarer Rohrzuckersirup von Giffard mit sauberer Süße und feiner Zuckerrohrnote. In Daiquiri, Mojito, Ti’ Punch, Sours und Tiki-Drinks dient er als klare Süßung und unterstützt die Balance zwischen Säure und Spirituose.",
      "flavorTags": [
        "Süß"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-097-rewe-beste-wahl-spicy-ginger-beer",
      "number": "97",
      "name": "REWE Beste Wahl Spicy Ginger Beer",
      "producer": "REWE Beste Wahl",
      "category": "Sirup / Mixer",
      "subcategory": "Filler",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Würziges Ginger Beer von REWE Beste Wahl mit süßer Schärfe, frischem Ingwer und prickelnder Kohlensäure. In Dark ’n’ Stormy, Moscow Mule, Rum-Highballs und alkoholfreien Drinks bringt es Ingwerwürze, Frische und lebendige Kohlensäure ein.",
      "flavorTags": [
        "Kräuterig",
        "Süß"
      ],
      "usageTags": [
        "Longdrink & Highball",
        "Modifier"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-098-rewe-bio-limettensaft",
      "number": "98",
      "name": "REWE Bio Limettensaft",
      "producer": "REWE Bio / REWE",
      "category": "Saft",
      "subcategory": "Limettensaft",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland / Handelsprodukt",
      "descriptionVisible": "Direkter Limettensaft mit klarer Säure, grüner Zitrusfrische und sauberer Barfunktion. Praktisch für Daiquiri, Margarita, Gimlet, Caipirinha, Sours und alkoholfreie Drinks, wenn frische Limetten nicht verfügbar sind.",
      "flavorTags": [
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 250,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-099-monin-blue-curacao-sirup",
      "number": "99",
      "name": "Monin Blue Curaçao",
      "producer": "Monin",
      "category": "Sirup / Mixer",
      "subcategory": "Blue-Curaçao-Sirup",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Alkoholfreier Blue-Curaçao-Sirup von Monin mit leuchtend blauer Farbe und milder Orangennote. In Blue Lagoon, Swimming Pool, Tiki-Drinks, Limonaden und alkoholfreien Cocktails steuert er milde Orangenzitrusnoten, Süße und die auffällige blaue Optik bei.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Modifier",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-100-monin-creme-de-menthe-verte",
      "number": "100",
      "name": "Monin Crème de Menthe Verte",
      "producer": "Monin",
      "category": "Likör",
      "subcategory": "Minzlikör",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Grüne Crème de Menthe von Monin mit kühler Pfefferminze, frischer Kräuteraromatik und klarer Süße. Sparsam dosiert prägt sie Grasshopper-Varianten, Dessertdrinks und erfrischende Longdrinks mit markanter Minze und grüner Farbe.",
      "flavorTags": [
        "Kräuterig",
        "Süß"
      ],
      "usageTags": [
        "Longdrink & Highball",
        "Modifier"
      ],
      "alcoholPercent": 20,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-101-monin-gomme-syrup",
      "number": "101",
      "name": "Monin Gomme Syrup",
      "producer": "Monin",
      "category": "Sirup / Mixer",
      "subcategory": "Gomme-Sirup",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Gomme-Sirup von Monin mit feiner Süße, seidiger Textur und dezenter Orangenblütennote. In Sours, Daiquiris, Cold Brew und Lattes unterstützt das enthaltene Akaziengummi eine weichere Textur und gleichmäßige Süße.",
      "flavorTags": [
        "Floral",
        "Süß"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-102-monin-weisser-rohrzucker-sirup",
      "number": "102",
      "name": "Monin Weißer Rohrzucker Sirup",
      "producer": "Monin",
      "category": "Sirup / Mixer",
      "subcategory": "Sirup",
      "amount": "2 Flaschen",
      "originVisible": "Frankreich",
      "originInternal": "Frankreich",
      "descriptionVisible": "Klarer Rohrzuckersirup von Monin mit sauberer, neutraler Süße. In Daiquiri, Mojito, Sours, Fizz, Limonaden und Longdrinks ermöglicht er eine präzise Süßung und Balance, ohne dem Drink eine dominante Eigenaromatik zu geben.",
      "flavorTags": [
        "Süß"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball",
        "Modifier"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-103-pircher-holunderblueten-likoer",
      "number": "103",
      "name": "Pircher Holunderblüten Likör",
      "producer": "Pircher",
      "category": "Likör",
      "subcategory": "Holunderblütenlikör",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Südtirol",
      "descriptionVisible": "Südtiroler Holunderblütenlikör von Pircher mit floraler Süße und heller Blütenaromatik. Sparsam dosiert bringt er in Spritz-Varianten, Sours und leichten Aperitif-Drinks einen feinen Holunderblütenakzent ein.",
      "flavorTags": [
        "Fruchtig",
        "Floral",
        "Süß"
      ],
      "usageTags": [
        "Aperitif",
        "Frisch & Sour",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 21,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-104-riemerschmid-bar-sirup-mandel",
      "number": "104",
      "name": "Riemerschmid Bar-Sirup Mandel",
      "producer": "Riemerschmid",
      "category": "Sirup / Mixer",
      "subcategory": "Mandelsirup / Orgeat-Stil",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Mandelsirup von Riemerschmid mit Marzipan, feiner Bittermandel und dichter Süße. In Mai Tai, Orgeat-Drinks, Kaffeevarianten, Milchshakes und Dessertcocktails bringt er ausgeprägte Mandel- und Marzipanaromatik ein.",
      "flavorTags": [
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Modifier",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-105-riemerschmid-bar-sirup-vanille",
      "number": "105",
      "name": "Riemerschmid Bar-Sirup Vanille",
      "producer": "Riemerschmid",
      "category": "Sirup / Mixer",
      "subcategory": "Vanillesirup",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland",
      "descriptionVisible": "Vanille-Bar-Sirup von Riemerschmid mit weicher Süße, warmer Vanillenote und rundem Dessertcharakter. In Espresso Martini, Kaffee- und Dessertdrinks sowie alkoholfreien Milch- oder Kaffeevarianten bringt er eine weiche, warme Vanillesüße ein.",
      "flavorTags": [
        "Süß"
      ],
      "usageTags": [
        "Modifier"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-106-zitronensaft",
      "number": "106",
      "name": "Zitronensaft",
      "producer": "REWE Bio / Hitchcock",
      "category": "Saft",
      "subcategory": "Zitronensaft",
      "amount": "2 Flaschen",
      "originVisible": "Deutschland",
      "originInternal": "Handelsprodukt / unterschiedliche Anbieter",
      "descriptionVisible": "Zitronensaft mit klarer Säure, frischer Zitrusnote und sauberer Barfunktion. Praktisch für Whiskey Sour, Gin Sour, Collins, Fizz, Sidecar, alkoholfreie Sours und alle Drinks, die präzise Säure brauchen.",
      "flavorTags": [
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Modifier"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-107-jose-cuervo-especial-reposado",
      "number": "107",
      "name": "José Cuervo Especial Reposado",
      "producer": "José Cuervo",
      "category": "Tequila",
      "subcategory": "Reposado Tequila",
      "amount": "1 Flasche",
      "originVisible": "Mexiko",
      "originInternal": "Jalisco",
      "descriptionVisible": "Goldener Reposado-Tequila von José Cuervo mit gekochter Agave, weicher Vanille, leichter Eichenwürze und milder Süße. In Margarita, Tequila Highballs und einfachen Agaven-Drinks verbindet er Agavenaromatik mit Vanille und leichter Fasswürze.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 38,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-108-jose-cuervo-especial-silver",
      "number": "108",
      "name": "José Cuervo Especial Silver",
      "producer": "José Cuervo",
      "category": "Tequila",
      "subcategory": "Silver / Blanco Tequila",
      "amount": "1 Flasche",
      "originVisible": "Mexiko",
      "originInternal": "Jalisco",
      "descriptionVisible": "Klarer Silver-Tequila von José Cuervo mit frischer Agave, sauberer Struktur und mild-warmem Finish. In Margarita, Paloma, Tequila Soda und hellen Party-Drinks zeigt er ein klares, trockenes Agavenprofil.",
      "flavorTags": [
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 38,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-109-patron-anejo",
      "number": "109",
      "name": "Patrón Añejo",
      "producer": "Patrón Spirits",
      "category": "Tequila",
      "subcategory": "Añejo Tequila",
      "amount": "1 Flasche",
      "originVisible": "Mexiko",
      "originInternal": "Jalisco",
      "descriptionVisible": "Añejo-Tequila von Patrón aus 100 % Blue Weber Agave mit Eiche, Vanille, Rosine, Honig und feiner Würze. Pur, auf Eis oder im Tequila Old Fashioned verbindet er Agavencharakter mit Vanille, Rosine, Honig und sanfter Eichenprägung.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-110-graham-s-20-year-tawny-port",
      "number": "110",
      "name": "Graham’s 20 Year Old Tawny Port",
      "producer": "Graham's",
      "category": "Portwein / Sherry",
      "subcategory": "Port",
      "amount": "1 Flasche",
      "originVisible": "Portugal",
      "originInternal": "Douro",
      "descriptionVisible": "Zwanzigjähriger Tawny Port von Graham’s mit Nuss, reifer Frucht, Orangenschale, Toffee und sanfter Süße. Leicht gekühlt als Digestif oder zu Nüssen, Trockenfrüchten, Vanilleeis und Crème brûlée zeigt er sein nussig-fruchtiges Profil und einen langen Nachhall.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 20,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-111-lustau-pedro-ximenez-san-emilio",
      "number": "111",
      "name": "Lustau Pedro Ximénez San Emilio",
      "producer": "Lustau",
      "category": "Portwein / Sherry",
      "subcategory": "PX Sherry",
      "amount": "1 Flasche",
      "originVisible": "Spanien",
      "originInternal": "Jerez / Andalusien",
      "descriptionVisible": "Dunkler Pedro-Ximénez-Sherry von Lustau mit Feige, Rosine, Dattel, samtiger Süße und sehr langem Finish. Leicht gekühlt als Digestif, zu Blauschimmelkäse, Schokolade und Desserts oder über Vanilleeis verbindet er konzentrierte Trockenfrucht mit ausgeprägter, samtiger Süße.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 17,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-112-noilly-prat-dry",
      "number": "112",
      "name": "Noilly Prat Dry",
      "producer": "Noilly Prat",
      "category": "Vermouth",
      "subcategory": "Dry Vermouth",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Marseillan",
      "descriptionVisible": "Trockener französischer Vermouth mit feiner Kräuterwürze, heller Zitrusfrische und leicht floralen Noten. Gut gekühlt als Aperitif, mit Soda oder im Dry Martini zeigt er ein trockenes, zitrisch-kräuteriges Profil.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Floral",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Modifier",
        "Spirit-Forward"
      ],
      "alcoholPercent": 18,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-113-noilly-prat-rouge",
      "number": "113",
      "name": "Noilly Prat Rouge",
      "producer": "Noilly Prat",
      "category": "Vermouth",
      "subcategory": "Red Vermouth",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Marseillan",
      "descriptionVisible": "Roter französischer Vermouth mit süßer Orange, Zimt, Nelke, Kakao und feiner Kräuterbitterkeit. Gut gekühlt pur, mit Soda oder in Manhattan- und Negroni-Varianten treffen fruchtige Süße und warme Gewürze auf feine Bitterkeit im Ausklang.",
      "flavorTags": [
        "Bitter",
        "Fruchtig",
        "Kräuterig",
        "Süß"
      ],
      "usageTags": [
        "Aperitif",
        "Modifier",
        "Spirit-Forward"
      ],
      "alcoholPercent": 16,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-114-absolut-100",
      "number": "114",
      "name": "Absolut 100",
      "producer": "Absolut",
      "category": "Vodka",
      "subcategory": "Vodka",
      "amount": "1 Flasche",
      "originVisible": "Schweden",
      "originInternal": "Schweden / Åhus",
      "descriptionVisible": "Kräftiger Vodka von Absolut mit 50 % Vol., klarer Struktur und trockenem, alkoholstarkem Profil. In Moscow Mule, Vodka Sours, Highballs und Cosmopolitan-Varianten sorgt er für deutliche Präsenz und einen klaren, trockenen Charakter.",
      "flavorTags": [
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 50,
      "bottleSizeMl": 1000,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-115-absolut-elyx",
      "number": "115",
      "name": "Absolut Elyx",
      "producer": "Absolut",
      "category": "Vodka",
      "subcategory": "Vodka",
      "amount": "1 Flasche",
      "originVisible": "Schweden",
      "originInternal": "Schweden / Åhus",
      "descriptionVisible": "Vodka von Absolut aus südschwedischem Winterweizen, destilliert in historischen Kupferbrennblasen. Pur auf Eis, im Vodka Martini, mit Soda oder in klaren Highballs zeigt er seine weiche, seidige Textur und sein zurückhaltendes Profil.",
      "flavorTags": [
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball",
        "Pur"
      ],
      "alcoholPercent": 42.3,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-116-ukiyo-rice-vodka",
      "number": "116",
      "name": "Ukiyo Rice Vodka",
      "producer": "Ukiyo Spirits",
      "category": "Vodka",
      "subcategory": "Vodka",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan",
      "descriptionVisible": "Japanischer Reisvodka von Ukiyo mit milder Reisaromatik, weicher Textur und leicht floralem Profil. In Vodka Soda, Martini-Varianten und hellen Highballs bleibt sein feiner Reischarakter klar und zurückhaltend.",
      "flavorTags": [
        "Floral",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Longdrink & Highball"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-117-beyerskloof-synergy-cape-blend",
      "number": "117",
      "name": "Beyerskloof Synergy Cape Blend",
      "producer": "Beyerskloof",
      "category": "Wein / Champagner",
      "subcategory": "Rotwein / Cape Blend",
      "amount": "1 Flasche",
      "originVisible": "Südafrika",
      "originInternal": "Stellenbosch",
      "descriptionVisible": "Südafrikanischer Cape Blend von Beyerskloof mit roter Frucht, Pflaume, dunklen Beeren, weichen Tanninen und feiner Würze. Zu Grillgerichten und kräftigen Speisen zeigt er ein saftiges Fruchtprofil mit weicher Tanninstruktur.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Pur"
      ],
      "alcoholPercent": 14,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-118-les-granges-des-domaines-edmond-de-rothschild-2014",
      "number": "118",
      "name": "Les Granges des Domaines Edmond de Rothschild 2014",
      "producer": "Baron Edmond de Rothschild",
      "category": "Wein / Champagner",
      "subcategory": "Rotwein Bordeaux / Haut-Médoc",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Bordeaux / Haut-Médoc",
      "descriptionVisible": "Bordeaux-Rotwein von Baron Edmond de Rothschild mit dunkler Frucht, feinem Holz, Vanille, Tabak und klassischer Médoc-Struktur. Zu Rind, Lamm und Wild verbindet er dunkle Frucht mit würzigen Holz- und Tabaknoten.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Pur"
      ],
      "alcoholPercent": 13.5,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-119-chateau-bonalgue-pomerol-2018",
      "number": "119",
      "name": "Château Bonalgue Pomerol 2018",
      "producer": "Château Bonalgue",
      "category": "Wein / Champagner",
      "subcategory": "Rotwein Bordeaux / Pomerol",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Bordeaux / Pomerol",
      "descriptionVisible": "Pomerol aus Bordeaux mit dunkler Kirsche, Pflaume, feiner Würze und weichen Tanninen. Zu Rind, Lamm, Geflügel und Wild treten dunkle Frucht und eine samtige Tanninstruktur klar hervor.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Pur"
      ],
      "alcoholPercent": 14.5,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-120-la-monetta-gavi-2023",
      "number": "120",
      "name": "La Monetta Gavi 2023",
      "producer": "La Monetta / Araldica",
      "category": "Wein / Champagner",
      "subcategory": "Weißwein / Gavi",
      "amount": "1 Flasche",
      "originVisible": "Italien",
      "originInternal": "Piemont / Gavi",
      "descriptionVisible": "Italienischer Gavi aus Cortese mit weißer Blüte, grünem Apfel, weißem Pfirsich, feiner Mineralität und frischer Säure. Gut gekühlt als Aperitif sowie zu Fisch, Meeresfrüchten und leichten Vorspeisen verbindet er helle Frucht mit klarer Säure und feiner Mineralität.",
      "flavorTags": [
        "Fruchtig",
        "Floral",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Pur"
      ],
      "alcoholPercent": 11.5,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-121-juliusspital-silvaner-iphoefer-julius-echter-berg-2022",
      "number": "121",
      "name": "Juliusspital Silvaner Iphöfer Julius-Echter-Berg 2022",
      "producer": "Juliusspital",
      "category": "Wein / Champagner",
      "subcategory": "Weißwein / Silvaner",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Franken / Iphofen / Julius-Echter-Berg",
      "descriptionVisible": "Fränkischer Silvaner vom Juliusspital mit gelber Frucht, feiner Kräuterwürze, Mineralität und trockenem Finish. Gut gekühlt zu Spargel, Fisch, Gemüse oder hellem Fleisch verbindet er klare Frucht mit Kräuterwürze und mineralischer Prägung.",
      "flavorTags": [
        "Fruchtig",
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Aperitif",
        "Pur"
      ],
      "alcoholPercent": 13,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-122-veuve-monsigny-brut-reserve-champagner",
      "number": "122",
      "name": "Champagne Vve. Monsigny Brut Réserve",
      "producer": "Vve. Monsigny / S.A.S. Les Roches Blanches",
      "category": "Wein / Champagner",
      "subcategory": "Champagner Brut",
      "amount": "1 Flasche",
      "originVisible": "Frankreich",
      "originInternal": "Champagne / Oiry",
      "descriptionVisible": "Französischer Brut-Champagner von Vve. Monsigny mit feiner Perlage, frischer Zitrusnote, grünem Apfel und dezenter Brioche-Anmutung. Als Aperitif, zu kleinen Snacks oder bei festlichen Anlässen verbindet er klare Frucht mit einem trockenen Profil und feiner Brioche-Note.",
      "flavorTags": [
        "Fruchtig",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Aperitif",
        "Pur"
      ],
      "alcoholPercent": 12.5,
      "bottleSizeMl": 750,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-123-bulleit-bourbon-10-years",
      "number": "123",
      "name": "Bulleit Bourbon 10 Years",
      "producer": "Bulleit",
      "category": "Whisky",
      "subcategory": "Bourbon",
      "amount": "2 Flaschen",
      "originVisible": "USA",
      "originInternal": "Kentucky",
      "descriptionVisible": "Zehn Jahre gereifter Kentucky Straight Bourbon mit Vanille, getrockneter Frucht, Eiche und würziger Tiefe. Kräftig, rund und besonders passend pur, auf Eis oder in Old Fashioned- und Manhattan-Varianten.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 45.6,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-124-bulleit-rye",
      "number": "124",
      "name": "Bulleit Rye",
      "producer": "Bulleit",
      "category": "Whisky",
      "subcategory": "Rye Whiskey",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "USA / Rye Whiskey",
      "descriptionVisible": "Amerikanischer Rye Whiskey mit kräftiger Roggenwürze, trockener Struktur und klarer Cocktailrolle. In Manhattan, Old Fashioned, Sazerac-Varianten und anderen Spirit-Forward-Drinks bringt er ein trockenes, pfeffriges Roggenprofil ein.",
      "flavorTags": [
        "Kräuterig",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 45,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-125-glenfiddich-15-solera-reserve",
      "number": "125",
      "name": "Glenfiddich 15 Solera Reserve",
      "producer": "Glenfiddich",
      "category": "Whisky",
      "subcategory": "Scotch Single Malt",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Speyside",
      "descriptionVisible": "Speyside Single Malt mit Solera-Reifung, Honig, getrockneter Frucht, Vanille und Sherry-Anklängen. Pur als Digestif oder beim Tasting verbindet er reife Frucht und Honig mit warmer Gewürzprägung und sanfter Eichenwürze.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-126-glenmorangie-quinta-ruban-14",
      "number": "126",
      "name": "Glenmorangie Quinta Ruban 14",
      "producer": "Glenmorangie",
      "category": "Whisky",
      "subcategory": "Highland Single Malt",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Highlands",
      "descriptionVisible": "Highland Single Malt mit Portweinfass-Finish, dunkler Schokolade, Orange, Walnuss und schwarzem Pfeffer. Pur als Digestif oder zu dunkler Schokolade verbindet er Portweinfrucht mit Kakao, Nuss und markanter Pfefferwürze.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 46,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-127-jack-daniels-tennessee-honey",
      "number": "127",
      "name": "Jack Daniel’s Tennessee Honey",
      "producer": "Jack Daniel’s",
      "category": "Whisky",
      "subcategory": "Tennessee Whiskey Liqueur",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "Tennessee",
      "descriptionVisible": "Tennessee-Whiskey-Likör von Jack Daniel’s mit Honig, Vanille, milder Süße und weichem Whiskey-Finish. Pur auf Eis, in Highballs, Hot Drinks oder süßen Whiskey-Mixes bringt er Honigsüße und eine milde Whiskey-Prägung ein.",
      "flavorTags": [
        "Fruchtig",
        "Süß"
      ],
      "usageTags": [
        "Digestif",
        "Longdrink & Highball",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 35,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-128-jack-daniel-s-tennessee-apple",
      "number": "128",
      "name": "Jack Daniel’s Tennessee Apple",
      "producer": "Jack Daniel’s",
      "category": "Whisky",
      "subcategory": "Tennessee Whiskey Liqueur",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "Tennessee",
      "descriptionVisible": "Apfel-Whiskey-Likör von Jack Daniel’s mit knackig-frischem grünem Apfel, milder Süße und leichter Eichenwürze. Pur auf Eis, mit Tonic, Ginger Ale oder in Highballs verbindet er Apfelfrische mit einer milden Whiskey-Note.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Zitrisch"
      ],
      "usageTags": [
        "Longdrink & Highball",
        "Modifier",
        "Pur"
      ],
      "alcoholPercent": 35,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-129-johnnie-walker-18-years",
      "number": "129",
      "name": "Johnnie Walker 18 Years",
      "producer": "Johnnie Walker",
      "category": "Whisky",
      "subcategory": "Blended Scotch",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Schottland / Blend",
      "descriptionVisible": "Achtzehnjähriger Blended Scotch von Johnnie Walker mit süßer Frucht, cremiger Textur, Gewürzen und feinem Rauch. Pur, auf Eis oder als Digestif verbindet er reife Frucht mit Toffee, Karamell und einer zurückhaltenden Rauchnote.",
      "flavorTags": [
        "Fruchtig",
        "Rauchig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-130-johnnie-walker-blue-label",
      "number": "130",
      "name": "Johnnie Walker Blue Label",
      "producer": "Johnnie Walker",
      "category": "Whisky",
      "subcategory": "Blended Scotch",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Schottland / Blend",
      "descriptionVisible": "Blended Scotch von Johnnie Walker mit Vanille, Honig, floralen Noten, seidiger Süße und feinem Rauch. Pur oder beim Tasting verbindet er weiche Süße mit einem Rosenblütenanklang und einer zurückhaltenden Rauchnote.",
      "flavorTags": [
        "Floral",
        "Rauchig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-131-johnnie-walker-gold-label-reserve",
      "number": "131",
      "name": "Johnnie Walker Gold Label Reserve",
      "producer": "Johnnie Walker",
      "category": "Whisky",
      "subcategory": "Blended Scotch",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Schottland / Blend",
      "descriptionVisible": "Blended Scotch von Johnnie Walker mit Honig, Karamell, Vanille, reifer Frucht und leichtem Rauch. Pur, auf Eis oder in Scotch-Highballs verbindet er süße Honig- und Karamellnoten mit reifer Frucht und dezenter Rauchigkeit.",
      "flavorTags": [
        "Fruchtig",
        "Rauchig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Longdrink & Highball",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-132-knob-creek-9",
      "number": "132",
      "name": "Knob Creek 9 Kentucky Straight Bourbon Whiskey",
      "producer": "Knob Creek / Jim Beam / Beam Suntory",
      "category": "Whisky",
      "subcategory": "Bourbon",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "Kentucky / Clermont",
      "descriptionVisible": "Neunjähriger Kentucky Straight Bourbon von Knob Creek mit kräftiger Eiche, Vanille, Karamell, gerösteter Nuss und markanter Würze. Pur, auf Eis oder in Old Fashioned und Manhattan bleibt er trocken, kraftvoll und klar von Eiche und Würze geprägt.",
      "flavorTags": [
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 50,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-133-legent-bourbon",
      "number": "133",
      "name": "Legent Kentucky Straight Bourbon Whiskey",
      "producer": "Legent Distilling Co. / Suntory Global Spirits",
      "category": "Whisky",
      "subcategory": "Bourbon",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "Kentucky / Wine & Sherry Cask Finish",
      "descriptionVisible": "Kentucky Straight Bourbon mit Vanille, Karamell, dunkler Frucht und feiner Eiche, veredelt durch Wein- und Sherryfass-Finish. Pur, auf Eis oder in Old Fashioned-, Manhattan- und Whiskey-Sour-Varianten verbindet er klassische Bourbonaromatik mit zusätzlicher Frucht- und Sherryprägung.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 47,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-134-maker-s-mark-46",
      "number": "134",
      "name": "Maker’s Mark 46",
      "producer": "Maker’s Mark",
      "category": "Whisky",
      "subcategory": "Bourbon",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "Kentucky",
      "descriptionVisible": "Bourbon mit Vanille, Karamell, gerösteter Eiche und warmer Zimtwürze, geprägt durch französische Eichenstäbe. Pur, auf Eis oder im Old Fashioned verbindet er weiche Textur mit süßer Würze und klarer Eichenprägung.",
      "flavorTags": [
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 47,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-135-nikka-from-the-barrel",
      "number": "135",
      "name": "Nikka From The Barrel",
      "producer": "Nikka",
      "category": "Whisky",
      "subcategory": "Japanese Whisky",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan / Blend",
      "descriptionVisible": "Japanischer Blended Whisky mit Orange, Vanille, Karamell, dunkler Frucht und feiner Würze. Pur, mit wenigen Tropfen Wasser oder im Japanese Highball zeigt er ein konzentriertes Profil mit klarer Frucht- und Gewürzprägung.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 51.4,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-136-nikka-miyagikyo-single-malt",
      "number": "136",
      "name": "Nikka Miyagikyo Single Malt",
      "producer": "Nikka Whisky / The Nikka Whisky Distilling Co., Ltd.",
      "category": "Whisky",
      "subcategory": "Japanese Single Malt",
      "amount": "1 Flasche",
      "originVisible": "Japan",
      "originInternal": "Japan / Miyagikyo Distillery",
      "descriptionVisible": "Japanischer Single Malt von Nikka aus der Miyagikyo Distillery mit Apfelfrucht, floralen Noten, weicher Malzsüße und dezenter Würze. Pur oder mit wenigen Tropfen Wasser zeigt er ein feines, fruchtig-florales Profil.",
      "flavorTags": [
        "Fruchtig",
        "Floral",
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 45,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-137-the-balvenie-caribbean-cask-14",
      "number": "137",
      "name": "The Balvenie Caribbean Cask 14",
      "producer": "The Balvenie / William Grant & Sons",
      "category": "Whisky",
      "subcategory": "Speyside Single Malt",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Speyside / Dufftown / Rumfass-Finish",
      "descriptionVisible": "Speyside Single Malt von The Balvenie mit Rumfass-Finish, Honig, Vanille, Toffee, tropischer Frucht und weicher Eichenwürze. Pur als Digestif oder beim Tasting verbindet er Honigsüße und Toffee mit tropischer Frucht und weicher Eichenprägung.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken",
        "Nussig"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 43,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-138-the-dalmore-port-wood-reserve",
      "number": "138",
      "name": "The Dalmore Port Wood Reserve",
      "producer": "The Dalmore",
      "category": "Whisky",
      "subcategory": "Highland Single Malt",
      "amount": "1 Flasche",
      "originVisible": "Schottland",
      "originInternal": "Highlands / Port Wood Finish",
      "descriptionVisible": "Highland Single Malt von The Dalmore mit Portweinfass-Einfluss, roten Beeren, Sevilla-Orange, Karamell und feiner Eichenwürze. Pur als Digestif oder zu dunkler Schokolade zeigen sich Sevilla-Orange, rote Beeren und Toffee über einer dunklen, süßen Fruchtnote.",
      "flavorTags": [
        "Fruchtig",
        "Süß",
        "Trocken",
        "Zitrisch"
      ],
      "usageTags": [
        "Digestif",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 46.5,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-139-woodford-reserve-distillers-select-kentucky-straight-bourbon-whiskey",
      "number": "139",
      "name": "Woodford Reserve Distiller’s Select Kentucky Straight Bourbon Whiskey",
      "producer": "Woodford Reserve / Brown-Forman",
      "category": "Whisky",
      "subcategory": "Bourbon",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "Kentucky / Woodford County",
      "descriptionVisible": "Kentucky Straight Bourbon von Woodford Reserve mit Vanille, Karamell, Orange, Eiche, feiner Würze und nussiger Tiefe. Rund, elegant und vielseitig – ideal pur, auf Eis oder in Old Fashioned-, Manhattan- und Whiskey-Sour-Varianten.",
      "flavorTags": [
        "Süß",
        "Trocken",
        "Zitrisch",
        "Nussig"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Frisch & Sour",
        "Pur",
        "Spirit-Forward"
      ],
      "alcoholPercent": 43.2,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-140-rewe-beste-wahl-holunderbluete-getraenkesirup",
      "number": "140",
      "name": "REWE Beste Wahl Holunderblüte Getränkesirup",
      "producer": "REWE Beste Wahl",
      "category": "Sirup / Mixer",
      "subcategory": "Sirup",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland / Handelsprodukt",
      "descriptionVisible": "Alkoholfreier Holunderblüten-Getränkesirup von REWE Beste Wahl mit floraler Süße, heller Blütenaromatik und frischer Säure. Sparsam dosiert bringt er in Spritz-Drinks, Limonaden, alkoholfreie Aperitifs und leichte Highballs einen feinen Holunderblütenakzent ein.",
      "flavorTags": [
        "Floral",
        "Süß"
      ],
      "usageTags": [
        "Longdrink & Highball",
        "Modifier",
        "Spritz"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 500,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-141-riemerschmid-rohrzucker-bar-sirup",
      "number": "141",
      "name": "Riemerschmid Rohrzucker Bar-Sirup",
      "producer": "Riemerschmid",
      "category": "Sirup / Mixer",
      "subcategory": "Sirup",
      "amount": "1 Flasche",
      "originVisible": "Deutschland",
      "originInternal": "Deutschland / Erding",
      "descriptionVisible": "Klarer Rohrzucker-Bar-Sirup von Riemerschmid mit sauberer Süße und dezenter Zuckerrohrprägung. In Daiquiri, Mojito, Ti’ Punch, Sours und Fizz ermöglicht er eine gleichmäßige Süßung und unterstützt die Balance zwischen Säure und Spirituose.",
      "flavorTags": [
        "Süß"
      ],
      "usageTags": [
        "Frisch & Sour",
        "Longdrink & Highball",
        "Modifier",
        "Tiki & Tropical"
      ],
      "alcoholPercent": 0,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    },
    {
      "id": "csv-142-western-gold-kentucky-bourbon-whiskey",
      "number": "142",
      "name": "Western Gold Bourbon Whiskey 5 Jahre",
      "producer": "Western Gold / Lidl",
      "category": "Whisky",
      "subcategory": "Bourbon",
      "amount": "1 Flasche",
      "originVisible": "USA",
      "originInternal": "Kentucky / USA",
      "descriptionVisible": "Fünf Jahre gereifter Kentucky Bourbon mit Vanille, Karamell, milder Süße und leichter Eichenwürze. Pur auf Eis sowie in Whiskey Cola, Bourbon-Highballs und einfachen Old-Fashioned-Varianten zeigt er ein geradliniges, zugängliches Bourbonprofil.",
      "flavorTags": [
        "Süß",
        "Trocken"
      ],
      "usageTags": [
        "Cocktailbasis",
        "Longdrink & Highball",
        "Pur"
      ],
      "alcoholPercent": 40,
      "bottleSizeMl": 700,
      "appDataQuality": "APP_READY"
    }
  ],
  "glassCatalog": [
    {
      "id": "EQ-GLAS-001",
      "name": "Schnapsglas Typ 1",
      "family": "SCHNAPSGLAS",
      "primaryRole": "SHOT_SCHNAPS",
      "secondaryRole": null,
      "count": 12,
      "volumeFullMl": 50,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-002",
      "name": "Degustations-/Nosingglas",
      "family": "NOSING_DEGUSTATION",
      "primaryRole": "SPIRITUOSEN_TASTING",
      "secondaryRole": null,
      "count": 6,
      "volumeFullMl": 210,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-003",
      "name": "Weißweinglas",
      "family": "WEISSWEINGLAS",
      "primaryRole": "WEISSWEIN",
      "secondaryRole": null,
      "count": 6,
      "volumeFullMl": 470,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-004",
      "name": "Rotweinglas groß",
      "family": "ROTWEINGLAS",
      "primaryRole": "ROTWEIN",
      "secondaryRole": null,
      "count": 4,
      "volumeFullMl": 800,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-005",
      "name": "Sektglas / Flöte",
      "family": "SEKT_FLOETE",
      "primaryRole": "SEKT_CHAMPAGNER",
      "secondaryRole": null,
      "count": 4,
      "volumeFullMl": 200,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-006",
      "name": "Longdrinkglas Typ 1",
      "family": "LONGDRINK_HIGHBALL",
      "primaryRole": "LONGDRINK_HIGHBALL",
      "secondaryRole": null,
      "count": 5,
      "volumeFullMl": 300,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-007",
      "name": "Longdrinkglas Typ 2",
      "family": "LONGDRINK_HIGHBALL",
      "primaryRole": "LONGDRINK_HIGHBALL",
      "secondaryRole": null,
      "count": 5,
      "volumeFullMl": 350,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-008",
      "name": "Gin-Tonic-Kelch / Copa",
      "family": "GIN_TONIC_COPA",
      "primaryRole": "GIN_TONIC_COPA",
      "secondaryRole": "GROSSES_ROTWEINGLAS",
      "count": 6,
      "volumeFullMl": 700,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-009",
      "name": "Grappa-/Likörglas",
      "family": "GRAPPA_LIKOER",
      "primaryRole": "GRAPPA_LIKOER_DIGESTIF",
      "secondaryRole": null,
      "count": 5,
      "volumeFullMl": 90,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-010",
      "name": "Martiniglas",
      "family": "MARTINIGLAS",
      "primaryRole": "MARTINI_COCKTAIL",
      "secondaryRole": null,
      "count": 6,
      "volumeFullMl": 210,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-011",
      "name": "Tumbler Typ 1",
      "family": "TUMBLER_ROCKS",
      "primaryRole": "TUMBLER_ROCKS",
      "secondaryRole": null,
      "count": 4,
      "volumeFullMl": 300,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-012",
      "name": "Tumbler Typ 2",
      "family": "TUMBLER_ROCKS",
      "primaryRole": "TUMBLER_ROCKS",
      "secondaryRole": null,
      "count": 4,
      "volumeFullMl": 350,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-GLAS-013",
      "name": "Schnapsglas Typ 2",
      "family": "SCHNAPSGLAS",
      "primaryRole": "SHOT_SCHNAPS",
      "secondaryRole": null,
      "count": 6,
      "volumeFullMl": 60,
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    }
  ],
  "toolCatalog": [
    {
      "id": "EQ-WERK-001",
      "name": "Cobbler-Shaker, 3-teilig",
      "family": "SHAKER",
      "primaryRole": "SHAKEN",
      "count": 1,
      "stockForm": "SET",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-002",
      "name": "Zweiteiliger Shaker Metall/Metall",
      "family": "SHAKER",
      "primaryRole": "SHAKEN",
      "count": 1,
      "stockForm": "SET",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-003",
      "name": "Zweiteiliger Shaker Metall/Glas",
      "family": "SHAKER",
      "primaryRole": "SHAKEN",
      "count": 1,
      "stockForm": "SET",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-004",
      "name": "Barlöffel",
      "family": "BARLOEFFEL",
      "primaryRole": "RUEHREN",
      "count": 3,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-005",
      "name": "Doppel-Jigger",
      "family": "JIGGER",
      "primaryRole": "ABMESSEN",
      "count": 4,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-006",
      "name": "Hawthorne-Strainer",
      "family": "STRAINER",
      "primaryRole": "ABSEIHEN",
      "count": 2,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-007",
      "name": "Feinsieb / Fine Strainer",
      "family": "FEINSIEB",
      "primaryRole": "FEIN_ABSEIHEN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-008",
      "name": "Muddler / Stößel",
      "family": "MUDDLER",
      "primaryRole": "MUDDELN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-009",
      "name": "Glaspipette mit Gummiball",
      "family": "PIPETTE",
      "primaryRole": "DOSIEREN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-010",
      "name": "Flaschenausgießer",
      "family": "AUSGIESSER",
      "primaryRole": "AUSGIESSEN",
      "count": 4,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-011",
      "name": "Flaschenverschluss / Stopfen",
      "family": "FLASCHENVERSCHLUSS",
      "primaryRole": "VERSCHLIESSEN",
      "count": 2,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-012",
      "name": "Kellnermesser / Korkenzieher",
      "family": "KELLNERMESSER_KORKENZIEHER",
      "primaryRole": "KORKENZIEHEN_OEFFNEN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-013",
      "name": "Flaschenöffner",
      "family": "FLASCHENOEFFNER",
      "primaryRole": "OEFFNEN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-014",
      "name": "Barzange",
      "family": "BARZANGE",
      "primaryRole": "GREIFEN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-015",
      "name": "Schmale Reinigungsbürste für Barzubehör",
      "family": "REINIGUNGSBUERSTE",
      "primaryRole": "REINIGEN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-016",
      "name": "Metall-Cocktailspieße / Garniturspieße",
      "family": "COCKTAILSPIESS",
      "primaryRole": "GARNIEREN",
      "count": 30,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-017",
      "name": "Eiseimer mit Deckel",
      "family": "EISEIMER",
      "primaryRole": "EIS_AUFBEWAHREN",
      "count": 1,
      "stockForm": "SET",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    },
    {
      "id": "EQ-WERK-018",
      "name": "Rührglas / Mixing Glass",
      "family": "RUEHRGLAS",
      "primaryRole": "RUEHREN",
      "count": 1,
      "stockForm": "STUECK",
      "stockConfirmed": "JA",
      "identificationStatus": "REAL_BESTAETIGT"
    }
  ],
  "recipes": [
    {
      "id": "roh-hist-001-negroni",
      "name": "Negroni",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "GIN",
          "flavors": [
            "BITTER",
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Gin",
          "flavors": [
            "Bitter",
            "Kräuterig",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Kräftige Bitterorange, würzige Kräuter und feiner Wacholder prägen diesen italienischen Aperitifklassiker mit langem, angenehm herbem Nachklang.",
        "portrait": "Florenz, kurz nach dem Ersten Weltkrieg. Einer bekannten Geschichte zufolge wollte Graf Camillo Negroni seinen gewohnten Americano kräftiger genießen. Barkeeper Fosco Scarselli soll daraufhin das Sodawasser durch Gin ersetzt haben. Ob sich alles genau so zugetragen hat, ist umstritten. Der Cocktail wurde dennoch zu einem festen Bestandteil italienischer Barkultur.\n\nSein Charakter ist unverkennbar: Bitterorange und würzige Kräuter treffen auf die klare Wacholdernote des Gins. Der rote Wermut bringt eine weiche Süße ins Spiel, die den kräftigen Bittertönen Raum lässt, ohne sie zu überdecken. Mit jedem Schluck entwickelt sich ein aromatischer, angenehm herber Nachklang.\n\nDer Negroni passt besonders gut zum frühen Abend, wenn ein Aperitif ruhig etwas Charakter zeigen darf. Sein bekanntes Geheimnis ist die Einfachheit: drei gleich große Anteile, die gemeinsam ein überraschend vielschichtiges Geschmackserlebnis ergeben."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-038-tanqueray-london-dry-gin",
            "inventoryName": "Tanqueray London Dry Gin"
          },
          "evidence": "quelle-web-negroni-iba | v7.66"
        },
        {
          "position": 2,
          "name": "Campari",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-003-campari",
            "inventoryName": "Campari"
          },
          "evidence": "quelle-web-negroni-iba | v7.66"
        },
        {
          "position": 3,
          "name": "süßer roter Wermut",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "quelle-web-negroni-iba | v7.66"
        }
      ],
      "preparation": {
        "housebarText": "Tumbler Typ 1 mit Eis füllen. 30 ml Tanqueray London Dry Gin, 30 ml Campari und 30 ml Noilly Prat Rouge direkt ins Glas geben und mit dem Barlöffel sanft verrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "Tumbler Typ 2",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eiswürfel im Tumbler",
        "garnish": "halbe Orangenscheibe",
        "equipment": {
          "requirementText": "EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-negroni-iba"
      }
    },
    {
      "id": "roh-hist-003-aviation",
      "name": "Aviation",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "GIN",
          "flavors": [
            "FLORAL",
            "TROCKEN",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Gin",
          "flavors": [
            "Floral",
            "Trocken",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Floraler Gin-Sour mit Maraschino, Zitrone und fein dosierter Crème de Violette: duftig, zitrisch und trocken-balanciert.",
        "portrait": "Zu Beginn des 20. Jahrhunderts war die Luftfahrt noch ein Abenteuer. In dieser Zeit tauchte in New York ein Cocktail auf, dessen Name an die Begeisterung für das Fliegen erinnert: die Aviation. Barkeeper Hugo Ensslin veröffentlichte seine Rezeptur 1916, als die moderne Cocktailkultur gerade ihre ersten großen Klassiker hervorbrachte.\n\nSchon der Duft verrät, dass dieser Drink etwas Besonderes ist. Frische Zitrone trifft auf Wacholder, eine feine Kirschmandelnote und den zurückhaltenden Duft von Veilchen. Die floralen Aromen bleiben dezent, während die lebendige Säure dem Cocktail Frische und einen klaren, trockenen Abgang verleiht.\n\nDie Aviation eignet sich für einen entspannten Aperitif oder für Gäste, die gerne ungewöhnliche Aromen entdecken. Interessant ist ihre wechselvolle Rezeptgeschichte: In späteren Fassungen verschwand der Veilchenlikör zeitweise vollständig."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-038-tanqueray-london-dry-gin",
            "inventoryName": "Tanqueray London Dry Gin"
          },
          "evidence": "quelle-web-aviation-iba | v7.66"
        },
        {
          "position": 2,
          "name": "Luxardo Maraschino",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-068-luxardo-maraschino",
            "inventoryName": "Luxardo Maraschino"
          },
          "evidence": "quelle-web-aviation-iba | v7.66"
        },
        {
          "position": 3,
          "name": "Crème de Violette",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-062-giffard-creme-de-violette",
            "inventoryName": "Giffard Crème de Violette"
          },
          "evidence": "quelle-web-aviation-iba | quelle-web-aviation-diageo-barspoon | v7.66"
        },
        {
          "position": 4,
          "name": "frischer Zitronensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-aviation-iba | Manifest M-014"
        }
      ],
      "preparation": {
        "housebarText": "45 ml Tanqueray London Dry Gin, 15 ml Luxardo Maraschino, 5 ml Giffard Crème de Violette und 15 ml frischen Zitronensaft mit Eis im vorhandenen Shaker kräftig shaken und in das gekühlte Martiniglas abseihen. Beim zweiteiligen Shaker das Hawthorne-Barsieb verwenden; beim Cobbler ist kein zusätzliches Barsieb Pflicht."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": "Maraschino-Kirsche",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-aviation-iba"
      }
    },
    {
      "id": "roh-hist-004-last-word",
      "name": "Last Word",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "GIN",
          "flavors": [
            "KRAEUTERIG",
            "ZITRISCH"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Gin",
          "flavors": [
            "Kräuterig",
            "Zitrisch"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Intensive Kräuteraromen treffen auf frische Limette und feine Kirschmandelnoten – ein charaktervoller Klassiker mit überraschend lebendiger Frische.",
        "portrait": "Detroit, 1916. Auf einer Cocktailkarte des Detroit Athletic Club taucht ein Name auf, der Jahrzehnte später erneut für Aufmerksamkeit sorgen sollte: Last Word. Der Drink verschwand lange aus dem Blickfeld, bevor ihn die moderne Barszene wiederentdeckte.\n\nSeine Aromatik ist ungewöhnlich dicht. Die kräftigen Kräuternoten der grünen Chartreuse treffen auf frische Limette, Wacholder und die feine Kirschmandelnote des Maraschino. Jeder Bestandteil behauptet sich, ohne die anderen zu verdrängen. Der erste Schluck wirkt lebendig und zitrisch, anschließend entwickeln sich würzige Kräuternoten mit einem langen, leicht herben Nachklang.\n\nWer klassische Sours mag und neue Aromen entdecken möchte, findet hier einen anspruchsvollen Aperitif. Das Besondere: Vier Zutaten zu gleichen Teilen ergeben einen Cocktail, dessen Balance erstaunlich präzise wirkt."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-038-tanqueray-london-dry-gin",
            "inventoryName": "Tanqueray London Dry Gin"
          },
          "evidence": "quelle-web-lastword-iba | v7.66"
        },
        {
          "position": 2,
          "name": "Chartreuse Verte",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-056-chartreuse-verte",
            "inventoryName": "Chartreuse Verte"
          },
          "evidence": "quelle-web-lastword-iba | v7.66"
        },
        {
          "position": 3,
          "name": "Luxardo Maraschino",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-068-luxardo-maraschino",
            "inventoryName": "Luxardo Maraschino"
          },
          "evidence": "quelle-web-lastword-iba | v7.66"
        },
        {
          "position": 4,
          "name": "frischer Limettensaft",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-lastword-iba | Manifest M-014"
        }
      ],
      "preparation": {
        "housebarText": "Je 22,5 ml Tanqueray London Dry Gin, Chartreuse Verte, Luxardo Maraschino und frischen Limettensaft mit Eis im vorhandenen Shaker shaken und in das gekühlte Martiniglas abseihen. Beim zweiteiligen Shaker das Hawthorne-Barsieb verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": "",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-lastword-iba"
      }
    },
    {
      "id": "roh-hist-005-boulevardier",
      "name": "Boulevardier",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "BITTER",
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Bitter",
            "Kräuterig",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Ein kräftiger Whiskeyklassiker mit würziger Rye-Note, Bitterorange und der sanften Kräutersüße von rotem Wermut.",
        "portrait": "Im Paris der 1920er-Jahre trafen sich amerikanische Schriftsteller, Künstler und Reisende in den Bars der Stadt. Zu ihnen gehörte Erskine Gwynne, Herausgeber des Magazins The Boulevardier. Mit seinem Namen wurde 1927 ein Cocktail veröffentlicht, der bis heute an diese Zeit erinnert.\n\nDer Boulevardier besitzt die bittersüße Seele eines Negroni, wirkt durch den Whiskey jedoch wärmer und voller. In dieser Hausbarfassung bringt Rye eine würzige, leicht pfeffrige Note mit. Bitterorange, italienische Kräuter und die sanfte Süße des roten Wermuts verbinden sich zu einem kräftigen, langen Geschmack.\n\nEr passt zu einem ruhigen Abend, wenn der Drink etwas mehr Tiefe haben darf. Interessant ist seine Entwicklung: Die frühe Rezeptur verwendete Bourbon zu gleichen Dritteln, während die heutige Hausbarfassung Rye bevorzugt."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Rye Whiskey",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-124-bulleit-rye",
            "inventoryName": "Bulleit Rye"
          },
          "evidence": "quelle-web-boulevardier-iba | v7.66"
        },
        {
          "position": 2,
          "name": "Campari",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-003-campari",
            "inventoryName": "Campari"
          },
          "evidence": "quelle-web-boulevardier-iba | v7.66"
        },
        {
          "position": 3,
          "name": "süßer roter Wermut",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "quelle-web-boulevardier-iba | v7.66"
        }
      ],
      "preparation": {
        "housebarText": "45 ml Bulleit Rye, 30 ml Campari und 30 ml Noilly Prat Rouge im real vorhandenen Rührglas mit Eis gründlich verrühren und mit dem Hawthorne-Barsieb in das gekühlte Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Rühren; serviert ohne Eis",
        "garnish": "Orangenzeste; alternativ Zitronenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-018; EQ-WERK-004; EQ-WERK-006",
          "referenceIds": [
            "EQ-WERK-018",
            "EQ-WERK-004",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die Hausbar verwendet 45/30/30 ml mit Rye statt der historischen Equal-Parts-Fassung mit Bourbon."
      },
      "trace": {
        "primarySourceId": "quelle-web-boulevardier-iba"
      }
    },
    {
      "id": "pisco-sour",
      "name": "Pisco Sour",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "BRANDY_WEINBRAND",
          "flavors": [
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Brandy & Weinbrand",
          "flavors": [
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Aromatischer Pisco Sour mit frischer Zitrone, Rohrzuckersirup und Eiweiß: zitrisch, weich und mit seidiger Schaumkrone.",
        "portrait": "In den Bars von Lima entwickelte sich der Pisco Sour zu einem festen Bestandteil der peruanischen Cocktailkultur. Morris’ Bar machte ihn im frühen 20. Jahrhundert bekannt. Ähnliche Mischungen waren allerdings schon zuvor dokumentiert, weshalb seine genaue Entstehung bis heute diskutiert wird.\n\nSein Reiz liegt im Zusammenspiel von Frische und weicher Textur. Der aromatische Pisco bringt fruchtige, leicht florale Noten mit, während Zitrone für lebendige Säure sorgt. Eine feine Süße rundet den Geschmack ab. Die seidige Schaumkrone macht jeden Schluck geschmeidig und verleiht dem Drink einen besonders angenehmen Nachklang.\n\nEin schöner Aperitif für Gäste, die klassische Sours mit etwas mehr Charakter mögen. Wissenswert: Pisco wird aus Trauben hergestellt und kann je nach Rebsorte sehr unterschiedliche Aromen zeigen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Pisco",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-081-barsol-pisco-mosto-verde-quebranta",
            "inventoryName": "Barsol Pisco Mosto Verde Quebranta"
          },
          "evidence": "SRC-PS-IBA | v7.66"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "SRC-PS-IBA | Manifest M-014"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "SRC-PS-IBA | v7.66 | Manifest M-016"
        },
        {
          "position": 4,
          "name": "Eiweiß",
          "amount": 1,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "SRC-PS-IBA | Manifest M-014/M-009"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Barsol Pisco Mosto Verde Quebranta, 30 ml frischen Zitronensaft, 20 ml Riemerschmid Rohrzucker Bar-Sirup und 1 Eiweiß mit Eis im vorhandenen Shaker kräftig shaken und in das gekühlte Martiniglas abseihen. Beim zweiteiligen Shaker das Hawthorne-Barsieb verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": "EQ-GLAS-002",
            "text": "Degustations-/Nosingglas",
            "catalogName": "Degustations-/Nosingglas"
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": "",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die Hausbar serviert im Martiniglas statt im Goblet-Glas; die Amargo-Bitters-Garnitur wird nicht als Pflicht übernommen."
      },
      "trace": {
        "primarySourceId": "SRC-PS-IBA"
      }
    },
    {
      "id": "caipirinha",
      "name": "Caipirinha",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "RUM_CANE",
          "flavors": [
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Rum & Cane",
          "flavors": [
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Brasilianischer Cachaça-Drink aus Limette, Zucker, Eis und Zuckerrohrbrand – direkt im Glas gebaut.",
        "portrait": "Die Caipirinha gehört zu Brasilien wie die Cachaça, aus der sie entsteht. Ihre Wurzeln werden häufig im ländlichen São Paulo vermutet. Andere Geschichten führen zu einfachen Hausmitteln aus der Zeit der Spanischen Grippe. Welche Version stimmt, bleibt offen. Aus dem ursprünglich schlichten Drink wurde jedenfalls ein Klassiker, der weit über Brasilien hinaus bekannt ist.\n\nFrisch angeschnittene Limetten bestimmen seinen Duft. Ihre lebendige Säure trifft auf die natürliche Süße des Zuckers und die charakteristischen Aromen des Zuckerrohrbrands. Je nach Cachaça zeigen sich grasige, fruchtige oder leicht würzige Noten. Das Eis mildert die Intensität, ohne den kräftigen Charakter zu verdecken.\n\nAn einem warmen Abend mit Freunden passt die Caipirinha besonders gut. Ihr Geheimnis liegt in der Frische und der Qualität der wenigen Zutaten."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Cachaça",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-094-cachaca-magnifica",
            "inventoryName": "Cachaça Magnífica"
          },
          "evidence": "quelle-web-caipirinha-iba | v7.66"
        },
        {
          "position": 2,
          "name": "Limette",
          "amount": 1,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-caipirinha-iba | Manifest M-014"
        },
        {
          "position": 3,
          "name": "weißer Rohrzucker",
          "amount": 4,
          "unit": {
            "code": "TEASPOON",
            "display": "Teelöffel"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-caipirinha-iba | Manifest M-015"
        }
      ],
      "preparation": {
        "housebarText": "1 Limette in kleine Stücke schneiden und mit 4 Teelöffeln weißem Rohrzucker im Tumbler Typ 2 sanft muddlen. Mit gebrochenem Eis füllen, 60 ml Cachaça Magnífica zugeben und mit dem Barlöffel sanft verrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-012",
            "text": "Tumbler Typ 2",
            "catalogName": "Tumbler Typ 2"
          },
          "secondary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Gebrochenes Eis im Tumbler",
        "garnish": "",
        "equipment": {
          "requirementText": "EQ-WERK-008; EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-008",
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-caipirinha-iba"
      }
    },
    {
      "id": "margarita",
      "name": "Margarita",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "AGAVE",
          "flavors": [
            "ZITRISCH"
          ],
          "strength": "KRAEFTIG",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Agave",
          "flavors": [
            "Zitrisch"
          ],
          "strength": "Kräftig",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Tequila, Orangenlikör und Limette als Sour: zitrisch, trocken und optional mit halbem Salzrand.",
        "portrait": "Kaum ein Cocktail besitzt so viele Entstehungsgeschichten wie die Margarita. Mal soll sie für eine Schauspielerin gemixt worden sein, mal für eine besondere Besucherin einer mexikanischen Bar. Sicher ist, dass bereits in den 1930er-Jahren ähnliche Tequila-Cocktails bekannt waren.\n\nDie Margarita lebt von ihrem klaren, frischen Charakter. Limette sorgt für lebendige Säure, während Orangenlikör eine feine Süße und fruchtige Tiefe beisteuert. In dieser Hausbarfassung bringt gereifter Añejo-Tequila zusätzliche Wärme und sanfte Holznoten mit. Ein optionaler Salzrand verstärkt den Kontrast zwischen Säure, Süße und Würze.\n\nAls Aperitif oder bei einem geselligen Abend ist sie eine gute Wahl für Gäste, die frische, ausdrucksstarke Cocktails mögen. Wissenswert: Die Margarita gehört zur historischen Familie der Daisy-Cocktails."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "100%-Agave-Tequila",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-109-patron-anejo",
            "inventoryName": "Patrón Añejo"
          },
          "evidence": "quelle-web-margarita-iba | quelle-web-margarita-patron-anejo | v7.66"
        },
        {
          "position": 2,
          "name": "Triple Sec",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-057-cointreau",
            "inventoryName": "Cointreau"
          },
          "evidence": "quelle-web-margarita-iba | quelle-web-margarita-cointreau | v7.66"
        },
        {
          "position": 3,
          "name": "frischer Limettensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-margarita-iba | Manifest M-014"
        }
      ],
      "preparation": {
        "housebarText": "Optional einen halben Salzrand am gekühlten Martiniglas vorbereiten. 50 ml Patrón Añejo, 20 ml Cointreau und 15 ml frischen Limettensaft mit Eis im vorhandenen Shaker kräftig shaken und in das Martiniglas abseihen. Beim zweiteiligen Shaker das Hawthorne-Barsieb verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": "halber Salzrand",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Patrón Añejo erfüllt die 100%-Agave-Vorgabe, bringt gegenüber einem typischen Blanco aber gereifte Holz-/Vanillenoten ein."
      },
      "trace": {
        "primarySourceId": "quelle-web-margarita-iba"
      }
    },
    {
      "id": "sidecar",
      "name": "Sidecar",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "BRANDY_WEINBRAND",
          "flavors": [
            "TROCKEN",
            "ZITRISCH"
          ],
          "strength": "KRAEFTIG",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Brandy & Weinbrand",
          "flavors": [
            "Trocken",
            "Zitrisch"
          ],
          "strength": "Kräftig",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Cognac, Orangenlikör und frische Zitrone – trocken, zitrisch und cognacbetont.",
        "portrait": "Paris oder London? Bis heute ist nicht eindeutig geklärt, in welcher Stadt der Sidecar zuerst serviert wurde. Seine Geschichte führt in die Bars der Zeit nach dem Ersten Weltkrieg, als Cognac-Cocktails auf beiden Seiten des Ärmelkanals beliebt waren. Bereits 1922 erschien der Drink in gedruckten Rezeptsammlungen.\n\nIm Glas zeigt er eine elegante Verbindung aus Wärme und Frische. Der Cognac bringt feine Holznoten, reife Frucht und eine sanfte Würze mit. Frische Zitrone setzt einen lebendigen Kontrast, während Orangenlikör die Aromen verbindet. Der erste Schluck ist frisch und klar, im Nachklang entfaltet sich die angenehme Wärme des Weinbrands.\n\nEin Aperitif für Gäste, die trockene, aromatische Cocktails schätzen. Sein ungewöhnlicher Name erinnert an den Beiwagen eines Motorrads, auch wenn die genaue Geschichte dahinter ungeklärt bleibt."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Cognac",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-016-prince-hubert-de-polignac-vsop-harmonie-cognac",
            "inventoryName": "Prince Hubert de Polignac VSOP Harmonie Cognac"
          },
          "evidence": "quelle-web-sidecar-iba | v7.66"
        },
        {
          "position": 2,
          "name": "Triple Sec",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-057-cointreau",
            "inventoryName": "Cointreau"
          },
          "evidence": "quelle-web-sidecar-iba | quelle-web-sidecar-cointreau | v7.66"
        },
        {
          "position": 3,
          "name": "frischer Zitronensaft",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-sidecar-iba | Manifest M-014"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Prince Hubert de Polignac VSOP Harmonie Cognac, 20 ml Cointreau und 20 ml frischen Zitronensaft mit Eis im vorhandenen Shaker kräftig shaken und in das gekühlte Martiniglas abseihen. Beim zweiteiligen Shaker das Hawthorne-Barsieb verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": "",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-sidecar-iba"
      }
    },
    {
      "id": "espresso-martini-deluxe",
      "name": "Espresso Martini Deluxe",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "DESSERT_DRINKS",
          "base": "VODKA",
          "flavors": [
            "KAFFEE",
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Dessertdrink",
          "base": "Vodka",
          "flavors": [
            "Kaffee",
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Kräftige Espressoaromen, dunkle Röstaromen und eine samtige Schaumkrone machen diese private Deluxe-Variante zu einem intensiven Kaffeecocktail.",
        "portrait": "London, Anfang der 1980er-Jahre. Barkeeper Dick Bradsell entwickelte einen Cocktail, der die belebende Wirkung von Kaffee mit der Atmosphäre einer eleganten Bar verband. Was zunächst als Vodka Espresso bekannt wurde, entwickelte sich zu einem Klassiker der modernen Cocktailkultur.\n\nDiese private Deluxe-Version greift die ursprüngliche Idee auf und gibt dem Kaffee noch mehr Raum. Frisch gebrühter Espresso bringt kräftige Röstaromen und eine angenehme Bitterkeit mit. Zwei unterschiedliche Kaffeeliköre ergänzen dunkle, leicht süße Noten und verleihen dem Drink zusätzliche Tiefe. Der Vodka hält sich aromatisch zurück. Eine feine Schaumkrone und das samtige Mundgefühl machen ihn besonders angenehm.\n\nEin passender Begleiter für den späteren Abend oder nach einem guten Essen. Trotz seines Namens ist der Espresso Martini kein klassischer Martini mit Wermut."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "weicher, neutraler Wodka",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-115-absolut-elyx",
            "inventoryName": "Absolut Elyx"
          },
          "evidence": "Manifest S-001 | quelle-web-espresso-absolut-elyx | v7.66"
        },
        {
          "position": 2,
          "name": "frischer Espresso",
          "amount": 25,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "Manifest S-001 | Manifest M-014"
        },
        {
          "position": 3,
          "name": "Kahlúa",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-064-kahlua",
            "inventoryName": "Kahlúa"
          },
          "evidence": "Manifest S-001 | v7.66"
        },
        {
          "position": 4,
          "name": "Lantenhammer Raritas Kaffeelikör",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-065-lantenhammer-raritas-kaffeelikoer",
            "inventoryName": "Lantenhammer Raritas Kaffeelikör"
          },
          "evidence": "Manifest S-001 | v7.66"
        },
        {
          "position": 5,
          "name": "Zuckersirup",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "Manifest S-001 | v7.66 | Manifest M-016"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Absolut Elyx, 25 ml frischen Espresso, 10 ml Kahlúa, 5 ml Lantenhammer Raritas Kaffeelikör und 5 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken und in das gekühlte Martiniglas abseihen. Beim zweiteiligen Shaker das Hawthorne-Barsieb verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": "",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die private Deluxe-Fassung verwendet 50/25/10/5/5 ml statt der IBA-Basisrezeptur; die IBA-Kaffeebohnen-Garnitur wird nicht operativ übernommen."
      },
      "trace": {
        "primarySourceId": "quelle-web-espresso-iba"
      }
    },
    {
      "id": "lebkuchen-rum-old-fashioned",
      "name": "Lebkuchen Rum Old Fashioned",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "MEHRERE_BASEN",
          "flavors": [
            "KRAEUTERIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Mehrere Basen",
          "flavors": [
            "Kräuterig"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Winterliche Lebkuchengewürze treffen auf warmen Bourbon, feine Vanille und einen angenehm würzigen Nachklang.",
        "portrait": "Der Old Fashioned stammt aus einer Zeit, in der Cocktails noch aus wenigen, bewusst aufeinander abgestimmten Bestandteilen entstanden. Seine klassische Idee hat Generationen überdauert. Diese private Hausbar-Kreation nimmt das vertraute Prinzip auf und verbindet es mit den warmen Gewürzen von Lebkuchen-Rum.\n\nSchon beim ersten Duft erinnert der Drink an Zimt, Nelken und winterliches Gebäck. Der Bourbon bringt Karamell, Holz und eine sanfte Vanillenote mit. Aromatische Bitterstoffe setzen einen würzigen Gegenpol und verhindern, dass die Süße zu schwer wirkt. Mit zunehmender Verdünnung öffnen sich die Gewürznoten, während der Abgang angenehm warm bleibt.\n\nEin Cocktail für einen ruhigen Abend in der kühleren Jahreszeit. Die konkrete Verbindung von Lebkuchen-Rum und Bourbon ist eine eigene Hausbar-Rezeptur, keine historische Standardvariante."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bar Seibert’s Lebkuchen-Rum",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-091-lebkuchen-rum",
            "inventoryName": "Bar Seibert’s Lebkuchen-Rum"
          },
          "evidence": "Nutzerauftrag 2026-08-16 | v7.66"
        },
        {
          "position": 2,
          "name": "Woodford Reserve Distiller’s Select Kentucky Straight Bourbon Whiskey",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-139-woodford-reserve-distillers-select-kentucky-straight-bourbon-whiskey",
            "inventoryName": "Woodford Reserve Distiller’s Select Kentucky Straight Bourbon Whiskey"
          },
          "evidence": "quelle-web-lebkuchen-woodford | v7.66"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "Nutzerauftrag 2026-08-16 | v7.66 | Manifest M-016"
        },
        {
          "position": 4,
          "name": "Aromatic Bitters",
          "amount": 0.6,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
            "inventoryName": "The Bitter Truth Old Time Aromatic Bitters"
          },
          "evidence": "quelle-web-lebkuchen-bitter-truth-aromatic | Manifest Dash-Norm 1 Dash = 0,3 ml | v7.66"
        }
      ],
      "preparation": {
        "housebarText": "Tumbler Typ 1 mit Eis füllen. 30 ml Bar Seibert’s Lebkuchen-Rum, 30 ml Woodford Reserve Distiller’s Select Kentucky Straight Bourbon Whiskey, 5 ml Riemerschmid Rohrzucker Bar-Sirup und 0,6 ml The Bitter Truth Old Time Aromatic Bitters zugeben und mit dem Barlöffel gründlich kalt rühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "Tumbler Typ 2",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eiswürfel im Tumbler",
        "garnish": "Orangenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Private Hausbar-Fassung. Woodford Reserve wurde als konkrete Bourbonbasis gewählt, weil seine offiziellen Zimt-, Kakao-, Karamell- und Gewürznoten das Lebkuchenprofil ergänzen. The Bitter Truth Old Time Aromatic Bitters wurde wegen seines offiziellen Gewürz-/Lebkuchenprofils und seiner Old-Fashioned-Eignung gewählt. 2 Dash wurden verbindlich zu 0,6 ml normalisiert."
      },
      "trace": {
        "primarySourceId": "quelle-web-lebkuchen-old-fashioned-iba"
      }
    },
    {
      "id": "benedictine-sour",
      "name": "Bénédictine Sour",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "WHISKY",
          "flavors": [
            "KRAEUTERIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Whisky",
          "flavors": [
            "Kräuterig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Warmer Bourbon trifft auf französische Kräuterwürze, honigartige Süße und lebendige Zitronenfrische – ein aromatischer Sour mit würzigem Nachklang.",
        "portrait": "Bénédictine gehört zu den französischen Kräuterlikören mit langer Geschichte. Seine Rezeptur entstand im 19. Jahrhundert in Fécamp und wurde mit einer Erzählung über benediktinische Klostertraditionen bekannt. Im Bénédictine Sour trifft diese würzige Likörwelt auf die amerikanische Tradition der Whiskey Sours. Der Drink ist eine moderne Variante, für die es keine einzelne historische Originalrezeptur gibt.\n\nKräftiger Bourbon bildet die warme Grundlage. Bénédictine ergänzt honigartige Süße, Kräuter und feine Gewürznoten, während frische Zitrone dem Cocktail Lebendigkeit verleiht. Der Geschmack entwickelt sich von fruchtiger Säure zu einer weichen, aromatischen Tiefe mit einem angenehm würzigen Nachklang.\n\nBesonders interessant für Gäste, die Whiskey Sour mögen und eine kräuterbetonte Abwandlung probieren möchten. Die Hausbarfassung verwendet bewusst einen charaktervollen Bourbon, dessen Würze auch neben dem Likör erkennbar bleibt."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Kentucky Straight Bourbon (ca. 50 % Vol.)",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-132-knob-creek-9",
            "inventoryName": "Knob Creek 9 Kentucky Straight Bourbon Whiskey"
          },
          "evidence": "quelle-web-benedictine-foodwine | quelle-web-benedictine-knobcreek | Manifest M-004 | v7.66"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-benedictine-foodwine | Manifest M-014"
        },
        {
          "position": 3,
          "name": "Bénédictine D.O.M.",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-059-dom-benedictine",
            "inventoryName": "Bénédictine D.O.M."
          },
          "evidence": "quelle-web-benedictine-foodwine | quelle-web-benedictine-dom | v7.66"
        },
        {
          "position": 4,
          "name": "Zuckersirup",
          "amount": 7.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-benedictine-foodwine | quelle-web-benedictine-riemerschmid | Manifest M-016 | v7.66"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Knob Creek 9 Kentucky Straight Bourbon Whiskey, 30 ml frischen Zitronensaft, 22,5 ml Bénédictine D.O.M. und 7,5 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken; auf frisches Eis in Tumbler Typ 1 abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "Tumbler Typ 2",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "frisches Eis",
        "garnish": "dünne Zitronenscheibe",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Der in der gewählten Referenz verwendete Wild Turkey 101 wird durch Knob Creek 9 Kentucky Straight Bourbon Whiskey (50 % Vol.) als nahe 101-Proof-Hausbaralternative ersetzt; Simple Syrup durch Riemerschmid Rohrzucker Bar-Sirup."
      },
      "trace": {
        "primarySourceId": "quelle-web-benedictine-foodwine"
      }
    },
    {
      "id": "grasshopper",
      "name": "Grasshopper",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "DESSERT_DRINKS",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "LEICHT",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Dessertdrink",
          "base": "Aperitif & Likör",
          "flavors": [
            "Kräuterig",
            "Süß"
          ],
          "strength": "Leicht",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Kühl, cremig und mintig-schokoladig: der moderne Grasshopper aus grüner Crème de Menthe, weißer Crème de Cacao und Sahne.",
        "portrait": "Der Grasshopper erinnert an eine Zeit, in der cremige Cocktails zum festen Repertoire amerikanischer Bars gehörten. Besonders eng ist sein Name mit Tujague’s in New Orleans verbunden, wo eine Entstehungsgeschichte aus dem frühen 20. Jahrhundert erzählt wird. Ältere Rezeptfassungen zeigen allerdings, dass der Drink eine längere Entwicklung hinter sich hat.\n\nSein Geschmack verbindet kühle Minze mit weichen Schokoladennoten. Die Sahne macht die Mischung samtig und rund, während der Minzlikör für einen frischen, beinahe kühlenden Eindruck sorgt. Die Süße bleibt deutlich spürbar, wird aber von der Minze aufgefangen. So entsteht ein cremiger Cocktail mit einem langen, schokoladig-frischen Nachklang.\n\nDer Grasshopper eignet sich besonders als kleiner Drink nach dem Essen. Wissenswert: Frühe Fassungen kamen noch ohne Sahne aus; die heute bekannte cremige Variante entwickelte sich erst später."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "weiße Crème de Cacao",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-051-bols-creme-de-cacao-white",
            "inventoryName": "Bols Crème de Cacao White"
          },
          "evidence": "quelle-web-grasshopper-iba | quelle-web-grasshopper-bols-cacao-white | Manifest M-004 | v7.66"
        },
        {
          "position": 2,
          "name": "grüne Crème de Menthe",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-100-monin-creme-de-menthe-verte",
            "inventoryName": "Monin Crème de Menthe Verte"
          },
          "evidence": "quelle-web-grasshopper-iba | quelle-web-grasshopper-monin-menthe | Manifest M-004 | v7.66"
        },
        {
          "position": 3,
          "name": "frische Sahne",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-grasshopper-iba | Manifest M-014"
        }
      ],
      "preparation": {
        "housebarText": "20 ml Bols Crème de Cacao White, 20 ml Monin Crème de Menthe Verte und 20 ml frische Sahne mit Eis kräftig shaken; in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": "Minzblatt",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die generischen Likörrollen werden mit Bols Crème de Cacao White und Monin Crème de Menthe Verte besetzt; das Cocktailglas wird durch das Martiniglas ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-grasshopper-iba"
      }
    },
    {
      "id": "black-manhattan",
      "name": "Black Manhattan",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "BITTER",
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Bitter",
            "Kräuterig",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Rye Whiskey und Averna formen einen dunkleren, kräuterigeren Manhattan – bittersüß, kräftig und als heutige Standardform mit zwei Bitters dokumentiert.",
        "portrait": "San Francisco, 2005. Barkeeper Todd Smith wird mit einem Cocktail verbunden, der dem klassischen Manhattan eine dunklere, kräuterbetonte Richtung gab: dem Black Manhattan. An die Stelle des gewohnten süßen Wermuts trat italienischer Amaro. So entstand eine moderne Variante, die inzwischen selbst zu den bekannten Whiskey-Cocktails gehört.\n\nDer Rye Whiskey bringt würzige Wärme und eine feine Pfeffernote mit. Averna ergänzt dunkle Kräuter, Orangenschale und eine weiche, beinahe karamellige Süße. Aromatische Bitterstoffe vertiefen den Geschmack, während Orangenbitter eine frische Nuance setzt. Der Drink wirkt kräftig und voll, bleibt im Abgang jedoch angenehm herb.\n\nEin passender Begleiter für einen ruhigen Abend, besonders für Gäste, die Manhattan und Negroni mögen. Interessant ist, wie stark ein einziger Austausch den Charakter eines klassischen Cocktails verändern kann."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Rye Whiskey",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-124-bulleit-rye",
            "inventoryName": "Bulleit Rye"
          },
          "evidence": "quelle-web-black-manhattan-liquor | quelle-web-black-manhattan-bulleit | Manifest M-004 | v7.66"
        },
        {
          "position": 2,
          "name": "Amaro Averna Siciliano",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-143-amaro-averna-siciliano",
            "inventoryName": "Amaro Averna Siciliano"
          },
          "evidence": "quelle-web-black-manhattan-liquor | quelle-web-black-manhattan-averna | v7.66"
        },
        {
          "position": 3,
          "name": "Angostura Bitters",
          "amount": 0.3,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
            "inventoryName": "The Bitter Truth Old Time Aromatic Bitters"
          },
          "evidence": "quelle-web-black-manhattan-liquor | quelle-web-black-manhattan-aromatic | Manifest M-004 | Manifest M-008 | v7.66"
        },
        {
          "position": 4,
          "name": "orange bitters",
          "amount": 0.3,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-013-the-bitter-truth-orange-bitters",
            "inventoryName": "The Bitter Truth Orange Bitters"
          },
          "evidence": "quelle-web-black-manhattan-liquor | quelle-web-black-manhattan-orange | Manifest M-004 | Manifest M-008 | v7.66"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Bulleit Rye, 30 ml Amaro Averna Siciliano, 0,3 ml The Bitter Truth Old Time Aromatic Bitters und 0,3 ml The Bitter Truth Orange Bitters mit Eis im Rührglas kalt rühren; in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Rühreis; ohne Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Angostura- und Orange-Bitters-Rollen werden mit The Bitter Truth Old Time Aromatic Bitters bzw. The Bitter Truth Orange Bitters besetzt; die Referenzkirsche wird nicht übernommen und die Coupe durch das Martiniglas ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-black-manhattan-liquor"
      }
    },
    {
      "id": "averna-sour",
      "name": "Averna Sour",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "BITTER",
            "KRAEUTERIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Aperitif & Likör",
          "flavors": [
            "Bitter",
            "Kräuterig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Bittersüßer moderner Averna-Sour mit Bourbon, frischer Zitrone, Rohrzuckersirup und Eiweiß – bewusst als Variantenfassung statt kanonischer Standard dokumentiert.",
        "portrait": "Der Averna Sour gehört zu den modernen Varianten der großen Sour-Familie. Eine eindeutig überlieferte Originalrezeptur gibt es nicht. Verschiedene Bars haben den sizilianischen Kräuterlikör mit Zitrusfrüchten und Whiskey kombiniert und ihm damit eine neue Rolle gegeben: vom klassischen Digestif zur aromatischen Cocktailbasis.\n\nIn dieser Hausbarfassung treffen die bittersüßen Kräuternoten von Averna auf die warme Würze des Bourbons. Frische Zitrone sorgt für einen lebendigen Kontrast, während eine zurückhaltende Süße die Aromen verbindet. Das Eiweiß verleiht dem Drink eine seidige Textur und mildert die kräftigen Bittertöne. Zurück bleibt ein weicher, leicht würziger Nachklang.\n\nEin Cocktail für den späteren Abend und für Gäste, die klassische Sours mögen, aber etwas mehr Kräutertiefe suchen. Seine Stärke liegt im Zusammenspiel von Bitterkeit und Frische."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Amaro Averna Siciliano",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-143-amaro-averna-siciliano",
            "inventoryName": "Amaro Averna Siciliano"
          },
          "evidence": "quelle-web-b04-avsour-cd | M-027 BLOCK04"
        },
        {
          "position": 2,
          "name": "Bourbon",
          "amount": 23,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-139-woodford-reserve-distillers-select-kentucky-straight-bourbon-whiskey",
            "inventoryName": "Woodford Reserve Distiller’s Select Kentucky Straight Bourbon Whiskey"
          },
          "evidence": "quelle-web-b04-avsour-cd | M-004 | M-027 BLOCK04"
        },
        {
          "position": 3,
          "name": "frischer Zitronensaft",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b04-avsour-cd | M-014 | M-027 BLOCK04"
        },
        {
          "position": 4,
          "name": "Zuckersirup",
          "amount": 8,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b04-avsour-cd | M-016 | M-027 BLOCK04"
        },
        {
          "position": 5,
          "name": "Eiweiß",
          "amount": 1,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b04-avsour-cd | M-014 | M-027 BLOCK04"
        }
      ],
      "preparation": {
        "housebarText": "45 ml Amaro Averna Siciliano, 23 ml Woodford Reserve, 30 ml frischen Zitronensaft, 8 ml Riemerschmid Rohrzucker Bar-Sirup und 1 Eiweiß zunächst ohne Eis, dann mit Eis kräftig shaken; auf frisches Eis in Tumbler Typ 1 abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "Tumbler Typ 2",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Shake-Eis; frisches Eis im Glas",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Generischer Bourbon und Zuckersirup der Referenz werden mit Woodford Reserve bzw. Riemerschmid Rohrzucker Bar-Sirup besetzt; die Referenzkirsche wird nicht übernommen."
      },
      "trace": {
        "primarySourceId": "quelle-web-b04-avsour-cd"
      }
    },
    {
      "id": "murats-winter-manhattan",
      "name": "Murat’s Winter Manhattan",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "BITTER",
            "KRAEUTERIG",
            "NUSSIG",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Bitter",
            "Kräuterig",
            "Nussig",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Private Winter-Manhattan-Hausbarfassung mit Bulleit Rye, Averna, Pedro Ximénez, Walnusslikör und Aromatic Bitters – dunkel, würzig und klar vom historischen Manhattan getrennt.",
        "portrait": "Der klassische Manhattan gehört seit dem späten 19. Jahrhundert zur amerikanischen Barkultur. Murat’s Winter Manhattan greift seine Grundidee auf und führt sie in eine wärmere, winterliche Richtung. Diese private Hausbar-Kreation verbindet den würzigen Charakter von Rye Whiskey mit italienischen Kräutern, süßem Sherry und einer feinen Walnussnote.\n\nSchon beim ersten Duft zeigen sich dunkle Früchte, Gewürze und ein Hauch gerösteter Nüsse. Averna bringt eine bittersüße Tiefe mit, während Pedro Ximénez an Rosinen und reife Trauben erinnert. Der Walnusslikör ergänzt eine sanfte, nussige Wärme. Trotz seiner Fülle bleibt der Drink durch die kräftige Whiskeybasis klar strukturiert.\n\nEin Cocktail für einen langen Abend, wenn man sich Zeit für jeden Schluck nehmen möchte. Die Kombination ist eine eigene Hausbar-Rezeptur und kein historischer Manhattan-Standard."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bulleit Rye",
          "amount": 40,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-124-bulleit-rye",
            "inventoryName": "Bulleit Rye"
          },
          "evidence": "PRIVATE_HAUSBAR_ENTSCHEIDUNG | M-027 BLOCK04"
        },
        {
          "position": 2,
          "name": "Amaro Averna Siciliano",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-143-amaro-averna-siciliano",
            "inventoryName": "Amaro Averna Siciliano"
          },
          "evidence": "PRIVATE_HAUSBAR_ENTSCHEIDUNG | M-027 BLOCK04"
        },
        {
          "position": 3,
          "name": "Pedro Ximénez Sherry",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-111-lustau-pedro-ximenez-san-emilio",
            "inventoryName": "Lustau Pedro Ximénez San Emilio"
          },
          "evidence": "PRIVATE_HAUSBAR_ENTSCHEIDUNG | M-027 BLOCK04"
        },
        {
          "position": 4,
          "name": "Walnusslikör",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-066-lantenhammer-raritas-walnusslikoer",
            "inventoryName": "Lantenhammer Raritas Walnusslikör"
          },
          "evidence": "PRIVATE_HAUSBAR_ENTSCHEIDUNG | M-027 BLOCK04"
        },
        {
          "position": 5,
          "name": "Aromatic Bitters",
          "amount": 0.6,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
            "inventoryName": "The Bitter Truth Old Time Aromatic Bitters"
          },
          "evidence": "PRIVATE_HAUSBAR_ENTSCHEIDUNG | M-008 2 DASH = 0,6 ML | M-027 BLOCK04"
        }
      ],
      "preparation": {
        "housebarText": "40 ml Bulleit Rye, 20 ml Amaro Averna Siciliano, 10 ml Lustau Pedro Ximénez San Emilio, 5 ml Lantenhammer Raritas Walnusslikör und 0,6 ml The Bitter Truth Old Time Aromatic Bitters mit Eis im Rührglas kalt rühren; in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Rühreis; ohne Eis servieren",
        "garnish": "Orangenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Private 40/20/10/5/2-Dash-Fassung beibehalten; 2 Dash Aromatic Bitters ausschließlich operativ nach M-008 zu 0,6 ml normalisiert. Nicht als Manhattan- oder Black-Manhattan-Original ausgegeben."
      },
      "trace": {
        "primarySourceId": "quelle-web-b04-winter-iba-manhattan"
      }
    },
    {
      "id": "averna-espresso-after-dinner",
      "name": "Averna Espresso After-Dinner",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "DESSERT_DRINKS",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "BITTER",
            "KAFFEE",
            "KRAEUTERIG"
          ],
          "strength": "MITTEL",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Dessertdrink",
          "base": "Aperitif & Likör",
          "flavors": [
            "Bitter",
            "Kaffee",
            "Kräuterig"
          ],
          "strength": "Mittel",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Minimalistische private After-Dinner-Fassung aus Averna und frischem Espresso – kräuterig, kaffeeherb und bewusst ohne zusätzlichen Kaffeelikör oder Sirup.",
        "portrait": "In Italien gehören Espresso und Kräuterliköre seit Langem zu den vertrauten Genüssen nach einem guten Essen. Der Averna Espresso After-Dinner verbindet diese beiden Geschmackswelten in einer bewusst schlichten privaten Hausbar-Kreation. Anders als viele moderne Espresso-Cocktails verzichtet diese Fassung auf zusätzlichen Kaffeelikör und Sirup.\n\nFrischer Espresso bringt kräftige Röstaromen und eine angenehme Bitterkeit mit. Averna ergänzt dunkle Kräuter, Orangenschale und eine zurückhaltende Süße. Beim ersten Schluck steht der Kaffee im Vordergrund, danach entwickelt sich die würzige Tiefe des sizilianischen Amaro. Der Geschmack bleibt intensiv, ohne durch zusätzliche Süße schwer zu wirken.\n\nBesonders passend nach einem Abendessen, wenn ein gewöhnlicher Espresso etwas zu schlicht erscheint. Die konkrete Kombination aus Averna und Espresso ist eine private Hausbarfassung, kein historischer Cocktailklassiker."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Amaro Averna Siciliano",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-143-amaro-averna-siciliano",
            "inventoryName": "Amaro Averna Siciliano"
          },
          "evidence": "PRIVATE_HAUSBAR_ENTSCHEIDUNG_V2.50 | M-027 BLOCK04"
        },
        {
          "position": 2,
          "name": "frischer Espresso",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "PRIVATE_HAUSBAR_ENTSCHEIDUNG_V2.50 | M-014 | M-027 BLOCK04"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Amaro Averna Siciliano und 30 ml frischen Espresso mit Eis kräftig shaken; durch das Feinsieb in ein vorgekühltes Martiniglas abseihen. Barsieb nur zusätzlich bei zweiteiligem Shaker."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-007; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-007",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Verbindliche private Hausbarentscheidung aus v2.50: 50 ml Averna + 30 ml Espresso, ohne zusätzlichen Kaffeelikör und ohne Sirup. Externe Averna-Espresso-Rezepte dienen nur als Variantenkontext. Keine Garnitur erfunden."
      },
      "trace": {
        "primarySourceId": "quelle-web-b04-averna-espresso-difford"
      }
    },
    {
      "id": "martini-dry",
      "name": "Martini Dry",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "GIN",
          "flavors": [
            "TROCKEN"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Gin",
          "flavors": [
            "Trocken"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Klarer Wacholder, feine Kräuternoten und ein ausgesprochen trockener Charakter machen diesen eiskalten Martini zu einem Klassiker für Ginliebhaber.",
        "portrait": "Über kaum einen Cocktail wurde so viel diskutiert wie über den Dry Martini. Seine Geschichte reicht bis in die Barkultur des späten 19. Jahrhunderts zurück. Damals waren viele Martini-Varianten deutlich süßer als heute. Erst mit der Zeit setzte sich der trockene Stil durch, der inzwischen als Inbegriff des klassischen Martini gilt.\n\nIn dieser Hausbarfassung steht No.3 London Dry Gin im Mittelpunkt. Seine klare Wacholdernote wird von feinen Zitrus- und Gewürzaromen begleitet. Ein kleiner Anteil trockener Wermut bringt Kräutertöne und eine dezente Weinnote hinzu, ohne den Gin zu überdecken. Eiskalt serviert wirkt der Drink geradlinig, trocken und bemerkenswert klar.\n\nEin Cocktail für Gäste, die intensive Spirituosenaromen und einen zurückhaltenden, eleganten Stil schätzen. Die optionale Zitronenzeste verleiht ihm einen frischen Duft, noch bevor der erste Schluck genommen wird."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "quelle-web-b04-martini-iba | quelle-web-b04-martini-no3 | M-027 BLOCK04"
        },
        {
          "position": 2,
          "name": "trockener Wermut",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-112-noilly-prat-dry",
            "inventoryName": "Noilly Prat Dry"
          },
          "evidence": "quelle-web-b04-martini-iba | M-027 BLOCK04"
        }
      ],
      "preparation": {
        "housebarText": "60 ml No.3 London Dry Gin und 10 ml Noilly Prat Dry mit Eis im Rührglas sehr kalt rühren; mit dem Barsieb in ein vorgekühltes Martiniglas abseihen. Optional Zitronenzeste über dem Drink ausdrücken."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "EXAKT_PASSEND"
        },
        "ice": "Rühreis; ohne Eis servieren",
        "garnish": "Zitronenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Als Hausbargarnitur wird nur die optionale Zitronenzeste geführt; die IBA-Alternative grüne Olive wird nicht übernommen."
      },
      "trace": {
        "primarySourceId": "quelle-web-b04-martini-iba"
      }
    },
    {
      "id": "gimlet",
      "name": "Gimlet",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "GIN",
          "flavors": [
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Gin",
          "flavors": [
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Frische Limette, kräftiger Wacholder und eine zurückhaltende Süße verleihen diesem Gin-Klassiker seinen klaren, lebendigen Charakter.",
        "portrait": "Der Gimlet hat seine Wurzeln in der britischen Trinkkultur und wird häufig mit der Seefahrt verbunden. Lange gehörte konservierter Limettensaft zum festen Bestandteil seiner Rezeptur. Moderne Bars haben daraus eine frischere Variante entwickelt, bei der die natürliche Säure der Limette stärker zur Geltung kommt.\n\nGenau diese Richtung verfolgt die Hausbarfassung. Der London Dry Gin bringt Wacholder, feine Kräuter und eine klare Würze mit. Frisch gepresste Limette setzt einen lebendigen, beinahe spritzigen Kontrast. Eine zurückhaltende Süße verbindet beide Aromen und lässt den Drink frisch und trocken ausklingen. Seine Stärke liegt in der unmittelbaren, unverfälschten Fruchtigkeit.\n\nEin schöner Aperitif für Gäste, die unkomplizierte, zitrusbetonte Cocktails bevorzugen. Wissenswert ist der Unterschied zum historischen Gimlet: Die heutige Fresh-Lime-Variante schmeckt deutlich frischer als Fassungen mit süßem Lime Cordial."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 75,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "quelle-web-b05-gimlet-liquor | quelle-web-b05-gimlet-no3 | M-004 | M-027 BLOCK05"
        },
        {
          "position": 2,
          "name": "frischer Limettensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b05-gimlet-liquor | Manifest M-014 | M-027 BLOCK05"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b05-gimlet-liquor | quelle-web-b05-gimlet-riemer | M-016 | M-027 BLOCK05"
        }
      ],
      "preparation": {
        "housebarText": "75 ml No.3 London Dry Gin, 15 ml frischen Limettensaft und 15 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken; in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": "Limettenrad",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Das Cocktail-/Rocks-Glas der Referenz wird durch das vorhandene Martiniglas ersetzt; Gin und Sirup werden mit No.3 London Dry Gin bzw. Riemerschmid Rohrzucker Bar-Sirup besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b05-gimlet-liquor"
      }
    },
    {
      "id": "southside",
      "name": "Southside",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "GIN",
          "flavors": [
            "KRAEUTERIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Gin",
          "flavors": [
            "Kräuterig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Frische Zitrone und duftende Minze geben diesem klassischen Gin-Cocktail seinen lebendigen, angenehm kühlen Charakter.",
        "portrait": "Um die Herkunft des Southside ranken sich verschiedene Geschichten. Chicago, New York und die amerikanische Prohibitionszeit werden häufig mit ihm verbunden. Sicherer belegt ist ein früher Verwandter: Bereits 1916 veröffentlichte Hugo Ensslin einen South Side Fizz. Aus dieser Cocktailfamilie entwickelte sich ein Drink, der Gin und frische Minze auf besonders angenehme Weise verbindet.\n\nDer erste Eindruck ist kühl und lebendig. Frische Zitrone bringt eine klare Säure, während Minze einen grünen, leicht süßlichen Duft entfaltet. Der Gin steuert Wacholder und eine feine Würze bei. Die Aromen wirken leicht und erfrischend, ohne den Charakter der Spirituose zu verlieren.\n\nDer Southside passt besonders gut als Aperitif an einem warmen Abend. Interessant ist, dass manche Bars ihn mit Limette zubereiten, während diese Hausbarfassung bewusst Zitrone verwendet."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "quelle-web-b05-southside-liquor | quelle-web-b05-southside-no3 | M-004 | M-027 BLOCK05"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b05-southside-liquor | Manifest M-014 | M-027 BLOCK05"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b05-southside-liquor | quelle-web-b05-southside-riemer | M-016 | M-027 BLOCK05"
        },
        {
          "position": 4,
          "name": "frische Minzblätter",
          "amount": 5,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b05-southside-liquor | Manifest M-014/M-009 | M-027 BLOCK05"
        }
      ],
      "preparation": {
        "housebarText": "5 Minzblätter mit 30 ml frischem Zitronensaft sanft mit dem Stößel andrücken. 60 ml No.3 London Dry Gin und 30 ml Riemerschmid Rohrzucker Bar-Sirup zugeben, mit Eis shaken und über das vorhandene Shakersystem in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": "Minzzweig",
        "equipment": {
          "requirementText": "EQ-WERK-008; EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-008",
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die doppelte Filtration der Referenz wird nicht zur Pflicht erhoben; die Hausbar arbeitet ohne verpflichtendes Feinsieb."
      },
      "trace": {
        "primarySourceId": "quelle-web-b05-southside-liquor"
      }
    },
    {
      "id": "french-75",
      "name": "French 75",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "CLASSIC_COCKTAILS",
          "base": "GIN",
          "flavors": [
            "TROCKEN",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Klassischer Cocktail",
          "base": "Gin",
          "flavors": [
            "Trocken",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Frische Zitrone, feiner Wacholder und trockener Champagner verbinden sich zu einem lebendigen, elegant prickelnden Klassiker.",
        "portrait": "Der French 75 trägt den Namen eines französischen Feldgeschützes aus dem Ersten Weltkrieg. In den Bars der 1920er-Jahre wurde daraus ein Cocktail, dessen elegante Erscheinung seine überraschende Stärke kaum erahnen lässt. Die heute bekannte Verbindung von Gin, Zitrone und Champagner setzte sich erst nach verschiedenen früheren Rezeptfassungen durch.\n\nZunächst zeigt sich eine lebendige Zitrusfrische, begleitet von den feinen Wacholdernoten des Gins. Der trockene Champagner bringt eine elegante Perlage, leichte Hefenoten und zusätzliche Frische mit. Die Kohlensäure lässt den Drink leichter erscheinen, als es seine kräftige Grundlage vermuten lässt. Im Abgang bleiben Zitrusfrucht und eine angenehme Trockenheit.\n\nEin Cocktail für einen festlichen Empfang oder einen besonderen Anlass. Sein Name erinnert an die Schlagkraft des Geschützes, nach dem er benannt wurde."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "quelle-web-b05-f75-iba | quelle-web-b05-f75-no3 | M-004 | M-027 BLOCK05"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b05-f75-iba | Manifest M-014 | M-027 BLOCK05"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b05-f75-iba | quelle-web-b05-f75-riemer | M-016 | M-027 BLOCK05"
        },
        {
          "position": 4,
          "name": "Champagner",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-122-veuve-monsigny-brut-reserve-champagner",
            "inventoryName": "Champagne Vve. Monsigny Brut Réserve"
          },
          "evidence": "quelle-web-b05-f75-iba | M-004 | M-027 BLOCK05"
        }
      ],
      "preparation": {
        "housebarText": "30 ml No.3 London Dry Gin, 15 ml frischen Zitronensaft und 15 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis shaken; in das Sektglas abseihen, mit 60 ml Champagne Vve. Monsigny Brut Réserve auffüllen und sanft rühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-005",
            "text": "Sektglas",
            "catalogName": "Sektglas / Flöte"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "EXAKT_PASSEND"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER; EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006",
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die generischen Rollen für Gin, Zuckersirup und Champagner werden mit No.3 London Dry Gin, Riemerschmid Rohrzucker Bar-Sirup und Champagne Vve. Monsigny Brut Réserve besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b05-f75-iba"
      }
    },
    {
      "id": "kir-royale",
      "name": "Kir Royale",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPRITZ_APERITIF",
          "base": "SCHAUMWEIN",
          "flavors": [
            "FRUCHTIG"
          ],
          "strength": "LEICHT",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Spritz & Aperitif",
          "base": "Schaumwein",
          "flavors": [
            "Fruchtig"
          ],
          "strength": "Leicht",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Dunkle Johannisbeeren treffen auf trockenen Champagner – ein fruchtiger, fein prickelnder Aperitif mit französischem Charme.",
        "portrait": "Die Geschichte des Kir führt nach Burgund, wo der Aperitif aus trockenem Weißwein und schwarzem Johannisbeerlikör bekannt wurde. Seinen Namen verdankt er Félix Kir, dem früheren Bürgermeister von Dijon. Der Kir Royale ist die festlichere Variante dieser Tradition: Statt stillem Weißwein wird Champagner verwendet.\n\nSchon beim Einschenken zeigt sich die tiefrote Farbe der schwarzen Johannisbeere, die sich mit dem hellen Schaumwein verbindet. Der Duft erinnert an reife Beeren, während der trockene Champagner eine feine Säure und lebendige Perlage beisteuert. Die fruchtige Süße bleibt deutlich erkennbar, wird durch die Frische des Champagners aber angenehm aufgefangen.\n\nEin leichter Aperitif für einen Empfang oder einen besonderen Abend. Sein Reiz liegt im Kontrast zwischen intensiver Frucht und trockenem Schaumwein."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Crème de Cassis",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-075-vedrenne-creme-de-cassis-supercassis",
            "inventoryName": "Védrenne Crème de Cassis / Supercassis"
          },
          "evidence": "quelle-web-b05-kirroyale-difford | quelle-web-b05-kirroyale-vedrenne | M-004 | M-027 BLOCK05"
        },
        {
          "position": 2,
          "name": "Brut Champagner",
          "amount": 120,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-122-veuve-monsigny-brut-reserve-champagner",
            "inventoryName": "Champagne Vve. Monsigny Brut Réserve"
          },
          "evidence": "quelle-web-b05-kirroyale-difford | M-004 | M-027 BLOCK05"
        }
      ],
      "preparation": {
        "housebarText": "15 ml Védrenne Crème de Cassis / Supercassis in das gekühlte Sektglas geben und mit 120 ml Champagne Vve. Monsigny Brut Réserve auffüllen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-005",
            "text": "Sektglas",
            "catalogName": "Sektglas / Flöte"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "EXAKT_PASSEND"
        },
        "ice": "ohne Eis",
        "garnish": null,
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die saisonale Beeren-Garnitur der Referenz wird nicht übernommen; Crème de Cassis und Champagner werden mit Védrenne Crème de Cassis / Supercassis bzw. Champagne Vve. Monsigny Brut Réserve besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b05-kirroyale-difford"
      }
    },
    {
      "id": "white-lady",
      "name": "White Lady",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "GIN",
          "flavors": [
            "TROCKEN",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Gin",
          "flavors": [
            "Trocken",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Ein eleganter Gin-Cocktail mit frischer Zitrone, feinen Orangennoten und einem klaren, angenehm trockenen Abgang.",
        "portrait": "Die White Lady gehört zu den klassischen Cocktails, deren Rezeptur sich im Laufe der Zeit deutlich verändert hat. Frühe Fassungen werden mit Barkeeper Harry MacElhone verbunden, enthielten aber noch andere Spirituosen. Erst später entwickelte sich die heute bekannte Verbindung von Gin, Orangenlikör und Zitrone, die besonders in den Bars der 1930er-Jahre Verbreitung fand.\n\nIhr Geschmack ist klar, frisch und angenehm trocken. Der Gin bringt Wacholder und eine feine Würze mit, während Cointreau helle Orangennoten ergänzt. Frische Zitrone setzt einen lebendigen Kontrast und verleiht dem Drink einen präzisen, zitrischen Abgang. Die Hausbarfassung verzichtet bewusst auf Eiweiß und bewahrt damit ihren geradlinigen Charakter.\n\nEin eleganter Aperitif für Gäste, die klassische Sours ohne ausgeprägte Süße bevorzugen. Wissenswert: Die cremigere Variante mit Eiweiß entstand erst später."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 40,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "quelle-web-b05-white-iba | quelle-web-b05-white-no3 | M-004 | M-027 BLOCK05"
        },
        {
          "position": 2,
          "name": "Triple Sec",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-057-cointreau",
            "inventoryName": "Cointreau"
          },
          "evidence": "quelle-web-b05-white-iba | quelle-web-b05-white-cointreau | M-004 | M-027 BLOCK05"
        },
        {
          "position": 3,
          "name": "frischer Zitronensaft",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b05-white-iba | Manifest M-014 | M-027 BLOCK05"
        }
      ],
      "preparation": {
        "housebarText": "40 ml No.3 London Dry Gin, 30 ml Cointreau und 20 ml frischen Zitronensaft mit Eis kräftig shaken; in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER; EQ-WERK-007 OPTIONAL NUR ALS VARIANTEN-/ORIGINALEVIDENZ",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006",
            "EQ-WERK-007"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Das Cocktailglas der Referenz wird durch das Martiniglas ersetzt; Gin und Triple Sec werden mit No.3 London Dry Gin bzw. Cointreau besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b05-white-iba"
      }
    },
    {
      "id": "brandy-alexander",
      "name": "Brandy Alexander",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "DESSERT_DRINKS",
          "base": "BRANDY_WEINBRAND",
          "flavors": [
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Dessertdrink",
          "base": "Brandy & Weinbrand",
          "flavors": [
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Cognac, dunkle Crème de Cacao und Sahne zu gleichen Teilen – samtig, schokoladig und klassisch als After-Dinner-Drink.",
        "portrait": "Der Alexander begann seine Geschichte mit Gin. Doch schon in den 1920er-Jahren tauchte eine Variante mit Brandy auf, die später als Brandy Alexander bekannt wurde. In Harry MacElhones Cocktailbuch von 1923 findet sich bereits eine entsprechende Rezeptur. Mit seiner samtigen Art wurde der Drink zu einem Klassiker für die Stunden nach dem Essen.\n\nHier verbinden sich die warme Fruchtigkeit des Polignac VSOP Cognacs und die dunklen Kakaonoten der Crème de Cacao. Frische Sahne legt sich weich um beide Aromen und verleiht dem Cocktail seine cremige Textur. Die Schokolade bleibt präsent, während der Cognac im Hintergrund eine angenehme Tiefe entwickelt.\n\nDer Brandy Alexander passt zu einem ruhigen Abschluss eines guten Abends. Sein besonderer Reiz liegt darin, dass drei gleich große Anteile einen überraschend harmonischen, beinahe dessertartigen Cocktail ergeben."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Cognac",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-016-prince-hubert-de-polignac-vsop-harmonie-cognac",
            "inventoryName": "Prince Hubert de Polignac VSOP Harmonie Cognac"
          },
          "evidence": "quelle-web-b06-brandy-iba | M-004 | M-027 BLOCK06"
        },
        {
          "position": 2,
          "name": "braune Crème de Cacao",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-050-bols-creme-de-cacao-brown",
            "inventoryName": "Bols Crème de Cacao Brown"
          },
          "evidence": "quelle-web-b06-brandy-iba | M-004 | M-027 BLOCK06"
        },
        {
          "position": 3,
          "name": "frische Sahne",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b06-brandy-iba | Manifest M-014 | M-027 BLOCK06"
        }
      ],
      "preparation": {
        "housebarText": "30 ml Prince Hubert de Polignac VSOP Harmonie Cognac, 30 ml Bols Crème de Cacao Brown und 30 ml frische Sahne mit Eis kräftig shaken; in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Das Cocktailglas der Referenz wird durch das Martiniglas ersetzt; die Muskatnuss-Garnitur wird nicht übernommen. Cognac und braune Crème de Cacao werden mit Prince Hubert de Polignac VSOP Harmonie Cognac bzw. Bols Crème de Cacao Brown besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b06-brandy-iba"
      }
    },
    {
      "id": "harvey-wallbanger",
      "name": "Harvey Wallbanger",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "VODKA",
          "flavors": [
            "FRUCHTIG"
          ],
          "strength": "LEICHT",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Vodka",
          "flavors": [
            "Fruchtig"
          ],
          "strength": "Leicht",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Vodka und frischer Orangensaft als unkomplizierter Highball, aromatisch gekrönt von Galliano L’Autentico.",
        "portrait": "Ein Surfer namens Harvey, eine kalifornische Bar und ein paar Drinks zu viel: So erzählt man sich die Entstehung des Harvey Wallbanger. Ob es diesen Harvey tatsächlich gab, ist fraglich. Bekannt wurde der Cocktail vor allem durch eine erfolgreiche Galliano-Werbekampagne um 1970, die ihm seinen Platz in der amerikanischen Barkultur sicherte.\n\nSein Geschmack beginnt vertraut mit der saftigen Frische von Orange. Der Vodka hält sich zurück und lässt der Frucht den Vortritt. Erst der Galliano gibt dem Drink seine besondere Richtung: Vanille, Anis und feine Kräuternoten verleihen ihm einen warmen, aromatischen Nachklang.\n\nEin unkomplizierter Longdrink für gesellige Abende, besonders wenn es fruchtig und leicht zugänglich sein soll. Wissenswert ist, dass der Harvey Wallbanger im Grunde ein Screwdriver mit einem zusätzlichen Schuss Galliano ist."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "neutraler Wodka",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-115-absolut-elyx",
            "inventoryName": "Absolut Elyx"
          },
          "evidence": "quelle-web-b06-harvey-galliano | M-004 | M-027 BLOCK06"
        },
        {
          "position": 2,
          "name": "frischer Orangensaft",
          "amount": 120,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b06-harvey-galliano | Manifest M-014 | M-027 BLOCK06"
        },
        {
          "position": 3,
          "name": "Galliano L’Autentico",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-060-galliano-l-autentico",
            "inventoryName": "Galliano L’Autentico"
          },
          "evidence": "quelle-web-b06-harvey-galliano | M-027 BLOCK06"
        }
      ],
      "preparation": {
        "housebarText": "Longdrinkglas Typ 1 mit Eis füllen. 50 ml Absolut Elyx und 120 ml frischen Orangensaft zugeben; 15 ml Galliano L’Autentico zuletzt obenauf geben. Optional mit einer Orangenscheibe servieren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas Typ 1",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-007",
            "text": "größeres Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": "Orangenscheibe",
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Der generische Vodka der Herstellerreferenz wird mit Absolut Elyx besetzt; das Highballglas wird durch Longdrinkglas Typ 1 ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b06-harvey-galliano"
      }
    },
    {
      "id": "white-russian",
      "name": "White Russian",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "DESSERT_DRINKS",
          "base": "VODKA",
          "flavors": [
            "KAFFEE",
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Dessertdrink",
          "base": "Vodka",
          "flavors": [
            "Kaffee",
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Vodka, Kahlúa und Sahne zu gleichen Teilen auf Eis – cremig, kaffeebetont und unkompliziert.",
        "portrait": "Seine Geschichte beginnt mit dem Black Russian, einem Cocktail aus Vodka und Kaffeelikör. In den 1960er-Jahren entstand daraus eine weichere Variante mit Sahne: der White Russian. Jahrzehnte später machte ihn der Film *The Big Lebowski* erneut populär. Seitdem ist der Drink eng mit der lässigen Filmfigur des Dude verbunden.\n\nIn der Hausbarfassung treffen die klaren Noten von Absolut Elyx auf den dunklen Kaffeegeschmack von Kahlúa. Die Sahne bringt eine samtige Fülle mit und lässt die kräftigen Röstaromen weicher erscheinen. Mit zunehmender Vermischung entwickelt sich ein runder, angenehm süßer Geschmack, der an einen gekühlten Kaffee mit einem Schuss Spirituose erinnert.\n\nBesonders passend für einen entspannten Abend oder als kleiner Genuss nach dem Essen. Trotz seines Namens stammt der Cocktail nicht aus Russland."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "weicher, neutraler Wodka",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-115-absolut-elyx",
            "inventoryName": "Absolut Elyx"
          },
          "evidence": "quelle-web-b06-white-kahlua | M-004 | M-027 BLOCK06"
        },
        {
          "position": 2,
          "name": "Kahlúa",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-064-kahlua",
            "inventoryName": "Kahlúa"
          },
          "evidence": "quelle-web-b06-white-kahlua | M-027 BLOCK06"
        },
        {
          "position": 3,
          "name": "frische Sahne",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b06-white-kahlua | Manifest M-014 | M-027 BLOCK06"
        }
      ],
      "preparation": {
        "housebarText": "Tumbler Typ 1 mit Eis füllen. 30 ml Kahlúa und 30 ml Absolut Elyx zugeben; 30 ml frische Sahne zuletzt langsam auflegen. Nach Wunsch vor dem Trinken leicht mit dem Barlöffel verrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-004 OPTIONAL",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Der in der Kahlúa-Referenz verwendete Absolut Vodka wird durch Absolut Elyx ersetzt; das Rocks-/Old-Fashioned-Glas wird durch Tumbler Typ 1 ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b06-white-kahlua"
      }
    },
    {
      "id": "black-russian",
      "name": "Black Russian",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "VODKA",
          "flavors": [
            "KAFFEE",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Vodka",
          "flavors": [
            "Kaffee",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Vodka und Kahlúa, sonst nichts: der Black Russian ist ein kurzer, geradliniger Klassiker mit dunkler Kaffeesüße und klarer Spirituosenstruktur.",
        "portrait": "Brüssel, 1949. Im Hotel Metropole soll Barkeeper Gustave Tops einen Cocktail für die amerikanische Diplomatin Perle Mesta kreiert haben. Der Black Russian war ungewöhnlich schlicht und passte mit seiner dunklen Farbe und seinem kräftigen Charakter in die Barkultur der Nachkriegszeit.\n\nDie Kombination aus Vodka und Kaffeelikör entfaltet einen konzentrierten Geschmack. Absolut Elyx bringt eine klare, kräftige Grundlage mit, während Kahlúa für gerösteten Kaffee, eine leichte Karamellnote und dunkle Süße sorgt. Auf Eis wird der Drink allmählich weicher, ohne seine deutliche Spirituosenstruktur zu verlieren. Der Abgang bleibt kaffeebetont und angenehm warm.\n\nEin Cocktail für Gäste, die einen kurzen, kräftigen Drink nach dem Essen bevorzugen. Seine spätere Verwandlung zum White Russian gelang durch eine einfache Ergänzung: Sahne."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "neutraler Wodka",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-115-absolut-elyx",
            "inventoryName": "Absolut Elyx"
          },
          "evidence": "quelle-web-b07-black-iba | M-004 | M-027 BLOCK07"
        },
        {
          "position": 2,
          "name": "Kaffeelikör",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-064-kahlua",
            "inventoryName": "Kahlúa"
          },
          "evidence": "quelle-web-b07-black-iba | M-027 BLOCK07"
        }
      ],
      "preparation": {
        "housebarText": "Tumbler Typ 1 mit Eis füllen. 50 ml Absolut Elyx und 20 ml Kahlúa zugeben; nach Wunsch mit dem Barlöffel kurz sanft verrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-004 OPTIONAL",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die generischen Vodka- und Kaffeelikör-Rollen werden mit Absolut Elyx und Kahlúa besetzt; das Verrühren wird in der Hausbar nur optional geführt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b07-black-iba"
      }
    },
    {
      "id": "godfather",
      "name": "Godfather",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "NUSSIG",
            "TROCKEN"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Nussig",
            "Trocken"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Blended Scotch und Amaretto im 3:1-Verhältnis auf Eis – spirituosenbetont, nussig und bewusst trocken balanciert.",
        "portrait": "Der Godfather gehört zur Cocktailwelt der 1970er-Jahre, als kräftige Spirituosen gerne mit süßen Likören kombiniert wurden. Sein Name erinnert an den berühmten Mafiafilm *The Godfather*. Ob Marlon Brando diesen Drink tatsächlich besonders schätzte, ist allerdings nicht zuverlässig belegt.\n\nIn dieser Hausbarfassung zeigt Johnnie Walker 18 Years seine weiche, vielschichtige Scotch-Aromatik. Feine Holznoten, reife Früchte und eine zurückhaltende Rauchigkeit treffen auf die warme Mandelsüße von Disaronno. Das bewusst whiskeybetonte Verhältnis sorgt dafür, dass der Amaretto den Charakter des Scotch ergänzt, ohne ihn zu überdecken. Der Nachklang bleibt nussig, würzig und angenehm trocken.\n\nEin Drink für einen ruhigen Abend, wenn ein guter Whisky etwas Abwechslung bekommen soll. Besonders interessant ist, wie unterschiedlich der Godfather je nach Verhältnis von Scotch und Amaretto schmecken kann."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Blended Scotch",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-129-johnnie-walker-18-years",
            "inventoryName": "Johnnie Walker 18 Years"
          },
          "evidence": "quelle-web-b07-godfather-difford | M-004 | M-027 BLOCK07"
        },
        {
          "position": 2,
          "name": "Amaretto",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-058-disaronno-originale-amaretto",
            "inventoryName": "Disaronno Originale Amaretto"
          },
          "evidence": "quelle-web-b07-godfather-difford | M-004 | M-027 BLOCK07"
        }
      ],
      "preparation": {
        "housebarText": "Tumbler Typ 1 mit Eis füllen. 60 ml Johnnie Walker 18 Years und 20 ml Disaronno Originale Amaretto zugeben und mit dem Barlöffel kurz kalt rühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die Hausbar baut den Drink direkt auf Eis im Servierglas statt nach separatem Rühren und Umfüllen auf; die Referenz-Orangenzeste wird nicht übernommen. Scotch und Amaretto werden mit Johnnie Walker 18 Years bzw. Disaronno Originale Amaretto besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b07-godfather-difford"
      }
    },
    {
      "id": "amaretto-sour",
      "name": "Amaretto Sour",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "NUSSIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Aperitif & Likör",
          "flavors": [
            "Nussig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Disaronno, frische Zitrone und wenig Zuckersirup – eine klare aktuelle Herstellerfassung des Amaretto Sour ohne erzwungenes Bourbon oder Eiweiß.",
        "portrait": "Als Amaretto in den 1970er-Jahren international populär wurde, fand der italienische Mandellikör auch seinen Weg in die Sour-Familie. Der Amaretto Sour entwickelte sich zu einem beliebten Cocktail, dessen Rezeptur im Laufe der Jahre unterschiedlich interpretiert wurde. Manche moderne Varianten ergänzen Bourbon und Eiweiß, während andere bewusst bei der einfacheren Grundidee bleiben.\n\nDiese Hausbarfassung stellt den Geschmack von Disaronno in den Mittelpunkt. Seine warmen Mandel- und Marzipannoten treffen auf die lebendige Säure frischer Zitrone. Eine kleine Menge Rohrzuckersirup verbindet beide Seiten, ohne die fruchtige Frische zu verdecken. Der Drink wirkt weich und nussig, erhält durch die Zitrone aber einen klaren, erfrischenden Charakter.\n\nBesonders angenehm als Aperitif oder nach einem guten Essen. Die Hausbar orientiert sich an der aktuellen Disaronno-Rezeptur und verzichtet bewusst auf Bourbon und Eiweiß."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Disaronno Originale Amaretto",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-058-disaronno-originale-amaretto",
            "inventoryName": "Disaronno Originale Amaretto"
          },
          "evidence": "quelle-web-b07-amaretto-disaronno | M-027 BLOCK07"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 25,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b07-amaretto-disaronno | Manifest M-014 | M-027 BLOCK07"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b07-amaretto-disaronno | M-004 | M-027 BLOCK07"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Disaronno Originale Amaretto, 25 ml frischen Zitronensaft und 5 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken; auf frisches Eis in Tumbler Typ 1 abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Shake-Eis; auf frischem Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Aktuelle Disaronno-50/25/5-ml-Fassung operativ übernommen; Zuckersirup mit realem Riemerschmid-Sirup konkretisiert. Optionales Eiweiß und die separate moderne Bourbon-/Eiweiß-Fassung werden nicht zur Pflicht gemacht; Zitronengarnitur nicht operativ vorausgesetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b07-amaretto-disaronno"
      }
    },
    {
      "id": "jungle-bird",
      "name": "Jungle Bird",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "TIKI_TROPICAL",
          "base": "RUM_CANE",
          "flavors": [
            "BITTER",
            "FRUCHTIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Tiki & Tropical",
          "base": "Rum & Cane",
          "flavors": [
            "Bitter",
            "Fruchtig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Dunkler Jamaica-Rum, Campari, Ananas und Limette: bittersüß, tropisch und deutlich kompakter als die historische 1973er Longdrink-Fassung.",
        "portrait": "Im Kuala Lumpur Hilton wurde Anfang der 1970er-Jahre ein Cocktail serviert, der die tropische Barkultur um eine ungewöhnliche Geschmacksrichtung bereicherte. Der Jungle Bird, häufig Barkeeper Jeffrey Ong zugeschrieben, verband Ananas und Rum mit der markanten Bitterkeit von Campari. Eine Kombination, die damals alles andere als selbstverständlich war.\n\nDie Hausbarfassung bringt dunklen Jamaica-Rum mit kräftigen, leicht würzigen Noten ins Glas. Saftige Ananas sorgt für tropische Süße, während Limette dem Drink Frische verleiht. Campari setzt einen deutlichen Kontrast mit Bitterorange und Kräutern. Auf Crushed Ice wirkt die Mischung lebendig und erfrischend, ohne ihre aromatische Tiefe zu verlieren.\n\nEin Cocktail für Gäste, die tropische Drinks mögen, aber keine reine Fruchtsüße erwarten. Frühe Jungle-Bird-Rezepturen enthielten deutlich mehr Ananassaft als viele heutige Fassungen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Blackstrap Rum",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-092-old-pascas-jamaica-dark-rum",
            "inventoryName": "Old Pascas Jamaica Dark Rum"
          },
          "evidence": "quelle-web-b07-jungle-liquor | quelle-web-b07-jungle-difford | M-004 | M-027 BLOCK07"
        },
        {
          "position": 2,
          "name": "Campari",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-003-campari",
            "inventoryName": "Campari"
          },
          "evidence": "quelle-web-b07-jungle-liquor | M-027 BLOCK07"
        },
        {
          "position": 3,
          "name": "Ananassaft",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b07-jungle-liquor | Manifest M-014 | M-027 BLOCK07"
        },
        {
          "position": 4,
          "name": "frischer Limettensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b07-jungle-liquor | Manifest M-014 | M-027 BLOCK07"
        },
        {
          "position": 5,
          "name": "Demerara-Sirup",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b07-jungle-liquor | M-004 | M-027 BLOCK07"
        }
      ],
      "preparation": {
        "housebarText": "45 ml Old Pascas Jamaica Dark Rum, 22,5 ml Campari, 45 ml Ananassaft, 15 ml frischen Limettensaft und 15 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken; in Tumbler Typ 2 auf Crushed Ice abseihen. Beim zweiteiligen Shaker das Barsieb verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "secondary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Crushed Ice",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die Blackstrap-Rum-Rolle wird mit Old Pascas Jamaica Dark Rum aus derselben Dark-/Black-/Blackstrap-Rumfamilie besetzt; Demerara-Sirup wird mangels Demerara-Sirup im Bestand durch Riemerschmid Rohrzucker Bar-Sirup ersetzt. Die Hausbar serviert im größeren Tumbler auf Crushed Ice und übernimmt die Ananasgarnitur nicht."
      },
      "trace": {
        "primarySourceId": "quelle-web-b07-jungle-liquor"
      }
    },
    {
      "id": "daiquiri",
      "name": "Daiquiri",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "RUM_CANE",
          "flavors": [
            "TROCKEN",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Rum & Cane",
          "flavors": [
            "Trocken",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Ein präziser Rum-Sour aus leichtem Rum, frischer Limette und Rohrzuckersirup – klar, trocken und ohne Frozen- oder Fruchtvariante.",
        "portrait": "Kuba, Ende des 19. Jahrhunderts. In der Nähe von Santiago de Cuba wurde ein einfacher Rumcocktail bekannt, dessen Name auf den Ort Daiquirí zurückgeht. Der Amerikaner Jennings Cox wird häufig mit seiner frühen Verbreitung verbunden. Die Verbindung aus Rum, Zitrusfrucht und Zucker war allerdings schon zuvor bekannt.\n\nEin klassischer Daiquiri lebt von der Qualität seiner wenigen Aromen. Der El Dorado 3 Year Old bringt eine weiche, leicht fruchtige Rumgrundlage mit. Frische Limette setzt eine klare Säure dagegen, während ein wenig Rohrzuckersirup beide Seiten verbindet. Das Ergebnis ist frisch, trocken und angenehm geradlinig. Im Abgang bleibt eine feine Süße, die den Rum begleitet, ohne ihn zu überdecken.\n\nEin Aperitif für Liebhaber klarer, zitrischer Cocktails. Mit gefrorenen Frucht-Daiquiris hat diese klassische Hausbarfassung wenig gemeinsam."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "weißer kubanischer Rum",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-090-el-dorado-3-year-old-white-rum",
            "inventoryName": "El Dorado 3 Year Old White Rum"
          },
          "evidence": "quelle-web-b08-daiquiri-difford | M-004 | M-027 BLOCK08"
        },
        {
          "position": 2,
          "name": "frischer Limettensaft",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b08-daiquiri-difford | Manifest M-014 | M-027 BLOCK08"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b08-daiquiri-difford | M-004 | M-016 | M-027 BLOCK08"
        }
      ],
      "preparation": {
        "housebarText": "60 ml El Dorado 3 Year Old White Rum, 20 ml frischen Limettensaft und 10 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken. In das vorgekühlte Martiniglas abseihen; Feinsieb nur optional."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Shake-Eis; ohne Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER; EQ-WERK-007 OPTIONAL",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006",
            "EQ-WERK-007"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die Hausbar verwendet 60/20/10 ml mit Riemerschmid Rohrzucker Bar-Sirup statt der IBA-Zuckerfassung; der generische weiße Rum wird mit El Dorado 3 Year Old White Rum besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b08-daiquiri-difford"
      }
    },
    {
      "id": "rum-old-fashioned",
      "name": "Rum Old Fashioned",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "RUM_CANE",
          "flavors": [
            "KRAEUTERIG",
            "SUESS",
            "ZITRISCH"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Rum & Cane",
          "flavors": [
            "Kräuterig",
            "Süß",
            "Zitrisch"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Gereifter Rum entfaltet warme Vanille, feines Karamell und würzige Tiefe – ein kräftiger Cocktail mit sanfter Süße und langem Nachklang.",
        "portrait": "Die Idee des Old Fashioned ist älter als viele der heute bekannten Cocktailklassiker. Eine kräftige Spirituose, etwas Süße und aromatische Bitterstoffe bilden seit Generationen seine Grundlage. Beim Rum Old Fashioned wird dieses vertraute Prinzip auf gereiften Rum übertragen und erhält dadurch einen wärmeren, tropischeren Charakter.\n\nIn der Hausbarfassung entfaltet Plantation XO 20th Anniversary seine weichen Noten von Vanille, Karamell und reifer Frucht. Eine kleine Menge Rohrzuckersirup rundet den Geschmack ab, während aromatische Bitterstoffe und Orangenbitter für Würze und einen frischen Kontrast sorgen. Über einem großen Eiswürfel entwickelt sich der Drink langsam und bleibt bis zum letzten Schluck angenehm voll.\n\nEin Cocktail für einen ruhigen Abend und Gäste, die gereiften Rum gerne pur genießen. Wissenswert: Rum Old Fashioned bezeichnet eine Variantenfamilie, keine einzelne historische Standardrezeptur."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Plantation XO 20th Anniversary",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-093-plantation-xo-20th-anniversary",
            "inventoryName": "Plantation XO 20th Anniversary"
          },
          "evidence": "quelle-web-b08-rumof-planteray | quelle-web-b08-rumof-product | M-004 | M-027 BLOCK08"
        },
        {
          "position": 2,
          "name": "Demerara-Sirup",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b08-rumof-planteray | M-004 | M-016 | M-027 BLOCK08"
        },
        {
          "position": 3,
          "name": "Aromatic Bitters",
          "amount": 0.6,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
            "inventoryName": "The Bitter Truth Old Time Aromatic Bitters"
          },
          "evidence": "quelle-web-b08-rumof-planteray | Manifest M-008 | M-004 | M-027 BLOCK08"
        },
        {
          "position": 4,
          "name": "orange bitters",
          "amount": 0.6,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-013-the-bitter-truth-orange-bitters",
            "inventoryName": "The Bitter Truth Orange Bitters"
          },
          "evidence": "quelle-web-b08-rumof-planteray | Manifest M-008 | M-004 | M-027 BLOCK08"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Plantation XO 20th Anniversary, 5 ml Riemerschmid Rohrzucker Bar-Sirup, 0,6 ml The Bitter Truth Old Time Aromatic Bitters und 0,6 ml The Bitter Truth Orange Bitters mit Eis im Rührglas kalt rühren. Über einen großen Eiswürfel in Tumbler Typ 1 abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "großer Eiswürfel / auf Eis servieren",
        "garnish": "Orangenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Demerara-Sirup sowie Aromatic und Orange Bitters werden durch vorhandene Produkte derselben Funktion ersetzt: Riemerschmid Rohrzucker Bar-Sirup, The Bitter Truth Old Time Aromatic Bitters und The Bitter Truth Orange Bitters."
      },
      "trace": {
        "primarySourceId": "quelle-web-b08-rumof-planteray"
      }
    },
    {
      "id": "tommys-margarita",
      "name": "Tommy’s Margarita",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "AGAVE",
          "flavors": [
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Agave",
          "flavors": [
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Gereifter Tequila, frische Limette und eine feine Süße prägen diese klare, ausdrucksstarke Margarita mit warmen Agavennoten.",
        "portrait": "In San Francisco entwickelte Julio Bermejo Ende der 1980er-Jahre im Familienrestaurant Tommy’s Mexican Restaurant eine Margarita, die den Geschmack des Tequilas stärker in den Mittelpunkt stellte. Er verzichtete auf den üblichen Orangenlikör und verwendete stattdessen Agavensüße. Daraus entstand eine eigenständige Variante, die heute international bekannt ist.\n\nDiese private Hausbarfassung bewahrt die frische, klare Grundidee. Patrón Añejo bringt warme Agavennoten, feine Holznuancen und eine sanfte Würze mit. Limette sorgt für lebendige Säure, während Rohrzuckersirup die Aromen verbindet. Der Geschmack bleibt frisch und tequila-betont, mit einem angenehm trockenen Nachklang.\n\nEin Drink für Gäste, die Margarita mögen und den Charakter eines guten Tequilas stärker erleben möchten. Die Hausbar verwendet bewusst Rohrzuckersirup anstelle des klassischen Agavensirups und kennzeichnet diese Abweichung als eigene Variante."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "100%-Agave-Tequila",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-109-patron-anejo",
            "inventoryName": "Patrón Añejo"
          },
          "evidence": "quelle-web-b08-tommys-iba | quelle-web-b08-tommys-patron | M-004 | M-027 BLOCK08"
        },
        {
          "position": 2,
          "name": "frischer Limettensaft",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b08-tommys-iba | Manifest M-014 | M-027 BLOCK08"
        },
        {
          "position": 3,
          "name": "Agavensirup",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Manifest M-016 | M-021/M-022 | M-027 BLOCK08"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Patrón Añejo, 30 ml frischen Limettensaft und 15 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken. Auf frisches Eis in Tumbler Typ 1 abseihen. Kein Triple Sec."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf frischem Eis servieren",
        "garnish": "Limette",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Mangels Agavensirup verwendet die private Hausbar 15 ml Riemerschmid Rohrzucker Bar-Sirup als bewusste Süßungsabweichung; kein Triple Sec."
      },
      "trace": {
        "primarySourceId": "quelle-web-b08-tommys-iba"
      }
    },
    {
      "id": "pisco-punch",
      "name": "Pisco Punch",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "BRANDY_WEINBRAND",
          "flavors": [
            "FRUCHTIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Brandy & Weinbrand",
          "flavors": [
            "Fruchtig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Eine moderne, tropisch-zitrische Pisco-Punch-Hausbarfassung mit Pisco, Ananas, Limette und Sirup – klar getrennt vom verlorenen Bank-Exchange-Original.",
        "portrait": "San Francisco zur Zeit des Goldrausches und der folgenden Jahrzehnte: In der Bank Exchange wurde ein Pisco Punch berühmt, dessen Rezeptur Barkeeper Duncan Nicol sorgfältig hütete. Gäste schwärmten von seinem Geschmack, doch das genaue Originalrezept ging verloren. Bis heute versuchen Cocktailhistoriker, sein Geheimnis zu entschlüsseln.\n\nDie Hausbar greift diese Geschichte auf, ohne eine historische Rekonstruktion vorzutäuschen. Barsol Pisco Moscatel bringt duftige Trauben- und Blütennoten mit, die sich mit saftiger Ananas und frischer Limette verbinden. Eine zurückhaltende Süße rundet den tropischen Charakter ab. Der Drink wirkt weich und fruchtig, besitzt aber eine lebendige, klare Säure.\n\nEin schöner Cocktail für einen geselligen Abend. Sein besonderer Reiz liegt in der Verbindung einer geheimnisvollen Barkultur mit einer unkomplizierten, modernen Hausbarfassung."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Pisco Italia",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-080-barsol-pisco-moscatel",
            "inventoryName": "Barsol Pisco Moscatel"
          },
          "evidence": "quelle-web-b08-pisco-suyo | quelle-web-b08-pisco-barsol | M-004 | M-027 BLOCK08"
        },
        {
          "position": 2,
          "name": "Ananassaft",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b08-pisco-suyo | Manifest M-014 | M-027 BLOCK08"
        },
        {
          "position": 3,
          "name": "frischer Limettensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b08-pisco-suyo | Manifest M-014 | M-027 BLOCK08"
        },
        {
          "position": 4,
          "name": "Zuckersirup",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b08-pisco-suyo | Manifest M-016 | M-004 | M-027 BLOCK08"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Barsol Pisco Moscatel, 60 ml Ananassaft, 15 ml frischen Limettensaft und 15 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis shaken. Auf frisches Eis in Tumbler Typ 2 abseihen. Keine Soda- oder Geheimzutat ergänzen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "auf frischem Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "SUYO-Mengen werden auf 60/60/15/15 ml normalisiert; der in der ausgewählten englischen SUYO-Fassung optionale Simple Syrup wird für die Hausbarfassung fest mit 15 ml geführt, optionales Soda und die Quellengarnitur werden nicht übernommen. SUYO Pisco Italia wird gemäß M-004 durch den vorhandenen Barsol Pisco Moscatel als aromatisch nähere Hausbaralternative ersetzt; Moscatel ist nicht mit Italia gleichzusetzen. Tumbler Typ 2 folgt der bereits stabil dokumentierten Nutzerentscheidung. Die Hausbar-Zubereitung weicht bewusst von der ausgewählten englischen SUYO-Fassung ab: statt direktem Aufbau auf Eis wird mit Eis geshakt und auf frisches Eis abgeseiht. Die abweichende spanische SUYO-Fassung mit Rühren mit Eis und Abseihen in eine Coupe wird nicht übernommen. Kein Anspruch auf Rekonstruktion des Bank-Exchange-Originals."
      },
      "trace": {
        "primarySourceId": "quelle-web-b08-pisco-suyo"
      }
    },
    {
      "id": "monte-carlo",
      "name": "Monte Carlo",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "KRAEUTERIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Kräuterig"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Rye, Bénédictine und Aromatic Bitters: ein konzentrierter, gerührter Klassiker zwischen Old-Fashioned- und Manhattan-Verwandtschaft.",
        "portrait": "Der Monte Carlo gehört zu den stilleren Klassikern der amerikanischen Cocktailgeschichte. Spätestens 1948 erschien seine Rezeptur in David Emburys The Fine Art of Mixing Drinks. Wer ihn ursprünglich erfand, ist nicht bekannt. Seine Verwandtschaft mit dem Old Fashioned ist dagegen unverkennbar, auch wenn Bénédictine ihm einen ganz eigenen Charakter verleiht.\n\nIn dieser Hausbarfassung bringt Bulleit Rye eine kräftige, leicht pfeffrige Würze mit. Der französische Kräuterlikör ergänzt honigartige Süße, warme Gewürze und eine feine Kräuternote. Aromatische Bitterstoffe geben dem Drink zusätzliche Tiefe. Auf einem großen Eiswürfel entwickelt sich der Geschmack langsam und bleibt angenehm trocken.\n\nEin Cocktail für ruhige Abende und Liebhaber charaktervoller Whiskeydrinks. Interessant ist, dass historische Fassungen deutlich süßer ausfallen konnten als heutige Interpretationen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Straight Rye Whiskey (50 % Vol.)",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-124-bulleit-rye",
            "inventoryName": "Bulleit Rye"
          },
          "evidence": "quelle-web-b08-monte-difford | quelle-web-b08-monte-bulleit | M-004 | M-027 BLOCK08"
        },
        {
          "position": 2,
          "name": "Bénédictine D.O.M.",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-059-dom-benedictine",
            "inventoryName": "Bénédictine D.O.M."
          },
          "evidence": "quelle-web-b08-monte-difford | M-027 BLOCK08"
        },
        {
          "position": 3,
          "name": "Angostura Bitters",
          "amount": 0.3,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
            "inventoryName": "The Bitter Truth Old Time Aromatic Bitters"
          },
          "evidence": "quelle-web-b08-monte-difford | Manifest M-008 | M-004 | M-027 BLOCK08"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Bulleit Rye, 15 ml Bénédictine D.O.M. und 0,3 ml The Bitter Truth Old Time Aromatic Bitters im Rührglas mit Eis kalt rühren. Über einen großen Eiswürfel in Tumbler Typ 1 abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "großer Eiswürfel / auf Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Der von Difford spezifizierte Straight Rye Whiskey mit 100 proof / 50 % Vol. wird mangels 50-%-Rye im Bestand durch Bulleit Rye (45 % Vol.) als beste vorhandene Rye-Alternative ersetzt; Angostura wird durch The Bitter Truth Old Time Aromatic Bitters derselben Funktion ersetzt; die optionale Zitronenzeste einer Referenzfassung wird nicht als Hausbargarnitur übernommen."
      },
      "trace": {
        "primarySourceId": "quelle-web-b08-monte-difford"
      }
    },
    {
      "id": "rob-roy",
      "name": "Rob Roy",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "KRAEUTERIG",
            "TROCKEN"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Kräuterig",
            "Trocken"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Scotch-Manhattan-Klassiker mit Johnnie Walker 18, Noilly Prat Rouge und Aromatic Bitters – trocken-würzig, spirituosenbetont und ohne nicht verfügbare Kirschgarnitur.",
        "portrait": "New York, Ende des 19. Jahrhunderts. Eine Operette über den schottischen Volkshelden Rob Roy MacGregor begeisterte das Publikum. In dieser Zeit wurde auch ein Cocktail bekannt, der seinen Namen trug und den amerikanischen Manhattan mit schottischem Whisky verband.\n\nDie Hausbarfassung setzt auf Johnnie Walker 18 Years. Seine weichen Holznoten, reifen Früchte und die dezente Rauchigkeit treffen auf die Kräuter und die sanfte Süße von Noilly Prat Rouge. Aromatische Bitterstoffe geben dem Drink zusätzliche Würze. Eiskalt serviert zeigt er eine elegante Balance zwischen der Wärme des Scotch und der aromatischen Tiefe des Wermuts. Der Nachklang bleibt lang und leicht trocken.\n\nFür Gäste, die guten Scotch schätzen und ihn gelegentlich als klassischen Cocktail erleben möchten. Der Rob Roy gilt als schottischer Verwandter des Manhattan."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Blended Scotch",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-129-johnnie-walker-18-years",
            "inventoryName": "Johnnie Walker 18 Years"
          },
          "evidence": "quelle-web-b09-robroy-liquor | quelle-web-b09-robroy-jw18 | Manifest M-004"
        },
        {
          "position": 2,
          "name": "süßer roter Wermut",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "quelle-web-b09-robroy-liquor | quelle-web-b09-robroy-noilly | Manifest M-004"
        },
        {
          "position": 3,
          "name": "Angostura Bitters",
          "amount": 0.9,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
            "inventoryName": "The Bitter Truth Old Time Aromatic Bitters"
          },
          "evidence": "quelle-web-b09-robroy-liquor | quelle-web-b09-robroy-tbt | Manifest M-008"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Johnnie Walker 18 Years, 22,5 ml Noilly Prat Rouge und 0,9 ml The Bitter Truth Old Time Aromatic Bitters mit Eis im Rührglas kalt rühren; in ein vorgekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "ohne Eis im Servierglas",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Scotch, süßer roter Wermut und Aromatic Bitters werden mit vorhandenen Hausbarprodukten derselben Rollen besetzt; die Referenzkirsche wird nicht übernommen und das Nick-&-Nora-/Cocktailglas durch das Martiniglas ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b09-robroy-liquor"
      }
    },
    {
      "id": "lebkuchen-rum-sour",
      "name": "Lebkuchen Rum Sour",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "RUM_CANE",
          "flavors": [
            "KRAEUTERIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Rum & Cane",
          "flavors": [
            "Kräuterig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Private winterliche Rum-Sour-Fassung aus Bar Seibert’s Lebkuchen-Rum, frischem Zitronensaft und Rohrzuckersirup – klar, würzig und bewusst ohne operatives Eiweiß.",
        "portrait": "Die Sour-Familie gehört seit dem 19. Jahrhundert zur klassischen Barkultur. Ihre einfache Verbindung von Spirituose, Zitrusfrucht und Süße lässt viel Raum für eigene Ideen. Der Lebkuchen Rum Sour nutzt genau diese Freiheit und bringt eine winterliche Note in die Hausbar.\n\nBar Seibert’s Lebkuchen-Rum erinnert mit seinen Gewürzaromen an Zimt, Nelken und frisch gebackenes Gebäck. Frische Zitrone setzt einen lebendigen Kontrast, während eine kleine Menge Rohrzuckersirup die kräftigen Aromen verbindet. Der Cocktail bleibt frisch und klar, obwohl sein Duft an die kühleren Monate erinnert. Die Hausbarfassung verzichtet bewusst auf Eiweiß und bewahrt damit einen geradlinigen Charakter.\n\nEin Drink für gemütliche Abende, wenn es etwas Würziges sein darf. Diese konkrete Kombination ist eine private Hausbarvariante und kein historisch überlieferter Sour."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bar Seibert’s Lebkuchen-Rum",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-091-lebkuchen-rum",
            "inventoryName": "Bar Seibert’s Lebkuchen-Rum"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Inventar v7.66"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 25,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b09-lrs-iba | Manifest M-014"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b09-lrs-iba | Manifest M-016 | Manifest M-004"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Bar Seibert’s Lebkuchen-Rum, 25 ml frischen Zitronensaft und 15 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken; in Tumbler Typ 1 über frisches Eis abseihen. Barsieb nur beim zweiteiligen Shaker zusätzlich verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "frisches Eis im Servierglas",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die private 50/25/15-ml-Lebkuchen-Rum-Fassung wird ohne optionales Eiweiß und ohne optionale Zitrusgarnitur geführt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b09-lrs-iba"
      }
    },
    {
      "id": "tequila-sunrise",
      "name": "Tequila Sunrise",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "AGAVE",
          "flavors": [
            "FRUCHTIG",
            "SUESS"
          ],
          "strength": "LEICHT",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Agave",
          "flavors": [
            "Fruchtig",
            "Süß"
          ],
          "strength": "Leicht",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "José Cuervo Especial Silver, frischer Orangensaft und Grenadine im klassischen Sunrise-Farbverlauf – moderne 1970er-Linie klar von älteren 1930er-Vorläufern getrennt.",
        "portrait": "Der Tequila Sunrise wurde in den 1970er-Jahren zu einem Symbol der kalifornischen Barkultur. Besonders bekannt wurde die moderne Variante durch die Barszene rund um Sausalito und ihre Verbindung zur Rockmusik. Schon Jahrzehnte zuvor existierte allerdings ein anderer Cocktail unter demselben Namen.\n\nSeine auffälligste Eigenschaft zeigt sich bereits im Glas. Grenadine sinkt langsam durch den Orangensaft und erzeugt einen Farbverlauf, der an einen Sonnenaufgang erinnert. Geschmacklich treffen saftige Orange und eine angenehme Fruchtsüße auf die klaren Agavennoten von José Cuervo Especial Silver. Der Drink wirkt weich, fruchtig und leicht zugänglich.\n\nEin unkomplizierter Longdrink für gesellige Runden. Interessant ist, dass die ältere Sunrise-Version aus den 1930er-Jahren noch mit ganz anderen Aromen arbeitete, darunter Cassis und Limette."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "José Cuervo Especial Silver",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-108-jose-cuervo-especial-silver",
            "inventoryName": "José Cuervo Especial Silver"
          },
          "evidence": "quelle-web-b10-ts-cuervo | quelle-web-b10-ts-cuervo-product"
        },
        {
          "position": 2,
          "name": "frischer Orangensaft",
          "amount": 120,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b10-ts-cuervo | Manifest M-014 | Manifest M-006"
        },
        {
          "position": 3,
          "name": "Grenadine",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-095-bols-grenadine-syrup",
            "inventoryName": "Bols Grenadine Syrup"
          },
          "evidence": "quelle-web-b10-ts-cuervo | Inventar v7.66 | Manifest M-004"
        }
      ],
      "preparation": {
        "housebarText": "60 ml José Cuervo Especial Silver und 120 ml frischen Orangensaft ins Longdrinkglas Typ 1 geben, Eis zugeben und 15 ml Bols Grenadine Syrup langsam an der Glasinnenseite herablaufen lassen. Für den Sunrise-Effekt vor dem Servieren nicht verrühren; optional Orangenscheibe."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas Typ 1",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-007",
            "text": "größeres Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eiswürfel",
        "garnish": "Orangenscheibe",
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Cuervo-Mengen 60/120/15 ml vollständig übernommen; Especial Silver exakt real vorhanden; generische Grenadine nach M-004 durch Bols Grenadine Syrup konkretisiert. Kirsche mangels bestätigtem Hausbarbestand nicht operativ geführt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b10-ts-cuervo"
      }
    },
    {
      "id": "fuzzy-navel",
      "name": "Fuzzy Navel",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "FRUCHTIG",
            "SUESS"
          ],
          "strength": "LEICHT",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Aperitif & Likör",
          "flavors": [
            "Fruchtig",
            "Süß"
          ],
          "strength": "Leicht",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Bols Peach und frischer Orangensaft: der einfache 1980er-Fuzzy-Navel ohne Vodka, klar vom Hairy Navel abgegrenzt.",
        "portrait": "Mitte der 1980er-Jahre eroberte Pfirsichlikör die amerikanische Barszene. Mit der Einführung von Peachtree wurde auch der Fuzzy Navel bekannt, ein Cocktail, der mit seiner fruchtigen Einfachheit zum Geschmack dieser Zeit passte. Hinter dem ungewöhnlichen Namen steckt ein kleines Wortspiel: „Fuzzy“ erinnert an die samtige Haut des Pfirsichs, „Navel“ an die gleichnamige Orangensorte.\n\nDer Geschmack ist weich, saftig und ausgesprochen fruchtbetont. Bols Peach bringt den Duft reifer Pfirsiche mit, während frischer Orangensaft eine lebendige, leicht säuerliche Note ergänzt. Die natürliche Süße beider Zutaten verbindet sich zu einem milden, erfrischenden Drink, der ohne zusätzliche Spirituosenbasis auskommt.\n\nBesonders passend für Gäste, die leichte, süße Fruchtcocktails mögen. Der Fuzzy Navel zeigt, wie sehr die Cocktailmode der 1980er-Jahre von unkomplizierten, zugänglichen Geschmackskombinationen geprägt war."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Peach Schnapps / Pfirsichlikör",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-053-bols-peach",
            "inventoryName": "Bols Peach"
          },
          "evidence": "quelle-web-b10-fn-difford | quelle-web-b10-fn-bols | Manifest M-004"
        },
        {
          "position": 2,
          "name": "frischer Orangensaft",
          "amount": 120,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b10-fn-difford | Manifest M-014 | Manifest M-006"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Bols Peach und 120 ml frischen Orangensaft mit Eis im vorhandenen Shaker kräftig shaken; in Longdrinkglas Typ 1 auf Eis abseihen. Barsieb nur bei zweiteiligem Shaker zusätzlich verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas Typ 1",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-007",
            "text": "größeres Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis",
        "garnish": "Zitronenscheibe",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Der generische Peach Schnapps wird durch Bols Peach ersetzt; das Collinsglas wird durch Longdrinkglas Typ 1 ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b10-fn-difford"
      }
    },
    {
      "id": "apple-martini",
      "name": "Apple Martini",
      "aliasesText": "Appletini | Sour Apple Martini",
      "aliases": [
        "Appletini",
        "Sour Apple Martini"
      ],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "VODKA",
          "flavors": [
            "FRUCHTIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Vodka",
          "flavors": [
            "Fruchtig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Vodka, Bols Sour Apple, frische Zitrone und Rohrzuckersirup: eine geschlossen gewählte moderne Appletini-Fassung mit klarer 1996er-Historienabgrenzung.",
        "portrait": "West Hollywood, 1996. In der Bar Lola’s entstand ein Cocktail, der bald unter dem Namen Appletini bekannt wurde. Mit seiner auffälligen Apfelnote passte er in eine Zeit, in der fruchtige Martinivarianten die amerikanischen Cocktailkarten eroberten. Trotz seines Namens hat er mit dem klassischen Dry Martini wenig gemeinsam.\n\nDie Hausbarfassung verbindet Absolut Elyx mit dem lebendigen Geschmack von Bols Sour Apple. Frische Zitrone verstärkt die fruchtige Säure, während ein wenig Rohrzuckersirup für eine angenehme Balance sorgt. Der Drink erinnert an knackige grüne Äpfel, wirkt frisch und leicht süßlich, ohne seine klare Vodkabasis vollständig zu verlieren.\n\nEin Aperitif für Gäste, die fruchtige Cocktails mit deutlicher Säure bevorzugen. Interessant ist, wie unterschiedlich die Appletini-Rezepturen ausfallen: Manche enthalten Apfelsaft, andere setzen ausschließlich auf Apfellikör."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "neutraler Wodka",
          "amount": 40,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-115-absolut-elyx",
            "inventoryName": "Absolut Elyx"
          },
          "evidence": "quelle-web-b10-am-ebs | quelle-web-b10-am-elyx | Manifest M-004"
        },
        {
          "position": 2,
          "name": "saurer Apfellikör",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-054-bols-sour-apple",
            "inventoryName": "Bols Sour Apple"
          },
          "evidence": "quelle-web-b10-am-ebs | quelle-web-b10-am-bols-sour | Manifest M-004"
        },
        {
          "position": 3,
          "name": "frischer Zitronensaft",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b10-am-ebs | Manifest M-014 | Manifest M-006"
        },
        {
          "position": 4,
          "name": "Zuckersirup",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b10-am-ebs | Inventar v7.66 | Manifest M-004"
        }
      ],
      "preparation": {
        "housebarText": "40 ml Absolut Elyx, 20 ml Bols Sour Apple, 30 ml frischen Zitronensaft und 10 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis im vorhandenen Shaker kräftig shaken; durch das Feinsieb in ein gekühltes Martiniglas abseihen. Barsieb nur zusätzlich bei zweiteiligem Shaker."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "EXAKT_PASSEND"
        },
        "ice": "ohne Eis im Servierglas",
        "garnish": "Zitronenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-007; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-007",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "EBS-40/20/30/10-Struktur geschlossen übernommen; Vodka/Apple-Liqueur/Sirup nach M-004 mit realen Hausbarprodukten konkretisiert. EBS-Fine-Strain wird mit dem vorhandenen Feinsieb umgesetzt; Barsieb nur zusätzlich bei zweiteiligem Shaker. Kein neues Pflichtwerkzeug. Bols-Apfelsaft-Variante wird nicht vermischt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b10-am-ebs"
      }
    },
    {
      "id": "cherry-brandy-sour",
      "name": "Cherry Brandy Sour",
      "aliasesText": "Cherry Sour",
      "aliases": [
        "Cherry Sour"
      ],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "FRUCHTIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Aperitif & Likör",
          "flavors": [
            "Fruchtig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Kirschlikör, frische Zitrone und Zuckersirup als kompakter Frucht-Sour.",
        "portrait": "Schon im 19. Jahrhundert gehörten Sours zum festen Repertoire amerikanischer Bars. Ihre Verbindung aus alkoholischer Grundlage, frischer Zitrusfrucht und etwas Süße ließ sich mit ganz unterschiedlichen Spirituosen und Likören interpretieren. Der Cherry Brandy Sour folgt dieser Tradition und stellt den Geschmack reifer Kirschen in den Mittelpunkt.\n\nBols Cherry Brandy bringt eine dunkle, fruchtige Süße mit, die an eingelegte Kirschen und feine Mandelnoten erinnert. Frischer Zitronensaft setzt einen lebendigen Kontrast und verhindert, dass der Drink zu schwer wirkt. Ein wenig Rohrzuckersirup verbindet die Aromen. Der Geschmack bleibt weich und fruchtig, mit einem angenehm frischen Nachklang.\n\nBesonders passend für Gäste, die Kirschlikör mögen, aber einen Cocktail mit mehr Frische suchen. Die konkrete Hausbarfassung verzichtet bewusst auf Eiweiß und zusätzliche Liköre."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "cherry brandy",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-049-bols-cherry-brandy",
            "inventoryName": "Bols Cherry Brandy"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-b11-cbs-bols | Inventar v7.66"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 25,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Manifest M-014 | Manifest M-006"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Inventar v7.66 | Manifest M-004"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Bols Cherry Brandy, 25 ml frischen Zitronensaft und 10 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis kräftig shaken; in Tumbler Typ 1 auf frisches Eis abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf frischem Eis",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die private Hausbar bleibt bei 50/25/10 ml und übernimmt weder das Eiweiß noch die höheren Zitronen-/Sirupmengen der aktuellen Bols-Referenz; die Referenzkirsche wird nicht geführt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b11-cbs-bols"
      }
    },
    {
      "id": "apricot-sour",
      "name": "Apricot Sour",
      "aliasesText": "Apricot Brandy Sour",
      "aliases": [
        "Apricot Brandy Sour"
      ],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "FRUCHTIG",
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Aperitif & Likör",
          "flavors": [
            "Fruchtig",
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Aprikosenlikör, Zitrone und Zuckersirup in klassischer Sour-Architektur.",
        "portrait": "Aprikosenlikör gehört seit Langem zur Welt der klassischen Fruchtcocktails. Sein warmes, duftiges Aroma lässt sich besonders gut mit frischer Zitrone verbinden. Der Apricot Sour greift die historische Idee der Sour-Familie auf, ohne dass sich seine Entstehung auf einen einzelnen Barkeeper oder eine bestimmte Bar zurückführen lässt.\n\nIn dieser Hausbarfassung zeigt Bols Apricot Brandy seine weichen Noten von reifer Aprikose und feiner Fruchtsüße. Frischer Zitronensaft bringt eine klare Säure mit, während eine kleine Menge Rohrzuckersirup den Geschmack abrundet. Der Drink wirkt saftig und aromatisch, bleibt aber angenehm frisch. Im Nachklang erinnert er an reife Steinfrüchte.\n\nEin Cocktail für einen entspannten Aperitif oder einen sommerlichen Abend. Wissenswert ist, dass selbst offizielle Herstellerrezepte unterschiedliche Mischungsverhältnisse für diesen Sour verwenden."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Apricot Brandy",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-048-bols-apricot-brandy",
            "inventoryName": "Bols Apricot Brandy"
          },
          "evidence": "quelle-web-b11-as-bols-main | Inventar v7.66"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 25,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-b11-as-bols-main | Manifest M-014 | Manifest M-006"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "quelle-web-b11-as-bols-main | Inventar v7.66 | Manifest M-004"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Bols Apricot Brandy, 25 ml frischen Zitronensaft und 10 ml Riemerschmid Rohrzucker Bar-Sirup mit Eis shaken; in Tumbler Typ 1 auf frisches Eis abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf frischem Eis",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die aktuelle Bols-Cocktailseite bestätigt 50/25/10 ml. Generischer Zuckersirup wird nach M-004 mit realem Riemerschmid Rohrzucker Bar-Sirup konkretisiert; abweichende offizielle Bols-Produktseiten-Variante bleibt getrennt."
      },
      "trace": {
        "primarySourceId": "quelle-web-b11-as-bols-main"
      }
    },
    {
      "id": "raki-longdrink-highball",
      "name": "Rakı Longdrink & Highball",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "ANIS_RAKI_ABSINTHE",
          "flavors": [
            "KRAEUTERIG"
          ],
          "strength": "MITTEL",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Rakı, Anis & Absinthe",
          "flavors": [
            "Kräuterig"
          ],
          "strength": "Mittel",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Kräftiger türkischer Anisbrand wird mit kaltem Wasser angenehm weich und entfaltet seinen würzigen, aromatischen Charakter.",
        "portrait": "In der türkischen Esskultur gehört Rakı seit Generationen zu langen Abenden mit Meze, Fisch und guten Gesprächen. Traditionell wird der Anisbrand mit Wasser verdünnt, wodurch sich seine klare Farbe in ein milchiges Weiß verwandelt. Dieses als Louche-Effekt bekannte Phänomen entsteht durch die ätherischen Anisöle.\n\nDie Hausbar greift diese Tradition auf und serviert Tekirdağ No.10 als verlängerten Longdrink. Kaltes Trinkwasser mildert die Intensität des Rakı und lässt seine kräftigen Anisnoten weicher erscheinen. Der Geschmack bleibt würzig, aromatisch und leicht süßlich, mit einem langen, typischen Anisnachklang. Zusätzliche Aromen sind dafür nicht notwendig.\n\nBesonders passend als ruhiger Begleiter zu herzhaften Speisen und einem entspannten Abend. Diese konkrete Hausbarfassung verwendet ausschließlich Wasser, kein Soda und keine Zitronengarnitur. Sie ist eine private Serviervariante, kein historisch eigenständiger Cocktail."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Tekirdağ No.10 Rakı",
          "amount": 40,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-087-tekirdag-no-10-raki",
            "inventoryName": "Tekirdağ No.10 Rakı"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-b11-raki-no10 | Inventar v7.66"
        },
        {
          "position": 2,
          "name": "kaltes normales Trinkwasser",
          "amount": 100,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-b11-raki-no10 | Nutzerentscheidung S-006 | Manifest M-015"
        },
        {
          "position": 3,
          "name": "Zitrone",
          "amount": null,
          "unit": null,
          "required": {
            "code": "NEIN",
            "value": false
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Nutzerentscheidung S-006 | Manifest M-014"
        }
      ],
      "preparation": {
        "housebarText": "40 ml Tekirdağ No.10 Rakı in Longdrinkglas Typ 1 geben und mit 100 ml kaltem normalem Trinkwasser auffüllen. Kein Soda."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas Typ 1",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-007",
            "text": "größeres Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": null,
        "garnish": "",
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "40/100-Hausbarratio bleibt private Einordnung. Nach Nutzerentscheidung ausschließlich kaltes normales Trinkwasser, kein Soda; keine Zitronengarnitur. Keine kanonische Rakı-Highball-Urheberschaft behauptet."
      },
      "trace": {
        "primarySourceId": "quelle-web-b11-raki-no10"
      }
    },
    {
      "id": "ungava-dry-tonic",
      "name": "Ungava Dry Tonic",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "GIN",
          "flavors": [
            "BITTER",
            "KRAEUTERIG"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Gin",
          "flavors": [
            "Bitter",
            "Kräuterig"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Ungava Gin und Tonic Water als klare private Hausbar-Gin-&-Tonic-Fassung: 50/100 ml auf viel Eis, bewusst ohne Grapefruit.",
        "portrait": "Im Norden Kanadas wachsen Pflanzen, die dem Ungava Gin seinen ungewöhnlichen Charakter verleihen. Die Destillerie aus Québec verbindet klassische Gintradition mit ausgewählten Botanicals aus der arktischen Landschaft. Seine auffällig gelbe Farbe entsteht durch diese Pflanzen und macht ihn schon im Glas unverwechselbar.\n\nIn der Hausbar wird Ungava bewusst schlicht mit Tonic Water serviert. Der Gin bringt Wacholder, feine Kräuternoten und eine leicht würzige Bitterkeit mit. Das Tonic ergänzt Frische und eine zurückhaltende Süße, während viel Eis den Drink angenehm kühl hält. Der Geschmack bleibt klar und ginbetont, ohne von zusätzlichen Fruchtaromen überdeckt zu werden.\n\nEin erfrischender Longdrink für Gäste, die Gin gerne in seiner eigenen Aromatik erleben. Die private Hausbarfassung verzichtet bewusst auf die Grapefruit des Herstellerrezepts."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Ungava Canadian Premium Gin",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-044-ungava-canadian-premium-gin",
            "inventoryName": "Ungava Canadian Premium Gin"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-ungava-tonic | Inventar v7.66 | Manifest M-004"
        },
        {
          "position": 2,
          "name": "Tonic Water",
          "amount": 100,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-ungava-tonic | Manifest M-015 | S-007"
        }
      ],
      "preparation": {
        "housebarText": "Gin-Tonic-Kelch / Copa mit viel Eis füllen. 50 ml Ungava Canadian Premium Gin und 100 ml Tonic Water zugeben und vorsichtig direkt im Glas aufbauen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-008",
            "text": "Gin-Tonic-Kelch",
            "catalogName": "Gin-Tonic-Kelch / Copa"
          },
          "secondary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "viel Eis",
        "garnish": null,
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die private Hausbar verwendet 50/100 ml statt 45/60 ml, serviert im Gin-Tonic-Kelch statt im Old-Fashioned-Glas und übernimmt die Grapefruitgarnitur nicht."
      },
      "trace": {
        "primarySourceId": "quelle-web-nha-ungava-tonic"
      }
    },
    {
      "id": "aperol-spritz",
      "name": "Aperol Spritz",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPRITZ_APERITIF",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "BITTER",
            "SUESS",
            "ZITRISCH"
          ],
          "strength": "LEICHT",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Spritz & Aperitif",
          "base": "Aperitif & Likör",
          "flavors": [
            "Bitter",
            "Süß",
            "Zitrisch"
          ],
          "strength": "Leicht",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Leuchtende Bitterorange, feine Kräuternoten und trockener Champagner machen diesen Spritz frisch, prickelnd und angenehm bittersüß.",
        "portrait": "In den Bars Venetiens gehört der Spritz seit Generationen zum frühen Abend. Als Aperol 1919 in Padua vorgestellt wurde, entstand die Grundlage für eine Variante, die später weit über Italien hinaus bekannt werden sollte. Besonders in den 1950er-Jahren entwickelte sich der Aperol Spritz zu einem vertrauten Bestandteil der italienischen Aperitivo-Kultur.\n\nSeine leuchtend orange Farbe kündigt bereits den frischen, bittersüßen Geschmack an. Aperol bringt Orangenschale, feine Kräuter und eine sanfte Bitterkeit mit. In dieser Hausbarfassung sorgt Champagner für trockene Frische und eine lebendige Perlage. Ein wenig Sodawasser macht den Drink leichter, ohne seine fruchtige Aromatik zu verlieren.\n\nEin Aperitif für einen geselligen Abend. Die Hausbar bewahrt das klassische Verhältnis, verwendet jedoch bewusst Champagner anstelle von Prosecco."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Aperol",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-001-aperol",
            "inventoryName": "Aperol"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-aperol-recipe | Inventar v7.66 | Manifest M-004"
        },
        {
          "position": 2,
          "name": "Prosecco D.O.C.",
          "amount": 90,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-122-veuve-monsigny-brut-reserve-champagner",
            "inventoryName": "Champagne Vve. Monsigny Brut Réserve"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-aperol-recipe | Inventar v7.66 | PRIVATE_HAUSBAR_VARIANTE"
        },
        {
          "position": 3,
          "name": "neutrales Sodawasser",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-aperol-recipe | Manifest M-015 | S-008"
        }
      ],
      "preparation": {
        "housebarText": "Weißweinglas großzügig mit Eis füllen. 90 ml Champagne Vve. Monsigny Brut Réserve, 60 ml Aperol und 30 ml neutrales Sodawasser zugeben; optional mit Orangenscheibe garnieren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-003",
            "text": "Weißweinglas",
            "catalogName": "Weißweinglas"
          },
          "secondary": {
            "id": "EQ-GLAS-008",
            "text": "Gin-Tonic-Kelch",
            "catalogName": "Gin-Tonic-Kelch / Copa"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis gemäß Zubereitung",
        "garnish": "Orangenscheibe",
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Offizielle 3-2-1-Mengen 90/60/30 ml bleiben erhalten; Prosecco D.O.C. wird nicht behauptet, sondern durch die real vorhandene Champagne Vve. Monsigny Brut Réserve als private Hausbar-Schaumweinwahl ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-nha-aperol-recipe"
      }
    },
    {
      "id": "americano",
      "name": "Americano",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPRITZ_APERITIF",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "BITTER",
            "KRAEUTERIG"
          ],
          "strength": "LEICHT",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Spritz & Aperitif",
          "base": "Aperitif & Likör",
          "flavors": [
            "Bitter",
            "Kräuterig"
          ],
          "strength": "Leicht",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Campari und süßer roter Wermut, mit Soda verlängert: ein bitter-frischer italienischer Aperitif, leichter als der Negroni und dennoch klar verwandt.",
        "portrait": "Bevor der Negroni berühmt wurde, gehörte in Italien bereits der Milano-Torino zur Aperitifkultur. Sein Name verband die Herkunft von Campari aus Mailand mit dem Wermut aus Turin. Später wurde daraus der Americano, dessen Bezeichnung häufig mit seiner Beliebtheit bei amerikanischen Gästen erklärt wird.\n\nDer Americano zeigt die bittersüße Seite italienischer Barkultur in einer angenehm leichten Form. Campari bringt Bitterorange und würzige Kräuter mit, während roter Wermut für eine weiche Süße und aromatische Tiefe sorgt. Sodawasser öffnet die Aromen und verleiht dem Drink eine frische, leicht prickelnde Struktur. Der Nachklang bleibt angenehm herb.\n\nEin klassischer Aperitif für den frühen Abend. Interessant ist seine enge Verwandtschaft mit dem Negroni, bei dem Gin die Rolle des Sodawassers übernimmt."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Campari",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-003-campari",
            "inventoryName": "Campari"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-americano-iba | Inventar v7.66 | Manifest M-004"
        },
        {
          "position": 2,
          "name": "süßer roter Wermut",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-americano-academy | Inventar v7.66 | Manifest M-004"
        },
        {
          "position": 3,
          "name": "neutrales Sodawasser",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "quelle-web-nha-americano-iba | quelle-web-nha-americano-academy | Manifest M-015 | S-008"
        }
      ],
      "preparation": {
        "housebarText": "30 ml Campari, 30 ml Noilly Prat Rouge und 30 ml neutrales Sodawasser direkt in Tumbler Typ 1 auf Eis aufbauen. Optional kurz sanft mit dem Barlöffel rühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "Tumbler Typ 2",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eiswürfel im Servierglas",
        "garnish": "halbe Orangenscheibe und/oder Zitronenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004 OPTIONAL",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Der IBA-Soda-Splash wird für die Hausbar auf 30 ml neutrales Sodawasser festgelegt; süßer roter Wermut wird mit Noilly Prat Rouge besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-nha-americano-iba"
      }
    },
    {
      "id": "campari-soda",
      "name": "Campari Soda",
      "aliasesText": "Campari & Soda; Campari Seltz",
      "aliases": [
        "Campari & Soda",
        "Campari Seltz"
      ],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "BITTER"
          ],
          "strength": "LEICHT",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Aperitif & Likör",
          "flavors": [
            "Bitter"
          ],
          "strength": "Leicht",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Campari und Soda: bitter, prickelnd und erfrischend – ein Mailänder Aperitivo aus zwei Komponenten.",
        "portrait": "Mitten in Mailand, in der Galleria Vittorio Emanuele II, entwickelte sich das Camparino zu einem Treffpunkt der italienischen Aperitifkultur. Dort wurde Campari mit frisch aufgesprudeltem Wasser serviert. Die Verbindung aus bitterem Likör und lebendiger Kohlensäure wurde zu einem festen Bestandteil des Mailänder Aperitivo.\n\nDer Geschmack ist bewusst geradlinig. Campari bringt intensive Bitterorange, Kräuter und eine charakteristische herbe Tiefe mit. Kaltes Sodawasser macht diese Aromen leichter und lässt ihre fruchtigen Seiten stärker hervortreten. Die Kohlensäure sorgt für Frische, während der typische Campari-Nachklang lange erhalten bleibt.\n\nEin unkomplizierter Aperitif für Gäste, die ausgeprägte Bitteraromen mögen. Wissenswert: Bereits 1932 erschien Campari Soda in der kleinen, kegelförmigen Flasche, die der Futurist Fortunato Depero entwarf."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Campari",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-003-campari",
            "inventoryName": "Campari"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-campari-soda-de | Inventar v7.66 | Manifest M-004"
        },
        {
          "position": 2,
          "name": "neutrales Sodawasser",
          "amount": 150,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | quelle-web-nha-campari-soda-de | Manifest M-015 | S-008"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Campari in das Weißweinglas geben und mit 150 ml neutralem Sodawasser auffüllen. Direkt im Glas aufbauen; keine Pflichtgarnitur."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-003",
            "text": "Weißweinglas",
            "catalogName": "Weißweinglas"
          },
          "secondary": {
            "id": "EQ-GLAS-008",
            "text": "Gin-Tonic-Kelch",
            "catalogName": "Gin-Tonic-Kelch / Copa"
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": null,
        "garnish": null,
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "50/150 ml hält das aktuelle Herstellerverhältnis 1:3 exakt ein. Abweichung nur beim Glas: eigener Tulip-Typ fehlt; EQ-GLAS-003 Weißweinglas ist die bereits geprüfte Hausbaralternative."
      },
      "trace": {
        "primarySourceId": "quelle-web-nha-campari-soda-de"
      }
    },
    {
      "id": "averna-longdrink-highball-soda",
      "name": "Averna Soda",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "BITTER",
            "KRAEUTERIG"
          ],
          "strength": "LEICHT",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Aperitif & Likör",
          "flavors": [
            "Bitter",
            "Kräuterig"
          ],
          "strength": "Leicht",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Averna und neutrales Sodawasser als schlichter, herb-würziger Highball: 50/100 ml auf viel Eis, ausdrücklich als private Hausbarfassung.",
        "portrait": "Seit dem 19. Jahrhundert gehört Averna zur sizilianischen Likörtradition. Der Kräuterlikör aus Caltanissetta wurde ursprünglich vor allem als Digestif getrunken. In modernen Bars zeigt er eine andere Seite, wenn seine kräftigen Aromen mit erfrischenden Zutaten kombiniert werden.\n\nDiese private Hausbarfassung lässt dem Averna bewusst viel Raum. Dunkle Kräuternoten, Orangenschale und eine sanfte, beinahe karamellige Süße bestimmen den ersten Eindruck. Neutrales Sodawasser lockert den Geschmack auf und macht den Amaro leichter, ohne seine charakteristische Bitterkeit zu verlieren. Auf viel Eis entsteht ein erfrischender Longdrink mit einem angenehm würzigen Nachklang.\n\nBesonders passend für Gäste, die italienische Kräuterliköre mögen und sie einmal leichter genießen möchten. Die Hausbar verwendet ausschließlich neutrales Soda und verzichtet auf Ginger Ale oder Ginger Beer."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Amaro Averna Siciliano",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-143-amaro-averna-siciliano",
            "inventoryName": "Amaro Averna Siciliano"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-averna-ginger-schweppes | Inventar v7.66 | Manifest M-004"
        },
        {
          "position": 2,
          "name": "neutrales Sodawasser",
          "amount": 100,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-averna-ginger-schweppes | Q-averna-vertigo | Q-averna-roman | Manifest M-015 | S-008"
        }
      ],
      "preparation": {
        "housebarText": "Longdrinkglas Typ 1 mit viel Eis füllen. 50 ml Amaro Averna Siciliano zugeben und mit 100 ml neutralem Sodawasser auffüllen. Direkt im Glas aufbauen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas Typ 1",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-007",
            "text": "größeres Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "viel Eis",
        "garnish": null,
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Private 50/100-ml-Fassung mit neutralem Sodawasser. Aktuelle/gespeicherte Varianten mit aromatisierter Soda oder Ginger-Komponenten bleiben getrennte Evidenz und werden nicht operativ übernommen."
      },
      "trace": {
        "primarySourceId": "Q-averna-ginger-schweppes"
      }
    },
    {
      "id": "limoncello-collins",
      "name": "Limoncello Collins",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "GIN",
          "flavors": [
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Gin",
          "flavors": [
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Ein langer, zitrischer Collins-Riff aus Tanqueray London Dry Gin, Limoncello, frischem Zitronensaft und neutralem Sodawasser.",
        "portrait": "Die Collins-Familie gehört seit dem 19. Jahrhundert zur amerikanischen Cocktailgeschichte. Besonders der Tom Collins machte die Verbindung von Gin, Zitrone und Sodawasser bekannt. Der Limoncello Collins greift diese Idee auf und verbindet sie mit der italienischen Tradition des Zitronenlikörs.\n\nIn der Hausbar treffen die Wacholdernoten von Tanqueray London Dry Gin auf die duftige Süße von Marcati Limoncello. Frisch gepresste Zitrone bringt eine lebendige Säure mit, während Sodawasser dem Drink Leichtigkeit und eine feine Kohlensäure verleiht. Das Ergebnis erinnert an eine erwachsene Zitronenlimonade, bleibt durch den Gin jedoch aromatisch und angenehm trocken.\n\nEin Longdrink für warme Abende und Gäste, die frische Zitruscocktails schätzen. Die konkrete Mischung ist eine private Hausbarvariante, keine historisch festgelegte Collins-Rezeptur."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 40,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-038-tanqueray-london-dry-gin",
            "inventoryName": "Tanqueray London Dry Gin"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-lc-collins | Q-lc-diff | Inventar v7.66 | Manifest M-004 | PRIVATE_HAUSBAR_VARIANTE"
        },
        {
          "position": 2,
          "name": "Limoncello",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-069-marcati-limoncello",
            "inventoryName": "Marcati Limoncello"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-lc-diff | Inventar v7.66 | Manifest M-004"
        },
        {
          "position": 3,
          "name": "frischer Zitronensaft",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-lc-collins | Manifest M-014"
        },
        {
          "position": 4,
          "name": "neutrales Sodawasser",
          "amount": 75,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-lc-diff | Manifest M-015 | S-008"
        }
      ],
      "preparation": {
        "housebarText": "40 ml Tanqueray London Dry Gin, 20 ml Marcati Limoncello und 20 ml frischen Zitronensaft im gewählten Shaker mit Eis kräftig shaken. In Longdrinkglas Typ 1 abseihen und mit 75 ml neutralem Sodawasser auffüllen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas Typ 1",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-007",
            "text": "größeres Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis gemäß Zubereitung",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die private Hausbar legt die Soda-Menge auf 75 ml fest und verwendet Tanqueray London Dry Gin als Ginbasis; ein zusätzliches Barsieb ist nur beim zweiteiligen Shaker erforderlich."
      },
      "trace": {
        "primarySourceId": "Q-lc-collins"
      }
    },
    {
      "id": "sherry-flip",
      "name": "Sherry Flip",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "DESSERT_DRINKS",
          "base": "PORT_SHERRY",
          "flavors": [
            "SUESS"
          ],
          "strength": "LEICHT",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Dessertdrink",
          "base": "Portwein & Sherry",
          "flavors": [
            "Süß"
          ],
          "strength": "Leicht",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Dunkle Rosinen, reife Feigen und samtige Süße prägen diesen cremigen Sherry-Cocktail mit seinem warmen, beinahe dessertartigen Charakter.",
        "portrait": "Flips gehören zu den älteren Getränkefamilien der europäischen und amerikanischen Barkultur. Frühe Varianten wurden noch warm serviert, später entstanden kalte Cocktails mit Ei und Wein oder Spirituosen. Der Sherry Flip bewahrt diese Tradition und zeigt, wie unterschiedlich ein Cocktail mit wenigen Zutaten ausfallen kann.\n\nDie Hausbar verwendet Lustau Pedro Ximénez San Emilio, einen besonders süßen, dunklen Sherry. Sein Geschmack erinnert an Rosinen, getrocknete Feigen und eine feine Karamellnote. Das ganze Ei verleiht dem Drink eine dichte, samtige Textur und mildert die intensive Süße. Der Nachklang bleibt weich, fruchtig und beinahe dessertartig.\n\nEin Cocktail für Gäste, die kräftige Sherryaromen und cremige Drinks mögen. Anders als viele klassische Fassungen benötigt diese Variante keinen zusätzlichen Sirup. Rum und Muskat gehören ebenfalls nicht zur aktiven Hausbarrezeptur."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Pedro Ximénez Sherry",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-111-lustau-pedro-ximenez-san-emilio",
            "inventoryName": "Lustau Pedro Ximénez San Emilio"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-sf-px | Inventar v7.66 | Manifest M-004 | PRIVATE_HAUSBAR_VARIANTE"
        },
        {
          "position": 2,
          "name": "Ganzes Hühnerei",
          "amount": 1,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-sf-punch | Manifest M-014 | S-009"
        }
      ],
      "preparation": {
        "housebarText": "60 ml Lustau Pedro Ximénez San Emilio und 1 ganzes Hühnerei im gewählten Shaker zunächst ohne Eis, dann mit Eis sehr kräftig shaken und in das Weißweinglas abseihen. Hawthorne-Strainer nur bei zweiteiligem Shaker; Feinsieb höchstens optional."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-003",
            "text": "Weißweinglas",
            "catalogName": "Weißweinglas"
          },
          "secondary": {
            "id": "EQ-GLAS-008",
            "text": "Gin-Tonic-Kelch",
            "catalogName": "Gin-Tonic-Kelch / Copa"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis gemäß Shaker-Zubereitung",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER; EQ-WERK-007 OPTIONAL",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006",
            "EQ-WERK-007"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "PRIVATE_HAUSBAR_VARIANTE: PX ersetzt die klassische Oloroso-plus-Sirup-Struktur. Aktiv sind exakt PX und ganzes Ei. Kein aktiver Rum, kein aktiver Muskat; Feinsieb nur optional."
      },
      "trace": {
        "primarySourceId": "Q-sf-punch"
      }
    },
    {
      "id": "sazerac",
      "name": "Sazerac",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "KRAEUTERIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Kräuterig"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Kräftiger Rye Whiskey, würzige Kräuternoten und ein feiner Hauch Absinth geben diesem New-Orleans-Klassiker seinen unverwechselbaren Charakter.",
        "portrait": "New Orleans im 19. Jahrhundert: In den Bars der Stadt entwickelte sich ein Cocktail, der bis heute eng mit ihrer Geschichte verbunden ist. Der Sazerac wurde zunächst mit Cognac in Verbindung gebracht, bevor Rye Whiskey zunehmend seinen Platz einnahm. Peychaud’s Bitters und ein Hauch Absinth prägten seinen unverwechselbaren Charakter.\n\nDie Hausbarfassung setzt auf Bulleit Rye, dessen würzige, leicht pfeffrige Noten dem Drink eine kräftige Grundlage geben. Ein wenig Süße rundet die Whiskeyaromen ab, während Creole Bitters für Kräutertiefe sorgen. Das mit Mansinthe ausgespülte Glas bringt einen feinen Anisduft mit, der schon vor dem ersten Schluck wahrnehmbar ist.\n\nEin Cocktail für Gäste, die intensive Whiskeydrinks schätzen. Die Hausbar verwendet Creole Bitters als funktionale Alternative, ohne sie mit den historischen Peychaud’s Bitters gleichzusetzen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Rye Whiskey",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-124-bulleit-rye",
            "inventoryName": "Bulleit Rye"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-sazerac-iba | Q-sazerac-neworleans | Inventar v7.66 | PRIVATE_HAUSBAR_VARIANTE"
        },
        {
          "position": 2,
          "name": "Zuckersirup",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-sazerac-iba | Inventar v7.66 | PRIVATE_HAUSBAR_VARIANTE"
        },
        {
          "position": 3,
          "name": "Peychaud’s Bitters",
          "amount": 0.6,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-009-the-bitter-truth-creole-bitters",
            "inventoryName": "The Bitter Truth Creole Bitters"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-sazerac-iba | Inventar v7.66 | Manifest S-005 | M-008"
        },
        {
          "position": 4,
          "name": "Absinth",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-083-mansinthe-absinthe",
            "inventoryName": "Mansinthe Absinthe"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-sazerac-iba | Inventar v7.66 | Glas-Rinse"
        }
      ],
      "preparation": {
        "housebarText": "Tumbler Typ 1 mit 10 ml Mansinthe Absinthe ausspülen. 60 ml Bulleit Rye, 5 ml Riemerschmid Rohrzucker Bar-Sirup und 0,6 ml The Bitter Truth Creole Bitters mit Eis im Rührglas kalt rühren; in das vorbereitete Glas abseihen. Optional Zitronenzeste."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Rühreis; ohne Eis servieren",
        "garnish": "Zitronenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die Hausbar verwendet die Rye-/Sirup-Linie statt der IBA-Cognac-/Zuckerwürfel-Fassung; The Bitter Truth Creole Bitters ersetzt ausschließlich funktional die Peychaud’s-Rolle, ohne Gleichsetzung."
      },
      "trace": {
        "primarySourceId": "Q-sazerac-iba"
      }
    },
    {
      "id": "absinthe-frappe",
      "name": "Absinthe Frappé",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "CLASSIC_COCKTAILS",
          "base": "ANIS_RAKI_ABSINTHE",
          "flavors": [
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Klassischer Cocktail",
          "base": "Rakı, Anis & Absinthe",
          "flavors": [
            "Kräuterig",
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Ein New-Orleans-Klassiker der 1870er: Absinthe, Süße, Wasser/Soda und viel Kälte; die private 40/10/40-ml-Hausbarfassung ist vereinfacht, aber klar familiengerecht.",
        "portrait": "In den 1870er-Jahren wurde in New Orleans ein Drink bekannt, der Absinth auf überraschend erfrischende Weise servierte. Der Absinthe Frappé wird häufig mit Cayetano Ferrer und dem Aleix’s Coffee House verbunden. Seine Verbindung aus Anisaromen, Süße und viel Kälte machte ihn zu einer besonderen Erscheinung der damaligen Barkultur.\n\nIn dieser Hausbarfassung zeigt Mansinthe Absinthe seine kräftigen Kräuter- und Anisnoten. Eine kleine Menge Rohrzuckersirup mildert die Bitterkeit, während neutrales Sodawasser für Frische sorgt. Zerstoßenes Eis kühlt den Drink intensiv und lässt die Aromen weicher erscheinen. Der Geschmack bleibt würzig, leicht süßlich und angenehm kühlend.\n\nEin ungewöhnlicher Aperitif für Liebhaber von Absinth und Anis. Die Hausbar verzichtet bewusst auf die Anisette, die in manchen historischen Fassungen enthalten war."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Absinth",
          "amount": 40,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-083-mansinthe-absinthe",
            "inventoryName": "Mansinthe Absinthe"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-af-diff | Inventar v7.66 | letzter Restblock 82–84"
        },
        {
          "position": 2,
          "name": "Zuckersirup",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-af-diff | Inventar v7.66 | letzter Restblock 82–84"
        },
        {
          "position": 3,
          "name": "neutrales Sodawasser",
          "amount": 40,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-af-diff | Q-af-liquor | Manifest v1.3 M-015/S-008 | Mineralwasser mit Kohlensäure als neutrale Soda-Abdeckung"
        }
      ],
      "preparation": {
        "housebarText": "40 ml Mansinthe Absinthe und 10 ml Riemerschmid Rohrzucker Bar-Sirup in Tumbler Typ 2 geben. Crushed Ice zugeben, mit 40 ml neutralem Sodawasser auffüllen und mit dem Barlöffel swizzlen/frappéen, bis der Drink sehr kalt ist."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "secondary": {
            "id": "EQ-GLAS-006",
            "text": "Longdrinkglas",
            "catalogName": "Longdrinkglas Typ 1"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Crushed Ice / zerstoßenes Eis",
        "garnish": "Minze",
        "equipment": {
          "requirementText": "EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die private Hausbar verwendet 40 ml Absinthe, 10 ml Rohrzuckersirup und 40 ml neutrales Sodawasser und lässt die in historischen Referenzen vorkommende Anisette weg; sie ist daher keine wörtliche historische Standardfassung. Keine Pflichtgarnitur."
      },
      "trace": {
        "primarySourceId": "Q-af-diff"
      }
    },
    {
      "id": "benedictine-and-brandy",
      "name": "Bénédictine & Brandy",
      "aliasesText": "B & B | B&B",
      "aliases": [
        "B & B",
        "B&B"
      ],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "BRANDY_WEINBRAND",
          "flavors": [
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Brandy & Weinbrand",
          "flavors": [
            "Kräuterig",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Warmer Cognac und französischer Kräuterlikör verbinden sich zu einem kräftigen Digestif mit honigartiger Süße und würzigem Nachklang.",
        "portrait": "Die Verbindung von Bénédictine und Brandy gehört seit mehr als einem Jahrhundert zur Cocktailgeschichte. Schon 1910 tauchte eine entsprechende Mischung in gedruckten Rezeptsammlungen auf. Später wurde sie unter dem Namen B&B bekannt, und 1937 brachte der Hersteller eine eigene abgefüllte Variante auf den Markt.\n\nIn der Hausbar treffen die Kräuter- und Honignoten von Bénédictine D.O.M. auf die warme Fruchtigkeit von Polignac VSOP Cognac. Der Weinbrand bringt feine Holznoten und eine angenehme Tiefe mit, während der Likör für Würze und eine weiche Süße sorgt. Der Geschmack bleibt kräftig und rund, mit einem langen, kräuterbetonten Nachklang.\n\nEin Digestif für einen ruhigen Abschluss des Abends. Die Hausbar verwendet beide Bestandteile zu gleichen Teilen und unterscheidet sich damit von der heutigen abgefüllten B&B-Herstellerformel."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bénédictine D.O.M.",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-059-dom-benedictine",
            "inventoryName": "Bénédictine D.O.M."
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-bb-benedictine | Inventar v7.66 | letzter Restblock 82–84"
        },
        {
          "position": 2,
          "name": "Cognac",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-016-prince-hubert-de-polignac-vsop-harmonie-cognac",
            "inventoryName": "Prince Hubert de Polignac VSOP Harmonie Cognac"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-bb-diff | Inventar v7.66 | PRIVATE_HAUSBAR_VARIANTE"
        }
      ],
      "preparation": {
        "housebarText": "30 ml Bénédictine D.O.M. und 30 ml Prince Hubert de Polignac VSOP Harmonie Cognac direkt im Tumbler Typ 1 aufbauen; optional auf Eis kurz mit dem Barlöffel rühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-009",
            "text": "Grappa-/Likörglas",
            "catalogName": "Grappa-/Likörglas"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "optional auf Eis",
        "garnish": "Zitronenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004 OPTIONAL",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "30/30 ml bleibt die traditionelle Equal-Parts-Hausbarfassung. Die aktuelle abgefüllte B&B-Herstellerformel mit 60 % Bénédictine und 40 % französischem Brandy wird davon strikt getrennt und nicht als identische Rezeptur ausgegeben. Keine Pflichtgarnitur."
      },
      "trace": {
        "primarySourceId": "Q-bb-benedictine"
      }
    },
    {
      "id": "port-old-fashioned",
      "name": "Port Old Fashioned",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "BITTER",
            "TROCKEN"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Bitter",
            "Trocken"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Whiskey, Tawny Port und Bitters als kurzer, gerührter Old-Fashioned-Riff ohne zusätzlichen Zucker.",
        "portrait": "Der Old Fashioned gehört zu den ältesten Cocktailfamilien Amerikas. Seine Verbindung aus Spirituose, Süße und Bitterstoffen hat über Generationen zahlreiche Varianten hervorgebracht. Der Port Old Fashioned greift diese Tradition auf und ergänzt sie um die warme Fruchtigkeit eines gereiften Tawny Ports. Eine einzelne historische Originalrezeptur gibt es für diese moderne Abwandlung nicht.\n\nIn der Hausbar trifft Bulleit Bourbon 10 Years auf Graham’s 20 Year Old Tawny Port. Der Whiskey bringt Holz, Vanille und würzige Wärme mit, während der Port an getrocknete Früchte, Nüsse und feines Karamell erinnert. Aromatische Bitterstoffe verbinden beide Seiten und geben dem Drink einen angenehm herben Nachklang. Die Hausbar verzichtet bewusst auf zusätzlichen Zucker, wodurch die Aromen klarer und trockener bleiben.\n\nEin Drink für einen ruhigen Abend und Liebhaber gereifter Spirituosen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bourbon",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-123-bulleit-bourbon-10-years",
            "inventoryName": "Bulleit Bourbon 10 Years"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-pof-diff | Inventar v7.66 | PRIVATE_HAUSBAR_VARIANTE"
        },
        {
          "position": 2,
          "name": "Tawny Port",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-110-graham-s-20-year-tawny-port",
            "inventoryName": "Graham’s 20 Year Old Tawny Port"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-pof-diff | Inventar v7.66 | PRIVATE_HAUSBAR_VARIANTE"
        },
        {
          "position": 3,
          "name": "Aromatic Bitters",
          "amount": 0.3,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-012-the-bitter-truth-old-time-aromatic-bitters",
            "inventoryName": "The Bitter Truth Old Time Aromatic Bitters"
          },
          "evidence": "REZEPT_MASTER_PRIVAT_v2.95.xlsx | Q-pof-diff | Q-of-liquor | Inventar v7.66 | Manifest M-008"
        }
      ],
      "preparation": {
        "housebarText": "50 ml Bulleit Bourbon 10 Years, 15 ml Graham’s 20 Year Old Tawny Port und 0,3 ml The Bitter Truth Old Time Aromatic Bitters mit Eis im Rührglas kalt rühren; über Eis in Tumbler Typ 1 abseihen. Optional Orangenzeste."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumblerglas",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": "EQ-GLAS-012",
            "text": "größeres Tumblerglas",
            "catalogName": "Tumbler Typ 2"
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Rühreis; auf frisches Eis abseihen",
        "garnish": "Orangenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRIVATE_HAUSBAR_VARIANTE",
        "note": "Die private 50/15/0,3-ml-Fassung bleibt bewusst ohne zusätzlichen Maple-/Zuckersirup und damit trockener als die modernen Referenzvarianten."
      },
      "trace": {
        "primarySourceId": "Q-pof-diff"
      }
    },
    {
      "id": "between-the-sheets",
      "name": "Between the Sheets",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "MEHRERE_BASEN",
          "flavors": [
            "ZITRISCH",
            "FRUCHTIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Mehrere Basen",
          "flavors": [
            "Zitrisch",
            "Fruchtig"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Kräftiger Sour aus weißem Rum, Cognac, Cointreau und Zitrone: zitrisch, fruchtig und deutlich spirituosenbetont.",
        "portrait": "Die Cocktailbars der späten 1920er-Jahre liebten kräftige Mischungen mit ungewöhnlichen Namen. In dieser Zeit tauchte auch Between the Sheets auf. Eine frühe gedruckte Fassung verwendete noch Gin und Rum. Harry Craddocks Savoy Cocktail Book dokumentierte 1930 bereits die Verbindung aus Brandy, Rum, Orangenlikör und Zitrone, die dem heutigen Klassiker entspricht.\n\nDie Hausbar verbindet El Dorado 3 Year Old White Rum mit Polignac VSOP Cognac. Der Rum bringt eine leichte Fruchtigkeit, während der Cognac Wärme und feine Holznoten ergänzt. Cointreau sorgt für Orangenduft und eine zurückhaltende Süße. Frische Zitrone hält den kräftigen Cocktail lebendig und verleiht ihm einen klaren, trockenen Abgang.\n\nEin Aperitif für Gäste, die Sidecar und andere intensive Sours schätzen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "weißer Rum",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-090-el-dorado-3-year-old-white-rum",
            "inventoryName": "El Dorado 3 Year Old White Rum"
          },
          "evidence": "https://iba-world.com/iba-cocktail/between-the-sheets/"
        },
        {
          "position": 2,
          "name": "Cognac",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-016-prince-hubert-de-polignac-vsop-harmonie-cognac",
            "inventoryName": "Prince Hubert de Polignac VSOP Harmonie Cognac"
          },
          "evidence": "https://iba-world.com/iba-cocktail/between-the-sheets/"
        },
        {
          "position": 3,
          "name": "Triple Sec",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-057-cointreau",
            "inventoryName": "Cointreau"
          },
          "evidence": "https://iba-world.com/iba-cocktail/between-the-sheets/"
        },
        {
          "position": 4,
          "name": "frischer Zitronensaft",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/between-the-sheets/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 30 ml El Dorado 3 Year Old White Rum; 30 ml Prince Hubert de Polignac VSOP Harmonie Cognac; 30 ml Cointreau; 20 ml frischer Zitronensaft. Alle Zutaten mit Eis im Shaker kräftig schütteln und in ein gekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-between-the-sheets-iba"
      }
    },
    {
      "id": "french-connection",
      "name": "French Connection",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "BRANDY_WEINBRAND",
          "flavors": [
            "SUESS",
            "NUSSIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Brandy & Weinbrand",
          "flavors": [
            "Süß",
            "Nussig"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Zwei-Zutaten-Drink aus Cognac und Amaretto: kräftig, weich, nussig-süß und direkt auf Eis serviert.",
        "portrait": "In den 1970er-Jahren wurden Cocktails populär, die kräftige Spirituosen mit süßen Likören verbanden. Der French Connection gehört zu dieser Zeit und trägt den Namen des bekannten Films von 1971. Spätestens 1976 erschien seine Rezeptur in gedruckter Form. Wer ihn ursprünglich erfand, ist nicht überliefert.\n\nSein Geschmack lebt vom Zusammenspiel zweier ausgeprägter Aromen. Polignac VSOP Cognac bringt warme Fruchtnoten, feines Holz und eine sanfte Würze mit. Disaronno ergänzt Mandeln, Marzipan und eine weiche Süße. Auf Eis verbinden sich beide zu einem runden, kräftigen Drink, dessen Nachklang angenehm nussig bleibt. Die gleiche Menge beider Bestandteile sorgt für einen deutlich süßeren Charakter als bei einem puren Cognac.\n\nEin passender Abschluss eines guten Essens, besonders für Liebhaber von Amaretto."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Cognac",
          "amount": 35,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-016-prince-hubert-de-polignac-vsop-harmonie-cognac",
            "inventoryName": "Prince Hubert de Polignac VSOP Harmonie Cognac"
          },
          "evidence": "https://iba-world.com/iba-cocktail/french-connection/"
        },
        {
          "position": 2,
          "name": "Amaretto",
          "amount": 35,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-058-disaronno-originale-amaretto",
            "inventoryName": "Disaronno Originale Amaretto"
          },
          "evidence": "https://iba-world.com/iba-cocktail/french-connection/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 35 ml Prince Hubert de Polignac VSOP Harmonie Cognac; 35 ml Disaronno Originale Amaretto. Cognac und Amaretto direkt in den mit Eis gefüllten Tumbler Typ 1 geben und sanft umrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-french-connection-iba"
      }
    },
    {
      "id": "garibaldi",
      "name": "Garibaldi",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "APERITIF_LIKOER",
          "flavors": [
            "BITTER",
            "FRUCHTIG"
          ],
          "strength": "LEICHT",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Aperitif & Likör",
          "flavors": [
            "Bitter",
            "Fruchtig"
          ],
          "strength": "Leicht",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Leichter Campari-Longdrink mit viel frischer Orange: bittersüß, fruchtig und unkompliziert als Aperitif.",
        "portrait": "Der Garibaldi trägt den Namen des italienischen Freiheitskämpfers Giuseppe Garibaldi. Die Verbindung von Campari aus dem Norden Italiens mit Orangen aus dem Süden wird häufig als Anspielung auf die Einigung des Landes verstanden. Wann der Cocktail tatsächlich entstand, ist nicht eindeutig dokumentiert. Neue Aufmerksamkeit erhielt er durch die New Yorker Bar Dante, die ihn ab 2015 wieder populär machte.\n\nSein Geschmack ist ausgesprochen frisch und saftig. Campari bringt Bitterorange, Kräuter und eine markante herbe Note mit. Frisch gepresster Orangensaft mildert die Bitterkeit und verleiht dem Drink eine natürliche Süße. Auf Eis wirkt die Mischung leicht, fruchtig und angenehm zugänglich.\n\nEin Aperitif für Gäste, die Campari mögen, ihn aber etwas weicher genießen möchten."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Campari",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-003-campari",
            "inventoryName": "Campari"
          },
          "evidence": "https://iba-world.com/iba-cocktail/garibaldi/"
        },
        {
          "position": 2,
          "name": "frischer Orangensaft",
          "amount": 120,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/garibaldi/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 45 ml Campari; 120 ml frischer Orangensaft. Campari und frisch gepressten Orangensaft direkt in einem mit Eis gefüllten Longdrinkglas Typ 2 aufbauen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-007",
            "text": "Longdrinkglas Typ 2",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": "Orangenspalte",
        "equipment": {
          "requirementText": null,
          "referenceIds": []
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-garibaldi-iba"
      }
    },
    {
      "id": "lemon-drop-martini",
      "name": "Lemon Drop Martini",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "VODKA",
          "flavors": [
            "ZITRISCH",
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Vodka",
          "flavors": [
            "Zitrisch",
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Vodka-Sour mit Cointreau und frischer Zitrone: klar, zitrisch, süß-sauer und schnell gemacht.",
        "portrait": "San Francisco in den 1970er-Jahren: In der Bar Henry Africa’s entwickelte Norman Jay Hobday einen Cocktail, der die damals beliebte Verbindung von Vodka und frischen Fruchtaromen aufgriff. Der Lemon Drop erhielt seinen Namen von einer amerikanischen Zitronensüßigkeit und wurde später zu einem bekannten Klassiker der modernen Barszene.\n\nIm Glas zeigt er eine klare, lebendige Zitrusfrische. Absolut Elyx bildet eine zurückhaltende, weiche Grundlage, während Cointreau feine Orangennoten beisteuert. Frisch gepresste Zitrone bringt eine deutliche Säure mit, die von der Süße des Likörs aufgefangen wird. Der Drink wirkt frisch und geradlinig, mit einem angenehm zitrischen Nachklang.\n\nBesonders passend für Gäste, die fruchtige Sours mögen, aber keine schweren oder cremigen Cocktails bevorzugen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Wodka",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-115-absolut-elyx",
            "inventoryName": "Absolut Elyx"
          },
          "evidence": "https://iba-world.com/iba-cocktail/lemon-drop-martini/"
        },
        {
          "position": 2,
          "name": "Triple Sec",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-057-cointreau",
            "inventoryName": "Cointreau"
          },
          "evidence": "https://iba-world.com/iba-cocktail/lemon-drop-martini/"
        },
        {
          "position": 3,
          "name": "frischer Zitronensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/lemon-drop-martini/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 30 ml Absolut Elyx; 20 ml Cointreau; 15 ml frischer Zitronensaft. Alle Zutaten mit Eis im Shaker schütteln und in ein gekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-lemon-drop-martini-iba"
      }
    },
    {
      "id": "manhattan",
      "name": "Manhattan",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "KRAEUTERIG",
            "TROCKEN"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Kräuterig",
            "Trocken"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Rye, roter Wermut und Bitters: trocken-würzig, kräuterig und spirituosenbetont – ein Klassiker zum langsamen Trinken.",
        "portrait": "New York im späten 19. Jahrhundert. In den Bars der Stadt entwickelte sich ein Cocktail, der Whiskey und Wermut zu einer neuen, eleganten Verbindung brachte. Der Manhattan war spätestens 1882 bekannt. Die häufig erzählte Geschichte über Lady Randolph Churchill und den Manhattan Club gilt heute als historisch nicht haltbar. Seine genaue Entstehung bleibt dennoch ungeklärt.\n\nIn der Hausbar trifft Bulleit Rye auf Noilly Prat Rouge. Der Rye bringt kräftige Würze und eine feine Pfeffernote mit, während der rote Wermut dunkle Kräuter, Weinfrucht und eine zurückhaltende Süße ergänzt. Riemerschmid Bitter Angobitter verleiht dem Drink zusätzliche Tiefe. Eiskalt serviert bleibt er kräftig und angenehm trocken.\n\nEin Cocktail für Gäste, die Whiskey gerne langsam genießen und klassische, spirituosenbetonte Drinks schätzen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Rye Whiskey",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-124-bulleit-rye",
            "inventoryName": "Bulleit Rye"
          },
          "evidence": "https://iba-world.com/iba-cocktail/manhattan/"
        },
        {
          "position": 2,
          "name": "süßer roter Wermut",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "https://iba-world.com/iba-cocktail/manhattan/"
        },
        {
          "position": 3,
          "name": "Angostura Bitters",
          "amount": null,
          "unit": null,
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-014-riemerschmid-bitter-angobitter",
            "inventoryName": "Riemerschmid Bitter Angobitter"
          },
          "evidence": "https://iba-world.com/iba-cocktail/manhattan/ | Quellenangabe: 1 Dash Angostura Bitters; qualitative Nutzerfreigabe, keine ml-Schaetzung."
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 50 ml Bulleit Rye; 20 ml Noilly Prat Rouge; 1 Dash Riemerschmid Bitter Angobitter. Rye Whiskey, roten Wermut und 1 Dash Riemerschmid Bitter Angobitter mit Eis im Rührglas verrühren und in ein gekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Rühren; serviert ohne Eis",
        "garnish": "Cocktailkirsche",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die Angostura-Bitters-Rolle der IBA-Referenz wird in der Hausbar mit Riemerschmid Bitter Angobitter besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-manhattan-iba"
      }
    },
    {
      "id": "mary-pickford",
      "name": "Mary Pickford",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "TIKI_TROPICAL",
          "base": "RUM_CANE",
          "flavors": [
            "FRUCHTIG",
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "PARTY"
        },
        "display": {
          "drinkStyle": "Tiki & Tropical",
          "base": "Rum & Cane",
          "flavors": [
            "Fruchtig",
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "Party"
        }
      },
      "description": {
        "short": "Fruchtiger Rum-Cocktail mit Ananas, Maraschino und Grenadine: weich, tropisch und süß-fruchtig.",
        "portrait": "Havanna in den 1920er-Jahren war ein beliebtes Ziel amerikanischer Reisender, die während der Prohibition eine lebendige Barkultur suchten. In dieser Zeit wurde ein Cocktail nach dem Stummfilmstar Mary Pickford benannt. Ob ihn Fred Kaufman oder Eddie Woelke erfand, ist umstritten. Sicher ist, dass seine Rezeptur spätestens 1928 schriftlich dokumentiert wurde.\n\nDie Hausbar verbindet weißen El Dorado Rum mit saftiger Ananas. Ein kleiner Anteil Maraschino bringt eine feine Kirschmandelnote mit, während Grenadine Farbe und fruchtige Süße ergänzt. Der Drink wirkt weich, tropisch und angenehm rund. Seine kräftige Rumbasis bleibt trotz der fruchtigen Aromen erkennbar.\n\nEin Cocktail für gesellige Abende und Gäste, die klassische Rumdrinks mit tropischem Charakter mögen."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "weißer Rum",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-090-el-dorado-3-year-old-white-rum",
            "inventoryName": "El Dorado 3 Year Old White Rum"
          },
          "evidence": "https://iba-world.com/iba-cocktail/mary-pickford/"
        },
        {
          "position": 2,
          "name": "Ananassaft",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mary-pickford/"
        },
        {
          "position": 3,
          "name": "Maraschino",
          "amount": 7.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-068-luxardo-maraschino",
            "inventoryName": "Luxardo Maraschino"
          },
          "evidence": "https://iba-world.com/iba-cocktail/mary-pickford/"
        },
        {
          "position": 4,
          "name": "Grenadine",
          "amount": 5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-095-bols-grenadine-syrup",
            "inventoryName": "Bols Grenadine Syrup"
          },
          "evidence": "https://iba-world.com/iba-cocktail/mary-pickford/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 45 ml El Dorado 3 Year Old White Rum; 45 ml Ananassaft; 7,5 ml Luxardo Maraschino; 5 ml Bols Grenadine Syrup. Alle Zutaten mit Eis im Shaker kräftig schütteln und in ein gekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-mary-pickford-iba"
      }
    },
    {
      "id": "mint-julep",
      "name": "Mint Julep",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "CLASSIC_COCKTAILS",
          "base": "WHISKY",
          "flavors": [
            "SUESS",
            "KRAEUTERIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Klassischer Cocktail",
          "base": "Whisky",
          "flavors": [
            "Süß",
            "Kräuterig"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Bourbon, Minze, Zucker und viel Crushed Ice: kühl, kräuterfrisch und kräftig trotz sehr einfacher Zutatenliste.",
        "portrait": "Lange bevor der Mint Julep zum festen Bestandteil des Kentucky Derby wurde, gehörten mit Minze aromatisierte Juleps zur Trinkkultur der amerikanischen Südstaaten. Bereits 1803 wurde ein solcher Drink in Virginia beschrieben. Erst später setzte sich Whiskey und schließlich Bourbon als bevorzugte Grundlage durch. Seit 1938 ist der Mint Julep das offizielle Getränk des berühmten Pferderennens.\n\nDie Hausbar verwendet Maker’s Mark 46, dessen warme Vanille- und Holznoten auf frische Minze treffen. Zucker rundet die kräftige Bourbonbasis ab, während viel gebrochenes Eis für intensive Kälte sorgt. Der Duft der Minze bleibt bis zum letzten Schluck präsent.\n\nEin Drink für warme Tage und Gäste, die Bourbon auf erfrischende Weise erleben möchten. Die Hausbar serviert ihn bewusst im Tumbler statt im traditionellen Metallbecher."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bourbon",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-134-maker-s-mark-46",
            "inventoryName": "Maker’s Mark 46"
          },
          "evidence": "https://iba-world.com/iba-cocktail/mint-julep/"
        },
        {
          "position": 2,
          "name": "Minzzweige",
          "amount": 4,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mint-julep/"
        },
        {
          "position": 3,
          "name": "Puderzucker",
          "amount": 1,
          "unit": {
            "code": "TEASPOON",
            "display": "Teelöffel"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mint-julep/"
        },
        {
          "position": 4,
          "name": "Wasser",
          "amount": 10,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mint-julep/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 60 ml Maker’s Mark 46; 4 Minzzweige; 1 TL Puderzucker; 10 ml Wasser. Minze mit Zucker und Wasser vorsichtig im Tumbler Typ 2 bearbeiten, mit gebrochenem Eis füllen, Bourbon zugeben und rühren, bis das Glas außen kalt bereift."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-012",
            "text": "Tumbler Typ 2",
            "catalogName": "Tumbler Typ 2"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Gebrochenes Eis",
        "garnish": "Minzzweig",
        "equipment": {
          "requirementText": "EQ-WERK-008; EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-008",
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Der von der IBA vorgesehene Julep-Edelstahlbecher ist im bestätigten Glasbestand nicht vorhanden; die Hausbar verwendet Tumbler Typ 2 als funktionale Alternative. Die typische Metallbecher-Bereifung wird damit nicht vollständig reproduziert."
      },
      "trace": {
        "primarySourceId": "quelle-web-mint-julep-iba"
      }
    },
    {
      "id": "mojito",
      "name": "Mojito",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "RUM_CANE",
          "flavors": [
            "ZITRISCH",
            "KRAEUTERIG"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Rum & Cane",
          "flavors": [
            "Zitrisch",
            "Kräuterig"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Kubanischer Rum-Longdrink mit Limette, Minze, Zucker und Soda: frisch, zitrisch und durch Soda verlängert.",
        "portrait": "Der Mojito gehört zu den bekanntesten Cocktails Kubas. Seine genaue Entstehung ist nicht eindeutig belegt. Häufig wird ein älterer Drink namens Draque als Vorläufer genannt, doch diese Verbindung bleibt eine Theorie. Eine frühe verwandte Rezeptfassung erschien 1927 unter dem Namen Mojo Criollo.\n\nSein Charakter lebt von Frische. El Dorado 3 Year Old White Rum bringt eine weiche, leicht fruchtige Grundlage mit. Limette setzt lebendige Säure dagegen, während frische Minze ihren kühlen, grünen Duft entfaltet. Weißer Rohrzucker verbindet die Aromen, und Sodawasser macht den Drink leicht und angenehm erfrischend. Trotz seiner Fruchtigkeit bleibt die Rumbasis deutlich erkennbar.\n\nEin Longdrink für warme Abende, besonders wenn ein Cocktail unkompliziert und frisch sein soll."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "weißer kubanischer Rum",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-090-el-dorado-3-year-old-white-rum",
            "inventoryName": "El Dorado 3 Year Old White Rum"
          },
          "evidence": "https://iba-world.com/iba-cocktail/mojito/"
        },
        {
          "position": 2,
          "name": "frischer Limettensaft",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mojito/"
        },
        {
          "position": 3,
          "name": "Minzzweige",
          "amount": 6,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mojito/"
        },
        {
          "position": 4,
          "name": "weißer Rohrzucker",
          "amount": 2,
          "unit": {
            "code": "TEASPOON",
            "display": "Teelöffel"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mojito/"
        },
        {
          "position": 5,
          "name": "Sodawasser",
          "amount": null,
          "unit": null,
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/mojito/ | Quellenangabe/Methode: Soda Water; splash / top with soda water; qualitative Nutzerfreigabe, keine ml-Schaetzung."
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 45 ml El Dorado 3 Year Old White Rum; 20 ml frischer Limettensaft; 6 Minzzweige; 2 TL weißer Rohrzucker; Sodawasser. Minze mit Zucker und Limettensaft vermischen, einen Splash Sodawasser und Eis zugeben, Rum eingießen, mit Sodawasser auffüllen und leicht umrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-007",
            "text": "Longdrinkglas Typ 2",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis im Servierglas",
        "garnish": "Minzzweige und Limettenscheibe",
        "equipment": {
          "requirementText": "EQ-WERK-008; EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-008",
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "El Dorado 3 als vorhandener weißer Rum erfüllt Kategorie/Cocktailrolle; Herkunftsabweichung transparent."
      },
      "trace": {
        "primarySourceId": "quelle-web-mojito-iba"
      }
    },
    {
      "id": "old-fashioned",
      "name": "Old Fashioned",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "SUESS",
            "KRAEUTERIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Süß",
            "Kräuterig"
          ],
          "strength": "Kräftig",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Whiskey, Zucker und Bitters in elementarer Form: kräftig, trocken-süß und ganz auf die Basisspirituose konzentriert.",
        "portrait": "Der Old Fashioned führt zurück zu den Anfängen der Cocktailgeschichte. Bereits 1806 wurde ein Cocktail als Mischung aus Spirituose, Zucker, Wasser und Bitterstoffen beschrieben. Später verlangten Gäste ausdrücklich nach der alten Art der Zubereitung, aus der sich der Name Old Fashioned entwickelte. Die oft erzählte Erfindung im Pendennis Club lässt sich durch frühere Belege nicht bestätigen.\n\nIn der Hausbar steht Maker’s Mark 46 im Mittelpunkt. Seine warmen Vanille-, Karamell- und Holznoten werden von etwas Zucker abgerundet. Riemerschmid Bitter Angobitter bringt Würze und eine angenehme herbe Tiefe mit. Auf Eis entwickelt sich der Geschmack langsam, während die kräftige Bourbonbasis erhalten bleibt.\n\nEin Cocktail für einen ruhigen Abend und Gäste, die guten Whiskey ohne viel Ablenkung genießen möchten."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bourbon",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-134-maker-s-mark-46",
            "inventoryName": "Maker’s Mark 46"
          },
          "evidence": "https://iba-world.com/iba-cocktail/old-fashioned/"
        },
        {
          "position": 2,
          "name": "Zuckerwürfel",
          "amount": 1,
          "unit": {
            "code": "STUECK",
            "display": "Stück"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/old-fashioned/"
        },
        {
          "position": 3,
          "name": "Angostura Bitters",
          "amount": null,
          "unit": null,
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-014-riemerschmid-bitter-angobitter",
            "inventoryName": "Riemerschmid Bitter Angobitter"
          },
          "evidence": "https://iba-world.com/iba-cocktail/old-fashioned/ | Quellenangabe: Few Dashes Angostura Bitters; qualitative Nutzerfreigabe, keine Dash-Anzahl/ml-Schaetzung."
        },
        {
          "position": 4,
          "name": "Wasser",
          "amount": null,
          "unit": null,
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/old-fashioned/ | Quellenangabe: Few Dashes Plain Water; qualitative Nutzerfreigabe, keine Dash-Anzahl/ml-Schaetzung."
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 45 ml Maker’s Mark 46; 1 Zuckerwürfel; wenige Dashes Riemerschmid Bitter Angobitter; wenige Dashes Wasser. Zuckerwürfel im Tumbler Typ 1 mit wenigen Dashes Riemerschmid Bitter Angobitter und wenigen Dashes Wasser tränken und lösen, Eis und Whiskey zugeben und sanft umrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": "Orangenscheibe oder -zeste und Cocktailkirsche",
        "equipment": {
          "requirementText": "EQ-WERK-008; EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-008",
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die Angostura-Bitters-Rolle der IBA-Referenz wird in der Hausbar mit Riemerschmid Bitter Angobitter besetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-old-fashioned-iba"
      }
    },
    {
      "id": "paradise",
      "name": "Paradise",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "CLASSIC_COCKTAILS",
          "base": "GIN",
          "flavors": [
            "FRUCHTIG",
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Klassischer Cocktail",
          "base": "Gin",
          "flavors": [
            "Fruchtig",
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Reife Aprikose und saftige Orange treffen auf feinen Wacholder – ein weicher, fruchtiger Gin-Cocktail mit angenehmer Frische.",
        "portrait": "In den Cocktailbars der 1920er-Jahre waren fruchtige Ginmischungen längst keine Seltenheit mehr. Der Paradise gehört zu den Klassikern dieser Zeit. Harry MacElhone veröffentlichte 1922 eine frühe Rezeptur, später fand der Drink auch seinen Platz im berühmten Savoy Cocktail Book. Sein Name verspricht einen kleinen Ausflug in eine unbeschwerte, elegante Barwelt.\n\nDer No.3 London Dry Gin bringt klare Wacholdernoten und eine feine Würze mit. Bols Apricot Brandy ergänzt den Duft reifer Aprikosen, während frischer Orangensaft für saftige Fruchtigkeit sorgt. Der Geschmack wirkt weich und angenehm rund, ohne dass die Ginbasis verloren geht. Im Nachklang bleibt eine dezente Kräuternote.\n\nEin Aperitif für Gäste, die klassische Gin-Cocktails mit fruchtigem Charakter mögen. Die Hausbarfassung verwendet bewusst keine zusätzliche Zitrone."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Gin",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "https://iba-world.com/iba-cocktail/paradise/"
        },
        {
          "position": 2,
          "name": "Apricot Brandy",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-048-bols-apricot-brandy",
            "inventoryName": "Bols Apricot Brandy"
          },
          "evidence": "https://iba-world.com/iba-cocktail/paradise/"
        },
        {
          "position": 3,
          "name": "frischer Orangensaft",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/paradise/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 30 ml No.3 London Dry Gin; 20 ml Bols Apricot Brandy; 15 ml frischer Orangensaft. Alle Zutaten mit Eis im Shaker schütteln und in ein gekühltes Martiniglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "Eis zum Shaken; serviert ohne Eis",
        "garnish": null,
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-paradise-iba"
      }
    },
    {
      "id": "rabo-de-galo",
      "name": "Rabo de Galo",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "RUM_CANE",
          "flavors": [
            "BITTER",
            "KRAEUTERIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "APERITIF"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Rum & Cane",
          "flavors": [
            "Bitter",
            "Kräuterig"
          ],
          "strength": "Kräftig",
          "occasion": "Aperitif"
        }
      },
      "description": {
        "short": "Cachaça mit rotem Wermut, Cynar und optional Angostura: kräftig, bittersüß und deutlich kräuterig.",
        "portrait": "São Paulo in den 1950er-Jahren: Italienische Einwanderer brachten ihre Aperitiftraditionen nach Brasilien, wo sie auf den heimischen Zuckerrohrbrand trafen. In diesem Umfeld entstand der Rabo de Galo, dessen Name wörtlich „Hahnenschwanz“ bedeutet. Die Bezeichnung spielt zugleich auf das englische Wort Cocktail an.\n\nIn der Hausbar verbindet sich Cachaça Magnífica mit rotem Wermut und Cynar. Der Zuckerrohrbrand bringt einen kräftigen, eigenständigen Charakter mit, während Noilly Prat Rouge würzige Kräuter und eine sanfte Süße ergänzt. Cynar sorgt für eine markante, leicht erdige Bitterkeit. Wer es noch etwas herber mag, kann wenige Tropfen Riemerschmid Bitter Angobitter ergänzen.\n\nEin Aperitif für Gäste, die Negroni oder Boulevardier schätzen und eine brasilianische Interpretation dieser bittersüßen Aromatik entdecken möchten."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Cachaça",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-094-cachaca-magnifica",
            "inventoryName": "Cachaça Magnífica"
          },
          "evidence": "https://iba-world.com/iba-cocktail/rabo-de-galo/"
        },
        {
          "position": 2,
          "name": "süßer roter Wermut",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "https://iba-world.com/iba-cocktail/rabo-de-galo/"
        },
        {
          "position": 3,
          "name": "Cynar",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-005-cynar",
            "inventoryName": "Cynar"
          },
          "evidence": "https://iba-world.com/iba-cocktail/rabo-de-galo/"
        },
        {
          "position": 4,
          "name": "Angostura",
          "amount": null,
          "unit": null,
          "required": {
            "code": "NEIN",
            "value": false
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-014-riemerschmid-bitter-angobitter",
            "inventoryName": "Riemerschmid Bitter Angobitter"
          },
          "evidence": "https://iba-world.com/iba-cocktail/rabo-de-galo/ | Quellenangabe: 2 Drops Angostura (optional); optional und ohne operative Pflichtmenge."
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 60 ml Cachaça Magnífica; 20 ml Noilly Prat Rouge; 15 ml Cynar; optional 2 Tropfen Riemerschmid Bitter Angobitter. Alle Zutaten im Tumbler Typ 1 auf Eis zusammengeben und kurz umrühren; Riemerschmid Bitter Angobitter ist optional."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": "Orangenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die IBA-Referenz nennt Cinzano Rosso und optional Angostura; die Hausbar verwendet dafür Noilly Prat Rouge und optional Riemerschmid Bitter Angobitter."
      },
      "trace": {
        "primarySourceId": "quelle-web-rabo-de-galo-iba"
      }
    },
    {
      "id": "remember-the-maine",
      "name": "Remember the Maine",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "KRAEUTERIG",
            "FRUCHTIG"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Kräuterig",
            "Fruchtig"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Rye, roter Wermut, Kirschlikör und ein Hauch Absinth: kräftig, würzig und dunkler als ein klassischer Manhattan.",
        "portrait": "Havanna in den 1930er-Jahren. Der amerikanische Reiseschriftsteller Charles H. Baker Jr. erinnerte sich an eine Nacht in der kubanischen Hauptstadt und hielt einen ungewöhnlichen Cocktail fest. 1939 veröffentlichte er den Remember the Maine in seinem Buch The Gentleman’s Companion. Der Name verweist auf das amerikanische Kriegsschiff USS Maine, dessen Untergang 1898 Geschichte schrieb.\n\nDie Hausbarfassung verbindet Bulleit Rye mit rotem Wermut, Kirschlikör und einem Hauch Absinth. Der Whiskey bringt würzige Wärme, während Noilly Prat Rouge dunkle Kräuternoten ergänzt. Bols Cherry Brandy sorgt für eine zurückhaltende Kirschsüße. Mansinthe hinterlässt einen feinen Anisduft, der dem kräftigen Drink zusätzliche Tiefe gibt.\n\nEin Cocktail für den späteren Abend, besonders für Gäste, die einen Manhattan mögen und etwas Ungewöhnlicheres probieren möchten."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Rye Whiskey",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-124-bulleit-rye",
            "inventoryName": "Bulleit Rye"
          },
          "evidence": "https://iba-world.com/iba-cocktail/remember-the-maine/"
        },
        {
          "position": 2,
          "name": "süßer roter Wermut",
          "amount": 22.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "https://iba-world.com/iba-cocktail/remember-the-maine/"
        },
        {
          "position": 3,
          "name": "cherry brandy",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-049-bols-cherry-brandy",
            "inventoryName": "Bols Cherry Brandy"
          },
          "evidence": "https://iba-world.com/iba-cocktail/remember-the-maine/"
        },
        {
          "position": 4,
          "name": "Absinth",
          "amount": 7.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-083-mansinthe-absinthe",
            "inventoryName": "Mansinthe Absinthe"
          },
          "evidence": "https://iba-world.com/iba-cocktail/remember-the-maine/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 60 ml Bulleit Rye; 22,5 ml Noilly Prat Rouge; 15 ml Bols Cherry Brandy; 7,5 ml Mansinthe Absinthe. Martiniglas mit Absinthe ausschwenken und überschüssigen Absinthe verwerfen. Die übrigen Zutaten mit Eis verrühren und in das vorbereitete Glas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Eis zum Rühren; serviert ohne Eis",
        "garnish": "Zitronenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Cherry-Brandy-Rolle mit vorhandenem Bols Cherry Brandy; die von der IBA vorgesehene Coupe ist im bestätigten Glasbestand nicht vorhanden; die Hausbar verwendet das vorhandene Martiniglas als funktional gleichwertige Alternative; keine Namensdublette."
      },
      "trace": {
        "primarySourceId": "quelle-web-remember-the-maine-iba"
      }
    },
    {
      "id": "whiskey-sour",
      "name": "Whiskey Sour",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SOURS",
          "base": "WHISKY",
          "flavors": [
            "ZITRISCH",
            "SUESS"
          ],
          "strength": "MITTEL",
          "occasion": "ENTSPANNT_GENIESSEN"
        },
        "display": {
          "drinkStyle": "Sour",
          "base": "Whisky",
          "flavors": [
            "Zitrisch",
            "Süß"
          ],
          "strength": "Mittel",
          "occasion": "Entspannt genießen"
        }
      },
      "description": {
        "short": "Whiskey, Zitrone und Zucker in klassischer Sour-Struktur: frisch und kräftig.",
        "portrait": "Der Whiskey Sour gehört zu den ältesten und bekanntesten Cocktails der amerikanischen Barkultur. Schon im 19. Jahrhundert waren Sours weit verbreitet; eine frühe namentliche Erwähnung des Whiskey Sour stammt aus dem Jahr 1870. Seine Beliebtheit verdankt er einer einfachen Idee: Kräftiger Whiskey trifft auf frische Zitrusfrucht und eine ausgewogene Süße.\n\nIn der Hausbar steht Maker’s Mark 46 im Mittelpunkt. Der Bourbon bringt warme Vanille-, Karamell- und Holznoten mit, während frische Zitrone einen lebendigen Kontrast setzt. Rohrzuckersirup verbindet die Aromen zu einem runden, angenehm frischen Geschmack. Optionales Eiweiß kann die Textur weicher machen, ohne den Charakter des Drinks zu verändern.\n\nEin Klassiker für Gäste, die Bourbon mögen, ihn aber gelegentlich etwas frischer genießen möchten. Gerade seine Schlichtheit macht ihn seit Generationen beliebt."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bourbon",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-134-maker-s-mark-46",
            "inventoryName": "Maker’s Mark 46"
          },
          "evidence": "https://iba-world.com/iba-cocktail/whiskey-sour/"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 25,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/whiskey-sour/"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "https://iba-world.com/iba-cocktail/whiskey-sour/"
        },
        {
          "position": 4,
          "name": "Eiweiß",
          "amount": null,
          "unit": null,
          "required": {
            "code": "NEIN",
            "value": false
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/whiskey-sour/ | Quellenangabe: Few Drops of Egg White (optional); qualitative option, keine Schaetzung."
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 45 ml Maker’s Mark 46; 25 ml frischen Zitronensaft; 20 ml Riemerschmid Rohrzucker Bar-Sirup; optional wenige Tropfen Eiweiß. Alle Zutaten mit Eis im Shaker gut schütteln. In Tumbler Typ 1 auf Eis abseihen. Eiweiß ist optional."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-011",
            "text": "Tumbler Typ 1",
            "catalogName": "Tumbler Typ 1"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "optional auf Eis",
        "garnish": "Halbe Orangenscheibe und Maraschino-Kirsche; alternativ Orangenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-001 ODER EQ-WERK-002 ODER EQ-WERK-003; EQ-WERK-006 NUR BEI ZWEITEILIGEM SHAKER",
          "referenceIds": [
            "EQ-WERK-001",
            "EQ-WERK-002",
            "EQ-WERK-003",
            "EQ-WERK-006"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-whiskey-sour-iba"
      }
    },
    {
      "id": "john-collins",
      "name": "John Collins",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "HIGHBALL_LONGDRINK",
          "base": "GIN",
          "flavors": [
            "ZITRISCH"
          ],
          "strength": "MITTEL",
          "occasion": "ERFRISCHEND"
        },
        "display": {
          "drinkStyle": "Longdrink & Highball",
          "base": "Gin",
          "flavors": [
            "Zitrisch"
          ],
          "strength": "Mittel",
          "occasion": "Erfrischend"
        }
      },
      "description": {
        "short": "Gin, Zitrone, Zucker und Soda als geradliniger Longdrink: frisch, zitrisch und unkompliziert mit klarer Collins-Struktur.",
        "portrait": "London im 19. Jahrhundert. Im Limmer’s Hotel trafen sich Reisende und Stammgäste, um Gin Punch und andere beliebte Mischgetränke zu genießen. Mit diesem Umfeld wird häufig ein Oberkellner namens John Collins verbunden. Ob er den später nach ihm benannten Cocktail tatsächlich erfand, ist nicht gesichert. Seine Geschichte gehört dennoch fest zur britischen Barkultur.\n\nDie Hausbarfassung verbindet No.3 London Dry Gin mit frischer Zitrone, Rohrzuckersirup und Sodawasser. Der Gin bringt Wacholder und feine Kräuternoten mit, während die Zitrone für lebendige Säure sorgt. Das Soda macht den Drink leicht und angenehm prickelnd. Der Geschmack bleibt frisch, klar und unkompliziert.\n\nEin Longdrink für warme Tage oder einen entspannten Nachmittag. Interessant ist seine enge Verwandtschaft mit dem Tom Collins, dessen Rezeptgeschichte sich teilweise mit der des John Collins überschneidet."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Gin",
          "amount": 45,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "https://iba-world.com/iba-cocktail/john-collins/"
        },
        {
          "position": 2,
          "name": "frischer Zitronensaft",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/john-collins/"
        },
        {
          "position": 3,
          "name": "Zuckersirup",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "https://iba-world.com/iba-cocktail/john-collins/"
        },
        {
          "position": 4,
          "name": "Sodawasser",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "NICHT_INVENTAR_ZULAESSIG",
            "inventoryId": null,
            "inventoryName": null
          },
          "evidence": "https://iba-world.com/iba-cocktail/john-collins/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 45 ml No.3 London Dry Gin; 30 ml frischen Zitronensaft; 15 ml Riemerschmid Rohrzucker Bar-Sirup; 60 ml Sodawasser. Alle Zutaten direkt in ein mit Eis gefülltes Longdrinkglas Typ 2 geben und sanft umrühren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-007",
            "text": "Longdrinkglas Typ 2",
            "catalogName": "Longdrinkglas Typ 2"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "FUNKTIONAL_PASSEND"
        },
        "ice": "auf Eis servieren",
        "garnish": "Zitronenscheibe und Maraschino-Kirsche",
        "equipment": {
          "requirementText": "EQ-WERK-004",
          "referenceIds": [
            "EQ-WERK-004"
          ]
        }
      },
      "deviation": {
        "statusCode": "KEINE",
        "note": null
      },
      "trace": {
        "primarySourceId": "quelle-web-john-collins-iba"
      }
    },
    {
      "id": "stinger",
      "name": "Stinger",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "BRANDY_WEINBRAND",
          "flavors": [
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Brandy & Weinbrand",
          "flavors": [
            "Kräuterig",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Cognac und Crème de Menthe als kräftiger Zwei-Zutaten-Digestif: kühl, minzig und deutlich spirituosenbetont.",
        "portrait": "New York zu Beginn des 20. Jahrhunderts. Der Stinger wurde zu einem beliebten Drink der gehobenen Gesellschaft und später zum festen Bestandteil amerikanischer Cocktailbars. Schon 1913 erschien eine gedruckte Rezeptur. In den 1920er-Jahren wurde der Cocktail häufig mit dem wohlhabenden Reginald Vanderbilt verbunden, auch wenn seine tatsächliche Rolle bei der Entstehung ungeklärt bleibt.\n\nSein Geschmack lebt vom Gegensatz zwischen warmem Cognac und kühler Minze. Polignac VSOP Harmonie bringt reife Frucht, feines Holz und eine sanfte Würze mit. Monin Crème de Menthe Verte ergänzt eine deutliche, frische Minznote. Gemeinsam ergeben sie einen kräftigen, geschmeidigen Drink mit einem langen, kühlenden Nachklang.\n\nEin Digestif für Gäste, die Cognac mögen und ungewöhnliche Aromenkombinationen schätzen. Die Hausbar verwendet grünen statt weißen Minzlikör und nimmt damit bewusst eine andere Farbe in Kauf."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Cognac",
          "amount": 50,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-016-prince-hubert-de-polignac-vsop-harmonie-cognac",
            "inventoryName": "Prince Hubert de Polignac VSOP Harmonie Cognac"
          },
          "evidence": "https://iba-world.com/iba-cocktail/stinger/"
        },
        {
          "position": 2,
          "name": "weiße Crème de Menthe",
          "amount": 20,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-100-monin-creme-de-menthe-verte",
            "inventoryName": "Monin Crème de Menthe Verte"
          },
          "evidence": "https://iba-world.com/iba-cocktail/stinger/"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 50 ml Prince Hubert de Polignac VSOP Harmonie Cognac; 20 ml Monin Crème de Menthe Verte. Cognac und Monin Crème de Menthe Verte mit Eis im Rührglas verrühren und in ein gekühltes Martini-Cocktailglas abseihen."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "EXAKT_PASSEND"
        },
        "ice": "Eis zum Rühren; serviert ohne Eis",
        "garnish": "Minzblatt",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "MERKLICH_ABWEICHEND",
        "note": "Vorhandene Crème de Menthe ist grün statt weiß: gleiche Minzlikörrolle, aber sichtbare Farbabweichung; daher transparent MERKLICH_ABWEICHEND."
      },
      "trace": {
        "primarySourceId": "quelle-web-stinger-iba"
      }
    },
    {
      "id": "revolver",
      "name": "Revolver",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "WHISKY",
          "flavors": [
            "KAFFEE",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Whisky",
          "flavors": [
            "Kaffee",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Bourbon mit Kaffeelikör und Orange Bitters: trocken, dunkel und kaffeewürzig, ohne die Süße eines Espresso Martini.",
        "portrait": "San Francisco, 2004. Barkeeper Jon Santer entwickelte im Bruno’s einen Cocktail, der Bourbon und Kaffee auf ungewöhnlich geradlinige Weise miteinander verband. Der Revolver entstand in einer Zeit, als amerikanische Bars klassische Whiskeydrinks neu interpretierten. Seinen Namen verdankt er dem Beatles-Album Revolver.\n\nIn der Hausbar trifft Maker’s Mark 46 auf Kahlúa und Orange Bitters. Der Bourbon bringt warme Holznoten, Vanille und eine feine Würze mit. Der Kaffeelikör ergänzt dunkle Röstaromen und eine zurückhaltende Süße. Orange Bitters setzen einen frischen, leicht herben Akzent, der den Geschmack lebendig hält. Der Drink bleibt kräftig und whiskeybetont, mit einem langen, kaffeewürzigen Nachklang.\n\nEin Cocktail für den späteren Abend und Gäste, die Bourbon und Kaffee gleichermaßen schätzen. Die Hausbar kann die Süße bei Bedarf mit wenig Rohrzuckersirup abrunden."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "Bourbon",
          "amount": 60,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-134-maker-s-mark-46",
            "inventoryName": "Maker’s Mark 46"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/5009/revolver"
        },
        {
          "position": 2,
          "name": "Kaffeelikör",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-064-kahlua",
            "inventoryName": "Kahlúa"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/5009/revolver"
        },
        {
          "position": 3,
          "name": "Rich Sugar Syrup",
          "amount": 2.5,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "NEIN",
            "value": false
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-141-riemerschmid-rohrzucker-bar-sirup",
            "inventoryName": "Riemerschmid Rohrzucker Bar-Sirup"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/5009/revolver | Quellenangabe: optional 2.5 ml rich sugar syrup; numerisch eindeutig, keine Schaetzung."
        },
        {
          "position": 4,
          "name": "orange bitters",
          "amount": 0.9,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-013-the-bitter-truth-orange-bitters",
            "inventoryName": "The Bitter Truth Orange Bitters"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/5009/revolver"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 60 ml Maker’s Mark 46; 15 ml Kahlúa; optional 2,5 ml Riemerschmid Rohrzucker Bar-Sirup; 0,9 ml The Bitter Truth Orange Bitters. Alle Zutaten mit Eis verrühren und fein in ein vorgekühltes Martiniglas abseihen. Für die optionale Garnitur eine Orangenzeste flämmen, über dem Drink ausdrücken und als Garnitur verwenden."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Eis zum Rühren; serviert ohne Eis",
        "garnish": "Geflämmte Orangenzeste",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018; EQ-WERK-007",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018",
            "EQ-WERK-007"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Die generischen Rollen für Bourbon und Kaffeelikör werden mit Maker’s Mark 46 und Kahlúa besetzt; das Nick-&-Nora-Glas wird durch das Martiniglas ersetzt."
      },
      "trace": {
        "primarySourceId": "quelle-web-revolver-difford"
      }
    },
    {
      "id": "bijou",
      "name": "Bijou",
      "aliasesText": null,
      "aliases": [],
      "releaseGate": {
        "code": "JA",
        "approved": true
      },
      "filters": {
        "codes": {
          "drinkStyle": "SPIRIT_FORWARD",
          "base": "GIN",
          "flavors": [
            "KRAEUTERIG",
            "SUESS"
          ],
          "strength": "KRAEFTIG",
          "occasion": "AFTER_DINNER"
        },
        "display": {
          "drinkStyle": "Spirit Forward",
          "base": "Gin",
          "flavors": [
            "Kräuterig",
            "Süß"
          ],
          "strength": "Kräftig",
          "occasion": "After Dinner"
        }
      },
      "description": {
        "short": "Gin, grüne Chartreuse, roter Wermut und Orange Bitters: kräftig, kräuterig und dicht mit klarer Wacholderbasis.",
        "portrait": "Der Bijou gehört zu den frühen Cocktails der amerikanischen Barkultur. Sein französischer Name bedeutet „Juwel“ und spielt auf die Farben seiner klassischen Bestandteile an. Bereits 1895 erschien ein Drink dieses Namens in gedruckter Form. Harry Johnson dokumentierte 1900 eine Variante mit grüner Chartreuse, die dem heutigen Klassiker besonders nahekommt.\n\nIn der Hausbar verbindet sich No.3 London Dry Gin mit Chartreuse Verte und Noilly Prat Rouge. Der Gin bringt Wacholder und eine klare Würze mit, während Chartreuse intensive Kräuteraromen und eine warme Süße ergänzt. Der rote Wermut sorgt für Tiefe, Orange Bitters für einen feinen, fruchtig-herben Akzent. Der Geschmack ist kräftig, dicht und angenehm lang.\n\nEin Cocktail für Gäste, die ausgeprägte Kräuteraromen und klassische, spirituosenbetonte Drinks schätzen. Seine besondere Stärke liegt in der Verbindung dreier sehr unterschiedlicher Aromawelten."
      },
      "ingredients": [
        {
          "position": 1,
          "name": "London Dry Gin",
          "amount": 25,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-036-no-3-london-dry-gin",
            "inventoryName": "No.3 London Dry Gin"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/3269/bijou-cocktail-diffords-recipe"
        },
        {
          "position": 2,
          "name": "Chartreuse Verte",
          "amount": 15,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-056-chartreuse-verte",
            "inventoryName": "Chartreuse Verte"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/3269/bijou-cocktail-diffords-recipe"
        },
        {
          "position": 3,
          "name": "süßer roter Wermut",
          "amount": 30,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-113-noilly-prat-rouge",
            "inventoryName": "Noilly Prat Rouge"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/3269/bijou-cocktail-diffords-recipe"
        },
        {
          "position": 4,
          "name": "orange bitters",
          "amount": 0.3,
          "unit": {
            "code": "ML",
            "display": "ml"
          },
          "required": {
            "code": "JA",
            "value": true
          },
          "mapping": {
            "type": "EXAKT",
            "inventoryId": "csv-013-the-bitter-truth-orange-bitters",
            "inventoryName": "The Bitter Truth Orange Bitters"
          },
          "evidence": "https://www.diffordsguide.com/cocktails/recipe/3269/bijou-cocktail-diffords-recipe"
        }
      ],
      "preparation": {
        "housebarText": "Hausbar: 25 ml No.3 London Dry Gin; 15 ml Chartreuse Verte; 30 ml Noilly Prat Rouge; 0,3 ml The Bitter Truth Orange Bitters. Alle Zutaten mit Eis verrühren und in ein vorgekühltes Martiniglas abseihen. Für die optionale Garnitur eine Zitronenzeste über dem Drink ausdrücken und verwerfen; anschließend mit einer aufgespießten Maraschino-Kirsche garnieren."
      },
      "serving": {
        "glass": {
          "primary": {
            "id": "EQ-GLAS-010",
            "text": "Martiniglas",
            "catalogName": "Martiniglas"
          },
          "secondary": {
            "id": null,
            "text": null,
            "catalogName": null
          },
          "mappingType": "HAUSBAR_ALTERNATIVE"
        },
        "ice": "Eis zum Rühren; serviert ohne Eis",
        "garnish": "Aufgespießte Maraschino-Kirsche",
        "equipment": {
          "requirementText": "EQ-WERK-004; EQ-WERK-006; EQ-WERK-018",
          "referenceIds": [
            "EQ-WERK-004",
            "EQ-WERK-006",
            "EQ-WERK-018"
          ]
        }
      },
      "deviation": {
        "statusCode": "PRAKTISCH_GLEICHWERTIG",
        "note": "Das Nick-&-Nora-Glas der Difford-Referenz ist im bestätigten Glasbestand nicht vorhanden; die Hausbar verwendet das vorhandene Martiniglas als funktional gleichwertige Alternative."
      },
      "trace": {
        "primarySourceId": "quelle-web-bijou-difford"
      }
    }
  ]
};
