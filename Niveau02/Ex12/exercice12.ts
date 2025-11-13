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

const monChien = new Chien();
monChien.seDeplacer();
monChien.aboyer();