interface Forme {
    aire(): number;   
}

class Cercle implements Forme {
    rayon: number;

    constructor(rayon: number) {
        this.rayon = rayon;
    }

    aire(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

const monCercle = new Cercle(5);
console.log(monCercle.aire());
