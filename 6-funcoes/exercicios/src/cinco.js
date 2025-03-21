function inverte(nome){
    let i = nome.length - 1;
    let invertido = "";
    while(i >= 0){
        invertido += nome[i];
        i--;
    }
    return invertido;
}

let r = inverte("Pedro");
console.log("Invertido:", r);