
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className={`space-y-10 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-3">
                <div className="bg-emerald-600 p-2 rounded-xl">
                   <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                     <path d="M12,2L13.1,8.3L19.5,7.2L14.7,12L19.5,16.8L13.1,15.7L12,22L10.9,15.7L4.5,16.8L9.3,12L4.5,7.2L10.9,8.3L12,2Z" />
                   </svg>
                </div>
                <span className="text-3xl font-black tracking-tighter text-white">Cannabis<span className="text-emerald-500">X</span></span>
              </div>
              <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">{t.tagline}</span>
            </div>
            <p className="text-lg leading-relaxed font-medium">
              {t.footer.about}
            </p>
            <div className={`flex space-x-6 rtl:space-x-reverse ${isRtl ? 'justify-end' : 'justify-start'}`}>
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-2">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-black mb-10 text-xl uppercase tracking-widest">{t.footer.quickLinks}</h4>
            <ul className="space-y-6 text-base font-bold">
              {['The Labs', 'Farmers Voice', 'Bio-Medical Catalog', 'Legal Framework', 'Bio-Sustainability'].map(link => (
                <li key={link}><a href="#" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-xs">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-black mb-10 text-xl uppercase tracking-widest">{t.footer.categories}</h4>
            <ul className="space-y-6 text-base font-bold">
              {['99% CBD Isolate', 'Organic Flower', 'Full Spectrum Beldia', 'Pharma-Topicals', 'Bio-Infusions'].map(cat => (
                <li key={cat}><a href="#" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-xs">{cat}</a></li>
              ))}
            </ul>
          </div>

          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-black mb-10 text-xl uppercase tracking-widest">{t.footer.contact}</h4>
            <ul className="space-y-8 text-base font-medium">
              <li className={`flex items-start space-x-4 ${isRtl ? 'space-x-reverse justify-end' : ''}`}>
                <div className="bg-emerald-500/10 p-2 rounded-lg"><MapPin className="w-6 h-6 text-emerald-500" /></div>
                <span>Bio-Medical Industrial Zone,<br />Kétama, Rif Mountains, Morocco</span>
              </li>
              <li className={`flex items-center space-x-4 ${isRtl ? 'space-x-reverse justify-end' : ''}`}>
                <div className="bg-emerald-500/10 p-2 rounded-lg"><Phone className="w-6 h-6 text-emerald-500" /></div>
                <span>+212 539-BIO-CAN</span>
              </li>
              <li className={`flex items-center space-x-4 ${isRtl ? 'space-x-reverse justify-end' : ''}`}>
                <div className="bg-emerald-500/10 p-2 rounded-lg"><Mail className="w-6 h-6 text-emerald-500" /></div>
                <span>lab@biocannabis.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[10px] font-black uppercase tracking-[0.2em] rtl:flex-row-reverse">
          <p className="text-slate-600">© 2024 CANNABISX ASSOCIATION. ALL ORGANIC RIGHTS RESERVED.</p>
          <div className="flex space-x-12 rtl:space-x-reverse">
            <a href="#" className="hover:text-white transition-colors">Lab Results</a>
            <a href="#" className="hover:text-white transition-colors">Ethics Code</a>
            <a href="#" className="hover:text-white transition-colors">Sustainability Score</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
