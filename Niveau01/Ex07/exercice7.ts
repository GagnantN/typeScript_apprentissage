function inverserChaine(chaine: string): string {
    return chaine.split('').reverse().join('');
}

console.log(inverserChaine("Bonjour"));