import { Heart, Sparkles, Scissors, ShieldCheck } from 'lucide-react';

export const Trust = () => {
  const features = [
    { icon: <Scissors size={24} />, text: '100% Handmade' },
    { icon: <Heart size={24} />, text: 'Made With Love' },
    { icon: <Sparkles size={24} />, text: 'Custom Orders Available' },
    { icon: <ShieldCheck size={24} />, text: 'Premium Quality Materials' },
  ];

  return (
    <section className="bg-secondary border-y border-border-default py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center space-y-4 group">
              <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <p className="font-serif text-text-primary text-lg md:text-xl">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
