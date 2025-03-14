var num1 = prompt("Entre com um número: ");
num1 = parseInt(num1);

var num2 = prompt("Entre com um número: ");
num2 = parseInt(num2);

var num3 = prompt("Entre com um número: ");
num3 = parseInt(num3);

if( num1 > num2 && num1 > num3){
    console.log("Maior:", num1);
} else if(num2 > num1 && num2 > num3){
    console.log("Maior:", num2);
} else{
    console.log("Maior:", num3);
}
console.log("Fim do Programa");