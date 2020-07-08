import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../assets/styles/WelcomeNav.scss';

export default function WelcomeNav() {
  const history = useHistory();

  const handleSignIn = () => {
    history.push('/login');
  };

  const handleSignUp = () => {
    history.push('/signup');
  };

  return (
    <nav className="WelcomeNav">
      <Link to="/welcome"><h1>Symbud</h1></Link>
      <Button onClick={handleSignIn} color="default">SIGN IN</Button>
      <Button onClick={handleSignUp} color="secondary">SIGN UP</Button>
    </nav>
  );
}
