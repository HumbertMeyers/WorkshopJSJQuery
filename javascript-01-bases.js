

// FONCTIONS FLECHEES

// Remplacer les définitions de fonctions par des fonctions fléchées

// Ex 1 : qui renvoie une valeur, sans paramètre
let exo1 = function () { return 1 }; // à remplacer
exo1(); // renvoie 1

// Ex 1 : qui renvoie une valeur, avec paramètres
let exo2 = function (a, b) { return a + b }; // à remplacer
exo2(3, 4); // renvoie 7

// Ex 3 : avec paramètres, effectue plusieurs traitements ou ne renvoie rien : accolades nécessaires
let exo3 = function (a, b) { let c = a + b; console.log(c); }; // à remplacer
exo3(5, 4); // affiche 9

// Ex 4 : avec paramètres, effectue plusieurs traitements ou ne renvoie rien : accolades nécessaires
[1, 2, 8, 4, 9].filter(function (x) { return x > 5; }); // à remplacer



// -------------------------------------------------------

// SPREAD
// Utilisez l'opérateur  "spread" pour pouvoir utiliser un array en tant que plusieurs paramètre

let mesures = [1, 4, 3];

let volume = (longueur, largeur, profondeur) => longueur * largeur * profondeur;

volume(mesures); // à adapter

Math.max(mesures); // à adapter

// -------------------------------------------------------

// utiliser la constructio avec `  ` pour réécrire la string chaine

const nom = "Victor"
const bonus = 1;
const base = 2;

let chaine = "Bienvue " + nom + "!\n" +
             "Vous avez obtenu " + "base " + "point(s) et " +
			 bonus + " point(s) bonus.\nSoit un total de : " + (1 + 2) + ".";



// -------------------------------------------------------

let mesures = [1, 4, 3];

let volume = (longueur, largeur, profondeur) => longueur * largeur * profondeur;

volume(mesures); // à adapter

Math.max(mesures); // à adapter


// -------------------------------------------------------

// Exercice 1 : 
// Ajouter une méthode surface à cet objet qui renvoie la surface


let rectangle1 = {
  longueur: 2,
  largeur: 3
}

// ... A compléter ...

rectangle.surface() // => renvoie 6



// Exercice 2 : 
// Ajouter une méthode surface au prototype de Rectangle
// pour que les deux objet créés avec le constructeur Rectangle en bénéficient



function Rectangle(longueur, largeur) { 
   this.longueur = longueur; 
   this.largeur = largeur; 
} 

let rectangle2 = new Rectangle(5, 4); 
let rectangle3 = new Rectangle(6, 2); 

// ... A compléter ...

rectangle2.surface(); // => renvoie 20
rectangle3.surface(); // renvoie 12




// Pour info 
// Autre possibilité plus récente pour créer un objet.
// Potentiellement intéressante pour les développeurs provenant d'autre langages OO.

class Carre { 
    constructor(cote) 
    { 
        this.cote = cote; 
    } 
} 

let carre1 = new Carre(3);



// -------------------------------------------------------

personne = {
	prenom: "tata",
	nom: "toto"
}

function direCoucou(message) {
	alert(`${message} ${this.nom}`);
}


setTimeout(direCoucou, 2000); // adapter avec bind pour lier une instance et un paramètre



