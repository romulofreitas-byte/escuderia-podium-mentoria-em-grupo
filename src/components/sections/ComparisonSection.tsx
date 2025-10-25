import React from 'react';
import { comparison } from '@/data/comparison';
import { CheckCircle, XCircle } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparacao" className="relative overflow-hidden py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(to right, rgb(243 244 246 / 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(243 244 246 / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Comparativo</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Escuderia Pódium vs{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">Elite Pódium</span>
          </h2>
          
          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Escolha o programa ideal para seu nível de experiência e objetivos
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50">
              <div className="p-6 text-center border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Característica</h3>
              </div>
              <div className="p-6 text-center border-r border-gray-200 bg-yellow-50 border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-600">Escuderia Pódium</h3>
                <p className="text-sm text-gray-600 mt-1">Para Iniciantes</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Elite Pódium</h3>
                <p className="text-sm text-gray-600 mt-1">Para Avançados</p>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                <div className="p-6 border-r border-gray-200">
                  <span className="text-gray-700 font-medium">{item.feature}</span>
                </div>
                <div className="p-6 border-r border-gray-200 text-center">
                  <span className="text-gray-900">
                    {typeof item.escuderia === 'boolean' ? (
                      item.escuderia ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      item.escuderia
                    )}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <span className="text-gray-900">
                    {typeof item.elite === 'boolean' ? (
                      item.elite ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
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

        {/* Recommendation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Escuderia Recommendation */}
          <div className="bg-white border border-yellow-400/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-yellow-400/70 transition-all duration-300 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-50 border border-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏁</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Escolha a Escuderia Se:
              </h3>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Você está começando em vendas</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quer aprender o Método Pódium do zero</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Prefere aprender em grupo</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Tem orçamento limitado</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quer networking com outros pilotos</span>
              </li>
            </ul>

            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">R$ 1.850</div>
              <p className="text-gray-600 text-sm">Promoção Black Friday</p>
            </div>
          </div>

          {/* Elite Recommendation */}
          <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Escolha a Elite Se:
              </h3>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Já tem experiência em vendas</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quer ultrapersonalização</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Prefere mentoria 1:1</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Tem orçamento maior</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quer role play individual</span>
              </li>
            </ul>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">R$ 10.000</div>
              <p className="text-gray-600 text-sm">Investimento completo</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-12 max-w-3xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Ainda Não Tem Certeza?
            </h3>
            <p className="text-gray-600 text-lg mb-8 text-center leading-relaxed">
              Entre em contato conosco para uma conversa personalizada sobre qual programa 
              é ideal para seus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531994293099" 
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                WhatsApp: (31) 99429-3099
              </a>
              <a 
                href="mailto:romulo.freitas@combustivelmv.com"
                className="border-2 border-yellow-400 text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300"
              >
                Email: romulo.freitas@combustivelmv.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
