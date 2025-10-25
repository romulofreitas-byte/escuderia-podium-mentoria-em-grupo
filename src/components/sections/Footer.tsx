import React from 'react';
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-podium-black border-t border-podium-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-podium-text-primary mb-2">
                Escuderia Pódium
              </h3>
              <p className="text-podium-text-secondary">
                Mentoria em grupo para transformar seu processo comercial e fechar seu primeiro contrato.
              </p>
            </div>
            
            <div className="space-y-2 text-podium-text-secondary">
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Belo Horizonte, MG - Brasil</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(31) 99429-3099</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>romulo.freitas@combustivelmv.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#por-que-funciona" className="text-podium-text-secondary hover:text-podium-yellow transition-colors">
                  Por Que Funciona
                </a>
              </li>
              <li>
                <a href="#estrutura-programa" className="text-podium-text-secondary hover:text-podium-yellow transition-colors">
                  Estrutura do Programa
                </a>
              </li>
              <li>
                <a href="#investimento" className="text-podium-text-secondary hover:text-podium-yellow transition-colors">
                  Investimento
                </a>
              </li>
              <li>
                <a href="#comparacao" className="text-podium-text-secondary hover:text-podium-yellow transition-colors">
                  Comparação
                </a>
              </li>
              <li>
                <a href="#faq" className="text-podium-text-secondary hover:text-podium-yellow transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-podium-text-primary mb-4">
              Redes Sociais
            </h4>
            <div className="space-y-3">
              <a 
                href="https://linkedin.com/in/romulocsfreitas" 
                className="flex items-center space-x-2 text-podium-text-secondary hover:text-podium-yellow transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com/romulocsfreitas" 
                className="flex items-center space-x-2 text-podium-text-secondary hover:text-podium-yellow transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://youtube.com/@combustivelmv" 
                className="flex items-center space-x-2 text-podium-text-secondary hover:text-podium-yellow transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-podium-text-primary mb-4">
                Contato Direto
              </h4>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/5531994293099" 
                  className="block bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                </a>
                <a 
                  href="mailto:romulo.freitas@combustivelmv.com"
                  className="block border border-podium-yellow text-podium-yellow px-4 py-2 rounded-lg text-center hover:bg-podium-yellow hover:text-podium-black transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="border-t border-podium-yellow/10 mt-12 pt-8">
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <Image 
                  src="/logos/Escuderia Branco.png"
                  alt="Escuderia Pódium"
                  width={48}
                  height={48}
                  className="object-contain opacity-100 hover:opacity-70 transition-opacity duration-300"
                />
              </div>
              <div className="w-16 h-8 relative">
                <Image 
                  src="/logos/logo-metodo.png"
                  alt="Método Pódium"
                  width={64}
                  height={32}
                  className="object-contain opacity-100 hover:opacity-70 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-podium-yellow/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-podium-text-muted text-sm">
              © 2025 Escuderia Pódium. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-podium-text-muted hover:text-podium-yellow transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-podium-text-muted hover:text-podium-yellow transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-podium-text-muted hover:text-podium-yellow transition-colors">
                Contato
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-podium-text-muted text-xs">
              CNPJ: 43.393.622/0001-30 | Belo Horizonte - MG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
