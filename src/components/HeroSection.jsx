import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Leaf, 
  Building2, 
  ShieldCheck, 
  UserCheck, 
  Settings, 
  Clock, 
  Sun 
} from 'lucide-react';
import { companyDetails, heroBenefits, heroProofPoints } from '../data/solarData';

export default function HeroSection({ onOpenConsultationModal }) {
  // Map icon names to Lucide icons
  const getBenefitIcon = (name) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-400" />;
      default: return <Sun className="w-5 h-5 text-amber-400" />;
    }
  };

  const getProofIcon = (name) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#00873e]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#00873e]" />;
      case 'Settings': return <Settings className="w-6 h-6 text-[#00873e]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#00873e]" />;
      default: return <Sun className="w-6 h-6 text-[#00873e]" />;
    }
  };

  return (
    <section id="home" className="relative min-h-[620px] lg:min-h-[680px] bg-slate-950 overflow-hidden flex items-center">
      {/* High Quality Crisp Solar Panel Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 scale-105 transform transition-transform duration-10000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=90')` 
        }}
      />

      {/* Dark Gradient Radial & Linear Overlay matching screenshot depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#08152b]/95 to-[#0b1d3a]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Title, Subtitle, Description, CTA, Benefit Tags */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Welcome Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-200">
              <span>Welcome to</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <Sun className="w-4 h-4 text-amber-400" />
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-none">
                LIFETIME
              </h1>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[#00a84e] leading-none drop-shadow-sm">
                LIGHT ENERGY
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl font-bold text-slate-100 tracking-wide">
              {companyDetails.heroSubtitle}
            </p>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed font-normal">
              {companyDetails.heroDescription}
            </p>

            {/* Primary CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center gap-3 bg-[#fabb15] hover:bg-[#e5a90d] text-slate-950 font-extrabold text-sm sm:text-base py-3.5 px-7 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Benefit Tags under CTA */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
              {heroBenefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner flex-shrink-0">
                    {getBenefitIcon(benefit.icon)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-tight">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Floating Glassmorphism Proof Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/60 text-slate-800 space-y-6 transform hover:scale-[1.01] transition-transform">
              {heroProofPoints.map((item, idx) => (
                <div 
                  key={item.id} 
                  className={`flex items-start gap-4 ${idx !== heroProofPoints.length - 1 ? 'pb-5 border-b border-slate-100' : ''}`}
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-[#00873e] flex-shrink-0 mt-0.5">
                    {getProofIcon(item.icon)}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
