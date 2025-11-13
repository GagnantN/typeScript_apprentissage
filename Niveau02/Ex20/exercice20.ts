interface Personne {
    nom: string;
    age: number;
    adresse: string;
}

type PersonnePartielle = Partial<Pick<Personne, "nom" | "age" >>;

const p1: PersonnePartielle = { nom: "Alice" };
const p2: PersonnePartielle = { age: 30 };
const p3: PersonnePartielle = { nom: "Bob", age: 25 };
const p4: PersonnePartielle = {}; 

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);