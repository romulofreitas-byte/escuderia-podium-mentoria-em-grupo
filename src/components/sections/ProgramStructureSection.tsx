import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { programWeeks, phases } from '@/data/program';
import { Calendar, Clock, Users, User } from 'lucide-react';

export const ProgramStructureSection: React.FC = () => {
  return (
    <Section id="estrutura-programa" className="bg-podium-dark-secondary">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          6 Semanas Intensivas + 4 Encontros Mensais
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Transformação completa do seu processo comercial usando o Método Pódium, 
          com suporte de IA e comunidade ativa
        </Text>
      </div>

      {/* Phases Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {phases.map((phase, index) => (
          <Card key={index} className="text-center">
            <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-podium-text-primary mb-2">
              {phase.name}
            </h3>
            <p className="text-podium-text-muted text-sm mb-2">
              Semanas {phase.weeks}
            </p>
            <p className="text-podium-text-secondary text-sm">
              {phase.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Detailed Program */}
      <div className="space-y-8">
        <Heading level={3} center className="mb-12">
          Cronograma Detalhado
        </Heading>

        {programWeeks.map((week, index) => (
          <Card key={index} className="border-l-4 border-l-podium-yellow">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Week Info */}
              <div className="flex-shrink-0">
                <div className="bg-podium-yellow text-podium-black rounded-lg p-4 text-center min-w-[120px]">
                  <div className="text-2xl font-bold">Semana {week.week}</div>
                  <div className="text-sm font-medium">{week.phase}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-podium-text-primary">
                    {week.title}
                  </h3>
                  <div className="flex items-center gap-2 text-podium-text-muted">
                    {week.format === 'Grupo' ? (
                      <Users className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    <span className="text-sm">{week.format}</span>
                  </div>
                  <div className="flex items-center gap-2 text-podium-text-muted">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{week.duration}</span>
                  </div>
                </div>

                <p className="text-podium-text-secondary mb-4 italic">
                  {week.theme}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Content */}
                  <div>
                    <h4 className="font-semibold text-podium-text-primary mb-2">Conteúdo:</h4>
                    <ul className="space-y-1">
                      {week.content.map((item, idx) => (
                        <li key={idx} className="text-sm text-podium-text-secondary flex items-start">
                          <span className="text-podium-yellow mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-podium-text-primary mb-2">Entregas:</h4>
                    <ul className="space-y-1">
                      {week.deliverables.map((item, idx) => (
                        <li key={idx} className="text-sm text-podium-text-secondary flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-semibold text-podium-text-primary mb-2">Ferramentas:</h4>
                    <ul className="space-y-1">
                      {week.tools.map((item, idx) => (
                        <li key={idx} className="text-sm text-podium-text-secondary flex items-start">
                          <span className="text-podium-yellow mr-2">🔧</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-16">
        <Card className="bg-gradient-to-r from-podium-yellow/10 to-podium-yellow/5 border-podium-yellow/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
              Resumo do Programa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6 text-podium-yellow" />
                <span className="text-podium-text-secondary">10 semanas de duração</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-podium-yellow" />
                <span className="text-podium-text-secondary">16 horas de mentoria</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-podium-yellow" />
                <span className="text-podium-text-secondary">Turma limitada (5-10 pilotos)</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};
