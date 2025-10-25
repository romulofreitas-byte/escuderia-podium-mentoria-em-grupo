import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col bg-gray-900">
      {/* Background with blur */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/background-podium-hero.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            {/* Left - Logo + Title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative">
                <Image 
                  src="/Escuderia Branco.png"
                  alt="Escuderia Pódium"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-white text-sm font-medium tracking-wide">
                Escuderia Pódium | Mentoria em Grupo | 1ª Turma
              </span>
            </div>

            {/* Right - Date */}
            <div className="flex items-center gap-2 text-yellow-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">1º encontro 30/10</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 py-20 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-8">
              <span className="text-yellow-400 font-semibold text-sm tracking-wide">1ª Turma • Black Friday Antecipada</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Uma mentoria em grupo{' '}
              <span className="text-yellow-400">híbrida</span>
              {' '}pra você vender e se sentir como um{' '}
              <span className="text-yellow-400">empresário</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-10">
              6 encontros em grupo e 4 encontros individuais pra você construir um processo de vendas com ligações, reuniões e fechamento de contratos estratégicos.
            </p>

            {/* CTA Button with Progress */}
            <div className="space-y-4">
              <a 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                className="group relative inline-flex items-center justify-center px-12 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 overflow-hidden"
              >
                {/* Animated border effect */}
                <span className="absolute inset-0 border-2 border-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>
                <span className="relative">Entrar na Escuderia Pódium</span>
              </a>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Vagas preenchidas</span>
                  <span className="text-yellow-400 font-semibold">20%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-lg">
              <Image 
                src="/romulo-hero.png"
                alt="Rômulo Freitas"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
