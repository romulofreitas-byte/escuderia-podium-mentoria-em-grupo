import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { comparison } from '@/data/comparison';
import { CheckCircle, XCircle } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <Section id="comparacao" className="bg-podium-dark-secondary">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Escuderia Pódium vs Elite Pódium
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Escolha o programa ideal para seu nível de experiência e objetivos
        </Text>
      </div>

      {/* Comparison Table */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-podium-dark-secondary">
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-podium-text-primary">Característica</h3>
            </div>
            <div className="p-6 text-center border-l border-r border-podium-yellow/20">
              <h3 className="text-lg font-semibold text-podium-yellow">Escuderia Pódium</h3>
              <p className="text-sm text-podium-text-secondary mt-1">Para Iniciantes</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-podium-text-primary">Elite Pódium</h3>
              <p className="text-sm text-podium-text-secondary mt-1">Para Avançados</p>
            </div>
          </div>

          {/* Rows */}
          {comparison.map((item, index) => (
            <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-podium-dark' : 'bg-podium-dark-secondary'}`}>
              <div className="p-6 border-r border-podium-yellow/10">
                <span className="text-podium-text-secondary font-medium">{item.feature}</span>
              </div>
              <div className="p-6 border-r border-podium-yellow/10 text-center">
                <span className="text-podium-text-primary">
                  {typeof item.escuderia === 'boolean' ? (
                    item.escuderia ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    item.escuderia
                  )}
                </span>
              </div>
              <div className="p-6 text-center">
                <span className="text-podium-text-primary">
                  {typeof item.elite === 'boolean' ? (
                    item.elite ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    item.elite
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Escuderia Recommendation */}
        <Card className="border-podium-yellow/30 bg-gradient-to-br from-podium-yellow/5 to-transparent">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-podium-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏁</span>
            </div>
            <h3 className="text-2xl font-bold text-podium-text-primary mb-2">
              Escolha a Escuderia Se:
            </h3>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Você está começando em vendas</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Quer aprender o Método Pódium do zero</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Prefere aprender em grupo</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Tem orçamento limitado</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Quer networking com outros pilotos</span>
            </li>
          </ul>

          <div className="mt-6 text-center">
            <div className="text-3xl font-bold text-podium-yellow mb-2">R$ 1.850</div>
            <p className="text-podium-text-secondary text-sm">Promoção Black Friday</p>
          </div>
        </Card>

        {/* Elite Recommendation */}
        <Card className="border-podium-text-primary/30">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-podium-text-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👑</span>
            </div>
            <h3 className="text-2xl font-bold text-podium-text-primary mb-2">
              Escolha a Elite Se:
            </h3>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Já tem experiência em vendas</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Quer ultrapersonalização</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Prefere mentoria 1:1</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Tem orçamento maior</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-podium-text-secondary">Quer role play individual</span>
            </li>
          </ul>

          <div className="mt-6 text-center">
            <div className="text-3xl font-bold text-podium-text-primary mb-2">R$ 10.000</div>
            <p className="text-podium-text-secondary text-sm">Investimento completo</p>
          </div>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
            Ainda Não Tem Certeza?
          </h3>
          <p className="text-podium-text-secondary text-lg mb-6">
            Entre em contato conosco para uma conversa personalizada sobre qual programa 
            é ideal para seus objetivos
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
