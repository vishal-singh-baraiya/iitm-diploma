import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-[#4bffcf] text-white-500 hover:bg-[#4bffcf] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#4bffcf] text-white hover:bg-[#4bffcf] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#4bffcf] text-[#4bffcf] hover:bg-[#4bffcf] hover:text-white'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}