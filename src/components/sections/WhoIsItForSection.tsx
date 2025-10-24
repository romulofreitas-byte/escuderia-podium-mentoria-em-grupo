import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle } from 'lucide-react';

export const WhoIsItForSection: React.FC = () => {
  const idealProfile = [
    'Piloto da Comunidade Pódium',
    'Quer fechar primeiro contrato',
    'Quer aprender o Método Pódium',
    'Quer fazer parte de uma comunidade',
    'Quer suporte estruturado',
    'Tem tempo para dedicar (mínimo 5-10h/semana)'
  ];

  const notForYou = [
    'Quer ultrapersonalização total',
    'Quer role play 1:1 de vendas',
    'Quer mentoria semanal individual',
    'Não tem tempo para dedicar'
  ];

  return (
    <Section id="para-quem-e">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Para Quem É a Escuderia Pódium?
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Ideal para pilotos que querem estruturar seu processo comercial e fechar 
          seu primeiro contrato com suporte de uma comunidade ativa
        </Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Ideal Profile */}
        <Card className="border-green-500/30">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-podium-text-primary mb-2">
              Perfil Ideal do Piloto
            </h3>
            <Text color="secondary">
              Se você se identifica com estes pontos, a Escuderia é para você
            </Text>
          </div>

          <ul className="space-y-4">
            {idealProfile.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Not For You */}
        <Card className="border-red-500/30">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-podium-text-primary mb-2">
              Não É Para Você Se...
            </h3>
            <Text color="secondary">
              Se você se identifica com estes pontos, considere a Elite Pódium
            </Text>
          </div>

          <ul className="space-y-4">
            {notForYou.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
            Ainda Tem Dúvidas?
          </h3>
          <p className="text-podium-text-secondary text-lg mb-6">
            Entre em contato conosco para esclarecer qualquer dúvida sobre o programa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5531994293099" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp: (31) 99429-3099
            </a>
            <a 
              href="mailto:romulo.freitas@combustivelmv.com"
              className="border-2 border-podium-yellow text-podium-yellow px-6 py-3 rounded-lg font-semibold hover:bg-podium-yellow hover:text-podium-black transition-colors"
            >
              Email: romulo.freitas@combustivelmv.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
