import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up sequence for Contact Section
      gsap.from(
        [
          '.contact-eyebrow',
          '.contact-headline',
          '.contact-subtext',
          '.contact-button',
          '.contact-trust-row'
        ],
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-28 px-16 max-md:py-20 max-md:px-8 border-t border-white/10"
      style={{
        background: 'linear-gradient(180deg, #0D0D12 0%, #111118 100%)'
      }}
    >
      {/* Background soft lighting highlights */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-[#C9A84C]/5 blur-[120px] rounded-t-full pointer-events-none z-0" />

      <div className="max-w-[700px] mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Section Eyebrow Label */}
        <span
          className="contact-eyebrow font-mono text-[13px] text-[#C9A84C] tracking-[0.1em] uppercase block"
        >
          // Let's Work Together
        </span>

        {/* Section Main Headline */}
        <h2
          className="contact-headline font-drama italic text-[#FAF8F5] leading-[1.1] mt-4 mb-6 max-w-[660px]"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          Got a process that's wasting your team's time?
        </h2>

        {/* Subtext Paragraph */}
        <p className="contact-subtext font-sans text-[17px] text-[#888794] leading-relaxed max-w-[520px] mt-2 mb-10">
          I typically respond within 12 hours. First call is free — no pitch, just 20 minutes to understand what you actually need and whether I can help.
        </p>

        {/* Action Button Channels */}
        <div className="contact-button flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          {/* Champagne CTA Primary call */}
          <a
            id="contact-cta-book-appointment"
            href="https://wa.link/ytm4z6"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto h-[54px] px-9 inline-flex items-center justify-center bg-[#C9A84C] text-[#0D0D12] text-base font-semibold rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_10px_20px_-10px_rgba(201,168,76,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(201,168,76,0.45)] cursor-pointer"
          >
            Book an Appointment
          </a>

          {/* Outline Secondary Link */}
          <a
            id="contact-cta-connect-linkedin"
            href="https://www.linkedin.com/in/ebenezer-ukezi-542475217/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto h-[54px] px-9 inline-flex items-center justify-center border border-[#C9A84C] text-[#C9A84C] hover:text-[#FAF8F5] text-base font-semibold rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-[#C9A84C]/5 cursor-pointer"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Centered Trust Signal Elements Row */}
        <div
          className="contact-trust-row flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-12 pt-4 border-t border-white/5 w-full max-w-lg"
          id="contact-trust-factors"
        >
          <span className="font-mono text-[13px] text-[#888794] flex items-center gap-1.5 whitespace-nowrap">
            <span>⚡</span> Usually replies in &lt; 12hrs
          </span>
          <span className="font-mono text-[13px] text-[#888794] flex items-center gap-1.5 whitespace-nowrap">
            <span>🌍</span> Works with clients globally
          </span>
          <span className="font-mono text-[13px] text-[#888794] flex items-center gap-1.5 whitespace-nowrap">
            <span>✅</span> 2+ years experience
          </span>
        </div>

      </div>
    </section>
  );
}
