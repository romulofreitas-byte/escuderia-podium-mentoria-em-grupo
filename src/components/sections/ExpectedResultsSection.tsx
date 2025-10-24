import React from 'react';
import { Section, Heading, Text, FeatureCard } from '@/components/ui/Section';
import { expectedResults } from '@/data/benefits';
import { CheckCircle, Workflow, FileText, Phone, Users, Handshake, TrendingUp, BarChart3 } from 'lucide-react';

export const ExpectedResultsSection: React.FC = () => {
  const icons = {
    CheckCircle: CheckCircle,
    Workflow: Workflow,
    FileText: FileText,
    Phone: Phone,
    Users: Users,
    Handshake: Handshake,
    TrendingUp: TrendingUp,
    BarChart3: BarChart3
  };

  return (
    <Section id="resultados-esperados">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Resultados Esperados
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Ao final das 10 semanas, você terá transformado completamente seu processo comercial
        </Text>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {expectedResults.map((result, index) => {
          const IconComponent = icons[result.icon as keyof typeof icons];
          return (
            <FeatureCard
              key={index}
              icon={<IconComponent className="w-8 h-8" />}
              title={result.title}
              description={result.description}
            />
          );
        })}
      </div>

      {/* Timeline */}
      <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-podium-text-primary text-center mb-8">
          Cronograma de Resultados
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 6 Weeks */}
          <div className="text-center">
            <div className="w-16 h-16 bg-podium-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-podium-yellow">6</span>
            </div>
            <h4 className="text-xl font-semibold text-podium-text-primary mb-3">
              Após 6 Semanas Intensivas
            </h4>
            <ul className="space-y-2 text-left">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">Primeiro contrato fechado (ou muito perto)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">Processo comercial estruturado</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">Scripts validados e funcionando</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">Confiança para fazer ligações</span>
              </li>
            </ul>
          </div>

          {/* 10 Weeks */}
          <div className="text-center">
            <div className="w-16 h-16 bg-podium-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-podium-yellow">10</span>
            </div>
            <h4 className="text-xl font-semibold text-podium-text-primary mb-3">
              Após 10 Semanas Completas
            </h4>
            <ul className="space-y-2 text-left">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">2-3 contratos fechados</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">Pipeline estruturado</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">Processo replicável</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-podium-text-secondary text-sm">Pronto para escalar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Stories Placeholder */}
      <div className="mt-16">
        <Heading level={3} center className="mb-8">
          Depoimentos de Pilotos
        </Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-podium-dark border border-podium-yellow/15 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-podium-yellow/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-podium-yellow font-bold">A</span>
              </div>
              <div>
                <h4 className="font-semibold text-podium-text-primary">Ana Silva</h4>
                <p className="text-sm text-podium-text-secondary">Designer</p>
              </div>
            </div>
            <p className="text-podium-text-secondary italic">
              "Em 4 semanas já tinha fechado meu primeiro contrato de R$ 3.500. 
              O Método Pódium realmente funciona!"
            </p>
          </div>

          <div className="bg-podium-dark border border-podium-yellow/15 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-podium-yellow/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-podium-yellow font-bold">C</span>
              </div>
              <div>
                <h4 className="font-semibold text-podium-text-primary">Carlos Mendes</h4>
                <p className="text-sm text-podium-text-secondary">Consultor</p>
              </div>
            </div>
            <p className="text-podium-text-secondary italic">
              "A Sala de Ligação foi fundamental para eu perder o medo de ligar. 
              Hoje faço 10+ ligações por dia com confiança total."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
