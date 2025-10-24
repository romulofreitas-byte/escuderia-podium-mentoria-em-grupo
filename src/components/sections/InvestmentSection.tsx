import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { PricingCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Clock, Users, Award, Bot } from 'lucide-react';

export const InvestmentSection: React.FC = () => {
  const includedFeatures = [
    '6 encontros em grupo (2 horas cada = 12 horas)',
    '4 sessões individuais (1 hora cada = 4 horas)',
    'Acesso ao Agente Pódium durante todo o programa',
    'Acesso à Sala de Ligação da Escuderia',
    'Materiais e templates do Método Pódium',
    'Comunidade de pilotos para networking',
    'Suporte contínuo durante 10 semanas',
    'Certificação "Piloto Pódium - Escuderia"'
  ];

  const valueBreakdown = [
    { item: 'Método Pódium Completo', value: 'R$ 5.000' },
    { item: 'Ferramentas e Templates', value: 'R$ 2.000' },
    { item: '16h de Mentoria', value: 'R$ 8.000' },
    { item: 'Comunidade e Suporte', value: 'R$ 3.000' }
  ];

  const totalValue = 18000;

  return (
    <Section id="investimento" className="bg-gray-950">
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
          <span className="text-yellow-400 font-semibold text-sm tracking-wide uppercase">Investimento</span>
        </div>
        <Heading level={2} center className="mb-8 text-white">
          Oferta Especial{' '}
          <span className="gradient-text">Black Friday</span>
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto text-gray-300">
          Apenas para pilotos da Comunidade Pódium • Vagas limitadas
        </Text>
      </div>

      {/* Pricing Card */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <p className="text-gray-400 text-lg mb-4">De <span className="line-through text-gray-500">R$ 10.000</span></p>
              <p className="text-7xl sm:text-8xl font-black gradient-text mb-4">R$ 1.850</p>
              <p className="text-gray-300 text-xl mb-8">81% de desconto • Promoção limitada</p>
              
              <div className="inline-flex items-center px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full mb-8">
                <Clock className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">Apenas 5-10 vagas disponíveis</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">O que está incluído:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Breakdown */}
            <div className="bg-gray-800/30 rounded-2xl p-8 mb-12">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Valor entregue:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Conhecimento Método Pódium:</span>
                  <span className="text-yellow-400 font-bold">R$ 5.000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ferramentas e Agente Pódium:</span>
                  <span className="text-yellow-400 font-bold">R$ 2.000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mentoria (16 horas):</span>
                  <span className="text-yellow-400 font-bold">R$ 8.000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Comunidade:</span>
                  <span className="text-yellow-400 font-bold">R$ 3.000+</span>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-6 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">Total:</span>
                  <span className="text-2xl font-black gradient-text">R$ 18.000+</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg text-gray-300">Seu investimento:</span>
                  <span className="text-3xl font-black text-yellow-400">R$ 1.850</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                className="btn-primary text-2xl px-20 py-8 inline-block"
              >
                Garantir Minha Vaga na Escuderia
              </a>
              <p className="text-gray-400 mt-6 text-sm">
                ✓ Vagas limitadas • ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
              </p>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};
