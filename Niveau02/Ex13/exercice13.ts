class Voiture{
    marque: string;
    annee: number;

    constructor(marque: string, annee: number){
        this.marque = marque;
        this.annee = annee;
    }

    afficherDetails(){
        console.log(`Voiture : ${this.marque}, Année : ${this.annee}`);
    }
}

const maVoiture = new Voiture("Peugeot", 2005);
maVoiture.afficherDetails();