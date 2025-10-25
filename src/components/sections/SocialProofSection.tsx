import React from 'react';
import Image from 'next/image';
import { Play, Users, Award, MessageCircle } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const videos = [
    {
      id: 'marina',
      title: 'Depoimento Marina Marchiolli',
      description: 'Como fechei meu primeiro contrato de R$ 4.500 em apenas 3 semanas',
      thumbnail: '/logos/icon-escuderia.png',
      url: 'https://youtu.be/0YivtKp9Sw4',
      icon: Users,
      type: 'Depoimento'
    },
    {
      id: 'vinicius',
      title: 'Depoimento Vinicius Nascimento',
      description: 'Transformação completa: de freelancer para empresário',
      thumbnail: '/logos/icon-escuderia.png',
      url: 'https://youtu.be/0YivtKp9Sw4',
      icon: Award,
      type: 'Depoimento'
    },
    {
      id: 'thiago',
      title: 'Mentoria ao Vivo - Thiago Rosa',
      description: 'Revisão real de processo comercial com sugestões práticas',
      thumbnail: '/logos/icon-escuderia.png',
      url: 'https://youtube.com/live/RNsPan7I3F0?feature=share',
      icon: MessageCircle,
      type: 'Mentoria'
    },
    {
      id: 'dores',
      title: 'Dores do Piloto',
      description: 'Os erros que todo freelancer comete e como evitá-los',
      thumbnail: '/logos/icon-escuderia.png',
      url: 'https://youtu.be/nCakQ1HvhnI',
      icon: Play,
      type: 'Educativo'
    }
  ];

  return (
    <section id="provas-sociais" className="relative overflow-hidden py-32 bg-gray-900">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
      </div>

      {/* Floating Logo */}
      <div className="absolute top-8 right-8 z-10 hidden lg:block">
        <div className="w-16 h-16 relative">
          <Image 
            src="/logos/logo-metodo.png"
            alt="Método Pódium"
            width={64}
            height={64}
            className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-yellow-400 font-semibold text-xs tracking-wide drop-shadow-sm">Provas Reais</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Resultados{' '}
            <span className="text-yellow-400 drop-shadow-md animate-pulse">reais</span>
            {' '}de pilotos que aplicaram o método
          </h2>

          {/* Subheadline */}
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Veja depoimentos, mentoria ao vivo e cases reais de transformação comercial
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => {
            const IconComponent = video.icon;
            return (
              <div 
                key={video.id}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm animate-fade-in-up group"
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Video Thumbnail */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-full lg:w-48 h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <Image 
                        src={video.thumbnail}
                        alt={video.title}
                        width={192}
                        height={128}
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-gray-900 ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                      {video.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">{video.type}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {video.description}
                    </p>

                    <a 
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                    >
                      <Play className="w-4 h-4" />
                      Assistir Agora
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border border-yellow-400/30 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">
              Pronto para ser o próximo case de sucesso?
            </h3>
            <p className="text-gray-300 mb-6">
              Junte-se aos pilotos que já transformaram seu processo comercial
            </p>
            <a 
              href="https://pay.hotmart.com/V102584138H?off=mkmcjs52&checkoutMode=10"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-105"
            >
              Entrar na Escuderia Pódium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
