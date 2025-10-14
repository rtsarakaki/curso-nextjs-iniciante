# 🎲 Aula 1.1: JavaScript Puro - Simulador de Dados

## 📖 O que vamos aprender
- **JavaScript Puro**: Sintaxe básica e conceitos fundamentais
- **DOM**: Manipular elementos HTML com JavaScript
- **Eventos**: Responder a cliques do usuário
- **Math**: Gerar números aleatórios
- **Arrays**: Listas de dados
- **Funções**: Organizar código reutilizável
- **Loops**: Repetir ações
- **Timers**: Criar animações simples

## 🎯 O que vamos criar
Um **Simulador de Dados** interativo onde o usuário pode:
- Rolar dados de diferentes tipos (d6, d10, d20)
- Ver animação dos dados "rolando"
- Contar quantas vezes rolou cada dado
- Resetar o contador
- Interface visual atrativa com tema de jogos

## 🎮 Conceitos de Jogos que Vamos Aplicar
- **Dados virtuais**: Simular rolagem de dados reais
- **Sistema de pontuação**: Contar resultados
- **Feedback visual**: Animações e efeitos
- **Interface de jogo**: Botões e displays
- **Estatísticas**: Histórico de rolagens

## 🛠️ Preparação do Ambiente

### **Passo 1: Criar a Estrutura do Projeto**
1. **Criar pasta**: `dice-simulator`
2. **Arquivos necessários**:
   - `index.html` - Estrutura HTML
   - `style.css` - Estilos CSS
   - `script.js` - Lógica JavaScript
3. **Abrir no navegador**: `index.html`

### **Passo 2: Verificar se o JavaScript está funcionando**
1. **Abrir o Console do navegador** (F12)
2. **Testar**: `console.log("JavaScript funcionando!")`
3. **Verificar**: Mensagem aparece no console

## 📝 Passo a Passo

### **Passo 1: Criar a Estrutura HTML**

**🎯 O que vamos fazer:**
Criar a estrutura básica do HTML com elementos que vamos manipular com JavaScript.

**📚 Conceito Detalhado: HTML + JavaScript**
- **HTML**: Estrutura e conteúdo da página
- **JavaScript**: Lógica e interatividade
- **DOM**: Document Object Model - como JavaScript acessa o HTML
- **Elementos**: Tags HTML que podemos manipular

**🎯 HTML Básico:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulador de Dados</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🎲 Simulador de Dados</h1>
            <p>Role os dados e veja a magia acontecer!</p>
        </header>

        <main>
            <div class="dice-section">
                <h2>Escolha o tipo de dado:</h2>
                <div class="dice-buttons">
                    <button id="d6-btn" class="dice-btn">D6</button>
                    <button id="d10-btn" class="dice-btn">D10</button>
                    <button id="d20-btn" class="dice-btn">D20</button>
                </div>
            </div>

            <div class="result-section">
                <h2>Resultado:</h2>
                <div id="dice-display" class="dice-display">
                    <span id="dice-value">?</span>
                </div>
            </div>

            <div class="stats-section">
                <h2>Estatísticas:</h2>
                <div id="stats-display">
                    <p>Total de rolagens: <span id="total-rolls">0</span></p>
                    <p>Último resultado: <span id="last-result">-</span></p>
                </div>
                <button id="reset-btn" class="reset-btn">Resetar</button>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**📚 Explicação dos Elementos HTML:**
- **`<!DOCTYPE html>`**: Declara que é HTML5
- **`<html>`**: Elemento raiz da página
- **`<head>`**: Metadados (não visíveis)
- **`<body>`**: Conteúdo visível da página
- **`<div>`**: Container genérico
- **`<button>`**: Botão clicável
- **`<span>`**: Texto inline
- **`<script>`**: Carrega o JavaScript

### **Passo 2: Adicionar Estilos CSS Básicos**

**🎯 O que vamos fazer:**
Criar estilos básicos para deixar o simulador visualmente atrativo.

**📚 Conceito Detalhado: CSS + JavaScript**
- **CSS**: Aparência visual dos elementos
- **Classes**: `.dice-btn`, `.container`, etc.
- **IDs**: `#dice-display`, `#dice-value`, etc.
- **Seletores**: Como JavaScript encontra elementos

**🎯 CSS Básico:**
```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 500px;
    width: 100%;
}

h1 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
}

p {
    color: #666;
    margin-bottom: 2rem;
}

.dice-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.dice-btn {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.3s ease;
}

.dice-btn:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.dice-display {
    background: #f0f0f0;
    border: 3px solid #333;
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    font-size: 4rem;
    font-weight: bold;
    color: #333;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stats-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid #eee;
}

.reset-btn {
    background: #f44336;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
}

.reset-btn:hover {
    background: #da190b;
}
```

### **Passo 3: Criar a Lógica JavaScript Básica**

**🎯 O que vamos fazer:**
Criar as variáveis e funções básicas para o simulador de dados.

**📚 Conceito Detalhado: JavaScript Básico**
- **Variáveis**: `let`, `const` para armazenar dados
- **Funções**: `function` para organizar código
- **DOM**: `document.getElementById()` para acessar elementos
- **Eventos**: `addEventListener()` para responder a cliques

**🎯 JavaScript Básico:**
```javascript
// Variáveis globais
let totalRolls = 0;
let lastResult = 0;

// Função para rolar dados
function rollDice(maxValue) {
    // Gerar número aleatório
    const result = Math.floor(Math.random() * maxValue) + 1;
    
    // Atualizar variáveis
    totalRolls++;
    lastResult = result;
    
    // Atualizar interface
    updateDisplay(result);
    updateStats();
    
    return result;
}

// Função para atualizar o display
function updateDisplay(value) {
    const diceDisplay = document.getElementById('dice-value');
    diceDisplay.textContent = value;
    
    // Adicionar animação
    diceDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        diceDisplay.style.transform = 'scale(1)';
    }, 200);
}

// Função para atualizar estatísticas
function updateStats() {
    document.getElementById('total-rolls').textContent = totalRolls;
    document.getElementById('last-result').textContent = lastResult;
}

// Função para resetar
function resetStats() {
    totalRolls = 0;
    lastResult = 0;
    document.getElementById('dice-value').textContent = '?';
    updateStats();
}

// Adicionar event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Botões de dados
    document.getElementById('d6-btn').addEventListener('click', () => rollDice(6));
    document.getElementById('d10-btn').addEventListener('click', () => rollDice(10));
    document.getElementById('d20-btn').addEventListener('click', () => rollDice(20));
    
    // Botão de reset
    document.getElementById('reset-btn').addEventListener('click', resetStats);
});
```

### **Passo 4: Adicionar Animações e Efeitos**

**🎯 O que vamos fazer:**
Melhorar a experiência visual com animações de "rolagem" dos dados.

**📚 Conceito Detalhado: Animações JavaScript**
- **setInterval**: Executar código repetidamente
- **clearInterval**: Parar execução
- **setTimeout**: Executar após delay
- **CSS Transitions**: Animações suaves

**🎯 JavaScript com Animações:**
```javascript
// Função para animar a rolagem
function animateRoll(maxValue, callback) {
    const diceDisplay = document.getElementById('dice-value');
    let animationCount = 0;
    const maxAnimations = 10;
    
    const animation = setInterval(() => {
        // Mostrar números aleatórios durante a animação
        const randomValue = Math.floor(Math.random() * maxValue) + 1;
        diceDisplay.textContent = randomValue;
        
        animationCount++;
        
        if (animationCount >= maxAnimations) {
            clearInterval(animation);
            // Resultado final
            const finalResult = Math.floor(Math.random() * maxValue) + 1;
            diceDisplay.textContent = finalResult;
            callback(finalResult);
        }
    }, 100);
}

// Função melhorada para rolar dados
function rollDice(maxValue) {
    // Iniciar animação
    animateRoll(maxValue, (result) => {
        // Atualizar variáveis
        totalRolls++;
        lastResult = result;
        
        // Atualizar interface
        updateDisplay(result);
        updateStats();
        
        // Efeito visual final
        const diceDisplay = document.getElementById('dice-value');
        diceDisplay.style.transform = 'scale(1.3)';
        diceDisplay.style.color = '#4CAF50';
        
        setTimeout(() => {
            diceDisplay.style.transform = 'scale(1)';
            diceDisplay.style.color = '#333';
        }, 300);
    });
}
```

### **Passo 5: Adicionar Histórico de Rolagens**

**🎯 O que vamos fazer:**
Criar um sistema para mostrar o histórico das últimas rolagens.

**📚 Conceito Detalhado: Arrays e Loops**
- **Arrays**: `[]` para listas de dados
- **push()**: Adicionar item ao array
- **slice()**: Pegar parte do array
- **forEach()**: Executar função para cada item
- **map()**: Transformar array

**🎯 JavaScript com Histórico:**
```javascript
// Array para histórico
let rollHistory = [];

// Função para adicionar ao histórico
function addToHistory(result, diceType) {
    rollHistory.push({
        result: result,
        diceType: diceType,
        timestamp: new Date()
    });
    
    // Manter apenas os últimos 10 resultados
    if (rollHistory.length > 10) {
        rollHistory = rollHistory.slice(-10);
    }
    
    updateHistoryDisplay();
}

// Função para atualizar display do histórico
function updateHistoryDisplay() {
    const historyContainer = document.getElementById('history-display');
    if (!historyContainer) return;
    
    historyContainer.innerHTML = '';
    
    rollHistory.forEach((roll, index) => {
        const rollElement = document.createElement('div');
        rollElement.className = 'history-item';
        rollElement.innerHTML = `
            <span>${roll.diceType}: ${roll.result}</span>
            <span class="timestamp">${roll.timestamp.toLocaleTimeString()}</span>
        `;
        historyContainer.appendChild(rollElement);
    });
}

// Função melhorada para rolar dados
function rollDice(maxValue) {
    const diceType = `D${maxValue}`;
    
    animateRoll(maxValue, (result) => {
        // Atualizar variáveis
        totalRolls++;
        lastResult = result;
        
        // Adicionar ao histórico
        addToHistory(result, diceType);
        
        // Atualizar interface
        updateDisplay(result);
        updateStats();
    });
}
```

### **Passo 6: Adicionar Estatísticas Avançadas**

**🎯 O que vamos fazer:**
Criar estatísticas mais detalhadas sobre as rolagens.

**📚 Conceito Detalhado: Objetos e Métodos**
- **Objetos**: `{}` para dados estruturados
- **Propriedades**: Acessar dados com `.`
- **Métodos**: Funções dentro de objetos
- **JSON**: Estrutura de dados

**🎯 JavaScript com Estatísticas:**
```javascript
// Objeto para estatísticas
let stats = {
    totalRolls: 0,
    d6Rolls: 0,
    d10Rolls: 0,
    d20Rolls: 0,
    averageResult: 0,
    bestResult: 0,
    worstResult: 0
};

// Função para calcular estatísticas
function calculateStats() {
    if (rollHistory.length === 0) return;
    
    const results = rollHistory.map(roll => roll.result);
    stats.averageResult = (results.reduce((a, b) => a + b, 0) / results.length).toFixed(2);
    stats.bestResult = Math.max(...results);
    stats.worstResult = Math.min(...results);
}

// Função para atualizar display de estatísticas
function updateStatsDisplay() {
    calculateStats();
    
    const statsHTML = `
        <div class="stats-grid">
            <div class="stat-item">
                <h3>Total de Rolagens</h3>
                <p>${stats.totalRolls}</p>
            </div>
            <div class="stat-item">
                <h3>Média</h3>
                <p>${stats.averageResult}</p>
            </div>
            <div class="stat-item">
                <h3>Melhor Resultado</h3>
                <p>${stats.bestResult}</p>
            </div>
            <div class="stat-item">
                <h3>Pior Resultado</h3>
                <p>${stats.worstResult}</p>
            </div>
        </div>
    `;
    
    document.getElementById('stats-display').innerHTML = statsHTML;
}
```

### **Passo 7: Adicionar Sons e Efeitos**

**🎯 O que vamos fazer:**
Adicionar sons de rolagem e efeitos visuais mais avançados.

**📚 Conceito Detalhado: Audio API**
- **Audio**: `new Audio()` para sons
- **play()**: Reproduzir som
- **volume**: Controlar volume
- **CSS Animations**: Animações avançadas

**🎯 JavaScript com Sons:**
```javascript
// Função para tocar som
function playDiceSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OSfTgwOUarm7bVjGgU4k9fyzHksBSR3x/DdkEAKFF606euoVRQKRp/g8r5sIQUqgc7y2Yk2CBtpvfDkn04MDlGq5u21YxoFOJPX8sx5LAUkd8fw3ZBACg==');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Som não disponível'));
}

// Função melhorada para rolar dados
function rollDice(maxValue) {
    const diceType = `D${maxValue}`;
    
    // Tocar som
    playDiceSound();
    
    animateRoll(maxValue, (result) => {
        // Atualizar variáveis
        totalRolls++;
        lastResult = result;
        
        // Adicionar ao histórico
        addToHistory(result, diceType);
        
        // Atualizar interface
        updateDisplay(result);
        updateStats();
        updateStatsDisplay();
    });
}
```

### **Passo 8: Adicionar Persistência Local**

**🎯 O que vamos fazer:**
Salvar o histórico e estatísticas no navegador usando localStorage.

**📚 Conceito Detalhado: LocalStorage**
- **localStorage**: Armazenar dados no navegador
- **setItem()**: Salvar dados
- **getItem()**: Recuperar dados
- **JSON.stringify()**: Converter objeto para string
- **JSON.parse()**: Converter string para objeto

**🎯 JavaScript com Persistência:**
```javascript
// Função para salvar dados
function saveData() {
    const data = {
        rollHistory: rollHistory,
        stats: stats,
        totalRolls: totalRolls
    };
    
    localStorage.setItem('diceSimulator', JSON.stringify(data));
}

// Função para carregar dados
function loadData() {
    const savedData = localStorage.getItem('diceSimulator');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        rollHistory = data.rollHistory || [];
        stats = data.stats || stats;
        totalRolls = data.totalRolls || 0;
        
        updateHistoryDisplay();
        updateStatsDisplay();
    }
}

// Carregar dados ao iniciar
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    // Salvar dados a cada rolagem
    const originalRollDice = rollDice;
    rollDice = function(maxValue) {
        originalRollDice(maxValue);
        saveData();
    };
});
```

## 🎯 Resultado Final

### **🎮 Funcionalidades do Simulador:**
- **Rolagem de dados**: D6, D10, D20
- **Animações**: Dados "rolando" na tela
- **Histórico**: Últimas 10 rolagens
- **Estatísticas**: Média, melhor, pior resultado
- **Sons**: Efeitos sonoros de rolagem
- **Persistência**: Dados salvos no navegador
- **Reset**: Limpar histórico e estatísticas

### **📚 Conceitos JavaScript Aprendidos:**
- **Variáveis**: `let`, `const`
- **Funções**: `function`, arrow functions
- **DOM**: `getElementById`, `addEventListener`
- **Arrays**: `push`, `slice`, `forEach`, `map`
- **Objetos**: Propriedades e métodos
- **Math**: `random`, `floor`, `max`, `min`
- **Timers**: `setInterval`, `setTimeout`
- **LocalStorage**: Persistência de dados
- **Audio**: Reprodução de sons

### **🎯 Próximos Passos:**
Agora que dominamos JavaScript puro, podemos aplicar esses conceitos em React/Next.js para criar jogos mais complexos!

## 🎉 Parabéns!

Você criou seu primeiro programa JavaScript completo! 🎲✨

**O que você aprendeu:**
- **Fundamentos**: Variáveis, funções, eventos
- **DOM**: Manipular elementos HTML
- **Interatividade**: Responder a cliques
- **Animações**: Efeitos visuais
- **Persistência**: Salvar dados
- **Sons**: Efeitos sonoros

**Próximo nível**: Aplicar esses conceitos em React para criar jogos ainda mais incríveis! 🚀
