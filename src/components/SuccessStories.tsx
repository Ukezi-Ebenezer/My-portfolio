import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 12000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section
      id="testimonials"
      className="relative bg-[#FAF7F2] py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-t border-[#1E1026]/08 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#6A3279] font-semibold mb-3 block"
        >
          // WORDS FROM CLIENTS & PARTNERS
        </motion.span>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-tight tracking-tight mb-16"
        >
          Trusted by founders & <br />
          <span className="italic text-[#6A3279]">forward-thinking teams.</span>
        </motion.h2>

        {/* Testimonial Stage */}
        <div className="relative w-full min-h-[280px] sm:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center text-center max-w-2xl px-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#6A3279]/10 text-[#6A3279] flex items-center justify-center mb-6">
                <Quote className="w-5 h-5" />
              </div>

              <p className="font-drama text-2xl sm:text-3xl text-[#1E1026] leading-relaxed italic text-balance font-normal">
                "{testimonialsData[currentIndex].quote}"
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#6A3279]/30" />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-[#1E1026]">
                    {testimonialsData[currentIndex].client}
                  </span>
                  <span className="font-mono text-[10px] text-[#6A3279] uppercase tracking-wider">
                    {testimonialsData[currentIndex].role}
                  </span>
                </div>
                <div className="w-8 h-[1px] bg-[#6A3279]/30" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2 mt-12">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-8 bg-[#6A3279]' 
                  : 'w-2 bg-[#1E1026]/15 hover:bg-[#1E1026]/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
