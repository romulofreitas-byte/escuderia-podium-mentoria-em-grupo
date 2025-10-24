export interface ProgramWeek {
  week: number;
  title: string;
  phase: string;
  format: 'Grupo' | 'Individual';
  duration: string;
  theme: string;
  content: string[];
  deliverables: string[];
  tools: string[];
}

export const programWeeks: ProgramWeek[] = [
  {
    week: 1,
    title: 'Definição de Nicho e ICP',
    phase: 'Fundação',
    format: 'Grupo',
    duration: '2h',
    theme: 'Estruturar a base para sucesso',
    content: [
      'Tríade do Nicho (validação fundamental)',
      'Como escolher nicho com fácil acesso ao decisor',
      'Definição clara do ICP',
      'Capacidade financeira do cliente',
      'Entregáveis (Jornadas) estruturadas',
      'Precificação estratégica'
    ],
    deliverables: [
      'Canvas preenchido e validado',
      'Nicho e ICP bem definidos'
    ],
    tools: [
      'Canvas de Nicho e ICP',
      'Agente Pódium para pesquisa de mercado'
    ]
  },
  {
    week: 2,
    title: 'Construção de Lista e Qualificação',
    phase: 'Fundação',
    format: 'Grupo',
    duration: '2h',
    theme: 'Lista qualificada pronta para ligar',
    content: [
      'Como construir lista qualificada de 100-200 contatos',
      'Canais de prospecção por nicho',
      'Qualificação de leads',
      'Organização em planilha',
      'Priorização de contatos'
    ],
    deliverables: [
      'Lista de 100+ contatos qualificados',
      'Pronta para começar a ligar'
    ],
    tools: [
      'Agente Pódium para busca e qualificação',
      'Planilha de prospecção',
      'Google Maps, LinkedIn, OAB, CREA'
    ]
  },
  {
    week: 3,
    title: 'Cold Call e Agendamento R1',
    phase: 'Execução',
    format: 'Grupo',
    duration: '2h',
    theme: 'Primeiras ligações e reuniões',
    content: [
      'Anatomia de uma ligação efetiva',
      'Script de cold call estruturado',
      'Como ganhar atenção em 10 segundos',
      'Como qualificar durante a ligação',
      'Como agendar reunião R1',
      'Objeções comuns e como responder'
    ],
    deliverables: [
      'Script de cold call personalizado',
      'Primeiras ligações feitas',
      'Primeiras reuniões agendadas'
    ],
    tools: [
      'Script validado do Método Pódium',
      'Agente Pódium para gerar scripts personalizados',
      'Planilha de acompanhamento',
      'Sala de Ligação da Escuderia'
    ]
  },
  {
    week: 4,
    title: 'R1 - Reunião de Levantamento de Necessidades',
    phase: 'Execução',
    format: 'Grupo',
    duration: '2h',
    theme: 'Entender a dor real do cliente',
    content: [
      'Estrutura completa da R1',
      'Como construir rapport',
      'Técnicas de diagnóstico (SPIN Selling, MEDDIC)',
      'Como identificar a dor real',
      'Como qualificar o lead',
      'Como agendar R2'
    ],
    deliverables: [
      'Primeiras R1s conduzidas',
      'Leads qualificados',
      'R2s agendadas'
    ],
    tools: [
      'Framework R1 do Método Pódium',
      'Agente Pódium para preparar perguntas',
      'Planilha de acompanhamento',
      'Sala de Ligação da Escuderia'
    ]
  },
  {
    week: 5,
    title: 'R2 - Reunião de Apresentação de Projetos',
    phase: 'Execução',
    format: 'Grupo',
    duration: '2h',
    theme: 'Apresentar solução e proposta',
    content: [
      'Estrutura completa da R2',
      'Como apresentar solução',
      'Técnica de Anchoring (ancoragem de preço)',
      'Como estruturar proposta',
      'Como lidar com objeções',
      'Como fechar a venda'
    ],
    deliverables: [
      'Primeiras R2s conduzidas',
      'Primeiras propostas apresentadas'
    ],
    tools: [
      'Framework R2 do Método Pódium',
      'Agente Pódium para gerar propostas',
      'Planilha de acompanhamento',
      'Sala de Ligação da Escuderia'
    ]
  },
  {
    week: 6,
    title: 'Negociação e Fechamento',
    phase: 'Fechamento',
    format: 'Grupo',
    duration: '2h',
    theme: 'Fechar o primeiro contrato',
    content: [
      'Técnicas de negociação',
      'Como lidar com objeções de preço',
      'Oferecer condições de saída (reduz risco)',
      'Enquadrar condições de pagamento',
      'Usar descontos planejados',
      'Fechar a venda'
    ],
    deliverables: [
      'Primeiros contratos fechados (ou muito perto)',
      'Experiência prática em negociação'
    ],
    tools: [
      'Framework de Fechamento do Método Pódium',
      'Agente Pódium para gerar argumentos',
      'Planilha de acompanhamento',
      'Sala de Ligação da Escuderia'
    ]
  },
  {
    week: 7,
    title: 'Sessão Individual 1',
    phase: 'Consolidação',
    format: 'Individual',
    duration: '1h',
    theme: 'Revisão e ajustes personalizados',
    content: [
      'Revisão do progresso',
      'Ajustes personalizados',
      'Estratégia individual',
      'Próximos passos',
      'Suporte contínuo'
    ],
    deliverables: [
      'Plano de ação personalizado',
      'Suporte para próximas vendas'
    ],
    tools: [
      'Acompanhamento individual',
      'Estratégias personalizadas'
    ]
  },
  {
    week: 8,
    title: 'Sessão Individual 2',
    phase: 'Consolidação',
    format: 'Individual',
    duration: '1h',
    theme: 'Consolidação e escalonamento',
    content: [
      'Revisão de resultados',
      'Otimizações no processo',
      'Estratégias de escalonamento',
      'Próximas metas',
      'Suporte contínuo'
    ],
    deliverables: [
      'Processo otimizado',
      'Estratégia de escalonamento'
    ],
    tools: [
      'Análise de performance',
      'Estratégias avançadas'
    ]
  },
  {
    week: 9,
    title: 'Sessão Individual 3',
    phase: 'Consolidação',
    format: 'Individual',
    duration: '1h',
    theme: 'Refinamento e crescimento',
    content: [
      'Análise de resultados',
      'Refinamento de técnicas',
      'Estratégias de crescimento',
      'Planejamento futuro',
      'Suporte contínuo'
    ],
    deliverables: [
      'Técnicas refinadas',
      'Plano de crescimento'
    ],
    tools: [
      'Análise avançada',
      'Estratégias de crescimento'
    ]
  },
  {
    week: 10,
    title: 'Sessão Individual 4',
    phase: 'Consolidação',
    format: 'Individual',
    duration: '1h',
    theme: 'Consolidação final e próximos passos',
    content: [
      'Revisão completa do programa',
      'Consolidação de aprendizados',
      'Plano de ação futuro',
      'Certificação',
      'Suporte contínuo'
    ],
    deliverables: [
      'Certificação Piloto Pódium',
      'Plano de ação futuro',
      'Acesso contínuo à comunidade'
    ],
    tools: [
      'Certificação oficial',
      'Plano de ação final'
    ]
  }
];

export const phases = [
  {
    name: 'Fundação',
    weeks: '1-2',
    description: 'Estruturar a base para sucesso',
    color: 'bg-blue-500'
  },
  {
    name: 'Execução',
    weeks: '3-5',
    description: 'Fazer ligações, agendar reuniões',
    color: 'bg-green-500'
  },
  {
    name: 'Fechamento',
    weeks: '6',
    description: 'Fechar contratos',
    color: 'bg-red-500'
  },
  {
    name: 'Consolidação',
    weeks: '7-10',
    description: 'Consolidar aprendizados e escalar',
    color: 'bg-purple-500'
  }
];
