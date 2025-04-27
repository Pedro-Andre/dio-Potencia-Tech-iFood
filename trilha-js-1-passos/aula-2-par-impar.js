const numero = function (num) {
  // num % 2 === 0
  //   ? console.log(`O número -> ${num} é par!`)
  //   : console.log(`O número -> ${num} é ímpar!`);

  if (num === 0) console.log(`Número ${num} é inválido!`);
  else if (num % 2 === 0) console.log(`Número ${num} é par!`);
  else if (num % 2 === 1) console.log(`Número ${num} é ímpar!`);
};

numero(0);
numero(2);
numero(21);
numero(32);
numero(23);
