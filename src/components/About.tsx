import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create fade-up and stagger scroll animation
      gsap.from(
        [
          '.about-eyebrow',
          '.about-statement-p1',
          '.about-statement-p2',
          '.about-card'
        ],
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // start when top of container hits 80% of viewport
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "2+", label: "Years in AI automation & UI/UX" },
    { number: "10+", label: "Automation workflows shipped" },
    { number: "3", label: "Certifications from Anthropic & Google" }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#0D0D12] py-24 px-16 max-md:py-16 max-md:px-8 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
        
        {/* Eyebrow Label */}
        <span
          className="about-eyebrow font-mono text-[13px] text-[#C9A84C] tracking-[0.1em] mb-4 block"
        >
          // About
        </span>

        {/* Highlighted core contrast statement */}
        <div className="flex flex-col gap-4">
          <p
            className="about-statement-p1 font-sans text-[#888794] leading-relaxed max-w-[600px]"
            style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}
          >
            Most designers hand you a Figma file and disappear.
          </p>
          <h2
            className="about-statement-p2 font-drama italic text-[#FAF8F5] leading-tight max-w-[750px] mt-4"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            I stay until it's <span className="text-[#C9A84C]">live</span>, working, and making you money.
          </h2>
        </div>

        {/* 3 Stat Cards Row */}
        <div
          id="about-stats-container"
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {stats.map((stat, idx) => (
            <div
              id={`about-stat-card-${idx}`}
              key={idx}
              className="about-card p-6 sm:p-8 rounded-[2rem] border border-[#C9A84C]/25 bg-white/[0.03] flex flex-col items-start transition-all duration-300 hover:border-[#C9A84C]/50 hover:bg-white/[0.05]"
            >
              <span className="font-sans font-bold text-[40px] text-[#C9A84C] leading-none">
                {stat.number}
              </span>
              <span className="font-sans text-[14px] text-[#888794] mt-1 pr-4 leading-normal">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
