'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface ProtectedImageProps extends Omit<ImageProps, 'onContextMenu' | 'onDragStart' | 'onSelectStart' | 'alt'> {
  className?: string;
  alt: string;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({ 
  className = '', 
  alt,
  fill,
  ...props 
}) => {

  return (
    <div className={`relative select-none ${className}`}>
      <Image
        {...props}
        alt={alt}
        fill={fill}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{
          userSelect: 'none',
          ...(fill ? {} : { pointerEvents: 'none' }),
        } as React.CSSProperties}
      />
    </div>
  );
};
