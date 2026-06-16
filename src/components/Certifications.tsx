import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certData = [
  { id: 1, name: "AI Fluency: Frameworks and Foundations", issuer: "Anthropic" },
  { id: 2, name: "Claude 101", issuer: "Anthropic" },
  { id: 3, name: "Generative AI", issuer: "Outskirts Press, Inc." },
  { id: 4, name: "Manus AI Advanced Certificate", issuer: "Manus AI" },
  { id: 5, name: "Manus AI Intermediate Certificate", issuer: "Manus AI" },
  { id: 6, name: "Manus AI Beginner Certificate", issuer: "Manus AI" },
  { id: 7, name: "Google AI for K12 Educators", issuer: "Google" },
  { id: 8, name: "AI Workplace Proficiency Certification", issuer: "Superhuman AI" }
];

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up eyebrow and headline
      gsap.from(['.certs-eyebrow', '.certs-headline'], {
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

      // Stagger fade-up certification cards in viewport
      gsap.from('.cert-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.certs-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="relative bg-[#0D0D12] py-24 px-16 max-md:py-16 max-md:px-8 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
        
        {/* Section Eyebrow Label */}
        <span
          className="certs-eyebrow font-mono text-[13px] text-[#C9A84C] tracking-[0.1em] mb-4 block"
        >
          // Credentials
        </span>

        {/* Section Headline */}
        <h2
          className="certs-headline font-sans font-bold text-[#FAF8F5] leading-tight mb-12"
          style={{ fontSize: 'clamp(24px, 3.5vw, 42px)' }}
        >
          Certified by the companies building AI.
        </h2>

        {/* Certifications Responsive Grid (repeat auto-fit minmax 240px) */}
        <div
          className="certs-grid w-full grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mt-4"
        >
          {certData.map((cert) => (
            <div
              id={`certification-card-${cert.id}`}
              key={cert.id}
              className="cert-card relative p-6 bg-white/[0.03] border border-[rgba(201,168,76,0.18)] rounded-[1.25rem] hover:border-[rgba(201,168,76,0.45)] hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300 flex flex-col justify-between text-left group"
            >
              {/* Small dot indicator in top-right corner */}
              <div 
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#C9A84C] opacity-70"
                id={`cert-dot-${cert.id}`}
              />

              <div className="mt-2 pr-4">
                {/* Cert Name */}
                <h3 className="font-sans font-semibold text-[15px] text-[#FAF8F5] leading-snug group-hover:text-[#C9A84C] transition-colors duration-200">
                  {cert.name}
                </h3>
                {/* Issuer */}
                <p className="font-mono text-[12px] text-[#888794] mt-2 tracking-wide uppercase">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View LinkedIn link centered below */}
        <div className="w-full flex justify-center mt-12">
          <a
            id="view-all-certifications-linkedin"
            href="https://www.linkedin.com/in/ebenezer-ukezi-542475217/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[14px] text-[#C9A84C] hover:text-[#FAF8F5] transition-colors tracking-wider"
          >
            View all on LinkedIn &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
