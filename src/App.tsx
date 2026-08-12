import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Global page-load animation
  useEffect(() => {
    gsap.fromTo('#ukezi-portfolio-root',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  // Monitor active sections on scroll using IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'projects', 'certifications', 'success-stories', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // focused viewport zone trigger
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
      const offset = 90; // offset suited for the floating pill-shape navbar
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
    <div id="ukezi-portfolio-root" className="relative min-h-screen bg-[#0D0D12] text-[#FAF8F5] antialiased overflow-hidden selection:bg-[#C9A84C]/20 selection:text-[#C9A84C]">
      
      {/* Background grain noise effect overlay applied via design style system */}
      <div className="absolute inset-0 pointer-events-none noise-overlay z-50 mix-blend-overlay opacity-[0.04]" />

      {/* Horizontally centered pill shape layout z-index 50 Navbar */}
      <Navbar activeSection={activeSection} onSectionChange={handleScrollToSection} />

      {/* Main Structural Layout Content */}
      <main className="relative z-10 w-full flex flex-col">
        
        {/* Unit 1: Introduction Centered Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Unit 2: Narrative Identity Section (About, Why Work with me, Tools) */}
        <About />

        {/* Unit 3: My Offerings Services */}
        <Services />

        {/* Unit 4: Creative Projects Showcase Catalog */}
        <Projects />

        {/* Unit 5: Verified Credentials Certifications */}
        <Certifications />

        {/* Unit 6: Success Stories */}
        <SuccessStories />

        {/* Unit 7: Client Inquiries Sync Get-In-Touch Section */}
        <Contact />
        
      </main>

      {/* Modular Unified Footer */}
      <Footer />

    </div>
  );
}
