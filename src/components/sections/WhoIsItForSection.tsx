import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const WhoIsItForSection: React.FC = () => {
  const idealProfile = [
    'Piloto da Comunidade Pódium',
    'Quer fechar primeiro contrato',
    'Quer aprender Método Pódium',
    'Tem tempo para dedicar (5-10h/semana)'
  ];

  const notForYou = [
    'Quer ultrapersonalização total',
    'Quer mentoria semanal individual',
    'Não tem tempo para dedicar'
  ];

  return (
    <section id="para-quem-e" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-8">
            <span className="text-yellow-400 font-semibold text-sm tracking-wide">Para Quem É</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Perfil Ideal do{' '}
            <span className="text-yellow-400">Piloto</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Ideal Profile */}
          <div className="card">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                ✅ É Para Você Se...
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
          <div className="card">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                ❌ Não É Para Você Se...
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
