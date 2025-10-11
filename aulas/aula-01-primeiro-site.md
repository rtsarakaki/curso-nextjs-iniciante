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

## 🛠️ Preparação

### 1. Abra o VS Code
### 2. Navegue até a pasta do projeto
### 3. Execute o comando: `npm run dev`
### 4. Abra o navegador em `http://localhost:3000`

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
