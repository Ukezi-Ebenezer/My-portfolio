import { useState, useEffect } from 'react';
import { portfolioOwner } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Offerings' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience & Edu' },
    { id: 'speaking', label: 'Facilitating & Speaking' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    onSectionChange(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
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
    <>
      <header
        id="luxury-floating-navbar"
        className="fixed top-5 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 transition-all duration-300 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#FAF7F2]/90 border border-[#1E1026]/12 shadow-[0_10px_35px_-10px_rgba(30,16,38,0.08)] backdrop-blur-xl'
              : 'bg-[#FAF7F2]/60 border border-[#1E1026]/08 backdrop-blur-md'
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleClick('hero')}
            className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <span className="font-drama text-2xl font-bold tracking-tight text-[#1E1026] group-hover:text-[#6A3279] transition-colors">
              Ukezi Ebenezer<span className="text-[#C9A84C]">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`font-sans text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#6A3279] font-semibold'
                      : 'text-[#1E1026]/75 hover:text-[#1E1026]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6A3279] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound / Audio State Pill (as in reference video) */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full border border-[#1E1026]/15 hover:border-[#1E1026]/30 bg-[#FAF7F2] text-[#1E1026] flex items-center justify-center transition-all cursor-pointer text-xs font-mono"
              title={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
              aria-label="Toggle ambient audio"
            >
              {isPlaying ? 'II' : '▷'}
            </button>

            {/* Work with me CTA button */}
            <button
              onClick={() => handleClick('contact')}
              className="px-5 py-2 bg-[#1E1026] hover:bg-[#2F1B3C] text-[#FAF7F2] rounded-full font-sans text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
            >
              Work with me
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1E1026] rounded-full hover:bg-black/5 cursor-pointer focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1E1026]/40 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-[280px] h-full bg-[#FAF7F2] border-l border-[#1E1026]/10 p-6 flex flex-col justify-between pt-24 shadow-2xl">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6A3279] mb-2">
                // Navigation
              </span>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`text-left font-drama text-xl font-medium tracking-wide py-1.5 transition-colors ${
                    activeSection === item.id ? 'text-[#6A3279] font-bold italic' : 'text-[#1E1026]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#1E1026]/10 flex flex-col gap-3">
              <a
                href={portfolioOwner.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#1E1026] text-[#FAF7F2] rounded-full text-center font-sans text-xs font-semibold"
              >
                Book Appointment
              </a>
              <span className="font-mono text-[10px] text-center text-[#1E1026]/60">
                Ukezi Ebenezer • GMT +1
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
