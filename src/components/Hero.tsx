import React, { useState } from 'react';
import { Star, ArrowRight, CheckCircle2, Store } from 'lucide-react';
import { IMAGES } from '../data/franchiseData';
import heroBoothImg from '../assets/images/javacafe_booth_1785119575726.jpg';

interface HeroProps {
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
  onOpenWhatsApp?: (customMsg?: string) => void;
  onScrollToCatalog?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [heroImgSrc, setHeroImgSrc] = useState<string>(heroBoothImg);

  // Fallback to high quality booth image if local path is unavailable in preview
  const handleHeroImgError = () => {
    setHeroImgSrc('');
  };

  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-16 sm:pb-20 mb-8 sm:mb-12 overflow-hidden bg-[#FDF6F0] text-[#1A1A1A] min-h-[80vh] flex flex-col justify-center items-center">
      {/* Decorative Soft Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#FF9F73]/12 blur-3xl rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#FF6B00]/08 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        {/* 2-Column Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center w-full">
          
          {/* Left Column (Corporate Info & CTAs): Order 2 on Mobile, Order 1 on Desktop */}
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6 order-2 md:order-1 mt-6 md:mt-0">
            
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>Tentang CV Hazna Berkah </span>
            </div>

            {/* Headlines & Corporate Description */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-[1.15]">
                Perusahaan ekosistem bisnis kuliner{' '}
                <span className="text-[#FF6B00] block sm:inline">
                  (F&B)
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed max-w-xl">
                yang berfokus pada kemitraan usaha minuman melalui brand Java Cafe dan kemitraan waralaba.
              </p>
            </div>

            {/* Tagline Feature Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs font-bold text-gray-800">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-200/90 bg-white/80 text-gray-800 shadow-2xs backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                All-in-One Solution
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-200/90 bg-white/80 text-gray-800 shadow-2xs backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                Bebas Royalti
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-200/90 bg-white/80 text-gray-800 shadow-2xs backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                 Profit Margin Hingga 70%
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white font-black text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Konsultasi Kemitraan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('product')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white font-extrabold text-sm border border-slate-900 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
              >
                Katalog Produk
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 flex items-center justify-center md:justify-start gap-3.5 border-t border-orange-200/80 w-full">
              <div className="flex -space-x-2 shrink-0">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FDF6F0] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=100" alt="Mitra Java Cafe" referrerPolicy="no-referrer" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FDF6F0] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=100" alt="Mitra Java Cafe" referrerPolicy="no-referrer" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FDF6F0] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=100" alt="Mitra Java Cafe" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF6B00] stroke-[#FF6B00]" />
                  ))}
                  <span className="text-xs font-bold text-[#1A1A1A] ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-gray-700 font-medium">
                  Dipercaya <strong className="font-bold text-[#1A1A1A]">500+ Mitra Ekosistem Hazna</strong> di seluruh Indonesia
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - Booth Image Besar & Jelas */}
<div className="relative order-1 lg:order-2 flex items-center justify-center">
  <div className="relative w-full max-w-2xl">
    
    {/* Main Image - BESAR & JELAS */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <img
        src={heroImgSrc}
        alt="Gerobak Booth Java Cafe - CV Hazna Berkah Barokah Indonesia"
        onError={handleHeroImgError}
        className="w-full h-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* Badge - Top Left */}
    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 z-10">
      <div className="w-8 h-8 rounded-lg bg-[#FF6B00] flex items-center justify-center">
        <Store className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-sm font-black text-[#1A1A1A]">Concept Booth</p>
        <p className="text-xs text-gray-600 font-bold">Java Cafe Exclusive</p>
      </div>
    </div>

  </div>
</div>
      </div>
    </section>
  );
};





