import React from 'react';
import Terms from './Terms';
import Privacy from './Privacy';
import '../assets/styles/WelcomeFooter.scss';

export default function WelcomeFooter() {
  return (
    <footer className="WelcomeFooter">
      <section className="legal">
        <h3>Legal</h3>
        <Terms />
        <Privacy />
      </section>
    </footer>
  );
}
