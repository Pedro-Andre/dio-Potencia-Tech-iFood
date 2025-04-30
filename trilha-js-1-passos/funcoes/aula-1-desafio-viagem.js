/*
DESAFIO 1:

  Faça um programa para imprimir o valor de uma viagem
    - Deverá ter 3 variáveis:
      1- Preço combustível
      2- Gasto médio de combustível do carro por KM
      3- Distância em KM da viagem
*/

// PARTE 1
/*
 const calcViagem = function (precoCombustivel, kmPorLitro, distanciaKm) {
   const litrosConsumidos = distanciaKm / kmPorLitro;
   const valorGasto = litrosConsumidos * precoCombustivel;

   console.log(`Preço combustível: R$ ${precoCombustivel}
 Gasto médio de combustível do carro: ${kmPorLitro}
 Distância da viagem: ${distanciaKm} Km
 - - -
 ==|> Valor da viagem: R$ ${valorGasto.toFixed(2)} <|==
 `);
 };

calcViagem(4.55, 12, 37);
*/

// PARTE 2 (Incrementando)

const calcViagem = function (tipoCombustivel, kmPorLitro, distanciaKm) {
  let precoEtanol = 5.79;
  let precoGasolina = 6.49;
  let valorGasto = 0;
  let precoCombustivel;

  const litrosConsumidos = distanciaKm / kmPorLitro;

  if (tipoCombustivel === "etanol") {
    valorGasto = litrosConsumidos * precoEtanol;
  }

  if (tipoCombustivel === "gasolina") {
    valorGasto = litrosConsumidos * precoGasolina;
  }

  console.log(`Tipo combustível: ${tipoCombustivel.toUpperCase()}
Preço do combustível: R$ ${
    tipoCombustivel === "etanol"
      ? (precoCombustivel = precoEtanol)
      : (precoCombustivel = precoGasolina)
  }
Gasto médio de combustível do carro: ${kmPorLitro}
Distância da viagem: ${distanciaKm} Km
- - -
--> Valor da viagem: R$ ${valorGasto.toFixed(2)} 
- - -
`);
};

calcViagem("etanol", 10, 97);
calcViagem("gasolina", 11, 100);
