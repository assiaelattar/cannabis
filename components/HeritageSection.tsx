
import React from 'react';
import { MapPin, Users, ChevronRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const HeritageSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="heritage" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-20 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className="flex-1 relative group">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] z-10 aspect-[4/5]">
              {/* Reflecting Image 2: Farmers in Greenhouse */}
              <img 
                src="https://images.unsplash.com/photo-1591130901020-ef93616f4dd1?auto=format&fit=crop&w=1000&q=80" 
                alt="Bio Cannabis Farmer Cooperative" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-emerald-400">Chefchaouen & Al Hoceima</span>
                </div>
                <h4 className="text-4xl font-black mb-4 leading-tight serif">Direct Farmer <br />Empowerment.</h4>
                <p className="text-emerald-100/70 text-lg leading-relaxed font-light">
                  Working directly with local cooperatives to ensure technical training, fair-trade pricing, and legal safety.
                </p>
              </div>
            </div>
            
            <div className={`absolute -bottom-10 ${isRtl ? '-left-10' : '-right-10'} w-48 h-48 bg-yellow-400 rounded-full blur-[80px] opacity-20 -z-10 animate-pulse`}></div>
          </div>

          <div className={`flex-1 space-y-12 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div>
              <div className={`inline-block mb-6 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest ${isRtl ? 'ml-auto' : ''}`}>
                Authentic Stewardship
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 serif leading-tight">
                Bridging the <br />
                <span className="text-emerald-600">Ancestral Gap.</span>
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Bio Cannabis serves as the bridge between the centuries-old agricultural craft of the Rif and the global pharmaceutical market. We provide the expertise and the license (Law 13-21) to turn tradition into medicine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className={`p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all group ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="bg-emerald-50 p-4 rounded-2xl w-fit mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Users className="w-7 h-7 text-emerald-600 group-hover:text-white" />
                </div>
                <h5 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Cooperative Led</h5>
                <p className="text-slate-500 text-sm leading-relaxed">Our model focuses on community growth, ensuring that the farmers are the primary beneficiaries.</p>
              </div>
              
              <div className={`p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all group ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="bg-emerald-50 p-4 rounded-2xl w-fit mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <ShieldCheck className="w-7 h-7 text-emerald-600 group-hover:text-white" />
                </div>
                <h5 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Zero Pesticides</h5>
                <p className="text-slate-500 text-sm leading-relaxed">Sustainable farming techniques that protect the Rif's mineral-rich soil and micro-climate.</p>
              </div>
            </div>

            <button className={`bg-slate-900 hover:bg-emerald-950 text-white px-10 py-5 rounded-2xl font-black transition-all flex items-center space-x-3 rtl:space-x-reverse shadow-xl ${isRtl ? 'ml-auto' : ''}`}>
              <span>Partnership Model</span>
              <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
