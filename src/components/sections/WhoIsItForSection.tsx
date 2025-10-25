import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const WhoIsItForSection: React.FC = () => {
  const idealProfile = [
    'Piloto da Comunidade Pódium',
    'PJ que quer se tornar empresário',
    'Quer aprender Método Pódium',
    'Tem medo de fazer cold call',
    'Quer precificar como empresário',
    'Tem tempo para dedicar (5-10h/semana)'
  ];

  const notForYou = [
    'Quer ultrapersonalização total',
    'Quer mentoria semanal individual',
    'Não tem tempo para dedicar',
    'Não quer sair da zona de conforto'
  ];

  return (
    <section id="para-quem-e" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Para Quem É</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Perfil Ideal do{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">Piloto</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Ideal Profile */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 lg:p-8 shadow-2xl hover:border-yellow-400/50 hover:shadow-yellow-400/20 transition-all duration-300 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                É Para Você Se...
              </h3>
            </div>
            
            <div className="space-y-4">
              {idealProfile.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not For You */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 lg:p-8 shadow-2xl hover:border-yellow-400/50 hover:shadow-yellow-400/20 transition-all duration-300 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Não É Para Você Se...
              </h3>
            </div>
            
            <div className="space-y-4">
              {notForYou.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
