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
    <Section id="bonus" className="bg-gray-900">
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
            <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {bonus.description}
                  </p>
                  <ul className="space-y-2">
                    {bonus.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-gray-300 text-sm">{detail}</span>
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
      <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Por Que Esses Bônus Fazem a Diferença?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 text-gray-900 text-sm font-bold">1</span>
              Acelera o Aprendizado
            </h4>
            <p className="text-gray-300">
              Em vez de aprender vendas na prática (com erros caros), você tem acesso a ferramentas 
              que aceleram seu processo de aprendizado e reduzem a curva de erro.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 text-gray-900 text-sm font-bold">2</span>
              Reduz o Risco
            </h4>
            <p className="text-gray-300">
              Com a Sala de Ligação e o Agente Pódium, você pratica antes de ligar para clientes reais, 
              reduzindo significativamente o risco de perder oportunidades.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 text-gray-900 text-sm font-bold">3</span>
              Cria Comunidade
            </h4>
            <p className="text-gray-300">
              A comunidade de pilotos oferece suporte contínuo, networking profissional 
              e compartilhamento de experiências que aceleram o crescimento de todos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 text-gray-900 text-sm font-bold">4</span>
              Gera Credibilidade
            </h4>
            <p className="text-gray-300">
              A certificação oficial &ldquo;Piloto Pódium - Escuderia&rdquo; adiciona credibilidade 
              ao seu perfil profissional e diferencia você no mercado.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Value */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-xl p-8 max-w-3xl mx-auto shadow-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">
            Valor Total dos Bônus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <p className="text-gray-300 text-sm">Agente Pódium</p>
              <p className="text-lg font-semibold text-white">R$ 2.000</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm">Sala de Ligação</p>
              <p className="text-lg font-semibold text-white">R$ 1.500</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm">Comunidade</p>
              <p className="text-lg font-semibold text-white">R$ 1.000</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm">Certificação</p>
              <p className="text-lg font-semibold text-white">R$ 500</p>
            </div>
          </div>
          <div className="border-t border-yellow-400/20 pt-4">
            <p className="text-gray-300 mb-2">Valor Total dos Bônus:</p>
            <p className="text-3xl font-bold text-yellow-400">R$ 5.000</p>
            <p className="text-gray-300 mt-2">
              Inclusos gratuitamente na Escuderia Pódium
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
