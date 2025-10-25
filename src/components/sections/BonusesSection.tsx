'use client';

import React, { useState } from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { bonuses } from '@/data/benefits';
import { Bot, Phone, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const icons = {
    Bot: Bot,
    Phone: Phone,
    Users: Users,
    Award: Award
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bonuses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bonuses.length) % bonuses.length);
  };

  return (
    <Section id="bonus" className="bg-gray-900">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Bônus Exclusivos da Escuderia
        </Heading>
        <Text size="lg" center className="max-w-2xl mx-auto">
          Ferramentas que aceleram seus resultados
        </Text>
      </div>

      {/* Interactive Carousel */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {bonuses.map((bonus, index) => {
              const IconComponent = icons[bonus.icon as keyof typeof icons];
              return (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-10 h-10 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {bonus.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg">
                        {bonus.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {bonus.details.slice(0, 4).map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-left">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex space-x-2">
            {bonuses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Why These Bonuses Matter */}
      <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 max-w-3xl mx-auto mb-16">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Por Que Esses Bônus Fazem a Diferença?
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Acelera</h4>
              <p className="text-gray-300 text-sm">Aprendizado rápido</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Reduz Risco</h4>
              <p className="text-gray-300 text-sm">Prática antes de vender</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Value */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-xl p-8 max-w-3xl mx-auto shadow-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ganhe R$ 5.000 em Bônus Gratuitos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <p className="text-gray-300 text-sm">Agente Pódium</p>
              <p className="text-lg font-semibold text-white">R$ 2.000</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm">Sala de Ligação</p>
              <p className="text-lg font-semibold text-white">R$ 1.500</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm">Comunidade</p>
              <p className="text-lg font-semibold text-white">R$ 1.000</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm">Certificação</p>
              <p className="text-lg font-semibold text-white">R$ 500</p>
            </div>
          </div>
          <div className="border-t border-yellow-400/20 pt-4">
            <p className="text-gray-300 mb-2">Valor Total dos Bônus:</p>
            <p className="text-3xl font-bold text-yellow-400">R$ 5.000</p>
            <p className="text-gray-300 mt-2">
              Inclusos gratuitamente na Escuderia Pódium
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
