import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppContactCard: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Fale conosco
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Tem dúvidas sobre o programa? Estamos aqui para ajudar!
          </p>
          <a 
            href="https://wa.me/5531994293099?text=Rômulo,%20quero%20saber%20mais%20sobre%20a%20Escuderia%20Pódium!"
            className="inline-flex items-center px-12 py-6 bg-green-500 text-white font-bold text-xl rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Falar com Consultor no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
