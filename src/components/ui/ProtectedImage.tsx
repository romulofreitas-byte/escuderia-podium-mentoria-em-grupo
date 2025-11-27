'use client';

import React, { useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';

interface ProtectedImageProps extends Omit<ImageProps, 'onContextMenu' | 'onDragStart' | 'onSelectStart' | 'onCopy' | 'alt'> {
  className?: string;
  alt: string;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({ 
  className = '', 
  alt,
  fill,
  onError,
  ...props 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // CSS-based protection (mais performático)
    container.style.userSelect = 'none';
    container.style.webkitUserSelect = 'none';
    (container.style as any).webkitUserDrag = 'none';

    // Apenas listeners essenciais (reduzido para performance)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    container.addEventListener('contextmenu', handleContextMenu, { passive: false });
    container.addEventListener('dragstart', handleDragStart, { passive: false });

    return () => {
      container.removeEventListener('contextmenu', handleContextMenu);
      container.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const imageStyle: React.CSSProperties & { WebkitUserDrag?: string; userDrag?: string; WebkitTouchCallout?: string } = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitUserDrag: 'none',
    userDrag: 'none',
    pointerEvents: 'none',
    WebkitTouchCallout: 'none',
  };

  if (fill) {
    return (
      <div 
        ref={containerRef}
        className="relative w-full h-full select-none protected-image"
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <Image
          {...props}
          alt={alt}
          fill={fill}
          className={className}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onError={onError}
          style={imageStyle}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative select-none protected-image ${className}`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <Image
        {...props}
        alt={alt}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onError={onError}
        style={imageStyle}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
