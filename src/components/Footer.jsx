import { MapPin, Mail, Phone } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import logo from '../assets/logo.png';
import { InstagramIcon } from './InstagramIcon';

export const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-text-primary text-primary py-16 lg:py-24" id="contact">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <img src={logo} alt="Crochet Loops" className="h-20 md:h-28 w-auto object-contain" />
          <p className="text-secondary/80 font-sans text-sm leading-relaxed max-w-xs">
            Beautiful handcrafted crochet creations designed to bring warmth, joy, and timeless charm into everyday life.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/crochetloops_by_parneet?utm_source=qr&igsh=MWlmOXo5NXdteXhlaA==" target="_blank" rel="noopener noreferrer" className="p-2 border border-border-default/20 rounded-full hover:bg-accent hover:border-accent transition-colors">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif text-accent">Quick Links</h3>
          <ul className="space-y-4 font-sans text-sm">
            <li><button onClick={(e) => scrollToSection(e, 'home')} className="hover:text-accent transition-colors">Home</button></li>
            <li><button onClick={(e) => scrollToSection(e, 'collection')} className="hover:text-accent transition-colors">Our Collection</button></li>
            <li><button onClick={(e) => scrollToSection(e, 'story')} className="hover:text-accent transition-colors">Our Story</button></li>
            <li><button onClick={(e) => scrollToSection(e, 'custom')} className="hover:text-accent transition-colors">Custom Orders</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif text-accent">Get in Touch</h3>
          <ul className="space-y-4 font-sans text-sm text-secondary/80">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              hello@crochetloops.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              +91 8930214214
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-accent" />
              Handcrafted in Studio
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-border-default/10 text-center font-sans text-xs text-secondary/60 flex justify-center">
        <p>&copy; {new Date().getFullYear()} Crochet Loops. All rights reserved.</p>
      </div>
    </footer>
  );
};
