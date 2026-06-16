import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden" id="home">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="text-sm font-sans tracking-widest uppercase text-accent font-medium">
              Handcrafted Crochet Collective
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary leading-[1.1] tracking-tight"
          >
            Handmade<br />
            <span className="italic font-light">Crochet Pieces</span><br />
            Made One Stitch<br />
            At A Time
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl font-sans text-text-secondary font-light max-w-md leading-relaxed"
          >
            Beautiful handcrafted crochet creations designed to bring warmth, joy, and timeless charm into everyday life.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <a 
              href="#collection"
              className="bg-text-primary text-primary px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              Browse Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => openWhatsApp()}
              className="border border-border-default px-8 py-4 font-sans text-sm tracking-widest uppercase text-text-primary hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Order on WhatsApp
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative h-[60vh] lg:h-[85vh] w-full mt-8 lg:mt-0"
        >
          {/* Main Image Container */}
          <div className="absolute inset-0 rounded-[2rem] lg:rounded-tl-[8rem] lg:rounded-br-[8rem] overflow-hidden bg-secondary shadow-2xl">
            <img 
              src="/collection/crochet-11.jpg" 
              alt="Handcrafted crochet" 
              className="w-full h-full object-cover animate-slow-zoom"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-text-primary/5 mix-blend-overlay"></div>
          </div>

          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full border border-border-default/50 bg-primary/30 backdrop-blur-md hidden md:flex items-center justify-center shadow-xl z-20"
          >
             <img 
              src="/collection/crochet-3.jpg" 
              alt="Detail" 
              className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover"
            />
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 bottom-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/20 backdrop-blur-sm hidden md:flex items-center justify-center border border-white/20 shadow-lg z-20"
          >
             <div className="text-center">
               <p className="font-serif italic text-text-primary text-sm md:text-base">100%<br/>Handmade</p>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
