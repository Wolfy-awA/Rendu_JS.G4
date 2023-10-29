/*
// création du tueur
class Tueur{
    constructor(name, hp) 
    {
        this.name = name
        this.hp = hp
    }
}

let Jason = new Tueur ("Jason", 100)

//liste des noms
const prenoms = ["Pierre", "Margaux", "Ismaël", "Lorenzo", "Aldric", "Victor", "Aubin", "Côme", "Tomi", "Mathieu"];

//liste des characteristics
const characteristics = [
  { nom: "Nerd", probaMourir: 0.3, probaDmg: 0.5, probaMourirDmg: 0.2 },
  { nom: "Sportif", probaMourir: 0.4, probaDmg: 0.6, probaMourirDmg: 0.3 },
  { nom: "Blonde", probaMourir: 0.5, probaDmg: 0.7, probaMourirDmg: 0.4 },
  { nom: "Artiste", probaMourir: 0.6, probaDmg: 0.8, probaMourirDmg: 0.5 },
  { nom: "Survivant", probaMourir: 0.2, probaDmg: 0.4, probaMourirDmg: 0.1 },
];

//création de la class survivant
class Survivor{
    constructor(name, characteristics)
    {
        this.name = name
        this.characteristics = characteristics
    }
}

var survivors = [] 

// Fonction pour générer un nombre aléatoire entre min (inclus) et max (exclus)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Génération d'obets dans la class Survivor (ne marche pas)
for (let i = 0; i < 5; i++) {
    let survivor = new Survivor (Survivor.name = (getRandomInt(0, prenoms.length)),Survivor.characteristics = (getRandomInt(0, characteristics.length)))
    survivors.push(survivor)
}

console.log(survivors)

//boucle de combat
    //while (Jason.hp != 0 && survivor.length != 0)
        {
         //prendre un survivant aléatoire
         //selon la proba, mourrir, dodge, sacrifice
             //si un survivant meurt, le retirer de la liste survivor.slice[index]
                //si un survivant dodge Jason.hp -= 10
                //si un survivant se sacrifie Jason.hp -= 15, survivor.slice[index]
                 //si survivor.length == 0, fin de la boucle (while)
             //Si Jason meurt la boucle se fini (while)
        }

//Affichage
if (Jason.hp <= 0) {
    console.log(Jason.name, "est mort! Les survivants gagnent!")
}
if (survivors.length == 0) {
    console.log(Jason.name, "a tué tout le monde...")
}  
*/