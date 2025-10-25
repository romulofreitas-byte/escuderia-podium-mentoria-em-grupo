'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Award, Bot, Phone, Zap, Shield, TrendingUp, Calculator, Star, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

export const PricingStrategicSection: React.FC = () => {
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

  const bonusValues = [
    { name: 'Agente Pódium', value: 'R$ 2.000', icon: Bot },
    { name: 'Sala de Ligação', value: 'R$ 1.500', icon: Phone },
    { name: 'Comunidade', value: 'R$ 1.000', icon: Users },
    { name: 'Certificação', value: 'R$ 500', icon: Award }
  ];

  const testimonials = [
    { name: "Ana Silva", result: "R$ 4.500", period: "3 semanas", avatar: "👩‍💼" },
    { name: "Carlos Mendes", result: "Perdeu medo", period: "de ligar", avatar: "👨‍💻" },
    { name: "Marina Costa", result: "Método funciona", period: "comprovado", avatar: "👩‍🎨" }
  ];

  return (
    <section id="investimento-estrategico" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      {/* Floating Logo */}
      <div className="absolute top-8 right-8 z-10 hidden lg:block">
        <div className="w-20 h-20 relative">
          <Image 
            src="/logos/Escuderia Branco.png"
            alt="Escuderia Pódium"
            width={80}
            height={80}
            className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header com Urgência */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 backdrop-blur-sm shadow-lg animate-pulse">
            <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 font-semibold text-xs tracking-wide">Oferta Limitada - Black Friday Antecipada</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Sua Jornada Para o{' '}
            <span className="text-yellow-400 animate-pulse">Primeiro Contrato</span>
            {' '}Começa Agora
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Apenas para pilotos da Comunidade Pódium • Vagas limitadas
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-300">Vagas preenchidas</span>
              <span className="text-yellow-400 font-semibold animate-pulse">29%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse transition-all duration-1000" style={{width: '29%'}}></div>
            </div>
          </div>
        </motion.div>

        {/* Card Principal de Preço */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gray-800/30 border-2 border-yellow-400/50 rounded-3xl p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 relative overflow-hidden">
            {/* Borda animada */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                {/* Ancoragem */}
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Elite Pódium Individual</p>
                    <p className="text-2xl font-bold text-gray-500 line-through">R$ 10.000</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-400 text-sm font-semibold">Escuderia Pódium (Grupo)</p>
                    <p className="text-4xl sm:text-5xl font-black text-yellow-400">R$ 1.850</p>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
                  <span className="text-green-400 font-bold text-sm">Economize R$ 8.150 (81% OFF)</span>
                </div>
                
                <p className="text-gray-300 text-lg mb-2">
                  <span className="text-yellow-400 font-semibold">Mesmo método</span>, formato em grupo
                </p>
              </div>

              {/* Grid de Benefícios Visuais */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-700/30 rounded-xl">
                  <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">16h</p>
                  <p className="text-gray-400 text-xs">Mentoria</p>
                </div>
                <div className="text-center p-4 bg-gray-700/30 rounded-xl">
                  <Bot className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">R$ 2.000</p>
                  <p className="text-gray-400 text-xs">Agente IA</p>
                </div>
                <div className="text-center p-4 bg-gray-700/30 rounded-xl">
                  <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">R$ 1.500</p>
                  <p className="text-gray-400 text-xs">Sala Ligação</p>
                </div>
                <div className="text-center p-4 bg-gray-700/30 rounded-xl">
                  <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">R$ 1.000</p>
                  <p className="text-gray-400 text-xs">Comunidade</p>
                </div>
              </div>

              {/* Total de Bônus */}
              <div className="text-center mb-8 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
                <p className="text-gray-300 mb-1">Valor Total dos Bônus:</p>
                <p className="text-3xl font-bold text-yellow-400">R$ 5.000</p>
                <p className="text-gray-400 text-sm">Inclusos gratuitamente</p>
              </div>

              {/* CTA Principal */}
              <div className="text-center mb-8">
                <a 
                  href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                  className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-black text-xl rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 hover:scale-105"
                >
                  <Zap className="w-6 h-6 mr-3" />
                  Garantir Minha Vaga na Escuderia - R$ 1.850
                </a>
                <p className="text-gray-400 text-sm mt-4">
                  ✓ Vagas limitadas • ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Garantias e Redutores de Risco */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-xl backdrop-blur-sm">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Garantia 7 Dias</h3>
            <p className="text-gray-400 text-sm">Teste sem compromisso</p>
          </div>
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-xl backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Cancelamento Gratuito</h3>
            <p className="text-gray-400 text-sm">Sem taxas ocultas</p>
          </div>
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-xl backdrop-blur-sm">
            <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Satisfação Garantida</h3>
            <p className="text-gray-400 text-sm">Ou dinheiro de volta</p>
          </div>
          <div className="text-center p-6 bg-gray-800/30 border border-gray-700 rounded-xl backdrop-blur-sm">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Suporte 10 Semanas</h3>
            <p className="text-gray-400 text-sm">Acompanhamento completo</p>
          </div>
        </motion.div>

        {/* Prova de Valor */}
        <motion.div 
          variants={itemVariants}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="text-center mb-6">
              <Calculator className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Prova de Valor</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-gray-300 mb-2">Investimento:</p>
                <p className="text-3xl font-bold text-yellow-400">R$ 1.850</p>
                <p className="text-gray-400 text-sm">Escuderia Pódium</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-2">Retorno esperado:</p>
                <p className="text-3xl font-bold text-green-400">1 contrato fechado</p>
                <p className="text-gray-400 text-sm">Em 6 semanas</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-300 mb-2">Se você fechar 1 contrato de R$ 3.000:</p>
              <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-green-400 font-bold text-xl">ROI de 162%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testemunhos Relâmpago */}
        <motion.div 
          variants={itemVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Resultados Reais de Pilotos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300">
                <div className="text-4xl mb-3">{testimonial.avatar}</div>
                <h4 className="text-white font-bold mb-2">{testimonial.name}</h4>
                <p className="text-yellow-400 font-bold text-lg mb-1">{testimonial.result}</p>
                <p className="text-gray-400 text-sm">{testimonial.period}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Secundário */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border border-yellow-400/30 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">
              Prefere falar diretamente conosco?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está à disposição para esclarecer qualquer dúvida
            </p>
            <a 
              href="https://wa.me/5531994293099"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Falar com Consultor no WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
