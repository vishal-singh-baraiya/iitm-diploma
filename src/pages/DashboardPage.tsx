import React from 'react';
import { Navigate } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { BookOpen, Calendar, Clock, FileText } from 'lucide-react';

// This would typically come from your auth system
const isAuthenticated = true;

export default function DashboardPage() {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-[#1A1A1A] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle
          title="Student Dashboard"
          subtitle="Welcome Back"
          description="Access your courses, assignments, and academic information"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <BookOpen className="h-6 w-6 text-[#FF4B4B]" />
            <h3 className="mt-4 text-lg font-semibold text-white">Current Courses</h3>
            <p className="text-2xl font-bold text-[#FF4B4B] mt-2">4</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <FileText className="h-6 w-6 text-[#FF8F00]" />
            <h3 className="mt-4 text-lg font-semibold text-white">Assignments</h3>
            <p className="text-2xl font-bold text-[#FF8F00] mt-2">3 Due</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <Clock className="h-6 w-6 text-[#FFD600]" />
            <h3 className="mt-4 text-lg font-semibold text-white">Study Hours</h3>
            <p className="text-2xl font-bold text-[#FFD600] mt-2">24h</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <Calendar className="h-6 w-6 text-[#2196F3]" />
            <h3 className="mt-4 text-lg font-semibold text-white">Next Exam</h3>
            <p className="text-2xl font-bold text-[#2196F3] mt-2">Mar 15</p>
          </Card>
        </div>
      </div>
    </div>
  );
}