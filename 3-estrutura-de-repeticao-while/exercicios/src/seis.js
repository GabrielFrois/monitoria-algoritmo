let entrada = 0;
let menor = 2147483647;

while(entrada < 5){
    var num = prompt("Entre com um número: ");
    num = parseInt(num);
    if(num < menor){
        menor = num;
    }
    entrada++;
}

console.log("Menor valor: ", menor);