import React from 'react';
import Card from './Card';

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  quote: string;
  company: string;
};

export default function TestimonialCard({ name, role, image, quote, company }: TestimonialCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-[#FF4B4B]"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-[#FF4B4B]">{role}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-gray-300">
        "{quote}"
      </blockquote>
      <div className="mt-4 text-sm text-gray-400">
        @ {company}
      </div>
    </Card>
  );
}