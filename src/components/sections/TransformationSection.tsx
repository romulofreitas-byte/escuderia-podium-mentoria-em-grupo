"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TransformationCard {
  number: string;
  icon: string;
  title: string;
  description: string;
  additionalDetails: string[];
  featured?: boolean;
}

const transformations: TransformationCard[] = [
  {
    number: "01",
    icon: "✅",
    title: "Primeiro Contrato Fechado",
    description: "Ou muito próximo disso ao final das 6 semanas",
    additionalDetails: [
      "Celebração da primeira conquista comercial",
      "Validação do seu método e abordagem",
      "Momentum para os próximos clientes",
      "Prova social para futuras vendas"
    ]
  },
  {
    number: "02",
    icon: "🔧",
    title: "Processo Comercial Estruturado",
    description: "Metodologia completa do ICP ao fechamento",
    additionalDetails: [
      "Sistema replicável para todas as vendas",
      "Definição clara de seu ICP",
      "Funil de vendas otimizado",
      "Dashboard para acompanhar resultados"
    ]
  },
  {
    number: "03",
    icon: "📝",
    title: "Scripts Validados",
    description: "Scripts de cold call, R1 e R2 testados e funcionando",
    additionalDetails: [
      "Scripts que convertem em vendas reais",
      "Adaptação para diferentes nichos",
      "Técnicas de abertura impactantes",
      "Roteiro para toda a jornada comercial"
    ]
  },
  {
    number: "04",
    icon: "📞",
    title: "Confiança em Ligações",
    description: "Habilidade para fazer ligações estratégicas sem medo",
    featured: true,
    additionalDetails: [
      "Controle da ansiedade antes das ligações",
      "Capacidade de gerar interesse rapidamente",
      "Técnicas para controlar a conversa",
      "Conforto em ligações diretas com decisores"
    ]
  },
  {
    number: "05",
    icon: "👥",
    title: "Habilidade em Reuniões",
    description: "Capacidade para conduzir R1 e R2 com maestria",
    additionalDetails: [
      "Reunião 1: Descoberta e qualificação",
      "Reunião 2: Apresentação e fechamento",
      "Preparação estratégica para cada reunião",
      "Técnicas de sondagem e escuta ativa"
    ]
  },
  {
    number: "06",
    icon: "🤝",
    title: "Experiência em Negociação",
    description: "Técnicas para lidar com objeções e fechar vendas",
    additionalDetails: [
      "Antecipação e tratamento de objeções",
      "Técnicas de fechamento efetivas",
      "Negociação de preço e condições",
      "Criação de urgência genuína"
    ]
  },
  {
    number: "07",
    icon: "💼",
    title: "Mentalidade de Empresário",
    description: "Transformação da insegurança para confiança nas suas decisões comerciais",
    additionalDetails: [
      "De freelancer para empresário",
      "Tomada de decisões estratégicas",
      "Visão de longo prazo do negócio",
      "Autoconfiança em situações comerciais"
    ]
  },
  {
    number: "08",
    icon: "📊",
    title: "Pipeline Estruturado",
    description: "Processo replicável para escalar suas vendas",
    additionalDetails: [
      "Controle de todas as oportunidades",
      "Previsibilidade de receita",
      "Sistema de follow-up automatizado",
      "Dashboards para análise de performance"
    ]
  },
  {
    number: "09",
    icon: "🎯",
    title: "Se veja como Empresário",
    description: "Mude sua perspectiva e se veja como líder do seu próprio negócio",
    additionalDetails: [
      "Identidade profissional fortalecida",
      "Comunicação assertiva e confiante",
      "Posicionamento como autoridade",
      "Lealdade e satisfação dos clientes"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const TransformationSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="pt-[75px] pb-[75px]">
      <div className="container-custom">
        <motion.div 
          className="observacoes-precificacao-premium full-width"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="section-header-inline"
            variants={itemVariants}
          >
            <h3>✨ Como vou me sentir no final</h3>
            <span className="badge-info">9 transformações</span>
          </motion.div>
          
          <div className="info-cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {transformations.map((transform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`info-card ${transform.featured ? 'featured' : ''} cursor-pointer`}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 40px rgba(251, 191, 36, 0.15)',
                  transition: { duration: 0.2 }
                }}
                onClick={() => toggleExpand(index)}
              >
                <div className="info-card-header">
                  <span className="info-number">{transform.number}</span>
                  <span className="info-icon">{transform.icon}</span>
                </div>
                <h4>{transform.title}</h4>
                <p>{transform.description}</p>
                {transform.featured && (
                  <div className="featured-badge">Essencial</div>
                )}
                
                {/* Expand/Collapse Indicator */}
                <div className="mt-3 flex items-center justify-between text-yellow-400 text-xs font-semibold">
                  <span>Clique para ver mais</span>
                  {expandedCard === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden border-t border-gray-700/50 pt-4"
                    >
                      <ul className="space-y-2">
                        {transform.additionalDetails.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.05 }}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-yellow-400 mr-2">✓</span>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

