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
    <section id="por-que-funciona" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-8">
            <span className="text-yellow-400 font-semibold text-sm tracking-wide">Por Que Funciona</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            A Combinação Perfeita para{' '}
            <span className="text-yellow-400">Sucesso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = icons[benefit.icon as keyof typeof icons];
            return (
              <div 
                key={index} 
                className="card text-center"
              >
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
