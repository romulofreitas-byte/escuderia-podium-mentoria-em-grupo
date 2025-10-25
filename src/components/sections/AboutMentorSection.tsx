'use client';

import React from 'react';
import { Linkedin, Instagram, Youtube, Mail, Phone, Award, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const AboutMentorSection: React.FC = () => {
  return (
    <section id="sobre-mentor" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
            <span className="text-yellow-400 font-semibold text-sm tracking-wide uppercase">Sobre o Mentor</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Conheça{' '}
            <span className="gradient-text">Rômulo Freitas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Criador do Método Pódium e especialista em vendas digitais
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="text-center lg:text-left">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-gray-800">
                    <Image 
                      src="/mentor.jpg" 
                      alt="Rômulo Freitas" 
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a 
                    href="https://linkedin.com/in/romulocsfreitas" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://instagram.com/romulocsfreitas" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://youtube.com/@combustivelmv" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Rômulo Freitas
                  </h3>
                  <p className="text-xl text-yellow-400 mb-6">
                    Criador do Método Pódium
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Especialista em vendas digitais com mais de 8 anos de experiência em processos comerciais estruturados. 
                    Criador do Método Pódium, uma metodologia comprovada para acelerar vendas em qualquer nicho.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Atua como mentor e consultor para profissionais que querem estruturar seu processo comercial 
                    e aumentar suas vendas de forma consistente e escalável.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white">8+</p>
                    <p className="text-xs sm:text-sm text-gray-400">Anos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white">500+</p>
                    <p className="text-xs sm:text-sm text-gray-400">Alunos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white">95%</p>
                    <p className="text-xs sm:text-sm text-gray-400">Sucesso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h4 className="text-2xl font-bold text-white mb-6">
                Credenciais
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Criador do Método Pódium de Vendas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Especialista em Cold Call e Prospecção</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Consultor em Processos Comerciais</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Mentor de Vendas Digitais</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Fundador da Comunidade Pódium</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h4 className="text-2xl font-bold text-white mb-6">
                Filosofia
              </h4>
              <p className="text-gray-300 leading-relaxed italic">
                &ldquo;Acredito que vendas é uma habilidade que pode ser aprendida e dominada por qualquer pessoa. 
                O Método Pódium foi criado para democratizar o acesso a técnicas de vendas de alta performance, 
                permitindo que profissionais de qualquer área possam estruturar seu processo comercial e 
                alcançar resultados consistentes.&rdquo;
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-3xl p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-8">
                Entre em Contato Direto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <a 
                  href="https://wa.me/5531994293099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-4 p-6 bg-gray-900/50 rounded-2xl hover:bg-gray-900 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-gray-400">(31) 99429-3099</p>
                  </div>
                </a>
                <a 
                  href="mailto:romulo.freitas@combustivelmv.com"
                  className="flex items-center justify-center space-x-4 p-6 bg-gray-900/50 rounded-2xl hover:bg-gray-900 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">romulo.freitas@combustivelmv.com</p>
                  </div>
                </a>
              </div>
              <a 
                href="https://wa.me/5531994293099"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xl px-12 py-6 inline-block"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
