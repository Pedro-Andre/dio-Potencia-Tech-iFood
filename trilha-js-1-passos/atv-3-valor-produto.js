/*
  - Calcular o valor a ser pago por um produto, considerando o preço normal na etiqueta e a escolha da forma de pagamento

  - Débito à vista = 10% de desconto
  - Dinheiro à vista ou PIX = 15% de desconto
  - Em 2x =  preço da etiqueta e sem juros
  - Acima de 2x = preço da etiqueta + 10% de juros

*/

const valorProduto = function (precoProduto, formaPagamento, numParcelas) {
  let valorProduto, desconto, juros;

  if (formaPagamento === 1) {
    desconto = 10;
    formaPagamento = "debito";
    valorProduto = precoProduto - precoProduto * 0.1;
    console.log(
      `Preço produto: R$ ${precoProduto} | Forma Pagamento: ${formaPagamento.toUpperCase()}
Desconto: ${desconto}% | Valor Final: R$ ${valorProduto.toFixed(2)}.
      `
    );
  } else if (formaPagamento === 2 || formaPagamento === 3) {
    desconto = 15;
    formaPagamento = "dinheiro / pix";
    valorProduto = precoProduto - precoProduto * 0.15;
    console.log(
      `Preço produto: R$ ${precoProduto} | Forma Pagamento: ${formaPagamento.toUpperCase()}
Desconto: ${desconto}% | Valor Final: R$ ${valorProduto.toFixed(2)}.
      `
    );
  } else if (formaPagamento === 4 && numParcelas === 2) {
    juros = 0;
    valorProduto = precoProduto;
    formaPagamento = "credito";
    console.log(
      `Preço produto: R$ ${precoProduto} | Forma Pagamento: ${formaPagamento.toUpperCase()}
Num. Parcelas: ${numParcelas} | Juros: ${juros}% | Valor Final: R$ ${valorProduto.toFixed(
        2
      )}.
      `
    );
  } else if (formaPagamento === 4 && numParcelas > 2) {
    juros = 10;
    valorProduto = precoProduto + precoProduto * 0.1;
    formaPagamento = "credito";
    console.log(
      `Preço produto: R$ ${precoProduto} | Forma Pagamento: ${formaPagamento.toUpperCase()}
Num. Parcelas: ${numParcelas} | Juros: ${juros}% | Valor Final: R$ ${valorProduto.toFixed(
        2
      )}.
      `
    );
  } else {
    console.log("Dados inválidos!");
  }
};

valorProduto(100, 1);
valorProduto(100, 2);
valorProduto(100, 3);
valorProduto(100, 4, 2);
valorProduto(100, 4, 5);
