import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

type CourseCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  level: string;
  color: string;
};

export default function CourseCard({ icon: Icon, title, description, duration, level, color }: CourseCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border border-white/10 group">
      <Icon className="h-8 w-8" style={{ color }} />
      <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-[#FF4B4B] transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-gray-300">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-[#FF4B4B]">{duration}</span>
        <span className="px-3 py-1 rounded-full bg-white/10 text-white">
          {level}
        </span>
      </div>
    </Card>
  );
}