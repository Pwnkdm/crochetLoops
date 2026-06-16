import { motion } from 'framer-motion';

export const AboutStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary" id="story">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-accent/10 translate-x-4 translate-y-4 rounded-tl-[6rem] rounded-br-[6rem]"></div>
            <img 
              src="/collection/crochet-7.jpg" 
              alt="Crafting process" 
              className="absolute inset-0 w-full h-full object-cover rounded-tl-[6rem] rounded-br-[6rem] shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-accent"></span>
              <span className="text-sm font-sans tracking-widest uppercase text-accent font-medium">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-tight">
              Crafted With Passion,<br />
              <span className="italic text-text-secondary font-light">Designed To Last</span>
            </h2>

            <div className="space-y-6 text-lg font-sans text-text-secondary font-light leading-relaxed">
              <p>
                Crochet Loops began with a simple belief: in a world of mass production, there is profound beauty in things made slowly by hand. Every knot, every stitch, and every pattern is a testament to patience and creativity.
              </p>
              <p>
                We source the finest premium yarns to create pieces that not only look stunning but feel luxurious to the touch. Our process cannot be rushed. It requires an attention to detail that only a human touch can provide.
              </p>
              <p>
                When you bring home a piece from our collection, you aren't just buying a product—you're adopting a piece of our heart, crafted specifically to bring joy into your everyday life.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
