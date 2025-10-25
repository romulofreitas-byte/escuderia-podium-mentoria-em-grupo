import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden flex flex-col bg-gray-900" style={{height: 'calc(100vh - 64px)'}}>
      {/* Background with blur */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/background-podium-hero.jpg"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Left - Logo + Title */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image 
                  src="/icon-escuderia.png"
                  alt="Escuderia Pódium"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-white text-sm font-medium tracking-wide">
                Escuderia Pódium | Mentoria em Grupo
              </span>
            </div>

            {/* Right - Date */}
            <div className="flex items-center gap-2 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-light">1º encontro 30/10</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
              <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">1ª Turma • Black Friday Antecipada • 7 vagas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
              Uma mentoria em grupo{' '}
              <span className="text-yellow-400 drop-shadow-md">híbrida</span>
              {' '}pra você vender e se sentir como um{' '}
              <span className="text-yellow-400 drop-shadow-md">empresário</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6 drop-shadow-md">
              6 encontros em grupo e 4 encontros individuais pra você construir um processo de vendas com ligações, reuniões e fechamento de contratos estratégicos.
            </p>

            {/* CTA Button with Progress */}
            <div className="inline-flex flex-col space-y-3">
              <a 
                href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
                className="group relative inline-flex items-center justify-center px-12 py-4 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-semibold rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-gray-900 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/30 hover:scale-105"
              >
                <span className="relative drop-shadow-sm">Entrar na Escuderia Pódium</span>
              </a>

              {/* Progress Bar */}
              <div className="space-y-2 w-full">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300 drop-shadow-sm">Vagas preenchidas</span>
                  <span className="text-yellow-400 font-semibold drop-shadow-sm">29%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden relative shadow-inner">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse shadow-lg" style={{width: '29%'}}></div>
                  {/* Loading shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 hover:scale-105">
                <Image 
                  src="/romulo-hero-2.png"
                  alt="Rômulo Freitas"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
