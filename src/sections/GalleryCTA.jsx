import { useState } from 'react';
import { motion } from 'framer-motion';
import { gallery } from '../data/dummyData';
import { openWhatsApp } from '../utils/whatsapp';
import { InstagramIcon } from '../components/InstagramIcon';
import { ImageModal } from '../components/ImageModal';

export const GalleryCTA = () => {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <>
      {/* Instagram Gallery */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-text-primary">
                Follow Our Journey
              </h2>
              <p className="font-sans text-text-secondary">@crochetloops_by_parneet</p>
            </div>
            <a 
              href="https://www.instagram.com/crochetloops_by_parneet?utm_source=qr&igsh=MWlmOXo5NXdteXhlaA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border-default px-6 py-3 font-sans text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
            >
              <InstagramIcon size={18} />
              Follow Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((imgUrl, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setPreviewImage(imgUrl)}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img 
                  src={imgUrl} 
                  alt="Gallery image" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon size={32} className="text-white drop-shadow-md" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary border-t border-border-default">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-tight">
              Bring Home Something <span className="italic font-light">Handmade</span>
            </h2>
            <p className="text-lg font-sans text-text-secondary font-light max-w-lg mx-auto leading-relaxed">
              Experience the warmth of true craftsmanship. Let us create something beautiful for you today.
            </p>
            <div className="pt-6 flex justify-center">
              <button 
                onClick={() => openWhatsApp()}
                className="bg-text-primary text-primary px-10 py-5 font-sans text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300 shadow-xl flex items-center gap-3"
              >
                Order Your Piece
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ImageModal src={previewImage} onClose={() => setPreviewImage(null)} />
    </>
  );
};
