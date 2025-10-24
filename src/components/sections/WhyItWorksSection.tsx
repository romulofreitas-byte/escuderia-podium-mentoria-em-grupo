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
    <Section id="por-que-funciona" className="bg-podium-dark-secondary">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Por Que Funciona Tanto?
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          A Escuderia Pódium combina metodologia comprovada com ferramentas de IA 
          e comunidade ativa para acelerar seu aprendizado em vendas
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => {
          const IconComponent = icons[benefit.icon as keyof typeof icons];
          return (
            <FeatureCard
              key={index}
              icon={<IconComponent className="w-8 h-8" />}
              title={benefit.title}
              description={benefit.description}
            />
          );
        })}
      </div>

      {/* Additional explanation */}
      <div className="mt-16 text-center">
        <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
            A Combinação Perfeita para Sucesso
          </h3>
          <p className="text-podium-text-secondary text-lg leading-relaxed">
            Não é apenas teoria. Você vai praticar com outros pilotos na Sala de Ligação, 
            usar o Agente Pódium para gerar scripts personalizados, e ter o suporte contínuo 
            da comunidade. É a fórmula completa para acelerar sua jornada de vendas.
          </p>
        </div>
      </div>
    </Section>
  );
};
