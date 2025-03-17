var num1 = prompt("Entre com um número: ");
num1 = parseInt(num1);

var num2 = prompt("Entre com um número: ");
num2 = parseInt(num2);

if(num1 < num2){
    while(num1 <= num2){
        console.log(num1);
        num1++;
    }
} else{
    while(num2 <= num1){
        console.log(num2);
        num2++;
    }
}