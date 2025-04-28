/*
  Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo

  Média = (nota1 + nota2 + nota3) / 3

  Classificaçã: 
    - Média menor que 5, reprovado
    - Média entre 5 e 7 , recuperação
    - Média maior que 7, aprovado

*/

const calcMedia = function (nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;

  console.log(`Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
- -
Média: ${media}    
- - `);

  if (media < 5) console.log("-> Aluno(a) Reprovado!\n");
  else if (media >= 5 && media <= 7)
    console.log("-> Aluno(a) de recuperação!\n");
  else if (media > 7) console.log("-> Aluno passou de semestre!\n");
  else console.log("-> Notas inválidas!\n");
};

calcMedia(5, 3, 7);
calcMedia(5, 6, 7);
calcMedia(6.6, 8, 7);
