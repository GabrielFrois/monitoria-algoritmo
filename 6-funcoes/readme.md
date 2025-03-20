# Aula 6 - Funções

## I. Definição de Função
Uma função é um bloco de código que só é executado quando invocado e pode ser reutilizado várias vezes, promovendo modularidade e reutilização.  
É uma boa prática organizar o código em funções.  

**Uma função possui a seguinte notação:**
```javascript
function nomeDaFuncao(parâmetros separados por vírgulas){
  instruções do bloco
  return indica que é para sair da função e retornar um valor
}
```
A instrução `return` é opcional, mas se ela existir é necessário um valor à direita.  

## II. Função sem Parâmetros e sem Retorno
A função `msg` não está recebendo parâmetros e não há retorno.  
Para chamar a função é necessário fornecer o nome da função seguido de um par de parênteses.
```javascript
function msg(){
  console.log("Boa noite")
}

//chamada da função msg:
msg()
```

## III. Função que Recebe um Parâmetro e não tem Retorno
A função `saudacao` está recebendo um parâmetro e não tem retorno.  
Para chamar a função temos de colocar um valor dentro dos parênteses.  
```javascript
function saudacao(nome){
  console.log("Boa noite, nome)
}

//chamada da função
saudacao("Ana")
saudacao("Pedro")
```
**Saída**
```
Boa noite Ana
Boa noite Pedro
```

## IV. Função que Recebe Dois Parâmetros e não tem Retorno
A função `classificacao` está recebendo dois parâmetros e não tem retorno.  
Para chamar a função temos de colocar dois valores dentro dos parênteses separados por vírgula.  
```javascript
function classificacao(nome, idade){
  if(idade < 18){
    console.log(nome, "é de menor")
  }
  else {
    console.log(nome, "é de maior")
  }
}

//chamada da função
classificacao("Ana", 21)
classificacao("Pedro", 17)
```
**Saída**
```
Ana é de maior
Pedro é de menor
```
No exemplo visto a função recebe dois parâmetros, mas uma função pode ser definida para receber qualquer quantidade de parâmetros.  

## V. Função que Recebe Dois Parâmetros e tem Retorno
A função `somar` está recebendo dois parâmetros e retornando a soma deles.  
Para chamar a função temos que colocar dois valores dentro dos parênteses separados por vírgula.  
Como a função possui retorno, então é importante guardarmos o retorno numa variável.  
```javascript
function somar(x, y){
  return x + y
}

//chamada da função
//a variável r receberá o resultado
r = somar(2, 3)
console.log("Resultado:", r)

//chamada da função
//a variável s receberá o resultado
s = somar(8, 1)
console.log("Resultado:", s)
```
**Saída**
```
Resultado: 5
Resultado: 9
```

## VI. Exercícios
### Exercício 1:  
Fazer uma função de nome maior que recebe dois números e retorna o maior deles. Ao lado tem-se dois exemplos de chamadas dessa função.  

**Exemplo de saída:**
```javascript
m = maior (2, 3)
console.log("Maior:", m)

m = maior(5, 2)
console.log("Maior:", m)
```
**Saída**
```
Maior: 3
Maior: 5
```

**[Resolução](exercicios/src/um.js)**

### Exercício 2:  
Fazer uma função de nome primeira que recebe uma string e retorna o 1º caractere dessa string. Ao lado tem-se dois exemplos de chamadas dessa função.  

**Exemplo de saída:**
```javascript
p = primeira("Pedro")
console.log("1a letra:", p)

p = primeira("Mariana")
console.log("1a letra:", p)
```
**Saída**
```
1a letra: P
1a letra: M
```

**[Resolução](exercicios/src/dois.js)**

### Exercício 3:  
Fazer uma função de nome ultima que recebe uma string e retorna o último caractere dessa string. Ao lado tem-se exemplos de chamadas dessa função.  
**Dica:** use a propriedade length da string para obter o número de caracteres da string.  

**Exemplo de saída:**
```javascript
u = ultima("Pedro")
console.log("Última letra:", u)

u = ultima("Mariana")
console.log("Última letra:", u)
```
**Saída**
```
Última letra: o
Última letra: a
```

**[Resolução](exercicios/src/tres.js)**

### Exercício 4:  
Fazer uma função de nome letra que recebe uma string e um número inteiro indicando uma posição na string. A função retornará o caractere que está na posição fornecida como parâmetro. Ao lado tem-se exemplos de chamadas dessa função.  

**Exemplo de saída:**
```javascript
l letra("Pedro", 1)
console.log("2a letra:", l)

l letra("Mariana", 3)
console.log("4a letra:", l)
```
**Saída**
```
2a letra: e
4a letra: i
```

**[Resolução](exercicios/src/quatro.js)**

### Exercício 5:  
Fazer uma função de nome inverte que recebe uma string e retorna ela invertida. Ao lado tem-se exemplos de chamadas dessa função.  
**Dicas:**  
- Use a propriedade length da string para obter o número de caracteres da string;  
- Lembre-se que a última posição da string está uma posição antes da quantidade de caracteres.  
  
**Exemplo de saída:**
```javascript
r = inverte("Pedro")
console.log("Invertido:", r)

r = inverte("Mariana")
console.log("Invertido:", r)
```
**Saída**
```
Invertido: ordeP
Invertido: anairaM
```

**[Resolução](exercicios/src/cinco.js)**

### Exercício 6:  
Fazer uma função de nome somatorio que recebe um array e retorna o somatório dos elementos desse array. Ao lado tem-se exemplos de chamadas dessa função.  
**Dicas:** use a propriedade length do array para obter o número de elementos do array.
  
**Exemplo de saída:**
```javascript
numeros = [8, 3, 4, 7, 5]
s = somatorio(numeros)
console.log("Somatório:", s)

numeros = [5, 4, 3]
s = somatorio(numeros)
console.log("Somatório:", s)
```
**Saída**
```
Somatório: 27
Somatório: 12
```

**[Resolução](exercicios/src/seis.js)**

### Exercício 7:  
Fazer uma função de nome inverter que recebe uma lista e imprime na tela os elementos da lista na ordem inversa. Ao lado tem-se exemplos de chamadas dessa função.  
**Dicas:**
- Use a propriedade length do array para obter o número de elementos do array;  
- Lembre-se que a última posição do array está uma posição antes da quantidade de elementos.  

**Exemplo de saída:**
```javascript
console.log("Lista:")
numeros = [8, 3, 4, 7, 5]
inverter(numeros)

console.log("\nLista:")
numeros = [5, 4, 3]
inverter(numeros)
```
**Saída**
```
Lista:
4 : 5
3 : 7
2 : 4
1 : 3
0 : 8
Lista:
2 : 3
1 : 4
0 : 5
```

**[Resolução](exercicios/src/sete.js)**

### Exercício 8:  
Fazer uma função de nome matriz que recebe uma matriz e retorna o somatório dos elementos. Ao lado tem-se exemplos de chamadas dessa função.  
**Dicas:** use duas estruturas de repetição while, uma para percorrer a 1ª dimensão do array e outro while para percorrer a 2ª dimensão do array.  

**Exemplo de saída:**
```javascript
numeros = [
  [9, 2, 4],
  [6, 5, 7],
  [2, 1, 3]
]

s = matriz(numeros)
console.log("Somatório:", s)

numeros = [
  [5, 8, 3, 4],
  [9, 7, 2]
]

s = matriz(numeros)
console.log("Somatório:", s)
```
**Saída**
```
Somatório: 39
Somatório: 38
```

**[Resolução](exercicios/src/oito.js)**
