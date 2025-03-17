let entrada = 0;
let soma = 0;

while(entrada < 5){
    var num = prompt("Entre com o número: ");
    num = parseInt(num);
    soma += num;
    entrada++;
}

console.log("Somatório: ", soma);