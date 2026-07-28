import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/franchiseData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent(
      'Halo CV Hazna Berkah Barokah Indonesia, saya tertarik konsultasi program Kemitraan. Mohon info selengkapnya.'
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
      <button
        onClick={handleClick}
        className="px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-2xl shadow-emerald-600/40 border-2 border-white flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat via WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full animate-ping" />
        </div>
        <span>Chat via WhatsApp</span>
      </button>
    </div>
  );
};
