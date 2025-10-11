# 📁 Estrutura do Projeto - Curso Next.js

## 🌿 Branches Configuradas

### **main** (Produção)
- ✅ Código estável e testado
- ✅ Deploy automático para produção
- ✅ Protegida contra push direto
- ✅ Apenas merge via PR aprovado

### **develop** (Desenvolvimento)
- 🔄 Branch principal de desenvolvimento
- 🔄 Integração de novas features
- 🔄 Testes e validações
- 🔄 Merge para main via PR

## 📂 Estrutura de Arquivos

```
curso-nextjs-iniciante/
├── 📁 .github/
│   ├── 📄 workflows/ci.yml          # CI/CD Pipeline
│   └── 📄 BRANCH_PROTECTION.md      # Guia de branches
├── 📁 aulas/                       # Documentação das aulas
│   ├── 📄 README.md                 # Índice das aulas
│   ├── 📄 aula-01-primeiro-site.md  # Aula 1
│   └── 📄 aula-02-jogo-memoria.md   # Aula 2
├── 📁 src/
│   ├── 📁 aulas/                    # Código das aulas
│   │   ├── 📁 aula-01/
│   │   │   └── 📄 PrimeiroSite.tsx  # Site pessoal
│   │   └── 📁 aula-02/
│   │       └── 📄 MemoryGame.tsx    # Jogo da memória
│   └── 📁 app/
│       └── 📄 page.tsx              # Página principal
├── 📄 README.md                     # Documentação principal
├── 📄 INSTRUCOES_PROFESSOR.md       # Guia do professor
├── 📄 EXTENSOES_VSCODE.md           # Guia de extensões
├── 📄 CODIGO_DAS_AULAS.md           # Guia do código
├── 📄 ESTRUTURA_PROJETO.md          # Este arquivo
├── 📄 vercel.json                   # Configuração Vercel
├── 📄 .gitattributes               # Configurações Git
└── 📄 .gitignore                   # Arquivos ignorados
```

## 🚀 Como Trabalhar

### **1. Desenvolvimento Local:**
```bash
# Clonar repositório
git clone https://github.com/rtsarakaki/curso-nextjs-iniciante.git

# Entrar na pasta
cd curso-nextjs-iniciante

# Instalar dependências
npm install

# Executar projeto
npm run dev
```

### **2. Nova Feature:**
```bash
# Mudar para develop
git checkout develop
git pull origin develop

# Criar branch da feature
git checkout -b feature/nova-aula-03

# Desenvolver
# ... fazer alterações ...

# Commit e push
git add .
git commit -m "feat: implementar Aula 3"
git push origin feature/nova-aula-03

# Criar PR para develop
```

### **3. Deploy:**
```bash
# Após aprovação do PR
git checkout develop
git pull origin develop

# Criar PR de develop para main
# Após aprovação, deploy automático acontece
```

## 🔧 Configurações

### **CI/CD Pipeline:**
- ✅ Testes automáticos
- ✅ Linting
- ✅ Build
- ✅ Deploy automático

### **Branches Protegidas:**
- ✅ main: Apenas via PR
- ✅ develop: Desenvolvimento principal
- ✅ Feature branches: Para novas funcionalidades

### **Convenções:**
- ✅ Commits semânticos
- ✅ PRs com descrição
- ✅ Code review obrigatório
- ✅ Testes antes do merge

## 📚 Documentação

### **Para Professores:**
- 📄 `INSTRUCOES_PROFESSOR.md` - Metodologia de ensino
- 📄 `EXTENSOES_VSCODE.md` - Ferramentas de desenvolvimento
- 📄 `aulas/` - Documentação das aulas

### **Para Alunos:**
- 📄 `README.md` - Visão geral do curso
- 📄 `CODIGO_DAS_AULAS.md` - Guia do código
- 📄 `aulas/` - Instruções das aulas

### **Para Desenvolvedores:**
- 📄 `ESTRUTURA_PROJETO.md` - Este arquivo
- 📄 `.github/BRANCH_PROTECTION.md` - Workflow
- 📄 `vercel.json` - Configuração de deploy

## 🎯 Próximos Passos

### **Desenvolvimento:**
1. **Implementar Aulas 3-12** na branch develop
2. **Adicionar mais jogos** e projetos
3. **Melhorar documentação** conforme necessário
4. **Testes automatizados** para cada aula

### **Produção:**
1. **Deploy automático** via Vercel
2. **URL pública** para acesso
3. **Versionamento** das releases
4. **Monitoramento** de uso

## 🔍 Comandos Úteis

### **Git:**
```bash
# Ver branches
git branch -a

# Mudar para develop
git checkout develop

# Atualizar develop
git pull origin develop

# Ver status
git status

# Ver histórico
git log --oneline
```

### **NPM:**
```bash
# Instalar dependências
npm install

# Executar desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm run start

# Linting
npm run lint
```

## 🎉 Status Atual

- ✅ **Repositório criado** e configurado
- ✅ **Branches protegidas** configuradas
- ✅ **CI/CD pipeline** implementado
- ✅ **Documentação completa** criada
- ✅ **Código das Aulas 1-2** funcionando
- ✅ **Deploy automático** configurado
- ✅ **Workflow de desenvolvimento** estabelecido

**Projeto pronto para desenvolvimento colaborativo! 🚀**
