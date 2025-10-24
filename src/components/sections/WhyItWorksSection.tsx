import React from 'react';
import { FeatureCard } from '@/components/ui/Card';
import { Section, Heading, Text } from '@/components/ui/Section';
import { Target, Bot, Phone, Users } from 'lucide-react';
import { benefits } from '@/data/benefits';

export const WhyItWorksSection: React.FC = () => {
  const icons = {
    Target: Target,
    Bot: Bot,
    Phone: Phone,
    Users: Users
  };

  return (
    <Section id="por-que-funciona" className="bg-gray-950">
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
          <span className="text-yellow-400 font-semibold text-sm tracking-wide uppercase">Por Que Funciona</span>
        </div>
        <Heading level={2} center className="mb-8 text-white">
          A Combinação Perfeita para{' '}
          <span className="gradient-text">Sucesso</span>
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto text-gray-300">
          Metodologia comprovada + IA + Comunidade ativa = Resultados garantidos
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {benefits.map((benefit, index) => {
          const IconComponent = icons[benefit.icon as keyof typeof icons];
          return (
            <div key={index} className="card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300">
                <IconComponent className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      {/* Additional explanation */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Não é apenas teoria
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Você vai praticar com outros pilotos na Sala de Ligação, usar o Agente Pódium para gerar scripts personalizados, 
            e ter o suporte contínuo da comunidade. É a <span className="text-yellow-400 font-semibold">fórmula completa</span> para acelerar sua jornada de vendas.
          </p>
        </div>
      </div>
    </Section>
  );
};
