import React from 'react';
import { comparison } from '@/data/comparison';
import { CheckCircle, XCircle } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparacao" className="relative overflow-hidden py-32 bg-gray-900">
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
            Escuderia Pódium vs{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">Elite Pódium</span>
          </h2>
          
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Escolha o programa ideal para seu nível de experiência e objetivos
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
              <div className="p-6 text-center border-r border-gray-600 bg-yellow-400/10 border-yellow-400/30">
                <h3 className="text-lg font-semibold text-yellow-400">Escuderia Pódium</h3>
                <p className="text-sm text-gray-300 mt-1">Para Iniciantes</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white">Elite Pódium</h3>
                <p className="text-sm text-gray-300 mt-1">Para Avançados</p>
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
                <div className="p-6 text-center">
                  <span className="text-white">
                    {typeof item.elite === 'boolean' ? (
                      item.elite ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-500 mx-auto" />
                      )
                    ) : (
                      item.elite
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
            <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 animate-fade-in-up backdrop-blur-sm" style={{animationDelay: `${0.4 + index * 0.05}s`}}>
              <h4 className="text-base font-semibold text-white mb-4">{item.feature}</h4>
              <div className="space-y-3">
                {/* Escuderia */}
                <div className="flex items-center justify-between p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                  <span className="text-sm font-medium text-white">Escuderia Pódium</span>
                  <span className="text-white">
                    {typeof item.escuderia === 'boolean' ? (
                      item.escuderia ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-500" />
                      )
                    ) : (
                      <span className="text-sm">{item.escuderia}</span>
                    )}
                  </span>
                </div>
                {/* Elite */}
                <div className="flex items-center justify-between p-3 bg-gray-700/50 border border-gray-600 rounded-lg">
                  <span className="text-sm font-medium text-white">Elite Pódium</span>
                  <span className="text-white">
                    {typeof item.elite === 'boolean' ? (
                      item.elite ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-500" />
                      )
                    ) : (
                      <span className="text-sm">{item.elite}</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Escuderia Recommendation */}
          <div className="bg-gray-800/30 border border-yellow-400/50 rounded-2xl p-8 shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/70 transition-all duration-300 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏁</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Escolha a Escuderia Se:
              </h3>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Você está começando em vendas</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Quer aprender o Método Pódium do zero</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Prefere aprender em grupo</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Tem orçamento limitado</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Quer networking com outros pilotos</span>
              </li>
            </ul>

            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">R$ 1.850</div>
              <p className="text-gray-400 text-sm">Promoção Black Friday</p>
            </div>
          </div>

          {/* Elite Recommendation */}
          <div className="bg-gray-800/30 border border-gray-600 rounded-2xl p-8 shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-700/50 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Escolha a Elite Se:
              </h3>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Já tem experiência em vendas</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Quer ultrapersonalização</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Prefere mentoria 1:1</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Tem orçamento maior</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Quer role play individual</span>
              </li>
            </ul>

            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">R$ 10.000</div>
              <p className="text-gray-400 text-sm">Investimento completo</p>
            </div>
          </div>
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
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp: (31) 99429-3099
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
