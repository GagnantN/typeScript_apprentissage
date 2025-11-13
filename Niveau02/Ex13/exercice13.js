var Voiture = /** @class */ (function () {
    function Voiture(marque, annee) {
        this.marque = marque;
        this.annee = annee;
    }
    Voiture.prototype.afficherDetails = function () {
        console.log("Voiture : ".concat(this.marque, ", Ann\u00E9e : ").concat(this.annee));
    };
    return Voiture;
}());
var maVoiture = new Voiture("Peugeot", 2005);
maVoiture.afficherDetails();
