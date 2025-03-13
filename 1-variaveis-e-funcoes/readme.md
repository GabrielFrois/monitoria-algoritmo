# Aula 1 - Variáveis e Uso de Funções

## I. Linguagem de Programação
Linguagens de programação são essenciais para o desenvolvimento de programas, aplicativos e sites. Cada linguagem possui características próprias. As principais são:

- **JavaScript**: Utilizada para desenvolvimento de aplicações web (front e back-end) e mobile. É a mais popular e suportada por todos os navegadores.
- **Python**: Fácil de aprender, muito usada em ciência de dados, inteligência artificial e computação científica.
- **Java**: Robustez para desenvolvimento de grandes aplicações web e desktop.

Programas são sequências de instruções (código-fonte) que são convertidas para uma linguagem de máquina através de compilação ou interpretação.

## II. Ambiente de Desenvolvimento Integrado (IDE)
IDE (Integrated Development Environment) é o ambiente usado para escrever, testar e depurar código. Ele integra ferramentas como editores de texto, compiladores e interpretadores. Exemplos de IDEs:

- **Replit**: IDE online para várias linguagens, incluindo JavaScript.
- **Visual Studio Code (VS Code)**: IDE popular para desenvolvedores web e mobile, que necessita do **Node.js** para executar código JavaScript.

## III. Projeto JavaScript
Para criar um projeto JavaScript:

1. Crie uma pasta (exemplo: `exemplo`) em seu computador.
2. Abra o **Prompt de Comando** (CMD) ou **Terminal** do VS Code na pasta.
3. Utilize o comando `code .` para abrir o VS Code.
4. No VS Code, crie um arquivo `index.js` para o código JavaScript.

O uso de **Node.js** é necessário para rodar o código JavaScript em projetos. O comando `npm init` cria o arquivo de configuração **package.json**.

## IV. Principais Tipos de Dados
- **String**: Representa texto, entre aspas (`"texto"`, `'exemplo'`).
- **Number**: Representa números inteiros e reais (`12`, `-8`, `3.14`).
- **Boolean**: Representa valores **verdadeiro** ou **falso** (`true`, `false`).

Os tipos de dados são essenciais para otimizar o uso da memória em programação.

## V. Estrutura de uma Função
Uma função é usada para executar um conjunto de instruções. Exemplo de funções comuns em JavaScript:

- `console.log()`: Exibe um valor no console.
- `prompt()`: Solicita uma entrada do usuário.
- `parseInt()`: Converte uma string para um número inteiro.

As funções podem receber parâmetros que são passados dentro dos parênteses. Por exemplo:
- `console.log("Olá")` imprime "Olá".
- `parseInt("10")` converte a string `"10"` para o número inteiro `10`.

## VI. Variável
Variáveis são espaços na memória que armazenam valores. Cada variável tem:
- **Nome**: Identificador do espaço de memória.
- **Conteúdo**: O valor armazenado.
- **Tipo de dado**: O tipo do valor (string, number, boolean).

Exemplo de declaração de variáveis:
- `nome = "João"`: string
- `idade = 25`: number
- `ativo = true`: boolean

Variáveis são usadas para armazenar dados durante a execução do programa, permitindo manipulação dos valores.

**Diferença entre `var`, `let` e `const`**  

No JavaScript, `var`, `let` e `const` são usadas para declarar variáveis, mas possuem diferenças importantes:  

- **`var`** → Tem **escopo de função**, pode ser **redeclarada** e **reatribuída**, mas **não respeita escopo de bloco**, podendo causar erros. **(Evitar uso)**.  
- **`let`** → Tem **escopo de bloco**, **não pode ser redeclarada**, mas **pode ser reatribuída**. É ideal para variáveis mutáveis.  
- **`const`** → Tem **escopo de bloco**, **não pode ser redeclarada** nem **reatribuída**, e deve ser inicializada na declaração. Ideal para valores fixos.  

```javascript
// var: escopo de função, pode ser redeclarada
var nome = "Gabriel";
var nome = "João"; // ✅ Permitido

// let: escopo de bloco, pode ser reatribuída
let idade = 25;
idade = 26; // ✅ Permitido
// let idade = 30; ❌ Erro: não pode ser redeclarada

// const: escopo de bloco, não pode ser reatribuída
const PI = 3.1415;
// PI = 3.14; ❌ Erro: constante não pode ser alterada
```

## VII. Comentários
Comentários são usados para documentar o código e são ignorados pelo interpretador JavaScript. Existem dois tipos de comentários:

- **Comentário de uma linha**: `// Comentário`
- **Comentário de múltiplas linhas**: `/* Comentário */`

Comentários ajudam os programadores a entenderem o código, sem afetar a execução do programa.

## VIII. Exercícios 
Veja o vídeo se tiver dúvidas nos exercícios: https://youtu.be/ch_KohZ9Ql0

Para fazer os exercícios 1 a 6 crie um projeto de nome aula1 no VS Code assim como é mostrado a seguir. Cada programa deverá estar num arquivo separado da pasta src. Crie uma propriedade para cada exercício na propriedade scripts do arquivo package.json. Para rodar o arquivo use: npm run propriedade, onde propriedade será um, dois, tres (sem acento), quatro, cinco ou seis.

Um programa se caracteriza por entrada de dados, processamento (transformação de dados) e saída de dados.  

- Nos exercícios 1 a 3 trabalharemos apenas a saída de dados.  
- Nos exercícios 4 a 6 trabalharemos com declaração de variáveis e saída de dados.  
- Nos exercícios 7 a 11 trabalharemos com declaração de variáveis, entrada de dados e saída de dados.
- **Observação**: utilize o ambiente https://replit.com para fazer os programas que requerem entrada do usuário.

## Exercício 1:
Fazer um programa que imprime no console o texto Boa noite!.

**Dica**: use a função console.log.

**[Resolução](exercicios/src/um.js)**

## Exercício 2:
Fazer um programa que imprime no console o número inteiro 100.

**Dica**: use a função console.log.

**[Resolução](exercicios/src/dois.js)**

## Exercício 3:
Fazer um programa que imprime no console o valor booleano true.

**Dica**: use a função console.log.

**[Resolução](exercicios/src/tres.js)**

## Exercício 4:
Fazer um programa com as variáveis x e y. A variável x deverá ser iniciada com o valor 10 e variável y com o valor 20. Na sequência o seu programa deverá imprimir no console o resultado da soma das variáveis x e y.

**Dica**: use a função console.log para imprimir o resultado.

**[Resolução](exercicios/src/quatro.js)**

## Exercício 5:
Fazer um programa com as variáveis nome e sobrenome. A variável nome deverá ser iniciada com o seu 1º nome e variável sobrenome com o seu último sobrenome. Na sequência o seu programa deverá imprimir no console o resultado da soma dos conteúdos das variáveis nome e sobrenome.

**Dica**: use a função console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
GabrielFrois
```

**[Resolução](exercicios/src/cinco.js)**

## Exercício 6:
Fazer um programa com as variáveis nome e idade. A variável nome deverá ser iniciada com o seu 1º nome e variável idade com a sua idade. Na sequência o seu programa deverá imprimir no console o resultado da soma das variáveis nome e idade. Lembre-se que o nome é string e idade é number.

**Dica**: use a função console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
Gabriel23
```

**[Resolução](exercicios/src/seis.js)**

## Exercício 7:
Fazer um programa que pede para o usuário entrar com o seu 1º nome e na sequência o programa imprime no console o nome fornecido pelo usuário.

**Dica**: use a função prompt para ler o teclado e console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
Entre com o seu nome: Gabriel  
Gabriel
```

**[Resolução](exercicios/src/sete.js)**

## Exercício 8:
Fazer um programa que pede para o usuário entrar com a idade e na sequência o programa imprime o dobro da idade fornecida pelo usuário.

**Dica**: use a função prompt para ler o teclado, a função parseInt para converter de string para number, e a função console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
Entre com a sua idade: 23  
46
```

**[Resolução](exercicios/src/oito.js)**

## Exercício 9:
Fazer um programa que pede para o usuário entrar com o peso e na sequência o programa imprime a metade do peso fornecido pelo usuário.

**Dica**: use a função prompt para ler o teclado, a função parseFloat para converter de string para number, e a função console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
Entre com o seu peso: 60  
30
```

**[Resolução](exercicios/src/nove.js)**

## Exercício 10:
O IMC (Índice de Massa Corporal) é calculado usando peso/(altura*altura). Fazer um programa que pede para o usuário entrar com o peso (em Kg) e altura (em metros) e na sequência o programa imprime no console o IMC.

**Dica**: use a função prompt para ler o teclado, a função parseFloat para converter de string para number, e a função console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
Entre com o peso (Kg): 71.5  
Entre com a altura (m): 1.72  
24.168469442942133
```

**[Resolução](exercicios/src/dez.js)**

## Exercício 11:
Fazer um programa que pede para o usuário entrar com três números reais. Sendo um número de cada vez. Após fornecer os três números o programa deve imprimir na tela o valor médio.

**Dica**: use a função prompt para ler o teclado, a função parseFloat para converter de string para number, e a função console.log para imprimir o resultado.

**Exemplo de Saída**:  
```
Entre com o 1o número: 8.5  
Entre com o 2o número: 1.5  
Entre com o 3o número: 6.5  
5.5
```

**[Resolução](exercicios/src/onze.js)**
