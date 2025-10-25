import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppContactCard: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container-custom">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Fale conosco
            </h3>
            <p className="text-gray-300 mb-6">
              Tem dúvidas sobre o programa? Estamos aqui para ajudar!
            </p>
            <a 
              href="https://wa.me/5531994293099"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Falar com Consultor no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
