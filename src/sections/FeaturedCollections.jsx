import { motion } from 'framer-motion';
import { categories } from '../data/dummyData';
import { cn } from '../utils/cn';

export const FeaturedCollections = () => {
  return (
    <section className="py-24 bg-secondary" id="collection">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <span className="text-sm font-sans tracking-widest uppercase text-accent font-medium block">
            Discover
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">
            Featured Collections
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden bg-primary cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500",
                idx === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9] md:aspect-[21/9]" : "aspect-square"
              )}
            >
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content Reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-serif text-white tracking-wide">
                  {category.title}
                </h3>
                <p className="text-white/80 font-sans text-sm uppercase tracking-widest mt-2">
                  View Collection
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
