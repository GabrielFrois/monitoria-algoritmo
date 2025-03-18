let numeros = [8,3,4,7,5,6,4];
let i = 0;

while(i < numeros.length){
    if(i % 2 != 0){
        console.log(i, ":", numeros[i]);
    }
    i++;
}