import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ImpactStatsBanner from '../components/ImpactStatsBanner';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sun, CheckCircle, Award } from 'lucide-react';
import { productsCatalog } from '../data/solarData';

export default function HomePage({ onOpenConsultationModal, onNavigate }) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection onOpenConsultationModal={onOpenConsultationModal} />

      {/* Services Grid Section */}
      <ServicesSection onSelectService={(title) => onOpenConsultationModal(title)} />

      {/* Impact Stats Banner */}
      <ImpactStatsBanner />

      {/* Featured Products Preview */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00873e]">
                FEATURED HARDWARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Certified Solar Products
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-extrabold text-[#00873e] hover:text-[#006e32] transition-colors cursor-pointer group"
            >
              <span>View Full Product Catalog ({productsCatalog.length}+ Products)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsCatalog.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-slate-200 flex items-center justify-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-[#00873e] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {prod.badge}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                    {prod.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{prod.name}</h3>
                  <div className="text-xl font-black text-slate-900 mt-2">{prod.price}</div>
                </div>

                <button
                  onClick={() => onOpenConsultationModal(prod.name)}
                  className="mt-6 w-full bg-slate-900 hover:bg-[#00873e] text-white text-xs font-bold py-3 rounded-xl transition-colors"
                >
                  Get Quote & Availability
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lifetime Light Energy Callout */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-400">
              TRUSTED SOLAR PARTNER
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Switch to Zero Power Bills?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get an instant site evaluation, government subsidy guidance, and customized solar engineering plan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultationModal()}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-4 px-8 rounded-full shadow-lg text-sm sm:text-base cursor-pointer"
            >
              Get Free Site Survey →
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-full border border-slate-700 text-sm sm:text-base cursor-pointer"
            >
              Contact Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
