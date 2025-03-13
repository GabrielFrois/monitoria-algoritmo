var peso = prompt("Entre com seu peso (Kg): ");
peso = parseFloat(peso);
var altura = prompt("Entre com sua altura (m): ");
altura = parseFloat(altura);

var imc = peso / (altura * altura);

console.log(imc);