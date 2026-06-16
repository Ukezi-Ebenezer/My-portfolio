export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
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

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer
      id="portfolio-global-footer"
      className="relative z-10 bg-[#08080E] rounded-t-[3rem] px-16 py-16 max-md:px-8 max-md:py-12 mt-0 border-t border-white/5"
    >
      <style>{`
        @keyframes statusPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          }
          100% {
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
          }
        }
        .pulse-dot {
          animation: statusPulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Top Row: Flex space-between */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-left">
          {/* Creator & Tagline */}
          <div className="flex flex-col gap-1.5">
            <span className="font-sans font-bold text-lg text-[#FAF8F5] leading-tight">
              Ukezi Ebenezer
            </span>
            <p className="font-drama italic text-[15px] text-[#888794] leading-relaxed">
              "Turning vibes into products."
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <button
                id={`footer-nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="font-sans text-[14px] text-[#888794] hover:text-[#C9A84C] hover:-translate-y-[1px] transition-all duration-200 cursor-pointer text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider line style */}
        <div 
          className="h-[1px] w-full bg-[rgba(201,168,76,0.15)] my-10" 
          id="footer-divider-line"
        />

        {/* Bottom Row: Flex space-between */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
          {/* Copyright notice text */}
          <span className="font-mono text-[12px] text-[#888794] tracking-wide">
            &copy; {currentYear} Ukezi Ebenezer. All rights reserved.
          </span>

          {/* System status node */}
          <div className="flex items-center" id="footer-status-wrapper">
            <div 
              className="pulse-dot w-2 h-2 rounded-full bg-[#22C55E]" 
              id="footer-pulse-green-dot"
            />
            <span className="font-mono text-[12px] text-[#888794] ml-2 tracking-wide">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
