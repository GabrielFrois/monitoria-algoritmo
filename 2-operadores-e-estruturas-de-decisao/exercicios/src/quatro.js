var num1 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);

var num2 = prompt("Entre com um número inteiro: ");
num2 = parseInt(num2);

if(num1 % num2 == 0){
  console.log(num1, "é multiplo de", num2);
} else{
  console.log(num1, "não é multiplo de", num2);
}

console.log("Fim do Programa");