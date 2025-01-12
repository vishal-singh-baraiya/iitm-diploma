import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

type ProcessStepProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  number: number;
};

export default function ProcessStep({ icon: Icon, title, description, color, number }: ProcessStepProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border border-white/10 relative">
      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#FF4B4B] flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <Icon className="h-8 w-8" style={{ color }} />
      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-300">
        {description}
      </p>
    </Card>
  );
}