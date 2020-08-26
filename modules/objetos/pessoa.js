class Pessoa {
constructor(peso, altura) {
  this.peso = peso;
  this.altura = altura;
}
imc(){ // indice de massa corpórea
let imc = this.peso / (this.altura * this.altura);
return imc;
   } 
}
module.exports = Pessoa;

/* conteúdo do arquivo index.js para uso da class Pessoa

const pessoa = require('./modules/objetos/pessoa.js');

const joao = new pessoa(80, 1.75); // instanciando um objeto
console.log(joao.imc)));

const pedro = new pessoa();
pedro.peso = 100;
pedro.altura = 1.6;
console.log(pedro.imc)));
*/