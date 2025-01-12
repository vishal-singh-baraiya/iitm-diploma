import React from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-[#FF4B4B]" />
              <span className="ml-2 text-xl font-bold text-white">IITM BS Data Science</span>
            </div>
            <p className="mt-4 text-gray-300">
              Transform your future with India's first online BS degree in Data Science and Applications.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-[#FF4B4B]">Program</a></li>
              <li><a href="/curriculum" className="text-gray-300 hover:text-[#FF4B4B]">Curriculum</a></li>
              <li><a href="/admission" className="text-gray-300 hover:text-[#FF4B4B]">Admission</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#FF4B4B]">Contact</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-[#FF4B4B]">About</a></li>
              <li><a href="/partnerships" className="text-gray-300 hover:text-[#FF4B4B]">Partnerships</a></li>
              <li><a href="/placement" className="text-gray-300 hover:text-[#FF4B4B]">Placements</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#FF4B4B]">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF4B4B]">Academic Calendar</a></li>
              <li><a href="/#FAQ" className="text-gray-300 hover:text-[#FF4B4B]">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF4B4B]">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF4B4B]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF4B4B]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF4B4B]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF4B4B]">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} IIT Madras. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}