/*
  Formula do IMC
  IMC = peso / (altura * altura)  

  Condição IMC (em adultos)

  - Abaixo de 18.5 = abaixo do peso
  - Entre 18.5 e 25 = peso normal
  - Entre 25 e 30 = acima do peso
  - Entre 30 e 40 = obeso
  - Acima de 40 = obesidade grave
*/

const calcImc = function (peso, altura) {
  const imc = peso / (altura * altura);

  console.log(`Peso: ${peso}
Altura: ${altura}
- - 
IMC = ${imc.toFixed(2)}
- - `);

  if (imc < 18.5) {
    console.log("-> Abaixo do peso!\n");
  } else if (imc >= 18.5 && imc <= 25) {
    console.log("-> Peso normal!\n");
  } else if (imc >= 25 && imc <= 30) {
    console.log("-> Acima do peso!\n");
  } else if (imc >= 30 && imc <= 40) {
    console.log("-> Obeso!\n");
  } else if (imc > 40) {
    console.log("-> Obesidade grave!\n");
  } else {
    console.log("-> Dados inválidos!\n");
  }
};

calcImc(83, 1.78);
calcImc(86.55, 1.78);
calcImc(97, 1.7);
