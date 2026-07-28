import React from "react";
import { ChevronRight, Sparkles, Coffee } from "lucide-react";
import strawberryMatchaImg from "../assets/images/stawberry_matcha_latte.jpg";
// ✅ Sementara pakai gambar yang sama untuk berry americano
// Nanti ganti setelah file berry_americano.jpg ditambahkan ke folder assets
import berryAmericanoImg from "../assets/images/berry_americano.jpg";

interface HomeProductPreviewProps {
  onNavigate: (
    page: "home" | "product" | "career" | "gallery" | "contact",
  ) => void;
}

interface BeverageMenu {
  id: string;
  name: string;
  description: string;
  image: string;
}

const MENU_ITEMS: BeverageMenu[] = [
  {
    id: "Strawberry Matcha Latte",
    name: "Strawberry Matcha Latte",
    description:
      "Harmoni unik antara bubuk matcha premium yang autentik dengan segarnya selai stroberi manis, menciptakan kombinasi rasa yang lembut, menyegarkan, dan estetik.",
    image: strawberryMatchaImg,
  },
  {
    id: "Berry Americano",
    name: "Berry Americano",
    description:
      "Inovasi kopi Americano yang kuat dengan sentuhan sirup beri yang segar, memberikan sensasi rasa buah yang berpadu sempurna dengan aroma kopi yang tajam.",
    image: berryAmericanoImg,
  },
];

// ✅ Export dari file ini, JANGAN import dari file lain
export const FEATURED_ITEMS = MENU_ITEMS.slice(0, 2);

export const HomeProductPreview: React.FC<HomeProductPreviewProps> = ({
  onNavigate,
}) => {
  return (
    <section
      id="our-product-preview"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60 flex flex-col justify-center items-center"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm">
            <Coffee className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Our Product</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Menu Minuman <span className="text-[#FF6B00]">Terbaru</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Rasakan sensasi otentik racikan minuman khas Java Cafe. Setiap
            tegukan adalah perpaduan sempurna dari bahan pilihan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl w-full mx-auto">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              // Card tetap cream - sama seperti Erdigma
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              {/* ✅ Container gambar dengan background MERAH (seperti Erdigma) */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center p-6">
                {/* Optional: decorative circle seperti Erdigma */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  // Gambar produk di atas background merah
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Best Seller - posisi di atas gambar */}
                <div className="absolute top-3 right-3 bg-white/95 text-red-600 text-[9px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1 z-20">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Best Seller</span>
                </div>
              </div>

              {/* Teks di area putih card - center seperti Erdigma */}
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {item.name}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed mb-4 px-2">
                {item.description}
              </p>

              <button
                onClick={() => {
                  onNavigate("product");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-xs font-semibold transition-all cursor-pointer group/btn"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
