import React from 'react';
import { motion } from 'framer-motion';

const companyLogos = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
  },
];

export default function CompanyLogos() {
  return (
    <div className="py-16 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center mb-12">
          Our Students Work At
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companyLogos.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain w-full h-full filter brightness-0 invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}