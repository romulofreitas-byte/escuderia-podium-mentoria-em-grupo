import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Section';
import { CheckCircle, Users, Clock, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-12">
            <span className="text-yellow-400 font-semibold text-sm tracking-wide uppercase">1ª Turma • Black Friday Antecipada</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            Do Zero ao Primeiro{' '}
            <span className="gradient-text">Contrato</span>
            <br />
            <span className="gradient-text">Fechado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Método Pódium completo em <span className="text-yellow-400 font-semibold">6 semanas intensivas</span>
          </p>

          {/* Pricing Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 mb-16 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-4">De <span className="line-through text-gray-500">R$ 10.000</span></p>
              <p className="text-6xl sm:text-7xl font-black gradient-text mb-4">R$ 1.850</p>
              <p className="text-gray-300 text-lg mb-8">81% de desconto • Promoção limitada</p>
              
              <a 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                className="btn-primary text-xl px-16 py-6 inline-block"
              >
                Entrar na Escuderia Pódium
              </a>
              
              <p className="text-gray-400 mt-6 text-sm">
                ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
              </p>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-lg text-gray-300 font-medium">Primeiro contrato fechado</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-lg text-gray-300 font-medium">Processo estruturado</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-lg text-gray-300 font-medium">Scripts validados</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-lg text-gray-300 font-medium">Confiança total</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-lg text-gray-300 font-medium">Habilidade em reuniões</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-lg text-gray-300 font-medium">Comunidade ativa</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-yellow-400" />
                <span className="font-medium">5-10 pilotos por turma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-yellow-400" />
                <span className="font-medium">16 horas de mentoria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="font-medium">Método Pódium completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
