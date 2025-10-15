# 📚 Estrutura de Aulas - Curso Next.js Iniciante

## 🎯 Padrão de Organização

### **📁 Estrutura de Pastas**
```
src/
├── aulas/
│   ├── aula-01/           # Aula 1: Primeiro Site
│   ├── aula-01-1/         # Aula 1.1: JavaScript Puro
│   ├── aula-02/           # Aula 2: Jogo da Memória
│   └── aula-03/           # Aula 3: (futura)
├── components/
├── pages/
└── ...
```

## 📋 Regras para Cada Aula

### **🔧 Nomenclatura de Pastas**
- **Formato**: `aula-XX` ou `aula-XX-Y`
- **Exemplos**: 
  - `aula-01` (Aula principal)
  - `aula-01-1` (Sub-aula)
  - `aula-02` (Próxima aula)

### **🔧 Arquivos por Aula**
```
src/aulas/aula-XX/
├── nome-do-arquivo.js     # Código principal
├── package.json           # Se necessário (ES6 modules)
├── README.md              # Instruções da aula
└── assets/                # Imagens, etc.
```

## 📚 Exemplos de Organização

### **🎯 Aula 1.1: JavaScript Puro**
```
src/aulas/aula-01-1/
├── multiplication-table.js    # Gerador de tabuada
├── package.json               # ES6 modules
└── README.md                  # Instruções
```

### **🎯 Aula 1: Primeiro Site**
```
src/aulas/aula-01/
├── components/                # Componentes React
├── styles/                   # CSS
└── README.md                 # Instruções
```

### **🎯 Aula 2: Jogo da Memória**
```
src/aulas/aula-02/
├── components/                # Componentes do jogo
├── hooks/                    # Custom hooks
├── types/                    # TypeScript types
└── README.md                 # Instruções
```

## 🛠️ Instruções para Alunos

### **📱 Como Executar Código JavaScript**
```bash
# Navegar para a pasta da aula
cd src/aulas/aula-01-1

# Executar o arquivo
node multiplication-table.js
```

### **📱 Como Executar Código Next.js**
```bash
# Na raiz do projeto
npm run dev

# Acessar no navegador
http://localhost:3000
```

## 📋 Checklist para Novas Aulas

### **✅ Ao Criar Nova Aula:**
1. **Criar pasta**: `src/aulas/aula-XX/`
2. **Adicionar arquivos**: Código, documentação
3. **Atualizar roteiro**: `aulas/aula-XX-nome.md`
4. **Testar funcionamento**: Verificar se executa
5. **Documentar instruções**: README.md na pasta

### **✅ Estrutura Mínima:**
- **Pasta da aula**: `src/aulas/aula-XX/`
- **Código funcional**: Arquivos testados
- **Documentação**: README.md com instruções
- **Roteiro**: `aulas/aula-XX-nome.md`

## 🎯 Vantagens desta Estrutura

### **✅ Organização:**
- **Separação clara**: Cada aula em sua pasta
- **Fácil navegação**: Estrutura lógica
- **Manutenção**: Fácil de encontrar e editar

### **✅ Para Alunos:**
- **Instruções claras**: Caminho exato dos arquivos
- **Execução simples**: Comandos específicos
- **Organização**: Fácil de seguir

### **✅ Para Desenvolvimento:**
- **Padrão consistente**: Mesma estrutura
- **Escalabilidade**: Fácil adicionar novas aulas
- **Versionamento**: Git organizado

## 📚 Exemplo Prático

### **🎯 Criando Aula 1.1:**
```bash
# 1. Criar pasta
mkdir -p src/aulas/aula-01-1

# 2. Criar arquivo
touch src/aulas/aula-01-1/multiplication-table.js

# 3. Adicionar package.json se necessário
echo '{"type": "module"}' > src/aulas/aula-01-1/package.json

# 4. Testar
cd src/aulas/aula-01-1
node multiplication-table.js
```

**Esta estrutura garante organização, clareza e facilidade de uso para todos os alunos!** 🚀✨
