
import { ClipboardCheck, Users, GraduationCap, Trophy } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProcessStep from '../ui/ProcessStep';



const steps = [
  {
    icon: ClipboardCheck,
    title: 'Online Application',
    description: 'Complete the application form and submit required documents',
    color: '#FF4B4B'
  },
  {
    icon: Users,
    title: 'Entrance Test',
    description: 'Take our qualifier test to demonstrate your aptitude for the program',
    color: '#FF8F00'
  },
  {
    icon: GraduationCap,
    title: 'JEE Entry',
    description: 'If You Qualified for the JEE Advanced examination you can directly apply for the admission',
    color: '#FFD600'
  },
  {
    icon: Trophy,
    title: 'Admission',
    description: 'Receive your offer letter and begin your journey',
    color: '#2196F3'
  }
];

export default function AdmissionProcess() {
  return (
    <div className="py-10 bg-gradient-to-br from-[#181818] to-[#1A1A1A]" id="admission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Admission Process"
          subtitle="Your Journey Begins Here"
          description="Simple 4-step process to join India's premier online BS program"
        />
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} number={index + 1} />
            ))}
          </div>
          
        </div>
        
      </div>
    </div>
  );
}