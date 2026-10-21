import { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioOwner } from '../data/portfolioData';
import { MessageCircle, Mail, ArrowUpRight, Copy, Check, Linkedin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "ebenezerukezi@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#FAF7F2] py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-t border-[#1E1026]/08 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#6A3279] font-semibold mb-3 block"
        >
          // 08 • GET IN TOUCH & START AUTOMATING
        </motion.span>

        {/* Section Main Container: Velvet Plum Luxury Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="w-full luxury-card-dark rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-14 md:p-16 relative overflow-hidden text-left"
        >
          {/* Subtle gold ambient glow in top-right corner */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C9A84C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full">
            {/* Pill Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-[#C9A84C] font-mono text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              Available for new automation projects & contracts
            </div>

            <h2 className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] leading-[1.08] tracking-tight mb-6">
              Got a process that's wasting <br />
              <span className="italic text-[#C9A84C]">your team's time?</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed max-w-2xl mb-10">
              I typically respond within 12 hours. First conversation is free — 20 minutes to understand your workflow bottlenecks, review your stack, and determine the fastest path to measurable time savings.
            </p>

            {/* Main Action Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* WhatsApp / Direct Consultation Call */}
              <a
                href={portfolioOwner.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#C9A84C]/40 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-sm text-[#FAF7F2] block group-hover:text-[#C9A84C] transition-colors">
                      Chat on WhatsApp
                    </span>
                    <span className="font-mono text-xs text-[#FAF7F2]/60">
                      Direct line • Instant reply
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#FAF7F2]/60 group-hover:text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Network */}
              <a
                href={portfolioOwner.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#C9A84C]/40 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/20 text-[#0A66C2] flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-sm text-[#FAF7F2] block group-hover:text-[#C9A84C] transition-colors">
                      Connect on LinkedIn
                    </span>
                    <span className="font-mono text-xs text-[#FAF7F2]/60">
                      Professional profile & references
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#FAF7F2]/60 group-hover:text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Copy Email Directly */}
              <button
                onClick={handleCopyEmail}
                className="sm:col-span-2 lg:col-span-1 p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#C9A84C]/40 transition-all flex items-center justify-between group cursor-pointer text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-sm text-[#FAF7F2] block group-hover:text-[#C9A84C] transition-colors">
                      {emailAddress}
                    </span>
                    <span className="font-mono text-xs text-[#FAF7F2]/60">
                      {copied ? 'Copied to clipboard!' : 'Click to copy email address'}
                    </span>
                  </div>
                </div>
                {copied ? (
                  <Check className="w-4 h-4 text-[#22C55E]" />
                ) : (
                  <Copy className="w-4 h-4 text-[#FAF7F2]/60 group-hover:text-[#C9A84C] transition-all" />
                )}
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
