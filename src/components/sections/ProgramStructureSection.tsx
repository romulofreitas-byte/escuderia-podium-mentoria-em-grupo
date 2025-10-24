'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Badge } from '@/components/ui/Badge';
import { programWeeks, phases } from '@/data/program';
import { Calendar, Clock, Users, User, ArrowRight, CheckCircle } from 'lucide-react';

export const ProgramStructureSection: React.FC = () => {
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

  const phaseColors = {
    'Fundação': 'bg-blue-500',
    'Execução': 'bg-green-500', 
    'Fechamento': 'bg-red-500',
    'Consolidação': 'bg-purple-500'
  };

  return (
    <section id="estrutura-programa" className="section-padding bg-podium-dark-secondary">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="purple" size="lg">
              Estrutura do Programa
            </Badge>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-black text-white mb-8"
          >
            6 Semanas Intensivas + 4 Encontros Mensais
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transformação completa do seu processo comercial usando o Método Pódium, 
            com suporte de IA e comunidade ativa
          </motion.p>
        </div>

        {/* Phases Overview */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {phases.map((phase, index) => (
            <AnimatedCard 
              key={index} 
              variant="gradient"
              delay={index * 0.1}
              className="text-center"
            >
              <div className={`w-16 h-16 ${phaseColors[phase.name as keyof typeof phaseColors]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {phase.name}
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Semanas {phase.weeks}
              </p>
              <p className="text-gray-300 text-sm">
                {phase.description}
              </p>
            </AnimatedCard>
          ))}
        </motion.div>

        {/* Detailed Program */}
        <motion.div 
          variants={itemVariants}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Cronograma Detalhado
          </h3>

          {programWeeks.map((week, index) => (
            <AnimatedCard 
              key={index} 
              variant="process"
              delay={index * 0.05}
              className="border-l-4 border-l-yellow-400"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Week Info */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-xl p-4 text-center min-w-[140px]">
                    <div className="text-2xl font-bold">Semana {week.week}</div>
                    <div className="text-sm font-medium">{week.phase}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {week.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      {week.format === 'Grupo' ? (
                        <Users className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                      <span className="text-sm">{week.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{week.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 italic text-lg">
                    {week.theme}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Content */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-yellow-400" />
                        Conteúdo:
                      </h4>
                      <ul className="space-y-2">
                        {week.content.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-yellow-400 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Entregas:
                      </h4>
                      <ul className="space-y-2">
                        {week.deliverables.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2 mt-1">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <span className="text-yellow-400 mr-2">🔧</span>
                        Ferramentas:
                      </h4>
                      <ul className="space-y-2">
                        {week.tools.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-yellow-400 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div 
          variants={itemVariants}
          className="mt-16"
        >
          <AnimatedCard 
            variant="gradient"
            className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border-yellow-400/30"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Resumo do Programa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">10 semanas de duração</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">16 horas de mentoria</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">Turma limitada (5-10 pilotos)</span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </motion.div>
      </motion.div>
    </section>
  );
};
