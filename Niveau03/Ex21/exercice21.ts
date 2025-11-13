function identite<T>(arg: T): T{
    return arg;
}

console.log(identite<string>("Bonjour")); 
console.log(identite<number>(42));        
console.log(identite<boolean>(true));     
console.log(identite<object>({ nom: "Alice", age: 25 })); 