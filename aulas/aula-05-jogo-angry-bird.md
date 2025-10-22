# 🐦 Aula 5: Jogo Angry Bird com CSS Avançado

## 🎯 Objetivo da Aula
Criar um pássaro Angry Bird completo usando **CSS puro**, aprendendo conceitos avançados como **CSS Variables**, **Pseudo-elementos**, **Animações**, **Transformações** e **Posicionamento absoluto**.

## 🎮 O que vamos criar
Um pássaro Angry Bird animado com:
- **Desenho detalhado** usando apenas CSS
- **Animações fluidas** de entrada e movimento
- **Pseudo-elementos** para detalhes (olhos, bico, penas)
- **CSS Variables** para cores consistentes
- **Responsividade** para diferentes telas
- **Interatividade** com hover e click

## 📚 O que vamos aprender
- **CSS Variables**: Cores reutilizáveis e manutenção
- **Pseudo-elementos**: `::before` e `::after` para detalhes
- **Posicionamento absoluto**: Controle preciso de elementos
- **Transformações**: `translate`, `rotate`, `scale`
- **Animações CSS**: `@keyframes` e `animation`
- **Seletores avançados**: Hierarquia e especificidade
- **Box-shadow**: Sombras e profundidade
- **Border-radius**: Formas orgânicas
- **Z-index**: Camadas e sobreposição
- **Responsive design**: Media queries
- **Performance**: Otimização de animações

## 🛠️ Tecnologias Utilizadas
- **Next.js 14**: Framework React com App Router
- **React 18**: Componentes funcionais
- **CSS Modules**: Estilos com escopo local
- **CSS Puro**: Sem bibliotecas externas
- **TypeScript**: Tipagem estática

## 🧱 Arquitetura (SOLID)
- **Componente Principal**: `AngryBird.tsx` (SRP: renderiza o pássaro)
- **CSS Modules**: `angry-bird.module.css` (SRP: estilos específicos)
- **Estrutura semântica**: HTML semântico para acessibilidade
- **Separação de responsabilidades**: CSS separado do JavaScript

### 📁 Estrutura de Pastas
```
src/aulas/aula-05/
├── AngryBird.tsx (componente principal)
├── angry-bird.module.css (estilos CSS)
└── page.tsx (em src/app/aula-05/page.tsx)
```

## 🧰 Preparação do Ambiente
1) Garantir dependências: Next.js e TypeScript já instalados
2) Criar rota: `src/app/aula-05/page.tsx`
3) Criar componente principal: `src/aulas/aula-05/AngryBird.tsx`
4) **CSS Modules** para estilos com escopo local
5) **Estrutura semântica** para acessibilidade
6) Padrão de imports absolutos `@/aulas/aula-05/...`

## 🧩 Game Design
- **Pássaro realista** com todos os detalhes
- **Animações suaves** de entrada e movimento
- **Cores vibrantes** do Angry Bird original
- **Responsividade** para mobile e desktop
- **Interatividade** com hover e click

## 📝 Passo a Passo (Evolutivo)

### Passo 1: Estrutura básica e CSS Variables
- Criar `src/app/aula-05/page.tsx` **limpa** (apenas importa AngryBird)
- Criar `src/aulas/aula-05/AngryBird.tsx` com estrutura básica
- **CSS Variables** para cores consistentes
- **Container** com gradiente de fundo
- Explicar CSS Variables, estrutura semântica e CSS Modules

```tsx
// src/app/aula-05/page.tsx
import AngryBird from '@/aulas/aula-05/AngryBird';

export default function Aula05Page() {
  return <AngryBird />;
}

// src/aulas/aula-05/AngryBird.tsx
'use client';

import styles from './angry-bird.module.css';

export default function AngryBird(){
  return (
    <main className={styles.container}>
      <h1>🐦 Angry Bird</h1>
    </main>
  )
}
```

```css
/* src/aulas/aula-05/angry-bird.module.css */
:root {
  --primary: #ec0602;
  --secondary: #e9a529;
  --reflection: #fff6;
}

.container {
  min-height: 100vh;
  background: linear-gradient(135deg, #87CEEB 0%, #98FB98 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  padding: 2rem;
}
```

**📚 Conceito Detalhado: CSS Variables**

**O que são CSS Variables?**
CSS Variables (ou Custom Properties) são valores que você define uma vez e pode reutilizar em todo o CSS.

**Como funcionam?**
```css
:root {
  --primary: #ec0602;
  --secondary: #e9a529;
}

.elemento {
  background-color: var(--primary);
  color: var(--secondary);
}
```

**Para que servem?**
- **Consistência**: Mesmas cores em todo o projeto
- **Manutenção**: Mudar uma cor em um lugar só
- **Temas**: Fácil troca de paleta de cores
- **Reutilização**: Evita repetição de código

**Quando usar?**
- Sempre que você tem cores que se repetem
- Para criar temas (claro/escuro)
- Para facilitar manutenção
- Para consistência visual

### Passo 2: Corpo do pássaro e posicionamento
- **Estrutura HTML** semântica para o pássaro
- **Posicionamento absoluto** para controle preciso
- **Border-radius** para formas orgânicas
- **Box-shadow** para profundidade
- Explicar posicionamento, transformações e formas

```tsx
// src/aulas/aula-05/AngryBird.tsx
export default function AngryBird(){
  return (
    <main className={styles.container}>
      <section className={styles.red_bird}>
        <section className={styles.body}></section>
      </section>
    </main>
  )
}
```

```css
.red_bird {
  position: relative;
  height: 400px;
  width: 300px;
}

.body {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  border-radius: 45%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}
```

**📚 Conceito Detalhado: Posicionamento Absoluto**

**O que é posicionamento absoluto?**
Remove o elemento do fluxo normal e posiciona em relação ao elemento pai mais próximo com `position: relative`.

**Como funciona?**
```css
.pai {
  position: relative; /* Cria contexto de posicionamento */
}

.filho {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

**Para que serve?**
- **Controle preciso**: Posicionar exatamente onde quer
- **Sobreposição**: Colocar elementos uns sobre outros
- **Layouts complexos**: Criar designs avançados
- **Animações**: Mover elementos livremente

**Quando usar?**
- Para posicionar elementos sobre outros
- Para criar layouts complexos
- Para animações e transições
- Para elementos decorativos

### Passo 3: Olhos e expressão
- **Pseudo-elementos** para detalhes dos olhos
- **Z-index** para camadas
- **Transformações** para rotação e posicionamento
- **Seletores avançados** para hierarquia
- Explicar pseudo-elementos, z-index e seletores

```tsx
// Adicionar olhos ao body
<section className={styles.body}>
  <div className={styles.left_eye}></div>
  <div className={styles.right_eye}></div>
</section>
```

```css
.left_eye,
.right_eye {
  position: absolute;
  top: 16%;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border: 4px solid #000;
  border-radius: 50%;
  z-index: 100;
}

.left_eye {
  left: 45%;
  transform: translateX(-100%);
}

.right_eye {
  right: 45%;
  transform: translateX(100%);
}

.left_eye::before,
.right_eye::before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background-color: #000;
  border-radius: 50%;
  outline: 4px solid var(--secondary);
}
```

**📚 Conceito Detalhado: Pseudo-elementos**

**O que são pseudo-elementos?**
São elementos virtuais criados com CSS que não existem no HTML, mas podem ser estilizados.

**Como funcionam?**
```css
.elemento::before {
  content: '';
  /* estilos */
}

.elemento::after {
  content: '';
  /* estilos */
}
```

**Para que servem?**
- **Detalhes decorativos**: Ícones, setas, formas
- **Efeitos visuais**: Sombras, bordas, gradientes
- **Conteúdo adicional**: Texto, símbolos
- **Layout**: Espaçamento, divisores

**Quando usar?**
- Para adicionar detalhes sem HTML
- Para criar efeitos visuais
- Para elementos decorativos
- Para otimizar performance (menos HTML)

### Passo 4: Bico e detalhes faciais
- **Bico triangular** com transformações
- **Sobrancelhas** para expressão
- **Reflexos** com pseudo-elementos
- **Gradientes** para profundidade
- Explicar transformações, gradientes e detalhes

```tsx
// Adicionar bico e sobrancelhas
<section className={styles.body}>
  <div className={styles.left_eyebrow}></div>
  <div className={styles.left_eye}></div>
  <div className={styles.right_eyebrow}></div>
  <div className={styles.right_eye}></div>
  <div className={styles.beak}></div>
</section>
```

```css
.beak {
  position: absolute;
  top: 31%;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 70px;
  height: 70px;
  background-color: var(--secondary);
  border-radius: 8px;
  box-shadow: 0 2px 1px 2px #0007;
  z-index: 100;
}

.left_eyebrow,
.right_eyebrow {
  position: absolute;
  top: 12%;
  width: 80px;
  height: 30px;
  background-color: #000;
  z-index: 100;
}

.left_eyebrow {
  left: 45%;
  transform: translateX(-100%) rotate(15deg);
  border-radius: 0 40% 5px 0;
}

.right_eyebrow {
  right: 45%;
  transform: translateX(100%) rotate(-15deg);
  border-radius: 40% 0 0 5px;
}
```

**📚 Conceito Detalhado: Transformações**

**O que são transformações?**
Modificam a aparência e posição de elementos sem afetar o layout normal.

**Tipos de transformação:**
```css
.elemento {
  transform: translateX(50px);    /* Move horizontalmente */
  transform: translateY(30px);   /* Move verticalmente */
  transform: rotate(45deg);      /* Rotaciona */
  transform: scale(1.5);         /* Aumenta tamanho */
  transform: skew(10deg);       /* Inclina */
}
```

**Para que servem?**
- **Animações**: Movimento suave
- **Posicionamento**: Ajuste fino
- **Efeitos visuais**: Rotação, escala
- **Layout**: Criação de formas

**Quando usar?**
- Para animações e transições
- Para ajustar posicionamento
- Para criar efeitos visuais
- Para responsividade

### Passo 5: Barriga e reflexos
- **Barriga** com gradiente radial
- **Reflexos** com pseudo-elementos
- **Sombras** para profundidade
- **Sobreposição** com z-index
- Explicar gradientes, sombras e camadas

```tsx
// Adicionar barriga
<section className={styles.red_bird}>
  <section className={styles.body}>
    {/* olhos e bico */}
  </section>
  <section className={styles.belly}></section>
</section>
```

```css
.belly {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  width: 70%;
  height: 60%;
  background-image: radial-gradient(#ffcbb5, #c68c79);
  border-radius: 50%;
  box-shadow: 0 0 2px 5px #0007;
}

.body::before {
  position: absolute;
  content: '';
  right: 5px;
  top: 150px;
  height: 100px;
  width: 15px;
  background-color: var(--reflection);
  border-radius: 50%;
}
```

**📚 Conceito Detalhado: Gradientes**

**O que são gradientes?**
Transições suaves entre duas ou mais cores.

**Tipos de gradiente:**
```css
/* Linear */
background: linear-gradient(45deg, #ff0000, #0000ff);

/* Radial */
background: radial-gradient(circle, #ff0000, #0000ff);

/* Cônico */
background: conic-gradient(#ff0000, #0000ff);
```

**Para que servem?**
- **Profundidade**: Criar volume
- **Beleza**: Efeitos visuais
- **Realismo**: Simular luz e sombra
- **Modernidade**: Design contemporâneo

**Quando usar?**
- Para criar profundidade
- Para efeitos visuais
- Para simular materiais
- Para design moderno

### Passo 6: Penas e detalhes finais
- **Crista** com animação
- **Detalhes** das penas
- **Sombra** do pássaro
- **Refinamentos** visuais
- Explicar animações, detalhes e polimento

```tsx
// Adicionar crista
<section className={styles.body}>
  <div className={styles.crown}></div>
  {/* outros elementos */}
</section>
```

```css
.crown {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -74%) rotate(-35deg);
  width: 45px;
  height: 100px;
  background-color: var(--primary);
  border-radius: 100%;
  border-right: 5px solid #fff9;
  transform-origin: bottom;
  animation: crown 2s ease-in-out infinite;
}

@keyframes crown {
  20% { transform: translate(-50%, -74%) rotate(-10deg); }
  50% { transform: translate(-50%, -74%) rotate(-35deg); }
  70% { transform: translate(-50%, -74%) rotate(-10deg); }
}
```

**📚 Conceito Detalhado: Animações CSS**

**O que são animações CSS?**
Criam movimento e transições suaves entre estados.

**Como funcionam?**
```css
@keyframes nomeAnimacao {
  0% { /* estado inicial */ }
  50% { /* estado intermediário */ }
  100% { /* estado final */ }
}

.elemento {
  animation: nomeAnimacao 2s ease-in-out infinite;
}
```

**Para que servem?**
- **Engajamento**: Chamar atenção
- **Feedback**: Resposta visual
- **Beleza**: Efeitos visuais
- **UX**: Melhor experiência

**Quando usar?**
- Para feedback visual
- Para chamar atenção
- Para melhorar UX
- Para efeitos especiais

### Passo 7: Animação de entrada
- **Animação** de entrada do pássaro
- **Timing** e easing
- **Performance** das animações
- **Responsividade** mobile
- Explicar performance, timing e responsividade

```css
.red_bird {
  position: relative;
  height: 400px;
  width: 300px;
  animation: come-in 2s ease-in-out;
}

@keyframes come-in {
  0% { transform: translateY(-100%) scale(.3); }
  15% { transform: translateY(0%) scale(.3); }
  30% { transform: translateY(-40%) scale(.3); }
  45% { transform: translateY(0%) scale(.3); }
  55% { transform: translateY(-20%) scale(.3); }
  65% { transform: translateY(0%) scale(.3); }
  70% { transform: translateY(-50%) scale(.3); }
}

/* Responsividade */
@media (max-width: 768px) {
  .red_bird {
    height: 300px;
    width: 225px;
  }
}
```

**📚 Conceito Detalhado: Performance de Animações**

**O que afeta a performance?**
- **Propriedades animadas**: `transform` e `opacity` são mais rápidas
- **Frequência**: 60fps é o ideal
- **Duração**: Animações muito longas cansam
- **Easing**: `ease-in-out` é mais natural

**Como otimizar?**
```css
/* ✅ Bom - usa transform */
.elemento {
  transform: translateX(100px);
}

/* ❌ Ruim - usa propriedades que causam reflow */
.elemento {
  left: 100px;
  width: 200px;
}
```

**Para que serve?**
- **Fluidez**: Animações suaves
- **Bateria**: Menos consumo
- **UX**: Melhor experiência
- **Profissionalismo**: Qualidade visual

### Passo 8: Interatividade e polimento
- **Hover effects** nos elementos
- **Click animations** para feedback
- **Acessibilidade** com ARIA
- **Polimento** final
- Explicar interatividade, acessibilidade e polimento

```tsx
// Adicionar interatividade
export default function AngryBird(){
  const [isClicked, setIsClicked] = useState(false);

  const handleBirdClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <main className={styles.container}>
      <section 
        className={`${styles.red_bird} ${isClicked ? styles.clicked : ''}`}
        onClick={handleBirdClick}
        role="button"
        tabIndex={0}
        aria-label="Pássaro Angry Bird clicável"
      >
        {/* estrutura do pássaro */}
      </section>
    </main>
  )
}
```

```css
.red_bird {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.red_bird:hover {
  transform: scale(1.05);
}

.red_bird.clicked {
  animation: bounce 0.5s ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
```

**📚 Conceito Detalhado: Acessibilidade**

**O que é acessibilidade?**
Tornar o conteúdo acessível para pessoas com deficiências.

**Como implementar?**
```tsx
// ARIA labels
<div role="button" aria-label="Descrição do botão">

// Navegação por teclado
<div tabIndex={0} onKeyDown={handleKeyPress}>

// Contraste adequado
color: #000; /* texto escuro em fundo claro */
```

**Para que serve?**
- **Inclusão**: Todos podem usar
- **SEO**: Melhor indexação
- **Legal**: Cumprir leis
- **Ética**: Direito de acesso

**Quando usar?**
- Sempre em elementos interativos
- Em formulários
- Em navegação
- Em conteúdo importante

## 🏗️ Princípios SOLID Aplicados
- **SRP**: `AngryBird` renderiza, CSS estiliza
- **OCP**: Fácil adicionar novos elementos sem quebrar
- **LSP**: Estrutura HTML substituível
- **ISP**: CSS específico para cada elemento
- **DIP**: Depende de abstrações (CSS Variables)

## ✅ Critérios de Qualidade
- Pássaro visualmente impressionante e detalhado
- Animações fluidas e performáticas
- Código CSS organizado e comentado
- Responsivo em mobile e desktop
- Acessível com ARIA labels
- Performance otimizada
- **Estrutura padronizada**: Componente principal + página limpa (igual aulas anteriores)

## 🚀 Extensões (Opcional)
- Adicionar mais pássaros (amarelo, azul, preto)
- Sistema de física com CSS
- Animações de voo mais complexas
- Interação com mouse/touch
- Som e efeitos sonoros
- Modo escuro/claro
- Exportar como GIF animado

## 🔍 O que aprendemos hoje?

### **Conceitos Técnicos:**
- **CSS Variables**: Cores reutilizáveis e manutenção
- **Pseudo-elementos**: `::before` e `::after` para detalhes
- **Posicionamento absoluto**: Controle preciso de elementos
- **Transformações**: `translate`, `rotate`, `scale`
- **Animações CSS**: `@keyframes` e `animation`
- **Seletores avançados**: Hierarquia e especificidade
- **Box-shadow**: Sombras e profundidade
- **Border-radius**: Formas orgânicas
- **Z-index**: Camadas e sobreposição
- **Responsive design**: Media queries
- **Performance**: Otimização de animações

### **Habilidades:**
- Criar desenhos complexos com CSS
- Animar elementos de forma fluida
- Organizar código CSS de forma profissional
- Implementar responsividade
- Otimizar performance
- Tornar acessível

## 🎯 Próxima Aula
Na próxima aula vamos criar um **Jogo da Velha com Roteamento** e aprender sobre navegação no Next.js!

## 💡 Dicas do Professor

### **Para manter o interesse:**
- Deixe personalizar as cores do pássaro
- Permita adicionar novos detalhes
- Celebre cada animação criada
- "Olha como ficou realista!"

### **Para o aprendizado:**
- Explique cada propriedade CSS
- Mostre o resultado em tempo real
- Incentive experimentação
- "Tente mudar essa cor e veja o que acontece!"
