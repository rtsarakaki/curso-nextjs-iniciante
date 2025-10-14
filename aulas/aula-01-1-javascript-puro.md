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

## 📚 Conceito Detalhado: Módulos e Import

**🎯 O que são Módulos?**
- **Módulo**: Biblioteca de código que já existe no Node.js
- **Função**: Fornecer funcionalidades prontas para usar
- **Exemplos**: `readline` (input), `fs` (arquivos), `path` (caminhos)
- **Vantagem**: Não precisar escrever tudo do zero

**🎯 Como Funciona o require():**
- **`require()`**: Função do Node.js para importar módulos
- **Sintaxe**: `const nome = require('nome-do-modulo')`
- **Módulos nativos**: Já vêm instalados com o Node.js
- **Módulos externos**: Podem ser instalados com `npm install`

**🎯 Exemplo Prático:**
```javascript
// Importar módulo readline
const readline = require('readline');

// Agora podemos usar as funções do readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

**🎯 Por que Precisamos de Módulos?**
- **JavaScript puro**: Não tem input nativo
- **Node.js**: Adiciona funcionalidades extras
- **readline**: Específico para ler entrada do usuário
- **Reutilização**: Código já testado e otimizado

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
// Tabuada do 2 - hardcoded
console.log("2 x 1 = 2");
console.log("2 x 2 = 4");
console.log("2 x 3 = 6");
console.log("2 x 4 = 8");
console.log("2 x 5 = 10");
console.log("2 x 6 = 12");
console.log("2 x 7 = 14");
console.log("2 x 8 = 16");
console.log("2 x 9 = 18");
console.log("2 x 10 = 20");
```

**📚 Explicação do Código:**
- **`console.log()`**: Exibe texto no terminal
- **`"2 x 1 = 2"`**: String (texto) entre aspas
- **Cada linha**: Uma operação da tabuada
- **Resultado**: Números calculados manualmente

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
let numero = 2;

console.log(numero + " x 1 = " + (numero * 1));
console.log(numero + " x 2 = " + (numero * 2));
console.log(numero + " x 3 = " + (numero * 3));
console.log(numero + " x 4 = " + (numero * 4));
console.log(numero + " x 5 = " + (numero * 5));
console.log(numero + " x 6 = " + (numero * 6));
console.log(numero + " x 7 = " + (numero * 7));
console.log(numero + " x 8 = " + (numero * 8));
console.log(numero + " x 9 = " + (numero * 9));
console.log(numero + " x 10 = " + (numero * 10));
```

**📚 Explicação do Código:**
- **`let numero = 2`**: Cria variável com valor 2
- **`numero + " x 1 = "`**: Concatena variável com texto
- **`(numero * 1)`**: Calcula o resultado
- **Para trocar**: Mude apenas `let numero = 3`

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
function calcularTabuada(numero) {
    console.log("=== Tabuada do " + numero + " ===");
    console.log(numero + " x 1 = " + (numero * 1));
    console.log(numero + " x 2 = " + (numero * 2));
    console.log(numero + " x 3 = " + (numero * 3));
    console.log(numero + " x 4 = " + (numero * 4));
    console.log(numero + " x 5 = " + (numero * 5));
    console.log(numero + " x 6 = " + (numero * 6));
    console.log(numero + " x 7 = " + (numero * 7));
    console.log(numero + " x 8 = " + (numero * 8));
    console.log(numero + " x 9 = " + (numero * 9));
    console.log(numero + " x 10 = " + (numero * 10));
    console.log("========================");
}

// Usar a função
calcularTabuada(2);
calcularTabuada(3);
calcularTabuada(5);
```

**📚 Explicação do Código:**
- **`function calcularTabuada(numero)`**: Cria função com parâmetro
- **`numero`**: Parâmetro que recebe o valor
- **`calcularTabuada(2)`**: Chama função com valor 2
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
// Função com loop for
function calcularTabuada(numero) {
    console.log("=== Tabuada do " + numero + " ===");
    
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
    
    console.log("========================");
}

// Usar a função
calcularTabuada(2);
calcularTabuada(3);
calcularTabuada(5);
```

**📚 Explicação do Loop:**
- **`let i = 1`**: Inicia contador em 1
- **`i <= 10`**: Continua enquanto i for menor ou igual a 10
- **`i++`**: Aumenta i em 1 a cada repetição
- **`numero * i`**: Calcula o resultado

**🎯 Vantagens:**
- **Menos código**: Uma linha em vez de 10
- **Flexibilidade**: Fácil de mudar o limite
- **Eficiência**: Código mais limpo

### **Passo 5: Permitir Input do Usuário**

**🎯 O que vamos fazer:**
Permitir que o usuário digite o número para calcular a tabuada.

**📚 Conceito Detalhado: Input do Usuário**
- **readline**: Módulo do Node.js para input
- **createInterface**: Criar interface de leitura
- **question**: Método para fazer pergunta ao usuário
- **callback**: Função executada após resposta

**📚 Conceito Detalhado: Módulos e Import**
- **Módulo**: Biblioteca de código que já existe no Node.js
- **require()**: Função para importar módulos
- **const**: Variável que não pode ser alterada
- **readline**: Módulo específico para ler entrada do usuário
- **Por que usar**: JavaScript puro não tem input nativo, precisa de módulos

**🎯 JavaScript com Input:**
```javascript
// Importar módulo readline
const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular tabuada
function calcularTabuada(numero) {
    console.log("=== Tabuada do " + numero + " ===");
    
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
    
    console.log("========================");
}

// Perguntar ao usuário
rl.question('Digite um número para calcular a tabuada: ', (resposta) => {
    const numero = parseInt(resposta);
    calcularTabuada(numero);
    rl.close();
});
```

**📚 Explicação do Código:**
- **`require('readline')`**: Importa módulo para input
- **`createInterface`**: Cria interface de leitura
- **`question`**: Faz pergunta ao usuário
- **`parseInt(resposta)`**: Converte texto para número
- **`rl.close()`**: Fecha a interface

**📚 Explicação Detalhada do require():**
- **`require()`**: Função do Node.js para importar módulos
- **`'readline'`**: Nome do módulo (entre aspas)
- **`const readline`**: Armazena o módulo em uma variável
- **Módulos nativos**: Já vêm instalados com o Node.js
- **Outros módulos**: Podem ser instalados com `npm install`

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

// Função para calcular tabuada
function calcularTabuada(numero) {
    console.log("=== Tabuada do " + numero + " ===");
    
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
    
    console.log("========================");
}

// Perguntar ao usuário
rl.question('Digite um número para calcular a tabuada: ', (resposta) => {
    const numero = parseInt(resposta);
    
    // Validar entrada
    if (numero >= 1 && numero <= 10) {
        calcularTabuada(numero);
    } else {
        console.log("❌ Erro: Digite um número entre 1 e 10!");
    }
    
    rl.close();
});
```

**📚 Explicação da Validação:**
- **`numero >= 1`**: Verifica se é maior ou igual a 1
- **`numero <= 10`**: Verifica se é menor ou igual a 10
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

// Função para calcular tabuada
function calcularTabuada(numero) {
    console.log("=== Tabuada do " + numero + " ===");
    
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
    
    console.log("========================");
}

// Função para perguntar e validar
function perguntarNumero() {
    rl.question('Digite um número entre 1 e 10: ', (resposta) => {
        const numero = parseInt(resposta);
        
        // Validar entrada
        if (numero >= 1 && numero <= 10) {
            calcularTabuada(numero);
            rl.close();
        } else {
            console.log("❌ Erro: Digite um número entre 1 e 10!");
            console.log("Tente novamente...\n");
            perguntarNumero(); // Perguntar novamente
        }
    });
}

// Iniciar o programa
perguntarNumero();
```

**📚 Explicação do Loop:**
- **`perguntarNumero()`**: Função que pergunta ao usuário
- **`if (numero >= 1 && numero <= 10)`**: Valida entrada
- **`perguntarNumero()`**: Chama função novamente se inválido
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
