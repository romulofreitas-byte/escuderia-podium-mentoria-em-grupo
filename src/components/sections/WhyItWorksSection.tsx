import React from 'react';
import { Target, Bot, Phone, Users } from 'lucide-react';
import { benefits } from '@/data/benefits';

export const WhyItWorksSection: React.FC = () => {
  const icons = {
    Target: Target,
    Bot: Bot,
    Phone: Phone,
    Users: Users
  };

  return (
    <section id="por-que-funciona" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Por Que Funciona</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            A Combinação Perfeita para{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">Sucesso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = icons[benefit.icon as keyof typeof icons];
            return (
              <div 
                key={index} 
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 lg:p-8 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm shadow-2xl hover:shadow-yellow-400/20 animate-fade-in-up text-center"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
