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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="por-que-funciona" className="section-padding section-gradient">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-20">
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="default" size="lg">
              Por Que Funciona
            </Badge>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-black text-white mb-8"
          >
            A Combinação Perfeita para{' '}
            <span className="gradient-text">Sucesso</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Metodologia comprovada + IA + Comunidade ativa = Resultados garantidos
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = icons[benefit.icon as keyof typeof icons];
            return (
              <AnimatedCard 
                key={index} 
                variant="gradient"
                delay={index * 0.1}
                className="text-center group"
              >
                <div className="icon-container mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </AnimatedCard>
            );
          })}
        </motion.div>

        {/* Additional explanation */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 max-w-5xl mx-auto card-hover"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Não é apenas teoria
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Você vai praticar com outros pilotos na Sala de Ligação, usar o Agente Pódium para gerar scripts personalizados, 
              e ter o suporte contínuo da comunidade. É a <span className="text-yellow-400 font-semibold">fórmula completa</span> para acelerar sua jornada de vendas.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
