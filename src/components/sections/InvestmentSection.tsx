'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, Clock, Users, Award, Bot, Zap, Shield } from 'lucide-react';

export const InvestmentSection: React.FC = () => {
  const includedFeatures = [
    '6 encontros em grupo (2 horas cada = 12 horas)',
    '4 sessões individuais (1 hora cada = 4 horas)',
    'Acesso ao Agente Pódium durante todo o programa',
    'Acesso à Sala de Ligação da Escuderia',
    'Materiais e templates do Método Pódium',
    'Comunidade de pilotos para networking',
    'Suporte contínuo durante 10 semanas',
    'Certificação "Piloto Pódium - Escuderia"'
  ];

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

  return (
    <section id="investimento" className="section-padding bg-black">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="default" size="sm">
              Investimento
            </Badge>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-light text-white mb-6"
          >
            Oferta Especial{' '}
            <span className="gradient-text font-medium">Black Friday</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Apenas para pilotos da Comunidade Pódium • Vagas limitadas
          </motion.p>
        </div>

        {/* Pricing Card */}
        <motion.div 
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-16"
        >
          <AnimatedCard 
            variant="pricing"
            className="pricing-card-featured"
          >
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">De <span className="line-through text-gray-500">R$ 10.000</span></p>
              <div className="text-5xl sm:text-6xl font-light text-yellow-400 mb-2">
                R$ 1.850
              </div>
              <p className="text-gray-300 mb-8">81% de desconto • Promoção limitada</p>
              
              <Badge variant="default" size="sm" className="mb-8">
                <Clock className="w-3 h-3 mr-2" />
                Apenas 5-10 vagas disponíveis
              </Badge>
            </div>

            {/* What's Included */}
            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <h3 className="text-lg font-medium text-white mb-6 text-center">O que está incluído:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {includedFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              variants={itemVariants}
              className="text-center"
            >
              <AnimatedButton 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                size="md"
                variant="primary"
                className="mb-4"
              >
                Garantir Minha Vaga na Escuderia
              </AnimatedButton>
              <p className="text-gray-400 text-xs">
                ✓ Vagas limitadas • ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
              </p>
            </motion.div>
          </AnimatedCard>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <AnimatedCard variant="gradient" className="text-center">
            <div className="icon-container mx-auto mb-3">
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Acesso Imediato</h3>
            <p className="text-gray-400 text-sm">Comece hoje mesmo com acesso completo ao programa</p>
          </AnimatedCard>

          <AnimatedCard variant="gradient" className="text-center">
            <div className="icon-container mx-auto mb-3">
              <Shield className="w-4 h-4 text-yellow-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Garantia Total</h3>
            <p className="text-gray-400 text-sm">7 dias para testar sem compromisso</p>
          </AnimatedCard>

          <AnimatedCard variant="gradient" className="text-center">
            <div className="icon-container mx-auto mb-3">
              <Users className="w-4 h-4 text-yellow-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Comunidade Exclusiva</h3>
            <p className="text-gray-400 text-sm">Acesso vitalício ao grupo de pilotos</p>
          </AnimatedCard>
        </motion.div>
      </motion.div>
    </section>
  );
};
