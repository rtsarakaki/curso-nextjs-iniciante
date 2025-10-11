# 🛠️ Extensões do VS Code - Guia Completo

## 🎯 Quando Instalar

Este guia contém todas as extensões que vamos precisar durante o curso. **Não instale tudo de uma vez!** Vamos instalar conforme formos precisando.

## 📋 Extensões por Aula

### **Aula 1-2: Básico (Não precisa de extensões)**
- VS Code padrão é suficiente
- Foco em aprender HTML/CSS básico

### **Aula 3-4: JavaScript (Instalar quando precisar)**
- **Auto Rename Tag**: Para renomear tags HTML automaticamente
- **Bracket Pair Colorizer**: Para colorir parênteses e chaves

### **Aula 5-6: React (Instalar quando precisar)**
- **ES7+ React/Redux/React-Native snippets**: Para criar componentes React rapidamente
- **TypeScript Importer**: Para importar automaticamente funções

### **Aula 7-8: Tailwind CSS (Instalar quando precisar)**
- **Tailwind CSS IntelliSense**: Para autocompletar classes CSS
- **Prettier**: Para formatar código automaticamente

## 🔧 Como Instalar Extensões

### **Método 1: Pela Interface**
1. Abra o VS Code
2. Clique no ícone de extensões (ou `Ctrl+Shift+X`)
3. Digite o nome da extensão
4. Clique em "Install"

### **Método 2: Pelo Terminal**
```bash
# Instalar extensão específica
code --install-extension nome-da-extensao

# Exemplo: instalar Tailwind CSS IntelliSense
code --install-extension bradlc.vscode-tailwindcss
```

## 📚 Extensões Detalhadas

### **1. Auto Rename Tag**
- **Quando instalar**: Aula 3 (quando começar a usar HTML)
- **Para que serve**: Renomeia tags HTML automaticamente
- **Como usar**: Renomeie `<div>` para `<section>` e `</div>` vira `</section>`
- **Por que é útil**: Evita erros de tags não fechadas

### **2. Bracket Pair Colorizer**
- **Quando instalar**: Aula 3 (quando começar a usar JavaScript)
- **Para que serve**: Colore parênteses, chaves e colchetes
- **Como usar**: Instala e funciona automaticamente
- **Por que é útil**: Facilita ver onde começam e terminam blocos

### **3. ES7+ React/Redux/React-Native snippets**
- **Quando instalar**: Aula 5 (quando começar a usar React)
- **Para que serve**: Cria código React automaticamente
- **Como usar**: Digite `rafce` e pressione Tab = cria componente React
- **Por que é útil**: Acelera muito a programação

### **4. TypeScript Importer**
- **Quando instalar**: Aula 5 (quando começar a usar React)
- **Para que serve**: Importa automaticamente tipos e funções
- **Como usar**: Digite `useState` e ele importa automaticamente
- **Por que é útil**: Economiza tempo e evita erros

### **5. Tailwind CSS IntelliSense**
- **Quando instalar**: Aula 7 (quando começar a usar Tailwind)
- **Para que serve**: Autocompletar classes CSS do Tailwind
- **Como usar**: Digite `bg-` e veja todas as opções de cor
- **Por que é útil**: Evita erros e acelera o desenvolvimento

### **6. Prettier - Code formatter**
- **Quando instalar**: Aula 7 (quando começar a usar Tailwind)
- **Para que serve**: Formata o código automaticamente
- **Como usar**: Salve o arquivo e ele formata sozinho
- **Por que é útil**: Mantém o código limpo e organizado

## ⚙️ Configurações Recomendadas

### **Configurações Básicas (Aula 1-4)**
```json
{
  "editor.formatOnSave": true,
  "editor.wordWrap": "on"
}
```

### **Configurações Avançadas (Aula 5+)**
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

## ⌨️ Atalhos de Teclado Essenciais

| Atalho | O que faz | Quando usar |
|--------|-----------|-------------|
| `Ctrl + S` | Salvar arquivo | Sempre que terminar de editar |
| `Ctrl + Z` | Desfazer | Quando cometer um erro |
| `Ctrl + C` | Copiar | Para copiar código |
| `Ctrl + V` | Colar | Para colar código |
| `Ctrl + F` | Buscar | Para encontrar texto no código |
| `Ctrl + /` | Comentar linha | Para desativar código temporariamente |
| `Ctrl + `` | Terminal | Para abrir o terminal |
| `Ctrl + Space` | Autocompletar | Para ver sugestões de código |

## 🎯 Dicas de Produtividade

### **Para Iniciantes (Aula 1-4)**
1. **Use Ctrl+S**: Salve sempre que terminar de editar
2. **Use Ctrl+Z**: Desfazer quando cometer erro
3. **Use Ctrl+F**: Para encontrar texto no código
4. **Use Ctrl+/**: Para comentar código temporariamente

### **Para Intermediários (Aula 5-8)**
1. **Use snippets**: Digite `rafce` e pressione Tab para criar componente
2. **Use autocompletar**: Digite as primeiras letras e pressione Tab
3. **Use F12**: Para navegar pelo código e entender como funciona
4. **Use Ctrl+Shift+P**: Para acessar qualquer função do VS Code

## 🚀 Instalação Rápida (Quando Precisar)

### **Para Aula 3-4 (JavaScript)**
```bash
code --install-extension formulahendry.auto-rename-tag
code --install-extension coenraads.bracket-pair-colorizer-2
```

### **Para Aula 5-6 (React)**
```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension pmneo.tsimporter
```

### **Para Aula 7-8 (Tailwind)**
```bash
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
```

## 💡 Lembre-se

- **Não instale tudo de uma vez!** Isso pode assustar e confundir
- **Instale conforme precisar** durante o curso
- **O VS Code padrão** já tem tudo que precisamos para começar
- **Foque no aprendizado** primeiro, ferramentas depois

---

**Este guia será útil conforme formos avançando no curso! 🚀**
