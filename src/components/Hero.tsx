import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger fade-up sequence
      gsap.from(
        [
          '.hero-badge',
          '.hero-line1',
          '.hero-line2',
          '.hero-buttons',
          '.hero-scroll'
        ],
        {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out'
        }
      );

      // Slow infinite bounce animation for the scroll indicator chevron
      gsap.to('.hero-scroll-icon', {
        y: 8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[100dvh] w-full flex flex-col justify-end pb-20 pl-20 max-sm:p-8 max-sm:pb-28 overflow-hidden bg-[#0D0D12]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800&q=90")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Heavy gradient overlay on top of background image */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[rgba(13,13,18,0.15)] to-[rgba(13,13,18,0.95)] pointer-events-none z-0" 
        id="hero-gradient-overlay"
      />

      {/* Content layout relative z-10 left-aligned, bottom-left */}
      <div className="relative z-10 flex flex-col items-start text-left max-w-4xl select-text">
        {/* Unit 1: Badge */}
        <div
          id="hero-status-pill"
          className="hero-badge mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-[#0D0D12] border border-[#C9A84C] text-[#C9A84C] font-mono text-[12px] uppercase tracking-wide shadow-[0_0_15px_rgba(201,168,76,0.15)]"
        >
          <span className="relative flex h-1.5 w-1.5 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C9A84C]"></span>
          </span>
          Available
        </div>

        {/* Unit 2: Headings */}
        <h1 className="flex flex-col gap-1 tracking-tight leading-none">
          <span
            className="hero-line1 font-sans font-bold text-[#FAF8F5] leading-none"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}
          >
            I Design & Automate
          </span>
          <span
            className="hero-line2 font-drama italic text-[#C9A84C] leading-none mt-1"
            style={{ fontSize: 'clamp(46px, 8vw, 90px)' }}
          >
            Products that Work.
          </span>
        </h1>

        {/* Unit 4: Interactive CTA Button Group */}
        <div className="hero-buttons flex items-center gap-4 mt-10">
          <button
            id="hero-action-projects"
            onClick={() => onScrollToSection('projects')}
            className="px-7 py-3.5 border border-[#FAF8F5] hover:border-[#C9A84C] text-[#FAF8F5] hover:text-[#C9A84C] rounded-full font-sans text-sm font-semibold tracking-wide hover:bg-white/[0.03] transition-all duration-300 cursor-pointer"
          >
            View My Work
          </button>
          
          <button
            id="hero-action-contact"
            onClick={() => onScrollToSection('contact')}
            className="px-7 py-3.5 bg-[#C9A84C] border border-[#C9A84C] text-[#0D0D12] rounded-full font-sans text-sm font-semibold tracking-wide hover:bg-[#b0903c] hover:border-[#b0903c] transition-all duration-300 cursor-pointer shadow-[0_10px_20px_-10px_rgba(201,168,76,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(201,168,76,0.45)]"
          >
            Book a Call
          </button>
        </div>
      </div>

      {/* Unit 5: Animated Downward Scroll Indicator (Chevron) */}
      <button
        id="hero-scroll-to-about"
        onClick={() => onScrollToSection('about')}
        className="hero-scroll absolute bottom-6 max-sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-[#C9A84C] z-10 group"
        aria-label="Scroll to description"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#888794]/60 group-hover:text-[#C9A84C] transition-colors">
          Scroll Down
        </span>
        <div className="hero-scroll-icon">
          <svg
            className="w-5 h-5 text-[#C9A84C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
    </section>
  );
}
