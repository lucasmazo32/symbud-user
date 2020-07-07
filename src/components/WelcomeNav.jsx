import React from 'react';
import { Button } from '@material-ui/core';
import '../assets/styles/WelcomeNav.scss';

export default function WelcomeNav() {
  return (
    <nav className="WelcomeNav">
      <h1>Symbud</h1>
      <Button color="default">SIGN IN</Button>
      <Button color="secondary">SIGN UP</Button>
    </nav>
  );
}
