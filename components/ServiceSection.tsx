
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Commitment</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 serif">A Professional Approach to Traditional Heritage</h3>
          <p className="text-slate-600 leading-relaxed">
            The Rif Cana Association is dedicated to transforming the Moroccan cannabis sector into a world-class medicinal industry, ensuring quality from seed to sale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div key={service.id} className="p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group">
                <div className="bg-emerald-100 text-emerald-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                <button className="mt-6 flex items-center space-x-2 text-emerald-600 font-bold text-xs uppercase tracking-widest hover:text-emerald-700">
                  <span>Learn More</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
