import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import LoginModal from './LoginModal';

export default function DashboardButton() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (studentId: string, password: string) => {
    // Here you would typically make an API call to verify credentials
    console.log('Login attempt:', { studentId, password });
    setIsLoginModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <>
      <Button 
        variant="primary"
        onClick={() => setIsLoginModalOpen(true)}
      >
        Dashboard
      </Button>
      
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}