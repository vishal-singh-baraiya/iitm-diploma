import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from '../ui/Button';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (studentId: string, password: string) => void;
};

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(studentId, password);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
      style={{ height: '100dvh' }} // Dynamic viewport height for better mobile support
      onClick={onClose}
    >
      <div
        className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 w-full max-w-md relative m-6"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop clicks from closing
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-6">Student Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="studentId"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent"
              required
            />
          </div>

          <Button variant="primary" className="w-full" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
