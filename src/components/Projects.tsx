import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section
      id="projects"
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
          // 04 • SELECTED WORKFLOWS & CASE STUDIES
        </motion.span>

        {/* Section Heading & Subtitle */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-tight tracking-tight"
          >
            An idea. <br />
            <span className="italic text-[#6A3279]">Made real.</span>
          </motion.h2>

          <p className="font-sans text-sm text-[#1E1026]/75 max-w-md leading-relaxed">
            Real enterprise and startup automations running live in production. Every system is built to eliminate human error, accelerate response times, and scale seamlessly.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="w-full flex flex-col gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="w-full rounded-[2.5rem] bg-white border border-[#1E1026]/10 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch"
            >
              {/* Left Image / Visual Card */}
              <div className="w-full lg:w-5/12 h-[260px] sm:h-[320px] rounded-3xl overflow-hidden relative flex-shrink-0 group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1026]/70 via-transparent to-transparent" />
                
                {/* Category Badge on image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#1E1026]/80 text-[#FAF7F2] font-mono text-[10px] uppercase tracking-wider backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Metrics Overlay Bottom */}
                {project.metrics && (
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md">
                    {project.metrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col text-left px-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#1E1026]/60">
                          {metric.label}
                        </span>
                        <span className="font-drama text-lg font-bold text-[#6A3279] leading-tight">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Content Column */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-drama text-2xl sm:text-3xl font-bold text-[#1E1026] tracking-tight leading-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="font-drama text-base sm:text-lg italic text-[#6A3279] mb-4">
                    {project.tagline}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#1E1026]/75 leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Outcomes Checklist */}
                  {project.outcomes && (
                    <div className="flex flex-col gap-2 mb-6 p-4 rounded-2xl bg-[#FAF7F2] border border-[#1E1026]/06">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6A3279] font-bold">
                        Key Measurable Outcomes
                      </span>
                      {project.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2 text-xs text-[#1E1026]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6A3279] mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row: Tech Stack Pills & Direct Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E1026]/08">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[11px] text-[#1E1026] bg-[#1E1026]/05 border border-[#1E1026]/08 px-2.5 py-0.5 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#1E1026]/15 hover:border-[#6A3279] text-[#1E1026] hover:text-[#6A3279] font-mono text-xs transition-colors cursor-pointer"
                      >
                        Blueprint ↗
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
