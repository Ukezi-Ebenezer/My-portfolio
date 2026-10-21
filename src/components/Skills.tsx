import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData, capabilityMatrix } from '../data/portfolioData';
import { Plus, X, ArrowUpRight } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('Automation & Workflows');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = ['Automation & Workflows', 'LLM & AI Frameworks', 'CRM & Operations', 'Rapid Prototyping', 'Research & Synthesis'];

  const filteredSkills = skillsData.filter(s => s.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="skills"
      className="relative bg-[#FAF7F2] py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-t border-[#1E1026]/08 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        
        {/* Section Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#6A3279] font-semibold mb-3 block"
        >
          // 03 • COMPETENCIES & EXPERTISE
        </motion.span>

        {/* Section Heading & Category Filters */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-tight tracking-tight">
              A modern stack built for <br />
              <span className="italic text-[#6A3279]">speed and reliability.</span>
            </h2>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 max-w-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1E1026] text-[#FAF7F2] font-semibold shadow-xs'
                    : 'bg-white border border-[#1E1026]/10 text-[#1E1026]/75 hover:border-[#6A3279] hover:text-[#1E1026]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ y: -4, borderColor: "rgba(106, 50, 121, 0.3)" }}
              className="p-6 rounded-3xl bg-white border border-[#1E1026]/08 flex flex-col justify-between shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-drama text-2xl font-bold text-[#1E1026] tracking-tight">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-[11px] font-semibold text-[#6A3279] bg-[#6A3279]/10 px-2.5 py-0.5 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#1E1026]/50 block mb-2">
                  {skill.category}
                </span>
                {skill.description && (
                  <p className="font-sans text-xs text-[#1E1026]/70 leading-relaxed mt-2">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Progress gauge bar */}
              <div className="w-full h-1 bg-[#FAF7F2] rounded-full overflow-hidden mt-4 border border-[#1E1026]/05">
                <div
                  className="h-full bg-gradient-to-r from-[#6A3279] to-[#C9A84C] rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Capability Accordion (Inspired by Frame 13 in Inspiration Video) */}
        <div className="w-full pt-16 border-t border-[#1E1026]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Headline */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6A3279] font-semibold mb-3 block">
                // ARCHITECTURAL PILLARS
              </span>
              <h3 className="font-drama text-3xl sm:text-4xl md:text-5xl text-[#1E1026] leading-tight tracking-tight mb-4">
                A conversation. <br />
                <span className="italic text-[#6A3279]">A new perspective.</span>
              </h3>
              <p className="font-sans text-sm text-[#1E1026]/75 leading-relaxed max-w-md">
                How I structure AI automation for founders, teams, and high-growth companies ready to eliminate operational drag.
              </p>
            </div>

            {/* Right Accordion Rows */}
            <div className="lg:col-span-7 flex flex-col w-full divide-y divide-[#1E1026]/10 border-y border-[#1E1026]/10">
              {capabilityMatrix.map((item, idx) => {
                const isOpen = expandedIndex === idx;
                return (
                  <div key={item.number} className="py-6 transition-colors">
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="font-mono text-xs text-[#6A3279] font-bold">
                          {item.number}
                        </span>
                        <div className="flex flex-col">
                          <h4 className="font-drama text-xl sm:text-2xl font-bold text-[#1E1026] group-hover:text-[#6A3279] transition-colors">
                            {item.title}
                          </h4>
                          <span className="font-sans text-xs text-[#1E1026]/60 mt-0.5">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full border border-[#1E1026]/15 group-hover:border-[#6A3279] flex items-center justify-center text-[#1E1026] transition-all flex-shrink-0 ml-4">
                        {isOpen ? <X className="w-4 h-4 text-[#6A3279]" /> : <Plus className="w-4 h-4 text-[#1E1026]" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-sm text-[#1E1026]/75 leading-relaxed mt-4 pl-8 sm:pl-12 max-w-xl">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
