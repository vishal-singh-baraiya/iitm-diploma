import React from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';

const faqs = [
  {
    question: 'What are the eligibility criteria?',
    answer: 'Students who have completed Class XII or equivalent with Mathematics as a subject are eligible. A minimum of 60% marks in aggregate is required.'
  },
  {
    question: 'Is the degree recognized?',
    answer: 'Yes, this is a fully recognized degree from IIT Madras, approved by UGC and AICTE. It holds the same value as an on-campus degree.'
  },
  {
    question: 'How is the program delivered?',
    answer: 'The program is delivered through a blend of online lectures, live sessions, hands-on projects, and virtual labs. All content is accessible 24/7.'
  },
  {
    question: 'What are the career prospects?',
    answer: 'Graduates can pursue roles like Data Scientist, ML Engineer, Data Analyst, or continue with higher studies. We have placement partnerships with leading tech companies.'
  },
  {
    question: 'What is the fee structure?',
    answer: 'The program follows a pay-as-you-go model with per-semester fees. Scholarships and financial aid are available for eligible students.'
  }
];

export default function FAQ() {
  return (
    <div className="py-24 bg-[#1A1A1A]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Got Questions?"
          description="Find answers to common questions about our program"
        />
        <div className="mt-20 space-y-4">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              iconOpen={Minus}
              iconClosed={Plus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}