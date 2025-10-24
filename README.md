# Escuderia Pódium - Landing Page

Landing page premium para a Mentoria em Grupo Escuderia Pódium, desenvolvida com Next.js 14, TypeScript e TailwindCSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização com design system customizado
- **Lucide React** - Ícones modernos
- **Responsive Design** - Mobile-first approach

## 🎨 Design System

### Paleta de Cores
- **Primary:** `#f2b705` (Amarelo Pódium)
- **Background:** `#000000` (Preto premium)
- **Cards:** `#0a0a0a`, `#1a1a1a` (Tons de cinza escuro)
- **Text:** `#ffffff`, `#e5e5e5`, `#a3a3a3`

### Componentes
- Botões com hover states
- Cards com bordas sutis
- Spacing generoso
- Animações suaves

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── WhyItWorksSection.tsx
│   │   ├── WhoIsItForSection.tsx
│   │   ├── ProgramStructureSection.tsx
│   │   ├── MethodSection.tsx
│   │   ├── InvestmentSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   ├── ExpectedResultsSection.tsx
│   │   ├── BonusesSection.tsx
│   │   ├── AboutMentorSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Section.tsx
│       └── FAQ.tsx
└── data/
    ├── program.ts
    ├── faq.ts
    ├── benefits.ts
    └── comparison.ts
```

## 🎯 Seções da Landing Page

1. **Hero Section** - Proposta de valor principal
2. **Por Que Funciona** - 4 diferenciais principais
3. **Para Quem É** - Perfil ideal e não ideal
4. **Estrutura do Programa** - 6 semanas + 4 encontros mensais
5. **Método Pódium** - Metodologia em 6 etapas
6. **Investimento** - Preço e formas de pagamento
7. **Comparação** - Escuderia vs Elite
8. **Resultados Esperados** - O que você vai conquistar
9. **Bônus Exclusivos** - 4 bônus inclusos
10. **Sobre o Mentor** - Credenciais do Rômulo Freitas
11. **FAQ** - Perguntas frequentes
12. **CTA Final** - Conversão final
13. **Footer** - Contato e links

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

### Acesso
- **Desenvolvimento:** http://localhost:3000
- **Produção:** Após build, servido na porta 3000

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎨 Customização

### Cores
Edite `tailwind.config.ts` para alterar a paleta de cores:

```typescript
colors: {
  podium: {
    yellow: '#f2b705', // Sua cor principal
    black: '#000000',
    // ... outras cores
  }
}
```

### Conteúdo
Edite os arquivos em `src/data/` para alterar:
- FAQ (`faq.ts`)
- Programa (`program.ts`)
- Benefícios (`benefits.ts`)
- Comparação (`comparison.ts`)

## 📊 SEO e Performance

- Meta tags otimizadas
- Open Graph configurado
- Twitter Cards
- Lazy loading de imagens
- Otimizações de performance

## 🔗 Links de Contato

- **WhatsApp:** (31) 99429-3099
- **Email:** romulo.freitas@combustivelmv.com
- **LinkedIn:** /in/romulocsfreitas
- **Instagram:** @romulocsfreitas
- **YouTube:** @combustivelmv

## 📄 Licença

Todos os direitos reservados - Escuderia Pódium 2024
