const senha = 'abc';
let entrada = '';

while(entrada != senha){
    entrada = prompt("Entre com a senha: ");
    if(entrada != senha){
        console.log("Senha incorreta");
    }
    else{
        console.log("Acesso liberado");
    }
}