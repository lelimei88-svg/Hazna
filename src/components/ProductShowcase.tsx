import React from 'react';
import { Coffee, Sparkles, ArrowRight } from 'lucide-react';
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

  const ProductSection = ({ product, index, isEven }: { product: Product; index: number; isEven: boolean }) => {
    const isCoffee = product.category === 'coffee';
    
    return (
      <div className={`w-full py-12 ${isEven ? 'bg-white' : 'bg-[#FDF6F0]'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
            
            {/* Image Side */}
            <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[5/4] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Badges */}
                {(product.isBestSeller || product.isNew) && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow uppercase tracking-wider">
                    {product.isBestSeller ? 'Best Seller' : 'New Arrival'}
                  </div>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] font-bold uppercase tracking-wider">
                  {isCoffee ? <Coffee className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                  {product.categoryLabel}
                </div>

                <h3 className="text-3xl font-black text-[#1A1A1A] leading-tight">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.longDescription || product.shortDescription}
                </p>

                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="pt-2">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Bahan Utama</p>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ing, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-white border border-gray-100 text-[11px] font-medium text-gray-600">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => onInquireProduct(product.name)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold text-xs transition-all duration-300 mt-4"
                >
                  Lihat Detail
                  <ArrowRight className="w-3 h-3" />
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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#FDF6F0] to-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-black text-[#1A1A1A] leading-tight">
            Menu Minuman <span className="text-[#FF6B00]">Produk Java Cafe</span>
          </h1>
        </div>
      </div>

      {/* Coffee Series Header */}
      <div className="bg-white py-8 border-b border-orange-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center">
              <Coffee className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-[#1A1A1A]">Coffee Series</h2>
          </div>
        </div>
      </div>

      {coffeeProducts.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} isEven={index % 2 === 0} />
      ))}

      {/* Non-Coffee Series Header */}
      <div className="bg-[#FDF6F0] py-8 border-b border-orange-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-[#1A1A1A]">Non-Coffee Series</h2>
          </div>
        </div>
      </div>

      {nonCoffeeProducts.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} isEven={index % 2 === 0} />
      ))}
    </div>
  );
};