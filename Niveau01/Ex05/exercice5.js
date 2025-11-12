var Jour;
(function (Jour) {
    Jour[Jour["Lundi"] = 0] = "Lundi";
    Jour[Jour["Mardi"] = 1] = "Mardi";
    Jour[Jour["Mercredi"] = 2] = "Mercredi";
    Jour[Jour["Jeudi"] = 3] = "Jeudi";
    Jour[Jour["Vendredi"] = 4] = "Vendredi";
    Jour[Jour["Samedi"] = 5] = "Samedi";
    Jour[Jour["Dimanche"] = 6] = "Dimanche";
})(Jour || (Jour = {}));
var jourActuel = Jour.Mercredi;
console.log(jourActuel);
