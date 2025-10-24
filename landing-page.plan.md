<!-- b6bcb8a1-7be0-4cb3-a207-d60af12c4dbf cbb45f8b-e77d-4237-ae09-4bb11d4c666e -->
# Landing Page - Escuderia Pódium

**Criar landing page premium para a Mentoria em Grupo Escuderia Pódium usando Next.js, com identidade visual profissional (preto/branco/amarelo #f2b705) inspirada na estrutura de alta conversão do workshop Orbyka.**

## Estrutura do Projeto

Aplicação Next.js 14+ com TypeScript e TailwindCSS.

**Arquitetura:**

- `/app` - Page principal e metadata SEO
- `/components/sections` - Componentes de cada seção
- `/components/ui` - Componentes reutilizáveis (Button, Card, etc)
- `/public` - Assets estáticos
- `/data` - Conteúdo estruturado (FAQ, cronograma, módulos)
- `/lib` - Utils e configurações

## Seções da Landing Page

### 1. Hero Section

**"Do Zero ao Primeiro Contrato Fechado - Juntos no Pódium"**

- Badge: "1ª Turma - Black Friday Antecipada"
- Headline: Proposta de valor clara
- Subheadline: Transformação em 10 semanas
- Prova social: "R$ 1.850 (90% OFF - Valor Real: R$ 18.000)"
- CTA amarelo destacado: "Entrar na Escuderia Pódium"
- Bullets de resultados garantidos (6 itens principais)
- Badge de urgência: "5-10 vagas limitadas"

### 2. Por Que Funciona

Grid com 4 cards:

- **Método Comprovado:** Pódium completo (ICP → Fechamento)
- **Agente Pódium IA:** Assistente para pesquisa, scripts e propostas
- **Sala de Ligação:** Treino real entre pilotos com feedback
- **Comunidade Ativa:** Suporte contínuo de outros pilotos

### 3. Para Quem É

**Perfil Ideal do Piloto:**

- Grid com checkmarks (verde/amarelo)
- Perfis: Iniciantes querendo primeiro contrato, membros da Comunidade Pódium, profissionais querendo estruturar processo comercial
- Seção "Não é para você se..." (transparência)

### 4. Estrutura do Programa

**6 Semanas Intensivas + 4 Encontros Mensais**

Timeline visual com 3 fases:

- **Fase 1 - Fundação (Semanas 1-2):** Nicho/ICP + Lista Qualificada
- **Fase 2 - Execução (Semanas 3-5):** Cold Call + R1 + R2 
- **Fase 3 - Fechamento (Semana 6):** Negociação e Fechamento
- **Fase 4 - Consolidação (Meses 2-5):** 4 sessões individuais mensais

Primeiras 6 semanas (encontros semanais em grupo, 2h cada):

- Tema principal
- Duração e formato
- Entregas esperadas
- Ferramentas utilizadas

Depois: 1 encontro individual por mês (1h cada) para consolidação

### 5. Cronograma Detalhado

Tabela estilizada com:

- 10 semanas listadas
- Temas
- Formato (Grupo 2h / Individual 1h)
- Total: 16 horas de mentoria

### 6. Método Pódium

**Seção educativa sobre a metodologia:**

- 6 etapas visualizadas
- ICP → Lista → Cold Call → R1 → R2 → Fechamento
- Icons para cada etapa
- Descrição breve de cada fase

### 7. Ferramentas e Recursos

Cards destacando:

- **Agente Pódium:** IA para pesquisa, scripts, propostas
- **Sala de Ligação:** Role play e treino real
- **Templates:** Scripts, planilhas, frameworks
- **Comunidade:** Grupo exclusivo de pilotos

### 8. Investimento e Oferta

**Destaque visual premium:**

- Preço de: ~~R$ 18.000~~ 
- Por apenas: **R$ 1.850** (em fonte grande, amarelo)
- Breakdown de valor:
- Método Pódium: R$ 5.000
- Ferramentas: R$ 2.000
- 16h Mentoria: R$ 8.000
- Comunidade: R$ 3.000
- O que está incluso (lista com checkmarks)
- 2 CTAs: Principal (amarelo) + Secundário (outline)
- Badges: "Black Friday Antecipada" + "Apenas Pilotos Pódium"

### 9. Resultados Esperados

**Ao Final das 10 Semanas:**

- Grid com 6-8 resultados concretos
- Icons + textos curtos
- Destaques: "Primeiro contrato fechado", "2-3 contratos fechados", "Pipeline estruturado"

### 10. Comparação: Escuderia vs Elite

Tabela side-by-side premium:

- Formato, Sessões, Personalização, Preço, Duração, Ideal Para
- Destacar vantagens da Escuderia para iniciantes
- Design neutro (sem favorecer um sobre o outro)

### 11. Bônus Exclusivos

4 cards com bônus:

1. Agente Pódium (IA)
2. Sala de Ligação
3. Comunidade de Pilotos
4. Certificação "Piloto Pódium - Escuderia"

### 12. Urgência e Escassez

Seção visual com:

- "Apenas 5-10 vagas disponíveis"
- "1ª Turma - Condições especiais"
- "Apenas para Pilotos da Comunidade Pódium"
- Countdown timer (opcional)

### 13. FAQ

Accordion com 8-10 perguntas:

- Diferença entre Escuderia e Elite
- Garantia de resultados
- Tempo de dedicação necessário
- Acesso ao Agente Pódium
- Certificação
- Próximas turmas
- Formas de pagamento
- Cancelamento

### 14. Sobre o Mentor

Card com:

- Nome: Rômulo Freitas
- Bio profissional
- Credenciais
- Links sociais (@romulocsfreitas, @combustivelmv)

### 15. CTA Final

Seção de conversão final:

- Recap da oferta
- CTA grande e destacado
- Garantias e segurança
- Contato direto

### 16. Footer

- Contato: email, WhatsApp, redes sociais
- Links úteis
- Informações legais
- Copyright

## Design System - Escuderia Pódium

**Paleta de Cores:**

- Primary: `#f2b705` (Amarelo Pódium - CTAs, destaques)
- Background: `#000000` (Preto premium)
- Cards: `#0a0a0a`, `#1a1a1a` (Tons de cinza escuro)
- Text: `#ffffff`, `#e5e5e5`, `#a3a3a3`
- Borders: `rgba(242, 183, 5, 0.15)`
- Gradients: Amarelo para destaques visuais

**Tipografia:**

- Font: Inter (Google Fonts)
- H1: 3xl-6xl bold
- H2: 2xl-4xl bold
- Body: base-lg normal

**Componentes:**

- Buttons: Amarelo sólido + Outline branco
- Cards: Fundo escuro, border amarelo sutil, shadow
- Icons: Lucide React (outline style)
- Spacing: Generoso (py-16, gap-12)
- Animações: Fade-in on scroll, hover suaves

## Dados Estruturados

Criar arquivos TypeScript em `/data`:

- `program.ts` - 10 semanas detalhadas
- `faq.ts` - Perguntas e respostas
- `bonuses.ts` - 4 bônus
- `comparison.ts` - Escuderia vs Elite
- `results.ts` - Resultados esperados
- `benefits.ts` - Por que funciona

## Funcionalidades Técnicas

- SEO: Meta tags completas, Open Graph, Twitter Cards
- Responsive: Mobile-first, breakpoints Tailwind
- Performance: Next.js Image, lazy loading
- Analytics ready: Google Analytics, Meta Pixel
- CTA links: Configuráveis para checkout/formulário
- Smooth scroll para navegação interna
- Framer Motion para animações (opcional)

## Conteúdo-Chave para Copywriting

**Headlines principais:**

- "Do Zero ao Primeiro Contrato Fechado - Juntos no Pódium"
- "10 Semanas Para Estruturar Seu Processo Comercial e Fechar Vendas"
- "Método Pódium + Agente IA + Comunidade de Pilotos"

**Prova Social:**

- "Apenas para Pilotos da Comunidade Pódium"
- "1ª Turma com Condições Especiais"
- "Vagas Limitadas: 5-10 Pilotos"

**Garantias:**

- 16 horas de mentoria (grupo + individual)
- Acesso ao Agente Pódium
- Sala de Ligação exclusiva
- Comunidade de suporte
- Certificação oficial

### To-dos

- [x] Configurar projeto Next.js com TypeScript, TailwindCSS e estrutura de pastas
- [x] Criar arquivos de dados estruturados (cases, FAQ, cronograma, benefícios)
- [x] Implementar Hero Section com título, proposta de valor, prova social e CTA
- [x] Criar seção 'Por Que Funciona' com cards de diferenciais
- [x] Implementar seção de Resultados e Cases com dados reais
- [x] Criar seções de Conteúdo do Programa e Cronograma
- [x] Implementar seções de Investimento, Benefícios e Autoridade
- [x] Criar FAQ (accordion) e Footer com informações legais
- [x] Ajustar responsividade, animações e otimizações de performance
