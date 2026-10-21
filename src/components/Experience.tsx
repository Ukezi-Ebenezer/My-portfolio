import { motion } from 'motion/react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#FAF7F2] py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-t border-[#1E1026]/08 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#6A3279] font-semibold mb-3 block"
        >
          // 05 • WORK EXPERIENCE, EDUCATION & CREDENTIALS
        </motion.span>

        {/* Section Headline */}
        <div className="w-full mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-tight tracking-tight max-w-3xl"
          >
            Computer Science,<br />
            <span className="italic text-[#6A3279]"> </span>
          </motion.h2>
        </div>

        {/* Experience & Education Dual Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">

          {/* Left Column: Work Experience (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E1026]/60 font-bold border-b border-[#1E1026]/10 pb-3 block">
              // Professional Experience
            </span>

            {experienceData.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-[2rem] bg-white border border-[#1E1026]/08 shadow-xs flex flex-col"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#1E1026]/06">
                  <div>
                    <h3 className="font-drama text-2xl font-bold text-[#1E1026]">
                      {exp.role}
                    </h3>
                    <span className="font-sans text-xs text-[#6A3279] font-semibold">
                      {exp.company} • {exp.location}
                    </span>
                  </div>
                  <span className="font-mono text-xs bg-[#FAF7F2] text-[#1E1026] border border-[#1E1026]/10 px-3 py-1 rounded-full self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#1E1026]/75 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-col gap-3">
                  {exp.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#1E1026]/80 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-[#6A3279] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Education & Academic Foundation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E1026]/60 font-bold border-b border-[#1E1026]/10 pb-3 block">
              // Academic Foundation
            </span>

            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-[#1E1026]/08 shadow-xs flex flex-col"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#6A3279]/10 text-[#6A3279] flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <h3 className="font-drama text-2xl font-bold text-[#1E1026]">
                  {edu.degree}
                </h3>

                <span className="font-drama text-lg italic text-[#6A3279] mb-1">
                  {edu.field}
                </span>

                <span className="font-sans text-xs text-[#1E1026]/70 mb-4">
                  {edu.institution} • {edu.location}
                </span>

                <div className="p-3 bg-[#FAF7F2] rounded-xl font-mono text-[11px] text-[#1E1026]/80 mb-6 border border-[#1E1026]/06">
                  Period: {edu.period}
                </div>

                {edu.highlights && (
                  <div className="flex flex-col gap-2 pt-4 border-t border-[#1E1026]/06">
                    {edu.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="font-sans text-xs text-[#1E1026]/75 leading-relaxed">
                        • {h}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

        {/* Verified Certifications Matrix (Anthropic, Google, Manus AI) */}
        <div id="certifications" className="w-full pt-16 border-t border-[#1E1026]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6A3279] font-bold block mb-2">
                // VERIFIED INDUSTRY CREDENTIALS
              </span>
              <h3 className="font-drama text-3xl sm:text-4xl text-[#1E1026] tracking-tight">
                Certified by the <span className="italic text-[#6A3279]">companies building AI.</span>
              </h3>
            </div>

            <a
              href="https://www.linkedin.com/in/ebenezer-ukezi-542475217/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-[#6A3279] hover:underline"
            >
              Verify all certificates on LinkedIn →
            </a>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {certificationsData.map((cert, cIdx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: cIdx * 0.04 }}
                whileHover={{ y: -3, borderColor: "rgba(106, 50, 121, 0.4)" }}
                className="p-5 rounded-2xl bg-white border border-[#1E1026]/08 shadow-xs flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#C9A84C] font-bold">
                      {cert.issuer}
                    </span>
                    <Award className="w-3.5 h-3.5 text-[#C9A84C]" />
                  </div>
                  <h4 className="font-drama text-lg font-bold text-[#1E1026] group-hover:text-[#6A3279] transition-colors leading-snug">
                    {cert.name}
                  </h4>
                </div>

                <span className="font-mono text-[10px] text-[#1E1026]/40 mt-4 pt-2 border-t border-[#1E1026]/05 block">
                  Verified Credential
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
