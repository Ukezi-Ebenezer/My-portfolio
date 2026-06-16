import { Briefcase, Calendar, Star } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative border-t border-white/10 bg-obsidian-950/10">
      {/* Background neon elements */}
      <div className="absolute top-[20%] left-1/3 w-[350px] h-[350px] bg-[#00FF66]/5 blur-[130px] rounded-full pointers-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00FF66] font-semibold mb-2">
            [ Structural Milestones ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Chronological Milestones
          </h2>
          <div className="h-1 w-12 bg-[#00FF66]/75 rounded mt-4" />
        </div>

        {/* Timeline Sequence */}
        <div id="experience-vertical-timeline" className="relative border-l border-white/10 pl-6 md:pl-10 flex flex-col gap-12 text-left">
          {experienceData.map((exp, idx) => (
            <div
              id={`timeline-node-${exp.id}`}
              key={exp.id}
              className="relative flex flex-col gap-4 group"
            >
              {/* Floating Circle Anchor Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-[#00FF66] group-hover:bg-[#00FF66] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Node Title Header Block */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00FF66] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs mt-1 font-semibold">
                    <Briefcase className="w-3.5 h-3.5 text-[#00FF66]/80" />
                    <span className="text-zinc-200">{exp.company}</span>
                  </div>
                </div>

                {/* Milestones Duration Chip */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900/40 border border-white/10 rounded-lg text-zinc-400 font-mono text-[10px] uppercase tracking-widest self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Overview Sentence */}
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl font-sans bg-zinc-950/20 p-4 border border-white/10 rounded-xl">
                {exp.description}
              </p>

              {/* Achievement Bullets */}
              <ul className="flex flex-col gap-2.5 pl-1.5">
                {exp.points.map((point, index) => (
                  <li
                    id={`timeline-point-${exp.id}-${index}`}
                    key={index}
                    className="flex items-start gap-2.5 text-zinc-500 text-xs leading-relaxed"
                  >
                    <Star className="w-3.5 h-3.5 text-[#00FF66]/60 mt-1 flex-shrink-0" />
                    <span className="text-zinc-400 font-sans">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Milestone Footer */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-xs font-mono">
            * Complete curriculum vitae available upon explicit request.
          </p>
        </div>

      </div>
    </section>
  );
}
