const livre01 = {
    titre: "Tara Duncan",
    auteur: "Anne-Sophie",
    annee: 2004
}

const livre02 = {
    titre: "Autre Monde",
    auteur: "Maxime Chatam",
    annee: 2015
}

const livre03 = {
    titre: "Mystery Fantasy",
    auteur: "Nicolas Gagnant",
    annee: 2025
}

const bibliotheque = [
    livre01,
    livre02,
    livre03
]

for (let livre of bibliotheque){
    console.log(livre.titre);
}