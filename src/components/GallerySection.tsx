import React, { useState } from 'react';
import { Camera, Eye, X, Sparkles, Award } from 'lucide-react';
import { GALLERY_ITEMS, IMAGES } from '../data/franchiseData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
}

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['Semua', 'Outlet', 'Produk', 'Kemitraan', 'Event'];

  const filteredItems = selectedCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-12 sm:py-16 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header - Centered Layout */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-8 sm:mb-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
            <Camera className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Galeri Dokumentasi Javacafe</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Suasana Outlet & <span className="text-[#FF6B00]">Dokumentasi Mitra</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Intip dokumentasi estetika outlet Javacafe, kesegaran racikan minuman, serta kemeriahan pembukaan gerai mitra di berbagai kota.
          </p>
        </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-10 w-full max-w-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-md shadow-orange-500/20 scale-105'
                    : 'bg-[#FDF6F0] text-gray-800 border-orange-200/80 hover:border-[#FF6B00] hover:text-[#FF6B00]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="bg-[#FDF6F0] rounded-3xl overflow-hidden relative group cursor-pointer border border-orange-200/80 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#FDF6F0] drop-shadow-sm border border-orange-200/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#FF6B00] text-white px-2.5 py-0.5 rounded-lg w-max mb-2 shadow-xs">
                      {item.category}
                    </span>
                    <h3 className="text-base font-black text-white leading-tight">{item.title}</h3>
                    <p className="text-xs text-gray-200 line-clamp-2 mt-1 font-medium">{item.caption}</p>
                  </div>

                  <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-slate-900/90 backdrop-blur-md text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Eye className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {activeItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
              onClick={() => setActiveItem(null)}
            >
              <div
                className="bg-[#FDF6F0] rounded-3xl max-w-2xl w-full p-5 sm:p-6 relative shadow-2xl border border-orange-200/80 space-y-4 my-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-white shadow-md hover:scale-105 transition-all cursor-pointer z-10 border border-slate-700"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="rounded-2xl overflow-hidden aspect-16/9 bg-stone-100 border border-orange-200/80 shadow-inner">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider block">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl font-black text-[#1A1A1A]">{activeItem.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">{activeItem.caption}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
  );
};


