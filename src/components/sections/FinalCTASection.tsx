'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, Clock, Users, Shield, AlertTriangle, MessageCircle, Mail } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const valueCards = [
    { icon: Clock, title: "16 Horas", subtitle: "de mentoria completa" },
    { icon: Users, title: "5-10 Pilotos", subtitle: "turma limitada" },
    { icon: CheckCircle, title: "Método Pódium", subtitle: "completo e validado" },
    { icon: Shield, title: "7 Dias", subtitle: "garantia total" }
  ];

  return (
    <section id="cta-final" className="section-padding bg-black">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center max-w-3xl mx-auto">
          {/* Recap */}
          <motion.div variants={itemVariants} className="mb-12">
            <Badge variant="default" size="sm" className="mb-6">
              Última Chance
            </Badge>
            
                <h2 className="heading-2">
                  Sua Jornada Para o Primeiro{' '}
                  <span className="gradient-text font-medium">Contrato</span> Começa Agora
                </h2>
                
                <p className="body-text-lg mb-8">
                  Junte-se à primeira turma da Escuderia Pódium e transforme seu processo comercial 
                  em apenas 6 semanas intensivas + 4 encontros mensais
                </p>
          </motion.div>

          {/* Value Recap */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {valueCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <AnimatedCard 
                  key={index}
                  variant="gradient"
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="icon-container mx-auto mb-3">
                    <IconComponent className="w-4 h-4 text-yellow-400" />
                  </div>
                      <h3 className="heading-3 mb-1">{card.title}</h3>
                      <p className="small-text">{card.subtitle}</p>
                </AnimatedCard>
              );
            })}
          </motion.div>

          {/* Pricing */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <AnimatedCard 
              variant="pricing"
              className="pricing-card-featured"
            >
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">De <span className="line-through">R$ 10.000</span></p>
                <div className="text-4xl sm:text-5xl font-light text-yellow-400 mb-2">
                  R$ 1.850
                </div>
                <p className="text-gray-300 mb-6">
                  Promoção Black Friday Antecipada • 81% de desconto
                </p>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <AnimatedButton 
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
              size="md"
              variant="primary"
              className="mb-4"
            >
              Entrar na Escuderia Pódium Agora
            </AnimatedButton>
                <p className="small-text">
                  Vagas limitadas • Garantia de 7 dias • Cancelamento gratuito
                </p>
          </motion.div>

          {/* Urgency */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <AnimatedCard 
              variant="gradient"
              className="bg-transparent border border-gray-800/30 max-w-xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                      <h3 className="heading-3">
                        Últimas Vagas Disponíveis
                      </h3>
                    </div>
                    <p className="small-text mb-4">
                      Esta é a primeira turma da Escuderia Pódium com condições especiais. 
                      As próximas turmas terão preço normal.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-1 sm:space-y-0 sm:space-x-6 text-xs text-gray-400">
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-yellow-400 mr-1" />
                    Apenas para Pilotos da Comunidade Pódium
                  </span>
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-yellow-400 mr-1" />
                    Promoção Black Friday Antecipada
                  </span>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Contact Alternative */}
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
                <p className="body-text mb-4">
                  Prefere falar diretamente conosco?
                </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <AnimatedButton 
                href="https://wa.me/5531994293099"
                variant="secondary"
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: (31) 99429-3099
              </AnimatedButton>
              <AnimatedButton 
                href="mailto:romulo.freitas@combustivelmv.com"
                variant="secondary"
                size="sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email: romulo.freitas@combustivelmv.com
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
