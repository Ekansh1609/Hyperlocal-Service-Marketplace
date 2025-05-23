// src/components/GoogleAuthButton.jsx
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const GoogleAuthButton = ({ type = 'login' }) => {
  const navigate = useNavigate();

  const handleGoogleClick = () => {
    // This is just a frontend placeholder - no actual auth implemented
    console.log('Google authentication clicked');
    alert('Google authentication would be implemented here');
    
    // In a real implementation, you would:
    // 1. Authenticate with Google
    // 2. Get user data
    // 3. Redirect after successful auth
    // navigate('/');
  };

  return (
    <button 
      onClick={handleGoogleClick}
      className="google-auth-btn"
    >
      <FcGoogle className="google-icon" />
      {type === 'login' ? 'Continue with Google' : 'Sign up with Google'}
    </button>
  );
};

export default GoogleAuthButton;