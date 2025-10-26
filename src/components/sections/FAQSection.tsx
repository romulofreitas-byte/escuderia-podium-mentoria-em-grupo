'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Badge } from '@/components/ui/Badge';
import { faqItems } from '@/data/faq';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
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
    <section id="faq" className="py-20 md:py-[75px] bg-gray-800">
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
              FAQ
            </Badge>
          </motion.div>
          
              <motion.h2 
                variants={itemVariants}
                className="text-xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4"
              >
                Perguntas Frequentes
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xs sm:text-base text-gray-300 max-w-2xl mx-auto text-center"
              >
                Esclarecemos as principais dúvidas sobre a Escuderia Pódium
              </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="max-w-3xl mx-auto mb-16"
        >
          <AnimatedFAQ items={faqItems} />
        </motion.div>

      </motion.div>
    </section>
  );
};

// Enhanced FAQ Component with Framer Motion
const AnimatedFAQ: React.FC<{ items: typeof faqItems }> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
              className="bg-gray-700/30 border border-gray-600 rounded-lg overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
        >
          <motion.button
            onClick={() => toggleItem(index)}
            className="w-full px-4 py-3 sm:px-6 sm:py-4 text-left flex justify-between items-center hover:bg-gray-900/20 transition-colors duration-200"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </motion.button>
          
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 sm:px-6 sm:pb-4">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
