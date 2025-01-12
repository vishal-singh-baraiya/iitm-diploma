import React from 'react';
import { Code, Database, BarChart, Network, Brain, Lock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import CourseCard from '../ui/CourseCard';

const courses = [
  {
    icon: Code,
    title: 'Programming Fundamentals',
    description: 'Python, R, and SQL for data analysis',
    duration: '12 weeks',
    level: 'Beginner',
    color: '#FF4B4B'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Database design and big data processing',
    duration: '10 weeks',
    level: 'Intermediate',
    color: '#FF8F00'
  },
  {
    icon: BarChart,
    title: 'Statistical Analysis',
    description: 'Probability, inference, and modeling',
    duration: '14 weeks',
    level: 'Advanced',
    color: '#FFD600'
  },
  {
    icon: Network,
    title: 'Machine Learning',
    description: 'Algorithms, deep learning, and AI',
    duration: '16 weeks',
    level: 'Advanced',
    color: '#2196F3'
  },
  {
    icon: Brain,
    title: 'AI Applications',
    description: 'Real-world AI implementation',
    duration: '12 weeks',
    level: 'Advanced',
    color: '#00BCD4'
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Privacy and security in data science',
    duration: '8 weeks',
    level: 'Intermediate',
    color: '#FF4B4B'
  }
];

export default function Curriculum() {
  return (
    <div className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Comprehensive Curriculum"
          subtitle="From Fundamentals to Advanced Applications"
          description="Master the complete data science stack with our industry-aligned curriculum"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}