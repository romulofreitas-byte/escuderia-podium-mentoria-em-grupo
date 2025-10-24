'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  disabled = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary';
      case 'ghost':
        return 'btn-ghost';
      default:
        return 'btn-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-12 py-5 text-lg';
      case 'xl':
        return 'px-16 py-6 text-xl';
      default:
        return 'px-8 py-4';
    }
  };

  const buttonClasses = `${getVariantClasses()} ${getSizeClasses()} ${className}`;

  const buttonProps = {
    whileHover: disabled ? {} : { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    whileTap: disabled ? {} : { 
      scale: 0.95,
      transition: { duration: 0.1 }
    },
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        {...buttonProps}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      {...buttonProps}
      className={buttonClasses}
    >
      {children}
    </motion.button>
  );
};
