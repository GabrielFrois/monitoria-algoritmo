function matriz(numeros){
    let i = 0;
    let soma = 0; 
       while(i < numeros.length){
            let j = 0;
            while(j < numeros[i].length){
                soma += numeros[i][j];
                j++;
           }
           i++;
       }
    return soma;
}

numeros = [
    [9, 2, 4],
    [6, 5, 7],
    [2, 1, 3]
];

let s = matriz(numeros);
console.log("Somatório:", s);