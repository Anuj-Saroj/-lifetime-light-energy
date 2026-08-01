import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sun } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL, navLinks } from '../data/solarData';

export default function Navbar({ activePage = 'home', onNavigate, onOpenConsultationModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Brand Logo (Left) */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group cursor-pointer min-w-0 flex-shrink"
          >
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                <g className="text-amber-400 fill-current">
                  <circle cx="50" cy="45" r="22" className="text-amber-400 fill-amber-400" />
                  <path d="M50 8 L50 16 M50 74 L50 82 M13 45 L21 45 M79 45 L87 45 M24 19 L30 25 M70 65 L76 71 M24 71 L30 65 M70 25 L76 19" 
                    stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </g>
                <path d="M22 45 L78 45 L70 75 L30 75 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
                <line x1="50" y1="45" x2="50" y2="75" stroke="#ffffff" strokeWidth="2" />
                <line x1="36" y1="60" x2="64" y2="60" stroke="#ffffff" strokeWidth="2" />
                <path d="M15 78 C 35 95, 65 95, 85 78 C 65 86, 35 86, 15 78 Z" fill="#00873e" />
              </svg>
            </div>

            <div className="flex flex-col truncate">
              <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
                <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-[#081226] font-sans">
                  LIFETIME
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-[#00873e] font-sans">
                  LIGHT ENERGY
                </span>
              </div>
              <span className="text-[9px] sm:text-xs font-semibold text-slate-600 tracking-wide mt-0.5 truncate hidden xs:block">
                Powering A Brighter Tomorrow
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6 mx-auto">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-2 text-xs xl:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-[#00873e]' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-400 rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* WhatsApp Direct Action Button */}
            {/* Desktop View: Full Pill Button */}
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#00873e] hover:bg-[#006e32] text-white text-xs sm:text-sm font-extrabold py-2 sm:py-2.5 px-3 sm:px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-white fill-white/20 group-hover:scale-110 transition-transform" />
              <span>Join WhatsApp Channel</span>
            </a>

            {/* Mobile View (< md): Compact Green WhatsApp Icon Button */}
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#00873e] text-white shadow-md active:scale-95 transition-transform"
              aria-label="WhatsApp Channel"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none lg:hidden border border-slate-200/60"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
            Navigation Menu
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm sm:text-base font-bold transition-all ${
                  activePage === link.id 
                    ? 'bg-emerald-50 text-[#00873e] border-l-4 border-[#00873e] shadow-xs' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00873e] hover:bg-[#006e32] text-white font-extrabold py-3 px-4 rounded-xl shadow-md text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Join WhatsApp Channel</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3 px-4 rounded-xl shadow-md text-sm transition-colors cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
