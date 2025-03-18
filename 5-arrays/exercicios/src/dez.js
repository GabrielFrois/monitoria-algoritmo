let matriz = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
   ];

let i = 0;
let j = 0;

while(i < matriz.length){
    while(j < matriz.length){
        console.log(matriz[i][j]);
        i++;
        j++;
    }
}