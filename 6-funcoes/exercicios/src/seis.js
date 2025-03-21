function somatorio(numeros){
    let i = numeros.length - 1;
    let soma = 0;
    while(i >= 0){
        soma += numeros[i];
        i--;
    }
    return soma;
}

let numeros = [8, 3, 4, 7, 5];
let s = somatorio(numeros);
console.log("Somatório:", s);