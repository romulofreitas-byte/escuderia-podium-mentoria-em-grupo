"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Calendar } from 'lucide-react';
import Image from 'next/image';

export const TimelineSection: React.FC = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    // Animate items sequentially when section comes into view
    const timeouts = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500].map((delay, index) =>
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
      }, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const milestones = [
    {
      week: 6,
      title: "Após 6 Semanas Intensivas",
      items: [
        "Primeiro contrato fechado (ou muito perto)",
        "Processo comercial estruturado", 
        "Scripts validados e funcionando",
        "Confiança para fazer ligações"
      ],
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-400/30",
      iconColor: "text-blue-400"
    },
    {
      week: 10,
      title: "Após 10 Semanas Completas",
      items: [
        "2-3 contratos fechados",
        "Pipeline estruturado",
        "Processo replicável", 
        "Pronto para escalar"
      ],
      color: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-400/30",
      iconColor: "text-yellow-400"
    }
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
    <section id="cronograma-resultados" className="py-[75px] bg-gray-800 relative">
      {/* Floating Escuderia Icon */}
      <div className="absolute top-8 right-8 z-5 hidden lg:block">
        <div className="w-12 h-12 relative opacity-40 hover:opacity-60 transition-opacity duration-300">
          <Image 
            src="/logos/icon-escuderia.png"
            alt="Escuderia Pódium"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      </div>
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
            <Calendar className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Cronograma de Resultados</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Sua{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">jornada</span>
            {' '}de transformação em números
          </h2>
          
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Veja exatamente o que você vai conquistar em cada etapa do programa
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400/50 to-yellow-400/50 rounded-full"></div>
          
          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${milestone.color} border ${milestone.borderColor} rounded-full flex items-center justify-center z-10 ${
                  animatedItems.includes(index) ? 'scale-110' : 'scale-0'
                } transition-transform duration-500`}>
                  <span className={`text-lg font-bold ${milestone.iconColor}`}>
                    {milestone.week}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}>
                  <div className={`bg-gray-800/30 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 ${
                    animatedItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } transition-all duration-500`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className={`w-5 h-5 ${milestone.iconColor}`} />
                      <h3 className="text-xl font-bold text-white">
                        {milestone.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {milestone.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className={`flex items-center space-x-3 ${
                            index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''
                          } ${
                            animatedItems.includes(index + 2 + itemIndex) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          } transition-all duration-300`}
                          style={{ transitionDelay: `${(index + 2 + itemIndex) * 100}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div variants={itemVariants} className="mt-12">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border border-yellow-400/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-4 text-center">
              Resumo da Jornada
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 bg-blue-400/20 border border-blue-400/30 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-sm font-bold">6</span>
                </div>
                <span className="text-gray-300">Primeiro contrato fechado</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 text-sm font-bold">10</span>
                </div>
                <span className="text-gray-300">Pronto para escalar</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
