import React from 'react';
import { GraduationCap, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">IITM BS Data Science</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#program" className="text-gray-700 hover:text-blue-600 transition">Program</a>
            <a href="#curriculum" className="text-gray-700 hover:text-blue-600 transition">Curriculum</a>
            <a href="#admission" className="text-gray-700 hover:text-blue-600 transition">Admission</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}