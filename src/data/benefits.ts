export interface Bonus {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Result {
  title: string;
  description: string;
  icon: string;
}

export const bonuses: Bonus[] = [
  {
    title: "Agente Pódium",
    description: "Assistente de IA exclusivo para pilotos da Escuderia",
    icon: "Bot",
    details: [
      "Pesquisa de mercado automatizada",
      "Geração de scripts personalizados",
      "Criação de propostas sob medida",
      "Preparação de reuniões",
      "Suporte contínuo durante todo o programa"
    ]
  },
  {
    title: "Sala de Ligação da Escuderia",
    description: "Espaço exclusivo para treino real entre pilotos",
    icon: "Phone",
    details: [
      "Role play de ligações entre pilotos",
      "Feedback em tempo real",
      "Simulação de reuniões R1 e R2",
      "Treino de técnicas de fechamento",
      "Compartilhamento de experiências"
    ]
  },
  {
    title: "Comunidade de Pilotos",
    description: "Grupo exclusivo para networking e suporte contínuo",
    icon: "Users",
    details: [
      "Grupo privado no WhatsApp/Telegram",
      "Networking entre pilotos",
      "Compartilhamento de cases de sucesso",
      "Suporte mútuo entre participantes",
      "Acesso vitalício à comunidade"
    ]
  },
  {
    title: "Certificação Piloto Pódium",
    description: "Reconhecimento oficial do domínio do Método Pódium",
    icon: "Award",
    details: [
      "Certificado oficial 'Piloto Pódium - Escuderia'",
      "Reconhecimento na comunidade",
      "Credibilidade para seus clientes",
      "Badge para redes sociais",
      "Acesso a eventos exclusivos"
    ]
  }
];

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    title: "Método Comprovado",
    description: "Método Pódium completo testado em múltiplos nichos, do ICP ao fechamento",
    icon: "Target"
  },
  {
    title: "Agente Pódium IA",
    description: "Assistente inteligente para pesquisa, scripts e propostas personalizadas",
    icon: "Bot"
  },
  {
    title: "Sala de Ligação",
    description: "Treino real entre pilotos com feedback em tempo real",
    icon: "Phone"
  },
  {
    title: "Comunidade Ativa",
    description: "Suporte contínuo de outros pilotos e networking profissional",
    icon: "Users"
  }
];

export interface Result {
  title: string;
  description: string;
  icon: string;
}

export const expectedResults: Result[] = [
  {
    title: "Primeiro Contrato Fechado",
    description: "Ou muito próximo disso ao final das 6 semanas",
    icon: "CheckCircle"
  },
  {
    title: "Processo Comercial Estruturado",
    description: "Metodologia completa do ICP ao fechamento",
    icon: "Workflow"
  },
  {
    title: "Scripts Validados",
    description: "Scripts de cold call, R1 e R2 testados e funcionando",
    icon: "FileText"
  },
  {
    title: "Confiança em Ligações",
    description: "Habilidade para fazer ligações estratégicas sem medo",
    icon: "Phone"
  },
  {
    title: "Habilidade em Reuniões",
    description: "Capacidade para conduzir R1 e R2 com maestria",
    icon: "Users"
  },
  {
    title: "Experiência em Negociação",
    description: "Técnicas para lidar com objeções e fechar vendas",
    icon: "Handshake"
  },
  {
    title: "2-3 Contratos Fechados",
    description: "Ao final das 10 semanas completas",
    icon: "TrendingUp"
  },
  {
    title: "Pipeline Estruturado",
    description: "Processo replicável para escalar suas vendas",
    icon: "BarChart3"
  }
];
