import React from "react";
import { ChevronRight, Sparkles, Coffee } from "lucide-react";
import strawberryMatchaImg from "../assets/images/stawberry_matcha_latte-removebg-preview.jpg";
import berryAmericanoImg from "../assets/images/berry_americano-removebg-preview.jpg";
import MacthaChocoImg from "../assets/images/mactha_choco-removebg-preview.jpg";

interface HomeProductPreviewProps {
  onNavigate: (
    page: "home" | "product" | "career" | "gallery" | "contact",

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
  {
    id: 'Mactha Choco',
    name: 'Mactha Choco',
    description: 'Cita rasa cokelat malt legendaris yang disajikan dengan sentuhan modern. Rasanya yang manis dan menenangkan menjadi favorit sepanjang masa bagi semua kalangan.',
    image: MacthaChocoImg, 
  },
];

export const HomeProductPreview: React.FC<HomeProductPreviewProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2; // Tampilkan 2 produk sekaligus
  const maxIndex = MENU_ITEMS.length - itemsPerView;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="our-product-preview" className="py-16 sm:py-20 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm">
            <Coffee className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Our Product</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Menu Minuman <span className="text-[#FF6B00]">Terbaru</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Rasakan sensasi otentik racikan minuman khas Java Cafe. Setiap tegukan adalah perpaduan sempurna dari bahan pilihan.
          </p>
        </div>

        {/* ✅ Carousel Container dengan Arrow */}
        <div className="relative flex items-center justify-center">
          
          {/* Arrow Kiri */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 sm:-left-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Product Cards */}
          <div className="flex gap-6 overflow-hidden w-full max-w-4xl">
            {MENU_ITEMS.slice(currentIndex, currentIndex + itemsPerView).map((item) => (
              <div
                key={item.id}
                className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                {/* Image Container dengan Background Merah */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center p-6">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  </div>
                  
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {item.badge && (
                    <div className="absolute top-3 right-3 bg-white/95 text-red-600 text-[9px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1 z-20">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>{item.badge}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4 px-2">
                  {item.description}
                </p>

                <button
                  onClick={() => {
                    onNavigate('product');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-xs font-semibold transition-all cursor-pointer group/btn"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Arrow Kanan */}
          <button
            onClick={goToNext}
            className="absolute right-0 sm:-right-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:scale-110 cursor-pointer"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? 'bg-red-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
