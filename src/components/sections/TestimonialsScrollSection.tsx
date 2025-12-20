'use client';

import React, { useState, useRef, useMemo } from 'react';
import { MessageSquare } from 'lucide-react';

// Lista de todos os depoimentos da pasta Testimonials Pódium
// SOLUÇÃO DEFINITIVA: Usar caminhos codificados corretamente para garantir compatibilidade
const getImagePath = (filename: string): string => {
  // Codificar apenas o nome da pasta, mantendo o nome do arquivo sem encoding
  const folderName = encodeURIComponent('Testimonials Pódium');
  const fileName = filename.includes('(') || filename.includes(')') 
    ? encodeURIComponent(filename) 
    : filename;
  return `/${folderName}/${fileName}`;
};

const testimonials = [
  getImagePath('IMG_0336.PNG'),
  getImagePath('IMG_0337.PNG'),
  getImagePath('IMG_0339.PNG'),
  getImagePath('IMG_0417.PNG'),
  getImagePath('IMG_0450.PNG'),
  getImagePath('IMG_0464.PNG'),
  getImagePath('IMG_0549.PNG'),
  getImagePath('IMG_0576.PNG'),
  getImagePath('IMG_0609.PNG'),
  getImagePath('IMG_0932.PNG'),
  getImagePath('IMG_1241.PNG'),
  getImagePath('IMG_1742.PNG'),
  getImagePath('IMG_1743.PNG'),
  getImagePath('IMG_1867.PNG'),
  getImagePath('IMG_2323.PNG'),
  getImagePath('IMG_2526.PNG'),
  getImagePath('IMG_2695.PNG'),
  getImagePath('IMG_2865.PNG'),
  getImagePath('IMG_2867.PNG'),
  getImagePath('IMG_2868.PNG'),
  getImagePath('IMG_2869.PNG'),
  getImagePath('IMG_2870.PNG'),
  getImagePath('IMG_2872.PNG'),
  getImagePath('IMG_3486.PNG'),
  getImagePath('IMG_6039.PNG'),
  getImagePath('IMG_6301.PNG'),
  getImagePath('IMG_7911.PNG'),
  getImagePath('IMG_8052.PNG'),
  getImagePath('IMG_8264.PNG'),
  getImagePath('IMG_8264(1).PNG'),
  getImagePath('IMG_8291.PNG'),
  getImagePath('IMG_8735.PNG'),
  getImagePath('IMG_9469.PNG'),
  getImagePath('IMG_9470.PNG'),
  getImagePath('IMG_9510.PNG'),
  getImagePath('IMG_9582.PNG'),
  getImagePath('IMG_9583.PNG'),
  getImagePath('IMG_9584.PNG'),
  getImagePath('IMG_9755.PNG'),
  getImagePath('IMG_9874.PNG'),
];


export const TestimonialsScrollSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Função para tratar erros de carregamento de imagem
  const handleImageError = (key: string, src: string) => {
    console.error(`Erro ao carregar imagem: ${src}`);
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  // Duplicar array para criar loop infinito sem "pulo"
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Gerar posições iniciais aleatórias para cada coluna (apenas desktop)
  const initialPositions = useMemo(() => {
    // Valores aleatórios entre 0% e 50% (já que a animação vai de 0% a -50%)
    return {
      col1: Math.random() * 50,
      col2: Math.random() * 50,
      col3: Math.random() * 50,
    };
  }, []); // Gerar apenas uma vez quando o componente monta


  return (
    <section 
      id="depoimentos-scroll" 
      className="relative overflow-hidden py-20 md:py-[75px] bg-gray-900"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-md shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <MessageSquare className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Depoimentos Reais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            O que{' '}
            <span className="text-yellow-400 drop-shadow-md">pilotos da comunidade</span>
            {' '}estão dizendo
          </h2>

          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Depoimentos reais de pilotos, mentorados e audiência do YouTube que transformaram suas vendas
          </p>
        </div>

        {/* Scroll Card Container */}
        <div className="max-w-6xl mx-auto">
          <div 
            ref={containerRef}
            className={`bg-gray-800/40 border-2 rounded-3xl p-3 sm:p-6 lg:p-12 backdrop-blur-sm shadow-2xl transition-all duration-300 relative overflow-hidden group ${
              isPaused ? 'border-yellow-400/50' : 'border-gray-700/50'
            }`}
            onMouseEnter={() => {
              // Pause apenas no desktop (lg+)
              if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                setIsPaused(true);
              }
            }}
            onMouseLeave={() => {
              // Resume apenas no desktop (lg+)
              if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                setIsPaused(false);
              }
            }}
          >
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 transition-opacity duration-500 animate-shimmer ${
              isPaused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}></div>
            
            {/* Scroll Container */}
            <div className="relative z-10 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Column 1 */}
                <div className="testimonials-column" style={{ animationDelay: '0s' }}>
                  <div 
                    className={`testimonials-scroll testimonials-scroll-mobile testimonials-scroll-col1 ${isPaused ? 'paused' : ''}`}
                    style={{
                      '--initial-offset': `-${initialPositions.col1}%`
                    } as React.CSSProperties}
                  >
                    {duplicatedTestimonials.map((testimonial, index) => (
                      <div
                        key={`col1-${index}`}
                        className="mb-2 sm:mb-3 lg:mb-6 bg-gray-900/50 border border-gray-700/30 rounded-xl p-2 sm:p-3 lg:p-3 cursor-pointer select-none"
                        style={{ transform: 'translateZ(0)' }}
                      >
                        <div className="relative w-full flex justify-center sm:justify-start md:justify-center">
                          {imageErrors[`col1-${index}`] ? (
                            <div className="w-full h-[375px] bg-gray-800/50 border border-gray-700/30 rounded-lg flex items-center justify-center">
                              <MessageSquare className="w-8 h-8 text-gray-600" />
                            </div>
                          ) : (
                            <img
                              src={testimonial}
                              alt={`Depoimento ${index + 1}`}
                              className="w-full h-auto rounded-lg object-contain max-w-[250px] sm:max-w-[350px] md:max-w-[400px] mx-auto sm:mx-0 select-none"
                              loading={index < 10 ? 'eager' : 'lazy'}
                              onError={() => handleImageError(`col2-${index}`, testimonial)}
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                              onDragStart={(e) => e.preventDefault()}
                              style={{ userSelect: 'none' }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 */}
                <div className="hidden md:block testimonials-column" style={{ animationDelay: '33s' }}>
                  <div 
                    className={`testimonials-scroll testimonials-scroll-col2 ${isPaused ? 'paused' : ''}`}
                    style={{
                      '--initial-offset': `-${initialPositions.col2}%`
                    } as React.CSSProperties}
                  >
                    {duplicatedTestimonials.map((testimonial, index) => (
                      <div
                        key={`col2-${index}`}
                        className="mb-2 sm:mb-3 lg:mb-6 bg-gray-900/50 border border-gray-700/30 rounded-xl p-2 sm:p-3 lg:p-3 cursor-pointer select-none"
                        style={{ transform: 'translateZ(0)' }}
                      >
                        <div className="relative w-full flex justify-center sm:justify-start md:justify-center">
                          {imageErrors[`col2-${index}`] ? (
                            <div className="w-full h-[375px] bg-gray-800/50 border border-gray-700/30 rounded-lg flex items-center justify-center">
                              <MessageSquare className="w-8 h-8 text-gray-600" />
                            </div>
                          ) : (
                            <img
                              src={testimonial}
                              alt={`Depoimento ${index + 1}`}
                              className="w-full h-auto rounded-lg object-contain max-w-[250px] sm:max-w-[350px] md:max-w-[400px] mx-auto sm:mx-0 select-none"
                              loading={index < 10 ? 'eager' : 'lazy'}
                              onError={() => handleImageError(`col2-${index}`, testimonial)}
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                              onDragStart={(e) => e.preventDefault()}
                              style={{ userSelect: 'none' }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3 - Only on desktop */}
                <div className="hidden lg:block testimonials-column" style={{ animationDelay: '67s' }}>
                  <div 
                    className={`testimonials-scroll testimonials-scroll-col3 ${isPaused ? 'paused' : ''}`}
                    style={{
                      '--initial-offset': `-${initialPositions.col3}%`
                    } as React.CSSProperties}
                  >
                    {duplicatedTestimonials.map((testimonial, index) => (
                      <div
                        key={`col3-${index}`}
                        className="mb-2 sm:mb-3 lg:mb-6 bg-gray-900/50 border border-gray-700/30 rounded-xl p-2 sm:p-3 lg:p-3 cursor-pointer select-none"
                        style={{ transform: 'translateZ(0)' }}
                      >
                        <div className="relative w-full flex justify-center sm:justify-start md:justify-center">
                          {imageErrors[`col3-${index}`] ? (
                            <div className="w-full h-[375px] bg-gray-800/50 border border-gray-700/30 rounded-lg flex items-center justify-center">
                              <MessageSquare className="w-8 h-8 text-gray-600" />
                            </div>
                          ) : (
                            <img
                              src={testimonial}
                              alt={`Depoimento ${index + 1}`}
                              className="w-full h-auto rounded-lg object-contain max-w-[250px] sm:max-w-[350px] md:max-w-[400px] mx-auto sm:mx-0 select-none"
                              loading={index < 10 ? 'eager' : 'lazy'}
                              onError={() => handleImageError(`col3-${index}`, testimonial)}
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                              onDragStart={(e) => e.preventDefault()}
                              style={{ userSelect: 'none' }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-column {
          height: 650px;
          overflow: hidden;
          position: relative;
          contain: layout style paint;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        .testimonials-scroll {
          display: flex;
          flex-direction: column;
          animation: scroll-up linear infinite;
          will-change: transform;
          animation-fill-mode: both;
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }

        /* Aplicar offset inicial apenas no desktop */
        @media (min-width: 1024px) {
          .testimonials-scroll-col1,
          .testimonials-scroll-col2,
          .testimonials-scroll-col3 {
            transform: translate3d(0, var(--initial-offset, 0%), 0);
            -webkit-transform: translate3d(0, var(--initial-offset, 0%), 0);
          }
        }

        .testimonials-scroll.paused {
          animation-play-state: paused !important;
        }

        /* Durações para desktop/tablet (aumentadas em 40%) */
        @media (min-width: 768px) {
          .testimonials-scroll-col1 {
            animation-duration: 140s;
          }
          .testimonials-scroll-col2 {
            animation-duration: 164s;
          }
          .testimonials-scroll-col3 {
            animation-duration: 186s;
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translate3d(0, var(--initial-offset, 0%), 0);
            -webkit-transform: translate3d(0, var(--initial-offset, 0%), 0);
          }
          100% {
            transform: translate3d(0, calc(var(--initial-offset, 0%) - 50%), 0);
            -webkit-transform: translate3d(0, calc(var(--initial-offset, 0%) - 50%), 0);
          }
        }

        @media (max-width: 1024px) {
          .testimonials-column {
            height: 600px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-column {
            height: 450px;
          }
          
          .testimonials-scroll-mobile {
            animation-duration: 168s !important;
          }
        }

        /* Otimização de imagens */
        .testimonials-scroll img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

