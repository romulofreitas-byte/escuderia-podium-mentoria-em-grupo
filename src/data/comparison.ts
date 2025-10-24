export interface Comparison {
  feature: string;
  escuderia: string | boolean;
  elite: string | boolean;
}

export const comparison: Comparison[] = [
  {
    feature: "Formato",
    escuderia: "Grupo + Individual",
    elite: "100% Individual"
  },
  {
    feature: "Encontros em Grupo",
    escuderia: "6 encontros (2h cada)",
    elite: "Nenhum"
  },
  {
    feature: "Sessões Individuais",
    escuderia: "4 (1/mês)",
    elite: "12+ (1/semana)"
  },
  {
    feature: "Role Play de Vendas",
    escuderia: "Sala de Ligação",
    elite: "Sessões 1:1"
  },
  {
    feature: "Personalização",
    escuderia: "Média",
    elite: "Ultra-personalizada"
  },
  {
    feature: "Preço",
    escuderia: "R$ 1.850",
    elite: "R$ 10.000"
  },
  {
    feature: "Duração",
    escuderia: "10 semanas",
    elite: "12+ semanas"
  },
  {
    feature: "Ideal Para",
    escuderia: "Iniciantes",
    elite: "Avançados"
  }
];

export interface MethodStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const methodSteps: MethodStep[] = [
  {
    step: 1,
    title: "Definição de ICP",
    description: "Escolher o cliente certo",
    icon: "Target"
  },
  {
    step: 2,
    title: "Construção de Lista",
    description: "Encontrar os clientes",
    icon: "Users"
  },
  {
    step: 3,
    title: "Cold Call",
    description: "Fazer contato inicial",
    icon: "Phone"
  },
  {
    step: 4,
    title: "R1",
    description: "Entender a necessidade",
    icon: "MessageCircle"
  },
  {
    step: 5,
    title: "R2",
    description: "Apresentar solução",
    icon: "Presentation"
  },
  {
    step: 6,
    title: "Fechamento",
    description: "Fechar o contrato",
    icon: "Handshake"
  }
];
