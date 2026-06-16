import { motion } from 'framer-motion';
import { processSteps } from '../data/dummyData';

export const Process = () => {
  return (
    <section className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-sm font-sans tracking-widest uppercase text-accent font-medium block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">
            The Crafting <span className="italic font-light">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border-default md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number Circle (Mobile & Desktop) */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-primary border border-accent rounded-full flex items-center justify-center font-serif text-xl text-accent z-10 md:-translate-x-1/2 md:translate-y-0 shadow-sm">
                  {idx + 1}
                </div>

                {/* Empty Space for Desktop Alternate Layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${
                  idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                }`}>
                  <h3 className="text-2xl font-serif text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
