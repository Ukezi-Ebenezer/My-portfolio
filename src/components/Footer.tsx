import { portfolioOwner } from '../data/portfolioData';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
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

  const navItems = [
    { id: 'hero', label: 'Top' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'speaking', label: 'Facilitating & Speaking' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer
      id="portfolio-global-footer"
      className="relative z-10 bg-[#160B1C] text-[#FAF7F2] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] px-6 sm:px-12 md:px-16 pt-16 pb-12 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* Top Row: Brand & Main Navigation */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-left pb-12 border-b border-white/10">
          
          {/* Creator & Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-drama text-3xl font-bold tracking-tight text-[#FAF7F2]">
                Ukezi Ebenezer<span className="text-[#C9A84C]">.</span>
              </span>
              <span className="font-mono text-[10px] text-[#C9A84C] uppercase tracking-widest bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                AI Automation
              </span>
            </div>
            <p className="font-drama italic text-base text-[#FAF7F2]/65 max-w-md">
              "{portfolioOwner.tagline}."
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={portfolioOwner.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 text-[#FAF7F2] hover:text-[#25D366] flex items-center justify-center transition-all cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={portfolioOwner.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/40 text-[#FAF7F2] hover:text-[#0A66C2] flex items-center justify-center transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioOwner.links.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Middle Navigation Strip */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 py-8 border-b border-white/08">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="font-sans text-xs sm:text-[13px] text-[#FAF7F2]/70 hover:text-[#C9A84C] transition-colors cursor-pointer text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row: Copyright & Status */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 text-xs font-mono text-[#FAF7F2]/50">
          <span>
            &copy; {currentYear} Ukezi Ebenezer Nwachukwu. Built with clean, accessible code.
          </span>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[#FAF7F2]/70">All Systems Operational • 99.9% Uptime</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
