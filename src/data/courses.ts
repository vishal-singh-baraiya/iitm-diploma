import { Code, Database, BarChart, Network, Brain, Lock } from 'lucide-react';

export const courses = [
  {
    icon: Code,
    title: 'Programming and Web Dev',
    description: 'Python, C, Java Script, Java, R, and SQL',
    duration: '',
    level: '',
    color: '#FF4B4B'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Database design and big data processing',
    duration: '',
    level: '',
    color: '#FF8F00'
  },
  {
    icon: BarChart,
    title: 'Statistical Analysis',
    description: 'Probability, inference, and modeling',
    duration: '',
    level: '',
    color: '#FFD600'
  },
  {
    icon: Network,
    title: 'Machine Learning',
    description: 'Algorithms, deep learning, and AI',
    duration: '',
    level: '',
    color: '#2196F3'
  },
  {
    icon: Brain,
    title: 'AI Applications',
    description: 'Real-world AI implementation',
    duration: '',
    level: '',
    color: '#00BCD4'
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Privacy and security in data science',
    duration: '',
    level: '',
    color: '#FF4B4B'
  }
] as const;