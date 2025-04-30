class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2025 - idade;
  }

  descrever() {
    console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
  }
}

function comparaIdades(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}.`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}.`);
  } else {
    console.log(`${p1.nome} tem a mesma idade ${p2.nome}.`);
  }
}

const joao = new Pessoa("Joao", 20);
joao.descrever();
const enzo = new Pessoa("Enzo", 17);
enzo.descrever();

comparaIdades(joao, enzo);
console.log(`Tipo do parametro na função comparaIdades: ${typeof joao}`);
