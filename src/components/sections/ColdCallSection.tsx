'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Phone, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { VideoModal } from '@/components/ui/VideoModal';

export const ColdCallSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  const painPoints = [
    {
      icon: AlertTriangle,
      text: "Travado na hora da ligação?",
      description: "Você sabe que precisa ligar, mas fica procrastinando"
    },
    {
      icon: Phone,
      text: "Não sabe o que dizer?",
      description: "Fica sem palavras quando o cliente atende"
    },
    {
      icon: AlertTriangle,
      text: "Medo da rejeição?",
      description: "Prefere não ligar do que ouvir um 'não'"
    }
  ];

  return (
    <section id="cold-call" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with orange/red gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/3 to-red-500/3 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full backdrop-blur-sm shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-400 font-bold text-sm tracking-wide drop-shadow-sm">Cerne do Método Pódium</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg"
          >
            O Segredo Que{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-md">
              Transforma
            </span>{' '}
            Suas Ligações
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12 leading-relaxed drop-shadow-md max-w-3xl mx-auto"
          >
            Cold Call é o coração do Método Pódium. Enquanto outros evitam ligações, 
            você vai dominar essa habilidade e fechar contratos que outros só sonham.
          </motion.p>

          {/* Pain Points Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-orange-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{point.text}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Video Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <div className="bg-gray-800/30 border border-orange-500/30 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm hover:shadow-orange-500/20 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Veja Como Eu Faço{' '}
                  <span className="text-orange-400">Cold Calls Reais</span>
                </h3>
                <p className="text-gray-300 text-lg">
                  Compilado das minhas melhores ligações de vendas no YouTube
                </p>
              </div>

              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
                  {/* Video Thumbnail Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        Cold Calls que Fecham Contratos
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Técnicas reais aplicadas em ligações de vendas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">15+</div>
                  <div className="text-gray-300 text-sm">Ligações Reais</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
                  <div className="text-gray-300 text-sm">Técnicas Aplicadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">Real</div>
                  <div className="text-gray-300 text-sm">Sem Roteiros</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-6">
                  No Método Pódium, Você Vai{' '}
                  <span className="text-orange-400">Dominar</span> o Cold Call
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Scripts que Funcionam</h4>
                        <p className="text-gray-300 text-sm">Frases testadas que abrem portas e geram interesse</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Técnicas de Persuasão</h4>
                        <p className="text-gray-300 text-sm">Como convencer sem ser invasivo ou agressivo</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Superar Objeções</h4>
                        <p className="text-gray-300 text-sm">Respostas para as principais objeções de mercado</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Prática Real</h4>
                        <p className="text-gray-300 text-sm">Sala de ligação para treinar com mentoria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <a 
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-full transition-all duration-300 hover:from-orange-600 hover:to-red-600 shadow-2xl hover:shadow-orange-500/30 hover:scale-105"
            >
              <span className="relative drop-shadow-sm">Domine o Cold Call Agora</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <p className="text-gray-400 mt-4 text-sm">
              Junte-se aos pilotos que já transformaram suas ligações
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://youtu.be/lqhlmMbF7HI"
        title="Cold Calls que Fecham Contratos - Compilado"
      />
    </section>
  );
};
