import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    onSectionChange(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // offset for the floating pill-navbar
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
    <div id="floating-navbar-wrapper" className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav
        id="pill-navigation-bar"
        className={`w-full max-w-5xl flex items-center justify-between px-6 h-16 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D0D12]/75 border border-[#C9A84C] backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Left Side: Logo / Name */}
        <button
          id="brand-name-logo"
          onClick={() => handleClick('hero')}
          className="font-sans text-[15px] font-bold text-[#FAF8F5] tracking-wide select-none cursor-pointer"
        >
          Ukezi Ebenezer
        </button>

        {/* Right Side: Nav Links (Hidden on mobile <768px, i.e., "md:flex") */}
        <div id="navbar-links" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`font-sans text-[14px] transition-all duration-200 hover:-translate-y-[1px] cursor-pointer ${
                  active ? 'text-[#C9A84C]' : 'text-[#FAF8F5]/80 hover:text-[#FAF8F5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Far Right: CTA Button */}
        <button
          id="nav-cta-book-call"
          onClick={() => handleClick('contact')}
          className="px-5 py-2.5 bg-[#C9A84C] text-[#0D0D12] text-[14px] font-semibold rounded-full select-none cursor-pointer hover:scale-[1.03] active:scale-[0.98] duration-300 transition-all ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_0_15px_rgba(201,168,76,0.1)] hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
        >
          Book a Call
        </button>
      </nav>
    </div>
  );
}
