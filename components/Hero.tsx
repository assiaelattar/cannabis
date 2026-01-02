
import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background - The Greenhouse Infrastructure (Image 6 style) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center animate-slow-zoom">
        <div className={`absolute inset-0 ${isRtl ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-emerald-950/95 via-emerald-950/60 to-transparent`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className={`max-w-3xl ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-full mb-8">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-100 text-[10px] font-black uppercase tracking-[0.2em]">
              {t.hero.tag}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 serif leading-[1.1]">
            {t.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300">
              {t.hero.titleSpan}
            </span>
          </h1>
          
          <p className="text-2xl font-bold text-emerald-100 mb-6 italic">
            "{t.tagline}"
          </p>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-xl">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-black transition-all flex items-center justify-center space-x-3 rtl:space-x-reverse group shadow-2xl shadow-emerald-900/40 uppercase tracking-widest text-sm">
              <span>{t.hero.btn1}</span>
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl px-10 py-5 rounded-2xl font-black transition-all border border-white/20 flex items-center justify-center space-x-3 rtl:space-x-reverse uppercase tracking-widest text-sm">
              <div className="bg-emerald-500 p-1.5 rounded-full shadow-lg">
                <Play className="w-4 h-4 fill-current text-white" />
              </div>
              <span>{t.hero.btn2}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Detail Preview - Technician Trimming (Image 1 style) */}
      <div className={`hidden xl:block absolute ${isRtl ? 'left-24' : 'right-24'} top-1/2 -translate-y-1/2 w-[420px] transition-all duration-700 hover:scale-105`}>
         <div className="relative p-1 bg-gradient-to-br from-emerald-500/40 to-yellow-400/40 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-3xl">
            <div className="bg-emerald-950/80 rounded-[2.4rem] p-8">
              <div className="relative mb-8 rounded-3xl overflow-hidden group">
                {/* Visual reflecting technician trimming buds */}
                <img 
                  src="https://images.unsplash.com/photo-1615485500704-8e990f3900f7?auto=format&fit=crop&w=800&q=80" 
                  alt="Quality Hand Trimming" 
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                   Manual Precision
                </div>
              </div>
              <div className={`text-white ${isRtl ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Traceable Origin</h3>
                <p className="text-emerald-100/60 text-sm mb-6 font-medium leading-relaxed">Every flower is hand-selected and verified by our pharmaceutical specialists.</p>
                <div className="flex items-center justify-between rtl:flex-row-reverse border-t border-white/10 pt-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 block mb-1">Blockchain Ready</span>
                    <span className="text-2xl font-black text-white">100% Traceable</span>
                  </div>
                  <button className="bg-emerald-500 hover:bg-emerald-400 w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-emerald-900/40">
                    <ArrowRight className={`w-6 h-6 text-white ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Hero;
