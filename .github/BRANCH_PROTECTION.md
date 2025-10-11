# 🌿 Configuração de Branches

## 📋 Estrutura de Branches

### **main** (Produção)
- ✅ Código estável e testado
- ✅ Deploy automático para produção
- ✅ Apenas merge de PRs aprovados
- ✅ Protegida contra push direto

### **develop** (Desenvolvimento)
- 🔄 Branch principal de desenvolvimento
- 🔄 Integração de novas features
- 🔄 Testes e validações
- 🔄 Merge para main via PR

## 🛡️ Proteção da Branch Main

### **Regras Configuradas:**
1. **Require pull request reviews** - PRs precisam de aprovação
2. **Require status checks** - CI/CD deve passar
3. **Require branches to be up to date** - Branch deve estar atualizada
4. **Restrict pushes** - Apenas via PR
5. **Require linear history** - Histórico linear

### **Como Trabalhar:**
1. **Criar feature branch** a partir de develop
2. **Desenvolver** na feature branch
3. **Fazer PR** para develop
4. **Após aprovação**, fazer PR de develop para main

## 🔄 Workflow de Desenvolvimento

### **1. Nova Feature:**
```bash
# Criar branch da feature
git checkout develop
git pull origin develop
git checkout -b feature/nova-aula-03

# Desenvolver
# ... fazer alterações ...

# Commit e push
git add .
git commit -m "feat: implementar Aula 3"
git push origin feature/nova-aula-03

# Criar PR para develop
```

### **2. Merge para Develop:**
```bash
# Após aprovação do PR
git checkout develop
git pull origin develop
git merge feature/nova-aula-03
git push origin develop
```

### **3. Deploy para Produção:**
```bash
# Criar PR de develop para main
# Após aprovação e merge
git checkout main
git pull origin main
# Deploy automático acontece
```

## 📝 Convenções de Commits

### **Tipos de Commit:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, sem mudança de código
- `refactor:` - Refatoração de código
- `test:` - Adição de testes
- `chore:` - Tarefas de manutenção

### **Exemplos:**
```bash
git commit -m "feat: implementar Aula 3 - Galeria de Fotos"
git commit -m "fix: corrigir bug no jogo da memória"
git commit -m "docs: atualizar guia do professor"
git commit -m "style: melhorar formatação do código"
```

## 🚀 Deploy Automático

### **Branch Main:**
- Deploy automático para produção
- URL: https://curso-nextjs-iniciante.vercel.app
- Apenas código estável e testado

### **Branch Develop:**
- Deploy automático para preview
- URL: https://curso-nextjs-iniciante-git-develop.vercel.app
- Para testes e validações

## 🔍 Code Review

### **Checklist para PRs:**
- [ ] Código funciona corretamente
- [ ] Testes passam
- [ ] Documentação atualizada
- [ ] Sem erros de linting
- [ ] Responsivo em diferentes telas
- [ ] Performance adequada

### **Critérios de Aprovação:**
- ✅ Pelo menos 1 aprovação
- ✅ CI/CD passou
- ✅ Sem conflitos
- ✅ Código revisado

## 📚 Recursos Úteis

### **Comandos Git:**
```bash
# Ver branches
git branch -a

# Mudar para develop
git checkout develop

# Atualizar develop
git pull origin develop

# Criar feature branch
git checkout -b feature/nome-da-feature

# Ver status
git status

# Ver histórico
git log --oneline
```

### **GitHub:**
- **Issues**: Para reportar bugs e solicitar features
- **Projects**: Para gerenciar tarefas
- **Actions**: Para ver status do CI/CD
- **Pull Requests**: Para revisar código

---

## 🎯 Lembre-se

- **Sempre trabalhe na develop** para novas features
- **Use PRs** para merge de código
- **Teste antes** de fazer commit
- **Documente** suas mudanças
- **Mantenha** o código limpo e organizado

**Boa programação! 🚀**
