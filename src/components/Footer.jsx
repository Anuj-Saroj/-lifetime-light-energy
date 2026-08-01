import React from 'react';
import { Sun, Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { companyDetails, WHATSAPP_CHANNEL_URL } from '../data/solarData';

export default function Footer({ onOpenConsultationModal, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="bg-[#050B14] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl font-black tracking-tight text-white font-sans">
                    LIFETIME
                  </span>
                  <span className="text-xl font-black tracking-tight text-[#00873e] font-sans">
                    LIGHT ENERGY
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 tracking-wide mt-0.5">
                  {companyDetails.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              {companyDetails.heroDescription} We build sustainable solar power systems designed for lifetime efficiency, zero power bills, and maximum government subsidy benefits.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00873e] hover:bg-[#006e32] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Join Official WhatsApp Channel</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-amber-400 transition-colors text-left">Home</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-amber-400 transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleLinkClick('products')} className="hover:text-amber-400 transition-colors text-left">Our Products</button></li>
              <li><button onClick={() => handleLinkClick('solutions')} className="hover:text-amber-400 transition-colors text-left">Solar Solutions</button></li>
              <li><button onClick={() => handleLinkClick('projects')} className="hover:text-amber-400 transition-colors text-left">Projects Portfolio</button></li>
              <li><button onClick={() => handleLinkClick('why-solar')} className="hover:text-amber-400 transition-colors text-left">Why Solar?</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-amber-400 transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* Solar Hardware */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hardware Catalog</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <li><button onClick={() => handleLinkClick('products')} className="hover:text-amber-400 transition-colors text-left">540W Mono PERC Panels</button></li>
              <li><button onClick={() => handleLinkClick('products')} className="hover:text-amber-400 transition-colors text-left">MPPT Smart Inverters</button></li>
              <li><button onClick={() => handleLinkClick('products')} className="hover:text-amber-400 transition-colors text-left">LiFePO4 Lithium Batteries</button></li>
              <li><button onClick={() => handleLinkClick('products')} className="hover:text-amber-400 transition-colors text-left">Solar Agriculture Pumps</button></li>
              <li><button onClick={() => handleLinkClick('products')} className="hover:text-amber-400 transition-colors text-left">Smart LED Street Lights</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{companyDetails.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{companyDetails.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{companyDetails.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} LIFETIME LIGHT ENERGY. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors font-medium cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
