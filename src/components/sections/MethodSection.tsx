import React from 'react';
import { methodSteps } from '@/data/comparison';
import { Target, Users, Phone, MessageCircle, Presentation, Handshake, CheckCircle, Zap, Globe, Bot } from 'lucide-react';

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
    <section id="metodo-podium" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">O Método Pódium Completo</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            6 etapas do{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">primeiro contato</span>
            {' '}ao fechamento
          </h2>

          {/* Subheadline */}
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Metodologia estruturada e testada em múltiplos nichos para acelerar suas vendas de forma consistente e escalável.
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {methodSteps.map((step, index) => {
            const IconComponent = icons[step.icon as keyof typeof icons];
            return (
              <div 
                key={index} 
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up"
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <div className="relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-full flex items-center justify-center text-sm font-bold z-10">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why It Works Section */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-12 mb-20 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '1.0s'}}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Por Que o Método Pódium Funciona?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Estrutura Comprovada
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Cada etapa foi testada e refinada em centenas de vendas reais. 
                  Não é teoria, é prática validada no mercado.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Acelera o Aprendizado
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Em vez de aprender vendas na prática (com erros caros), você aprende 
                  a metodologia certa desde o primeiro dia.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Adaptável a Qualquer Nicho
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Funciona para serviços, produtos digitais, consultoria, 
                  e qualquer tipo de venda B2B ou B2C.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Potencializado por IA
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  O Agente Pódium personaliza scripts, propostas e estratégias 
                  específicas para seu nicho e cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Ferramentas e Recursos Exclusivos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center mr-4">
                  <Bot className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Agente Pódium
                </h4>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Assistente de IA que ajuda em pesquisa de mercado, geração de scripts, 
                criação de propostas e preparação de reuniões.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Scripts personalizados para seu nicho</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Pesquisa automatizada de mercado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Propostas sob medida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Preparação de reuniões</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Sala de Ligação da Escuderia
                </h4>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Espaço exclusivo para treinar ligações entre pilotos, fazer role play 
                de reuniões e receber feedback em tempo real.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Role play entre pilotos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Feedback em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Simulação de reuniões R1 e R2</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Treino de técnicas de fechamento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
