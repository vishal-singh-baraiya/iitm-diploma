import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Data Scientist at Google',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'The program\'s practical approach helped me transition from a non-tech background to a successful data science career.',
    company: 'google.com'
  },
  {
    name: 'Rahul Verma',
    role: 'ML Engineer at Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    quote: 'IIT Madras\' curriculum is cutting-edge and perfectly aligned with industry requirements.',
    company: 'microsoft.com'
  },
  {
    name: 'Sarah Chen',
    role: 'Data Analyst at Amazon',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'The flexibility of online learning combined with IIT\'s excellence made this program perfect for me.',
    company: 'amazon.com'
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-[#1A1A1A]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Student Success Stories"
          subtitle="From Learning to Leading"
          description="Hear from our alumni who are making waves in the tech industry"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}