import React from 'react';
import { programWeeks, phases } from '@/data/program';
import { Calendar, Clock, Users, User } from 'lucide-react';

export const ProgramStructureSection: React.FC = () => {
  const phaseColors = {
    'Fundação': 'bg-blue-500',
    'Execução': 'bg-green-500', 
    'Fechamento': 'bg-red-500',
    'Consolidação': 'bg-purple-500'
  };

  return (
    <section id="estrutura-programa" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Estrutura do Programa</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Saia da teoria e{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">feche seu primeiro contrato</span>
            {' '}em 6 semanas
          </h2>

          {/* Subheadline */}
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            6 encontros em grupo + 4 encontros individuais para você construir um processo de vendas completo com ligações, reuniões e fechamento de contratos estratégicos.
          </p>
        </div>

        {/* Phases Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up"
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <div className={`w-16 h-16 ${phaseColors[phase.name as keyof typeof phaseColors]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {phase.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                Semanas {phase.weeks}
              </p>
              <p className="text-sm text-gray-300">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Program */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-white text-center mb-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            Cronograma Detalhado
          </h3>

          {programWeeks.map((week, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 border border-gray-700 border-l-4 border-l-yellow-400 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up"
              style={{animationDelay: `${0.9 + index * 0.05}s`}}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Week Badge */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-xl p-4 text-center min-w-[140px]">
                    <div className="text-2xl font-bold">Semana {week.week}</div>
                    <div className="text-sm font-medium">{week.phase}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title and Format Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {week.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      {week.format === 'Grupo' ? (
                        <Users className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                      <span className="text-sm">{week.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{week.duration}</span>
                    </div>
                  </div>

                  {/* Theme */}
                  <p className="text-lg text-gray-300 mb-6 italic">
                    {week.theme}
                  </p>

                  {/* Content List */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">
                      O que você vai aprender:
                    </h4>
                    <ul className="space-y-2">
                      {week.content.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-yellow-400 mr-3 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-20 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border border-yellow-400/30 rounded-2xl p-12 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">
                Resumo do Programa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300 font-medium">10 semanas de duração</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300 font-medium">16 horas de mentoria</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300 font-medium">Turma limitada (5-10 pilotos)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
