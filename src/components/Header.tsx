import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ChevronRight, Globe } from 'lucide-react';

interface HeaderProps {
  activePage: 'home' | 'product' | 'career' | 'gallery' | 'contact';
  onNavigate: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
  onOpenWhatsApp: (customMsg?: string) => void;
  onOpenPortal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate, onOpenPortal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'id' | 'en'>('id'); // State untuk bahasa

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  const navLinks: Array<{ name: string; key: 'home' | 'product' | 'career' | 'gallery' | 'contact' }> = [
    { name: 'Home', key: 'home' },
    { name: 'Product', key: 'product' },
    { name: 'Career', key: 'career' },
    { name: 'Gallery', key: 'gallery' },
    { name: 'Contact', key: 'contact' },
  ];

  const handleNavClick = (key: 'home' | 'product' | 'career' | 'gallery' | 'contact') => {
    setMobileMenuOpen(false);
    onNavigate(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDF6F0]/90 backdrop-blur-xl border-b border-orange-100/80 shadow-xs py-3'
          : 'bg-[#FDF6F0]/70 backdrop-blur-md py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Hazna Berkah */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group cursor-pointer text-left"
          >
            <div className="w-10 h-10 group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="38" height="38" rx="6" fill="#1A1A1A" />
                <rect x="54" y="8" width="38" height="38" rx="6" fill="#FF6B00" />
                <rect x="8" y="54" width="38" height="38" rx="6" fill="#1A1A1A" />
                <path d="M54 54 H92 V74 C92 83.9411 83.9411 92 74 92 H54 V54 Z" fill="#1A1A1A" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none flex items-center gap-1.5">
                <span className="text-[#1A1A1A] font-black">CV</span>
                <span className="text-[#FF6B00]">Hazna</span>
              </span>
              <span className="text-[10px] font-bold text-gray-700 tracking-widest uppercase mt-1">
                Berkah Indonesia
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-gray-200 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activePage === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B00] text-white shadow-xs'
                      : 'text-[#1A1A1A] hover:text-[#FF6B00] hover:bg-gray-100/80'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher & Partnership CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Tombol Ganti Bahasa (Menggantikan Partner Portal) */}
            <button
              onClick={toggleLang}
              className="px-4 py-2.5 rounded-full bg-white/80 hover:bg-white text-slate-900 font-extrabold text-xs tracking-wide border-2 border-slate-900 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>{lang === 'id' ? 'EN' : 'ID'}</span>
            </button>

            {/* Tombol Kemitraan / Partnership */}
            <a
              href="https://javacafe.id/kemitraan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-block"
            >
              {lang === 'id' ? 'Kemitraan' : 'Partnership'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white/80 text-[#4A3B35] border border-white hover:bg-white shadow-xs focus:outline-hidden cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#FDF6F0]/95 backdrop-blur-2xl border-b border-orange-100/80 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.key)}
                  className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B00] text-white font-bold'
                      : 'text-[#4A3B35] hover:bg-white/80 hover:text-[#FF6B00]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#4A3B35]/40'}`} />
                </button>
              );
            })}
            <div className="pt-3 border-t border-gray-200">
              <a
                href="https://javacafe.id/kemitraan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white font-extrabold text-sm text-center shadow-md shadow-orange-500/20 block"
              >
                {lang === 'id' ? 'Kemitraan' : 'Partnership'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};