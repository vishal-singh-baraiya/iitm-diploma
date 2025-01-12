import AdmissionProcess from '../components/sections/AdmissionProcess';
import Card from '../components/ui/Card';
import { Calendar, GraduationCap, BookOpen } from 'lucide-react';

const eligibilityCriteria = [
  'Completed Class XII or equivalent with Mathematics as a subject',
  'Minimum 60% aggregate marks in Class XII',
  'Mathematics and English as compulsory subjects in Class X',
  'No age limit for admission'
];

const entranceExamSyllabus = [
  {
    subject: 'BS in Data Science & Applications',
    topics: [
      'Mathematics 1',
      'Statistics 1',
      'English 1',
      'Computational Thinking'
    ]
  },
  {
    subject: 'BS in Electronics System',
    topics: [
      'Maths 1 for ES',
      'English 1',
      'Electronic Systems Thinking and Circuits',
      'Introduction to C Programming'
    ]
  },
  {
    subject: 'Diploma',
    topics: [
      'English     (Both Diploma)',
      'Aptitude    (Diploma in Programming)',
      'Mathematics (Both Diploma)',
      'Statistics  (Diploma in Data Science)',
      'Python      (Diploma in Data Science)'
    ]
  }
];

// const scholarships = [
//   {
//     title: 'Merit Scholarship',
//     amount: 'Up to 100% tuition fee waiver',
//     criteria: 'CGPA > 8.0'
//   },
//   {
//     title: 'Need-based Financial Aid',
//     amount: 'Up to 50% tuition fee waiver',
//     criteria: 'Based on family income and academic performance'
//   },
//   {
//     title: 'Women in Tech Scholarship',
//     amount: '₹50,000 per semester',
//     criteria: 'Female candidates with exceptional academic records'
//   }
// ];

const importantDates = [
  
  {
    event: 'Application Start Date',
    date: 'October 4, 2024'
  },
  {
    event: 'Application Deadline',
    date: 'January 2, 2025'
  },
  {
    event: 'Week 1 Starts',
    date: 'January 10, 2025'
  },
  {
    event: 'Qualifier Exam',
    date: 'February 23, 2025'
  },
  {
    event: 'Qualifier Results',
    date: 'February 27, 2025'
  }
];

const applicationProcess = [
  {
    category: 'General Category / OBC Applicant',
    fee: '₹3000'
  },
  {
    category: 'SC / ST Category / PwD (>= 40% disability)',
    fee: '₹1500'
  },
  {
    category: 'SC / ST Category Applicant who is ALSO PwD (>= 40% disability)',
    fee: '₹750'
  }
];

const reAttemptFee = [
  {
    category: 'General Category / OBC Applicant',
    fee: '₹1500'
  },
  {
    category: 'SC / ST Category / PwD (>= 40% disability)',
    fee: '₹750'
  },
  {
    category: 'SC / ST Category Applicant who is ALSO PwD (>= 40% disability)',
    fee: '₹375'
  }
];

export default function AdmissionPage() {
  return (
    <div className="bg-[#1A1A1A] pt-20">
      <AdmissionProcess />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Eligibility Criteria */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-[#FF4B4B]" />
            <h2 className="text-2xl font-bold text-white">Eligibility Criteria</h2>
          </div>
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <ul className="space-y-3">
              {eligibilityCriteria.map((criteria, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF4B4B]" />
                  {criteria}
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Entrance Exam Syllabus */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-[#FF8F00]" />
            <h2 className="text-2xl font-bold text-white">Qualifier Exam Syllabus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entranceExamSyllabus.map((subject, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{subject.subject}</h3>
                <ul className="space-y-2">
                  {subject.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-300 text-sm">
                      • {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Scholarships
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="h-6 w-6 text-[#FFD600]" />
            <h2 className="text-2xl font-bold text-white">Scholarships</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">{scholarship.title}</h3>
                <p className="text-[#FF4B4B] font-semibold mb-2">{scholarship.amount}</p>
                <p className="text-gray-300 text-sm">{scholarship.criteria}</p>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Important Dates */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-6 w-6 text-[#2196F3]" />
            <h2 className="text-2xl font-bold text-white">Important Dates</h2>
          </div>
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                  <span className="text-gray-300">{item.event}</span>
                  <span className="text-[#FF4B4B] font-semibold">{item.date}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Application Process */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-white">Application Fee</h2>
          </div>
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="space-y-4">
              {applicationProcess.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-[#FF4B4B] font-semibold">{item.fee}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Re-Attempt Fees */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-white">Re-Attempt Fee</h2>
          </div>
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="space-y-4">
              {reAttemptFee.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-[#FF4B4B] font-semibold">{item.fee}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
}
