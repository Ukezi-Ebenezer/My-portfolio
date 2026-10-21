import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { facilitatingVideosData, googleDriveFolderUrl } from '../data/portfolioData';
import { Play, X, Clock, CheckCircle2, Video, ArrowUpRight, FileVideo, ExternalLink, Sparkles } from 'lucide-react';
import { FacilitatingVideo } from '../types';

export default function FacilitatingSpeaking() {
  const [selectedVideo, setSelectedVideo] = useState<FacilitatingVideo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Workshops');

  const categories = ['Workshops', 'Training', 'Presentations', 'Facilitation'];

  const filteredVideos = facilitatingVideosData.filter(v => v.category === activeCategory);

  // Helper function to extract and build embedded playback URLs for YouTube, Google Drive, etc.
  const parseVideoSource = (url?: string) => {
    if (!url) return { type: 'none' as const };

    // 1. YouTube URL detection (standard or short url)
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return {
        type: 'youtube' as const,
        embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
        directUrl: url
      };
    }

    // 2. Google Drive File direct view URL
    const gdriveFileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (gdriveFileMatch && gdriveFileMatch[1]) {
      return {
        type: 'gdrive-file' as const,
        embedUrl: `https://drive.google.com/file/d/${gdriveFileMatch[1]}/preview`,
        directUrl: url
      };
    }

    // 3. Google Drive Folder archive URL
    if (url.includes('drive.google.com/drive/folders/')) {
      return {
        type: 'gdrive-folder' as const,
        directUrl: url
      };
    }

    // 4. HTML5 video (.mp4, .webm)
    if (url.match(/\.(mp4|webm|ogg)$/i)) {
      return {
        type: 'html5' as const,
        embedUrl: url,
        directUrl: url
      };
    }

    return {
      type: 'external' as const,
      directUrl: url
    };
  };

  const parsedSelectedVideo = selectedVideo ? parseVideoSource(selectedVideo.videoUrl) : null;

  return (
    <section
      id="speaking"
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
          // 06 • FACILITATING & SPEAKING
        </motion.span>

        {/* Section Heading & Overview */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-tight tracking-tight">
              Facilitating & Speaking. <br />
              <span className="italic text-[#6A3279]">Teaching builders to automate.</span>
            </h2>
          </motion.div>

          <p className="font-sans text-sm text-[#1E1026]/75 max-w-md leading-relaxed">
            From technical classrooms to live workshop facilitations: breaking down the mechanics of event-driven workflows, AI prompt architectures, and enterprise systems integration.
          </p>
        </div>

        {/* Google Drive Archive Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="w-full mb-12 p-6 sm:p-8 rounded-[2.2rem] bg-white border border-[#1E1026]/10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-13 h-13 rounded-2xl bg-[#6A3279]/10 text-[#6A3279] flex items-center justify-center flex-shrink-0">
              <FileVideo className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A84C] font-bold">
                  Verified Teaching Folder
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              </div>
              <h3 className="font-drama text-2xl font-bold text-[#1E1026]">
                Google Drive Video Archive
              </h3>
              <p className="font-sans text-xs text-[#1E1026]/70 mt-0.5 max-w-xl">
                Browse the complete collection of classroom lectures, workshop recordings, and technical demonstrations.
              </p>
            </div>
          </div>

          <a
            href={googleDriveFolderUrl}
            target="_blank"
            rel="noreferrer"
            className="group px-6 py-3 rounded-full bg-[#1E1026] hover:bg-[#6A3279] text-[#FAF7F2] font-sans text-xs font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap self-stretch sm:self-auto justify-center cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Open Google Drive Folder</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1E1026] text-[#FAF7F2] font-semibold shadow-xs'
                  : 'bg-white border border-[#1E1026]/10 text-[#1E1026]/75 hover:border-[#6A3279] hover:text-[#1E1026]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Responsive Gallery (2x2 Grid) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[2.5rem] bg-white border border-[#1E1026]/08 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group text-left"
            >
              {/* Thumbnail Container with Play Trigger */}
              <div
                className="w-full h-60 relative overflow-hidden bg-[#1E1026] cursor-pointer"
                onClick={() => setSelectedVideo(item)}
              >
                {/* Lazy-loaded static thumbnail for maximum load performance */}
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Visual Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1026]/85 via-[#1E1026]/20 to-transparent" />
                
                {/* Category Pill Top Left */}
                {item.category && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E1026]/80 backdrop-blur-md text-[#FAF7F2] font-mono text-[10px] uppercase tracking-wider border border-white/10">
                    {item.category}
                  </div>
                )}

                {/* Duration Badge Top Right */}
                {item.duration && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FAF7F2] font-mono text-[10px] flex items-center gap-1.5 border border-white/10">
                    <Clock className="w-3 h-3 text-[#C9A84C]" />
                    <span>{item.duration}</span>
                  </div>
                )}

                {/* Center Animated Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#1E1026] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#6A3279] group-hover:text-white transition-all">
                    <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Verified Event / Role Bottom Strip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#C9A84C] font-semibold truncate max-w-[240px]">
                    {item.eventName || item.role}
                  </span>
                  <span className="text-[#FAF7F2]/75 uppercase tracking-wider flex items-center gap-1 text-[10px]">
                    <Video className="w-3 h-3 text-[#C9A84C]" />
                    {item.platform === 'google-drive' ? 'Google Drive' : 'Video Session'}
                  </span>
                </div>
              </div>

              {/* Text Information & Watch Action */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#6A3279] font-bold block mb-2">
                    {item.topic}
                  </span>
                  
                  <h3 className="font-drama text-2xl sm:text-3xl font-bold text-[#1E1026] group-hover:text-[#6A3279] transition-colors leading-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#1E1026]/75 leading-relaxed line-clamp-3 mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Watch Button and Details Trigger */}
                <div className="pt-5 border-t border-[#1E1026]/06 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedVideo(item)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1026] hover:bg-[#6A3279] text-[#FAF7F2] font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5" fill="currentColor" />
                    <span>Watch Session</span>
                  </button>

                  <a
                    href={item.videoUrl || googleDriveFolderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-[#6A3279] hover:text-[#1E1026] flex items-center gap-1 transition-colors"
                    title="Open directly in provider"
                  >
                    <span>Direct Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Player for Selected Video */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E1026]/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-[#1E1026]/15 max-h-[92vh] overflow-y-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-[#1E1026]/10 flex items-center justify-center text-[#1E1026] hover:bg-[#6A3279] hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Eyebrow & Metadata */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6A3279] font-bold">
                  {selectedVideo.topic}
                </span>
                {selectedVideo.duration && (
                  <span className="font-mono text-xs text-[#1E1026]/60">
                    • {selectedVideo.duration}
                  </span>
                )}
                {selectedVideo.eventName && (
                  <span className="font-mono text-[11px] bg-[#6A3279]/10 text-[#6A3279] px-2.5 py-0.5 rounded-full font-semibold">
                    {selectedVideo.eventName}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-drama text-3xl sm:text-4xl font-bold text-[#1E1026] leading-tight mb-6 pr-10">
                {selectedVideo.title}
              </h3>

              {/* Embedded Player or Interactive Drive Link Showcase */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden relative mb-6 bg-black shadow-inner">
                {parsedSelectedVideo?.type === 'youtube' && parsedSelectedVideo.embedUrl ? (
                  <iframe
                    src={parsedSelectedVideo.embedUrl}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-2xl"
                  />
                ) : parsedSelectedVideo?.type === 'gdrive-file' && parsedSelectedVideo.embedUrl ? (
                  <iframe
                    src={parsedSelectedVideo.embedUrl}
                    title={selectedVideo.title}
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-2xl"
                  />
                ) : parsedSelectedVideo?.type === 'html5' && parsedSelectedVideo.embedUrl ? (
                  <video
                    src={parsedSelectedVideo.embedUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  /* Google Drive Folder / Direct Stream Banner */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={selectedVideo.thumbnailUrl}
                      alt={selectedVideo.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-[#1E1026]/75 backdrop-blur-xs" />
                    
                    <div className="relative z-10 flex flex-col items-center max-w-md">
                      <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#6A3279] flex items-center justify-center mb-4 shadow-lg">
                        <FileVideo className="w-8 h-8 text-[#6A3279]" />
                      </div>
                      
                      <span className="font-mono text-xs text-[#C9A84C] uppercase tracking-wider font-semibold mb-1">
                        Hosted in Verified Google Drive Archive
                      </span>
                      
                      <h4 className="font-drama text-2xl font-bold text-[#FAF7F2] mb-2">
                        {selectedVideo.title}
                      </h4>
                      
                      <p className="font-sans text-xs text-[#FAF7F2]/80 leading-relaxed mb-6">
                        This session is available in full resolution on Google Drive. Click below to view the recording and associated materials.
                      </p>

                      <a
                        href={selectedVideo.videoUrl || googleDriveFolderUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-full bg-[#C9A84C] hover:bg-[#D8B95D] text-[#1E1026] font-sans text-xs font-bold tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <Play className="w-4 h-4" fill="currentColor" />
                        <span>Watch on Google Drive ↗</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-[#1E1026]/80 leading-relaxed mb-6">
                {selectedVideo.description}
              </p>

              {/* Key Takeaways & Curriculum */}
              {selectedVideo.keyTakeaways && selectedVideo.keyTakeaways.length > 0 && (
                <div className="p-6 rounded-2xl bg-white border border-[#1E1026]/08 flex flex-col gap-3 mb-6 shadow-xs">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#6A3279] font-bold">
                    Key Curriculum & Insights
                  </span>
                  {selectedVideo.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E1026]/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#6A3279] mt-0.5 flex-shrink-0" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E1026]/10">
                <a
                  href={selectedVideo.videoUrl || googleDriveFolderUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-[#6A3279] hover:text-[#1E1026] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Open directly in provider window</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-6 py-2.5 rounded-full bg-[#1E1026] text-[#FAF7F2] font-sans text-xs font-semibold cursor-pointer hover:bg-[#6A3279] transition-colors"
                >
                  Close Session
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
