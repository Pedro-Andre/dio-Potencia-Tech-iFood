/*
  - Calcular o valor a ser pago por um produto, considerando o preço normal na etiqueta e a escolha da forma de pagamento

  - Débito à vista = 10% de desconto
  - Dinheiro à vista ou PIX = 15% de desconto
  - Em 2x =  preço da etiqueta e sem juros
  - Acima de 2x = preço da etiqueta + 10% de juros

*/

const aplicaDesconto = function (valor, desconto) {
  return valor - (valor * desconto) / 100;
};

const aplicaJuros = function (valor, juros) {
  return valor + (valor * juros) / 100;
};

const precoProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
  console.log(
    `Preço: R$ ${precoProduto}, Desconto: 10%, Valor final: R$ ${aplicaDesconto(
      precoProduto,
      10
    )}`
  );
} else if (formaPagamento === 2) {
  console.log(
    `Preço: R$ ${precoProduto}, Desconto: 15%, Valor final: R$ ${aplicaDesconto(
      precoProduto,
      15
    )}`
  );
} else if (formaPagamento === 3) {
  console.log(
    `Preço: R$ ${precoProduto}, Juros: 0, Valor final: R$ ${precoProduto}`
  );
} else {
  console.log(
    `Preço: R$ ${precoProduto}, Juros: 10%, Valor final: R$ ${aplicaJuros(
      precoProduto,
      10
    )}`
  );
}
