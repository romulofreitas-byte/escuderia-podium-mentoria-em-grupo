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

  const valueBreakdown = [
    { item: 'Método Pódium Completo', value: 'R$ 5.000', icon: Award },
    { item: 'Ferramentas e Templates', value: 'R$ 2.000', icon: Bot },
    { item: '16h de Mentoria', value: 'R$ 8.000', icon: Users },
    { item: 'Comunidade e Suporte', value: 'R$ 3.000', icon: Shield }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="investimento" className="section-padding bg-gray-950">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-20">
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="warning" size="lg">
              Investimento
            </Badge>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-black text-white mb-8"
          >
            Oferta Especial{' '}
            <span className="gradient-text">Black Friday</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Apenas para pilotos da Comunidade Pódium • Vagas limitadas
          </motion.p>
        </div>

        {/* Pricing Card */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-20"
        >
          <AnimatedCard 
            variant="pricing"
            className="pricing-card-featured relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <p className="text-gray-400 text-lg mb-4">De <span className="line-through text-gray-500">R$ 10.000</span></p>
                <div className="text-7xl sm:text-8xl font-black gradient-text mb-4">
                  R$ 1.850
                </div>
                <p className="text-gray-300 text-xl mb-8">81% de desconto • Promoção limitada</p>
                
                <Badge variant="warning" size="lg" className="mb-8">
                  <Clock className="w-5 h-5 mr-2" />
                  Apenas 5-10 vagas disponíveis
                </Badge>
              </div>

              {/* What's Included */}
              <motion.div 
                variants={itemVariants}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">O que está incluído:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {includedFeatures.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Value Breakdown */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-800/30 rounded-2xl p-8 mb-12"
              >
                <h4 className="text-xl font-bold text-white mb-6 text-center">Valor entregue:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {valueBreakdown.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-yellow-400" />
                          <span className="text-gray-300">{item.item}:</span>
                        </div>
                        <span className="text-yellow-400 font-bold">{item.value}+</span>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="border-t border-gray-700 mt-6 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total:</span>
                    <span className="text-2xl font-black gradient-text">R$ 18.000+</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg text-gray-300">Seu investimento:</span>
                    <span className="text-3xl font-black text-yellow-400">R$ 1.850</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                variants={itemVariants}
                className="text-center"
              >
                <AnimatedButton 
                  href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                  size="xl"
                  className="mb-6"
                >
                  Garantir Minha Vaga na Escuderia
                </AnimatedButton>
                <p className="text-gray-400 text-sm">
                  ✓ Vagas limitadas • ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
                </p>
              </motion.div>
            </div>
          </AnimatedCard>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <AnimatedCard variant="gradient" className="text-center">
            <div className="icon-container-purple mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Acesso Imediato</h3>
            <p className="text-gray-400">Comece hoje mesmo com acesso completo ao programa</p>
          </AnimatedCard>

          <AnimatedCard variant="gradient" className="text-center">
            <div className="icon-container mx-auto mb-4">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Garantia Total</h3>
            <p className="text-gray-400">7 dias para testar sem compromisso</p>
          </AnimatedCard>

          <AnimatedCard variant="gradient" className="text-center">
            <div className="icon-container mx-auto mb-4">
              <Users className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Comunidade Exclusiva</h3>
            <p className="text-gray-400">Acesso vitalício ao grupo de pilotos</p>
          </AnimatedCard>
        </motion.div>
      </motion.div>
    </section>
  );
};
