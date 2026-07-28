import React from 'react';
import { Coffee, Sparkles, TrendingUp, ChevronRight } from 'lucide-react';
import { DrinkProduct } from '../types';

interface ProductCardProps {
  product: DrinkProduct;
  onSelectProduct: (product: DrinkProduct) => void;
  onInquireProduct?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onInquireProduct,
}) => {
  const isCoffee = product.category === 'coffee';
  const [imgSrc, setImgSrc] = React.useState<string>(product.imageSrc || product.image);

  const handleImageError = () => {
    if (imgSrc !== product.image) {
      setImgSrc(product.image);
    }
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="bg-white/95 rounded-2xl p-4 shadow-lg hover:shadow-xl border border-orange-100/80 hover:border-orange-300/80 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] cursor-pointer group flex flex-col justify-between h-full relative overflow-hidden"
    >
      {/* Top Image Container - Aspect Square */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 mb-3.5 border border-orange-100/50">
        <img
          src={imgSrc}
          alt={`Java Cafe ${product.name} - ${product.categoryLabel}`}
          onError={handleImageError}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Category Badge - Top Left */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md backdrop-blur-xs text-white ${
              isCoffee ? 'bg-[#FF6B00]' : 'bg-emerald-600'
            }`}
          >
            {isCoffee ? (
              <Coffee className="w-3 h-3 shrink-0" />
            ) : (
              <Sparkles className="w-3 h-3 shrink-0" />
            )}
            <span>{isCoffee ? 'Coffee' : 'Non-Coffee'}</span>
          </span>
        </div>

        {/* Best Seller / New Badge - Top Right */}
        {product.isBestSeller && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="bg-amber-500/95 backdrop-blur-xs text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              Best Seller
            </span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Header & Aesthetic Icon */}
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[11px] font-black text-[#FF6B00] uppercase tracking-wider flex items-center gap-1">
              {isCoffee ? (
                <Coffee className="w-3 h-3 text-[#FF6B00]" />
              ) : (
                <Sparkles className="w-3 h-3 text-emerald-600" />
              )}
              {product.categoryLabel}
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 flex items-center gap-0.5">
              <TrendingUp className="w-2.5 h-2.5" />
              {product.profitMargin}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-base font-extrabold text-[#1A1A1A] group-hover:text-[#FF6B00] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-gray-600 font-medium leading-relaxed mt-1 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Bottom Price & Action Footer */}
        <div className="pt-2 border-t border-orange-100/80 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">Harga Jual</span>
            <span className="text-sm font-black text-[#1A1A1A]">{product.price}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onInquireProduct) {
                onInquireProduct(product.name);
              } else {
                onSelectProduct(product);
              }
            }}
            className="px-3 py-1.5 rounded-full bg-slate-900 group-hover:bg-[#FF6B00] text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
          >
            <span>Pesan</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
