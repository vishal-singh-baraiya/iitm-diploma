import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import DashboardButton from '../auth/DashboardButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#1A1A1A]/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="ml-2 text-xl font-bold text-white">IITM BS Data Science</span>
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#FF4B4B] transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-[#FF4B4B] transition">About</Link>
            <Link to="/curriculum" className="text-gray-300 hover:text-[#FF4B4B] transition">Academics</Link>
            <Link to="/admission" className="text-gray-300 hover:text-[#FF4B4B] transition">Admission</Link>
            <Link to="/placement" className="text-gray-300 hover:text-[#FF4B4B] transition">Placements</Link>
            <Link to="/partnerships" className="text-gray-300 hover:text-[#FF4B4B] transition">Partnerships</Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#FF4B4B] transition">Contact</Link>
            <DashboardButton />
          </div>
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-b border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/"
              className="block py-2 text-gray-300 hover:text-[#FF4B4B] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="block py-2 text-gray-300 hover:text-[#FF4B4B] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/curriculum"
              className="block py-2 text-gray-300 hover:text-[#FF4B4B] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              to="/admission"
              className="block py-2 text-gray-300 hover:text-[#FF4B4B] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Admission
            </Link>
            <Link
              to="/placement"
              className="block py-2 text-gray-300 hover:text-[#FF4B4B] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Placements
            </Link>
            <Link
              to="/partnerships"
              className="block py-2 text-gray-300 hover:text-[#FF4B4B] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Partnerships
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-300 hover:text-[#FF4B4B] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <DashboardButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}