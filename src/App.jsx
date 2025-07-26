import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Code,
  Palette,
  Database,
  Globe,
  User,
  Briefcase
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    // Set theme attribute on document
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

  const handleProjectPreview = (url) => {
    setPreviewUrl(url);
    setShowPreview(true);
  };
  const handleClosePreview = () => {
    setShowPreview(false);
    setPreviewUrl(null);
  };

  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code },
    { name: 'UI/UX Design', level: 88, icon: Palette },
    { name: 'Backend Development', level: 85, icon: Database },
    { name: 'Web Technologies', level: 92, icon: Globe }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with modern design, secure payments, and real-time inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: 'https://padhaixpress.in',
      githubUrl: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Creative Portfolio',
      description: 'A stunning portfolio website showcasing creative work with smooth animations and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, progress tracking, and interactive learning modules.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Express.js', 'MySQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'OpenWeather API', 'Redux', 'Maps'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      {showPreview && previewUrl && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          background: 'rgba(0,0,0,0.15)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '2rem 0',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '1.25rem',
            boxShadow: '0 8px 32px rgba(37,99,235,0.13)',
            width: '95vw',
            maxWidth: 1200,
            height: 800,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <button onClick={handleClosePreview} style={{
              position: 'absolute',
              top: 12,
              right: 18,
              zIndex: 10,
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }} aria-label="Close project preview">×</button>
            <iframe
              src={previewUrl}
              title="Project Preview"
              style={{ flex: 1, width: '100%', border: 'none', borderRadius: '1.25rem' }}
              allowFullScreen
            />
          </div>
        </div>
      )}
      <Navbar />
      <Hero />
      <About />
      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-xl)' }}>
            {skills.map((skill, index) => (
              <div key={index} className={`skill-item scroll-reveal stagger-${index + 1}`}>
                <div className="skill-icon">
                  <skill.icon size={24} />
                </div>
                <div className="skill-content">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-progress">
                    <div className="skill-bar">
                      <div 
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <Projects projects={projects} onPreview={handleProjectPreview} />
      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Ready to start your next project?</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-4xl)', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="scroll-reveal-left">
              <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-xl)' }}>
                Get in touch
              </h3>
              <p style={{ marginBottom: 'var(--space-2xl)' }}>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer who wants 
                to collaborate, I'd love to hear from you.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>navnitricky23@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+91-7667761697</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Github size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>GitHub</h4>
                    <p>github.com/Navnitkumar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form scroll-reveal-right">
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="btn btn-primary hover-lift"
                  style={{ width: '100%' }}
                >
                  <Mail size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;