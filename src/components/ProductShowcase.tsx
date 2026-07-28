import React, { useState } from 'react';
import { Coffee, Sparkles, Award, Layers } from 'lucide-react';
import { PRODUCTS } from '../data/franchiseData';
import { DrinkProduct } from '../types';
import { ProductModal } from './ProductModal';
import { ProductCard } from './ProductCard';

interface ProductShowcaseProps {
  onInquireProduct: (productName: string) => void;
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onInquireProduct }) => {
  const [activeModalProduct, setActiveModalProduct] = useState<DrinkProduct | null>(null);

  const coffeeProducts = PRODUCTS.filter((p) => p.category === 'coffee');
  const nonCoffeeProducts = PRODUCTS.filter((p) => p.category === 'non-coffee');

  return (
    <section id="products-catalog" className="py-12 sm:py-16 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60 flex flex-col justify-center items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF6B00]/08 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
            <Coffee className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Katalog Varian Produk Java Cafe</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Menu Minuman Bintang Lima <span className="text-[#FF6B00]">Margin 60% - 70%</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            CV Hazna Berkah Barokah Indonesia menghadirkan 8 pilihan varian menu terlaris Java Cafe dengan racikan kualitas kafe premium dan HPP super hemat.
          </p>
        </div>

        {/* Section 1: Coffee Series */}
        <div className="w-full max-w-6xl mx-auto mb-12 space-y-6">
          <div className="flex items-center justify-between border-b border-orange-200/80 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shadow-xs font-bold">
                <Coffee className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A]">Coffee Series</h3>
                <p className="text-xs text-gray-600 font-medium">Formulasi espresso mantap dengan karakter rasa lembut & kaya aroma</p>
              </div>
            </div>
            <span className="text-xs font-black text-[#FF6B00] bg-orange-100 px-3 py-1 rounded-full">
              4 Varian Menu
            </span>
          </div>

          {/* 4-Column Grid for Coffee Series */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {coffeeProducts.map((drink) => (
              <ProductCard
                key={drink.id}
                product={drink}
                onSelectProduct={(p) => setActiveModalProduct(p)}
                onInquireProduct={onInquireProduct}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Non-Coffee Series */}
        <div className="w-full max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-orange-200/80 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A]">Non-Coffee Series</h3>
                <p className="text-xs text-gray-600 font-medium">Kesegaran rasa cokelat, matcha Jepang otentik, dan sari buah alami</p>
              </div>
            </div>
            <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              4 Varian Menu
            </span>
          </div>

          {/* 4-Column Grid for Non-Coffee Series */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {nonCoffeeProducts.map((drink) => (
              <ProductCard
                key={drink.id}
                product={drink}
                onSelectProduct={(p) => setActiveModalProduct(p)}
                onInquireProduct={onInquireProduct}
              />
            ))}
          </div>
        </div>

        {/* Product Detail Modal */}
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onInquireProduct={onInquireProduct}
        />

      </div>
    </section>
  );
};



