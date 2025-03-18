# Aula 5 - Arrays

## I. Tipos de Array
Uma variável pode receber somente um valor por vez, mas um array pode manter um conjunto de valores.  
Um array é representado por um conjunto de valores separados por vírgulas entre um par de colchetes, cada elemento do array pode ser de um tipo de dado distinto.  
```javascript
vetor = ["Boa noite", 20, 2.5, true]
```

Cada elemento de um array possui uma posição e precisamos dessa posição para acessar os elementos do array. 
```javascript
vetor = ["Boa noite", 20, 2.5, true]

console.log("1o:", vetor[0])
console.log("2o:", vetor[1])
console.log("3o:", vetor[2])
console.log("4o:", vetor[3])
```
**Retorno**
```
1o: Boa noite
2o: 20
3o: 2.5
4o: true
```

Os elementos do array podem ser acessados para leitura e escrita.
```javascript
vetor = ["Boa noite", 20, 2.5, true]
vetor[2] = "terceira"

console.log("1o:", vetor[0])
console.log("2o:", vetor[1])
console.log("3o:", vetor[2])
console.log("4o:", vetor[3])
```
**Saída**
```
1o: Boa noite
2o: 20
3o: true
4o: true
```

## II. Array Bidimensional 
Cada elemento do array pode ser de qualquer tipo de dado, inclusive pode ser outro array.
```javascript
matriz = [
  ["um', "dois", "três"],
  ["quatro", "cinco"]
]

console.log("1o:", matriz[0])
console.log("2o:", matriz[1])
```
**Saída**
```
1o: [ 'um', 'dois', 'três' ]
2o: [ 'quatro', 'cinco' ]
```

Para acessar os elementos da lista interna precisaremos de dois índices, um para acessar a posição no 1º nível e outro índice para o 2º nível.
```javascript
matriz = [
  ["um', "dois", "três"],
  ["quatro", "cinco"]
]

console.log("1o-1o:", matriz[0][0])
console.log("1o-2o:", matriz[0][1])
console.log("1o-3o:", matriz[0][2])
console.log("2o-1o:", matriz[1][0])
console.log("2o-2o:", matriz[1][1])
```
**Saída**
```
1o-1o: um
1o-2o: dois
1o-3o: três
2o-1o: quatro
2o-2o: cinco
```

## III. Percorrer os Elementos do Array
Como as posições dos elementos do array começam em zero e são sequenciais, então podemos utilizar uma estrutura de repetição `while` para percorrer os índices das posições.  
```javascript
vetor = ["um", "dois", "três", "quatro", "cinco"]
pos = 0

while(pos < vetor.length){
  console.log(pos, vetor[pos])
  pos = pos + 1
}
```
A propriedade `length` possui a quantidade de elementos do array que está na variável `vetor`.  

Para um array bidimensional, é necessário dois índices:
```javascript
matriz = [
  ["um", "dois", "três"]
  ["quatro", "cinco"]
]

linha = 0
while(linha < matriz.length){
  coluna = 0
  while(coluna < matriz[linha].length){
    console.log("linha:", linha, "coluna:", coluna, ":", matriz[linha][coluna])
    coluna = coluna + 1
  }
  linha = linha + 1
}
```

## IV. Exercícios
### Exercício 1:  
Completar o código a seguir para imprimir na tela o primeiro elemento do array.  
numeros = ["um","dois","três","quatro"]  

**Exemplo de saída:**
```
Primeiro um
```

**[Resolução](exercicios/src/um.js)**

### Exercício 2:  
Completar o código a seguir para imprimir na tela o último elemento do array.  
numeros = ["um","dois","três","quatro"]  

**Exemplo de saída:**
```
Último quatro
```

**[Resolução](exercicios/src/dois.js)**

### Exercício 3:  
Completar o código a seguir para imprimir na tela o os elementos do array na ordem invertida.  
**Dica:** use a estrutura de repetição while.  
numeros = ["um","dois","três","quatro"]  

**Exemplo de saída:**
```
3 quatro
2 três
1 dois
0 um
```

**[Resolução](exercicios/src/três.js)**

### Exercício 4:  
Completar o código a seguir para imprimir na tela o somatório dos elementos do array.  
**Dica:** use a estrutura de repetição while.  
numeros = [8,3,4,7,5]  

**Exemplo de saída:**
```
Somatório 27
```

**[Resolução](exercicios/src/quatro.js)**

### Exercício 5:  
Completar o código a seguir para imprimir na tela os elementos do array que possui valor ímpar.  
**Dica:** use a estrutura de repetição while.  
numeros = [8,3,4,7,5,6,4]  

**Exemplo de saída:**
```
Ímpar 3
Ímpar 7
Ímpar 5
```

**[Resolução](exercicios/src/cinco.js)**

### Exercício 6:  
Completar o código a seguir para imprimir na tela os elementos do array que estão em posições ímpares.  
**Dica:** use a estrutura de repetição while.  
numeros = [8,3,4,7,5,6,4]  

**Exemplo de saída:**
```
1 : 3
3 : 7
5 : 6
```

**[Resolução](exercicios/src/seis.js)**

### Exercício 7:  
Completar o código a seguir para imprimir na tela a multiplicação dos elementos dos arrays pesos e notas.  
**Dica:** use a estrutura de repetição while.  
pesos = [0.4,0.2,0.1,0.3]  
notas = [8.2,5.0,10.0,9.1]  

**Exemplo de saída:**
```
0.4 * 8.2 = 3.28
0.2 * 5 = 1
0.1 * 10 = 1
0.3 * 9.1 = 2.73
```

**[Resolução](exercicios/src/sete.js)**

### Exercício 8:  
Alterar o Exercício 7 para imprimir na tela o somatório das multiplicações.  
**Dica:** use a estrutura de repetição while.  

**Exemplo de saída:**
```
Nota final 8.01
```

**[Resolução](exercicios/src/oito.js)**

### Exercício 9:  
Completar o código a seguir para imprimir na tela os elementos de maior valor em cada posição nos arrays de entradas e saídas.  
**Dica:** use a estrutura de repetição while.  
entradas = [9,2,4,5,8]  
saidas = [3,5,2,7,4]  

**Exemplo de saída:**
```
0 : 9
1 : 5
2 : 4
3 : 7
4 : 8
```

**[Resolução](exercicios/src/nove.js)**

### Exercício 10:  
Completar o código a seguir para imprimir na tela os elementos da diagonal principal da matriz.  
**Dica:** use a estrutura de repetição while.  
matriz = [  
  [9,2,4],  
  [6,5,7],  
  [2,1,3]  
]  

**Exemplo de saída:**
```
9
5
3
```

**[Resolução](exercicios/src/dez.js)**

### Exercício 11:  
Completar o código a seguir para imprimir na tela o somatório dos elementos da matriz.  
**Dica:** use a estrutura de repetição while.  
matriz = [  
  [9,2,4],  
  [6,5,7],  
  [2,1,3]  
]  

**Exemplo de saída:**
```
Somatório: 39
```

**[Resolução](exercicios/src/onze.js)**
