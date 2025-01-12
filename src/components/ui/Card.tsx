import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

const cardVariants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`
        bg-white rounded-xl p-6 
        ${hover ? 'hover:shadow-2xl transition-all duration-300' : ''}
        ${className}
      `}
      variants={cardVariants}
      whileHover={hover ? 'hover' : undefined}
    >
      {children}
    </motion.div>
  );
}