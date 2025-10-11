# ⚡ Aula 1: Meu Primeiro Site Bonito

## 🎯 Objetivo da Aula
Criar seu primeiro site bonito e responsivo, aprendendo os fundamentos de HTML e CSS de forma visual e divertida.

## ⚡ O que vamos criar
Um site pessoal com:
- Cabeçalho com seu nome
- Seção sobre você
- Galeria de fotos
- Rodapé estilizado
- Cores e animações bonitas

## 📖 O que vamos aprender
- **HTML**: Estrutura de uma página web
- **CSS Inline**: Estilização básica e didática
- **React**: Componentes e JSX
- **Imagens**: Como adicionar e otimizar fotos
- **Layout**: Posicionamento e espaçamento
- **Cores**: Paleta de cores e design visual

## 🛠️ Preparação do Ambiente

### **Passo 1: Instalar o Node.js**
1. Acesse [nodejs.org](https://nodejs.org)
2. Baixe a versão LTS (recomendada)
3. Instale seguindo as instruções
4. Abra o terminal e teste: `node --version`

### **Passo 2: Criar o Projeto Next.js**
1. Abra o terminal
2. Navegue até a pasta onde quer criar o projeto:
   ```bash
   cd /caminho/para/sua/pasta
   ```
3. Crie o projeto Next.js:
   ```bash
   npx create-next-app@latest meu-primeiro-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   ```
4. Entre na pasta do projeto:
   ```bash
   cd meu-primeiro-site
   ```

### **Passo 3: Abrir o Projeto no VS Code**
1. Abra o VS Code
2. Clique em "File" → "Open Folder"
3. Selecione a pasta `meu-primeiro-site`
4. Pronto! Agora você está pronto para programar

#### **💡 Dica Importante:**
Não se preocupe com extensões agora! Vamos instalar apenas o que precisarmos conforme formos avançando no curso. O VS Code já vem com tudo que precisamos para começar.

#### **🌍 Lembre-se: Nomenclatura em Inglês**
- **SEMPRE use inglês** para nomes de variáveis, funções e componentes
- **NUNCA use português** no código
- **Comentários em português** para facilitar o aprendizado
- **Exemplo**: `const [currentLesson, setCurrentLesson]` ✅ | `const [aulaAtual, setAulaAtual]` ❌

### **Passo 4: Executar o Projeto**
1. No terminal, execute:
   ```bash
   npm run dev
   ```
2. Abra o navegador em: `http://localhost:3000`
3. Você deve ver a página inicial do Next.js

### **Passo 5: Explorar a Estrutura**
Abra o VS Code na pasta do projeto e explore:
- `src/app/page.tsx` - Página principal
- `src/app/layout.tsx` - Layout geral
- `src/app/globals.css` - Estilos globais
- `package.json` - Dependências do projeto

### **🔧 Solução de Problemas**

#### **Se o comando `npx` não funcionar:**
```bash
# Instale o npm globalmente primeiro
npm install -g npm@latest
```

#### **Se der erro de permissão:**
```bash
# No Windows (PowerShell como administrador)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# No Mac/Linux
sudo chown -R $(whoami) ~/.npm
```

#### **Se o projeto não abrir no navegador:**
1. Verifique se a porta 3000 está livre
2. Tente uma porta diferente: `npm run dev -- -p 3001`
3. Acesse: `http://localhost:3001`

#### **Se der erro de dependências:**
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### **✅ Verificação Final**
Antes de continuar, certifique-se de que:
- [ ] Node.js está instalado (`node --version`)
- [ ] O projeto foi criado com sucesso
- [ ] O servidor está rodando (`npm run dev`)
- [ ] A página abre no navegador
- [ ] As extensões do VS Code estão instaladas

## 📝 Passo a Passo

### **Passo 1: Limpar o arquivo inicial**

Vamos começar do zero! Abra o arquivo `src/app/page.tsx` e substitua todo o conteúdo por:

```tsx
export default function Home() {
  return (
    <div>
      <h1>Olá! Este é meu primeiro site!</h1>
    </div>
  );
}
```

**🎯 O que aconteceu?**
- Criamos nossa primeira página React
- O `export default` significa "esta é a página principal"
- O `return` mostra o que aparece na tela
- **Nomenclatura em inglês**: `Home` é o nome do componente

### **Passo 2: Criar o container principal**

Vamos começar criando a estrutura básica do nosso site. Substitua o conteúdo do arquivo `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <div style={{ backgroundColor: '#3B82F6', minHeight: '100vh', padding: '20px' }}>
      <h1>Olá! Este é meu primeiro site!</h1>
    </div>
  );
}
```

**🎯 O que fizemos?**
- **`<div>`**: Container principal da página
- **`backgroundColor: '#3B82F6'`**: Cor de fundo azul
- **`minHeight: '100vh'`**: Altura mínima de 100% da tela
- **`padding: '20px'`**: Espaçamento interno de 20 pixels

#### **📚 Entendendo o CSS Inline**

Agora que usamos CSS inline pela primeira vez, vamos entender como funciona:

**Estrutura básica do CSS inline:**
```tsx
<div style={{ propriedade: 'valor' }}>
```

**Explicação das propriedades que usamos:**
- **`backgroundColor: '#3B82F6'`**: 
  - Define a cor de fundo do elemento
  - `#3B82F6` é um código hexadecimal (azul)
  - Cores hexadecimais começam com `#` e têm 6 caracteres
- **`minHeight: '100vh'`**: 
  - Define a altura mínima do elemento
  - `100vh` significa 100% da altura da tela (viewport height)
  - `vh` é uma unidade de medida do CSS
- **`padding: '20px'`**: 
  - Define o espaçamento interno do elemento
  - `20px` significa 20 pixels
  - `px` é a unidade de medida em pixels

**💡 Dica importante:**
- CSS inline usa **chaves duplas** `{{}}` porque está dentro de JavaScript
- A primeira chave `{` é do JSX
- A segunda chave `{` é do objeto JavaScript
- Cada propriedade é separada por vírgula
- Valores de texto ficam entre aspas simples `'valor'`

### **Passo 3: Adicionar o cabeçalho**

Agora vamos criar o cabeçalho com seu nome:

```tsx
export default function Home() {
  return (
    <div style={{ backgroundColor: '#3B82F6', minHeight: '100vh', padding: '20px' }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '10px' }}>
          Olá! Eu sou [SEU NOME]
        </h1>
        <p style={{ color: '#DBEAFE', fontSize: '18px' }}>
          Desenvolvedor em formação ⚡
        </p>
      </header>
    </div>
  );
}
```

**🎯 O que aprendemos?**
- **`<header>`**: Tag semântica para cabeçalho
- **`textAlign: 'center'`**: Centraliza o texto
- **`marginBottom: '40px'`**: Espaçamento inferior
- **`<h1>`**: Título principal com `color: 'white'`
- **`<p>`**: Parágrafo com cor azul claro `#DBEAFE`

### **Passo 4: Criar a seção "Sobre Mim"**

Agora vamos adicionar uma seção com informações sobre você:

```tsx
export default function Home() {
  return (
    <div style={{ backgroundColor: '#3B82F6', minHeight: '100vh', padding: '20px' }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '10px' }}>
          Olá! Eu sou [SEU NOME]
        </h1>
        <p style={{ color: '#DBEAFE', fontSize: '18px' }}>
          Desenvolvedor em formação ⚡
        </p>
      </header>

      {/* Conteúdo principal */}
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '15px' }}>
            Sobre Mim
          </h2>
          <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
            Cada dia é uma nova descoberta no mundo da programação web.
          </p>
        </section>
      </main>
    </div>
  );
}
```

**🎯 O que aprendemos?**
- **`<main>`**: Conteúdo principal com `maxWidth: '800px'` e `margin: '0 auto'` (centraliza)
- **`<section>`**: Seção de conteúdo com fundo branco
- **`backgroundColor: 'white'`**: Fundo branco
- **`padding: '30px'`**: Espaçamento interno
- **`borderRadius: '8px'`**: Bordas arredondadas
- **`<h2>`**: Subtítulo com cor cinza escuro
- **`lineHeight: '1.6'`**: Espaçamento entre linhas do texto

### **Passo 5: Adicionar galeria de fotos**

Agora vamos criar uma galeria com suas fotos. Primeiro, adicione o import do Image no topo do arquivo:

```tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#3B82F6', minHeight: '100vh', padding: '20px' }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '10px' }}>
          Olá! Eu sou [SEU NOME]
        </h1>
        <p style={{ color: '#DBEAFE', fontSize: '18px' }}>
          Desenvolvedor em formação ⚡
        </p>
      </header>

      {/* Conteúdo principal */}
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '15px' }}>
            Sobre Mim
          </h2>
          <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
            Cada dia é uma nova descoberta no mundo da programação web.
          </p>
        </section>

        {/* Galeria de fotos */}
        <section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '20px' }}>
            Minhas Fotos
          </h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ width: '200px', height: '150px', position: 'relative', border: '2px solid #EF4444' }}>
              <Image 
                src="/images/photo1.jpg" 
                alt="Lago Moraine, Banff, Canadá" 
                width={200}
                height={150}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                color: 'white', 
                padding: '5px', 
                textAlign: 'center' 
              }}>
                ● Lago Moraine
              </div>
            </div>
            <div style={{ width: '200px', height: '150px', position: 'relative', border: '2px solid #10B981' }}>
              <Image 
                src="/images/photo2.jpg" 
                alt="Paisagem natural" 
                width={200}
                height={150}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                color: 'white', 
                padding: '5px', 
                textAlign: 'center' 
              }}>
                ● Paisagem
              </div>
            </div>
            <div style={{ width: '200px', height: '150px', position: 'relative', border: '2px solid #3B82F6' }}>
              <Image 
                src="/images/photo3.jpg" 
                alt="Manhã ensolarada" 
                width={200}
                height={150}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                color: 'white', 
                padding: '5px', 
                textAlign: 'center' 
              }}>
                ● Manhã
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
```

**🎯 O que aprendemos?**
- **`import Image from 'next/image'`**: Importa o componente otimizado do Next.js
- **`display: 'flex'`**: Layout flexbox (elementos em linha)
- **`gap: '15px'`**: Espaçamento entre elementos
- **`flexWrap: 'wrap'`**: Quebra linha quando necessário
- **`position: 'relative'`**: Para posicionar elementos filhos
- **`<Image>`**: Componente otimizado com `src`, `alt`, `width`, `height`
- **`position: 'absolute'`**: Sobreposição de texto sobre a imagem
- **`backgroundColor: 'rgba(0,0,0,0.7)'`**: Fundo preto com 70% de transparência

### **Passo 6: Adicionar seção de hobbies**

Agora vamos criar cards coloridos para seus hobbies:

```tsx
// Adicione esta seção dentro do <main>, após a galeria de fotos:

        {/* Seção de hobbies */}
        <section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '20px' }}>
            Meus Hobbies
          </h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#FEF3C7', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚡</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Gaming</h3>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#E9D5FF', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>★</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Design</h3>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#D1FAE5', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>●</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Natureza</h3>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#FEE2E2', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>▲</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Culinária</h3>
            </div>
          </div>
        </section>
```

**🎯 O que aprendemos?**
- **Cards coloridos**: Cada hobby tem uma cor diferente
- **`textAlign: 'center'`**: Centraliza o conteúdo
- **`width: '150px'`**: Largura fixa para os cards
- **`fontSize: '30px'`**: Ícones grandes
- **`fontWeight: 'bold'`**: Texto em negrito

### **Passo 7: Adicionar o rodapé**

Por último, vamos criar o rodapé da página:

```tsx
// Adicione antes do fechamento do </div> principal:

      {/* Rodapé */}
      <footer style={{ textAlign: 'center', color: 'white', marginTop: '40px' }}>
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
        <div style={{ marginTop: '15px' }}>
          <span style={{ margin: '0 10px', color: '#DBEAFE' }}>⚡</span>
          <span style={{ margin: '0 10px', color: '#E9D5FF' }}>★</span>
          <span style={{ margin: '0 10px', color: '#FECACA' }}>●</span>
        </div>
      </footer>
```

**🎯 O que aprendemos?**
- **`<footer>`**: Tag semântica para rodapé
- **`marginTop: '40px'`**: Espaçamento superior
- **`<span>`**: Tag inline para ícones
- **`margin: '0 10px'`**: Espaçamento horizontal entre ícones

**🎯 O que aprendemos?**
- **JSX**: Mistura HTML com JavaScript
- **CSS Inline**: Estilos diretos no JSX com `style={{}}`
- **Estrutura semântica**: header, main, section, footer
- **Comentários**: `{/* */}` para anotar o código
- **Cores hexadecimais**: #3B82F6, #DBEAFE, etc.
- **Layout flexbox**: display: 'flex', flexWrap: 'wrap'


### **Passo 3: Personalizar com suas informações**

Agora é sua vez! Substitua:
- `[SEU NOME]` pelo seu nome
- Adicione informações sobre você
- Mude as cores hexadecimais se quiser
- Adicione suas próprias fotos na pasta `public/images/`

### **Passo 4: Entender o CSS Inline**

Vamos aprender como funciona o CSS inline:

```tsx
// Estrutura básica:
<div style={{ propriedade: 'valor' }}>

// Múltiplas propriedades:
<div style={{ 
  backgroundColor: '#3B82F6', 
  padding: '20px',
  color: 'white'
}}>

// Cores hexadecimais:
backgroundColor: '#3B82F6'  // Azul
color: '#DBEAFE'           // Azul claro
backgroundColor: '#FEF3C7' // Amarelo claro
```

**🎯 O que aconteceu?**
- **animate-bounce**: Animação de quique
- **hover:shadow-2xl**: Sombra maior ao passar o mouse
- **transition-shadow**: Transição suave da sombra

## 🎨 Experimente!

### **Desafios Criativos:**
1. **Mude as cores** - Experimente diferentes gradientes
2. **Adicione mais seções** - Hobbies, projetos, contato
3. **Personalize as fontes** - Use fontes diferentes
4. **Adicione ícones** - Use ícones Unicode simples (⚡, ★, ●, ▲)

### **💡 Dica sobre Ícones:**
- **Use ícones Unicode simples** - ⚡, ★, ●, ▲, 📷
- **Evite emojis complexos** - Podem não funcionar em todos os sistemas
- **Mantenha consistência** - Use o mesmo estilo de ícones

### **Cores que funcionam bem:**
- `from-pink-400 to-red-500` (Rosa para vermelho)
- `from-green-400 to-blue-500` (Verde para azul)
- `from-yellow-400 to-orange-500` (Amarelo para laranja)
- `from-purple-400 to-pink-500` (Roxo para rosa)

## 🔍 O que aprendemos hoje?

### **Conceitos Técnicos:**
- **HTML**: Estrutura de páginas web
- **CSS**: Estilização e layout
- **JSX**: Mistura HTML com JavaScript
- **Componentes React**: Blocos reutilizáveis
- **Tailwind CSS**: Estilização rápida
- **Nomenclatura em inglês**: Variáveis e funções em inglês

### **Habilidades:**
- Criar estrutura semântica
- Usar classes CSS
- Personalizar design
- Adicionar animações
- Fazer sites responsivos
- Usar ícones Unicode compatíveis

## 🎯 Próxima Aula
Na próxima aula vamos criar um **Jogo da Memória Visual** e aprender sobre CSS Grid e Flexbox!

## 💡 Dicas do Professor

### **Para manter o interesse:**
- Deixe escolher as cores favoritas
- Permita adicionar informações pessoais
- Celebre cada mudança visual
- "Olha como ficou bonito!"

### **Se tiver dificuldades:**
- Explique que HTML é como a estrutura de uma casa
- CSS é como a decoração e pintura
- JSX é como misturar as duas coisas
- "Vamos fazer juntos!"

### **Para nomenclatura em inglês:**
- **Explique a regra** - "Sempre inglês no código, português nos comentários"
- **Dê exemplos** - `currentLesson` ✅ | `aulaAtual` ❌
- **Mostre benefícios** - "Funciona em qualquer lugar do mundo"
- **Pratique junto** - "Vamos pensar em inglês para o nome desta variável"

## 🎉 Parabéns!

Você criou seu primeiro site! ⚡
- É responsivo (funciona no celular)
- Tem animações bonitas
- É personalizado com suas informações
- Usa as melhores práticas de design
- Tem ícones compatíveis e funcionais
- Segue nomenclatura profissional em inglês

**Na próxima aula vamos criar um jogo! ⚡**
