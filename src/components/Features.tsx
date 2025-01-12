import React from 'react';
import { Laptop, Brain, Trophy, Clock, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: Laptop,
    title: 'Online Learning',
    description: 'Flexible online classes with interactive learning modules'
  },
  {
    icon: Brain,
    title: 'Industry-Relevant',
    description: 'Curriculum designed with input from leading tech companies'
  },
  {
    icon: Trophy,
    title: 'IIT Brand',
    description: 'Prestigious degree from IIT Madras'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with recorded lectures'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Connect with students worldwide'
  },
  {
    icon: Shield,
    title: 'Recognized Degree',
    description: 'UGC-approved degree program'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white" id="program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose IITM BS in Data Science?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience world-class education with cutting-edge curriculum
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-300" />
                <Icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}