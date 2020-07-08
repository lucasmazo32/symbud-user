/* eslint-disable max-len */
import React from 'react';
import { Button } from '@material-ui/core';
import { ReactComponent as Arrow } from '../assets/images/welcome/arrow.svg';
import WelcomeNav from '../components/WelcomeNav';
import WelcomeFooter from '../components/WelcomeFooter';
import '../assets/styles/Welcome.scss';

export default function Welcome() {
  return (
    <div className="Welcome">
      <WelcomeNav />
      <main>
        <section className="main-img">
          <div className="main-container">
            <h2 className="title">Let&#39;s grow together</h2>
            <h3 className="main-info">Find a buddy. Connect. Learn together.</h3>
            <div className="register-container">
              <Button>REGISTER</Button>
              <span>Discover the experience</span>
              <Arrow />
            </div>
          </div>
        </section>
        <section className="how-it-works container-xl">
          <h2>How it works</h2>
          <div className="how-container">
            <h3>
              Find a buddy
            </h3>
            <p>
              When you are doing an online curse, working out, or learning a new language is difficult to find motivation. Not everyone is self-motivated. The goal of Symbud is to connect people working in related topics so they can work, learn, and grow together.
            </p>
          </div>
          <div className="how-container">
            <h3>
              Start working
            </h3>
            <p>
              Create groups, posts, and a description to capture the attention of everybody. Connect with someone working on the same topics as you, and start working online. You can use other tools like video calls to make the most of the experience.
            </p>
          </div>
        </section>
        <section className="subjects container-xl">
          <h2>Fields</h2>
          <div className="subject-container s-language">
            <h3>Languages</h3>
          </div>
          <div className="subject-container s-education">
            <h3>Education</h3>
          </div>
          <div className="subject-container s-workout">
            <h3>Work Out</h3>
          </div>
        </section>
        <section className="waiting container-xl">
          <h2>What are you waiting for?</h2>
          <h3>Registering is completely free.</h3>
          <Button>Sign up now</Button>
        </section>
      </main>
      <WelcomeFooter />
    </div>
  );
}
