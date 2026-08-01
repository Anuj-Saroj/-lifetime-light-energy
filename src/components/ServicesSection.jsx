import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/solarData';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="solutions" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00873e]">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight">
            Complete Solar Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
            End-to-end solar engineering, installation, and long-term maintenance for every application.
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image Container with Soft Rounded Frame */}
              <div className="p-4 bg-slate-100/70 pb-0">
                <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <span className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-amber-400/30">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#00873e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 pt-1 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00873e] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA inside card */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#00873e] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors duration-200 group/btn"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
