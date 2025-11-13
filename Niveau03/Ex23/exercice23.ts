
function logClass(constructor: Function) {
  console.log(`Classe créée : ${constructor.name}`);
}

@logClass
class Utilisateur {
  constructor(public nom: string) {}
}

const u1 = new Utilisateur("Nicolas");
