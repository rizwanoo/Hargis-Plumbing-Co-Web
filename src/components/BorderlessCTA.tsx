import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface BorderlessCTAProps {
  label: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  arrowType?: 'right' | 'upRight';
  variant?: 'light' | 'royal' | 'aqua' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const BorderlessCTA: React.FC<BorderlessCTAProps> = ({
  label,
  onClick,
  href,
  external = false,
  arrowType = 'right',
  variant = 'royal',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  // Color mappings
  const variantStyles = {
    light: 'text-white hover:text-[#F3C75B]',
    royal: 'text-[#2457F5] hover:text-[#17B9B0]',
    aqua: 'text-[#17B9B0] hover:text-[#2457F5]',
    dark: 'text-[#27343D] hover:text-[#2457F5]',
    gold: 'text-[#F3C75B] hover:text-white',
  };

  const sizeStyles = {
    sm: 'text-xs tracking-wider font-bold py-1',
    md: 'text-sm tracking-widest font-bold py-1.5',
    lg: 'text-base tracking-widest font-bold py-2',
  };

  const baseClasses = `
    inline-flex items-center gap-2.5 font-sans uppercase bg-transparent border-0 outline-none
    cursor-pointer transition-colors duration-300 relative group select-none
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  const ArrowIcon = arrowType === 'upRight' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span className="relative">
        {label}
        {/* Animated underline */}
        <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
      </span>
      <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 shrink-0" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
