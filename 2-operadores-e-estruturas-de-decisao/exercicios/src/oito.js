var temperatura = prompt("Entre com a temperatura corporal: ");
parseFloat(temperatura);

if(temperatura >= 41){
    console.log("Hipertemia");
} else if(temperatura >= 39.6){
    console.log("Febre Alta");
} else if(temperatura >= 37.8){
    console.log("Febre");
} else if(temperatura > 35.1){
    console.log("Normal");
} else{
    console.log("Hipotermia");
}
console.log("Fim do Programa");