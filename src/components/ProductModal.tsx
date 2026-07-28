import React from 'react';
import { X, Sparkles, TrendingUp, Check, ShoppingBag, Coffee } from 'lucide-react';
import { DrinkProduct } from '../types';

interface ProductModalProps {
  product: DrinkProduct | null;
  onClose: () => void;
  onInquireProduct: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onInquireProduct,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FDF6F0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-orange-200/90 space-y-6 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-[#FDF6F0] text-[#1A1A1A] hover:bg-orange-100 transition-all cursor-pointer border border-orange-200 shadow-xs"
          aria-label="Close detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Drink Image */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden aspect-square shadow-md border border-orange-200/60">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {product.isBestSeller && (
              <span className="absolute top-3 left-3 bg-[#FF6B00] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Best Seller
              </span>
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-black text-[#FF6B00] uppercase tracking-wider block mb-1">
                {product.categoryLabel}
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A]">{product.name}</h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              {product.fullDescription}
            </p>

            {/* Financial Metrics Pill */}
            <div className="grid grid-cols-3 gap-2 bg-[#FDF6F0] p-3 rounded-2xl border border-orange-200/80 shadow-2xs text-center">
              <div>
                <span className="text-[10px] text-gray-500 font-extrabold block uppercase">Harga Jual</span>
                <span className="text-sm font-black text-[#1A1A1A]">{product.price}</span>
              </div>
              <div className="border-x border-orange-200/80">
                <span className="text-[10px] text-gray-500 font-extrabold block uppercase">Est. HPP</span>
                <span className="text-sm font-black text-[#1A1A1A]">{product.hpp}</span>
              </div>
              <div>
                <span className="text-[10px] text-emerald-700 font-extrabold block uppercase">Margin</span>
                <span className="text-sm font-black text-emerald-700 flex items-center justify-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {product.profitMargin}
                </span>
              </div>
            </div>

            {/* Flavor Notes */}
            <div>
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider mb-2 flex items-center gap-1">
                <Coffee className="w-3.5 h-3.5 text-[#FF6B00]" />
                Komposisi & Flavor Notes
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.flavorNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-orange-100/80 text-[#1A1A1A] text-xs font-bold border border-orange-200/80"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onInquireProduct(product.name);
                }}
                className="w-full py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pesan Bahan / Konsultasi Menu Ini</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
