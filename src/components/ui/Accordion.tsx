import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

type AccordionProps = {
  question: string;
  answer: string;
  iconOpen: LucideIcon;
  iconClosed: LucideIcon;
};

export default function Accordion({ question, answer, iconOpen: IconOpen, iconClosed: IconClosed }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? (
          <IconOpen className="h-5 w-5 text-[#FF4B4B]" />
        ) : (
          <IconClosed className="h-5 w-5 text-[#FF4B4B]" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white/5">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}