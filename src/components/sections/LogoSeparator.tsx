import React from 'react';
import Image from 'next/image';

export const LogoSeparator: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-gray-900">
      <div className="container-custom">
        <div className="flex justify-center items-center">
          <div className="w-24 h-24 relative">
            <Image 
              src="/logos/logo-metodo.png"
              alt="Método Pódium"
              width={96}
              height={96}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
