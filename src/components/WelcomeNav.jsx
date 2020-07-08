import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../assets/styles/WelcomeNav.scss';

export default function WelcomeNav() {
  return (
    <nav className="WelcomeNav">
      <Link to="/welcome"><h1>Symbud</h1></Link>
      <Button color="default">SIGN IN</Button>
      <Button color="secondary">SIGN UP</Button>
    </nav>
  );
}
