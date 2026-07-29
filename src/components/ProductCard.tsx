import React from 'react';
import { Coffee, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
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
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group flex flex-col h-full"
    >
      {/* Image Container - Background Putih (Erdigma Style) */}
      <div className="relative w-full aspect-square rounded-t-2xl overflow-hidden bg-white flex items-center justify-center p-6">
        <img
          src={imgSrc}
          alt={`Java Cafe ${product.name} - ${product.categoryLabel}`}
          onError={handleImageError}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Category Badge - Top Left */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md text-white ${
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
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-amber-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Best Seller
            </span>
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              New
            </span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Category Label */}
        <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider mb-1">
          {product.categoryLabel}
        </span>

        {/* Product Name */}
        <h3 className="text-lg font-black text-[#1A1A1A] mb-2 leading-tight group-hover:text-[#FF6B00] transition-colors">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        {/* Price & Margin */}
        <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase">Harga Jual</p>
            <p className="text-base font-black text-[#1A1A1A]">{product.price}</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50">
            <TrendingUp className="w-3 h-3 text-emerald-600" />
            <span className="text-xs font-bold text-emerald-700">{product.profitMargin}</span>
          </div>
        </div>

        {/* Learn More Button - Erdigma Style */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onInquireProduct) {
              onInquireProduct(product.name);
            } else {
              onSelectProduct(product);
            }
          }}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-xs font-bold transition-all duration-300 group/btn"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};