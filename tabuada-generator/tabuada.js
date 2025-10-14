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

// Importar módulo readline
const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
