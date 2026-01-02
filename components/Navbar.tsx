
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X, Globe, Sun } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.heritage, href: '#heritage' },
    { name: t.nav.shop, href: '#shop' },
    { name: t.nav.about, href: '#science' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="relative group">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-400 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                   <path d="M12,2L13.1,8.3L19.5,7.2L14.7,12L19.5,16.8L13.1,15.7L12,22L10.9,15.7L4.5,16.8L9.3,12L4.5,7.2L10.9,8.3L12,2Z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                BIO <span className="text-emerald-500">CANNABIS</span>
              </span>
              <span className={`text-[8px] font-bold tracking-[0.2em] ${scrolled ? 'text-slate-500' : 'text-emerald-300'}`}>
                {t.tagline}
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 rtl:space-x-reverse items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-bold hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className={`hidden md:flex items-center space-x-6 rtl:space-x-reverse ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            <div className="flex items-center space-x-2 rtl:space-x-reverse bg-emerald-500/10 hover:bg-emerald-500/20 backdrop-blur-md rounded-full px-3 py-1.5 transition-all">
               <Globe className="w-3.5 h-3.5 text-emerald-500" />
               {(['en', 'fr', 'ar'] as const).map(lang => (
                 <button 
                   key={lang} 
                   onClick={() => setLanguage(lang)}
                   className={`text-[10px] uppercase font-bold px-1 transition-all ${language === lang ? 'text-emerald-500 underline underline-offset-4' : 'opacity-60 hover:opacity-100'}`}
                 >
                   {lang}
                 </button>
               ))}
            </div>
            <div className="flex space-x-4 rtl:space-x-reverse items-center border-l rtl:border-l-0 rtl:border-r border-slate-500/30 pl-6 rtl:pl-0 rtl:pr-6">
              <Search className="w-5 h-5 cursor-pointer hover:text-emerald-500 transition-colors" />
              <div className="relative cursor-pointer hover:text-emerald-500 transition-colors">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-900' : 'text-white'}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-bold text-slate-900 hover:text-emerald-600 border-b border-slate-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-4">
               {(['en', 'fr', 'ar'] as const).map(lang => (
                 <button 
                   key={lang} 
                   onClick={() => { setLanguage(lang); setIsOpen(false); }}
                   className={`text-sm font-black uppercase ${language === lang ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-400'}`}
                 >
                   {lang}
                 </button>
               ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
