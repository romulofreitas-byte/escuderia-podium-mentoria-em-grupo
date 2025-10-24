import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Section';
import { CheckCircle, Users, Clock, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-podium-black via-podium-dark to-podium-black flex items-center">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="primary">1ª Turma - Black Friday Antecipada</Badge>
            <Badge variant="warning">Apenas 5-10 vagas disponíveis</Badge>
            <Badge variant="secondary">Apenas para Pilotos da Comunidade Pódium</Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-podium-text-primary mb-8 leading-tight tracking-tight">
            Do Zero ao Primeiro{' '}
            <span className="text-podium-yellow">Contrato Fechado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-podium-text-secondary mb-12 max-w-2xl mx-auto font-light">
            Método Pódium em 6 Semanas Intensivas
          </p>

          {/* Pricing */}
          <div className="mb-8">
            <p className="text-podium-text-muted text-lg mb-2">De <span className="line-through">R$ 10.000</span></p>
            <p className="text-5xl sm:text-6xl font-bold text-podium-yellow mb-2">R$ 1.850</p>
            <p className="text-podium-text-secondary">81% de desconto - Promoção Black Friday Antecipada</p>
          </div>

          {/* CTA */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6"
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
            >
              Entrar na Escuderia Pódium
            </Button>
            <p className="text-podium-text-muted mt-4 text-sm">
              Garantia de 7 dias • Cancelamento gratuito
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 text-left">
              <CheckCircle className="w-8 h-8 text-podium-yellow flex-shrink-0" />
              <span className="text-lg text-podium-text-secondary font-medium">Primeiro contrato fechado</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <CheckCircle className="w-8 h-8 text-podium-yellow flex-shrink-0" />
              <span className="text-lg text-podium-text-secondary font-medium">Processo comercial estruturado</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <CheckCircle className="w-8 h-8 text-podium-yellow flex-shrink-0" />
              <span className="text-lg text-podium-text-secondary font-medium">Scripts validados</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <CheckCircle className="w-8 h-8 text-podium-yellow flex-shrink-0" />
              <span className="text-lg text-podium-text-secondary font-medium">Confiança em ligações</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <CheckCircle className="w-8 h-8 text-podium-yellow flex-shrink-0" />
              <span className="text-lg text-podium-text-secondary font-medium">Habilidade em reuniões</span>
            </div>
            <div className="flex items-center space-x-4 text-left">
              <CheckCircle className="w-8 h-8 text-podium-yellow flex-shrink-0" />
              <span className="text-lg text-podium-text-secondary font-medium">Comunidade de suporte</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-podium-yellow/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-podium-text-muted">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>5-10 pilotos por turma</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>16 horas de mentoria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>Método Pódium completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
