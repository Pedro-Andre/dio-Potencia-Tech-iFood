/*
  2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número PAR encontrado
*/

const numPar = function (lista) {
  const pares = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) pares.push([lista[i]]);
  }
  return pares;
};

console.log("Lista números pares: ");
const lista = [10, 3, 34, 67, 4, 53, 43, 51, 2, 5, 232, 214, 11];
console.log(numPar(lista).join(", "));
