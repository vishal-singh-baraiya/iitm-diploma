import React from 'react';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Future with Data Science
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Join India's premier online BSc program in Data Science and Applications from IIT Madras
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                Download Brochure
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto" />
                <p className="mt-2 text-2xl font-bold">4.8/5</p>
                <p className="text-gray-600">Program Rating</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto" />
                <p className="mt-2 text-2xl font-bold">15,000+</p>
                <p className="text-gray-600">Students</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto" />
                <p className="mt-2 text-2xl font-bold">100+</p>
                <p className="text-gray-600">Courses</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Students collaborating"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt={`Student ${i}`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">Join 15,000+ students</p>
                  <p className="text-sm text-gray-500">From 100+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}