import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle, Sun, Building, Sparkles } from 'lucide-react';
import { companyDetails } from '../data/solarData';

export default function AboutUsPage({ onOpenConsultationModal }) {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#00873e] text-xs font-extrabold uppercase tracking-wider">
            <Sun className="w-4 h-4" /> About LIFETIME LIGHT ENERGY
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Powering A Brighter & Sustainable Tomorrow
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We are a premier solar engineering, procurement, and construction company dedicated to delivering high-performance solar installations with lifetime warranty assurance.
          </p>
        </div>

        {/* Story & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Our Mission: Clean Energy for Every Roof & Farm
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded with the vision of accelerating green energy adoption, <strong>LIFETIME LIGHT ENERGY</strong> provides complete solar solutions ranging from residential rooftop power plants to 5+ MW commercial microgrids and solar water pumps for agriculture.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We work closely with MNRE-approved solar panel manufacturers, Tier-1 inverter vendors, and certified electrical engineers to ensure every system achieves 99.8% uptime and maximum energy harvest.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                <h4 className="text-2xl font-black text-[#00873e]">5000+</h4>
                <p className="text-xs text-slate-500 font-semibold mt-1">Solar Rooftops Installed</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                <h4 className="text-2xl font-black text-amber-500">25 Years</h4>
                <p className="text-xs text-slate-500 font-semibold mt-1">Linear Panel Warranty</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 p-2">
            <img
              src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=80"
              alt="LIFETIME LIGHT ENERGY Engineers"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-white space-y-1">
              <h4 className="text-sm font-bold text-amber-400">Government Approved & ISO Certified</h4>
              <p className="text-xs text-slate-300">Empaneled with State Electricity Boards & MNRE Subsidy Schemes.</p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why Customers Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00873e] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Certified Hardware</h3>
              <p className="text-xs text-slate-600">Tier-1 Mono PERC panels and MPPT smart inverters tested for harsh weather conditions.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Expert Engineers</h3>
              <p className="text-xs text-slate-600">In-house team of certified solar technicians ensuring flawless structure safety and net-metering.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Subsidy Assistance</h3>
              <p className="text-xs text-slate-600">Complete documentation support to help you claim up to 40% government solar subsidies.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">24x7 Support</h3>
              <p className="text-xs text-slate-600">Remote SCADA plant monitoring and fast technical support whenever you need assistance.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#050D1E] text-white p-8 sm:p-12 rounded-3xl text-center space-y-6">
          <h2 className="text-3xl font-black">Want to Consult With Our Solar Team?</h2>
          <button
            onClick={() => onOpenConsultationModal()}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3.5 px-8 rounded-full shadow-lg text-sm sm:text-base cursor-pointer"
          >
            Get Free Consultation →
          </button>
        </div>

      </div>
    </div>
  );
}
