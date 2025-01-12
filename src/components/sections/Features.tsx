import React from 'react';
import { Laptop, Brain, Trophy, Clock, Globe, Shield } from 'lucide-react';
import Card from '../ui/Card';

const features = [
  {
    icon: Laptop,
    title: 'Online Learning',
    description: 'Flexible online classes with interactive learning modules',
    color: '#FF4B4B'
  },
  {
    icon: Brain,
    title: 'Industry-Relevant',
    description: 'Curriculum designed with input from leading tech companies',
    color: '#FF8F00'
  },
  {
    icon: Trophy,
    title: 'IIT Brand',
    description: 'Prestigious degree from IIT Madras',
    color: '#FFD600'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with recorded lectures',
    color: '#2196F3'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Connect with students worldwide',
    color: '#00BCD4'
  },
  {
    icon: Shield,
    title: 'Recognized Degree',
    description: 'UGC-approved degree program',
    color: '#FF4B4B'
  }
];

export default function Features() {
  return (
    <div className="py-5 sm:py-24 bg-[#1A1A1A]" id="program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why Choose <span className="text-[#4bffcf]">IITM Diploma</span> in Data Science and Programming?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Experience world-class education with cutting-edge curriculum
          </p>
        </div>
        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
                <Icon className="h-8 w-8" style={{ color: feature.color }} />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-300">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}