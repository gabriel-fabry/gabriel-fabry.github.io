/* ==========================================================
   LE SEUL FICHIER A MODIFIER POUR METTRE A JOUR LE SITE
   ==========================================================

   Pour ajouter des photos a une serie :
     1. mettez les fichiers dans le dossier images/<dossier de la serie>/
     2. ajoutez leur nom dans la liste "images" de la serie (dans l ordre voulu)

   Pour ajouter une serie :
     1. creez un dossier dans "images" (sans accents, sans espaces :
        utilisez des tirets)
     2. copiez une ligne { titre: "...", dossier: "...", images: [ ... ] }
        et changez le titre, le dossier et les images

   Pour ajouter un petit texte sous le titre d une serie, ajoutez :
     texte: "Mon texte",

   Attention aux virgules entre chaque element, et aux guillemets "".
*/

const SITE = {
  nom: "Gabriel Fabry",
  email: "gabriel.fabry@protonmail.com",
  instagram: "gabriel.imago",

  // Image de la page d accueil (le fichier est dans images/accueil/)
  accueil: "accueil.jpg"
};

const SERIES = [
  {
    titre: "Carnaval",
    dossier: "carnaval",
    images: [
      "Carnaval1.jpg",
      "Carnaval2.jpg",
      "Carnaval3.jpg",
      "Carnaval4.jpg",
      "Carnaval5.jpg",
      "Carnaval6.jpg",
		"Carnaval7.jpg",
      "Carnaval8.jpg",
      "Carnaval9.jpg",
      "Carnaval10.jpg",
      "Carnaval11.jpg",
      "Carnaval12.jpg",
      "Carnaval13.jpg",
      "Carnaval14.jpg",
      "Carnaval15.jpg",
      "Carnaval16.jpg",
      "Carnaval17.jpg",
      "Carnaval18.jpg",
      "Carnaval19.jpg",
      "Carnaval20.jpg",
      "Carnaval21.jpg",
      "Carnaval22.jpg",
      "Carnaval23.jpg",
      "Carnaval24.jpg",
      "Carnaval25.jpg",
      "Carnaval26.jpg",
      "Carnaval27.jpg",
      "Carnaval28.jpg",
      "Carnaval29.jpg",
      "Carnaval30.jpg",
      "Carnaval31.jpg",
      "Carnaval32.jpg",
      "Carnaval33.jpg",
      "Carnaval34.jpg",
      "Carnaval35.jpg",
      "Carnaval36.jpg",
      "Carnaval37.jpg",
      "Carnaval38.jpg",
      "Carnaval39.jpg",
      "Carnaval40.jpg",
      "Carnaval41.jpg",
		"Carnaval42.jpg",
		"Carnaval43.jpg",
		"Carnaval44.jpg",
		"Carnaval45.jpg",
		"Carnaval46.jpg",
		"Carnaval47.jpg",
		"Carnaval48.jpg",
		"Carnaval49.jpg",
		"Carnaval50.jpg",
		"Carnaval51.jpg",
		"Carnaval52.jpg",
		"Carnaval53.jpg",
		"Carnaval54.jpg",
		"Carnaval55.jpg",
		"Carnaval56.jpg",
		"Carnaval57.jpg",
		"Carnaval58.jpg",
		"Carnaval59.jpg",
		"Carnaval60.jpg",
		"Carnaval61.jpg",
		"Carnaval62.jpg",
    ]
  },
  {
    titre: "PAO",
    dossier: "PAO",
    images: Array.from({ length: 72 }, (_, i) => `${i + 1}.jpg`)
  },
  {
    titre: "Cammaron",
    dossier: "cammaron",
    images: [
      "cammaron1.jpg",
      "cammaron2.jpg",
      "cammaron3.jpg",
      "cammaron4.jpg",
      "cammaron5.jpg",
      "cammaron6.jpg",
      "cammaron7.jpg",
      "cammaron8.jpg",
      "cammaron9.jpg",
      "cammaron10.jpg",
      "cammaron11.jpg",
      "cammaron12.jpg",
      "cammaron13.jpg",
      "cammaron14.jpg",
      "cammaron15.jpg",
      "cammaron16.jpg",
      "cammaron17.jpg",
      "cammaron18.jpg",
      "cammaron19.jpg",
      "cammaron20.jpg",
      "cammaron21.jpg",
      "cammaron22.jpg",
      "cammaron23.jpg",
      "cammaron24.jpg",
      "cammaron25.jpg",
      "cammaron26.jpg",
      "cammaron27.jpg",
		"cammaron28.jpg",
		"cammaron29.jpg",
		"cammaron30.jpg",
		"cammaron31.jpg",
		"cammaron32.jpg",
		"cammaron33.jpg",
		"cammaron34.jpg",
		"cammaron35.jpg",
		"cammaron36.jpg",
		"cammaron37.jpg",
		"cammaron38.jpg",
    ]
  },
  {
    titre: "Voy (ou voile)",
    dossier: "cecifoot",
    images: [
      "cecifoot1.jpg",
      "cecifoot2.jpg",
      "cecifoot3.jpg",
      "cecifoot4.jpg",
      "cecifoot5.jpg",
      "cecifoot6.jpg",
      "cecifoot7.jpg",
		"cecifoot8.jpg",
		"cecifoot9.jpg",
		"cecifoot10.jpg",
		"cecifoot11.jpg",
		"cecifoot12.jpg",
		"cecifoot13.jpg",
		"cecifoot14.jpg",
		"cecifoot15.jpg",
		"cecifoot16.jpg",
		"cecifoot17.jpg",
		"cecifoot18.jpg",
		"cecifoot19.jpg",
		"cecifoot20.jpg"
    ]
  },
  {
    titre: "Le maître des pages",
    dossier: "milk",
    images: [
      "milk1.jpg",
      "milk2.jpg",
      "milk3.jpg",
      "milk4.jpg",
      "milk5.jpg",
      "milk6.jpg",
      "milk7.jpg",
      "milk8.jpg",
      "milk9.jpg",
		"milk10.jpg"
    ]
  },
  {
    titre: "Homes",
    dossier: "homes",
    images: [
      "house1.jpg",
      "house2.jpg",
      "house3.jpg",
      "house4.jpg",
      "house5.jpg",
      "house6.jpg",
      "house7.jpg",
      "house8.jpg",
      "house9.jpg",
      "house10.jpg",
      "house11.jpg",
      "house12.jpg",
      "house13.jpg",
      "house14.jpg",
      "house15.jpg",
      "house16.jpg",
      "house17.jpg",
      "house18.jpg",
      "house19.jpg",
      "house20.jpg",
      "house21.jpg",
      "house22.jpg",
      "house23.jpg",
      "house24.jpg",
      "house25.jpg",
      "house26.jpg",
      "house27.jpg",
      "house28.jpg",
      "house29.jpg",
      "house30.jpg",
    ]
  },
  {
    titre: "Journaux",
    sous: [
      { titre: "Journal #1", dossier: "journal-1", images: [] },
      { titre: "Journal #2", dossier: "journal-2", images: [] }
    ]
  },
  {
    titre: "Auto-editions",
    sous: [
      {
        titre: "18 images",
        dossier: "18images",
        images: [
          "Edition_1 0.jpg",
          "Edition_1 1.jpg",
          "Edition_1 2.jpg",
          "Edition_1 3.jpg",
          "Edition_1 4.jpg",
          "Edition_1 5.jpg",
          "Edition_1 6.jpg",
          "Edition_1 7.jpg",
          "Edition_1 8.jpg",
          "Edition_1 9.jpg",
          "Edition_1 10.jpg"
        ]
      },
      {
        titre: "Arles 2025.12",
        dossier: "arles",
        images: [
          "Arles1.jpeg",
          "Arles2.jpeg",
          "Arles3.jpeg",
          "Arles4.jpeg",
          "Arles5.jpeg",
          "Arles6.jpeg",
          "Arles7.jpeg",
          "Arles8.jpeg",
          "Arles9.jpeg",
          "Arles10.jpeg",
          "Arles11.jpeg",
          "Arles12.jpeg",
          "Arles13.jpeg"
        ]
      }
    ]
  }
];