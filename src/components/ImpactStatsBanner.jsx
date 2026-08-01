import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, Zap, Handshake } from 'lucide-react';
import { statsData } from '../data/solarData';

export default function ImpactStatsBanner() {
  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />;
      case 'Handshake':
        return <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />;
      default:
        return <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />;
    }
  };

  return (
    <section className="bg-[#050D1E] text-white py-12 border-y border-slate-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center justify-center p-4 sm:p-6 space-x-4 md:space-x-5 text-left first:pt-0 pt-6 md:pt-4"
            >
              <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner flex-shrink-0">
                {getStatIcon(stat.icon)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
