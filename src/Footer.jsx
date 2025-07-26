import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-social">
        <a href="https://linkedin.com/in/navnit-kumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
        <a href="https://github.com/learnwithpriyanka" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
        <a href="mailto:navnitricky23@gmail.com" aria-label="Email"><Mail size={20} /></a>
      </div>
      <p className="footer-text">© 2025 Navnit kumar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer; 