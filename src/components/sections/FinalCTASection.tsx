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
    hidden: { opacity: 0, y: 30 },
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

  const pricingOptions = [
    { title: "À Vista", price: "R$ 1.850", subtitle: "PIX ou Boleto" },
    { title: "Cartão", price: "12x R$ 185", subtitle: "Sem juros" },
    { title: "Parcelado", price: "6x R$ 350", subtitle: "Cartão ou PIX" }
  ];

  return (
    <section id="cta-final" className="section-padding bg-gradient-to-br from-yellow-400/10 via-gray-900 to-yellow-500/5">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Recap */}
          <motion.div variants={itemVariants} className="mb-12">
            <Badge variant="warning" size="lg" className="mb-8">
              Última Chance
            </Badge>
            
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Sua Jornada Para o Primeiro{' '}
              <span className="gradient-text">Contrato</span> Começa Agora
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Junte-se à primeira turma da Escuderia Pódium e transforme seu processo comercial 
              em apenas 6 semanas intensivas + 4 encontros mensais
            </p>
          </motion.div>

          {/* Value Recap */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
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
                  <div className="icon-container mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.subtitle}</p>
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
                <p className="text-gray-400 text-lg mb-2">De <span className="line-through">R$ 10.000</span></p>
                <div className="text-6xl sm:text-7xl font-black gradient-text mb-4">
                  R$ 1.850
                </div>
                <p className="text-gray-300 mb-8">
                  Promoção Black Friday Antecipada • 81% de desconto
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {pricingOptions.map((option, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-4 bg-gray-800/30 rounded-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-white mb-1">{option.title}</h4>
                      <p className="text-xl font-bold text-yellow-400">{option.price}</p>
                      <p className="text-xs text-gray-400">{option.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
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
              size="xl"
              className="mb-6"
            >
              Entrar na Escuderia Pódium Agora
            </AnimatedButton>
            <p className="text-gray-400 text-sm">
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
              className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
                  <h3 className="text-xl font-bold text-red-400">
                    Últimas Vagas Disponíveis
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Esta é a primeira turma da Escuderia Pódium com condições especiais. 
                  As próximas turmas terão preço normal.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                  <span className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Apenas para Pilotos da Comunidade Pódium
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
            <p className="text-gray-300 mb-6">
              Prefere falar diretamente conosco?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                href="https://wa.me/5531994293099"
                variant="secondary"
                className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: (31) 99429-3099
              </AnimatedButton>
              <AnimatedButton 
                href="mailto:romulo.freitas@combustivelmv.com"
                variant="secondary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email: romulo.freitas@combustivelmv.com
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
