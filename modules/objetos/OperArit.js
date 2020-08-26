class OperArit{
  constructor(var1, var2){
    this.var1 = var1;
    this.var2 = var2;
  }
  soma(){
    return (this.var1 + this.var2); // operador de soma "+" 
  }
  subtracao(){
    return (this.var1 - this.var2); // operador de subtracao "-"
  }
  multiplicacao(){
    return (this.var1 * this.var2); // operador multiplicacao "*"
  }
  divisao(){
    return (this.var1 / this.var2); // operador de divisao "/"
  }
  mod(){
    return (this.var1 % this.var2); // operador modulo "%", resto da divisão
  }
  potencia(){
    return (this.var1 ** this.var2); // operador de potenciação "**"
  }
}
module.exports = OperArit;