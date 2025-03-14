# Aula 2 - Operadores e Estruturas de Decisão

## I. Operadores Aritméticos  
Os operadores aritméticos no JavaScript são semelhantes aos da matemática.  

### Operadores básicos:  
- `+` (adição): `5 + 3` → `8`  
- `-` (subtração): `10 - 4` → `6`  
- `*` (multiplicação): `7 * 2` → `14`  
- `/` (divisão): `9 / 3` → `3`  

### Operadores especiais:  
- `%` (módulo - resto da divisão): `11 % 3` → `2`  
- `**` (exponenciação - potência): `2 ** 3` → `8`  

### Notação condensada:  
Os operadores podem ser usados de forma reduzida para modificar variáveis diretamente:  

```javascript
let nro = 10;
nro += 2; // Equivalente a nro = nro + 2
nro -= 1; // Equivalente a nro = nro - 1
nro *= 4; // Equivalente a nro = nro * 4
nro /= 4; // Equivalente a nro = nro / 4
nro %= 3; // Equivalente a nro = nro % 3
nro **= 3; // Equivalente a nro = nro ** 3
```

### Incremento e Decremento:
- n++ → Soma 1 ao valor da variável (n = n + 1)  
- n-- → Subtrai 1 do valor da variável (n = n - 1)  

## II. Operadores de Comparação
Os operadores de comparação sempre retornam true ou false.  

```javascript
let a = 5, b = 10;

console.log(a == b); // false (valores diferentes)
console.log(a != b); // true (valores diferentes)
console.log(a < b);  // true (5 é menor que 10)
console.log(a <= b); // true (5 é menor ou igual a 10)
console.log(a > b);  // false (5 não é maior que 10)
console.log(a >= b); // false (5 não é maior ou igual a 10)
```
**Atenção:** Em JavaScript, não podemos confundir == (comparação de valores) com === (comparação de valores e tipos).  

```javascript
console.log(5 == "5");  // true (compara apenas valores)
console.log(5 === "5"); // false (valores iguais, mas tipos diferentes)
console.log(5 !== "5"); // true (tipos diferentes)
```
## III. Operadores Lógicos
Os operadores lógicos permitem combinações de expressões booleanas:  

- `&&` (E lógico) → true se todas as expressões forem verdadeiras.
- `||` (OU lógico) → true se pelo menos uma expressão for verdadeira.
- `!` (NÃO lógico) → Inverte o valor booleano.

```javascript
let idade = 20;
let possuiCNH = true;

console.log(idade >= 18 && possuiCNH); // true (maior de idade e tem CNH)
console.log(idade >= 18 || possuiCNH); // true (pelo menos uma condição é verdadeira)
console.log(!(idade >= 18)); // false (inverte o valor lógico)
```

## IV. Estruturas de Decisão
As estruturas de decisão controlam o fluxo de um programa com base em condições.  

### Condicional `if...else`
Executa um bloco de código se a condição for verdadeira.  
```javascript
let temperatura = 30;

if (temperatura > 25) {
    console.log("Está quente!");
} else {
    console.log("Está agradável.");
}
```

### Condicional `if...else if...else`
Permite avaliar múltiplas condições.  
```javascript
let nota = 85;

if (nota >= 90) {
    console.log("Aprovado com excelência!");
} else if (nota >= 70) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
}
```

### Operador Ternário
Uma forma reduzida de escrever um `if...else`.  
```javascript
let idade2 = 20;
let status = idade2 >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);
```

## V. Estrutura Condicional `switch`
Útil para testar um valor contra múltiplas possibilidades.  
```javascript
let dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
}
```

## VI. Exercícios
Para fazer os exercícios recomenda-se o uso da interface de programação online https://replit.com/ por eles requerem entrada do usuário.

- Nos exercícios 1 e 2 trabalharemos o operador de módulo (resto da divisão).
- Nos exercícios 3 a 6 trabalharemos a estrutura de decisão if - else.
- Nos exercícios 7 a 9 trabalharemos a estrutura de decisão aninhada.
- No exercício 10 trabalharemos a estrutura condicional switch.

### Exercício 1: 
Fazer um programa que pede para o usuário entrar com um número inteiro e na sequência o programa imprime o resto da divisão desse número por 2.  

**Dica:** use a função prompt para ler o teclado, a função parseInt para converter de string para inteiro, e a função console.log para imprimir o resultado.

**Exemplo de Saída:**  
```
Entre com um número inteiro:> 11
Resto: 1
```

**[Resolução](exercicios/src/um.js)**

### Exercício 2: 
Fazer um programa que pede para o usuário entrar com dois números inteiros, um de cada vez, e na sequência o programa imprime o resto da divisão do primeiro número pelo segundo.  

**Dica:** use a função prompt para ler o teclado, a função parseInt para converter de string para inteiro, e a função console.log para imprimir o resultado.

**Exemplo de Saída:**
```
Entre com um número inteiro: 12
Entre com um número inteiro: 5
Resto: 2
```

**[Resolução](exercicios/src/dois.js)**

### Exercício 3: 
Fazer um programa que pede para o usuário entrar um número inteiro e na sequência o programa imprime na tela se o número é par ou ímpar.  

**Dica:** um número é par se o resto da divisão dele por 2 é zero.

**Exemplo de Saída:**
```
Entre com um número inteiro: 11
11 é ímpar
Fim do Programa
```

**[Resolução](exercicios/src/tres.js)**

### Exercício 4: 
Fazer um programa que pede para o usuário entrar com dois números inteiros, um de cada vez, e na sequência o programa imprime na tela se o 1º número é múltiplo do 2º número.  

**Dica:** um número é múltiplo do outro se o resto da divisão deles é zero.

**Exemplo de Saída:**
```
Entre com um número inteiro: 12
Entre com um número inteiro: 5
12 não é múltiplo de 5
Fim do Programa
```

**[Resolução](exercicios/src/quatro.js)**

### Exercício 5: 
Fazer um programa que pede para o usuário entrar com dois números inteiros, um de cada vez, e na sequência o programa imprime na tela o maior valor.

**Exemplo de Saída:**
```
Entre com um número inteiro: 2
Entre com um número inteiro: 5
2 é menor que 5
Fim do Programa
```

**[Resolução](exercicios/src/cinco.js)**

### Exercício 6: 
Fazer um programa que pede para o usuário entrar com a idade dele e, na sequência, o programa indica se ele é de menor ou adulto.

**Exemplo de Saída:**
```
Entre com a idade: 15
De menor
Fim do Programa
```

**[Resolução](exercicios/src/seis.js)**

### Exercício 7: 
Fazer um programa que pede para o usuário entrar com três números, um de cada vez, e na sequência o programa imprime o maior valor fornecido pelo usuário.

**Exemplo de Saída:**
```
Entre com um número: 1
Entre com um número: 3
Entre com um número: 2
Maior: 3
Fim do Programa
```

**[Resolução](exercicios/src/sete.js)**

### Exercício 8: 
Fazer um programa que pede para o usuário fornecer a temperatura corporal e, na sequência, o programa imprime a classificação da temperatura de acordo com a tabela a seguir.

**Temperatura do Corpo Humano**
| Temperatura    | Condição    |
|----------------|-------------|
| 41° ou mais    | Hipertemia  |
| 39.6° - 41°    | Febre Alta  |
| 37.8° - 39.5°  | Febre       |
| 35.1° - 37.7°  | Normal      |
| 35° ou menos   | Hipotermia  |

**Exemplo de Saída:**
```
Entre com a temperatura corporal: 37.2
Normal
Fim do Programa
```

**[Resolução](exercicios/src/oito.js)**

### Exercício 9: 
O IMC (Índice de Massa Corporal) é calculado usando peso/(altura*altura). Fazer um programa que pede para o usuário entrar com o peso (em Kg) e altura (em metros) e, na sequência, o programa imprime na tela a classificação do IMC de acordo com a classificação a seguir.

| IMC    | Classificação    |
|----------------|-------------|
| Abaixo de 18,5  | Abaixo do peso  |
| Entre 18,6 e 24,9  | Peso ideal  |
| Entre 25,0 e 29,9  | Levemente acima do peso  |
| Entre 30,0 e 34,9  | Obesidade grau I  |
| Entre 35,0 e 39,9  | Obesidade grau II  |
| Acima de 40  | Obesidade III  |

**Exemplo de Saída:**
```
Entre com o peso (Kg): 71.5
Entre com a altura (m): 1.7
Peso ideal
Fim do Programa
```

**[Resolução](exercicios/src/nove.js)**

### Exercício 10: 
Fazer um programa que pede para o usuário fornecer o nome da fruta (todas as letras minúsculas) e, na sequência, o programa informa o valor do suco de acordo com a tabela a seguir.
O programa deverá exibir “Não temos esse suco”, caso o usuário forneça um nome de fruta inexistente na tabela.

| Sucos    | Preços    |
|----------------|-------------|
| Laranja  | R$3,50  |
| Limão  | R$3,00  |
| Acerola  | R$3,50  |
| Manga  | R$4,00  |
| Melancia  | R$4,00  |
| Morango  | R$5,00  |
| Maracujá  | R$4,50  |
| Açai  | R$6,00  |

**Exemplo de Saída:**
```
Entre com o nome da fruta: manga
R$4,00
Fim do Programa
```
**Outro Exemplo:**
```
Entre com o nome da fruta: abacaxi
Não temos esse suco
Fim do Programa
```

**[Resolução](exercicios/src/dez.js)**
