import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Lightbulb, Award } from 'lucide-react';
import Card from '../ui/Card';

const researchAreas = [
  {
    icon: Microscope,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge research in deep learning, computer vision, and natural language processing.',
    color: '#FF4B4B'
  },
  {
    icon: Lightbulb,
    title: 'Data Analytics',
    description: 'Advanced techniques in big data analytics and predictive modeling.',
    color: '#FF8F00'
  },
  {
    icon: Award,
    title: 'Industry Projects',
    description: 'Collaborative research projects with leading tech companies.',
    color: '#FFD600'
  }
];

export default function ResearchHighlights() {
  return (
    <div className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Research Highlights</h2>
          <p className="mt-4 text-xl text-gray-300">Pushing the Boundaries of Innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 h-full">
                  <Icon className="h-8 w-8" style={{ color: area.color }} />
                  <h3 className="mt-4 text-xl font-semibold text-white">{area.title}</h3>
                  <p className="mt-2 text-gray-300">{area.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}