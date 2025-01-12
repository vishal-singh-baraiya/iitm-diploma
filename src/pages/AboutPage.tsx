import React from 'react';
import { History, Award, Globe, BookOpen, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const stats = [
  { label: 'Years of Excellence', value: '60+', icon: History, color: '#FF4B4B' },
  { label: 'Academic Departments', value: '18', icon: Building2, color: '#FF8F00' },
  { label: 'Research Centers', value: '40+', icon: BookOpen, color: '#FFD600' },
  { label: 'Students Studying', value: '25,000+', icon: Users, color: '#2196F3' },
];

const facultyCoordinators = [
  {
    name: 'Dr. Andrew Thangaraj',
    title: 'Professor, Department of Electrical Engineering',
    image: 'Andrew.jpg',
    description: `Andrew Thangaraj has been with IIT Madras since June 2004. He received his bachelors from IIT Madras and PhD from Georgia Institute of Technology. He has served on editorial boards of IEEE Transactions and is currently a coordinator for the BS program and Principal Investigator for SWAYAM.`,
    achievements: ['PhD from Georgia Tech', 'IEEE Transactions Editor', 'SWAYAM PI']
  },
  {
    name: 'Dr. Vignesh Muthuvijayan',
    title: 'Professor, Department of Biotechnology',
    image: 'Vignesh.jpg',
    description: `Professor in the Department of Biotechnology, Bhupat and Jyoti Mehta School of Biosciences. He received his BTech from Anna University and PhD from Oklahoma State University. He serves as a Coordinator for both the BS program and NPTEL.`,
    achievements: ['PhD from Oklahoma State', 'BS Program Coordinator', 'NPTEL Coordinator']
  }
];

const onlineInitiativePoints = [
  {
    title: 'Scale',
    points: [
      'Accommodates 50,000 to 100,000 learners per batch',
      'Open to working professionals and learners of any age'
    ]
  },
  {
    title: 'Flexibility',
    points: [
      'Students can pursue two degrees simultaneously',
      'Courses offered 3 times a year',
      'Multiple exit options with certificates/diplomas'
    ]
  },
  {
    title: 'Accessibility',
    points: [
      'Open to all streams (commerce/arts/law/science)',
      'Accessible from anywhere with basic tech requirements',
      'Active discussion forums and academic support'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function AboutPage() {
  return (
    <div className="bg-[#1A1A1A] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle
          title="About IIT Madras"
          subtitle="Excellence in Education"
          description="One of the foremost institutes of national importance for higher technical education and research"
        />

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-3"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <Icon className="h-8 w-8 mx-auto" style={{ color: stat.color }} />
                  <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-gray-300">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* History Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <History className="h-8 w-8 text-[#FF4B4B] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Legacy</h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    Founded in 1959 through an Indo-German collaboration, IIT Madras has grown into one of India's premier institutions. The Institute was formally inaugurated by Prof. Humayun Kabir, Union Minister for Scientific Research and Cultural Affairs.
                  </p>
                  <p className="leading-relaxed">
                    Today, with sixteen academic departments and numerous advanced research centers, IIT Madras stands at the forefront of engineering and pure sciences education in India.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Online Initiative */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Why Choose Our Online Degree?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onlineInitiativePoints.map((category, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-gray-300">
                      <div className="h-2 w-2 rounded-full bg-[#FF4B4B] mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Faculty Coordinators */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Meet Our Faculty Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyCoordinators.map((faculty, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-32 h-32 object-cover rounded-lg border-2 border-[#FF4B4B]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/4 to-transparent rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{faculty.name}</h3>
                    <p className="text-[#FF4B4B] mt-1">{faculty.title}</p>
                    <p className="text-gray-300 mt-4 text-sm leading-relaxed">{faculty.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {faculty.achievements.map((achievement, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Connect Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors">
            <h2 className="text-xl font-bold text-white mb-6">Connect with IITM</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { url: 'https://www.iitm.ac.in', label: 'Official Website' },
                { url: 'https://twitter.com/ReachIITM', label: 'Twitter' },
                { url: 'https://www.linkedin.com/school/iitmadras/', label: 'LinkedIn' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        </motion.section> */}
      </div>
    </div>
  );
}