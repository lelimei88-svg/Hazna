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
              className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-6 sm:p-7 border border-red-400/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
            >
              {/* Overlay pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 pointer-events-none" />

              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-125 transition-transform pointer-events-none" />

              <div className="relative z-10">
                {/* Product Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 drop-shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/95 text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Best Seller</span>
                  </div>
                </div>

                {/* Text - ganti jadi putih biar kontras dengan background merah */}
                <h3 className="text-xl font-black text-white mb-2 leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                <button
                  onClick={() => {
                    onNavigate("product");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-white hover:bg-gray-100 text-red-600 text-xs font-bold transition-all shadow-md cursor-pointer group/btn"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
