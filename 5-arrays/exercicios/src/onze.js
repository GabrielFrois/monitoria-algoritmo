let matriz = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
   ];

let i = 0;
let soma = 0;
   
   while(i < matriz.length){
        let j = 0;
        while(j < matriz.length){
            soma += matriz[i][j];
            j++;
       }
       i++;
   }

   console.log("Somatório:", soma);