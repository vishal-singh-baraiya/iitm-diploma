
import { BookOpen, Clock, Trophy, Users } from 'lucide-react';
import Card from '../ui/Card';

const stats = [
  {
    icon: Clock,
    value: '1-2 Years',
    label: 'Duration',
    color: '#FF4B4B'
  },
  {
    icon: BookOpen,
    value: '15+ Courses',
    label: 'Total Courses',
    color: '#FF8F00'
  },
  {
    icon: Trophy,
    value: '4+ Projects',
    label: 'Projects',
    color: '#FFD600'
  },
  {
    icon: Users,
    value: 'Live Sessions',
    label: 'and Recorded Lectures',
    color: '#2196F3'
  }
];

export default function ProgramStats() {
  return (
    <div className="mt-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          
          <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 text-center">
            <Icon className="h-8 w-8 mx-auto" style={{ color: stat.color }} />
            <p className="mt-4 text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-gray-300">{stat.label}</p>
          </Card>
         
        );
      })}
    </div>
  );
}