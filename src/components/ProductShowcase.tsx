import React from 'react';
import { Coffee, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../data/franchiseData';

interface ProductShowcaseProps {
  onInquireProduct: (productName: string) => void;
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
}

interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: string;
  profitMargin: string;
  image: string;
  shortDescription: string;
  longDescription?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  hpp?: string;
  ingredients?: string[];
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onInquireProduct }) => {
  const coffeeProducts = PRODUCTS.filter((p) => p.category === 'coffee');
  const nonCoffeeProducts = PRODUCTS.filter((p) => p.category === 'non-coffee');

  // Single Product Section - Erdigma Style
  const ProductSection = ({ product, index, isEven }: { product: Product; index: number; isEven: boolean }) => {
    const isCoffee = product.category === 'coffee';
    
    return (
      <div className={`w-full py-20 ${isEven ? 'bg-white' : 'bg-[#FDF6F0]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
            
            {/* Image Side */}
            <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge */}
                {product.isBestSeller && (
                  <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Best Seller
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    New
                  </div>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="space-y-6">
                {/* Category Label - Erdigma Style */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
                  {isCoffee ? <Coffee className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  {product.categoryLabel}
                </div>

                {/* Title - Large & Bold */}
                <h3 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight">
                  {product.name}
                </h3>

                {/* Description - Long Paragraph */}
                <p className="text-base text-gray-700 leading-relaxed">
                  {product.longDescription || product.shortDescription}
                </p>

                {/* Price & Margin */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Harga Jual</p>
                    <p className="text-3xl font-black text-[#1A1A1A]">{product.price}</p>
                  </div>
                  <div className="h-14 w-px bg-gray-300 hidden sm:block" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Margin Profit</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                      <p className="text-3xl font-black text-emerald-600">{product.profitMargin}</p>
                    </div>
                  </div>
                  {product.hpp && (
                    <>
                      <div className="h-14 w-px bg-gray-300 hidden sm:block" />
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">HPP</p>
                        <p className="text-3xl font-black text-[#1A1A1A]">{product.hpp}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Ingredients */}
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="pt-4">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Bahan Utama</p>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ing, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learn More Button - Erdigma Style */}
                <button
                  onClick={() => onInquireProduct(product.name)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold text-sm transition-all duration-300 group mt-4"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section - Product Overview */}
      <div className="bg-gradient-to-br from-[#FDF6F0] to-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs mb-6">
            <Coffee className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Katalog Varian Produk Java Cafe</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-6 leading-tight">
            Menu Minuman <span className="text-[#FF6B00]">Bintang Lima</span>
          </h1>
          <p className="text-2xl text-[#FF6B00] font-bold mb-6">
            Margin 60% – 70%
          </p>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            CV Hazna Berkah Indonesia menghadirkan 8 pilihan varian menu terlaris Java Cafe dengan racikan kualitas kafe premium dan HPP super hemat.
          </p>
        </div>
      </div>

      {/* Coffee Series Header */}
      <div className="bg-white py-12 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-[#1A1A1A]">Coffee Series</h2>
                <p className="text-sm text-gray-600 font-medium">Formulasi espresso mantap dengan karakter rasa lembut & kaya aroma</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#FF6B00] text-sm font-bold">
              {coffeeProducts.length} Varian Menu
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Products - Alternating Layout */}
      {coffeeProducts.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} isEven={index % 2 === 0} />
      ))}

      {/* Non-Coffee Series Header */}
      <div className="bg-[#FDF6F0] py-12 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-[#1A1A1A]">Non-Coffee Series</h2>
                <p className="text-sm text-gray-600 font-medium">Kesegaran rasa cokelat, matcha Jepang otentik, dan sari buah alami</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
              {nonCoffeeProducts.length} Varian Menu
            </div>
          </div>
        </div>
      </div>

      {/* Non-Coffee Products - Alternating Layout */}
      {nonCoffeeProducts.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} isEven={index % 2 === 0} />
      ))}
    </div>
  );
};