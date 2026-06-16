import { motion } from 'framer-motion';
import { featuredProducts } from '../data/dummyData';
import { openWhatsApp } from '../utils/whatsapp';
import { ShoppingBag } from 'lucide-react';

export const BestSellers = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl space-y-4">
            <span className="text-sm font-sans tracking-widest uppercase text-accent font-medium block">
              Curated
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary">
              Best Sellers
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Order Button Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button 
                    onClick={() => openWhatsApp(product.name)}
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-primary text-text-primary px-6 py-3 font-sans text-sm tracking-widest uppercase shadow-lg hover:bg-accent hover:text-white flex items-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-xl font-serif text-text-primary">{product.name}</h3>
                <p className="text-sm font-sans text-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
