import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Sun, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { companyDetails, WHATSAPP_CHANNEL_URL } from '../data/solarData';
import confetti from 'canvas-confetti';
import { saveContactInquiry } from '../lib/supabase';

export default function ContactUsPage({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Solar Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to Supabase Database
    const res = await saveContactInquiry(formData);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setIsSubmitting(false);
    onSuccess("Thank you! Your contact inquiry has been stored securely in our Supabase database.");
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Solar Inquiry',
      message: ''
    });
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#00873e] text-xs font-extrabold uppercase tracking-wider">
            <Sun className="w-4 h-4" /> 24x7 Customer Support & Sales
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact LIFETIME LIGHT ENERGY
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Have questions about solar rooftop systems, government subsidies, or technical site visits? Speak directly with our engineering team.
          </p>
        </div>

        {/* Contact Grid: Form on Left, Direct Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-900">Send Us a Direct Message</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Fill out your details below and our solar consultant will get back to you.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-[#00873e] text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-200">
                <Database className="w-3.5 h-3.5" /> Supabase Storage
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00873e] focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00873e] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00873e] focus:bg-white"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Inquiry Topic
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00873e] focus:bg-white"
                  >
                    <option value="General Solar Inquiry">General Solar Inquiry</option>
                    <option value="Home Rooftop Solar">Home Rooftop Solar</option>
                    <option value="Commercial MW Project">Commercial MW Project</option>
                    <option value="Agricultural Solar Pump">Agricultural Solar Pump</option>
                    <option value="Wholesale Hardware">Wholesale Hardware Inquiry</option>
                    <option value="Government Subsidy Query">Government Subsidy Query</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Your Message / Property Details
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Share details about your rooftop area, city location, or power bill requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00873e] focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00873e] hover:bg-[#006e32] text-white font-black py-4 px-6 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span>Saving to Supabase Database...</span>
                ) : (
                  <>
                    <span>Submit & Save to Database</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Banner Card */}
            <div className="bg-[#050D1E] text-white p-6 rounded-3xl space-y-4 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-emerald-500/20" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Join WhatsApp Channel</h3>
                  <p className="text-xs text-slate-300">Get daily solar updates & scheme news</p>
                </div>
              </div>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00873e] hover:bg-[#006e32] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Open WhatsApp Channel Link</span>
              </a>
            </div>

            {/* Direct Info List */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Corporate Office Details
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-[#00873e] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{companyDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Helpline Number</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{companyDetails.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{companyDetails.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Working Hours</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{companyDetails.hours}</p>
                </div>
              </div>
            </div>

            {/* Visual Location Map Frame */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 p-2 relative">
              <div className="h-48 w-full rounded-2xl bg-slate-800 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                <MapPin className="w-10 h-10 text-amber-400 mb-2 animate-bounce" />
                <h4 className="text-sm font-bold text-white">LIFETIME LIGHT ENERGY Head Office</h4>
                <p className="text-xs text-slate-400 mt-1">{companyDetails.address}</p>
                <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
