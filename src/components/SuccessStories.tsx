import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    client: "ELF Foundation",
    quote: "Working with Ukezi was a great experience. He understood our needs, brought creative ideas to the table, and delivered a solution that was both professional and effective. His attention to detail and commitment to the project stood out."
  },
  {
    id: 2,
    client: "Miriam Effiong",
    quote: "Ukezi made the entire process simple and seamless. He was professional, creative, and open to feedback, and the final result was better than I expected. I would definitely recommend his services."
  },
  {
    id: 3,
    client: "Vicky Great Enterprises",
    quote: "Working with Ukezi was an excellent experience. He took the time to understand our vision and transformed our ideas into a professional and appealing result. His creativity, responsiveness, and attention to detail made a real difference."
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    // 60 seconds (1 minute) timer
    const timer = setInterval(nextTestimonial, 60000);
    return () => clearInterval(timer);
  }, [nextTestimonial, currentIndex]); // depend on currentIndex so the timer resets if manually changed

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="success-stories"
      className="relative bg-[#0D0D12] py-24 px-16 max-md:py-16 max-md:px-8 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Eyebrow Label */}
        <motion.span
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-[13px] text-[#C9A84C] tracking-[0.1em] mb-4 block"
        >
          // Success Stories
        </motion.span>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-sans font-bold text-[#FAF8F5] leading-tight mb-16"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          Words from clients
        </motion.h2>

        {/* Testimonial Carousel */}
        <div className="relative w-full max-w-3xl min-h-[350px] md:min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <Quote className="w-8 h-8 text-[#C9A84C]/40 mb-6" />
              <p className="font-sans text-[18px] md:text-[22px] text-[#FAF8F5] leading-relaxed max-w-2xl text-balance italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#C9A84C]/50" />
                <span className="font-sans font-semibold text-[16px] text-[#C9A84C]">
                  {testimonials[currentIndex].client}
                </span>
                <div className="w-8 h-[1px] bg-[#C9A84C]/50" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-3 mt-16" id="success-stories-indicators">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'bg-[#C9A84C] scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
