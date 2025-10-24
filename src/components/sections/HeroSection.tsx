import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Badge } from '@/components/ui/Badge';
import { StatCounter } from '@/components/ui/StatCounter';
import { CheckCircle, Users, Clock, Star, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-400/2 to-purple-400/2 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-12">
            <Badge variant="default" size="lg" className="text-base">
              🏆 1ª Turma • Black Friday Antecipada
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight"
          >
            Do Zero ao Primeiro{' '}
            <span className="gradient-text">Contrato</span>
            <br />
            <span className="gradient-text">Fechado</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-2xl sm:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Método Pódium completo em <span className="text-yellow-400 font-semibold">6 semanas intensivas</span>
          </motion.p>

          {/* Pricing Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 mb-16 max-w-2xl mx-auto card-hover"
          >
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-4">De <span className="line-through text-gray-500">R$ 10.000</span></p>
              <div className="text-6xl sm:text-7xl font-black gradient-text mb-4">
                R$ 1.850
              </div>
              <p className="text-gray-300 text-lg mb-8">81% de desconto • Promoção limitada</p>
              
              <AnimatedButton 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                size="xl"
                className="mb-6"
              >
                Entrar na Escuderia Pódium
              </AnimatedButton>
              
              <p className="text-gray-400 text-sm">
                ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={statsVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
          >
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="stat-number text-3xl mb-2">5-10</div>
              <p className="text-gray-400 text-sm">Pilotos por turma</p>
            </div>
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="stat-number text-3xl mb-2">16h</div>
              <p className="text-gray-400 text-sm">De mentoria</p>
            </div>
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="stat-number text-3xl mb-2">100%</div>
              <p className="text-gray-400 text-sm">Método Pódium</p>
            </div>
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="stat-number text-3xl mb-2">R$ 0</div>
              <p className="text-gray-400 text-sm">Para R$ 10k+</p>
            </div>
          </motion.div>

          {/* Results Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              "Primeiro contrato fechado",
              "Processo estruturado", 
              "Scripts validados",
              "Confiança total",
              "Habilidade em reuniões",
              "Comunidade ativa"
            ].map((result, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-4 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-lg text-gray-300 font-medium">{result}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-yellow-400" />
                <span className="font-medium">5-10 pilotos por turma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-yellow-400" />
                <span className="font-medium">16 horas de mentoria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="font-medium">Método Pódium completo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
