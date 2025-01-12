import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  description: string;
};

const titleVariants = {
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

export default function SectionTitle({ title, subtitle, description }: SectionTitleProps) {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={titleVariants}
      className="text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>
      <p className="mt-2 text-xl sm:text-2xl font-semibold text-[#4bffcf]">
        {subtitle}
      </p>
      <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}