var num1 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);

var num2 = prompt("Entre com um número inteiro: ");
num2 = parseInt(num2);

if(num1 > num2){
  console.log(num2, "é menor que", num1);
} else{
  console.log(num1, "é menor que", num2);
}

console.log("Fim do Programa");