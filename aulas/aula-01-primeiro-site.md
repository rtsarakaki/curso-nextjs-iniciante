# 🎨 Aula 1: Meu Primeiro Site Bonito

## 🎯 Objetivo da Aula
Criar seu primeiro site bonito e responsivo, aprendendo os fundamentos de HTML e CSS de forma visual e divertida.

## 🎮 O que vamos criar
Um site pessoal com:
- Cabeçalho com seu nome
- Seção sobre você
- Galeria de fotos
- Rodapé estilizado
- Cores e animações bonitas

## 📚 O que vamos aprender
- **HTML**: Estrutura de uma página web
- **CSS**: Estilização e layout
- **Responsividade**: Site que funciona em qualquer dispositivo
- **Cores e tipografia**: Design visual

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

### **Passo 3: Instalar Extensões do VS Code**

#### **Como Instalar Extensões:**
1. Abra o VS Code
2. Clique no ícone de extensões na barra lateral (ou pressione `Ctrl+Shift+X`)
3. Digite o nome da extensão na barra de pesquisa
4. Clique em "Install" na extensão desejada
5. Aguarde a instalação

#### **Extensões Essenciais e Para Que Servem:**

##### **1. ES7+ React/Redux/React-Native snippets**
- **Para que serve**: Cria código React automaticamente
- **Como usar**: Digite `rafce` e pressione Tab = cria componente React
- **Exemplo**: Digite `useState` e pressione Tab = cria hook useState
- **Por que é importante**: Acelera muito a programação

##### **2. Tailwind CSS IntelliSense**
- **Para que serve**: Autocompletar classes CSS do Tailwind
- **Como usar**: Digite `bg-` e veja todas as opções de cor
- **Exemplo**: `bg-blue-500` aparece automaticamente
- **Por que é importante**: Evita erros e acelera o desenvolvimento

##### **3. TypeScript Importer**
- **Para que serve**: Importa automaticamente tipos e funções
- **Como usar**: Digite `useState` e ele importa automaticamente
- **Exemplo**: Não precisa lembrar de importar React
- **Por que é importante**: Economiza tempo e evita erros

##### **4. Auto Rename Tag**
- **Para que serve**: Renomeia tags HTML automaticamente
- **Como usar**: Renomeie uma tag e a outra renomeia junto
- **Exemplo**: Renomeie `<div>` para `<section>` e `</div>` vira `</section>`
- **Por que é importante**: Evita erros de tags não fechadas

##### **5. Bracket Pair Colorizer (Opcional)**
- **Para que serve**: Colore parênteses, chaves e colchetes
- **Como usar**: Instala e funciona automaticamente
- **Exemplo**: `{` fica azul, `}` fica azul, `(` fica verde, `)` fica verde
- **Por que é importante**: Facilita ver onde começam e terminam blocos

##### **6. Prettier - Code formatter (Opcional)**
- **Para que serve**: Formata o código automaticamente
- **Como usar**: Salve o arquivo e ele formata sozinho
- **Exemplo**: Código bagunçado fica organizado
- **Por que é importante**: Mantém o código limpo e organizado

#### **Como Verificar se as Extensões Estão Funcionando:**

1. **ES7+ React snippets**: Digite `rafce` em um arquivo .tsx e pressione Tab
2. **Tailwind CSS**: Digite `bg-` e veja as sugestões de cores
3. **TypeScript Importer**: Digite `useState` e veja se importa automaticamente
4. **Auto Rename Tag**: Renomeie uma tag HTML e veja se a outra muda junto

#### **Configurações Recomendadas:**

Adicione estas configurações no VS Code (Ctrl+, para abrir configurações):

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

#### **Atalhos de Teclado Úteis:**

| Atalho | O que faz | Quando usar |
|--------|-----------|-------------|
| `Ctrl + S` | Salvar arquivo | Sempre que terminar de editar |
| `Ctrl + Z` | Desfazer | Quando cometer um erro |
| `Ctrl + Y` | Refazer | Para desfazer o desfazer |
| `Ctrl + C` | Copiar | Para copiar código |
| `Ctrl + V` | Colar | Para colar código |
| `Ctrl + X` | Cortar | Para mover código |
| `Ctrl + F` | Buscar | Para encontrar texto no código |
| `Ctrl + H` | Substituir | Para trocar uma palavra por outra |
| `Ctrl + /` | Comentar linha | Para desativar código temporariamente |
| `Ctrl + Shift + P` | Comando | Para acessar funções do VS Code |
| `Ctrl + `` | Terminal | Para abrir o terminal |
| `F12` | Ir para definição | Para ver como uma função funciona |
| `Ctrl + Space` | Autocompletar | Para ver sugestões de código |

#### **Dicas de Produtividade:**

1. **Use o autocompletar**: Digite as primeiras letras e pressione Tab
2. **Use snippets**: Digite `rafce` e pressione Tab para criar componente
3. **Use Ctrl+Space**: Para ver todas as opções disponíveis
4. **Use F12**: Para navegar pelo código e entender como funciona
5. **Use Ctrl+Shift+P**: Para acessar qualquer função do VS Code

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

### **Passo 2: Adicionar estrutura HTML**

Agora vamos criar a estrutura do nosso site:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      {/* Cabeçalho */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Olá! Eu sou [SEU NOME]
        </h1>
        <p className="text-xl text-blue-100">
          Desenvolvedor em formação 🚀
        </p>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4">
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
          </p>
        </section>

        {/* Galeria de fotos */}
        <section className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Minhas Fotos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Foto 1</span>
            </div>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Foto 2</span>
            </div>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Foto 3</span>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center py-8 text-white">
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
      </footer>
    </div>
  );
}
```

**🎯 O que aprendemos?**
- **JSX**: Mistura HTML com JavaScript
- **className**: Como adicionar estilos CSS
- **Estrutura semântica**: header, main, section, footer
- **Comentários**: `{/* */}` para anotar o código

### **Passo 3: Personalizar com suas informações**

Agora é sua vez! Substitua:
- `[SEU NOME]` pelo seu nome
- Adicione informações sobre você
- Mude as cores se quiser
- Adicione suas próprias fotos

### **Passo 4: Adicionar animações**

Vamos deixar o site mais dinâmico! Adicione estas classes CSS:

```tsx
// No cabeçalho, adicione:
<h1 className="text-4xl font-bold text-white mb-2 animate-bounce">
  Olá! Eu sou [SEU NOME]
</h1>

// Nas seções, adicione:
<section className="bg-white rounded-lg shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
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
4. **Adicione ícones** - Use emojis ou símbolos

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

### **Habilidades:**
- Criar estrutura semântica
- Usar classes CSS
- Personalizar design
- Adicionar animações
- Fazer sites responsivos

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

## 🎉 Parabéns!

Você criou seu primeiro site! 🚀
- É responsivo (funciona no celular)
- Tem animações bonitas
- É personalizado com suas informações
- Usa as melhores práticas de design

**Na próxima aula vamos criar um jogo! 🎮**
