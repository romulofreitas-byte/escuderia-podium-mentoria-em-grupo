'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Badge } from '@/components/ui/Badge';
import { Target, Bot, Phone, Users, Zap, Shield, Clock } from 'lucide-react';
import { benefits } from '@/data/benefits';

export const WhyItWorksSection: React.FC = () => {
  const icons = {
    Target: Target,
    Bot: Bot,
    Phone: Phone,
    Users: Users,
    Zap: Zap,
    Shield: Shield,
    Clock: Clock
  };

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
    <section id="por-que-funciona" className="section-padding bg-black">
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
              Por Que Funciona
            </Badge>
          </motion.div>
          
              <motion.h2 
                variants={itemVariants}
                className="heading-2"
              >
                A Combinação Perfeita para{' '}
                <span className="gradient-text font-medium">Sucesso</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="body-text-lg max-w-2xl mx-auto"
              >
                Metodologia comprovada + IA + Comunidade ativa = Resultados garantidos
              </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = icons[benefit.icon as keyof typeof icons];
            return (
              <AnimatedCard 
                key={index} 
                variant="gradient"
                delay={index * 0.1}
                className="text-center"
              >
                <div className="icon-container mx-auto mb-4">
                  <IconComponent className="w-4 h-4 text-yellow-400" />
                </div>
                    <h3 className="heading-3 mb-3">{benefit.title}</h3>
                    <p className="small-text">{benefit.description}</p>
              </AnimatedCard>
            );
          })}
        </motion.div>

        {/* Additional explanation */}
        <motion.div 
          variants={itemVariants}
          className="bg-transparent border border-gray-800/20 rounded-sm p-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
                <h3 className="heading-3 mb-4">
                  Não é apenas teoria
                </h3>
                <p className="body-text">
                  Você vai praticar com outros pilotos na Sala de Ligação, usar o Agente Pódium para gerar scripts personalizados, 
                  e ter o suporte contínuo da comunidade. É a <span className="text-yellow-400">fórmula completa</span> para acelerar sua jornada de vendas.
                </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
