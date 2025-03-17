let entrada = 0;
let maior = -2147483647;

while(entrada < 5){
    var num = prompt("Entre com um número: ");
    num = parseInt(num);
    if(num > maior){
        maior = num;
    }
    entrada++;
}

console.log("Maior valor: ", maior);