# 🤖 Instruções para o Cursor - Curso Next.js

## 🎯 Diretrizes Gerais

### **Foco no Ensino**
- **Sempre explique** o que está fazendo
- **Use linguagem simples** e acessível
- **Evite jargões técnicos** desnecessários
- **Foque na experiência visual** primeiro

### **🌍 Idioma do Código**
- **SEMPRE use inglês** para variáveis, métodos e nomes de componentes
- **NUNCA use português** no código
- **Mantenha comentários** em português para facilitar o ensino
- **Use nomes descritivos** em inglês

#### **Exemplos de Nomenclatura:**
```javascript
// ✅ CORRETO - Inglês
const [currentLesson, setCurrentLesson] = useState('aula-01');
const [gameStarted, setGameStarted] = useState(false);
const [flippedCards, setFlippedCards] = useState([]);

// ✅ CORRETO - Componentes em inglês
export default function FirstSite() { }
export default function MemoryGame() { }
export default function PhotoGallery() { }

// ❌ INCORRETO - Português no código
const [aulaAtual, setAulaAtual] = useState('aula-01');
const [jogoIniciado, setJogoIniciado] = useState(false);
export default function PrimeiroSite() { }
```

### **Metodologia do Curso**
- **Design-first approach**: Sempre começar com o resultado visual
- **Gamificação**: Tornar o aprendizado divertido
- **Progressão gradual**: Do simples ao complexo
- **Celebração**: Reconhecer conquistas

## 🎨 Sobre Ícones e Emojis

### **❌ NÃO Use Emojis**
- Emojis podem não renderizar em todos os sistemas
- Podem causar problemas de compatibilidade
- Dificultam a manutenção do código

### **✅ Use Ícones Unicode Simples**
```javascript
// ✅ BOM - Ícones Unicode simples
const icons = ['★', '●', '▲', '■', '♦', '♠', '♥', '♣'];

// ✅ BOM - Símbolos matemáticos
const symbols = ['+', '-', '×', '÷', '=', '≠', '≈', '∞'];

// ✅ BOM - Símbolos de setas
const arrows = ['←', '→', '↑', '↓', '↔', '↕', '↖', '↗'];

// ❌ EVITAR - Emojis complexos
const emojis = ['🐶', '🐱', '🐭', '🐹']; // Podem não funcionar
```

### **Alternativas Recomendadas**
```javascript
// Para jogos de memória
const gameIcons = ['★', '●', '▲', '■', '♦', '♠', '♥', '♣'];

// Para botões de ação
const actionIcons = ['▶', '⏸', '⏹', '⏭', '⏮'];

// Para status
const statusIcons = ['✓', '✗', '⚠', 'ℹ', '?'];

// Para navegação
const navIcons = ['←', '→', '↑', '↓', '↔'];
```

## 🎮 Projetos e Jogos

### **Aula 1: Site Pessoal**
- **Foco**: HTML/CSS, design visual
- **Resultado**: Site bonito e responsivo
- **Ícones**: Use símbolos simples como ★, ●, ▲

### **Aula 2: Jogo da Memória**
- **Foco**: JavaScript, lógica de programação
- **Resultado**: Jogo interativo e divertido
- **Ícones**: Use símbolos Unicode simples

### **Aula 3: Galeria de Fotos**
- **Foco**: JavaScript avançado, eventos
- **Resultado**: Galeria com filtros e modal
- **Ícones**: Use símbolos de setas e ações

### **Aula 4: Calculadora**
- **Foco**: Lógica de programação, funções
- **Resultado**: Calculadora funcional e bonita
- **Ícones**: Use símbolos matemáticos

## 💻 Código e Desenvolvimento

### **Estrutura de Arquivos**
```
src/
├── aulas/
│   ├── aula-01/
│   │   └── PrimeiroSite.tsx
│   ├── aula-02/
│   │   └── MemoryGame.tsx
│   └── aula-03/
│       └── (em desenvolvimento)
└── app/
    └── page.tsx
```

### **Convenções de Código**
- **Nomes descritivos**: `handleCardClick`, `startNewGame`
- **Comentários explicativos**: Sempre explicar o que faz
- **Estrutura clara**: Organizar código por funcionalidade
- **Responsividade**: Sempre usar Tailwind CSS

### **Exemplo de Componente**
```tsx
export default function MemoryGame() {
  // Estado do jogo
  const [cards, setCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  
  // Função para iniciar jogo
  const startNewGame = () => {
    // Lógica do jogo
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      {/* Conteúdo do jogo */}
    </div>
  );
}
```

## 🎯 Objetivos por Aula

### **Aula 1: "Eu consigo criar coisas bonitas!"**
- Entender HTML e CSS
- Criar layouts visuais
- Usar cores e tipografia
- **Resultado**: Sites bonitos e responsivos

### **Aula 2: "Eu consigo fazer coisas interativas!"**
- Programar com JavaScript
- Usar React e componentes
- Gerenciar estado
- **Resultado**: Apps interativos e funcionais

### **Aula 3: "Eu sou um desenvolvedor!"**
- Usar Next.js completo
- Criar aplicações complexas
- Entender arquitetura
- **Resultado**: Projetos profissionais

## 🛠️ Ferramentas e Tecnologias

### **Stack Principal**
- **Next.js 15** - Framework React
- **TypeScript** - JavaScript com tipos
- **Tailwind CSS** - Estilização rápida e visual
- **HTML5** - Estrutura semântica

### **Ferramentas de Desenvolvimento**
- **VS Code** - Editor principal
- **Git** - Controle de versão
- **Chrome DevTools** - Debugging visual

## 📚 Documentação

### **Para Professores**
- **INSTRUCOES_PROFESSOR.md** - Metodologia de ensino
- **EXTENSOES_VSCODE.md** - Ferramentas de desenvolvimento
- **aulas/** - Documentação das aulas

### **Para Alunos**
- **README.md** - Visão geral do curso
- **CODIGO_DAS_AULAS.md** - Guia do código
- **aulas/** - Instruções das aulas

## 🎉 Dicas de Ensino

### **Mantendo o Interesse**
- **Resultados visuais rápidos** - Mostrar mudanças imediatas
- **Personalização** - Deixar escolher cores, temas, etc.
- **Projetos relevantes** - Jogos e apps que ele usaria
- **Celebração** - "Olha que legal ficou!"

### **Explicando Conceitos Difíceis**
- **Use analogias visuais** - "Props são como configurações de um jogo"
- **Mostre, não apenas explique** - Sempre demonstre na prática
- **Quebre em pedaços pequenos** - Um conceito por vez
- **Conecte com interesses** - "Isso é como no seu jogo favorito..."

### **Lidando com Frustrações**
- **Normalize erros** - "Erros são parte do aprendizado"
- **Debugging juntos** - "Vamos descobrir juntos o que aconteceu"
- **Pausas quando necessário** - Não forçar quando estiver cansado
- **Foco no progresso** - "Olha como você melhorou!"

## 🚀 Próximos Passos

### **Desenvolvimento**
1. **Implementar Aulas 3-12** na branch develop
2. **Adicionar mais jogos** e projetos
3. **Melhorar documentação** conforme necessário
4. **Testes automatizados** para cada aula

### **Produção**
1. **Deploy automático** via Vercel
2. **URL pública** para acesso
3. **Versionamento** das releases
4. **Monitoramento** de uso

---

## 🎯 Lembre-se

- **Foque na experiência visual** primeiro
- **Use ícones Unicode simples** em vez de emojis
- **Explique sempre** o que está fazendo
- **Celebre pequenas vitórias**
- **Mantenha o código limpo** e organizado

**Boa programação! 🚀**
