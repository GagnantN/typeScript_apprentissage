const nombres: number[] = [1, 2, 3, 4, 5];
let resultat: number = 0;

for (let nombre of nombres){
    console.log(nombre);
    resultat = resultat + nombre;
}

console.log(resultat)