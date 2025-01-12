import React from 'react';
import { Building2, TrendingUp, Users, Briefcase } from 'lucide-react';
import Card from '../ui/Card';

const placementStats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Recruiting Companies',
    color: '#FF4B4B'
  },
  {
    icon: TrendingUp,
    value: '₹24.5L',
    label: 'Highest Package',
    color: '#FF8F00'
  },
  {
    icon: Users,
    value: '92%',
    label: 'Placement Rate',
    color: '#FFD600'
  },
  {
    icon: Briefcase,
    value: '₹8.5L',
    label: 'Average Package',
    color: '#2196F3'
  }
];

const topRecruiters = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
  },
  {
    name: 'Infosys',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg'
  },
  {
    name: 'DRDO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/DRDO_Seal.png'
  },
  {
    name: 'ISRO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg'
  },
  {
    name: 'Reserve Bank of India',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Seal_of_the_Reserve_Bank_of_India.svg/1024px-Seal_of_the_Reserve_Bank_of_India.svg.png'
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
  }
];

export default function Placements() {
  return (
    <div className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Placement Statistics</h2>
          <p className="mt-4 text-xl text-gray-300">Opening Doors to Exceptional Careers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 text-center">
                <Icon className="h-8 w-8 mx-auto" style={{ color: stat.color }} />
                <p className="mt-4 text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">Top Recruiters</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {topRecruiters.map((company, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
              >
                <img 
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-10 object-contain mb-2"
                />
                <span className="text-sm text-gray-300">{company.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}