import React from 'react';
import { servicesData } from '../data/solarData';
import { ArrowRight, CheckCircle, Sun, Zap, ShieldCheck } from 'lucide-react';

export default function SolarSolutionsPage({ onOpenConsultationModal }) {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00873e]">
            END-TO-END SOLAR ENGINEERING
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Complete Solar Solutions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            From residential rooftops to 5+ MW commercial microgrids and agricultural water pumps, explore our complete energy solutions.
          </p>
        </div>

        {/* Detailed Solutions Stack */}
        <div className="space-y-12">
          {servicesData.map((sol, idx) => (
            <div
              key={sol.id}
              className={`bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                  {sol.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{sol.title}</h2>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  {sol.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Benefits:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle className="w-4 h-4 text-[#00873e]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenConsultationModal(sol.title)}
                    className="bg-[#00873e] hover:bg-[#006e32] text-white font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Get Free Proposal for {sol.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 bg-slate-200">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
