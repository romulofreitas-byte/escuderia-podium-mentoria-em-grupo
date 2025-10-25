import React from 'react';
import { CheckCircle, Users, Clock, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/romulo-hero.jpg"
          alt="Rômulo Freitas"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient Overlays - Estilo Baldan */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-yellow-400 font-semibold text-sm tracking-wide uppercase">1ª Turma • Black Friday Antecipada</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
            Do Zero ao<br />
            Primeiro{' '}
            <span className="gradient-text">Contrato</span>
            <br />
            <span className="gradient-text">Fechado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 font-light leading-relaxed">
            Método Pódium completo em{' '}
            <span className="text-yellow-400 font-semibold">6 semanas intensivas</span>
          </p>

          {/* Pricing */}
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8 mb-12 max-w-xl">
            <p className="text-gray-400 text-base mb-2">De <span className="line-through text-gray-500">R$ 10.000</span></p>
            <div className="flex items-baseline gap-4 mb-4">
              <p className="text-6xl sm:text-7xl font-black gradient-text">R$ 1.850</p>
              <span className="text-2xl text-gray-300">ou 12x R$ 185</span>
            </div>
            <p className="text-gray-300 text-lg mb-8">81% de desconto • Promoção limitada</p>
            
            <a 
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
              className="btn-primary text-xl px-12 py-5 inline-flex items-center gap-3 w-full justify-center"
            >
              Entrar na Escuderia Pódium
              <ArrowRight className="w-6 h-6" />
            </a>
            
            <p className="text-gray-400 mt-4 text-sm text-center">
              ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="flex items-center space-x-3 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-base text-gray-200 font-medium">Primeiro contrato fechado</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-base text-gray-200 font-medium">Processo estruturado</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-base text-gray-200 font-medium">Scripts validados</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-base text-gray-200 font-medium">Comunidade ativa</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-300 font-medium">5-10 pilotos por turma</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-300 font-medium">16 horas de mentoria</span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-300 font-medium">Método Pódium completo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};
