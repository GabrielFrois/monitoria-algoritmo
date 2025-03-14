# Aula 3 - Estrutura de Repetição While  

## I. Repetições  
As estruturas de repetição são usadas para **executar um bloco de código múltiplas vezes**, evitando a repetição manual de instruções.  

### Exemplo sem repetição:  
```javascript
console.log("Boa noite");
console.log("Boa noite");
console.log("Boa noite");
console.log("Boa noite");
```

### Se tivermos instruções semelhantes com números sequenciais:
```javascript
console.log("Nro", 1);
console.log("Nro", 2);
console.log("Nro", 3);
console.log("Nro", 4);
console.log("Nro", 5);
```

Podemos substituir esse código por uma estrutura de repetição, tornando o código mais eficiente e dinâmico.

## II. Estrutura de Repetição While  
A estrutura `while` (enquanto) executa um bloco de código enquanto a condição for verdadeira.

### Sintaxe básica:
```javascript
while (condição) {
    // Bloco de código repetido
}
```

O `while` é útil quando não sabemos quantas vezes o código deve se repetir de antemão.  

### Exemplo: Repetindo uma mensagem 5 vezes
```javascript
let cont = 0; // Inicializa o contador
while (cont < 5) { // Enquanto a condição for verdadeira, o loop continua
    console.log("Boa noite");
    cont = cont + 1; // Atualiza o contador
}
```

**Atenção:** Se não atualizar o contador, o programa entrará em loop infinito.

### Exemplo: Contando de 1 a 5
**Sem `while`:**  
```javascript
console.log("Nro", 1);
console.log("Nro", 2);
console.log("Nro", 3);
console.log("Nro", 4);
console.log("Nro", 5);
```

**Usando `while`:**
```javascript
let cont = 1;
while (cont <= 5) {
    console.log("Nro", cont);
    cont = cont + 1;
}
```

## III. Exercícios  

### Exercício 1:  
Fazer um programa que imprime na tela os números inteiros no intervalo [10,20].  

**Dica:** use a estrutura de repetição while.  

**Exemplo de Saída:
```
10
11
12
13
14
15
16
17
18
19
20
```

### Exercício 2:  
Fazer um programa que pede para o usuário entrar com dois números inteiros, um de cada vez, e na sequência o programa imprime na tela todos os números nesse intervalo.

**Dica:** use a função prompt para ler o teclado e a função parseInt para converter de string para inteiro.

**Exemplo de Saída:**
```
Entre com o menor valor: 8
Entre com o maior valor: 15
8
9
10
11
12
13
14
15
```

### Exercício 3:  
Alterar o Exercício 2 para o programa aceitar valores em qualquer ordem fornecida pelo usuário. 

**Dica:** use um if para testar se o 1º valor é maior que o 2º valor, e troque a ordem dos valores.

**Exemplos de saída:**
```
Entre com um valor: 15
Entre com um valor: 8
8
9
10
11
12
13
14
15
```

### Exercício 4:  
Alterar o programa do Exercício 3 para imprimir na tela o somatório dos números no intervalo fornecido pelo usuário.

**Dica:** será necessário criar uma variável para acumular o somatório e essa variável terá de ser iniciada com o valor 0.

**Exemplos de saída:**
```
Entre com um valor: 11
Entre com um valor: 8
Somatório: 38
```

### Exercício 5:  
Fazer um programa que pede para o usuário entrar com cinco números, um de cada vez. Use a estrutura de repetição while. Após finalizar a entrada dos números, o programa deverá imprimir o somatório.

**Dica:** será necessário criar uma variável para acumular o somatório e essa variável terá de ser iniciada com o valor 0.

**Exemplo de saída:**
```
Entre com o número: 4
Entre com o número: 2
Entre com o número: 5
Entre com o número: 3
Entre com o número: 6
Somatório: 20
```

### Exercício 6:  
Fazer um programa que pede para o usuário entrar com cinco números, um de cada vez. Use a estrutura de repetição while.
Após finalizar a entrada dos números, o programa deverá imprimir na tela o menor valor fornecido pelo usuário.

**Dica:** será necessário criar uma variável para manter o menor valor e essa variável precisará ser iniciada com um valor muito alto.

**Exemplo de saída:**
```
Entre com o número: 5
Entre com o número: 8
Entre com o número: 2
Entre com o número: 7
Entre com o número: 4
Menor valor: 2
```

### Exercício 7:  
Alterar o programa do Exercício 6 para imprimir na tela o maior valor fornecido pelo usuário.

**Dica:** será necessário criar uma variável para manter o maior valor e essa variável precisará ser iniciada com um valor muito baixo.

**Exemplo de saída:**
```
Entre com o número: 5
Entre com o número: 8
Entre com o número: 2
Entre com o número: 7
Entre com o número: 4
Maior valor: 8
```

### Exercício 8:  
Fazer um programa que pede para o usuário entrar com a senha. O programa deverá repetir a entrada enquanto o usuário não acertar a senha.  
Considere que a senha é abc.

**Exemplo de saída:**
```
Entre com a senha: 123
Senha incorreta
Entre com a senha: teste
Senha incorreta
Entre com a senha: abc
Acesso liberado
```

### Exercício 9:  
Alterar o programa do Exercício 8 para limitar a três tentativas.

**Exemplo de saída:**
```
Entre com a senha: 123
Senha incorreta
Entre com a senha: teste
Senha incorreta
Entre com a senha: xyz
Excedeu o número de tentativas
```

### Exercício 10:  
Fazer um programa que pede para o usuário entrar com números. A entrada de números deve ser interrompida quando a soma atingir o valor 20.

**Dica:** será necessário criar uma variável para acumular o somatório e essa variável terá de ser iniciada com o valor 0.

**Exemplo de saída:**
```
Entre com o número: 4
Entre com o número: 5
Entre com o número: 2
Entre com o número: 5
Entre com o número: 6
Somatório: 23
```
