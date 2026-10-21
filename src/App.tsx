import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SpeakingVideos from './components/SpeakingVideos';
import GitHubProjects from './components/GitHubProjects';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Monitor active sections on scroll using IntersectionObserver
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'services',
      'skills',
      'projects',
      'experience',
      'certifications',
      'speaking',
      'github',
      'testimonials',
      'contact'
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -35% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 85; // suited for floating pill navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      id="ukezi-portfolio-root"
      className="relative min-h-screen bg-[#FAF7F2] text-[#1E1026] antialiased overflow-x-hidden selection:bg-[#6A3279]/20 selection:text-[#6A3279]"
    >
      {/* Background grain noise effect overlay */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-50 mix-blend-overlay opacity-[0.03]" />

      {/* Luxury Floating Pill Navbar */}
      <Navbar activeSection={activeSection} onSectionChange={handleScrollToSection} />

      {/* Main Structural Layout Content */}
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. Hero Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* 2. About Me & Offerings Section */}
        <About onScrollToSection={handleScrollToSection} />

        {/* 3. Skills & Professional Expertise */}
        <Skills />

        {/* 4. Selected Projects & Case Studies */}
        <Projects />

        {/* 5. Work Experience, Education & Certifications */}
        <Experience />

        {/* 6. Facilitating & Speaking Videos */}
        <SpeakingVideos />

        {/* 7. GitHub Projects & Repository Links */}
        <GitHubProjects />

        {/* Social Proof: Client Testimonials */}
        <SuccessStories />

        {/* 8. Contact Section */}
        <Contact />
        
      </main>

      {/* Global Modular Footer */}
      <Footer />

    </div>
  );
}
