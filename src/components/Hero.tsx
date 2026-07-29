import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, CheckCircle2, Store, ZoomIn } from 'lucide-react';
import { IMAGES } from '../data/franchiseData';
import heroBoothImg from '../assets/images/javacafe_booth_1785119575726.jpg';

interface HeroProps {
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
  onOpenWhatsApp?: (customMsg?: string) => void;
  onScrollToCatalog?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [heroImgSrc, setHeroImgSrc] = useState<string>(heroBoothImg);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY * 0.5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroImgError = () => {
    setHeroImgSrc('');
  };

  return (
    <section 
      id="hero" 
      className="relative pt-8 sm:pt-14 pb-16 sm:pb-20 mb-8 sm:mb-12 overflow-hidden bg-gradient-to-br from-[#FDF6F0] via-orange-50/30 to-[#FDF6F0] text-[#1A1A1A] min-h-[85vh] flex flex-col justify-center"
    >
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#FF6B00]/5 blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF9F73]/8 blur-[100px] rounded-full pointer-events-none -z-0" />
      
      {/* Floating Ornaments */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full blur-lg animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* LEFT COLUMN - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1 mt-6 lg:mt-0">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold shadow-lg tracking-wide transform hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>Tentang CV Hazna Berkah</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1A1A1A] tracking-tight leading-[1.1]">
                Perusahaan ekosistem bisnis kuliner{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9F73] block sm:inline">
                  (F&B)
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-xl">
                yang berfokus pada kemitraan usaha minuman melalui brand Java Cafe dan kemitraan waralaba.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-bold text-gray-800">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-orange-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                All-in-One Solution
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-orange-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                Bebas Royalti
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-orange-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                Profit Margin Hingga 70%
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#E05E00] hover:to-[#FF6B00] text-white font-black text-sm tracking-wide shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Konsultasi Kemitraan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('product')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-black text-white font-extrabold text-sm border-2 border-slate-900 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                Katalog Produk
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 border-t border-orange-200/80 w-full">
              <div className="flex -space-x-3 shrink-0">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full ring-3 ring-[#FDF6F0] bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt={`Mitra ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF6B00] stroke-[#FF6B00]" />
                  ))}
                  <span className="text-sm font-bold text-[#1A1A1A] ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-gray-700 font-medium">
                  Dipercaya <strong className="font-bold text-[#1A1A1A]">500+ Mitra</strong> di seluruh Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Enhanced Booth Display */}
          <div 
            className="relative order-1 lg:order-2 flex flex-col items-center justify-center perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Booth Container - PROFESSIONAL & LARGE */}
            <div 
              className={`
                relative w-full max-w-2xl mx-auto 
                rounded-[2.5rem] 
                overflow-hidden 
                shadow-2xl 
                border-[12px] border-white
                bg-gradient-to-br from-orange-50 via-white to-orange-50
                transition-all 
                duration-700 
                ease-out
                ${isHovered ? 'shadow-[0_40px_80px_-12px_rgba(255,107,0,0.4)] scale-[1.02]' : 'shadow-[0_20px_60px_-12px_rgba(255,107,0,0.25)]'}
              `}
              style={{
                transform: `translateY(${scrollY}px) rotateY(${isHovered ? '5deg' : '0deg'})`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Decorative Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#FF6B00] z-20" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-transparent to-orange-50/30">
                <img
                  src={heroImgSrc}
                  alt="Gerobak Booth Java Cafe - CV Hazna Berkah Barokah Indonesia"
                  onError={handleHeroImgError}
                  className={`
                    w-full 
                    h-full 
                    object-contain 
                    object-center
                    transition-transform 
                    duration-700 
                    ease-out
                    ${isHovered ? 'scale-110' : 'scale-105'}
                  `}
                  referrerPolicy="no-referrer"
                />
                
                {/* Professional Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Badge - Top Left */}
                <div 
                  className={`
                    absolute top-6 left-6 
                    bg-white/95 
                    backdrop-blur-xl 
                    px-5 py-3 
                    rounded-2xl 
                    border-2 border-orange-200 
                    shadow-xl 
                    flex items-center gap-3 
                    z-20
                    transform 
                    transition-all 
                    duration-500
                    ${isHovered ? 'translate-x-2 -translate-y-1 scale-105' : ''}
                  `}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#FF8533] flex items-center justify-center shadow-lg">
                    <Store className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#1A1A1A] leading-tight">Concept Booth</p>
                    <p className="text-xs text-gray-600 font-bold">Java Cafe Exclusive</p>
                  </div>
                </div>

                {/* Zoom Indicator */}
                <div 
                  className={`
                    absolute bottom-6 right-6 
                    bg-white/90 
                    backdrop-blur-md 
                    px-4 py-2 
                    rounded-full 
                    shadow-lg 
                    flex items-center gap-2 
                    text-xs font-bold text-gray-700
                    transition-all 
                    duration-500
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                  `}
                >
                  <ZoomIn className="w-4 h-4 text-[#FF6B00]" />
                  <span>Hover untuk detail</span>
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100" />
            </div>

            {/* Floating Stats Cards - Below Booth */}
            <div 
              className={`
                absolute -bottom-8 left-1/2 -translate-x-1/2 
                flex gap-4
                transition-all 
                duration-700
                ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border-2 border-orange-100">
                <p className="text-xs text-gray-600 font-semibold">Ukuran Booth</p>
                <p className="text-sm font-black text-[#FF6B00]">2m x 1.5m</p>
              </div>
              <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border-2 border-orange-100">
                <p className="text-xs text-gray-600 font-semibold">Material</p>
                <p className="text-sm font-black text-[#FF6B00]">Premium</p>
              </div>
            </div>

            {/* Glow Effect Behind Booth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/10 to-[#FF9F73]/10 blur-3xl -z-10 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
};