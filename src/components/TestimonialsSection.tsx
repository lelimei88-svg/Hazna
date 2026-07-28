import React from 'react';
import { Star, Quote, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/franchiseData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header - Centered Layout */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
            <Quote className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Testimoni Kemitraan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Kisah Sukses <span className="text-[#FF6B00]">Mitra Hazna</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Dengarkan langsung cerita nyata dari mitra pengusaha yang telah menikmati hasil bisnis waralaba CV Hazna Berkah Barokah Indonesia.
          </p>
        </div>

        {/* Testimonials 3-Column Grid - Seamless on Cream */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FDF6F0] rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative border border-orange-200/80 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6B00] stroke-[#FF6B00]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200/80 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Terverifikasi
                  </span>
                </div>

                {/* Revenue Tag */}
                <div className="p-3 rounded-2xl bg-[#FDF6F0] border border-orange-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-600">Rata-Rata Omset:</span>
                  <span className="text-xs sm:text-sm font-black text-[#1A1A1A] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    {t.monthlyRevenue}
                  </span>
                </div>

                {/* Quote directly on Cream */}
                <p className="text-xs sm:text-sm text-gray-800 italic leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 mt-5 border-t border-orange-200/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#FF6B00]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-black text-[#1A1A1A]">{t.name}</h4>
                  <p className="text-xs text-gray-600 flex items-center gap-1 mt-0.5 font-medium">
                    <MapPin className="w-3 h-3 text-[#FF6B00]" /> {t.city} • <strong className="font-bold text-gray-800">{t.outletName}</strong>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

