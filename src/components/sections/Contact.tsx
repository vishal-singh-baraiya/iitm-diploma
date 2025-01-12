import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <div className="py-12 sm:py-24 bg-gradient-to-t from-[#1A1A1A] to-[#2D2D2D]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get in Touch"
          subtitle="Contact Us"
          description="Have questions? We're here to help you start your journey"
        />
        <div className="mt-12 sm:mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#FF4B4B]" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-300">admissions@iitm.ac.in</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#FF8F00]" />
              <div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="text-gray-300">+91 (044) 2257 8000</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#FFD600]" />
              <div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="text-gray-300">IIT Madras, Chennai - 600036</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}