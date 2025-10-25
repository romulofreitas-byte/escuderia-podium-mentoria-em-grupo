"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Badge } from '@/components/ui/Badge';
import { FlipCard } from '@/components/ui/FlipCard';
import { TimelineModal } from '@/components/ui/TimelineModal';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { expectedResults } from '@/data/benefits';
import { CheckCircle, Workflow, FileText, Phone, Users, Handshake, TrendingUp, BarChart3, Star, Award, Calendar, MessageCircle } from 'lucide-react';

export const ExpectedResultsSection: React.FC = () => {
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);
  const [isTestimonialCarouselOpen, setIsTestimonialCarouselOpen] = useState(false);

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
      rating: 5,
      avatar: "/depoimentos/mentoria-thiago-rosa-live.jpg"
    },
    {
      name: "Vinícius Nascimento", 
      role: "Web Development",
      content: "Mestre, olha só o tanto de problema que você me arrumou",
      rating: 5,
      avatar: "/depoimentos/depoimento-vinicius.jpg"
    },
    {
      name: "Marina Marchiolli",
      role: "Branding Specialist",
      content: "Hoje eu me sinto Empresária. Com sinceridade, eu nunca achei que eu iria conseguir fechar um contrato sozinha, e eu consegui!",
      rating: 5,
      avatar: "/depoimentos/depoimento-marina.jpg"
    }
  ];

  return (
    <section id="resultados-esperados" className="py-[75px]">
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
                Uma mentoria que te transforma como pessoa
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="body-text-lg max-w-3xl mx-auto"
              >
                De freelancer inseguro para empresário confiante em suas vendas
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
              <FlipCard
                key={index}
                icon={IconComponent}
                title={result.title}
                description={result.description}
                delay={index * 0.1}
              />
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => setIsTimelineModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"
          >
            <Calendar className="w-5 h-5" />
            <span>Ver Cronograma de Resultados</span>
          </button>
          <button
            onClick={() => setIsTestimonialCarouselOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 border border-yellow-400/50 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Ver Todos os Depoimentos</span>
          </button>
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
              <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h4 className="text-white font-bold mb-2">{testimonial.name}</h4>
                <p className="text-yellow-400 text-sm mb-3">{testimonial.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex justify-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <TimelineModal
        isOpen={isTimelineModalOpen}
        onClose={() => setIsTimelineModalOpen(false)}
      />

      <TestimonialCarousel
        isOpen={isTestimonialCarouselOpen}
        onClose={() => setIsTestimonialCarouselOpen(false)}
      />
    </section>
  );
};
