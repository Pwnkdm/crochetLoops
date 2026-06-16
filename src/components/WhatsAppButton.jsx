import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const WhatsAppButton = () => {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-[pulse-slow_3s_cubic-bezier(0.4,0,0.6,1)_infinite] group flex items-center justify-center"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      {/* Optional tooltip */}
      <span className="absolute right-full mr-4 bg-text-primary text-primary px-3 py-1.5 rounded-lg text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
        Chat with us
      </span>
    </button>
  );
};
