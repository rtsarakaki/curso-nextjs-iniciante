# 📝 Convenções de Nomenclatura - Curso Next.js

## 🌍 Idioma do Código

### **✅ SEMPRE Use Inglês**
- **Variáveis**: `currentLesson`, `gameStarted`, `flippedCards`
- **Funções**: `handleCardClick`, `startNewGame`, `resetGame`
- **Componentes**: `FirstSite`, `MemoryGame`, `PhotoGallery`
- **Arquivos**: `FirstSite.tsx`, `MemoryGame.tsx`, `PhotoGallery.tsx`

### **❌ NUNCA Use Português**
- **Variáveis**: `aulaAtual`, `jogoIniciado`, `cartasViradas`
- **Funções**: `clicarCarta`, `iniciarJogo`, `resetarJogo`
- **Componentes**: `PrimeiroSite`, `JogoMemoria`, `GaleriaFotos`

## 📋 Convenções por Tipo

### **Componentes React**
```typescript
// ✅ CORRETO
export default function FirstSite() { }
export default function MemoryGame() { }
export default function PhotoGallery() { }
export default function Calculator() { }

// ❌ INCORRETO
export default function PrimeiroSite() { }
export default function JogoMemoria() { }
export default function GaleriaFotos() { }
```

### **Variáveis de Estado**
```typescript
// ✅ CORRETO
const [currentLesson, setCurrentLesson] = useState('aula-01');
const [gameStarted, setGameStarted] = useState(false);
const [flippedCards, setFlippedCards] = useState([]);
const [matchedCards, setMatchedCards] = useState([]);
const [moves, setMoves] = useState(0);

// ❌ INCORRETO
const [aulaAtual, setAulaAtual] = useState('aula-01');
const [jogoIniciado, setJogoIniciado] = useState(false);
const [cartasViradas, setCartasViradas] = useState([]);
```

### **Funções e Métodos**
```typescript
// ✅ CORRETO
const handleCardClick = (index: number) => { };
const startNewGame = () => { };
const resetGame = () => { };
const calculateScore = () => { };

// ❌ INCORRETO
const clicarCarta = (index: number) => { };
const iniciarJogo = () => { };
const resetarJogo = () => { };
const calcularPontuacao = () => { };
```

### **Arrays e Objetos**
```typescript
// ✅ CORRETO
const lessons = [
  { id: 'aula-01', name: 'Aula 1: Meu Primeiro Site Bonito', component: FirstSite },
  { id: 'aula-02', name: 'Aula 2: Jogo da Memória Visual', component: MemoryGame },
];

const gameIcons = ['★', '●', '▲', '■', '♦', '♠', '♥', '♣'];

// ❌ INCORRETO
const aulas = [
  { id: 'aula-01', nome: 'Aula 1: Meu Primeiro Site Bonito', componente: FirstSite },
];

const iconesJogo = ['★', '●', '▲', '■', '♦', '♠', '♥', '♣'];
```

## 🎯 Convenções por Contexto

### **Jogos**
```typescript
// ✅ CORRETO
const [gameStarted, setGameStarted] = useState(false);
const [gameScore, setGameScore] = useState(0);
const [gameLevel, setGameLevel] = useState(1);
const [gameTime, setGameTime] = useState(0);

// ❌ INCORRETO
const [jogoIniciado, setJogoIniciado] = useState(false);
const [pontuacaoJogo, setPontuacaoJogo] = useState(0);
const [nivelJogo, setNivelJogo] = useState(1);
const [tempoJogo, setTempoJogo] = useState(0);
```

### **Interface do Usuário**
```typescript
// ✅ CORRETO
const [isVisible, setIsVisible] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isDisabled, setIsDisabled] = useState(false);
const [isSelected, setIsSelected] = useState(false);

// ❌ INCORRETO
const [visivel, setVisivel] = useState(false);
const [carregando, setCarregando] = useState(false);
const [desabilitado, setDesabilitado] = useState(false);
const [selecionado, setSelecionado] = useState(false);
```

### **Dados e Conteúdo**
```typescript
// ✅ CORRETO
const [userData, setUserData] = useState({});
const [photoList, setPhotoList] = useState([]);
const [filteredItems, setFilteredItems] = useState([]);
const [searchQuery, setSearchQuery] = useState('');

// ❌ INCORRETO
const [dadosUsuario, setDadosUsuario] = useState({});
const [listaFotos, setListaFotos] = useState([]);
const [itensFiltrados, setItensFiltrados] = useState([]);
const [consultaBusca, setConsultaBusca] = useState('');
```

## 📁 Convenções de Arquivos

### **Componentes**
```
src/
├── aulas/
│   ├── aula-01/
│   │   └── FirstSite.tsx          # ✅ CORRETO
│   ├── aula-02/
│   │   └── MemoryGame.tsx         # ✅ CORRETO
│   └── aula-03/
│       └── PhotoGallery.tsx       # ✅ CORRETO
└── components/
    ├── Button.tsx                 # ✅ CORRETO
    ├── Card.tsx                 # ✅ CORRETO
    └── Modal.tsx                  # ✅ CORRETO
```

### **Páginas**
```
src/
├── app/
│   ├── page.tsx                   # ✅ CORRETO
│   ├── about/
│   │   └── page.tsx              # ✅ CORRETO
│   └── contact/
│       └── page.tsx              # ✅ CORRETO
```

## 🎨 Convenções de CSS/Tailwind

### **Classes CSS**
```typescript
// ✅ CORRETO - Use classes em inglês
className="bg-blue-500 text-white hover:bg-blue-600"
className="flex items-center justify-center"
className="rounded-lg shadow-lg transition-all duration-300"

// ❌ INCORRETO - Não use português em classes
className="fundo-azul texto-branco"
className="flex itens-centro justificar-centro"
```

### **IDs e Classes Customizadas**
```typescript
// ✅ CORRETO
<div id="game-container" className="game-wrapper">
<div id="photo-gallery" className="gallery-grid">
<div id="calculator-display" className="calc-display">

// ❌ INCORRETO
<div id="container-jogo" className="wrapper-jogo">
<div id="galeria-fotos" className="grid-galeria">
<div id="display-calculadora" className="display-calc">
```

## 🔧 Convenções de Funções

### **Event Handlers**
```typescript
// ✅ CORRETO
const handleClick = () => { };
const handleSubmit = () => { };
const handleChange = () => { };
const handleKeyPress = () => { };

// ❌ INCORRETO
const aoClicar = () => { };
const aoEnviar = () => { };
const aoAlterar = () => { };
const aoPressionarTecla = () => { };
```

### **Funções de Utilidade**
```typescript
// ✅ CORRETO
const formatDate = (date: Date) => { };
const calculateTotal = (items: Item[]) => { };
const validateEmail = (email: string) => { };
const shuffleArray = (array: any[]) => { };

// ❌ INCORRETO
const formatarData = (data: Date) => { };
const calcularTotal = (itens: Item[]) => { };
const validarEmail = (email: string) => { };
const embaralharArray = (array: any[]) => { };
```

## 📝 Comentários

### **✅ Comentários em Português (Para Ensino)**
```typescript
// ✅ CORRETO - Comentários em português para facilitar o ensino
const [currentLesson, setCurrentLesson] = useState('aula-01'); // Aula atual selecionada
const [gameStarted, setGameStarted] = useState(false); // Se o jogo foi iniciado
const [flippedCards, setFlippedCards] = useState([]); // Cartas que estão viradas

// Função para iniciar um novo jogo
const startNewGame = () => {
  // Lógica do jogo aqui
};
```

### **❌ Evitar Comentários em Inglês (Para Este Projeto)**
```typescript
// ❌ INCORRETO - Comentários em inglês dificultam o ensino
const [currentLesson, setCurrentLesson] = useState('aula-01'); // Current selected lesson
const [gameStarted, setGameStarted] = useState(false); // Whether the game has started
```

## 🎯 Resumo das Regras

1. **Código sempre em inglês** - Variáveis, funções, componentes
2. **Comentários em português** - Para facilitar o ensino
3. **Nomes descritivos** - Que expliquem claramente a função
4. **Consistência** - Seguir o mesmo padrão em todo o projeto
5. **Legibilidade** - Código deve ser fácil de entender

## 🚀 Benefícios

- **Compatibilidade** - Funciona em qualquer ambiente
- **Padrão da indústria** - Segue convenções internacionais
- **Manutenibilidade** - Mais fácil de manter e atualizar
- **Colaboração** - Outros desenvolvedores podem contribuir
- **Profissionalismo** - Código de qualidade profissional

---

**Lembre-se: Inglês no código, português nos comentários! 🎯**
