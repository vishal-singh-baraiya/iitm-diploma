

import Card from '../ui/Card';
import { Calendar, GraduationCap, Trophy, BookOpen } from 'lucide-react';

const eligibilityCriteria = [
  'The IIT Madras Degree Program in Data Science and Applications has four levels.',
  'To earn the BS Degree, a learner must successfully complete all four levels.',
  'The program offers flexibility to exit at any level.',
  'Based on courses completed and credits earned, learners can receive: Foundation Certificate, Diploma(s), BSc Degree and BS Degree.',
];

const entranceExamSyllabus = [
  {
    subject: 'Foundational Level',
    requirement: 'The learner should apply for and clear the Qualifier Process.',
    topics: [
      'Courses: 8',
      'Credits: 32',
      'Fees: ₹32,000',
      'Time: 1-3 years',

    ]
  },
  {
    subject: 'Diploma Level',
    requirement: 'The learner should have cleared all 8 Foundation Level courses.',
    topics: [
      'Courses: 12 and Project: 4',
      'Credits: 54',
      'Fees: ₹1,25,000',
      'Time: 1-3 years',
      
    ]
  },
  
  {
    subject: 'BSc Level',
    requirement: 'The learner should have cleared all Diploma Level Courses.',
    topics: [
      'Courses: -',
      'Credits: 28',
      'Fees: ₹64,000-70,000',
      'Time: 1-3 years',
      
    ]
  },
  {
    subject: 'BS Level',
    requirement: 'The learner should have completed the BSc Degree Level.',
    topics: [
      'Courses: -',
      'Credits: 28',
      'Fees: ₹94,000-1,24,000',
      'Time: 1-3 years',
      
    ]
  }
];

const scholarships = [
  {
    title: 'Fees',
    amount: 'Refer Fee Structure. ',
    criteria: 'Each term, pay only for courses you register for!'
  },
  {
    title: 'Online Courses & Assignments',
    amount: 'Course Duration & Structure',
    criteria: 'Duration of each course: 12 weeks - Each week comprising 2-3 hrs of videos, practice questions, text transcripts and online graded assignment(s).'
  },
  {
    title: 'Quizzes and Exams',
    amount: 'In-Person Invigilated Assessments',
    criteria: 'In-person invigilated quizzes and exams as per the grading pattern defined for each course.'
  }
];

const importantDates = [
  {
    event: 'Foundation Only (32 Credits)',
    date: '₹32,000'
  },
  {
    event: 'Foundation + One Diploma (59 Credits)',
    date: '₹94,500'
  },
  {
    event: 'Foundation + Two Diploma (86 Credits)',
    date: '₹1,57,000'
  },
  {
    event: 'BSc Degree (114 Credits)',
    date: '₹2,21,000'
  },
  {
    event: 'BS Degree (142 Credits)',
    date: '₹3,15,000'
  }
];


export default function AdmissionPage() {
  return (
    
    <div className="bg-[#1A1A1A] pt-20">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Eligibility Criteria */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-[#FF4B4B]" />
            <h2 className="text-2xl font-bold text-white">Overall Structure</h2>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entranceExamSyllabus.map((subject, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{subject.subject}</h3>
                <p className="text-red-500 mb-4">Requirement: <span className="text-gray-300 text-sm mb-4">{subject.requirement}</span></p>
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

        


        {/* Scholarships */}
        <section className="mt-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">{scholarship.title}</h3>
                <p className="text-[#FF4B4B] font-semibold mb-2">{scholarship.amount}</p>
                <p className="text-gray-300 text-sm">{scholarship.criteria}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Term Structure Section */}
<section className="mt-16">
  <div className="flex items-center gap-2 mb-6">
    <BookOpen className="h-6 w-6 text-[#2196F3]" />
    <h2 className="text-2xl font-bold text-white">Term Structure</h2>
  </div>
  <Card className="bg-white/5 backdrop-blur-lg border border-white/10 p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
        <div className="flex items-start text-gray-300 gap-4 mb-4">
          <span className="text-[#2196F3]">
            <i className="fa fa-check" />
          </span>
          <p>
            Every <b>year is divided into three terms</b> of four months each - 
            <i> January Term, May Term, and September Term.</i>
          </p>
        </div>
        <div className="flex items-start text-gray-300 gap-4">
          <span className="text-[#2196F3]">
            <i className="fa fa-check" />
          </span>
          <p>
            Each term of four months has 12 weeks of coursework (video lectures and assignments), 
            2 in-person invigilated quizzes, and End Term Exams. Depending on the course, assessments 
            may include programming exams, mini-projects, vivas, take-home assignments, etc.
          </p>
        </div>
      </div>

      {/* Image Content */}
      <div>
        <img
          src="struc.png"
          alt="Course Structure"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  </Card>
</section>

        {/* Important Dates */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-6 w-6 text-[#2196F3]" />
            <h2 className="text-2xl font-bold text-white">Fee Structure</h2>
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

        {/* Scholarship and Fee Support Section */}
<section className="mt-16">
  <div className="flex items-center gap-2 mb-6">
    <Trophy className="h-6 w-6 text-[#FF4B4B]" />
    <h2 className="text-2xl font-bold text-white">Scholarship and Fee Support</h2>
  </div>
  <Card className="bg-white/5 backdrop-blur-lg border border-white/10 overflow-x-auto">
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <table class="table-bordered table-responsive-sm text-nowrap custom-table" style="font-size: 0.9rem; border-collapse: collapse; width: 100%; color: #ddd;">
            <thead class="text-dark" style="background-color: #333; color: #fff; border: 1px solid #555;">
              <tr>
                <th rowspan="2" style="min-width: 10%; border: 1px solid #555;"></th>
                <th colspan="2" class="text-secondary font-italic p-1" style="min-width: 29%; border: 1px solid #555;">Family Income &gt; 5 LPA</th>
                <th colspan="2" class="text-secondary font-italic p-1" style="min-width: 29%; border: 1px solid #555;">Family Income &gt; 1 LPA and &lt;= 5 LPA</th>
                <th colspan="2" class="text-secondary font-italic p-1" style="min-width: 29%; border: 1px solid #555;">Family Income &lt;= 1 LPA</th>
              </tr>
              <tr>
                <th class="p-1 font-italic" style="min-width: 9%; border: 1px solid #555;">Fee Support<br> from IIT Madras</th>
                <th class="p-1 font-italic" style="border: 1px solid #555;">Docs Required</th>
                <th class="p-1 font-italic" style="min-width: 9%; border: 1px solid #555;">Fee Support<br> from IIT Madras</th>
                <th class="p-1 font-italic" style="border: 1px solid #555;">Docs Required</th>
                <th class="p-1 font-italic" style="min-width: 9%; border: 1px solid #555;">Fee Support<br> from IIT Madras</th>
                <th class="p-1 font-italic" style="border: 1px solid #555;">Docs Required</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border: 1px solid #555;">
                <td class="text-secondary px-2 font-italic" style="border: 1px solid #555;">General</td>
                <td style="border: 1px solid #555;">N/A</td>
                <td style="border: 1px solid #555;">NIL</td>
                <td style="border: 1px solid #555;">50%</td>
                <td style="border: 1px solid #555;">EWS + Family Income</td>
                <td style="border: 1px solid #555;">75%</td>
                <td style="border: 1px solid #555;">EWS + Family Income</td>
              </tr>
              <tr>
                <td class="text-secondary px-2 font-italic" style="border: 1px solid #555;">OBC</td>
                <td style="border: 1px solid #555;">N/A</td>
                <td style="border: 1px solid #555;">NIL</td>
                <td style="border: 1px solid #555;">50%</td>
                <td style="border: 1px solid #555;">OBC-NCL + Family Income</td>
                <td style="border: 1px solid #555;">75%</td>
                <td style="border: 1px solid #555;">OBC-NCL + Family Income</td>
              </tr>
              <tr>
                <td class="text-secondary px-2 font-italic" style="border: 1px solid #555;">SC / ST</td>
                <td style="border: 1px solid #555;">50%</td>
                <td style="border: 1px solid #555;">SC / ST</td>
                <td style="border: 1px solid #555;">50%</td>
                <td style="border: 1px solid #555;">SC / ST</td>
                <td style="border: 1px solid #555;">75%</td>
                <td style="border: 1px solid #555;">SC / ST + Family Income</td>
              </tr>
              <tr>
                <td class="text-secondary px-2 font-italic" style="border: 1px solid #555;">PwD</td>
                <td style="border: 1px solid #555;">50%</td>
                <td style="border: 1px solid #555;">PwD</td>
                <td style="border: 1px solid #555;">50%</td>
                <td style="border: 1px solid #555;">PwD</td>
                <td style="border: 1px solid #555;">75%</td>
                <td style="border: 1px solid #555;">PwD + EWS / OBC-NCL + Family Income</td>
              </tr>
              <tr>
                <td class="text-secondary px-2 font-italic" style="border: 1px solid #555;">SC / ST + PwD</td>
                <td style="border: 1px solid #555;">75%</td>
                <td style="border: 1px solid #555;">SC / ST + PwD</td>
                <td style="border: 1px solid #555;">75%</td>
                <td style="border: 1px solid #555;">SC / ST + PwD</td>
                <td style="border: 1px solid #555;">75%</td>
                <td style="border: 1px solid #555;">SC / ST + PwD</td>
              </tr>
            </tbody>
          </table>
        `,
      }}
    />
  </Card>
</section>

      </div>
    </div>
  );
}