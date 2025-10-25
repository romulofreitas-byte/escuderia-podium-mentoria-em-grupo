import React from 'react';
import Image from 'next/image';

export const LogoSeparator: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-8 bg-gray-900">
      <div className="container-custom">
        <div className="flex justify-center items-center">
          <div className="w-32 h-32 relative">
            <Image 
              src="/logos/logo-metodo.png"
              alt="Método Pódium"
              width={128}
              height={128}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
