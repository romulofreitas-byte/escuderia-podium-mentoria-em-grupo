'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Badge } from '@/components/ui/Badge';
import { expectedResults } from '@/data/benefits';
import { CheckCircle, Workflow, FileText, Phone, Users, Handshake, TrendingUp, BarChart3, Star, Award } from 'lucide-react';

export const ExpectedResultsSection: React.FC = () => {
  const icons = {
    CheckCircle: CheckCircle,
    Workflow: Workflow,
    FileText: FileText,
    Phone: Phone,
    Users: Users,
    Handshake: Handshake,
    TrendingUp: TrendingUp,
    BarChart3: BarChart3
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

  const testimonials = [
    {
      name: "Thiago Rosa",
      role: "Gestor de Tráfego",
      content: "A mentoria é muito melhor que os vídeos do Youtube, muito diferente, sinto que o Rômulo pega na mão da gente mesmo",
      rating: 5
    },
    {
      name: "Vinícius Nascimento", 
      role: "Piloto Pódium",
      content: "Mestre, olha só o tanto de problema que você me arrumou",
      rating: 5
    },
    {
      name: "Marina Marchiolli",
      role: "Piloto Pódium",
      content: "Hoje eu me sinto Empresária. Com sinceridade, eu nunca achei que eu iria conseguir fechar um contrato sozinha, e eu consegui!",
      rating: 5
    }
  ];

  return (
    <section id="resultados-esperados" className="section-padding">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="success" size="lg">
              Como vou me sentir no final
            </Badge>
          </motion.div>
          
              <motion.h2 
                variants={itemVariants}
                className="heading-1"
              >
                Como vou me sentir no final
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="body-text-lg max-w-3xl mx-auto"
              >
                De funcionário inseguro para empresário confiante em suas vendas
              </motion.p>
        </div>

        {/* Results Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {expectedResults.map((result, index) => {
            const IconComponent = icons[result.icon as keyof typeof icons];
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
                    <h3 className="heading-3 mb-4">{result.title}</h3>
                    <p className="body-text">{result.description}</p>
              </AnimatedCard>
            );
          })}
        </motion.div>

            {/* Timeline */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-12 mb-16 card-hover"
            >
              <h3 className="heading-2 text-center mb-12">
                Cronograma de Resultados
              </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 6 Weeks */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-yellow-400/30">
                <span className="text-3xl font-bold text-yellow-400">6</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-6">
                Após 6 Semanas Intensivas
              </h4>
              <ul className="space-y-3 text-left">
                {[
                  "Primeiro contrato fechado (ou muito perto)",
                  "Processo comercial estruturado", 
                  "Scripts validados e funcionando",
                  "Confiança para fazer ligações"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 10 Weeks */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-yellow-400/30">
                <span className="text-3xl font-bold text-yellow-400">10</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-6">
                Após 10 Semanas Completas
              </h4>
              <ul className="space-y-3 text-left">
                {[
                  "2-3 contratos fechados",
                  "Pipeline estruturado",
                  "Processo replicável", 
                  "Pronto para escalar"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div 
          variants={itemVariants}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Depoimentos de Pilotos
          </h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
