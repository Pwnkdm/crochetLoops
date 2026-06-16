import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/whatsapp';

export const CustomOrder = () => {
  return (
    <section className="py-32 bg-text-primary text-primary relative overflow-hidden" id="custom">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-sm font-sans tracking-widest uppercase text-accent font-medium block">
            Bespoke Creations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
            Looking For Something <span className="italic text-accent font-light">Unique?</span>
          </h2>
          <p className="text-lg md:text-xl font-sans text-primary/80 font-light leading-relaxed max-w-xl mx-auto">
            Create personalized crochet gifts tailored perfectly to your vision. Whether it's a memory you want to capture or a specific design you have in mind, we'll bring it to life stitch by stitch.
          </p>
          
          <div className="pt-8">
            <button 
              onClick={() => openWhatsApp()}
              className="bg-accent text-white px-10 py-5 font-sans text-sm tracking-widest uppercase hover:bg-accent-hover transition-colors duration-300 shadow-xl shadow-accent/20"
            >
              Start Custom Order
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
