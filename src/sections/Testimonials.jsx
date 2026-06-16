import { testimonials } from '../data/dummyData';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">
            Words of <span className="italic font-light">Warmth</span>
          </h2>
        </div>

        {/* Elegant horizontal scroll / flex layout */}
        <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] snap-center bg-primary p-10 shadow-sm border border-border-default/50"
            >
              <Quote size={40} className="text-accent/30 mb-6" />
              <p className="text-lg md:text-xl font-serif text-text-primary leading-relaxed italic mb-8">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-serif text-accent text-xl">
                  {item.name.charAt(0)}
                </div>
                <span className="font-sans text-sm tracking-wider uppercase text-text-secondary">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
