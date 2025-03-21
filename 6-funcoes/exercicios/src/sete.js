function inverter(numeros){
    let i = numeros.length - 1;
    while(i >= 0){
        console.log(i, ":", numeros[i]);
        i--;
    }
}

console.log("Lista");
let numeros = [8, 3, 4, 7, 5];
inverter(numeros);