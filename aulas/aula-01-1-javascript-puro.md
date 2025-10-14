# 🧮 Aula 1.1: JavaScript Puro - Gerador de Tabuada

## 📖 O que vamos aprender
- **JavaScript Puro**: Sintaxe básica e conceitos fundamentais
- **Console**: Usar console.log para exibir resultados
- **Variáveis**: Armazenar e manipular dados
- **Funções**: Organizar código reutilizável
- **Loops**: Repetir ações com for
- **Módulos**: Importar bibliotecas com require()
- **Input**: Receber dados do usuário
- **Validação**: Verificar se a entrada é válida
- **Loops de controle**: Repetir até condição ser atendida

## 🎯 O que vamos criar
Um **Gerador de Tabuada** que:
- Calcula e exibe a tabuada de qualquer número
- Valida a entrada do usuário (apenas números de 1 a 10)
- Repete até receber uma entrada válida
- Mostra o resultado formatado no console

## 🎮 Conceitos de Programação que Vamos Aplicar
- **Cálculos**: Operações matemáticas básicas
- **Estruturas de controle**: if, for, while
- **Validação de dados**: Verificar entrada do usuário
- **Loops**: Repetir operações
- **Funções**: Organizar código
- **Console**: Interface de saída

## 🛠️ Preparação do Ambiente

### **Passo 1: Criar a Estrutura do Projeto**
1. **Criar pasta**: `tabuada-generator`
2. **Arquivo principal**: `tabuada.js`
3. **Executar**: `node tabuada.js`

### **Passo 2: Verificar se o Node.js está funcionando**
1. **Abrir o terminal**
2. **Testar**: `node --version`
3. **Verificar**: Versão do Node.js aparece

## 📝 Passo a Passo

### **Passo 1: Tabuada Hardcoded (2 x 1 até 2 x 10)**

**🎯 O que vamos fazer:**
Criar a tabuada do 2 usando console.log com cálculos hardcoded (valores fixos).

**📚 Conceito Detalhado: Console.log**
- **console.log()**: Função para exibir informações no terminal
- **String**: Texto entre aspas
- **Operações matemáticas**: +, -, *, /
- **Concatenação**: Juntar texto com números

**🎯 JavaScript Básico:**
```javascript
// Tabuada do 2 - hardcoded com cores
console.log("\x1b[36m2 x 1 = 2\x1b[0m");
console.log("\x1b[32m2 x 2 = 4\x1b[0m");
console.log("\x1b[33m2 x 3 = 6\x1b[0m");
console.log("\x1b[34m2 x 4 = 8\x1b[0m");
console.log("\x1b[35m2 x 5 = 10\x1b[0m");
console.log("\x1b[31m2 x 6 = 12\x1b[0m");
console.log("\x1b[36m2 x 7 = 14\x1b[0m");
console.log("\x1b[32m2 x 8 = 16\x1b[0m");
console.log("\x1b[33m2 x 9 = 18\x1b[0m");
console.log("\x1b[34m2 x 10 = 20\x1b[0m");
```

**📚 Explicação do Código:**
- **`console.log()`**: Exibe texto no terminal
- **`"2 x 1 = 2"`**: String (texto) entre aspas
- **Cada linha**: Uma operação da tabuada
- **Resultado**: Números calculados manualmente

**📚 Conceito Detalhado: Cores ANSI**
- **`\x1b[36m`**: Código para cor ciano (azul claro)
- **`\x1b[32m`**: Código para cor verde
- **`\x1b[33m`**: Código para cor amarela
- **`\x1b[34m`**: Código para cor azul
- **`\x1b[35m`**: Código para cor magenta (roxo)
- **`\x1b[31m`**: Código para cor vermelha
- **`\x1b[0m`**: Código para resetar cor (voltar ao normal)
- **Por que usar**: Deixa a tabuada mais visual e atrativa

**🎯 Como executar:**
1. **Salvar como**: `tabuada.js`
2. **Executar**: `node tabuada.js`
3. **Ver resultado**: Tabuada aparece no terminal

### **Passo 2: Usar Variável para Trocar o Número**

**🎯 O que vamos fazer:**
Substituir o número fixo (2) por uma variável para poder trocar facilmente.

**📚 Conceito Detalhado: Variáveis**
- **Variáveis**: `let` para armazenar dados que podem mudar
- **const**: Para valores que não mudam
- **Atribuição**: `=` para dar valor à variável
- **Reutilização**: Usar a variável em vários lugares

**🎯 JavaScript com Variável:**
```javascript
// Usar variável para o número
let number = 2;

console.log("\x1b[36m" + number + " x 1 = " + (number * 1) + "\x1b[0m");
console.log("\x1b[32m" + number + " x 2 = " + (number * 2) + "\x1b[0m");
console.log("\x1b[33m" + number + " x 3 = " + (number * 3) + "\x1b[0m");
console.log("\x1b[34m" + number + " x 4 = " + (number * 4) + "\x1b[0m");
console.log("\x1b[35m" + number + " x 5 = " + (number * 5) + "\x1b[0m");
console.log("\x1b[31m" + number + " x 6 = " + (number * 6) + "\x1b[0m");
console.log("\x1b[36m" + number + " x 7 = " + (number * 7) + "\x1b[0m");
console.log("\x1b[32m" + number + " x 8 = " + (number * 8) + "\x1b[0m");
console.log("\x1b[33m" + number + " x 9 = " + (number * 9) + "\x1b[0m");
console.log("\x1b[34m" + number + " x 10 = " + (number * 10) + "\x1b[0m");
```

**📚 Explicação do Código:**
- **`let number = 2`**: Cria variável com valor 2
- **`number + " x 1 = "`**: Concatena variável com texto
- **`(number * 1)`**: Calcula o resultado
- **Para trocar**: Mude apenas `let number = 3`

**🎯 Vantagens:**
- **Flexibilidade**: Trocar número em um lugar só
- **Reutilização**: Variável usada várias vezes
- **Manutenção**: Mais fácil de modificar

### **Passo 3: Criar Função para Calcular a Tabuada**

**🎯 O que vamos fazer:**
Criar uma função que recebe um número e calcula sua tabuada.

**📚 Conceito Detalhado: Funções**
- **function**: Palavra-chave para criar funções
- **Parâmetros**: Dados que a função recebe
- **return**: Valor que a função retorna
- **Reutilização**: Usar a função várias vezes

**🎯 JavaScript com Função:**
```javascript
// Função para calcular tabuada
function calculateMultiplicationTable(number) {
    console.log("\x1b[1m\x1b[37m=== Tabuada do " + number + " ===\x1b[0m");
    console.log("\x1b[36m" + number + " x 1 = " + (number * 1) + "\x1b[0m");
    console.log("\x1b[32m" + number + " x 2 = " + (number * 2) + "\x1b[0m");
    console.log("\x1b[33m" + number + " x 3 = " + (number * 3) + "\x1b[0m");
    console.log("\x1b[34m" + number + " x 4 = " + (number * 4) + "\x1b[0m");
    console.log("\x1b[35m" + number + " x 5 = " + (number * 5) + "\x1b[0m");
    console.log("\x1b[31m" + number + " x 6 = " + (number * 6) + "\x1b[0m");
    console.log("\x1b[36m" + number + " x 7 = " + (number * 7) + "\x1b[0m");
    console.log("\x1b[32m" + number + " x 8 = " + (number * 8) + "\x1b[0m");
    console.log("\x1b[33m" + number + " x 9 = " + (number * 9) + "\x1b[0m");
    console.log("\x1b[34m" + number + " x 10 = " + (number * 10) + "\x1b[0m");
    console.log("\x1b[1m\x1b[37m========================\x1b[0m");
}

// Usar a função
calculateMultiplicationTable(2);
calculateMultiplicationTable(3);
calculateMultiplicationTable(5);
```

**📚 Explicação do Código:**
- **`function calculateMultiplicationTable(number)`**: Cria função com parâmetro
- **`number`**: Parâmetro que recebe o valor
- **`calculateMultiplicationTable(2)`**: Chama função com valor 2
- **Reutilização**: Mesma função para diferentes números

**🎯 Vantagens:**
- **Organização**: Código mais limpo
- **Reutilização**: Uma função para vários números
- **Manutenção**: Modificar em um lugar só

### **Passo 4: Usar Loop For para Imprimir a Tabuada**

**🎯 O que vamos fazer:**
Substituir os console.log repetidos por um loop for que repete a operação.

**📚 Conceito Detalhado: Loops For**
- **for**: Palavra-chave para criar loops
- **i**: Variável contadora (começa em 1)
- **i <= 10**: Condição para continuar o loop
- **i++**: Incrementar a variável (i = i + 1)

**🎯 JavaScript com Loop:**
```javascript
// Função para imprimir uma linha da tabuada
function printMultiplicationLine(number, multiplier, result) {
    const numberColor = "\x1b[36m";      // Ciano para o número
    const multiplierColor = "\x1b[32m";  // Verde para o multiplicador
    const resultColor = "\x1b[33m";      // Amarelo para o resultado
    const resetColor = "\x1b[0m";        // Reset para voltar ao normal
    
    console.log(numberColor + number + resetColor + " x " + multiplierColor + multiplier + resetColor + " = " + resultColor + result + resetColor);
}

// Função com loop for
function calculateMultiplicationTable(number) {
    console.log("\x1b[1m\x1b[37m=== Tabuada do " + number + " ===\x1b[0m");
    
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        printMultiplicationLine(number, i, result);
    }
    
    console.log("\x1b[1m\x1b[37m========================\x1b[0m");
}

// Usar a função
calculateMultiplicationTable(2);
calculateMultiplicationTable(3);
calculateMultiplicationTable(5);
```

**📚 Explicação do Loop:**
- **`let i = 1`**: Inicia contador em 1
- **`i <= 10`**: Continua enquanto i for menor ou igual a 10
- **`i++`**: Aumenta i em 1 a cada repetição
- **`const result = number * i`**: Calcula o resultado

**📚 Explicação da Função printMultiplicationLine:**
- **`function printMultiplicationLine(number, multiplier, result)`**: Função para imprimir uma linha
- **`number`**: Número da tabuada (ex: 2)
- **`multiplier`**: Multiplicador (ex: 1, 2, 3...)
- **`result`**: Resultado da multiplicação (ex: 2, 4, 6...)
- **`numberColor = "\x1b[36m"`**: Ciano para o número da tabuada
- **`multiplierColor = "\x1b[32m"`**: Verde para o multiplicador
- **`resultColor = "\x1b[33m"`**: Amarelo para o resultado
- **`resetColor = "\x1b[0m"`**: Reset para voltar ao normal
- **Cores específicas**: Cada parte tem sua cor fixa

**📚 Explicação das Cores no Loop:**
- **`const result = number * i`**: Calcula resultado antes de imprimir
- **`printMultiplicationLine(number, i, result)`**: Chama função para imprimir linha
- **Separação de responsabilidades**: Cálculo e impressão em funções diferentes
- **Cores consistentes**: Número sempre ciano, multiplicador sempre verde, resultado sempre amarelo

**🎯 Vantagens:**
- **Menos código**: Uma linha em vez de 10
- **Flexibilidade**: Fácil de mudar o limite
- **Eficiência**: Código mais limpo
- **Reutilização**: Função `printMultiplicationLine` pode ser usada em outros lugares
- **Organização**: Separação entre cálculo e impressão
- **Manutenção**: Mais fácil de modificar a formatação das linhas

### **Passo 5: Permitir Input do Usuário**

**🎯 O que vamos fazer:**
Permitir que o usuário digite o número para calcular a tabuada.

**📚 Conceito Detalhado: Input do Usuário**
- **readline**: Módulo do Node.js para input
- **createInterface**: Criar interface de leitura
- **question**: Método para fazer pergunta ao usuário
- **callback**: Função executada após resposta

**📚 Conceito Detalhado: Módulos e require()**
- **Módulo**: Biblioteca de código que já existe no Node.js
- **require()**: Função do Node.js para importar módulos
- **Sintaxe**: `const nome = require('nome-do-modulo')`
- **Módulos nativos**: Já vêm instalados com o Node.js (como readline)
- **Por que usar**: JavaScript puro não tem input nativo, precisa de módulos
- **Exemplo**: `const readline = require('readline')` importa o módulo readline

**📚 Conceito Detalhado: Arrow Functions**
- **Arrow Function**: Sintaxe moderna para criar funções
- **Sintaxe**: `(parâmetros) => { código }`
- **Exemplo**: `(answer) => { código }`
- **Vantagem**: Mais concisa que `function(parâmetros) { código }`
- **Callback**: Função executada após resposta do usuário
- **Por que usar**: Sintaxe mais limpa e moderna

**🎯 JavaScript com Input:**
```javascript
// Importar módulo readline
const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para imprimir uma linha da tabuada
function printMultiplicationLine(number, multiplier, result) {
    const numberColor = "\x1b[36m";      // Ciano para o número
    const multiplierColor = "\x1b[32m";  // Verde para o multiplicador
    const resultColor = "\x1b[33m";      // Amarelo para o resultado
    const resetColor = "\x1b[0m";        // Reset para voltar ao normal
    
    console.log(numberColor + number + resetColor + " x " + multiplierColor + multiplier + resetColor + " = " + resultColor + result + resetColor);
}

// Função para calcular tabuada
function calculateMultiplicationTable(number) {
    console.log("\x1b[1m\x1b[37m=== Tabuada do " + number + " ===\x1b[0m");
    
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        printMultiplicationLine(number, i, result);
    }
    
    console.log("\x1b[1m\x1b[37m========================\x1b[0m");
}

// Perguntar ao usuário
rl.question('Digite um número para calcular a tabuada: ', (answer) => {
    const number = parseInt(answer);
    calculateMultiplicationTable(number);
    rl.close();
});
```

**📚 Explicação do Código:**
- **`require('readline')`**: Importa módulo para input
- **`createInterface`**: Cria interface de leitura
- **`question`**: Faz pergunta ao usuário
- **`(answer) => { ... }`**: Arrow function que recebe a resposta
- **`parseInt(answer)`**: Converte texto para número
- **`rl.close()`**: Fecha a interface

**📚 Explicação Detalhada da Arrow Function:**
- **`(answer) => {`**: Início da arrow function
- **`answer`**: Parâmetro que recebe a resposta do usuário
- **`=>`**: Símbolo da arrow function
- **`{ ... }`**: Bloco de código da função
- **Callback**: Função executada quando usuário responde


**🎯 Como executar:**
1. **Salvar como**: `tabuada.js`
2. **Executar**: `node tabuada.js`
3. **Digitar**: Número desejado
4. **Ver resultado**: Tabuada aparece

### **Passo 6: Validar Entrada com If**

**🎯 O que vamos fazer:**
Verificar se o usuário digitou um número válido (entre 1 e 10).

**📚 Conceito Detalhado: Validação com If**
- **if**: Palavra-chave para condições
- **else**: Executar código se condição for falsa
- **&&**: Operador "E" (ambas condições devem ser verdadeiras)
- **||**: Operador "OU" (uma das condições deve ser verdadeira)

**🎯 JavaScript com Validação:**
```javascript
// Importar módulo readline
const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para imprimir uma linha da tabuada
function printMultiplicationLine(number, multiplier, result) {
    const numberColor = "\x1b[36m";      // Ciano para o número
    const multiplierColor = "\x1b[32m";  // Verde para o multiplicador
    const resultColor = "\x1b[33m";      // Amarelo para o resultado
    const resetColor = "\x1b[0m";        // Reset para voltar ao normal
    
    console.log(numberColor + number + resetColor + " x " + multiplierColor + multiplier + resetColor + " = " + resultColor + result + resetColor);
}

// Função para calcular tabuada
function calculateMultiplicationTable(number) {
    console.log("\x1b[1m\x1b[37m=== Tabuada do " + number + " ===\x1b[0m");
    
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        printMultiplicationLine(number, i, result);
    }
    
    console.log("\x1b[1m\x1b[37m========================\x1b[0m");
}

// Perguntar ao usuário
rl.question('Digite um número para calcular a tabuada: ', (answer) => {
    const number = parseInt(answer);
    
    // Validar entrada
    if (number >= 1 && number <= 10) {
        calculateMultiplicationTable(number);
    } else {
        console.log("❌ Erro: Digite um número entre 1 e 10!");
    }
    
    rl.close();
});
```

**📚 Explicação da Validação:**
- **`number >= 1`**: Verifica se é maior ou igual a 1
- **`number <= 10`**: Verifica se é menor ou igual a 10
- **`&&`**: Ambas condições devem ser verdadeiras
- **`else`**: Executa se condição for falsa

**🎯 Vantagens:**
- **Segurança**: Evita erros com números inválidos
- **Feedback**: Usuário sabe o que está errado
- **Controle**: Apenas números válidos são processados

### **Passo 7: Manter Entrada em Loop até Receber Valor Válido**

**🎯 O que vamos fazer:**
Repetir a pergunta até o usuário digitar um número válido.

**📚 Conceito Detalhado: Loops While**
- **while**: Palavra-chave para loops condicionais
- **true**: Condição que sempre é verdadeira
- **break**: Sair do loop
- **continue**: Pular para próxima iteração

**🎯 JavaScript com Loop de Validação:**
```javascript
// Importar módulo readline
const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para imprimir uma linha da tabuada
function printMultiplicationLine(number, multiplier, result) {
    const numberColor = "\x1b[36m";      // Ciano para o número
    const multiplierColor = "\x1b[32m";  // Verde para o multiplicador
    const resultColor = "\x1b[33m";      // Amarelo para o resultado
    const resetColor = "\x1b[0m";        // Reset para voltar ao normal
    
    console.log(numberColor + number + resetColor + " x " + multiplierColor + multiplier + resetColor + " = " + resultColor + result + resetColor);
}

// Função para calcular tabuada
function calculateMultiplicationTable(number) {
    console.log("\x1b[1m\x1b[37m=== Tabuada do " + number + " ===\x1b[0m");
    
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        printMultiplicationLine(number, i, result);
    }
    
    console.log("\x1b[1m\x1b[37m========================\x1b[0m");
}

// Função para perguntar e validar
function askNumber() {
    rl.question('Digite um número entre 1 e 10: ', (answer) => {
        const number = parseInt(answer);
        
        // Validar entrada
        if (number >= 1 && number <= 10) {
            calculateMultiplicationTable(number);
            rl.close();
        } else {
            console.log("❌ Erro: Digite um número entre 1 e 10!");
            console.log("Tente novamente...\n");
            askNumber(); // Perguntar novamente
        }
    });
}

// Iniciar o programa
askNumber();
```

**📚 Explicação do Loop:**
- **`askNumber()`**: Função que pergunta ao usuário
- **`if (number >= 1 && number <= 10)`**: Valida entrada
- **`askNumber()`**: Chama função novamente se inválido
- **`rl.close()`**: Fecha apenas quando válido

**🎯 Vantagens:**
- **Persistência**: Não desiste até receber valor válido
- **Feedback**: Usuário sempre sabe o que fazer
- **Robustez**: Programa não quebra com entrada inválida

## 🎯 Resultado Final

### **🧮 Funcionalidades do Gerador de Tabuada:**
- **Cálculo automático**: Tabuada de qualquer número
- **Validação de entrada**: Apenas números de 1 a 10
- **Loop de validação**: Repete até receber entrada válida
- **Interface de terminal**: Input e output no console
- **Código organizado**: Funções reutilizáveis

### **📚 Conceitos JavaScript Aprendidos:**
- **Console**: `console.log()` para exibir resultados
- **Variáveis**: `let` para armazenar dados
- **Funções**: `function` para organizar código
- **Loops**: `for` para repetir operações
- **Input**: `readline` para receber dados do usuário
- **Validação**: `if/else` para verificar entrada
- **Loops de controle**: Repetir até condição ser atendida

### **🎯 Progressão Pedagógica:**
1. **Hardcoded**: Valores fixos para entender o básico
2. **Variáveis**: Flexibilidade para trocar números
3. **Funções**: Organização e reutilização de código
4. **Loops**: Eficiência com `for`
5. **Input**: Interatividade com usuário
6. **Validação**: Controle de entrada com `if`
7. **Loop de validação**: Robustez com repetição

## 🎉 Parabéns!

Você criou seu primeiro programa JavaScript completo! 🧮✨

**O que você aprendeu:**
- **Fundamentos**: Variáveis, funções, loops
- **Console**: Interface de saída
- **Input**: Receber dados do usuário
- **Validação**: Verificar entrada
- **Loops**: Repetir operações
- **Organização**: Código limpo e reutilizável

**Próximo nível**: Aplicar esses conceitos em React/Next.js para criar jogos ainda mais incríveis! 🚀
