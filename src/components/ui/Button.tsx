import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-[#FF4B4B] text-white hover:bg-[#FF3131] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#FF8F00] text-white hover:bg-[#F57C00] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#FF4B4B] text-[#FF4B4B] hover:bg-[#FF4B4B] hover:text-white'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}