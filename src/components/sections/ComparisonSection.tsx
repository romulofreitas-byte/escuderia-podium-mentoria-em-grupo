import React from 'react';
import { comparison } from '@/data/comparison';
import { CheckCircle, XCircle, MessageCircle } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparacao" className="relative overflow-hidden py-[75px] bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Comparativo</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Seu Estado Atual vs{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">Escuderia Pódium</span>
          </h2>
          
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Veja a transformação que a Escuderia Pódium pode fazer na sua carreira comercial
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block max-w-5xl mx-auto mb-20">
          <div className="bg-gray-800/30 border border-gray-700 shadow-2xl rounded-2xl overflow-hidden animate-fade-in-up backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-700/50">
              <div className="p-6 text-center border-r border-gray-600">
                <h3 className="text-lg font-semibold text-white">Característica</h3>
              </div>
              <div className="p-6 text-center border-r border-gray-600">
                <h3 className="text-lg font-semibold text-white">Seu Estado Atual</h3>
                <p className="text-sm text-gray-300 mt-1">Funcionário de agência</p>
              </div>
              <div className="p-6 text-center bg-yellow-400/10 border-yellow-400/30">
                <h3 className="text-lg font-semibold text-yellow-400">Escuderia Pódium</h3>
                <p className="text-sm text-gray-300 mt-1">Empreendedor independente</p>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-700/20'}`}>
                <div className="p-6 border-r border-gray-600">
                  <span className="text-gray-300 font-medium">{item.feature}</span>
                </div>
                <div className="p-6 border-r border-gray-600 text-center">
                  <span className="text-white">
                    {typeof item.atual === 'boolean' ? (
                      item.atual ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-500 mx-auto" />
                      )
                    ) : (
                      item.atual
                    )}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <span className="text-white">
                    {typeof item.escuderia === 'boolean' ? (
                      item.escuderia ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-500 mx-auto" />
                      )
                    ) : (
                      item.escuderia
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6 mb-20">
          {comparison.map((item, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 sm:p-6 animate-fade-in-up backdrop-blur-sm" style={{animationDelay: `${0.4 + index * 0.05}s`}}>
              <h4 className="text-lg font-semibold text-white mb-4">{item.feature}</h4>
              <div className="space-y-3">
                {/* Estado Atual */}
                <div className="flex items-center justify-between p-3 bg-gray-700/50 border border-gray-600 rounded-lg">
                  <span className="text-base font-medium text-white">Seu Estado Atual</span>
                  <span className="text-white">
                    {typeof item.atual === 'boolean' ? (
                      item.atual ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <XCircle className="w-6 h-6 text-gray-500" />
                      )
                    ) : (
                      <span className="text-base">{item.atual}</span>
                    )}
                  </span>
                </div>
                {/* Escuderia Pódium */}
                <div className="flex items-center justify-between p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                  <span className="text-base font-medium text-white">Escuderia Pódium</span>
                  <span className="text-white">
                    {typeof item.escuderia === 'boolean' ? (
                      item.escuderia ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <XCircle className="w-6 h-6 text-gray-500" />
                      )
                    ) : (
                      <span className="text-base">{item.escuderia}</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Bottom CTA */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border border-yellow-400/30 rounded-2xl p-12 max-w-3xl mx-auto shadow-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Ainda Não Tem Certeza?
            </h3>
            <p className="text-gray-300 text-lg mb-8 text-center leading-relaxed">
              Entre em contato conosco para uma conversa personalizada sobre qual programa 
              é ideal para seus objetivos
            </p>
            <div className="flex justify-center">
                <a 
                  href="https://wa.me/5531994293099" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
                >
                <MessageCircle className="w-5 h-5 mr-3" />
                Falar com Consultor no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
