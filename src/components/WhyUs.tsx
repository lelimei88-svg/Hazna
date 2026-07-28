import React from 'react';
import { Wallet, Zap, Heart, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { BENEFITS } from '../data/franchiseData';

export const WhyUs: React.FC = () => {
  // Icon mapper helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wallet':
        return <Wallet className="w-6 h-6 text-[#FF6B00]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#FF6B00]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#FF6B00]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />;
      default:
        return <Wallet className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60 flex flex-col justify-center items-center">
      {/* Background soft ambient shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF9F73]/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header - Centered Layout */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Keunggulan Ekosistem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Mengapa Memilih Kemitraan{' '}
            <span className="text-[#FF6B00]">
              Hazna Berkah?
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Kami menghadirkan ekosistem bisnis minuman terstruktur yang dirancang khusus untuk memastikan mitra mampu beroperasi dengan mudah, efisien, dan menguntungkan.
          </p>
        </div>

        {/* 4-Column Grid Layout - Seamless on Cream Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
          {BENEFITS.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#FDF6F0] rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group border border-orange-200/80 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Top Icon Container */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/90 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="text-xs font-black text-gray-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A] pt-1">
                  {item.title}
                </h3>

                {/* Description - Directly on Cream */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom Highlight Pill */}
              <div className="mt-6 pt-4 border-t border-orange-200/80 flex items-center gap-2 text-xs font-bold text-gray-800">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{item.highlightText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Banner Strip - Seamless on Cream Canvas */}
        <div className="mt-10 sm:mt-12 w-full max-w-6xl rounded-3xl p-6 sm:p-8 border border-orange-200/90 bg-[#FDF6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-100/90 flex items-center justify-center text-[#FF6B00] shrink-0 font-bold text-xl">
              ☕
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-[#1A1A1A]">
                Formula Resep Berstandar Barista Profesional
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                Setiap varian bubuk dan sirup disesuaikan dengan lidah masyarakat Indonesia dengan harga jual ramah kantong.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 shrink-0 justify-center">
            <div className="text-center md:text-right">
              <span className="text-2xl font-black text-[#FF6B00] block">65% - 70%</span>
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Rata-Rata Margin Keuntungan</span>
            </div>
            <div className="text-center md:text-right">
              <span className="text-2xl font-black text-[#1A1A1A] block">0%</span>
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Biaya Bagi Hasil (Royalty)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

