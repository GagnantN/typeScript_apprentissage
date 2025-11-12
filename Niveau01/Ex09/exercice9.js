var livre01 = {
    titre: "Tara Duncan",
    auteur: "Anne-Sophie",
    annee: 2004
};
var livre02 = {
    titre: "Autre Monde",
    auteur: "Maxime Chatam",
    annee: 2015
};
var livre03 = {
    titre: "Mystery Fantasy",
    auteur: "Nicolas Gagnant",
    annee: 2025
};
var bibliotheque = [
    livre01,
    livre02,
    livre03
];
for (var _i = 0, bibliotheque_1 = bibliotheque; _i < bibliotheque_1.length; _i++) {
    var livre = bibliotheque_1[_i];
    console.log(livre.titre);
}
