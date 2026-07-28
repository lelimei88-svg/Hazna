import React from 'react';
import { Target, Rocket, Compass, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision-mission" className="py-16 sm:py-20 relative overflow-hidden bg-[#FDF6F0] border-y border-orange-100/60 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header - Centered & Clean */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Visi & Misi Perusahaan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Komitmen Operasional <span className="text-[#FF6B00]">Hazna Berkah</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Pondasi dan komitmen operasional CV Hazna Berkah Barokah Indonesia dalam membangun bisnis berkelanjutan.
          </p>
        </div>

        {/* Vision & Mission Cards Grid - Directly on Cream Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">
          
          {/* Card Visi */}
          <div className="bg-[#FDF6F0] rounded-3xl p-7 sm:p-8 border border-orange-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-125 transition-transform pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#FF6B00] flex items-center justify-center font-black mb-5 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider block mb-1">
                Arah Masa Depan
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-4">Visi Perusahaan</h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
                "Menjadi entitas penyedia ekosistem bisnis kuliner terdepan, terpercaya, dan berkelanjutan di Indonesia yang secara konsisten melahirkan wirausahawan mandiri dan berdaya saing tinggi."
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-orange-200/80 flex items-center gap-2 text-xs font-bold text-gray-700">
              <Award className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>Standar Operasional Profesional & Legalitas Terjamin</span>
            </div>
          </div>

          {/* Card Misi */}
          <div className="bg-[#FDF6F0] rounded-3xl p-7 sm:p-8 border border-orange-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-125 transition-transform pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00] text-white flex items-center justify-center font-black mb-5 shadow-xs">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider block mb-1">
                Langkah Eksekusi
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-4">Misi Strategis</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Menyediakan sarana operasional & booth container berstandar kualitas tinggi dan higienis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Menghadirkan sistem operasional terintegrasi yang mudah dijalankan dan teruji secara nasional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Memberikan pendampingan manajemen berkelanjutan & dukungan promosi strategis bagi mitra.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Mendorong pertumbuhan ekonomi masyarakat melalui skema kemitraan modal terjangkau.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-orange-200/80 flex items-center gap-2 text-xs font-bold text-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>Dukungan Ekosistem Berkelanjutan</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

