import React from 'react';
import { Section, Heading, Text, Button } from '@/components/ui/Section';
import { CheckCircle, Clock, Users, Shield } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <Section id="cta-final" className="bg-gradient-to-br from-podium-yellow/10 via-podium-dark-secondary to-podium-yellow/5">
      <div className="text-center max-w-4xl mx-auto">
        {/* Recap */}
        <div className="mb-12">
          <Heading level={2} center className="mb-6">
            Sua Jornada Para o Primeiro Contrato Começa Agora
          </Heading>
          <Text size="xl" center className="mb-8">
            Junte-se à primeira turma da Escuderia Pódium e transforme seu processo comercial 
            em apenas 6 semanas intensivas + 4 encontros mensais
          </Text>
        </div>

        {/* Value Recap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-podium-yellow mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-podium-text-primary mb-2">16 Horas</h3>
            <p className="text-podium-text-secondary text-sm">de mentoria completa</p>
          </div>
          
          <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-podium-yellow mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-podium-text-primary mb-2">5-10 Pilotos</h3>
            <p className="text-podium-text-secondary text-sm">turma limitada</p>
          </div>
          
          <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-6 text-center">
            <CheckCircle className="w-8 h-8 text-podium-yellow mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-podium-text-primary mb-2">Método Pódium</h3>
            <p className="text-podium-text-secondary text-sm">completo e validado</p>
          </div>
          
          <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-6 text-center">
            <Shield className="w-8 h-8 text-podium-yellow mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-podium-text-primary mb-2">7 Dias</h3>
            <p className="text-podium-text-secondary text-sm">garantia total</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-podium-dark border border-podium-yellow/30 rounded-xl p-8 mb-12">
          <div className="text-center">
            <p className="text-podium-text-muted text-lg mb-2">De <span className="line-through">R$ 10.000</span></p>
            <p className="text-5xl font-bold text-podium-yellow mb-2">R$ 1.850</p>
            <p className="text-podium-text-secondary mb-6">
              Promoção Black Friday Antecipada • 81% de desconto
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-podium-dark-secondary rounded-lg">
                <h4 className="font-semibold text-podium-text-primary mb-1">À Vista</h4>
                <p className="text-xl font-bold text-podium-yellow">R$ 1.850</p>
                <p className="text-xs text-podium-text-secondary">PIX ou Boleto</p>
              </div>
              
              <div className="text-center p-4 bg-podium-dark-secondary rounded-lg">
                <h4 className="font-semibold text-podium-text-primary mb-1">Cartão</h4>
                <p className="text-xl font-bold text-podium-yellow">12x R$ 185</p>
                <p className="text-xs text-podium-text-secondary">Sem juros</p>
              </div>
              
              <div className="text-center p-4 bg-podium-dark-secondary rounded-lg">
                <h4 className="font-semibold text-podium-text-primary mb-1">Parcelado</h4>
                <p className="text-xl font-bold text-podium-yellow">6x R$ 350</p>
                <p className="text-xs text-podium-text-secondary">Cartão ou PIX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mb-12">
          <Button 
            size="lg" 
            className="text-2xl px-16 py-8 mb-6"
            href="https://wa.me/5531994293099"
          >
            Entrar na Escuderia Pódium Agora
          </Button>
          <p className="text-podium-text-muted text-sm">
            Vagas limitadas • Garantia de 7 dias • Cancelamento gratuito
          </p>
        </div>

        {/* Urgency */}
        <div className="bg-podium-dark border border-red-500/30 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-400 mb-3">
              ⚠️ Últimas Vagas Disponíveis
            </h3>
            <p className="text-podium-text-secondary mb-4">
              Esta é a primeira turma da Escuderia Pódium com condições especiais. 
              As próximas turmas terão preço normal.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-podium-text-muted">
              <span>✅ Apenas para Pilotos da Comunidade Pódium</span>
              <span>✅ Promoção Black Friday Antecipada</span>
            </div>
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="mt-12">
          <Text center className="mb-4">
            Prefere falar diretamente conosco?
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5531994293099" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp: (31) 99429-3099</span>
            </a>
            <a 
              href="mailto:romulo.freitas@combustivelmv.com"
              className="border-2 border-podium-yellow text-podium-yellow px-6 py-3 rounded-lg font-semibold hover:bg-podium-yellow hover:text-podium-black transition-colors flex items-center justify-center space-x-2"
            >
              <span>📧</span>
              <span>Email: romulo.freitas@combustivelmv.com</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
