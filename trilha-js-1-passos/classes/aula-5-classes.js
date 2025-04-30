class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const ana = new Pessoa("Ana", 22);
console.log(ana);
