var Cercle = /** @class */ (function () {
    function Cercle(rayon) {
        this.rayon = rayon;
    }
    Cercle.prototype.aire = function () {
        return Math.PI * this.rayon * this.rayon;
    };
    return Cercle;
}());
var monCercle = new Cercle(5);
console.log(monCercle.aire());
