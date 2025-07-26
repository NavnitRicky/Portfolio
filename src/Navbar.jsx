import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import './style/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Portfolio</div>
        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="navbar-nav-mobile">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 