'use client';

import React, { useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface ProtectedImageProps extends Omit<ImageProps, 'onContextMenu' | 'onDragStart' | 'onSelectStart'> {
  className?: string;
  overlay?: boolean;
  alt?: string; // Make alt optional with default
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({ 
  className = '', 
  overlay = true,
  ...props 
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const element = imageRef.current;
    if (element) {
      element.addEventListener('contextmenu', handleContextMenu);
      element.addEventListener('dragstart', handleDragStart);
      element.addEventListener('selectstart', handleSelectStart);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        element.removeEventListener('contextmenu', handleContextMenu);
        element.removeEventListener('dragstart', handleDragStart);
        element.removeEventListener('selectstart', handleSelectStart);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  return (
    <div 
      ref={imageRef}
      className={`relative select-none ${className}`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserDrag: 'none',
        KhtmlUserSelect: 'none',
      }}
    >
      <Image
        {...props}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onSelectStart={(e) => e.preventDefault()}
        style={{
          ...props.style,
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          WebkitTouchCallout: 'none',
          WebkitUserDrag: 'none',
          KhtmlUserSelect: 'none',
          pointerEvents: 'none',
        }}
      />
      
      {/* Transparent overlay to prevent direct image access */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-transparent"
          style={{
            pointerEvents: 'auto',
            zIndex: 1,
          }}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onSelectStart={(e) => e.preventDefault()}
        />
      )}
    </div>
  );
};
