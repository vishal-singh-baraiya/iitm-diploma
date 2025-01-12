import { Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';



const pathSteps = [
  
  {
    title: 'Diploma in Programming',
    duration: '',
    description:
      'Master Web Development, DBMS, data structures & algorithms, and programming languages: Python and Java',
    pointers: [
      'Computational Thinking',
      'Intro to Python',
      'Database and Management System',
      'Python DSA',
      'Modern App Dev 1',
      'Modern App Dev 1 Project',
      'Modern App Dev 2',
      'Modern App Dev 2 Project',
      'Java',
      'System Cammands'
    ],
  },
  {
    title: 'Diploma in Data Science',
    duration: '',
    description: 'Learn Data Analysis, Data Visualization, Machine Learning, and Big Data',
    pointers: [
      'Mathsmatics 2',
      'Statistics 2',
      'Machine Learning Foundations',
      'Business Data Managemnet',
      'BDM Project',
      'Machine Learning Techniques',
      'Machine Learning Practices',
      'MLP Project',
      'Business Analytics',
      'Tools in Data Science'
    ],
  },
  
];

export default function LearningPath() {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (index : any) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-8">Learning Path</h3>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#FF4B4B]/20" />
        <div className="space-y-8">
          {pathSteps.map((step, index) => (
            <div key={index} className="relative pl-12">
              <Circle
                className="absolute left-2 -translate-x-1/2 w-5 h-5 text-[#4bffcc]"
                fill="#1A1A1A"
              />
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                  <span className="text-sm text-[#4bffcc] bg-[#FF4B4B]/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-300">{step.description}</p>
                <button
                  onClick={() => toggleStep(index)}
                  className="flex items-center text-sm text-[#4bffcc] mt-4"
                >
                  {expandedStep === index ? (
                    <>
                      Hide Courses <ChevronUp className="ml-1 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show Courses <ChevronDown className="ml-1 w-4 h-4" />
                    </>
                  )}
                </button>
                {expandedStep === index && (
                  <ul className="mt-4 pl-6 list-disc text-gray-300">
                    {step.pointers.map((pointer, i) => (
                      <li key={i}>{pointer}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
