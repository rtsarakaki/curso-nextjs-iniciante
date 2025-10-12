# ⚡ Aula 1: Meu Primeiro Site Bonito

## 🎯 Objetivo da Aula
Criar seu primeiro site bonito e responsivo, aprendendo os fundamentos de HTML e CSS de forma visual e divertida.

## ⚡ O que vamos criar
**Primeiro**: Um protótipo em HTML/CSS puro para entender os fundamentos
**Depois**: O mesmo site em React/Next.js com componentes modernos

**Estrutura do site:**
- Cabeçalho com seu nome
- Seção sobre você
- Galeria de fotos
- Seção de hobbies
- Rodapé estilizado
- Cores e animações bonitas

## 📖 O que vamos aprender
- **HTML Puro**: Estrutura semântica e tags básicas
- **CSS Puro**: Seletores, propriedades e layout
- **Protótipo**: Como criar um site funcional em HTML/CSS
- **React**: Componentes e JSX
- **CSS Inline**: Estilização básica e didática
- **Imagens**: Como adicionar e otimizar fotos
- **Layout**: Posicionamento e espaçamento
- **Cores**: Paleta de cores e design visual

## 📚 Fundamentos: HTML e CSS Puros

Antes de começar com Next.js, vamos entender os fundamentos criando um protótipo em HTML puro. Isso vai nos ajudar a entender como funciona a estrutura e estilização de uma página web.

### **🎯 O que vamos criar primeiro:**
Um arquivo HTML simples que será nosso protótipo, mostrando exatamente como ficará nosso site final.

### **📁 Estrutura do Protótipo:**
```
projeto/
  index.html          ← Nosso protótipo HTML
  styles.css          ← Estilos CSS separados
  images/             ← Pasta para imagens
```

### **🔧 Passo 0: Criar o protótipo HTML (Evolutivo)**

**1. Criar a pasta do projeto:**
```bash
mkdir my-first-site-prototype
cd my-first-site-prototype
```

### **📝 Etapa 1: Estrutura Básica (Sem Conteúdo)**

**2. Criar o arquivo `index.html` com estrutura básica:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <div>
        <!-- Aqui vamos adicionar o conteúdo -->
    </div>
</body>
</html>
```

**📚 Explicação da Estrutura Básica:**

**`<!DOCTYPE html>`**: Declara que é um documento HTML5
**`<html lang="pt-BR">`**: Define o idioma da página (português brasileiro)
**`<head>`**: Cabeçalho com informações sobre a página (não aparece na tela)
**`<meta charset="UTF-8">`**: Define a codificação de caracteres (suporta acentos)
**`<meta name="viewport">`**: Configura para funcionar bem em celulares
**`<title>`**: Título que aparece na aba do navegador
**`<body>`**: Corpo da página (o que o usuário vê)
**`<div>`**: Container genérico para organizar conteúdo

**3. Testar a estrutura básica:**
- Salve o arquivo
- Abra o `index.html` no navegador
- Você verá uma página em branco (isso é normal!)

### **📝 Etapa 2: Adicionar o Cabeçalho (Header)**

**4. Adicionar o cabeçalho dentro do `<div>`:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <div>
        <header>
            <h1>Olá! Eu sou [SEU NOME]</h1>
            <p>Desenvolvedor em formação ⚡</p>
        </header>
    </div>
</body>
</html>
```

**📚 Explicação do Cabeçalho:**

**`<header>`**: Tag semântica para cabeçalho da página
**`<h1>`**: Título principal (mais importante da página)
**`<p>`**: Parágrafo de texto (subtítulo)

**5. Testar o cabeçalho:**
- Salve o arquivo
- Atualize o navegador
- Você verá o título e subtítulo na tela

### **📝 Etapa 3: Adicionar o Conteúdo Principal (Main)**

**6. Adicionar o conteúdo principal:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <div>
        <header>
            <h1>Olá! Eu sou [SEU NOME]</h1>
            <p>Desenvolvedor em formação ⚡</p>
        </header>

        <main>
            <!-- Aqui vamos adicionar as seções -->
        </main>
    </div>
</body>
</html>
```

**📚 Explicação do Main:**

**`<main>`**: Tag semântica para conteúdo principal da página
**Por que usar**: Indica que aqui está o conteúdo mais importante

**7. Testar o main:**
- Salve o arquivo
- Atualize o navegador
- Ainda não há diferença visual (isso é normal!)

### **📝 Etapa 4: Adicionar Seção "Sobre Mim"**

**8. Adicionar a primeira seção dentro do `<main>`:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <div>
        <header>
            <h1>Olá! Eu sou [SEU NOME]</h1>
            <p>Desenvolvedor em formação ⚡</p>
        </header>

        <main>
            <section>
                <h2>Sobre Mim</h2>
                <p>Olá! Sou um desenvolvedor em formação apaixonado por tecnologia e inovação.</p>
            </section>
        </main>
    </div>
</body>
</html>
```

**📚 Explicação da Seção:**

**`<section>`**: Tag semântica para seção temática
**`<h2>`**: Subtítulo (menos importante que h1)
**`<p>`**: Parágrafo com texto sobre você

**9. Testar a seção:**
- Salve o arquivo
- Atualize o navegador
- Você verá o título "Sobre Mim" e o parágrafo

### **📝 Etapa 5: Adicionar Galeria de Fotos**

**10. Adicionar a seção de galeria:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <div>
        <header>
            <h1>Olá! Eu sou [SEU NOME]</h1>
            <p>Desenvolvedor em formação ⚡</p>
        </header>

        <main>
            <section>
                <h2>Sobre Mim</h2>
                <p>Olá! Sou um desenvolvedor em formação apaixonado por tecnologia e inovação.</p>
            </section>

            <section>
                <h2>Minhas Fotos Favoritas</h2>
                <div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=1" alt="Paisagem 1">
                        <p>● Paisagem 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=2" alt="Paisagem 2">
                        <p>● Paisagem 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=3" alt="Paisagem 3">
                        <p>● Paisagem 3</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>
```

**📚 Explicação da Galeria:**

**`<section>`**: Nova seção para galeria
**`<h2>`**: Título da seção
**`<div>`**: Container para organizar as fotos
**`<div>`**: Container para cada foto
**`<img>`**: Tag para imagem
- **`src`**: Caminho da imagem (URL)
- **`alt`**: Descrição da imagem (importante para acessibilidade)
**`<p>`**: Legenda da foto

**11. Testar a galeria:**
- Salve o arquivo
- Atualize o navegador
- Você verá 3 imagens com legendas

### **📝 Etapa 6: Adicionar Seção de Hobbies**

**12. Adicionar a seção de hobbies:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <div>
        <header>
            <h1>Olá! Eu sou [SEU NOME]</h1>
            <p>Desenvolvedor em formação ⚡</p>
        </header>

        <main>
            <section>
                <h2>Sobre Mim</h2>
                <p>Olá! Sou um desenvolvedor em formação apaixonado por tecnologia e inovação.</p>
            </section>

            <section>
                <h2>Minhas Fotos Favoritas</h2>
                <div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=1" alt="Paisagem 1">
                        <p>● Paisagem 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=2" alt="Paisagem 2">
                        <p>● Paisagem 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=3" alt="Paisagem 3">
                        <p>● Paisagem 3</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Meus Hobbies</h2>
                <div>
                    <div>
                        <span>📚</span>
                        <h3>Ler</h3>
                    </div>
                    <div>
                        <span>🎮</span>
                        <h3>Jogar</h3>
                    </div>
                    <div>
                        <span>🏃</span>
                        <h3>Correr</h3>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>
```

**📚 Explicação dos Hobbies:**

**`<section>`**: Nova seção para hobbies
**`<h2>`**: Título da seção
**`<div>`**: Container para organizar os hobbies
**`<div>`**: Container para cada hobby
**`<span>`**: Tag para texto inline (ícone)
**`<h3>`**: Subtítulo de nível 3 (nome do hobby)

**13. Testar os hobbies:**
- Salve o arquivo
- Atualize o navegador
- Você verá 3 cards com ícones e nomes

### **📝 Etapa 7: Adicionar o Rodapé (Footer)**

**14. Adicionar o rodapé:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <div>
        <header>
            <h1>Olá! Eu sou [SEU NOME]</h1>
            <p>Desenvolvedor em formação ⚡</p>
        </header>

        <main>
            <section>
                <h2>Sobre Mim</h2>
                <p>Olá! Sou um desenvolvedor em formação apaixonado por tecnologia e inovação.</p>
            </section>

            <section>
                <h2>Minhas Fotos Favoritas</h2>
                <div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=1" alt="Paisagem 1">
                        <p>● Paisagem 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=2" alt="Paisagem 2">
                        <p>● Paisagem 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/300?random=3" alt="Paisagem 3">
                        <p>● Paisagem 3</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Meus Hobbies</h2>
                <div>
                    <div>
                        <span>📚</span>
                        <h3>Ler</h3>
                    </div>
                    <div>
                        <span>🎮</span>
                        <h3>Jogar</h3>
                    </div>
                    <div>
                        <span>🏃</span>
                        <h3>Correr</h3>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <p>© 2024 [SEU NOME]. Feito com ❤️ e muito ☕</p>
        </footer>
    </div>
</body>
</html>
```

**📚 Explicação do Rodapé:**

**`<footer>`**: Tag semântica para rodapé da página
**`<p>`**: Parágrafo com informações do rodapé
**`©`**: Símbolo de copyright
**`❤️` e `☕`**: Emojis para deixar mais divertido

**15. Testar o rodapé:**
- Salve o arquivo
- Atualize o navegador
- Você verá o rodapé com as informações

**🎯 Resultado da Estrutura HTML:**
Agora você tem uma página HTML completa com:
- ✅ Estrutura semântica (header, main, sections, footer)
- ✅ Conteúdo organizado em seções
- ✅ Imagens funcionais
- ✅ Hierarquia de títulos (h1, h2, h3)
- ✅ Texto e elementos visuais

### **📝 Etapa 2: Adicionar CSS Básico**

**4. Criar o arquivo `styles.css` e conectar:**
```html
<!-- Adicione esta linha no <head> do index.html -->
<link rel="stylesheet" href="styles.css">
```

**5. Adicionar CSS básico (arquivo `styles.css`):**
```css
/* Reset básico - remove margens padrão */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilo do corpo da página */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Container principal */
div {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #3B82F6;
    min-height: 100vh;
}

/* Cabeçalho */
header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
}

header h1 {
    font-size: 32px;
    margin-bottom: 10px;
}

header p {
    font-size: 18px;
    color: #DBEAFE;
}
```

**📚 Explicação dos Seletores CSS:**

**O que são seletores de elementos?**
Estamos usando CSS para redefinir diretamente os elementos HTML, não classes. Isso significa que estamos dizendo "todos os elementos `<div>` devem ter essas propriedades", "todos os elementos `<header>` devem ter essas propriedades", etc.

**Como funcionam os seletores:**
```css
/* Seletores de elementos (sem ponto) */
div { }           /* Todos os elementos <div> */
header { }        /* Todos os elementos <header> */
h1 { }            /* Todos os elementos <h1> */
p { }             /* Todos os elementos <p> */

/* Seletores de classes (com ponto) - NÃO estamos usando */
.container { }    /* Elementos com class="container" */
.header { }       /* Elementos com class="header" */
```

**Por que usar seletores de elementos?**
- **Simplicidade**: Não precisamos adicionar classes no HTML
- **Aprendizado**: Entendemos como CSS funciona diretamente
- **Menos código**: HTML fica mais limpo
- **Fundamentos**: Base para entender CSS avançado

**📚 Seletores que estamos usando no nosso código:**

**Seletores básicos:**
- **`*`**: Todos os elementos (reset)
- **`body`**: Elemento `<body>`
- **`div`**: Elemento `<div>`
- **`header`**: Elemento `<header>`
- **`main`**: Elemento `<main>`
- **`section`**: Elemento `<section>`
- **`footer`**: Elemento `<footer>`

**Seletores aninhados (mais específicos):**
- **`header h1`**: Elementos `<h1>` dentro de `<header>`
- **`header p`**: Elementos `<p>` dentro de `<header>`
- **`section h2`**: Elementos `<h2>` dentro de `<section>`
- **`section p`**: Elementos `<p>` dentro de `<section>`

**Como funciona:**
```css
/* Aplica a todos os elementos <div> */
div { background-color: blue; }

/* Aplica apenas aos <h1> que estão dentro de <header> */
header h1 { color: white; }

/* Aplica apenas aos <p> que estão dentro de <header> */
header p { color: lightblue; }
```

**📚 Explicação das Propriedades CSS:**

**Reset básico:**
- **`* { margin: 0; padding: 0; }`**: Remove espaçamentos padrão de todos os elementos
- **`box-sizing: border-box`**: Inclui padding e border no cálculo da largura

**Estilo do corpo:**
- **`font-family: Arial, sans-serif`**: Define a fonte do texto
- **`line-height: 1.6`**: Espaçamento entre linhas (1.6x o tamanho da fonte)
- **`color: #333`**: Cor do texto (cinza escuro)

**Container principal:**
- **`max-width: 800px`**: Largura máxima do container
- **`margin: 0 auto`**: Centraliza o container (0 em cima/baixo, auto nas laterais)
- **`padding: 20px`**: Espaçamento interno de 20px
- **`background-color: #3B82F6`**: Cor de fundo azul
- **`min-height: 100vh`**: Altura mínima de 100% da tela

**Cabeçalho:**
- **`text-align: center`**: Centraliza o texto
- **`margin-bottom: 40px`**: Espaçamento inferior de 40px
- **`color: white`**: Cor do texto branco

**Título principal:**
- **`font-size: 32px`**: Tamanho da fonte 32 pixels

**Subtítulo:**
- **`font-size: 18px`**: Tamanho da fonte 18 pixels
- **`color: #DBEAFE`**: Cor azul claro

### **📝 Etapa 3: Estilizar o Conteúdo Principal**

**6. Adicionar mais CSS para o conteúdo:**
```css
/* Conteúdo principal */
main {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    margin-bottom: 30px;
}

/* Seções */
section {
    margin-bottom: 30px;
}

section h2 {
    color: #1F2937;
    margin-bottom: 15px;
    font-size: 24px;
}

section p {
    color: #6B7280;
    font-size: 16px;
}
```

**📚 Explicação das Novas Propriedades:**

**Conteúdo principal:**
- **`background-color: white`**: Fundo branco
- **`padding: 30px`**: Espaçamento interno de 30px
- **`border-radius: 8px`**: Cantos arredondados de 8px
- **`margin-bottom: 30px`**: Espaçamento inferior de 30px

**Títulos das seções:**
- **`color: #1F2937`**: Cor cinza escuro para títulos
- **`font-size: 24px`**: Tamanho da fonte 24px

**Texto das seções:**
- **`color: #6B7280`**: Cor cinza médio para texto

### **📝 Etapa 4: Estilizar Galeria e Hobbies**

**7. Adicionar CSS para galeria e hobbies:**
```css
/* Galeria de fotos */
section div {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

section div div {
    text-align: center;
    max-width: 200px;
    background-color: transparent;
    padding: 0;
    margin: 0;
}

section div div img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
}

section div div p {
    color: #6B7280;
    font-weight: bold;
}

/* Hobbies */
section div div {
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    min-width: 120px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #FEF3C7;
}

section div div span {
    font-size: 24px;
    display: block;
    margin-bottom: 10px;
}

section div div h3 {
    color: #1F2937;
    font-size: 16px;
}
```

**📚 Explicação das Propriedades de Layout:**

**Flexbox (layout flexível):**
- **`display: flex`**: Cria um layout flexível
- **`gap: 20px`**: Espaçamento entre elementos flex
- **`flex-wrap: wrap`**: Permite quebra de linha
- **`justify-content: center`**: Centraliza elementos

**Imagens:**
- **`width: 100%`**: Largura completa do container
- **`height: 150px`**: Altura fixa de 150px
- **`object-fit: cover`**: Ajusta imagem mantendo proporção

**Efeitos visuais:**
- **`box-shadow: 0 2px 4px rgba(0,0,0,0.1)`**: Sombra sutil
- **`font-weight: bold`**: Texto em negrito

**Layout dos cards:**
- **`display: block`**: Elemento em bloco
- **`min-width: 120px`**: Largura mínima de 120px

### **📝 Etapa 5: Finalizar com Rodapé**

**8. Adicionar CSS para o rodapé:**
```css
/* Rodapé */
footer {
    text-align: center;
    color: white;
    padding: 20px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 8px;
}

footer p {
    color: #DBEAFE;
}
```

**📚 Explicação das Propriedades Finais:**

**Rodapé:**
- **`background-color: rgba(0,0,0,0.1)`**: Fundo preto com 10% de transparência
- **`color: #DBEAFE`**: Cor azul claro para o texto do rodapé

**9. Resultado final:**
- Salve todos os arquivos
- Abra o `index.html` no navegador
- Você verá o site completo e estilizado!

### **📚 O que aprendemos com o protótipo:**

**HTML:**
- **Estrutura semântica**: `<header>`, `<main>`, `<section>`, `<footer>`
- **Organização**: Como dividir uma página em seções lógicas
- **Tags básicas**: `<h1>`, `<h2>`, `<p>`, `<div>`, `<img>`
- **Atributos**: `class`, `src`, `alt`, `style`

**CSS:**
- **Seletores**: Como escolher elementos para estilizar
- **Propriedades**: `color`, `background-color`, `padding`, `margin`
- **Layout**: `display: flex`, `justify-content`, `align-items`
- **Responsividade**: `flex-wrap`, `max-width`

**🎯 Por que criar o protótipo primeiro?**
- **Visualização**: Vemos o resultado final antes de programar
- **Estrutura**: Entendemos a organização da página
- **Estilos**: Vemos como CSS funciona na prática
- **Referência**: Usamos como guia para criar em React

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

**🎯 O que vamos fazer:**
Agora vamos recriar nosso protótipo HTML em React! Já vimos como funciona em HTML puro, agora vamos transformar isso em componentes React modernos.

**🧠 Por que isso é importante?**
Agora que entendemos HTML e CSS puros, vamos ver como React torna isso mais poderoso e organizado. É como pegar nosso protótipo e transformá-lo em uma aplicação moderna e reutilizável!

**📁 Localização do Arquivo:**
O arquivo que vamos modificar está em:
```
meu-primeiro-site/
  src/
    app/
      page.tsx    ← Este é o arquivo que vamos limpar
```

**🔧 Como Limpar o Arquivo:**

**1. Abrir o arquivo no VS Code:**
- No VS Code, navegue até a pasta `meu-primeiro-site`
- Abra a pasta `src`
- Abra a pasta `app`
- Clique no arquivo `page.tsx`

**2. Ver o conteúdo atual:**
O arquivo `page.tsx` provavelmente tem algo assim:
```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 px-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
```

**3. Limpar completamente o arquivo:**
- **Selecione todo o conteúdo** (Ctrl+A ou Cmd+A)
- **Delete tudo** (Delete ou Backspace)
- **Deixe o arquivo completamente vazio**

**4. Verificar que está vazio:**
O arquivo deve ficar assim (completamente vazio):
```
(arquivo vazio)
```

**⚠️ Importante:**
- **SIM, pode apagar tudo!** Este é o arquivo padrão do Next.js
- **Não se preocupe** - vamos criar nosso próprio código
- **O arquivo deve ficar vazio** antes de adicionar nosso código
- **Salve o arquivo** (Ctrl+S ou Cmd+S) após limpar

**🎯 O que vamos aprender:**
- **Componentes React**: Como criar e estruturar componentes
- **Export Default**: Como tornar um componente disponível para uso
- **JSX**: Como misturar HTML com JavaScript
- **Estrutura de Arquivos**: Como organizar código em arquivos
- **Nomenclatura**: Por que usar inglês no código

**📚 Conceito Detalhado: Componentes React**

**O que são componentes React?**
Componentes são como "peças de LEGO" do seu site - cada um tem uma função específica e pode ser reutilizado em diferentes lugares.

**Como funcionam?**
```tsx
// Estrutura básica de um componente
function NomeDoComponente() {
  return (
    <div>
      <h1>Conteúdo do componente</h1>
    </div>
  );
}
```

**Para que servem?**
- **Organização**: Dividir o site em partes menores e gerenciáveis
- **Reutilização**: Usar o mesmo componente em vários lugares
- **Manutenção**: Fácil de modificar e corrigir
- **Colaboração**: Diferentes pessoas podem trabalhar em componentes diferentes

**Quando usar?**
- Sempre que você quer criar uma parte do seu site
- Quando você tem código que se repete
- Para organizar melhor seu projeto
- Para facilitar manutenção futura

**📚 Conceito Detalhado: Export Default**

**O que é export default?**
É uma forma de dizer "este é o componente principal deste arquivo" - é como colocar uma placa "ENTRADA PRINCIPAL" na sua casa.

**Como funciona?**
```tsx
// Sem export default - componente não pode ser usado fora
function Home() {
  return <div>Conteúdo</div>;
}

// Com export default - componente pode ser importado
export default function Home() {
  return <div>Conteúdo</div>;
}
```

**Para que serve?**
- **Disponibilidade**: Permite que outros arquivos usem este componente
- **Página Principal**: Indica que este é o componente principal da página
- **Importação**: Facilita importar o componente em outros lugares
- **Estrutura**: Organiza qual componente é o "chefe" do arquivo

**Quando usar?**
- Sempre no componente principal de cada página
- Quando você quer que outros arquivos usem seu componente
- Para indicar o ponto de entrada de um arquivo

**📚 Conceito Detalhado: JSX**

**O que é JSX?**
JSX é uma forma de escrever HTML dentro do JavaScript - é como ter um "HTML inteligente" que pode usar variáveis e lógica.

**Como funciona?**
```tsx
// JSX - HTML dentro do JavaScript
function Home() {
  return (
    <div>
      <h1>Olá Mundo!</h1>
    </div>
  );
}
```

**Para que serve?**
- **Flexibilidade**: Misturar HTML com JavaScript
- **Dinamismo**: Criar conteúdo que muda baseado em dados
- **Organização**: Manter estrutura e lógica juntas
- **Produtividade**: Escrever menos código para fazer mais

**Quando usar?**
- Sempre que você quer criar interface de usuário
- Para misturar HTML com lógica JavaScript
- Quando você precisa de conteúdo dinâmico
- Para organizar melhor seu código

**📚 Conceito Detalhado: Estrutura de Arquivos**

**O que é estrutura de arquivos?**
É como organizar seus arquivos em pastas para que tudo tenha seu lugar e seja fácil de encontrar.

**Como funciona?**
```
src/
  app/
    page.tsx    ← Página principal
    layout.tsx  ← Layout geral
  components/   ← Componentes reutilizáveis
  styles/       ← Arquivos de estilo
```

**Para que serve?**
- **Organização**: Cada arquivo tem seu propósito específico
- **Navegação**: Fácil de encontrar o que você procura
- **Colaboração**: Outras pessoas entendem onde está cada coisa
- **Manutenção**: Fácil de modificar e expandir

**Quando usar?**
- Sempre em projetos maiores que uma página
- Para organizar código de forma profissional
- Quando você trabalha em equipe
- Para facilitar manutenção futura

**5. Adicionar nosso código:**
Agora que o arquivo está limpo, vamos adicionar nosso primeiro código React. Digite exatamente o código abaixo:

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

**6. Salvar e verificar:**
- **Salve o arquivo** (Ctrl+S ou Cmd+S)
- **Vá para o navegador** (http://localhost:3000)
- **Atualize a página** (F5 ou Ctrl+R)
- **Você deve ver**: "Olá! Este é meu primeiro site!" na tela

**7. Verificar se funcionou:**
Se tudo deu certo, você deve ver:
- ✅ Uma página em branco com fundo branco
- ✅ O texto "Olá! Este é meu primeiro site!" no centro
- ✅ Nenhum erro no console do navegador
- ✅ O servidor Next.js continuando a rodar

**📚 Conceito Detalhado: HTML**

**O que é HTML?**
HTML (HyperText Markup Language) é a linguagem que estrutura o conteúdo de uma página web - é como o "esqueleto" de um site, definindo o que é título, parágrafo, imagem, etc.

**Como funciona?**
```html
<!-- HTML usa tags para estruturar conteúdo -->
<div>          <!-- Container genérico -->
  <h1>Título</h1>    <!-- Título principal -->
  <p>Parágrafo</p>    <!-- Texto corrido -->
</div>
```

**Para que serve?**
- **Estrutura**: Organizar conteúdo de forma lógica
- **Semântica**: Dar significado ao conteúdo
- **Acessibilidade**: Leitores de tela entendem a estrutura
- **SEO**: Motores de busca compreendem o conteúdo

**Quando usar?**
- **`<div>`**: Para containers e organização
- **`<h1>`, `<h2>`, `<h3>`**: Para títulos e subtítulos
- **`<p>`**: Para parágrafos e texto corrido
- **`<img>`**: Para imagens
- **`<a>`**: Para links

**📚 Conceito Detalhado: Tags HTML**

**O que são tags HTML?**
São "etiquetas" que envolvem o conteúdo para dizer ao navegador o que cada parte representa.

**Como funcionam?**
```html
<!-- Tags têm abertura e fechamento -->
<h1>Meu Título</h1>     <!-- Tag de abertura e fechamento -->
<div>Conteúdo</div>     <!-- Container com conteúdo -->
<img src="foto.jpg" />  <!-- Tag que não precisa fechar -->
```

**Para que servem?**
- **Organização**: Estruturar conteúdo de forma hierárquica
- **Significado**: Cada tag tem um propósito específico
- **Estilização**: CSS pode estilizar cada tag
- **Interação**: JavaScript pode interagir com cada tag

**Quando usar?**
- **`<div>`**: Quando você precisa de um container genérico
- **`<h1>`**: Para o título mais importante da página
- **`<p>`**: Para parágrafos e texto corrido
- **`<span>`**: Para texto inline com estilo específico

**🎯 Explicação Detalhada do Código:**

**1. Estrutura do componente:**
- **`function Home()`**: Cria uma função chamada Home (nome em inglês)
- **`return`**: Retorna o que será mostrado na tela
- **`<div>`**: Container HTML para organizar conteúdo
- **`<h1>`**: Título principal da página

**2. Export default:**
- **`export default`**: Torna este componente disponível para uso
- **Por que preciso**: Para que o Next.js possa usar este componente como página principal
- **Como funciona**: Permite que outros arquivos importem este componente

**3. JSX básico:**
- **`<div>`**: Elemento HTML container
- **`<h1>`**: Cabeçalho de nível 1 (mais importante)
- **Estrutura aninhada**: H1 dentro de DIV
- **Por que preciso**: Para criar estrutura semântica do HTML

**4. Nomenclatura em inglês:**
- **`Home`**: Nome do componente em inglês
- **Por que preciso**: Padrão internacional, compatibilidade
- **Como funciona**: Facilita colaboração e manutenção

**💡 Analogia didática:**
É como construir a primeira peça de um quebra-cabeça! O **HTML** é como o esqueleto de um boneco - define onde fica a cabeça (`<h1>`), o corpo (`<div>`), e os braços. O componente `Home` é a peça principal que vai no centro, o `export default` é como colocar uma etiqueta "PEÇA PRINCIPAL" nela, o JSX é como ter instruções de montagem em português mas usando peças universais, e a estrutura de arquivos é como ter uma caixa organizada onde cada peça tem seu lugar!

### **Passo 2: Criar o container principal**

**🎯 O que vamos fazer:**
Vamos criar o container principal do nosso site usando CSS inline, aprendendo sobre propriedades CSS, unidades de medida e como aplicar estilos diretamente no HTML.

**🧠 Por que isso é importante?**
O container é como a "moldura" do seu site - define o espaço onde todo o conteúdo vai ficar. É fundamental entender como controlar o layout, cores e espaçamento para criar sites visualmente atraentes.

**🎯 O que vamos aprender:**
- **CSS Inline**: Como aplicar estilos diretamente no HTML
- **Propriedades CSS**: Como controlar aparência dos elementos
- **Unidades de Medida**: Como definir tamanhos e espaçamentos
- **Cores**: Como usar códigos de cores
- **Layout**: Como controlar posicionamento e tamanho

**📚 Conceito Detalhado: CSS Inline**

**O que é CSS inline?**
CSS inline é uma forma de aplicar estilos diretamente nos elementos HTML, sem precisar de arquivos CSS separados.

**Como funciona?**
```tsx
// CSS inline - estilos aplicados diretamente
<div style={{ backgroundColor: 'blue', padding: '20px' }}>
  Conteúdo
</div>
```

**Para que serve?**
- **Simplicidade**: Aplicar estilos rapidamente
- **Controle**: Estilos específicos para elementos únicos
- **Aprendizado**: Entender como CSS funciona
- **Prototipagem**: Testar estilos rapidamente

**Quando usar?**
- Para estilos únicos de um elemento
- Durante desenvolvimento e testes
- Para aprender conceitos CSS
- Em componentes pequenos

**📚 Conceito Detalhado: Propriedades CSS**

**O que são propriedades CSS?**
São "controles" que permitem modificar a aparência dos elementos - como botões de um painel de controle.

**Como funcionam?**
```tsx
// Cada propriedade controla um aspecto visual
<div style={{
  backgroundColor: 'blue',    // Cor de fundo
  padding: '20px',           // Espaçamento interno
  margin: '10px',            // Espaçamento externo
  fontSize: '16px'           // Tamanho da fonte
}}>
```

**Para que servem?**
- **Controle Visual**: Modificar aparência dos elementos
- **Layout**: Controlar posicionamento e tamanho
- **Tipografia**: Controlar texto e fontes
- **Cores**: Definir paleta de cores

**Quando usar?**
- Sempre que você quer mudar a aparência
- Para criar layouts responsivos
- Para definir hierarquia visual
- Para melhorar usabilidade

**📚 Conceito Detalhado: Unidades de Medida**

**O que são unidades de medida?**
São formas de definir tamanhos no CSS - como usar uma régua para medir elementos.

**Como funcionam?**
```tsx
// Diferentes unidades para diferentes propósitos
<div style={{
  width: '300px',        // Pixels - tamanho fixo
  height: '50vh',        // Viewport height - 50% da tela
  padding: '2rem',       // Rem - relativo ao tamanho da fonte
  margin: '1em'          // Em - relativo ao elemento pai
}}>
```

**Para que servem?**
- **Precisão**: Definir tamanhos exatos
- **Responsividade**: Adaptar a diferentes telas
- **Consistência**: Manter proporções
- **Flexibilidade**: Ajustar conforme necessário

**Quando usar?**
- **px**: Para tamanhos fixos (bordas, sombras)
- **vh/vw**: Para ocupar tela inteira
- **rem**: Para tipografia responsiva
- **%**: Para tamanhos relativos

**📚 Conceito Detalhado: Cores**

**O que são códigos de cores?**
São formas de representar cores usando códigos - como ter um catálogo de cores numeradas.

**Como funcionam?**
```tsx
// Diferentes formas de definir cores
<div style={{
  backgroundColor: '#3B82F6',     // Hexadecimal
  color: 'rgb(59, 130, 246)',    // RGB
  borderColor: 'blue'             // Nome da cor
}}>
```

**Para que servem?**
- **Precisão**: Cores exatas e consistentes
- **Profissionalismo**: Paletas de cores harmoniosas
- **Acessibilidade**: Cores com bom contraste
- **Identidade**: Cores que representam sua marca

**Quando usar?**
- **Hexadecimal**: Para cores exatas (#3B82F6)
- **RGB**: Para cores com transparência
- **Nomes**: Para cores básicas (blue, red)
- **HSL**: Para cores com saturação e brilho

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

**🎯 Explicação Detalhada do Código:**

**1. Container principal:**
- **`<div>`**: Elemento HTML container para organizar conteúdo
- **`style={{}}`**: Aplicação de CSS inline
- **Por que preciso**: Para criar uma base visual para todo o site
- **Como funciona**: Define o "fundo" onde tudo vai ficar

**2. Cor de fundo:**
- **`backgroundColor: '#3B82F6'`**: Define cor azul de fundo
- **`#3B82F6`**: Código hexadecimal para azul
- **Por que preciso**: Para criar identidade visual
- **Como funciona**: Hexadecimal usa 6 caracteres (3 pares: vermelho, verde, azul)

**3. Altura da tela:**
- **`minHeight: '100vh'`**: Ocupa pelo menos 100% da altura da tela
- **`100vh`**: 100% da viewport height (altura da janela)
- **Por que preciso**: Para o site ocupar a tela inteira
- **Como funciona**: `vh` é uma unidade relativa à altura da tela

**4. Espaçamento interno:**
- **`padding: '20px'`**: Espaçamento de 20 pixels dentro do container
- **`20px`**: 20 pixels de espaçamento
- **Por que preciso**: Para o conteúdo não ficar colado nas bordas
- **Como funciona**: `padding` cria espaço interno do elemento

**5. Estrutura JSX:**
- **Chaves duplas `{{}}`**: Primeira chave é JSX, segunda é objeto JavaScript
- **Propriedades separadas por vírgula**: Cada estilo é uma propriedade
- **Valores entre aspas**: Strings precisam de aspas simples
- **Por que preciso**: Para misturar HTML com JavaScript corretamente

**💡 Analogia didática:**
É como preparar uma tela para pintar! O `<div>` é a tela, o `backgroundColor` é a cor de fundo que você escolhe, o `minHeight: '100vh'` é como garantir que a tela ocupe toda a parede, e o `padding: '20px'` é como deixar uma margem ao redor da pintura para não colar nas bordas da moldura!

### **Passo 3: Adicionar o cabeçalho**

**🎯 O que vamos fazer:**
Vamos criar o cabeçalho do nosso site, aprendendo sobre tags semânticas HTML, tipografia, cores e como estruturar informações de forma hierárquica.

**🧠 Por que isso é importante?**
O cabeçalho é a primeira impressão do seu site - é como a fachada da sua casa! Precisa ser atrativo, informativo e bem estruturado para criar uma boa primeira impressão nos visitantes.

**🎯 O que vamos aprender:**
- **Tags Semânticas**: Como usar HTML com significado
- **Tipografia**: Como controlar texto e hierarquia visual
- **Cores**: Como criar contraste e legibilidade
- **Layout**: Como centralizar e espaçar elementos
- **Estrutura**: Como organizar informações importantes

**📚 Conceito Detalhado: Tags Semânticas HTML**

**O que são tags semânticas?**
São elementos HTML que têm significado específico - não são apenas visuais, mas indicam o tipo de conteúdo.

**Como funcionam?**
```tsx
// Tags semânticas com significado específico
<header>    // Cabeçalho da página
<main>      // Conteúdo principal
<section>  // Seção temática
<footer>   // Rodapé da página
```

**Para que servem?**
- **Acessibilidade**: Leitores de tela entendem a estrutura
- **SEO**: Motores de busca compreendem o conteúdo
- **Organização**: Código mais legível e estruturado
- **Manutenção**: Fácil de encontrar e modificar seções

**Quando usar?**
- **`<header>`**: Para cabeçalhos e introduções
- **`<main>`**: Para conteúdo principal
- **`<section>`**: Para seções temáticas
- **`<footer>`**: Para rodapés e informações finais

**📚 Conceito Detalhado: Tipografia**

**O que é tipografia?**
É a arte de organizar texto de forma legível e atrativa - como escolher fontes, tamanhos e espaçamentos.

**Como funciona?**
```tsx
// Controle de tipografia
<h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
  Título Principal
</h1>
<p style={{ fontSize: '18px', lineHeight: '1.5' }}>
  Texto do parágrafo
</p>
```

**Para que serve?**
- **Hierarquia**: Diferentes níveis de importância
- **Legibilidade**: Texto fácil de ler
- **Estética**: Visualmente atrativo
- **Comunicação**: Transmitir informações claramente

**Quando usar?**
- **`<h1>`**: Para títulos principais (mais importante)
- **`<h2>`**: Para subtítulos
- **`<p>`**: Para parágrafos e texto corrido
- **`<span>`**: Para texto inline com estilo específico

**📚 Conceito Detalhado: Cores e Contraste**

**O que é contraste de cores?**
É a diferença entre a cor do texto e a cor de fundo - fundamental para legibilidade.

**Como funciona?**
```tsx
// Cores com bom contraste
<div style={{ backgroundColor: '#3B82F6' }}>  // Fundo azul escuro
  <h1 style={{ color: 'white' }}>            // Texto branco
    Título
  </h1>
  <p style={{ color: '#DBEAFE' }}>           // Texto azul claro
    Subtítulo
  </p>
</div>
```

**Para que serve?**
- **Legibilidade**: Texto fácil de ler
- **Acessibilidade**: Pessoas com dificuldades visuais
- **Hierarquia**: Diferentes níveis de importância
- **Estética**: Visualmente agradável

**Quando usar?**
- **Alto contraste**: Para textos importantes (títulos)
- **Médio contraste**: Para subtítulos
- **Baixo contraste**: Para textos secundários
- **Cores complementares**: Para criar harmonia

**📚 Conceito Detalhado: Layout e Espaçamento**

**O que é layout?**
É como organizar elementos na página - posicionamento, alinhamento e espaçamento.

**Como funciona?**
```tsx
// Controle de layout
<header style={{ 
  textAlign: 'center',      // Centralizar
  marginBottom: '40px'       // Espaçamento inferior
}}>
  <h1 style={{ marginBottom: '10px' }}>
    Título
  </h1>
</header>
```

**Para que serve?**
- **Organização**: Elementos bem posicionados
- **Hierarquia**: Diferentes níveis visuais
- **Respiração**: Espaço entre elementos
- **Foco**: Direcionar atenção do usuário

**Quando usar?**
- **`textAlign: 'center'`**: Para centralizar texto
- **`marginBottom`**: Para espaçamento inferior
- **`marginTop`**: Para espaçamento superior
- **`padding`**: Para espaçamento interno

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

**🎯 Explicação Detalhada do Código:**

**1. Tag semântica header:**
- **`<header>`**: Tag HTML semântica para cabeçalho
- **Por que preciso**: Para indicar que é o cabeçalho da página
- **Como funciona**: Ajuda acessibilidade e SEO
- **Benefício**: Código mais organizado e semântico

**2. Centralização do texto:**
- **`textAlign: 'center'`**: Centraliza todo o conteúdo do header
- **Por que preciso**: Para criar foco visual no centro
- **Como funciona**: Alinha texto horizontalmente
- **Benefício**: Layout mais equilibrado e profissional

**3. Espaçamento inferior:**
- **`marginBottom: '40px'`**: Cria espaço entre header e próximo elemento
- **Por que preciso**: Para separar visualmente o cabeçalho do conteúdo
- **Como funciona**: Adiciona margem na parte inferior
- **Benefício**: Melhora legibilidade e organização

**4. Título principal (h1):**
- **`<h1>`**: Tag HTML para título mais importante
- **`color: 'white'`**: Cor branca para contraste com fundo azul
- **`fontSize: '32px'`**: Tamanho grande para destaque
- **`marginBottom: '10px'`**: Espaço entre título e subtítulo

**5. Subtítulo (p):**
- **`<p>`**: Tag HTML para parágrafo
- **`color: '#DBEAFE'`**: Azul claro para hierarquia visual
- **`fontSize: '18px'`**: Tamanho menor que o título
- **Por que preciso**: Para criar hierarquia de informações

**6. Comentário HTML:**
- **`{/* Cabeçalho */}`**: Comentário JSX para documentar código
- **Por que preciso**: Para facilitar manutenção e colaboração
- **Como funciona**: Não aparece na página, apenas no código
- **Benefício**: Código mais legível e organizado

**💡 Analogia didática:**
É como criar a placa de identificação da sua casa! O `<header>` é como a moldura da placa, o `textAlign: 'center'` é como centralizar o texto na placa, o `<h1>` é como o nome principal em letras grandes, o `<p>` é como o subtítulo em letras menores, e o `marginBottom` é como deixar espaço entre a placa e a porta de entrada!

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

## 🔄 Refatoração: Evoluindo o Código

Agora que criamos o site básico, vamos aprender boas práticas refatorando o código!

### **🎨 Passo 8: CSS Classes (Substituir CSS Inline)**

#### **❌ ANTES (CSS Inline):**
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

#### **✅ DEPOIS (CSS Classes):**
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

#### **📁 Criar arquivo `styles/globals.css`:**
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

#### **🎯 VANTAGENS:**
1. **🔧 Manutenção fácil** - mudar cor em um lugar só
2. **📖 Código limpo** - HTML mais legível
3. **♻️ Reutilização** - usar `.card` em qualquer lugar
4. **🎨 Consistência** - mesmo visual em todo site

### **🧩 Passo 9: Componentes Reutilizáveis**

#### **❌ ANTES (Código Repetido):**
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

#### **✅ DEPOIS (Componente Reutilizável):**
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

#### **🎯 VANTAGENS:**
1. **🚫 DRY** - Don't Repeat Yourself (não repetir código)
2. **🔧 Manutenção** - mudar em um lugar, atualiza em todos
3. **📖 Legibilidade** - código mais limpo e organizado
4. **♻️ Reutilização** - usar `<Card>` em qualquer lugar

### **📁 Passo 10: Estrutura de Pastas**

#### **❌ ANTES (Tudo em um arquivo):**
```
src/
├── app/
│   └── page.tsx (500+ linhas)
└── aulas/
    └── aula-01/
        └── FirstSite.tsx (200+ linhas)
```

#### **✅ DEPOIS (Organizado por aula e funcionalidade):**
```
src/
├── components/
│   └── aula-01/
│       ├── Card/
│       │   ├── Card.tsx
│       │   └── Card.module.css
│       ├── ImageCard/
│       │   ├── ImageCard.tsx
│       │   └── ImageCard.module.css
│       └── HobbyCard/
│           ├── HobbyCard.tsx
│           └── HobbyCard.module.css
├── styles/
│   └── globals.css
├── app/
│   └── page.tsx (50 linhas)
└── aulas/
    └── aula-01/
        └── FirstSite.tsx (100 linhas)
```

#### **🎯 VANTAGENS:**
1. **📁 Organização** - fácil encontrar arquivos
2. **👥 Trabalho em equipe** - cada um trabalha em uma pasta
3. **🔍 Navegação** - estrutura clara e lógica
4. **♻️ Reutilização** - componentes em pasta própria

### **🎯 Passo 11: Props e Estado**

#### **❌ ANTES (Dados fixos):**
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

#### **✅ DEPOIS (Dados dinâmicos):**
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

#### **🎯 VANTAGENS:**
1. **📊 Dados dinâmicos** - fácil adicionar/remover hobbies
2. **🔧 Manutenção** - mudar dados em um lugar só
3. **♻️ Reutilização** - componente funciona com qualquer hobby
4. **🧪 Testabilidade** - testar com dados diferentes

### **🎨 Passo 12: Migrar para Tailwind CSS**

#### **❌ ANTES (CSS Customizado + Componentes):**
```tsx
// CSS customizado em arquivo separado (150+ linhas)
import Card from '@/components/aula-01/Card/Card';
import ImageCard from '@/components/aula-01/ImageCard/ImageCard';
import HobbyCard from '@/components/aula-01/HobbyCard/HobbyCard';

export default function FirstSite() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Olá! Eu sou [SEU NOME]</h1>
        <p className="header-subtitle">Desenvolvedor em formação ⚡</p>
      </header>
      <main className="main-content">
        <Card title="Sobre Mim">
          <p className="card-text">Estou aprendendo a criar sites incríveis!</p>
        </Card>
        <Card title="Minhas Fotos">
          <div className="photos-grid">
            <ImageCard src="/images/photo1.jpg" alt="Lago" label="Lago" borderColor="red" />
            <ImageCard src="/images/photo2.jpg" alt="Paisagem" label="Paisagem" borderColor="green" />
            <ImageCard src="/images/photo3.jpg" alt="Manhã" label="Manhã" borderColor="blue" />
          </div>
        </Card>
        <Card title="Meus Hobbies">
          <div className="hobbies-grid">
            {hobbies.map(hobby => (
              <HobbyCard key={hobby.id} hobby={hobby} />
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
```

#### **✅ DEPOIS (Tailwind CSS + Componentes com Tailwind):**
```tsx
// Componentes mantidos, mas usando Tailwind CSS
import Card from '@/components/aula-01/Card/Card';
import ImageCard from '@/components/aula-01/ImageCard/ImageCard';
import HobbyCard from '@/components/aula-01/HobbyCard/HobbyCard';

export default function FirstSite() {
  const photos = [
    { id: 1, src: "/images/photo1.jpg", alt: "Lago Moraine", label: "Lago Moraine", borderColor: "red" },
    { id: 2, src: "/images/photo2.jpg", alt: "Paisagem", label: "Paisagem", borderColor: "green" },
    { id: 3, src: "/images/photo3.jpg", alt: "Manhã", label: "Manhã", borderColor: "blue" }
  ];

  const hobbies = [
    { id: 1, name: 'Gaming', icon: '⚡', color: 'bg-yellow-100' },
    { id: 2, name: 'Design', icon: '★', color: 'bg-purple-100' },
    { id: 3, name: 'Natureza', icon: '●', color: 'bg-green-100' },
    { id: 4, name: 'Culinária', icon: '▲', color: 'bg-red-100' }
  ];

  return (
    <div className="bg-blue-500 min-h-screen p-5 flex flex-col items-center">
      <header className="text-center mb-10 max-w-4xl w-full">
        <h1 className="text-white text-3xl mb-2">Olá! Eu sou [SEU NOME]</h1>
        <p className="text-blue-200 text-lg">Desenvolvedor em formação ⚡</p>
      </header>
      
      <main className="max-w-4xl w-full mx-auto">
        <Card title="Sobre Mim">
          <p className="text-gray-600 text-base leading-relaxed">
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
          </p>
        </Card>

        <Card title="Minhas Fotos">
          <div className="flex gap-4 flex-wrap">
            {photos.map(photo => (
              <ImageCard 
                key={photo.id}
                src={photo.src} 
                alt={photo.alt} 
                label={photo.label}
                borderColor={photo.borderColor}
              />
            ))}
          </div>
        </Card>

        <Card title="Meus Hobbies">
          <div className="flex gap-4 flex-wrap">
            {hobbies.map(hobby => (
              <HobbyCard key={hobby.id} hobby={hobby} />
            ))}
          </div>
        </Card>
      </main>

      <footer className="text-center text-white mt-10 max-w-4xl w-full">
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
        <div className="mt-4">
          <span className="text-blue-200 mx-2">⚡</span>
          <span className="text-purple-200 mx-2">★</span>
          <span className="text-red-200 mx-2">●</span>
        </div>
      </footer>
    </div>
  );
}
```

#### **🎯 VANTAGENS do Tailwind:**
1. **🚀 Desenvolvimento 3x mais rápido** - classes prontas para usar
2. **📱 Responsividade nativa** - `sm:`, `md:`, `lg:` automático
3. **🎨 Design system consistente** - cores e espaçamentos padronizados
4. **🧹 Código mais limpo** - sem CSS customizado para manter
5. **⚡ Performance otimizada** - apenas classes usadas são incluídas
6. **🔧 Manutenção simplificada** - mudanças diretas no JSX
7. **♻️ Componentes reutilizáveis** - mantém estrutura modular
8. **🎯 Foco no conteúdo** - mais tempo para lógica, menos para CSS

#### **📚 Classes Tailwind Utilizadas:**
```tsx
// Layout e posicionamento
bg-blue-500          // Cor de fundo azul
min-h-screen         // Altura mínima da tela
p-5                  // Padding de 20px
flex flex-col        // Flexbox vertical
items-center         // Centralizar horizontalmente

// Tipografia
text-white           // Cor do texto branco
text-3xl             // Tamanho da fonte 30px
text-center          // Centralizar texto
mb-2                 // Margin bottom 8px

// Espaçamento
max-w-4xl            // Largura máxima 896px
w-full               // Largura 100%
mx-auto              // Margin horizontal automático
mb-8                 // Margin bottom 32px

// Cores e estilos
bg-white             // Fundo branco
text-gray-800        // Texto cinza escuro
text-gray-600        // Texto cinza claro
rounded-lg           // Bordas arredondadas
border-2             // Borda de 2px
border-red-500       // Cor da borda vermelha
object-cover         // Imagem cobrindo container
```

---

## **Passo 13: Componentização Completa (Header + Footer)**

### **🎯 Objetivo:**
Componentizar Header e Footer para máxima reutilização e organização.

### **📋 ANTES (Header e Footer Inline):**
```tsx
// Código repetitivo e não reutilizável
<header className="text-center mb-10 max-w-4xl w-full">
  <h1 className="text-white text-3xl mb-2">
    Olá! Eu sou [SEU NOME]
  </h1>
  <p className="text-blue-200 text-lg">
    Desenvolvedor em formação ⚡
  </p>
</header>

<footer className="text-center text-white mt-10 max-w-4xl w-full">
  <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
  <div className="mt-4">
    <span className="text-blue-200 mx-2">⚡</span>
    <span className="text-purple-200 mx-2">★</span>
    <span className="text-red-200 mx-2">●</span>
  </div>
</footer>
```

### **✅ DEPOIS (Componentes Reutilizáveis):**
```tsx
// Componentes criados
import Header from '@/components/aula-01/Header/Header';
import Footer from '@/components/aula-01/Footer/Footer';

// Uso simplificado
<Header 
  name="[SEU NOME]" 
  subtitle="Desenvolvedor em formação ⚡" 
/>

<Footer 
  copyright="© 2024 - Feito com ❤️ e muito aprendizado!"
  icons={['⚡', '★', '●']}
/>
```

### **📁 Estrutura de Componentes Final:**
```
src/components/aula-01/
├── Card/
│   └── Card.tsx
├── ImageCard/
│   └── ImageCard.tsx
├── HobbyCard/
│   └── HobbyCard.tsx
├── Header/
│   └── Header.tsx
└── Footer/
    └── Footer.tsx
```

### **🎯 VANTAGENS da Componentização Completa:**
1. **♻️ Reutilização total** - Header e Footer em qualquer página
2. **🔧 Manutenção centralizada** - mudança em um lugar só
3. **📱 Responsividade consistente** - mesmo comportamento em todas as telas
4. **🎨 Design system** - padrões visuais unificados
5. **⚡ Performance** - componentes otimizados
6. **🧹 Código limpo** - FirstSite.tsx com apenas 20 linhas
7. **🎯 Foco no conteúdo** - lógica separada da apresentação
8. **📦 Modularidade** - cada componente tem responsabilidade única

### **📊 Comparação Final:**
- **Antes:** 150 linhas CSS + 80 linhas JSX = 230 linhas
- **Depois:** 0 linhas CSS + 20 linhas JSX = 20 linhas
- **Ganho:** 91% menos código, 100% mais organizado

## 📈 Resumo das Vantagens

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

### **🎨 Tailwind CSS:**
- **Antes:** CSS customizado (150 linhas)
- **Depois:** Classes utilitárias (0 linhas CSS)
- **Ganho:** 100% menos CSS, desenvolvimento 3x mais rápido

### **🧩 Componentização Completa:**
- **Antes:** Header e Footer inline (20 linhas)
- **Depois:** Componentes reutilizáveis (5 linhas)
- **Ganho:** 75% menos código, 100% mais reutilizável

## 🎉 Parabéns!

Você criou seu primeiro site e aprendeu boas práticas! ⚡
- É responsivo (funciona no celular)
- Tem animações bonitas
- É personalizado com suas informações
- Usa as melhores práticas de design
- Tem ícones compatíveis e funcionais
- Segue nomenclatura profissional em inglês
- **Agora sabe refatorar código para ser mais limpo e organizado!**

**Na próxima aula vamos criar um jogo! ⚡**
