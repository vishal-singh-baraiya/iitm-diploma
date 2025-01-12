import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}