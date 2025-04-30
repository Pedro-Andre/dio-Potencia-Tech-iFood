// /*
//   1 - Crie uma classe para representar carros:
//     Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
//     - Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
// */

class Carro {
  constructor(marca, cor, litrosGastosPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.litrosGastosPorKm = litrosGastosPorKm;
  }

  gastoDoPercurso(distancia, precoCombustivel) {
    const valor = (
      distancia *
      this.litrosGastosPorKm *
      precoCombustivel
    ).toFixed(2);
    return valor;
  }
}

const city = new Carro("Honda", "Cinza Escuro", 1 / 12);
console.log(city);

const gastoHondaCity = city.gastoDoPercurso(70, 5);
console.log(`Gasto: R$${gastoHondaCity}`);

const palio = new Carro("Fiat", "Preto", 1 / 10);
console.log(palio);
const gastoPalio = palio.gastoDoPercurso(70, 5);

console.log(`Gasto: R$${gastoPalio}`);
