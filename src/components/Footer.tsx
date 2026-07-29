import React from 'react';
import { Instagram, Facebook, Video, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/franchiseData';

interface FooterProps {
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-12 relative overflow-hidden border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="w-10 h-10 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="38" height="38" rx="6" fill="#FFFFFF" />
                  <rect x="54" y="8" width="38" height="38" rx="6" fill="#FF6B00" />
                  <rect x="8" y="54" width="38" height="38" rx="6" fill="#FFFFFF" />
                  <path d="M54 54 H92 V74 C92 83.9411 83.9411 92 74 92 H54 V54 Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none flex items-center gap-1.5">
                  <span className="text-white font-black">CV</span>
                  <span className="text-[#FF6B00]">Hazna</span>
                  <span>Berkah</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">
                  Indonesia
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
              {COMPANY_INFO.name} — Holding ekosistem bisnis kuliner terdepan dengan standar kualitas tinggi, sistem teruji, dan komitmen membuka peluang kolaborasi menguntungkan bagi mitra Indonesia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${COMPANY_INFO.socials.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-[#FF6B00] hover:text-white flex items-center justify-center transition-all border border-gray-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://tiktok.com/${COMPANY_INFO.socials.tiktok}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-[#FF6B00] hover:text-white flex items-center justify-center transition-all border border-gray-800"
                aria-label="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-[#FF6B00] hover:text-white flex items-center justify-center transition-all border border-gray-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Struktur Navigasi</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('home')} className="hover:text-[#FF6B00] transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => handleNav('product')} className="hover:text-[#FF6B00] transition-colors cursor-pointer">Product</button></li>
              <li><button onClick={() => handleNav('career')} className="hover:text-[#FF6B00] transition-colors cursor-pointer">Career</button></li>
              <li><button onClick={() => handleNav('gallery')} className="hover:text-[#FF6B00] transition-colors cursor-pointer">Gallery</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-[#FF6B00] transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Layanan Resmi</h4>
            <p className="text-gray-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>Hotline: {COMPANY_INFO.whatsappDisplay}</span>
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>Email: {COMPANY_INFO.email}</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            © 2026 CV Hazna Berkah Indonesia. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#FF6B00] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

