# 📚 Roteiro de Refatorações - Aula 1

## 🎯 Objetivo: Evoluir o código progressivamente ensinando boas práticas

---

## **🎨 Passo 8: CSS Classes (Substituir CSS Inline)**

### **❌ ANTES (CSS Inline):**
```tsx
<div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
  <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '15px' }}>
    Sobre Mim
  </h2>
  <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>
    Estou aprendendo a criar sites incríveis!
  </p>
</div>
```

### **✅ DEPOIS (CSS Classes):**
```tsx
<div className="card">
  <h2 className="card-title">
    Sobre Mim
  </h2>
  <p className="card-text">
    Estou aprendendo a criar sites incríveis!
  </p>
</div>
```

### **📁 Arquivo `styles/globals.css`:**
```css
.card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.card-title {
  color: #1F2937;
  font-size: 24px;
  margin-bottom: 15px;
}

.card-text {
  color: #6B7280;
  font-size: 16px;
  line-height: 1.6;
}
```

### **🎯 VANTAGENS:**
1. **🔧 Manutenção fácil** - mudar cor em um lugar só
2. **📖 Código limpo** - HTML mais legível
3. **♻️ Reutilização** - usar `.card` em qualquer lugar
4. **🎨 Consistência** - mesmo visual em todo site
5. **📱 Responsividade** - fácil adicionar media queries

---

## **🧩 Passo 9: Componentes Reutilizáveis**

### **❌ ANTES (Código Repetido):**
```tsx
{/* Seção Sobre Mim */}
<section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
  <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '15px' }}>
    Sobre Mim
  </h2>
  <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>
    Estou aprendendo a criar sites incríveis!
  </p>
</section>

{/* Seção Hobbies */}
<section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
  <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '20px' }}>
    Meus Hobbies
  </h2>
  {/* conteúdo dos hobbies */}
</section>
```

### **✅ DEPOIS (Componente Reutilizável):**
```tsx
// Componente Card.tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h2 className="card-title">{title}</h2>
      {children}
    </section>
  );
}

// Uso no componente principal
<Card title="Sobre Mim">
  <p className="card-text">
    Estou aprendendo a criar sites incríveis!
  </p>
</Card>

<Card title="Meus Hobbies">
  {/* conteúdo dos hobbies */}
</Card>
```

### **🎯 VANTAGENS:**
1. **🚫 DRY** - Don't Repeat Yourself (não repetir código)
2. **🔧 Manutenção** - mudar em um lugar, atualiza em todos
3. **📖 Legibilidade** - código mais limpo e organizado
4. **♻️ Reutilização** - usar `<Card>` em qualquer lugar
5. **🧪 Testabilidade** - testar componente isoladamente

---

## **📁 Passo 10: Estrutura de Pastas**

### **❌ ANTES (Tudo em um arquivo):**
```
src/
├── app/
│   └── page.tsx (500+ linhas)
└── aulas/
    └── aula-01/
        └── FirstSite.tsx (200+ linhas)
```

### **✅ DEPOIS (Organizado por funcionalidade):**
```
src/
├── components/
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.module.css
│   ├── ImageCard/
│   │   ├── ImageCard.tsx
│   │   └── ImageCard.module.css
│   └── HobbyCard/
│       ├── HobbyCard.tsx
│       └── HobbyCard.module.css
├── styles/
│   └── globals.css
├── app/
│   └── page.tsx (50 linhas)
└── aulas/
    └── aula-01/
        └── FirstSite.tsx (100 linhas)
```

### **🎯 VANTAGENS:**
1. **📁 Organização** - fácil encontrar arquivos
2. **👥 Trabalho em equipe** - cada um trabalha em uma pasta
3. **🔍 Navegação** - estrutura clara e lógica
4. **♻️ Reutilização** - componentes em pasta própria
5. **📈 Escalabilidade** - projeto cresce organizadamente

---

## **🎯 Passo 11: Props e Estado**

### **❌ ANTES (Dados fixos):**
```tsx
<div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
  <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#FEF3C7' }}>
    <div style={{ fontSize: '30px' }}>⚡</div>
    <h3>Gaming</h3>
  </div>
  <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#E9D5FF' }}>
    <div style={{ fontSize: '30px' }}>★</div>
    <h3>Design</h3>
  </div>
  {/* mais hobbies... */}
</div>
```

### **✅ DEPOIS (Dados dinâmicos):**
```tsx
// Dados em array
const hobbies = [
  { id: 1, name: 'Gaming', icon: '⚡', color: '#FEF3C7' },
  { id: 2, name: 'Design', icon: '★', color: '#E9D5FF' },
  { id: 3, name: 'Natureza', icon: '●', color: '#D1FAE5' },
  { id: 4, name: 'Culinária', icon: '▲', color: '#FEE2E2' }
];

// Componente HobbyCard
interface HobbyCardProps {
  hobby: {
    id: number;
    name: string;
    icon: string;
    color: string;
  };
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  return (
    <div className="hobby-card" style={{ backgroundColor: hobby.color }}>
      <div className="hobby-icon">{hobby.icon}</div>
      <h3 className="hobby-name">{hobby.name}</h3>
    </div>
  );
}

// Uso no componente principal
<div className="hobbies-grid">
  {hobbies.map(hobby => (
    <HobbyCard key={hobby.id} hobby={hobby} />
  ))}
</div>
```

### **🎯 VANTAGENS:**
1. **📊 Dados dinâmicos** - fácil adicionar/remover hobbies
2. **🔧 Manutenção** - mudar dados em um lugar só
3. **♻️ Reutilização** - componente funciona com qualquer hobby
4. **🧪 Testabilidade** - testar com dados diferentes
5. **📱 Interatividade** - fácil adicionar cliques, hover, etc.

---

## **📈 Resumo das Vantagens**

### **🎨 CSS Classes:**
- **Antes:** 200+ linhas de CSS inline
- **Depois:** 50 linhas de CSS organizado
- **Ganho:** 75% menos código, 100% mais manutenível

### **🧩 Componentes:**
- **Antes:** 3 seções repetidas (90 linhas)
- **Depois:** 1 componente reutilizável (20 linhas)
- **Ganho:** 70% menos código, infinitamente reutilizável

### **📁 Estrutura:**
- **Antes:** 1 arquivo gigante (500+ linhas)
- **Depois:** 6 arquivos organizados (50 linhas cada)
- **Ganho:** 90% mais organizado, 100% mais escalável

### **🎯 Props e Estado:**
- **Antes:** 4 hobbies fixos (80 linhas)
- **Depois:** Array dinâmico (20 linhas)
- **Ganho:** 75% menos código, 100% mais flexível

---

## **🚀 Próximos Passos**

1. **Implementar Passo 8** - CSS Classes
2. **Criar componentes** reutilizáveis
3. **Organizar estrutura** de pastas
4. **Adicionar props** dinâmicas
5. **Testar funcionalidades** e responsividade

Cada passo deve ser implementado gradualmente, mostrando o "antes e depois" para o aluno entender as vantagens de cada refatoração.
