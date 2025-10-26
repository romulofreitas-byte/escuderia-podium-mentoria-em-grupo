"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Target, Bot, Phone, Users, Sparkles } from 'lucide-react';
import { benefits } from '@/data/benefits';

export const WhyItWorksSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const icons = {
    Target: Target,
    Bot: Bot,
    Phone: Phone,
    Users: Users
  };

  const glowColors = {
    yellow: 'shadow-yellow-400/50',
    purple: 'shadow-purple-400/50',
    green: 'shadow-green-400/50',
    orange: 'shadow-orange-400/50'
  };

  const borderColors = {
    yellow: 'border-yellow-400/30',
    purple: 'border-purple-400/30',
    green: 'border-green-400/30',
    orange: 'border-orange-400/30'
  };

  const bgGradients = {
    yellow: 'from-yellow-400/20 to-yellow-500/10',
    purple: 'from-purple-400/20 to-purple-500/10',
    green: 'from-green-400/20 to-green-500/10',
    orange: 'from-orange-400/20 to-orange-500/10'
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

  const getIconColor = (color: string) => {
    const colors = {
      yellow: 'text-yellow-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      orange: 'text-orange-400'
    };
    return colors[color as keyof typeof colors] || 'text-yellow-400';
  };

  return (
    <section 
      ref={sectionRef}
      id="por-que-funciona" 
      className="relative overflow-hidden py-[75px] bg-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-md shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Por Que Funciona</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            A Combinação Perfeita para{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">Sucesso</span>
          </h2>

          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Quatro pilares que transformam profissionais de vendas em empreendedores de sucesso
          </p>
        </div>

        {/* Simplified Cards - All Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = icons[benefit.icon as keyof typeof icons];
            const isHovered = hoveredCard === index;
            const color = benefit.color || 'yellow';
            const iconColor = getIconColor(color);
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Card - Uniform Size */}
                <div
                  className={`relative bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-xl transition-all duration-500 cursor-pointer group overflow-hidden ${
                    isHovered ? 'scale-105 -translate-y-2 shadow-2xl ' + glowColors[color as keyof typeof glowColors] : 'hover:scale-102 shadow-lg hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Glow effect on hover */}
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[color as keyof typeof bgGradients]} opacity-30 pointer-events-none animate-shimmer`}></div>
                  )}

                  {/* Icon Container */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${bgGradients[color as keyof typeof bgGradients]} border ${borderColors[color as keyof typeof borderColors]} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                    isHovered ? 'scale-110 shadow-lg' : ''
                  }`}>
                    <IconComponent className={`w-10 h-10 ${iconColor} transition-all duration-500 ${
                      isHovered ? 'animate-bounce-subtle' : ''
                    }`} />
                    
                    {/* Floating particles on hover */}
                    {isHovered && (
                      <>
                        <div className={`absolute -top-2 -right-2 w-3 h-3 bg-${color}-400/60 rounded-full animate-float`}></div>
                        <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-${color}-400/40 rounded-full animate-float`} style={{animationDelay: '1s'}}></div>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{benefit.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{benefit.description}</p>

                  {/* Border glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                    isHovered ? borderColors[color as keyof typeof borderColors] + ' border-opacity-100' : 'border-transparent'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
          50% { transform: scale(1.2); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-in-out infinite;
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
