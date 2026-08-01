import React from 'react';
import { projectsList } from '../data/solarData';
import { MapPin, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectsPage({ onOpenConsultationModal }) {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00873e]">
            PROVEN TRACK RECORD
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Featured Solar Installations & Projects
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore 50+ completed solar projects powering factories, residential societies, and agricultural farmlands across India.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-56 bg-slate-200 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-slate-900 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  {proj.type}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">{proj.title}</h3>
                
                <div className="space-y-2 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Capacity: <strong>{proj.capacity}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00873e]" />
                    <span>Annual Savings: <strong>{proj.savings}</strong></span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultationModal(`Project Inquiry: ${proj.title}`)}
                  className="w-full mt-2 bg-slate-900 hover:bg-[#00873e] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                >
                  Request Similar Project Proposal
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
