# 🔄 Refatorações e Boas Práticas - Curso Next.js

## 📚 Conceitos Fundamentais para Aula 1

### **🎨 Passo 8: CSS Classes (Substituir CSS Inline)**
**Conceitos:**
- Arquivo CSS separado
- Classes reutilizáveis
- Organização de estilos
- Separação de responsabilidades

**Implementação:**
- Criar `styles/globals.css`
- Converter estilos inline para classes
- Nomenclatura semântica (`.container`, `.header`, `.card`)
- Responsividade básica

### **🧩 Passo 9: Componentes Reutilizáveis**
**Conceitos:**
- DRY (Don't Repeat Yourself)
- Componentes funcionais
- Props e parâmetros
- Composição de componentes

**Implementação:**
- `<Card>` - para seções (Sobre Mim, Hobbies)
- `<ImageCard>` - para galeria de fotos
- `<HobbyCard>` - para cards de hobbies

### **📁 Passo 10: Estrutura de Pastas**
**Conceitos:**
- Organização de arquivos
- Separação por funcionalidade
- Convenções de nomenclatura
- Import/Export

**Implementação:**
```
src/
├── components/
│   ├── Card/
│   ├── ImageCard/
│   └── HobbyCard/
├── styles/
│   └── globals.css
└── app/
    └── page.tsx
```

### **🎯 Passo 11: Props e Estado**
**Conceitos:**
- Props dinâmicas
- useState hook
- Interatividade
- Dados dinâmicos

**Implementação:**
- Hobbies como array de objetos
- Fotos como array de dados
- Estado para interações
- Personalização via props

## 🎯 Ordem de Implementação Sugerida

### **Fase 1: Fundamentos (Passos 8-11)**
- CSS Classes
- Componentes básicos
- Estrutura de pastas
- Props e estado

## 📝 Benefícios Pedagógicos

### **Aprendizado Progressivo:**
1. **Conceitos básicos** → CSS, componentes
2. **Organização** → estrutura, TypeScript
3. **Interatividade** → estado, hooks
4. **Profissional** → testes, deploy

### **Boas Práticas:**
- **Código limpo** e legível
- **Reutilização** de componentes
- **Manutenibilidade** do código
- **Performance** otimizada
- **Acessibilidade** inclusiva

### **Preparação para o Mercado:**
- **Estrutura profissional** de projeto
- **Conceitos modernos** de React/Next.js
- **Ferramentas** da indústria
- **Workflow** de desenvolvimento

## 🎨 Exemplo de Refatoração Progressiva

### **Antes (CSS Inline):**
```tsx
<div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
```

### **Depois (CSS Classes):**
```tsx
<div className="card">
```

### **Depois (Componente):**
```tsx
<Card>
  <CardContent>
    {/* conteúdo */}
  </CardContent>
</Card>
```

### **Depois (Com Props):**
```tsx
<Card variant="white" padding="large">
  <CardContent>
    {/* conteúdo */}
  </CardContent>
</Card>
```

## 🚀 Próximos Passos

1. **Implementar Passo 8** - CSS Classes
2. **Criar componentes** reutilizáveis
3. **Organizar estrutura** de pastas
4. **Adicionar TypeScript** avançado
5. **Implementar design system**

Cada passo deve ser explicado didaticamente, mostrando o "antes" e "depois", e os benefícios de cada refatoração.
