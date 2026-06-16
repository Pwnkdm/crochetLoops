import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Collection', id: 'collection' },
    { name: 'Story', id: 'story' },
    { name: 'Custom Orders', id: 'custom' },
    { name: 'Contact', id: 'contact' },
  ];

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
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <button onClick={(e) => scrollToSection(e, 'home')} className="block">
          <img src={logo} alt="Crochet Loops" className="h-10 md:h-14 w-auto object-contain" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-sans tracking-widest uppercase text-text-secondary hover:text-accent transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary shadow-lg py-6 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-lg font-serif text-text-primary hover:text-accent transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
