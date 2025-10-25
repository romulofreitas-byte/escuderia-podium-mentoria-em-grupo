import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background with blur */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/background-hero.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm opacity-40"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80"></div>
      </div>
      
      <div className="container-custom relative z-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-8">
              <span className="text-yellow-400 font-semibold text-sm tracking-wide">1ª Turma • Black Friday Antecipada</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Uma mentoria em grupo{' '}
              <span className="text-yellow-400">híbrida</span>
              {' '}pra você vender e se sentir como um{' '}
              <span className="text-yellow-400">empresário</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
              6 encontros em grupo e 4 encontros individuais pra você construir um processo de vendas com ligações, reuniões e fechamento de contratos estratégicos.
            </p>

            {/* Pricing */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-10 mb-12">
              <p className="text-gray-400 text-base mb-3">De <span className="line-through">R$ 10.000</span></p>
              <div className="flex items-baseline gap-4 mb-4">
                <p className="text-6xl font-bold text-white">R$ 1.850</p>
              </div>
              <p className="text-gray-300 text-lg mb-8">ou 12x R$ 185 sem juros</p>
              
              <a 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-3 w-full justify-center"
              >
                Entrar na Escuderia Pódium
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <p className="text-gray-400 mt-4 text-sm text-center">
                ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm text-white font-medium">Primeiro contrato</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm text-white font-medium">Processo estruturado</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm text-white font-medium">Scripts validados</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm text-white font-medium">Comunidade ativa</span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-lg">
              <Image 
                src="/romulo-hero.png"
                alt="Rômulo Freitas"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
