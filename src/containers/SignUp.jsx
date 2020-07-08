import React from 'react';
import Register from '../components/Register';
import WelcomeNav from '../components/WelcomeNav';
import '../assets/styles/SignUp.scss';

export default function SignUp() {
  return (
    <div className="SignUp">
      <WelcomeNav />
      <div className="register-container">
        <Register />
      </div>
    </div>
  );
}
