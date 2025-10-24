'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, Users, Clock, Star, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
    <section className="min-h-screen bg-black flex items-center relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Side - Text Content (40%) */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Badge variant="default" size="sm">
                Escuderia Pódium • 1ª Turma
              </Badge>
              <div className="text-sm text-gray-400">
                6 semanas intensivas + 4 encontros mensais
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-light text-white leading-tight"
            >
              Do Zero ao Primeiro{' '}
              <span className="gradient-text font-medium">Contrato</span>
              <br />
              <span className="gradient-text font-medium">Fechado</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-md"
            >
              Método Pódium completo em <span className="text-yellow-400">6 semanas intensivas</span> com suporte de IA e comunidade ativa
            </motion.p>

            {/* CTA */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
              <AnimatedButton 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                size="md"
                variant="primary"
              >
                Entrar na Escuderia Pódium
              </AnimatedButton>
              <p className="text-sm text-gray-400">
                ✓ Garantia de 7 dias • ✓ Cancelamento gratuito
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo (60%) */}
          <motion.div 
            className="lg:col-span-3 relative"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[600px] lg:h-[700px]">
              <Image 
                src="/romulo-foto.jpg" 
                alt="Rômulo Freitas - Criador do Método Pódium"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-800/30"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-medium text-yellow-400 mb-2">5-10</div>
              <p className="text-sm text-gray-400">Pilotos por turma</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-medium text-yellow-400 mb-2">16h</div>
              <p className="text-sm text-gray-400">De mentoria</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-medium text-yellow-400 mb-2">100%</div>
              <p className="text-sm text-gray-400">Método Pódium</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-medium text-yellow-400 mb-2">R$ 0</div>
              <p className="text-sm text-gray-400">Para R$ 10k+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
