import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Pricing Card */}
          <div className="card text-center">
            <p className="text-gray-400 text-base mb-3">De <span className="line-through">R$ 10.000</span></p>
            <div className="flex items-baseline justify-center gap-4 mb-4">
              <p className="text-7xl font-bold text-white">R$ 1.850</p>
            </div>
            <p className="text-gray-300 text-xl mb-10">ou 12x R$ 185 sem juros</p>
            
            <a 
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
              className="btn-primary text-lg px-16 py-6 inline-flex items-center gap-3"
            >
              Entrar na Escuderia Pódium
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-gray-400 mt-6 text-sm">
              ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-700">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-sm text-gray-300 font-medium text-center">Primeiro contrato</span>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-sm text-gray-300 font-medium text-center">Processo estruturado</span>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-sm text-gray-300 font-medium text-center">Scripts validados</span>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-sm text-gray-300 font-medium text-center">Comunidade ativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

