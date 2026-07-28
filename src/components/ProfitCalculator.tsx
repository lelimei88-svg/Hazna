import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface ProfitCalculatorProps {
  onConsultResult: (cups: number, price: number, netProfit: number) => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onConsultResult }) => {
  const [cupsPerDay, setCupsPerDay] = useState<number>(80);
  const [pricePerCup, setPricePerCup] = useState<number>(15000);

  // Financial Formulas
  const dailyRevenue = cupsPerDay * pricePerCup;
  const monthlyRevenue = dailyRevenue * 30;
  
  // HPP & Operational costs roughly 35% of revenue
  const hppPercentage = 0.35;
  const monthlyHpp = monthlyRevenue * hppPercentage;
  const monthlyNetProfit = monthlyRevenue - monthlyHpp;

  // Portable Package Investment = Rp 4,800,000
  const portablePrice = 4800000;
  const daysToBep = Math.ceil(portablePrice / (dailyRevenue * (1 - hppPercentage)));
  const monthsToBep = (daysToBep / 30).toFixed(1);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-amber-900/10 text-xs font-bold text-[#4A3B35] shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#FF9F73]" />
            Simulasi Keuntungan Mitra
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A3B35] tracking-tight">
            Kalkulator Estimasi{' '}
            <span className="bg-gradient-to-r from-amber-800 to-[#FF9F73] bg-clip-text text-transparent">
              Cuan & Balik Modal
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A3B35]/80 font-normal leading-relaxed">
            Hitung sendiri estimasi pendapatan harian, laba bersih bulanan, dan kecepatan balik modal outlet Javacafe Anda.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/90 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Cups per day */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-[#4A3B35]">
                    Target Penjualan per Hari
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-peach-gradient text-[#4A3B35] text-sm font-black shadow-xs">
                    {cupsPerDay} Cup / Hari
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={300}
                  step={5}
                  value={cupsPerDay}
                  onChange={(e) => setCupsPerDay(Number(e.target.value))}
                  className="w-full h-2.5 bg-amber-900/10 rounded-lg appearance-none cursor-pointer accent-[#FF9F73]"
                />
                <div className="flex justify-between text-[10px] text-[#4A3B35]/60 font-semibold">
                  <span>30 Cup (Min. Standar)</span>
                  <span>150 Cup (Ramai)</span>
                  <span>300 Cup (Event/Rame Banget)</span>
                </div>
              </div>

              {/* Slider 2: Average Price per cup */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-[#4A3B35]">
                    Rata-Rata Harga Jual per Cup
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-white text-[#4A3B35] border border-amber-900/20 text-sm font-black shadow-xs">
                    {formatRupiah(pricePerCup)}
                  </span>
                </div>
                <input
                  type="range"
                  min={12000}
                  max={22000}
                  step={1000}
                  value={pricePerCup}
                  onChange={(e) => setPricePerCup(Number(e.target.value))}
                  className="w-full h-2.5 bg-amber-900/10 rounded-lg appearance-none cursor-pointer accent-[#FF9F73]"
                />
                <div className="flex justify-between text-[10px] text-[#4A3B35]/60 font-semibold">
                  <span>Rp 12.000</span>
                  <span>Rp 15.000 (Rata-rata)</span>
                  <span>Rp 22.000</span>
                </div>
              </div>

              {/* Explanatory note */}
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-900/10 text-xs text-[#4A3B35]/80 space-y-1">
                <p className="font-bold text-[#4A3B35] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9F73]" /> Catatan Perhitungan:
                </p>
                <p>
                  Asumsi operasional 30 hari/bulan dengan rata-rata HPP & bahan baku 35%. Sisanya 65% menjadi Keuntungan Bersih Mitra (Tanpa Bagi Hasil).
                </p>
              </div>

            </div>

            {/* Right Output Results Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#4A3B35] to-amber-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9F73]/20 blur-2xl rounded-full pointer-events-none" />

              <div className="border-b border-white/10 pb-4">
                <span className="text-[11px] font-bold text-[#FFB89C] uppercase tracking-wider block">
                  Proyeksi Keuntungan Bersih
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  {formatRupiah(monthlyNetProfit)}
                  <span className="text-xs font-normal text-white/70 block sm:inline sm:ml-2">/ Bulan</span>
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-white/80">
                  <span>Omset Harian:</span>
                  <strong className="text-white font-bold">{formatRupiah(dailyRevenue)}</strong>
                </div>

                <div className="flex justify-between items-center text-white/80">
                  <span>Omset Kotor Bulanan:</span>
                  <strong className="text-white font-bold">{formatRupiah(monthlyRevenue)}</strong>
                </div>

                <div className="flex justify-between items-center text-white/80">
                  <span>Perkiraan HPP (35%):</span>
                  <span className="text-amber-200 font-medium">{formatRupiah(monthlyHpp)}</span>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="text-amber-300 font-bold flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> Est. Balik Modal (BEP):
                  </span>
                  <span className="text-sm font-extrabold bg-[#FF9F73] text-[#4A3B35] px-2.5 py-0.5 rounded-lg">
                    ~{monthsToBep} Bulan ({daysToBep} Hari)
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onConsultResult(cupsPerDay, pricePerCup, monthlyNetProfit)}
                className="w-full py-3.5 rounded-full bg-peach-gradient text-[#4A3B35] font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Konsultasikan Hasil Ini di WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
