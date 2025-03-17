# Aula 4 - Manipulação de String

## I. Tipo de Dado String
Uma **string** é um conjunto de caracteres delimitado por aspas simples (`'`) ou duplas (`"`).  

### Exemplos de strings:  
- `""` → string vazia (zero caracteres)  
- `"a"` → string com um caractere  
- `"12"` → string com dois caracteres  
- `"$-12.5"` → string contendo caracteres diversos  

Strings podem conter números, símbolos e pontuação, mas sempre precisam estar envolvidas por aspas.  

### Erros comuns ao definir strings:  
Os pares de aspas devem ser consistentes. Exemplos de erros:  
- `"oi'` → Abre com aspas duplas e fecha com aspas simples  
- `'oi"` → Abre com aspas simples e fecha com aspas duplas  
- `oi'` → Falta a aspas de abertura  
- `"oi` → Falta a aspas de fechamento  

### Strings como Objetos  
No JavaScript, strings são do tipo **objeto**, o que significa que possuem **métodos** e **propriedades**.  

Os métodos e propriedades de uma string podem ser acessados com um ponto (`.`) após a variável que armazena a string.  

### Exemplo:
No código abaixo é mostrado como usar métodos e propriedades da string que está na variável `nome`:
```javascript
nome = "ANA maria da silva"

//O método toUpperCase retorna todos os caracteres maiúsculos
maiuscula = nome.toUpperCase()

//O método toLowerCase retorna todos os caracteres minúsculos
minuscula = nome.toLowerCase()

console.log("Nome:", nome)
console.log("Maiúscula:", maiuscula)
console.log("Minúscula:", minuscula)

//A propriedade length possui a quantidade de caracteres da string
console.log("Quantidade:", nome.length)
```
**Saída:**
```
Nome: ANA maria da silva
Maiúscula: ANA MARIA DA SILVA
Minúscula: ana maria da silva
Quantidade: 18
```

Um método é como uma função, mas ele está associado a string. Os métodos não alteram a própria string, no
exemplo anterior o conteúdo da variável nome não foi alterado, ou seja, o método toUpperCase criou outra string
e retornou ela para ser atribuída na variável maiuscula.  

## II. Acessar os Caracteres da String
A string é formada por um conjunto de caracteres. Cada caractere possui uma posição na string, o 1º caractere sendo a posição 0.

Para acessar os caracteres de uma string precisamos colocar o índice de posição entre colchetes:
```javascript
nome = "Ana Souza"
console.log("1o", nome[0])
console.log("2o", nome[1])
console.log("3o", nome[2])
console.log("4o", nome[3])
console.log("5o", nome[4])
console.log("6o", nome[5])
console.log("7o", nome[6])
console.log("8o", nome[7])
console.log("9o", nome[8])
```
**Saída**
```
1o A
2o n
3o a
4o 
5o S
6o o
7o u
8o z
9o a
```

Apesar da string ter 9 caracteres, o último caracter está na posição 8 pelo fato do 1º caractere estar na posição 0.

## III. Percorrer os Caracteres da String

Cada caractere da string pode ser acessado individualmente através de um índice de posição, então, utilizando uma estrutura de repetição`while` para iterar sobre os caracteres da string.  
No exemplo abaixo a variável pos assume os índices de 0 a 8. Desta forma teremos nome[0], nome[1], ..., nome[8].
```javascript
nome = "Ana Souza"
pos = o
while(pos < nome.length){
  console.log(nome[pos])
  pos = pos + 1
}
```
**Saída**
```
A
n
a

S
o
u
z
a
```

## Exercícios

### Exercício 1:  
Fazer um programa que pede para o usuário entrar com um nome e, na sequência, o programa imprime na tela a quantidade de caracteres do nome.  

**Dica:** use a propriedade length da string.

**Exemplo de saída:**
```
Entre com o nome: Ana Maria
Quantidade: 9
```

**[Resolução](exercicios/src/um.js)**

### Exercício 2:  
Fazer um programa que pede para o usuário entrar com um nome e, na sequência, o programa imprime na tela o 1º caractere desse nome.  

**Dica**: use os colchetes com a posição do caractere. Lembre-se que o 1o caractere está na posição zero.

**Exemplo de saída:**
```
Entre com o nome: Pedro Augusto
Primeiro: P
```

**[Resolução](exercicios/src/dois.js)**

### Exercício 3:  
Fazer um programa que pede para o usuário entrar com um nome e, na sequência, o programa imprime na tela o último caractere desse nome.  

**Dica:** use a propriedade length para obter a quantidade de caracteres.

**Exemplo de saída:**
```
Entre com o nome: Wesley
Último: y
```

**[Resolução](exercicios/src/tres.js)**

### Exercício 4: 
Fazer um programa que pede para o usuário entrar com um nome e, na sequência, o programa imprime na tela os caracteres na ordem invertida.  

**Dica:** use a estrutura de repetição while.

**Exemplo de saída:**
```
Entre com o nome: Bruna
a
n
u
r
B
```

**[Resolução](exercicios/src/quatro.js)**

### Exercício 5:  
Fazer um programa que pede para o usuário entrar com um nome e, na sequência, o programa imprime na tela os caracteres que estão em posições pares.  

**Dica:** use a estrutura de repetição while.

**Exemplo de saída:**
```
Entre com o nome: Lucas Moura
L
c
s
M
u
a
```

**[Resolução](exercicios/src/cinco.js)**
