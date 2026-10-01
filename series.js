/* ==========================================================
   LE SEUL FICHIER À MODIFIER POUR METTRE À JOUR LE SITE
   ==========================================================

   Pour ajouter des photos à une série :
     1. mettez les fichiers dans le dossier images/<dossier de la série>/
     2. ajoutez leur nom dans la liste "images" de la série (dans l'ordre voulu)

   Pour ajouter une série :
     1. créez un dossier dans "images" (sans accents, sans espaces : utilisez des tirets)
     2. copiez une ligne { titre: "...", dossier: "...", images: [ ... ] }
        et changez le titre, le dossier et les images

   Pour ajouter un petit texte sous le titre d'une série, ajoutez :  texte: "Mon texte",

   Attention aux virgules entre chaque élément, et aux guillemets "".
*/

const SITE = {
  nom: "Gabriel Fabry",
  email: "gabriel.fabry@protonmail.com",
  instagram: "gabriel.imago",

  // Image de la page d'accueil (le fichier est dans images/accueil/)
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
  		"Carnaval41.jpg"]
    },
  
  {
    titre: "PAO",
    dossier: "PAO",
    images: Array.from({ length: 72 }, (_, i) => `${i + 1}.jpg`)
  },
  {
    titre: "Cammaròn",
    dossier: "Cammaron",
    images: [
		"camarron1.jpg",
		"camarron2.jpg",
		"camarron3.jpg",
		"camarron4.jpg",
		"camarron5.jpg",
		"camarron6.jpg",
		"camarron7.jpg",
		"camarron8.jpg",
		"camarron9.jpg",
		"camarron10.jpg",
		"camarron11.jpg",
		"camarron12.jpg",
		"camarron13.jpg",
		"camarron14.jpg",
		"camarron15.jpg",
		"camarron16.jpg",
		"camarron17.jpg",
		"camarron18.jpg",
		"camarron19.jpg",
		"camarron20.jpg",
		"camarron21.jpg",
		"camarron22.jpg",
		"camarron23.jpg",
		"camarron24.jpg",
		"camarron25.jpg",
		"camarron26.jpg",
		"camarron27.jpg",
		"camarron28.jpg"]
  },
  {
    titre: "Cécifoot",
    dossier: "Cecifoot",
    images: [
		"Cecifoot_00.jpg",
		"Cecifoot_01.jpg",
		"Cecifoot_02.jpg",
		"Cecifoot_03.jpg",
		"Cecifoot_04.jpg",
		"Cecifoot_05.jpg",
		"Cecifoot_06.jpg",
		"Cecifoot_07.jpg",
		"Cecifoot_08.jpg",
		"Cecifoot_09.jpg",
		"Cecifoot_10.jpg",
		"Cecifoot_11.jpg",
		"Cecifoot_12.jpg",
		"Cecifoot_13.jpg",
		"Cecifoot_14.jpg"]
  },
  {
    titre: "Le Maître des Pages",
    dossier: "Milk",
    images: [
		"milk1.jpg",
		"milk2.jpg",
		"milk3.jpg",
		"milk4.jpg",
		"milk5.jpg",
		"milk6.jpg",
		"milk7.jpg",
		"milk8.jpg",
		"milk9.jpg",]
  },
  {
    titre: "Old fashion",
    dossier: "oldfashion",
    images: [
		"oldfashion1.jpg",
		"oldfashion2.jpg",
		"oldfashion3.jpg",
		"oldfashion4.jpg",
		"oldfashion5.jpg",
		"oldfashion6.jpg",
		"oldfashion7.jpg",
		"oldfashion8.jpg",
		"oldfashion9.jpg",
		"oldfashion10.jpg",
		"oldfashion11.jpg",
		"oldfashion12.jpg",
		"oldfashion13.jpg",
		"oldfashion14.jpg",
		"oldfashion15.jpg",
		"oldfashion16.jpg",
		"oldfashion17.jpg",
		"oldfashion18.jpg",
		"oldfashion19.jpg",
		"oldfashion20.jpg",
		"oldfashion21.jpg",
		"oldfashion22.jpg",
		"oldfashion23.jpg",
		"oldfashion24.jpg",
		"oldfashion25.jpg",
		"oldfashion26.jpg",
		"oldfashion27.jpg",
		"oldfashion28.jpg",
		"oldfashion29.jpg",
		"oldfashion30.jpg",
		"oldfashion31.jpg",
		"oldfashion32.jpg",
		"oldfashion33.jpg",
		"oldfashion34.jpg",
		"oldfashion35.jpg",
		"oldfashion36.jpg",
		"oldfashion37.jpg",
		"oldfashion38.jpg",
		"oldfashion39.jpg",
		"oldfashion40.jpg",
		"oldfashion41.jpg",
		"oldfashion42.jpg",
		"oldfashion43.jpg",
		"oldfashion44.jpg",
		"oldfashion45.jpg",
		"oldfashion46.jpg",
		"oldfashion47.jpg",]
  },
  {
    titre: "Journal",
    sous: [
      { titre: "Journal #1", dossier: "journal-1", images: [] },
      { titre: "Journal #2", dossier: "journal-2", images: [] }
    ]
  },
  {
    titre: "Auto-éditions",
    sous: [
      { 
        titre: "18 images de peaux secrètes", 
        dossier: "18-images-de-peaux-secretes", 
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
          "Edition_1 10.jpg"] 
      },
      { titre: "Home", dossier: "home", images: [] },
      { titre: "Portraits de famille", dossier: "portraits-de-famille", images: [] }
    ]
  }
];