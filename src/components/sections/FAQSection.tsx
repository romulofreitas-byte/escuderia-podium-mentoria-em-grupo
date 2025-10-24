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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="faq" className="section-padding">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="default" size="lg">
              FAQ
            </Badge>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-black text-white mb-8"
          >
            Perguntas Frequentes
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Esclarecemos as principais dúvidas sobre a Escuderia Pódium
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <AnimatedFAQ items={faqItems} />
        </motion.div>

        {/* Additional Support */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <AnimatedCard 
            variant="gradient"
            className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-yellow-400/20 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda Tem Dúvidas?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Nossa equipe está à disposição para esclarecer qualquer dúvida sobre o programa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                href="https://wa.me/5531994293099"
                variant="secondary"
                className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: (31) 99429-3099
              </AnimatedButton>
              <AnimatedButton 
                href="mailto:romulo.freitas@combustivelmv.com"
                variant="secondary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email: romulo.freitas@combustivelmv.com
              </AnimatedButton>
            </div>
          </AnimatedCard>
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
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
        >
          <motion.button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors duration-200"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-5 h-5 text-yellow-400"
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
            <div className="px-6 pb-6">
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
