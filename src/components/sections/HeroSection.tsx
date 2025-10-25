import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container-custom py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-yellow-50 border border-yellow-200 rounded-full mb-12">
            <span className="text-yellow-600 font-semibold text-sm tracking-wide">1ª Turma • Black Friday Antecipada</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-12 leading-tight">
            Do Zero ao Primeiro{' '}
            <span className="text-yellow-400">Contrato Fechado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-gray-600 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
            Método Pódium completo em 6 semanas intensivas
          </p>

          {/* Pricing */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 mb-16 max-w-2xl mx-auto">
            <p className="text-gray-500 text-lg mb-3">De <span className="line-through">R$ 10.000</span></p>
            <div className="flex items-baseline justify-center gap-4 mb-4">
              <p className="text-7xl font-bold text-gray-900">R$ 1.850</p>
            </div>
            <p className="text-gray-600 text-xl mb-10">ou 12x R$ 185 sem juros</p>
            
            <a 
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
              className="btn-primary text-xl px-16 py-6 inline-flex items-center gap-3"
            >
              Entrar na Escuderia Pódium
              <ArrowRight className="w-6 h-6" />
            </a>
            
            <p className="text-gray-500 mt-6 text-sm">
              ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-base text-gray-700 font-medium text-center">Primeiro contrato fechado</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-base text-gray-700 font-medium text-center">Processo estruturado</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-base text-gray-700 font-medium text-center">Scripts validados</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-base text-gray-700 font-medium text-center">Comunidade ativa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
