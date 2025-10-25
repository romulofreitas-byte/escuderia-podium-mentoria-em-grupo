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

  return (
    <section id="cta-final" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
              <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Última Chance</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Sua Jornada Para o Primeiro{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">Contrato</span> Começa Agora
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 leading-relaxed drop-shadow-md"
          >
            Junte-se à primeira turma da Escuderia Pódium e transforme seu processo comercial 
            em apenas 6 semanas intensivas + 4 encontros mensais
          </motion.p>

          {/* Value Proposition Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Clock, title: "16 Horas", subtitle: "de mentoria completa" },
              { icon: Users, title: "5-10 Pilotos", subtitle: "turma limitada" },
              { icon: CheckCircle, title: "Método Pódium", subtitle: "completo e validado" },
              { icon: Shield, title: "7 Dias", subtitle: "garantia total" }
            ].map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-300 text-sm">{card.subtitle}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Premium Pricing Card */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <div className="bg-gray-800/30 border border-yellow-400/50 rounded-3xl p-12 max-w-2xl mx-auto shadow-2xl backdrop-blur-sm hover:shadow-yellow-400/20 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                  <span className="text-red-400 font-semibold text-sm">Oferta Limitada</span>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 text-lg mb-2">De <span className="line-through text-xl">R$ 10.000</span></p>
                  <div className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
                    R$ 1.850
                  </div>
                  <p className="text-gray-300 text-lg">
                    Promoção Black Friday Antecipada • 81% de desconto
                  </p>
                </div>

                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">O Que Você Recebe:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                    {[
                      "6 encontros em grupo (2h cada)",
                      "4 sessões individuais (1/mês)",
                      "Método Pódium completo",
                      "Sala de Ligação para prática",
                      "Agente Pódium IA",
                      "Comunidade exclusiva",
                      "Certificação oficial",
                      "Garantia de 7 dias"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <a 
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-yellow-400 text-gray-900 font-bold text-xl rounded-full transition-all duration-300 hover:bg-yellow-500 shadow-2xl hover:shadow-yellow-400/30 hover:scale-105"
            >
              <span className="relative drop-shadow-sm">Entrar na Escuderia Pódium Agora</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <p className="text-gray-400 mt-4 text-sm">
              Vagas limitadas • Garantia de 7 dias • Cancelamento gratuito
            </p>
          </motion.div>

          {/* Urgency Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    Últimas Vagas Disponíveis
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Esta é a primeira turma da Escuderia Pódium com condições especiais. 
                  As próximas turmas terão preço normal de R$ 10.000.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Apenas para Pilotos da Comunidade Pódium
                  </span>
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Promoção Black Friday Antecipada
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Alternative */}
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <p className="text-gray-300 mb-6 text-lg">
              Prefere falar diretamente conosco?
            </p>
            <a 
              href="https://wa.me/5531994293099"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp: (31) 99429-3099
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
