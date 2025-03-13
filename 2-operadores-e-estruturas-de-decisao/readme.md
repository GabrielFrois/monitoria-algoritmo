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
Veja o vídeo se tiver dúvidas nos exercícios: https://youtu.be/62e9bLE59WM

Para fazer os exercícios recomenda-se o uso da interface de programação online https://replit.com/ por eles requerem entrada do usuário.

- Nos exercícios 1 e 2 trabalharemos o operador de módulo (resto da divisão).
- Nos exercícios 3 a 6 trabalharemos a estrutura de decisão if - else.
- Nos exercícios 7 a 9 trabalharemos a estrutura de decisão aninhada.
- No exercício 10 trabalharemos a estrutura condicional switch.

Exercício 1: Fazer um programa que pede para o usuário entrar com um número inteiro e na sequência o programa imprime o resto da divisão desse número por 2.
**Dica:** use a função prompt para ler o teclado, a função parseInt para converter de string para inteiro, e a função console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
Entre com um número inteiro:> 11
Resto: 1
```
