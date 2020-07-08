import React from 'react';
import SignIn from '../components/SignIn';
import WelcomeNav from '../components/WelcomeNav';
import '../assets/styles/Login.scss';

export default function Login() {
  return (
    <div className="Login">
      <WelcomeNav />
      <div className="login-container">
        <div className="image" />
        <SignIn />
      </div>
    </div>
  );
}
