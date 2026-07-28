import React from 'react';
import { Check, Sparkles, ShoppingCart, Clock, Store, Gift } from 'lucide-react';
import { FRANCHISE_PACKAGES } from '../data/franchiseData';

interface FranchisePackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const FranchisePackages: React.FC<FranchisePackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FFFBF7] via-[#FAF3EC] to-[#FFFBF7]">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF9F73]/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-amber-900/10 text-xs font-bold text-[#4A3B35] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9F73]" />
            Paket Kemitraan CV Hazna Berkah Barokah
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A3B35] tracking-tight">
            Pilihan Paket Kemitraan{' '}
            <span className="bg-gradient-to-r from-amber-800 to-[#FF9F73] bg-clip-text text-transparent">
              Siap Buka Siap Cuan
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A3B35]/80 font-normal leading-relaxed">
            Pilih paket investasi sesuai kapasitas ruang dan anggaran Anda. Semua paket sudah termasuk peralatan lengkap,
            bahan baku awal, serta bebas biaya royalti selamanya.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FRANCHISE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 border ${
                pkg.popular
                  ? 'border-[#FF9F73] shadow-xl shadow-orange-500/15 ring-2 ring-[#FF9F73]/50 scale-[1.02] bg-white/90'
                  : 'border-white/80 hover:border-[#FF9F73]/50 shadow-md'
              }`}
            >
              {/* Popular Tag */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-peach-gradient text-[#4A3B35] font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md border border-white flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Best Seller Pemula
                </div>
              )}

              <div className="space-y-6">
                
                {/* Header Info */}
                <div>
                  <span className="text-xs font-extrabold text-[#FF9F73] uppercase tracking-wider block mb-1">
                    {pkg.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#4A3B35]">{pkg.name}</h3>
                  <p className="text-xs text-[#4A3B35]/75 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-white/80 border border-amber-900/10 shadow-xs">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#4A3B35]">{pkg.priceFormatted}</span>
                    <span className="text-xs text-[#4A3B35]/50 line-through">{pkg.originalPrice}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-[#4A3B35]/80 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FF9F73]" /> Est. BEP: <strong>{pkg.estimateRoi}</strong>
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Diskon Promo
                    </span>
                  </div>
                </div>

                {/* Target Space */}
                <div className="flex items-start gap-2 text-xs font-medium text-[#4A3B35]/85 bg-white/50 p-3 rounded-xl border border-white">
                  <Store className="w-4 h-4 text-[#FF9F73] shrink-0 mt-0.5" />
                  <span>Kebutuhan Area: <strong>{pkg.targetSpace}</strong></span>
                </div>

                {/* Features list */}
                <div>
                  <h4 className="text-xs font-extrabold text-[#4A3B35] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-[#FF9F73]" />
                    Kelengkapan Yang Didapat:
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4A3B35]/90 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-full font-extrabold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-peach-gradient text-[#4A3B35] shadow-orange-500/25 hover:shadow-xl hover:scale-[1.02]'
                      : 'bg-white/90 text-[#4A3B35] border border-amber-900/15 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Ambil {pkg.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Promo Guarantee Footer Strip */}
        <div className="mt-12 text-center bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xs max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#4A3B35] font-semibold">
            🎁 <strong className="text-amber-900">Bonus Promo Terbatas Bulan Ini:</strong> Gratis Ongkos Kirim Jabodetabek & Jawa Timur + Lisensi Aplikasi Kasir POS Digital selama 1 Tahun.
          </p>
        </div>

      </div>
    </section>
  );
};
