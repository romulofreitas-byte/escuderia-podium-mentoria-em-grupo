import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/Card';
import { methodSteps } from '@/data/comparison';
import { Target, Users, Phone, MessageCircle, Presentation, Handshake } from 'lucide-react';

export const MethodSection: React.FC = () => {
  const icons = {
    Target: Target,
    Users: Users,
    Phone: Phone,
    MessageCircle: MessageCircle,
    Presentation: Presentation,
    Handshake: Handshake
  };

  return (
    <Section id="metodo-podium">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          O Método Pódium Completo
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Metodologia estruturada em 6 etapas, do primeiro contato ao fechamento, 
          testada e validada em múltiplos nichos
        </Text>
      </div>

      {/* Method Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {methodSteps.map((step, index) => {
          const IconComponent = icons[step.icon as keyof typeof icons];
          return (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < methodSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-podium-yellow/30 z-0" 
                     style={{ transform: 'translateX(-50%)' }} />
              )}
              
              <FeatureCard
                icon={
                  <div className="relative">
                    <IconComponent className="w-8 h-8" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-podium-yellow text-podium-black rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                }
                title={step.title}
                description={step.description}
                className="relative z-10"
              />
            </div>
          );
        })}
      </div>

      {/* Method Explanation */}
      <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
            Por Que o Método Pódium Funciona?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3">
              🎯 Estrutura Comprovada
            </h4>
            <p className="text-podium-text-secondary">
              Cada etapa foi testada e refinada em centenas de vendas reais. 
              Não é teoria, é prática validada no mercado.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3">
              🚀 Acelera o Aprendizado
            </h4>
            <p className="text-podium-text-secondary">
              Em vez de aprender vendas na prática (com erros caros), você aprende 
              a metodologia certa desde o primeiro dia.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3">
              🎪 Adaptável a Qualquer Nicho
            </h4>
            <p className="text-podium-text-secondary">
              Funciona para serviços, produtos digitais, consultoria, 
              e qualquer tipo de venda B2B ou B2C.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-3">
              🤖 Potencializado por IA
            </h4>
            <p className="text-podium-text-secondary">
              O Agente Pódium personaliza scripts, propostas e estratégias 
              específicas para seu nicho e cliente.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-16">
        <Heading level={3} center className="mb-8">
          Ferramentas e Recursos Exclusivos
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-podium-dark border border-podium-yellow/15 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-podium-text-primary mb-4 flex items-center">
              <span className="w-8 h-8 bg-podium-yellow/20 rounded-full flex items-center justify-center mr-3">
                🤖
              </span>
              Agente Pódium
            </h4>
            <p className="text-podium-text-secondary mb-4">
              Assistente de IA que ajuda em pesquisa de mercado, geração de scripts, 
              criação de propostas e preparação de reuniões.
            </p>
            <ul className="space-y-2 text-podium-text-secondary">
              <li>• Scripts personalizados para seu nicho</li>
              <li>• Pesquisa automatizada de mercado</li>
              <li>• Propostas sob medida</li>
              <li>• Preparação de reuniões</li>
            </ul>
          </div>

          <div className="bg-podium-dark border border-podium-yellow/15 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-podium-text-primary mb-4 flex items-center">
              <span className="w-8 h-8 bg-podium-yellow/20 rounded-full flex items-center justify-center mr-3">
                📞
              </span>
              Sala de Ligação da Escuderia
            </h4>
            <p className="text-podium-text-secondary mb-4">
              Espaço exclusivo para treinar ligações entre pilotos, fazer role play 
              de reuniões e receber feedback em tempo real.
            </p>
            <ul className="space-y-2 text-podium-text-secondary">
              <li>• Role play entre pilotos</li>
              <li>• Feedback em tempo real</li>
              <li>• Simulação de reuniões R1 e R2</li>
              <li>• Treino de técnicas de fechamento</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
