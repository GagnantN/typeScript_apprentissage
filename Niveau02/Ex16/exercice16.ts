const nombre = [1, 2, 3, 4, 5];

const prenoms = ["Nico", "Corine", "Kat"];

function inverserTableau<T>(tableau: T[]): T[] {
    return tableau.reverse();
}

console.log(inverserTableau(nombre));
console.log(inverserTableau(prenoms));