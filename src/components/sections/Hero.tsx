import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, GraduationCap, Trophy, Users} from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  // Image URLs array
  const studentImages = [
    'https://media.licdn.com/dms/image/v2/D5622AQH7c2PNWSjplA/feedshare-shrink_1280/feedshare-shrink_1280/0/1733466759300?e=1738195200&v=beta&t=8QupcJyo68Uimzs8nOWLGNEx6uRJ7qLac9-3ntHGWfQ',
    'https://media.licdn.com/dms/image/v2/D5622AQGYgUUR-u74bg/feedshare-shrink_1280/B56ZQBsrOYHQAo-/0/1735195279011?e=1738195200&v=beta&t=yaoxQQ3GYXNp8SEe152XWvaex2NG48GCHE9-5IZHmTg',
    'https://media.licdn.com/dms/image/v2/D5622AQGuwTx1t5_8yA/feedshare-shrink_1280/B56ZPepUiuG8Ak-/0/1734607196386?e=1738195200&v=beta&t=Vta5lRITWb-mbgpddHJGyTGVb4T00fMk-Cl232u0L7c',
    'https://media.licdn.com/dms/image/v2/D5622AQHwg0D0ML68WQ/feedshare-shrink_800/B56ZP3CoxxGQAg-/0/1735016734783?e=1738195200&v=beta&t=xTHh96fq7HwS85f4qZhyYI8gYjiIvApRmCKudZvHjy4',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % studentImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [studentImages.length]);

  return (
    <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] sm:pt-3 pt-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              BS in <span className="text-[#FF4B4B]">Data Science</span> and Applications
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300"
            >
              Join India's most innovative Non-Campus BS Degree and shape the future with data
            </motion.p>

            {/* Image section for mobile */}
            <motion.div variants={itemVariants} className="mt-8 lg:hidden">
              <img
                src={studentImages[currentImageIndex]}
                alt="Students collaborating"
                className="rounded-2xl shadow-2xl border-4 border-white/10 w-full"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative mt-4"
              >
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-white/20"
                          src={`https://i.pravatar.cc/150?img=${i}`}
                          alt={`Student ${i}`}
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-white">Join 15,000+ students</p>
                      <p className="text-sm text-gray-300">From 10+ countries</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" className="flex items-center justify-center">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/curriculum">
                <Button variant="outline" className="w-full">
                  Explore Curriculum
                </Button>
              </Link>
            </motion.div>
            {/* Stats cards */}
            <motion.div
              variants={containerVariants}
              className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2"
            >
              {[
                { icon: Trophy, value: 'Awarded', label: 'by QS', color: '#FFD600' },
                { icon: Award, value: '1st', label: 'NIRF Rank', color: '#9ACD32' },
                { icon: GraduationCap, value: '15,000+', label: 'Students', color: '#00BCD4' },
                { icon: Users, value: '3000+', label: 'Working', color: '#FF8F00' },
                
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="text-center bg-white/10 backdrop-blur-lg border border-white/20">
                      <Icon className="h-8 w-8 mx-auto" style={{ color: stat.color }} />
                      <p className="mt-2 sm:text-1xl text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-gray-300">{stat.label}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="relative hidden lg:block">
            <img
              src={studentImages[currentImageIndex]}
              alt="Students collaborating"
              className="rounded-2xl shadow-2xl border-4 border-white/10"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white/20"
                        src={`https://i.pravatar.cc/150?img=${i}`}
                        alt={`Student ${i}`}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-white">Join 15,000+ students</p>
                    <p className="text-sm text-gray-300">From 10+ countries</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

