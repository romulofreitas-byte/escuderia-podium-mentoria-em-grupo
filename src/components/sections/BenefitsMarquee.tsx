import React from 'react';
import { Phone, Users, Handshake, TrendingUp } from 'lucide-react';

export const BenefitsMarquee: React.FC = () => {
  const benefits = [
    { icon: Phone, text: 'Ligações estratégicas' },
    { icon: Users, text: 'Reuniões de alto nível' },
    { icon: Handshake, text: 'Negociação profissional' },
    { icon: TrendingUp, text: 'Mentalidade de empresário' },
  ];

  return (
    <div className="bg-yellow-400 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate for seamless loop */}
        {[...benefits, ...benefits, ...benefits].map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className="inline-flex items-center mx-8">
              <Icon className="w-5 h-5 text-gray-900 mr-3" />
              <span className="text-gray-900 font-semibold text-sm">
                {benefit.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

