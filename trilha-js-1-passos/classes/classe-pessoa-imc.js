/*
  2 - Crie uma classe para representar pessoas:
  
  Para cada pessoa teremos os atributos nome, peso e altura
  - As pessoas dever ter a capacidade de dizer o valor do seu IMC (peso / (altura * altura));
  - Instancie uma pessoa chamada josé que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor de seu IMC
*/

class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcIMC() {
    return (this.peso / (this.altura * this.altura)).toFixed(2);
  }

  classificaIMC() {
    const imc = this.calcIMC();

    if (imc < 18.5) {
      return "-> Abaixo do peso!\n";
    } else if (imc >= 18.5 && imc <= 25) {
      return "-> Peso normal!\n";
    } else if (imc >= 25 && imc <= 30) {
      return "-> Acima do peso!\n";
    } else if (imc >= 30 && imc <= 40) {
      return "-> Obeso!\n";
    } else if (imc > 40) {
      return "-> Obesidade grave!\n";
    } else {
      return "-> Dados inválidos!\n";
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose);
console.log(`IMC: ${jose.calcIMC()}`);
console.log(jose.classificaIMC());
