let numeros = [8,3,4,7,5];
let i = numeros.length - 1;
let soma = 0;

while(i >= 0){
    soma += numeros[i];
    i--;
}

console.log("Somatório", soma);