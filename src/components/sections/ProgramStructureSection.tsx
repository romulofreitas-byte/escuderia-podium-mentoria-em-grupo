import React from 'react';
import { programWeeks, phases, programModules } from '@/data/program';
import { Calendar, Clock, Users, User } from 'lucide-react';
import Image from 'next/image';

export const ProgramStructureSection: React.FC = () => {
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
            O Método Pódium é uma trilha de progressão que impulsiona a percepção de resultados (aprender efetivamente a vender) e a percepção de crescimento pessoal (começar a se ver, portar, contratar e vender como empresário).
          </p>
        </div>

        {/* Floating Logo */}
        <div className="absolute top-8 left-8 z-10 hidden lg:block">
          <div className="w-16 h-16 relative">
            <Image 
              src="/logos/icon-escuderia.png"
              alt="Escuderia Pódium"
              width={64}
              height={64}
              className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Phases Overview - Redesign com 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="relative bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up shadow-2xl hover:shadow-yellow-400/20 hover:scale-105"
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              {/* Iluminação lateral */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Número grande tipo pódio */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-black">{index + 1}</span>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{phase.icon}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                {phase.name}
              </h3>
              <p className="text-sm text-yellow-400 mb-2 font-semibold relative z-10">
                {phase.subtitle}
              </p>
              <p className="text-sm text-gray-300 relative z-10">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Program - Módulos Agrupados */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-center mb-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            Cronograma Detalhado
          </h3>

          {/* Módulos Principais */}
          {programModules.map((module, index) => (
            <div 
              key={module.id}
              className="bg-gray-800/30 border border-gray-700 border-l-4 border-l-yellow-400 rounded-xl p-6 lg:p-8 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up shadow-2xl hover:shadow-yellow-400/20"
              style={{animationDelay: `${0.9 + index * 0.1}s`}}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Module Badge */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-xl p-4 text-center min-w-[140px] shadow-lg">
                    <div className="text-lg font-bold">{module.title}</div>
                    <div className="text-sm font-medium">{module.weeks}</div>
                    <div className="text-xs mt-1">{module.duration}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title and Format Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{module.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{module.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Theme */}
                  <p className="text-lg text-yellow-400 mb-4 font-medium">
                    {module.theme}
                  </p>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Conteúdo:</h4>
                      <div className="space-y-1">
                        {module.content.slice(0, 6).map((item, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-yellow-400 mr-2 mt-0.5 text-xs">•</span>
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                        {module.content.length > 6 && (
                          <div className="text-xs text-gray-400 italic">
                            +{module.content.length - 6} itens adicionais...
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Entregáveis:</h4>
                      <div className="space-y-1">
                        {module.deliverables.map((item, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2 mt-0.5 text-xs">✓</span>
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Ferramentas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Sessões Individuais */}
          <div className="mt-12">
            <h4 className="text-lg font-bold text-white text-center mb-8">Sessões Individuais (Mensais)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {programWeeks.slice(6, 10).map((week, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/20 border border-gray-600 rounded-lg p-4 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up"
                  style={{animationDelay: `${1.2 + index * 0.05}s`}}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 border border-yellow-400/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <User className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">{week.title}</h5>
                    <p className="text-xs text-gray-400 mb-2">{week.duration}</p>
                    <p className="text-xs text-gray-300">{week.theme}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  <span className="text-gray-300 font-medium">6 semanas intensivas + 4 sessões mensais</span>
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
