/*
  1) Crie um programa que dado um número imprima a sua tabuada
*/

const tabuada = function (num, multiplicador) {
  for (let i = 0; i <= multiplicador; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

tabuada(3, 15);
console.log("------");
tabuada(7, 5);
