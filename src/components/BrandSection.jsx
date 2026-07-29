import React from 'react';
import machiroImg from '../assets/images/LogoMachiro.png';
import rumaImg from '../assets/images/RUMAlogo.jpg';
import javaImg from '../assets/images/logoJavaCafe.jpg';
// Data logo brand yang dikelola
const managedBrands = [
  { name: 'Machiro', src: machiroImg, width: 'w-24' },
  { name: 'Ruma', src: rumaImg, width: 'w-20' },
  { name: 'Javacafe', src: javaImg, width: 'w-20' },
];

export default function BrandSection() {
  return (
    <section className="w-full bg-white py-10 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-widest">
          Brand yang Kami Kelola
        </p>
        
        {/* Container Flexbox untuk logo */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {managedBrands.map((brand) => (
            <div 
              key={brand.name} 
              className={`relative ${brand.width} opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300`}
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}