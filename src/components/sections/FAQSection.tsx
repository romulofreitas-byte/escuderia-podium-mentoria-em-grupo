import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { FAQ } from '@/components/ui/FAQ';
import { faqItems } from '@/data/faq';

export const FAQSection: React.FC = () => {
  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Perguntas Frequentes
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Esclarecemos as principais dúvidas sobre a Escuderia Pódium
        </Text>
      </div>

      <div className="max-w-4xl mx-auto">
        <FAQ items={faqItems} />
      </div>

      {/* Additional Support */}
      <div className="mt-16 text-center">
        <div className="bg-podium-dark border border-podium-yellow/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-podium-text-primary mb-4">
            Ainda Tem Dúvidas?
          </h3>
          <p className="text-podium-text-secondary text-lg mb-6">
            Nossa equipe está à disposição para esclarecer qualquer dúvida sobre o programa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5531994293099" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp: (31) 99429-3099</span>
            </a>
            <a 
              href="mailto:romulo.freitas@combustivelmv.com"
              className="border-2 border-podium-yellow text-podium-yellow px-6 py-3 rounded-lg font-semibold hover:bg-podium-yellow hover:text-podium-black transition-colors flex items-center justify-center space-x-2"
            >
              <span>📧</span>
              <span>Email: romulo.freitas@combustivelmv.com</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
