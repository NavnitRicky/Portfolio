import React from 'react';
import styles from './Hero.module.css';
// If your image is in src/assets, use the import below:
import profileImg from './assets/navnit.jpg';
// If your image is in public/, use the path below:
// const profileImg = '/navnit-profile.jpg';
import { User, Briefcase, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => (
  <section id="home" className={styles.hero}>
    <div className={styles['hero-content']}>
      <div className={styles['hero-avatar'] + ' animate-float'}>
        <img src={profileImg} alt="Navnit Kumar" />
      </div>
      <h1 className={styles['hero-title'] + ' animate-fade-in-up'}>
        Navnit Kumar
      </h1>
      <p className={styles['hero-subtitle'] + ' animate-fade-in-up stagger-1'}>
        Full Stack Developer & UI/UX Designer
      </p>
      <p className={styles['hero-description'] + ' animate-fade-in-up stagger-2'}>
        Passionate about creating exceptional digital experiences through innovative design 
        and cutting-edge technology. I transform ideas into beautiful, functional solutions 
        that make a real impact.
      </p>
      <div className={styles['hero-actions'] + ' animate-fade-in-up stagger-3'}>
        <button 
          className="btn btn-primary hover-lift"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Briefcase size={20} />
          View My Work
        </button>
        <a href="/Navnit_Kumar_Resume.pdf" className="btn btn-secondary hover-lift" download>
          <Download size={20} />
          Download Resume
        </a>
      </div>
      <div className={styles['hero-social'] + ' animate-fade-in-up stagger-4'}>
        <a href="https://github.com/dashboard" className="btn-icon hover-lift" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/navnit-kumar-2b3564284/" className="btn-icon hover-lift" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="navnitricky23@gmail.com" className="btn-icon hover-lift" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero; 