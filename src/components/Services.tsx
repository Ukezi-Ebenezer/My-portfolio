import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up section title elements
      gsap.from(['.services-eyebrow', '.services-headline'], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Stagger fade-up the custom cards
      gsap.from('.service-card', {
        opacity: 0,
        y: 45,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-cards-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const card1Tags = ["Figma", "FigJam", "Framer", "Hira"];
  const card2Tags = ["n8n", "Make.com", "OpenAI", "HubSpot", "Zapier"];

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#0D0D12] py-24 px-16 max-md:py-16 max-md:px-8 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
        
        {/* Section Eyebrow Header */}
        <span
          className="services-eyebrow font-mono text-[13px] text-[#C9A84C] tracking-[0.1em] mb-4 block"
        >
          // What I Do
        </span>

        {/* Section Heading */}
        <h2
          className="services-headline font-sans font-bold text-[#FAF8F5] leading-tight max-w-[650px] mb-12"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          Two skills. One freelancer. Zero handoffs.
        </h2>

        {/* Services 2-Column Grid */}
        <div
          className="services-cards-grid w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-4"
        >
          
          {/* Card 1: UI/UX Design */}
          <div
            id="service-card-ui-ux"
            className="service-card p-10 max-sm:p-6 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)] rounded-[2rem] hover:scale-[1.02] hover:border-[rgba(201,168,76,0.45)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Custom SVG Design grid/nib icon */}
              <div className="w-10 h-10 flex items-center justify-center mb-6 text-[#C9A84C]">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M21 12H3" />
                  <path d="M12 3v18" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>

              <h3 className="font-sans text-2xl font-bold text-[#FAF8F5] mb-4">
                UI/UX Design
              </h3>
              
              <p className="font-sans text-base text-[#888794] leading-relaxed mb-8">
                I design user-centered interfaces from wireframe to polished prototype. Clean, functional, and built to hand off directly to development — or I build it myself.
              </p>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {card1Tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[12px] text-[#C9A84C] border border-[#C9A84C]/35 px-3 py-1 rounded-full bg-[#0D0D12]/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: AI Workflow Automation */}
          <div
            id="service-card-ai-automation"
            className="service-card p-10 max-sm:p-6 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)] rounded-[2rem] hover:scale-[1.02] hover:border-[rgba(201,168,76,0.45)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Custom SVG Workflow/Node node icon */}
              <div className="w-10 h-10 flex items-center justify-center mb-6 text-[#C9A84C]">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="5" r="3" />
                  <circle cx="5" cy="19" r="3" />
                  <circle cx="19" cy="19" r="3" />
                  <path d="M5 16V10a4 4 0 0 1 4-4h6" />
                  <path d="M19 16v-3a4 4 0 0 0-4-4" />
                  <path d="m11 8 1 1-1 1" />
                </svg>
              </div>

              <h3 className="font-sans text-2xl font-bold text-[#FAF8F5] mb-4">
                AI Workflow Automation
              </h3>
              
              <p className="font-sans text-base text-[#888794] leading-relaxed mb-8">
                I build n8n and Make.com workflows that automate your lead capture, client onboarding, email sequences, and data management — saving 10–40 hours per month.
              </p>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {card2Tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[12px] text-[#C9A84C] border border-[#C9A84C]/35 px-3 py-1 rounded-full bg-[#0D0D12]/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
