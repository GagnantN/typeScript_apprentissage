function log(value: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`Méthode appelée : ${methodName}`);
    return value.call(this, ...args);
  }

  return replacementMethod;
}

class Calculatrice {
  @log
  addition(a: number, b: number) {
    return a + b;
  }

  @log
  multiplication(a: number, b: number) {
    return a * b;
  }
}

const calc = new Calculatrice();
console.log(calc.addition(2, 3));
console.log(calc.multiplication(4, 5));
