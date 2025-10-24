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
    <Section id="investimento" className="bg-podium-dark-secondary">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Investimento e Oferta
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Promoção Black Friday Antecipada - Primeira turma com condições especiais
        </Text>
      </div>

      {/* Pricing Card */}
      <div className="max-w-2xl mx-auto mb-16">
        <PricingCard
          title="Escuderia Pódium"
          price="R$ 1.850"
          originalPrice="R$ 10.000"
          features={includedFeatures}
          ctaText="Entrar na Escuderia Pódium"
          ctaHref="#cta-final"
          highlight={true}
        />
      </div>

      {/* Value Breakdown */}
      <div className="mb-16">
        <Heading level={3} center className="mb-8">
          Breakdown de Valor
        </Heading>
        
        <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {valueBreakdown.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-podium-yellow/10">
                <span className="text-podium-text-secondary">{item.item}</span>
                <span className="text-podium-text-primary font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-6 border-t border-podium-yellow/20">
            <p className="text-podium-text-muted mb-2">Valor Total:</p>
            <p className="text-3xl font-bold text-podium-yellow">R$ 18.000</p>
            <p className="text-podium-text-secondary mt-2">
              Seu investimento: <span className="text-podium-yellow font-bold">R$ 1.850</span> 
              <span className="text-podium-text-muted"> (90% de desconto)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Why This Price */}
      <div className="mb-16">
        <Heading level={3} center className="mb-8">
          Por Que Esse Preço?
        </Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-podium-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-podium-yellow" />
            </div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-2">
              Promoção Black Friday Antecipada
            </h4>
            <p className="text-podium-text-secondary">
              Condições especiais para a primeira turma da Escuderia Pódium
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-podium-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-podium-yellow" />
            </div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-2">
              Apenas para Pilotos da Comunidade Pódium
            </h4>
            <p className="text-podium-text-secondary">
              Oferta exclusiva para membros da nossa comunidade
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-podium-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-podium-yellow" />
            </div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-2">
              Primeira Turma Especial
            </h4>
            <p className="text-podium-text-secondary">
              Vagas limitadas com acompanhamento especial do mentor
            </p>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-podium-text-primary text-center mb-6">
          Formas de Pagamento
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-podium-dark-secondary rounded-lg">
            <h4 className="font-semibold text-podium-text-primary mb-2">À Vista</h4>
            <p className="text-2xl font-bold text-podium-yellow mb-2">R$ 1.850</p>
            <p className="text-sm text-podium-text-secondary">PIX ou Boleto</p>
          </div>
          
          <div className="text-center p-4 bg-podium-dark-secondary rounded-lg">
            <h4 className="font-semibold text-podium-text-primary mb-2">Cartão de Crédito</h4>
            <p className="text-2xl font-bold text-podium-yellow mb-2">12x R$ 185</p>
            <p className="text-sm text-podium-text-secondary">Sem juros</p>
          </div>
          
          <div className="text-center p-4 bg-podium-dark-secondary rounded-lg">
            <h4 className="font-semibold text-podium-text-primary mb-2">Parcelado</h4>
            <p className="text-2xl font-bold text-podium-yellow mb-2">6x R$ 350</p>
            <p className="text-sm text-podium-text-secondary">Cartão ou PIX</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Button 
          size="lg" 
          className="text-xl px-12 py-6"
          href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
        >
          Garantir Minha Vaga na Escuderia
        </Button>
        <p className="text-podium-text-muted mt-4 text-sm">
          Vagas limitadas • Garantia de 7 dias
        </p>
      </div>
    </Section>
  );
};
