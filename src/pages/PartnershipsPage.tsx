import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Building2, Heart, Users, BookOpen, BriefcaseIcon, Award, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const partnershipTypes = [
  {
    icon: Building2,
    title: 'Knowledge Partners',
    description: 'Top leaders and researchers from companies like Google, Flipkart, PayPal, and Gramener contribute content to our courses.',
    benefits: ['Industry expertise integration', 'Real-world case studies', 'Cutting-edge content'],
    color: '#FF4B4B'
  },
  {
    icon: Heart,
    title: 'CSR Partners',
    description: 'Support merit-cum-means scholarships for deserving students, making IIT Madras more accessible for everyone.',
    benefits: ['Tax benefits', 'Social impact', 'Brand visibility'],
    color: '#FF8F00'
  },
  {
    icon: Users,
    title: 'Professional Speakers',
    description: 'Industry experts share insights on current trends and technologies through our "Professionals Speak" series.',
    benefits: ['Knowledge sharing', 'Network building', 'Industry connection'],
    color: '#FFD600'
  },
  {
    icon: BookOpen,
    title: 'Mentorship',
    description: 'Provide mentoring and technical assessment of students in their areas of study and projects.',
    benefits: ['Talent pipeline', 'Skill development', 'Early access to talent'],
    color: '#2196F3'
  },
  {
    icon: BriefcaseIcon,
    title: 'Internships & Recruitment',
    description: 'Offer internship and job opportunities to our qualified students and graduates.',
    benefits: ['Qualified candidates', 'Reduced hiring costs', 'Direct access to talent'],
    color: '#00BCD4'
  }
];

const csrPartners = [
  { name: 'Verizon India', logo: 'verizon.svg' },
  { name: 'L&T Technology Services', logo: 'lt.svg' },
  { name: 'Walmart', logo: 'walmart.svg' },
  { name: 'Renault-Nissan', logo: 'renault.svg' },
  { name: 'Tiger Analytics', logo: 'tiger.svg' },
  { name: 'Cargill Business Services', logo: 'cargill.svg' },
  { name: 'Cochin Shipyard', logo: 'cochin.svg' },
  { name: 'RR Donnelley', logo: 'rr.svg' },
  { name: 'Tata AIA', logo: 'tata.svg' },
  { name: 'Dun & Bradstreet', logo: 'dun.svg' }
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

export default function PartnershipsPage() {
  return (
    <div className="bg-[#1A1A1A] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle
          title="Industry Partnerships"
          subtitle="Connect & Collaborate"
          description="Join India's premier online education initiative and shape the future of technology education"
        />

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 inline-block">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-[#FF4B4B]" />
              <div className="text-left">
                <p className="text-white font-semibold">Get in touch</p>
                <a
                  href="mailto:iic@study.iitm.ac.in"
                  className="text-[#FF4B4B] hover:underline flex items-center gap-1"
                >
                  iic@study.iitm.ac.in
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {partnershipTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 h-full hover:bg-white/10 transition-colors">
                  <Icon className="h-8 w-8" style={{ color: type.color }} />
                  <h3 className="mt-4 text-xl font-semibold text-white">{type.title}</h3>
                  <p className="mt-2 text-gray-300">{type.description}</p>
                  <div className="mt-4 space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: type.color }} />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CSR Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">CSR Impact</h2>
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FF4B4B]">1700+</p>
                  <p className="text-gray-300">Students Supported</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FF8F00]">₹5L</p>
                  <p className="text-gray-300">Income Threshold</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FFD600]">10+</p>
                  <p className="text-gray-300">Partner Companies</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Our CSR Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {csrPartners.map((partner, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
                    >
                      <p className="text-gray-300 text-sm">{partner.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'ASSOCHAM CSR and Sustainability Award',
                subtitle: 'Excellence in Supporting Education and Skill for 2022',
                icon: Award,
                color: '#FF4B4B'
              },
              {
                title: 'CSRUniverse Social Impact Awards 2023',
                subtitle: 'Education Category Winner',
                icon: Award,
                color: '#FF8F00'
              }
            ].map((award, index) => {
              const Icon = award.icon;
              return (
                <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8" style={{ color: award.color }} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{award.title}</h3>
                      <p className="text-gray-300 mt-2">{award.subtitle}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 inline-block">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
            <p className="text-gray-300 mb-6">Join us in shaping the future of technology education in India</p>
            <Button variant="primary" className="inline-flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}