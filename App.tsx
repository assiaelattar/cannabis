
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import HeritageSection from './components/HeritageSection.tsx';
import ProductCard from './components/ProductCard.tsx';
import Footer from './components/Footer.tsx';
import { PRODUCTS } from './constants.tsx';
import { Download, Sun, FlaskConical, ShieldCheck, Beaker, Microchip, Users, Heart } from 'lucide-react';
import { LanguageProvider, useLanguage } from './components/LanguageContext.tsx';

const AppContent: React.FC = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* The Three Pillars Section - Science and Compliance */}
        <section className="bg-emerald-950 py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
             <h2 className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">ANRAC Compliance</h2>
             <h3 className="text-4xl md:text-5xl font-black text-white serif uppercase tracking-tighter">Gold Standard Certification</h3>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: t.pillars.t1, desc: t.pillars.d1, icon: <Sun className="w-8 h-8" /> },
                { title: t.pillars.t2, desc: t.pillars.d2, icon: <FlaskConical className="w-8 h-8" /> },
                { title: t.pillars.t3, desc: t.pillars.d3, icon: <ShieldCheck className="w-8 h-8" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl group hover:bg-emerald-500/20 transition-all text-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-8 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-emerald-100/50 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Export Collection Portfolio */}
        <section id="shop" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 rtl:flex-row-reverse">
              <div className={`max-w-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black tracking-widest uppercase mb-4">
                  {t.shop.tag}
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-slate-900 serif leading-tight">
                   {t.shop.title} <br />
                   <span className="text-emerald-600">{t.shop.titleSpan}</span>
                </h3>
              </div>
              <button className="flex items-center space-x-3 rtl:space-x-reverse bg-slate-900 text-white px-8 py-5 rounded-2xl font-black hover:bg-emerald-900 transition-all shadow-xl group">
                <Download className="w-5 h-5" />
                <span className="text-sm uppercase tracking-widest">{t.shop.btn}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section id="science" className="py-32 bg-emerald-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-24 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
               <div className="flex-1 space-y-10">
                  <div className={`inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase ${isRtl ? 'ml-auto' : ''}`}>
                    Extraction Excellence
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black serif leading-tight">
                    Supercritical <br />
                    <span className="text-emerald-500">CO₂ Extraction.</span>
                  </h3>
                  <p className="text-emerald-100/60 text-lg leading-relaxed font-light">
                    Our high-end distillation facility ensures a solvent-free, pure product that retains the plant's full therapeutic spectrum. Swiss-standard purity for the global market.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                       <Beaker className="w-6 h-6 text-emerald-400 mb-4" />
                       <h6 className="font-bold uppercase tracking-widest text-xs mb-2">Solvent Free</h6>
                       <p className="text-xs text-emerald-100/40">Pure isolation without chemical residue.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                       <Microchip className="w-6 h-6 text-emerald-400 mb-4" />
                       <h6 className="font-bold uppercase tracking-widest text-xs mb-2">Blockchain Trace</h6>
                       <p className="text-xs text-emerald-100/40">Verified from original seed to final bottle.</p>
                    </div>
                  </div>
               </div>
               
               <div className="flex-1 relative">
                 <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5 aspect-square lg:aspect-auto lg:h-[700px]">
                   <img 
                    src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=1000&q=80" 
                    alt="CannabisX Pharmaceutical Extraction" 
                    className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/30 blur-[80px] rounded-full"></div>
               </div>
            </div>
          </div>
        </section>

        <HeritageSection />

        {/* Global Partnership Logistics */}
        <section className="relative py-48 overflow-hidden group bg-slate-900">
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover grayscale"
              alt="Tangier Med Export"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h3 className="text-5xl md:text-8xl font-black mb-10 serif leading-none tracking-tighter uppercase">Rif to the World</h3>
            <p className="text-2xl text-emerald-100/70 max-w-4xl mx-auto mb-16 font-light leading-relaxed">
              Strategic export routes from Tangier Med to global ports, ensuring cold-chain integrity and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-emerald-500 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all shadow-2xl">Partner with Us</button>
               <button className="border-2 border-white/20 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">White Label Services</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
