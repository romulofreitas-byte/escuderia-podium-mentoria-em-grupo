"use client";

import React, { useState, useEffect, useRef } from 'react';
import { methodSteps } from '@/data/comparison';
import { Target, Users, Phone, MessageCircle, Presentation, Handshake, CheckCircle, Zap, Globe, Bot, Database, Sparkles, ArrowRight } from 'lucide-react';
import { MethodModal } from '@/components/ui/MethodModal';

export const MethodSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isWhyWorksModalOpen, setIsWhyWorksModalOpen] = useState(false);
  const [isToolsModalOpen, setIsToolsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const icons = {
    Target: Target,
    Users: Users,
    Phone: Phone,
    MessageCircle: MessageCircle,
    Presentation: Presentation,
    Handshake: Handshake
  };

  // Get stage color based on step number
  const getStageColor = (step: number) => {
    if (step <= 2) return 'blue'; // Prospecção
    if (step <= 4) return 'yellow'; // Qualificação
    return 'green'; // Fechamento
  };

  const getStageColors = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-400/20 to-blue-500/10',
        border: 'border-blue-400/30',
        icon: 'text-blue-400',
        glow: 'shadow-blue-400/50'
      },
      yellow: {
        bg: 'from-yellow-400/20 to-yellow-500/10',
        border: 'border-yellow-400/30',
        icon: 'text-yellow-400',
        glow: 'shadow-yellow-400/50'
      },
      green: {
        bg: 'from-green-400/20 to-green-500/10',
        border: 'border-green-400/30',
        icon: 'text-green-400',
        glow: 'shadow-green-400/50'
      }
    };
    return colors[color as keyof typeof colors] || colors.yellow;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Observe each card for visibility
  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => [...prev, index]);
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, [isVisible]);



  return (
    <section 
      ref={sectionRef}
      id="metodo-podium" 
      className="relative overflow-hidden py-12 md:py-[75px] bg-gray-900"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        
        {/* Stage-specific floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-md shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">O Método Pódium Completo</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            6 etapas do{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">primeiro contato</span>
            {' '}ao fechamento
          </h2>

          {/* Subheadline */}
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Metodologia estruturada e testada em múltiplos nichos para acelerar suas vendas de forma consistente e escalável.
          </p>
        </div>

        {/* Method Steps with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 relative">
          {/* Connecting lines on desktop */}
          <svg className="absolute top-1/2 left-0 right-0 h-2 hidden lg:block z-0 opacity-20">
            <defs>
              <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path 
              d="M 5% 50 Q 15% 45, 25% 45 T 50% 45 T 75% 45 T 95% 50" 
              stroke="url(#path-gradient)" 
              strokeWidth="2" 
              fill="none"
              className="animate-draw"
            />
          </svg>

          {methodSteps.map((step, index) => {
            const IconComponent = icons[step.icon as keyof typeof icons];
            const isHovered = hoveredCard === index;
            const isVisible = visibleSteps.includes(index);
            const stageColor = getStageColor(step.step);
            const colors = getStageColors(stageColor);
            
            return (
              <div 
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: `${index * 100}ms`}}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`relative bg-gray-800/40 border rounded-2xl p-6 md:p-8 transition-all duration-500 backdrop-blur-xl overflow-hidden ${
                    isHovered ? `scale-105 -translate-y-2 shadow-2xl ${colors.glow}` : 'hover:scale-102 shadow-lg'
                  } border-gray-700/50 hover:${colors.border} hover:border-opacity-50`}
                >
                  {/* Glow effect on hover */}
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-30 pointer-events-none animate-shimmer`}></div>
                  )}

                  {/* Step Number Badge with enhanced design */}
                  <div className="relative flex justify-end mb-4">
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-full flex items-center justify-center ${
                      isHovered ? 'scale-110 shadow-lg' : ''
                    } transition-all duration-500`}>
                      <span className="text-lg font-bold text-white z-10">{step.step}</span>
                      {/* Pulsing ring on hover */}
                      {isHovered && (
                        <div className="absolute inset-0 border-2 border-current rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Icon with enhanced design */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    isHovered ? 'scale-110 shadow-lg' : ''
                  }`}>
                    <IconComponent className={`w-8 h-8 ${colors.icon} transition-all duration-500 ${
                      isHovered ? 'animate-bounce-subtle' : ''
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description - enhanced reveal */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="flex items-start mb-2">
                      <ArrowRight className={`w-4 h-4 ${colors.icon} mr-2 flex-shrink-0 mt-1`} />
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>


                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons with enhanced design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in-up" style={{animationDelay: '1.0s'}}>
          <button
            onClick={() => setIsWhyWorksModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105 active:scale-95"
          >
            Por Que Funciona?
          </button>
          <button
            onClick={() => setIsToolsModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 border-2 border-yellow-400/50 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 hover:scale-105 active:scale-95"
          >
            Ver Ferramentas
          </button>
        </div>
      </div>

      {/* Modals */}
      <MethodModal
        isOpen={isWhyWorksModalOpen}
        onClose={() => setIsWhyWorksModalOpen(false)}
        title="Por Que o Método Pódium Funciona?"
      >
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
      </MethodModal>

      <MethodModal
        isOpen={isToolsModalOpen}
        onClose={() => setIsToolsModalOpen(false)}
        title="Ferramentas e Recursos Exclusivos"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center mr-4">
                <Bot className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-lg font-semibold text-white">
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

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-lg font-semibold text-white">
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

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-400/10 border border-blue-400/30 rounded-xl flex items-center justify-center mr-4">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white">
                Sistema CRM
              </h4>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Controle profissional de leads com sistemas CRM. Gestão centralizada, histórico de interações e visualização de pipeline.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Gestão de todos os leads em um só lugar</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Histórico completo de interações</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Pipeline de vendas visual</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Relatórios de produtividade</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-400/10 border border-green-400/30 rounded-xl flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white">
                Prospecção com IA
              </h4>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Use IA (Gemini) e ferramentas de extração para construir listas qualificadas rapidamente e automatizar prospecção.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">IA para pesquisa e qualificação (Gemini)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Extractors de listas profissionais</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Automação na construção de databases</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Economia de tempo em prospecção</span>
              </li>
            </ul>
          </div>
        </div>
      </MethodModal>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        @keyframes draw {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-in-out infinite;
        }

        .animate-draw {
          animation: draw 3s ease-in-out forwards;
        }

        @media (hover: hover) {
          .hover\:scale-102:hover {
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  );
};
