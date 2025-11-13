class Animal {
    seDeplacer(){
        console.log("L'animal se déplace.");
    }
}

class Chien extends Animal {
    aboyer(){
        console.log("Le chien aboie : Wouf Wouf !");
    }
}

class Oiseau extends Animal {
    chanter(){
        console.log("L'oiseau chante : Cui Cui !");
    }
}

const monChien = new Chien();
monChien.seDeplacer();
monChien.aboyer();

const monOiseau = new Oiseau();
monOiseau.seDeplacer();
monOiseau.chanter();