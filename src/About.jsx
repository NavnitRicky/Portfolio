import React, { useState } from 'react';
import { Code } from 'lucide-react';
import './style/About.css';
import navnit from './assets/navnit.jpg';
import topper from './assets/academictopper.jpg';
import project from './assets/project.jpg';


const aboutImages = [
  navnit,
  topper,
  project,
  // Add
];

const About = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4xl)', alignItems: 'center' }}>
          <div className="scroll-reveal-left">
            <h3 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-xl)' }}>
              Hello! I'm Navnit Kumar
            </h3>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              I'm a passionate Full Stack Developer with over 1 years of experience creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and love turning complex problems into simple, beautiful designs.
            </p>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              My journey in tech started with a curiosity about how things work, and it has 
              evolved into a career dedicated to crafting exceptional user experiences. I believe 
              in the power of clean code, thoughtful design, and continuous learning.
            </p>
            <p style={{ marginBottom: 'var(--space-2xl)' }}>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, mentoring aspiring developers, or sharing knowledge through 
              blogs and workshops.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
          <div className="scroll-reveal-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {/* Main image box */}
              <div
                style={{
                  width: '400px',
                  height: '400px',
                  background: 'var(--gradient-primary)',
                  borderRadius: 'var(--radius-2xl)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="hover-glow"
              >
                <img
                  src={aboutImages[selectedIdx]}
                  alt={`About ${selectedIdx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-xl)',
                  }}
                />
                {/* Optionally overlay the code icon */}
                {/* <div style={{
                  position: 'absolute',
                  inset: '20px',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Code size={120} style={{ color: 'var(--primary-600)' }} />
                </div> */}
              </div>
              {/* Thumbnails on the right */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginLeft: '1.5rem' }}>
                {aboutImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`About thumb ${idx + 1}`}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: 'cover',
                      borderRadius: 12,
                      border: idx === selectedIdx ? '2px solid #2563eb' : '2px solid transparent',
                      cursor: 'pointer',
                      boxShadow: idx === selectedIdx ? '0 2px 8px #2563eb33' : 'none',
                      transition: 'border 0.2s, box-shadow 0.2s'
                    }}
                    onClick={() => setSelectedIdx(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 