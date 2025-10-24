import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { bonuses } from '@/data/benefits';
import { Bot, Phone, Users, Award } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const icons = {
    Bot: Bot,
    Phone: Phone,
    Users: Users,
    Award: Award
  };

  return (
    <Section id="bonus" className="bg-podium-dark-secondary">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Bônus Exclusivos da Escuderia
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Ferramentas e recursos exclusivos que aceleram seu aprendizado e potencializam seus resultados
        </Text>
      </div>

      {/* Bonuses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {bonuses.map((bonus, index) => {
          const IconComponent = icons[bonus.icon as keyof typeof icons];
          return (
            <div key={index} className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 hover:border-podium-yellow/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-podium-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-podium-yellow" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-podium-text-primary mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-podium-text-secondary mb-4">
                    {bonus.description}
                  </p>
                  <ul className="space-y-2">
                    {bonus.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-podium-yellow rounded-full flex-shrink-0 mt-2" />
                        <span className="text-podium-text-secondary text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Value Proposition */}
      <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
            Por Que Esses Bônus Fazem a Diferença?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3 flex items-center">
              <span className="w-6 h-6 bg-podium-yellow rounded-full flex items-center justify-center mr-3 text-podium-black text-sm font-bold">1</span>
              Acelera o Aprendizado
            </h4>
            <p className="text-podium-text-secondary">
              Em vez de aprender vendas na prática (com erros caros), você tem acesso a ferramentas 
              que aceleram seu processo de aprendizado e reduzem a curva de erro.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3 flex items-center">
              <span className="w-6 h-6 bg-podium-yellow rounded-full flex items-center justify-center mr-3 text-podium-black text-sm font-bold">2</span>
              Reduz o Risco
            </h4>
            <p className="text-podium-text-secondary">
              Com a Sala de Ligação e o Agente Pódium, você pratica antes de ligar para clientes reais, 
              reduzindo significativamente o risco de perder oportunidades.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3 flex items-center">
              <span className="w-6 h-6 bg-podium-yellow rounded-full flex items-center justify-center mr-3 text-podium-black text-sm font-bold">3</span>
              Cria Comunidade
            </h4>
            <p className="text-podium-text-secondary">
              A comunidade de pilotos oferece suporte contínuo, networking profissional 
              e compartilhamento de experiências que aceleram o crescimento de todos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3 flex items-center">
              <span className="w-6 h-6 bg-podium-yellow rounded-full flex items-center justify-center mr-3 text-podium-black text-sm font-bold">4</span>
              Gera Credibilidade
            </h4>
            <p className="text-podium-text-secondary">
              A certificação oficial &ldquo;Piloto Pódium - Escuderia&rdquo; adiciona credibilidade 
              ao seu perfil profissional e diferencia você no mercado.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Value */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-podium-yellow/10 to-podium-yellow/5 border border-podium-yellow/30 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
            Valor Total dos Bônus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <p className="text-podium-text-secondary text-sm">Agente Pódium</p>
              <p className="text-lg font-semibold text-podium-text-primary">R$ 2.000</p>
            </div>
            <div className="text-center">
              <p className="text-podium-text-secondary text-sm">Sala de Ligação</p>
              <p className="text-lg font-semibold text-podium-text-primary">R$ 1.500</p>
            </div>
            <div className="text-center">
              <p className="text-podium-text-secondary text-sm">Comunidade</p>
              <p className="text-lg font-semibold text-podium-text-primary">R$ 1.000</p>
            </div>
            <div className="text-center">
              <p className="text-podium-text-secondary text-sm">Certificação</p>
              <p className="text-lg font-semibold text-podium-text-primary">R$ 500</p>
            </div>
          </div>
          <div className="border-t border-podium-yellow/20 pt-4">
            <p className="text-podium-text-secondary mb-2">Valor Total dos Bônus:</p>
            <p className="text-3xl font-bold text-podium-yellow">R$ 5.000</p>
            <p className="text-podium-text-secondary mt-2">
              Inclusos gratuitamente na Escuderia Pódium
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
