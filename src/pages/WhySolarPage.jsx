import React, { useState } from 'react';
import { 
  Zap, 
  DollarSign, 
  Leaf, 
  Building2, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Sun, 
  Award, 
  TrendingUp,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function WhySolarPage({ onOpenConsultationModal }) {
  // State for calculator inputs
  const [monthlyBill, setMonthlyBill] = useState(6000);
  const [propertyType, setPropertyType] = useState('residential'); // 'residential', 'commercial', 'agri'
  const [roofArea, setRoofArea] = useState(300); // sq ft

  // Mathematical Solar Engine Calculations
  const annualBill = monthlyBill * 12;
  
  // Approximate tariff rate per unit (kWh) ~ ₹8 / unit
  const monthlyUnits = Math.round(monthlyBill / 8);
  
  // System size needed: 1 kW generates approx 120 units per month (4 units/day)
  const systemSizeKw = Math.max(1, Math.ceil(monthlyUnits / 120));
  
  // Subsidy calculation (PM Surya Ghar Muft Bijli Yojana rules: ₹30,000 for 1kW, ₹60,000 for 2kW, max ₹78,000 for 3kW+)
  let estimatedSubsidy = 0;
  if (propertyType === 'residential') {
    if (systemSizeKw === 1) estimatedSubsidy = 30000;
    else if (systemSizeKw === 2) estimatedSubsidy = 60000;
    else if (systemSizeKw >= 3) estimatedSubsidy = 78000;
  }

  // Savings calculations
  const monthlySavings = Math.round(monthlyBill * 0.90); // 90% savings
  const annualSavings = monthlySavings * 12;
  
  // System cost estimate ~ ₹60,000 per kW gross
  const grossSystemCost = systemSizeKw * 60000;
  const netSystemCost = Math.max(20000, grossSystemCost - estimatedSubsidy);
  
  // Payback period
  const paybackYears = (netSystemCost / annualSavings).toFixed(1);
  
  // 25 Year lifetime savings (accounting for panel degradation & electricity inflation)
  const twentyFiveYearSavings = Math.round(annualSavings * 25 * 1.25);

  const handleBillInputChange = (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setMonthlyBill(val);
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00873e]">
            THE SOLAR ADVANTAGE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Switch to Solar Energy Today?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Calculate your exact solar electricity savings, government subsidy benefits, and ROI payback period below.
          </p>
        </div>

        {/* Benefits Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Up to 90% Reduced Bills</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generate your own clean electricity during sunlight hours and export excess power back to the grid via Net Metering.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#00873e] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Govt Subsidy up to ₹78,000</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Avail direct government subsidies under PM Surya Ghar Muft Bijli Yojana deposited straight into your bank account.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Eco-Friendly & Clean</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Offset tons of carbon emissions each year, equivalent to planting over 100 trees per 3kW solar system.
            </p>
          </div>
        </div>

        {/* INTERACTIVE SOLAR SAVINGS CALCULATOR SECTION */}
        <div id="calculator" className="bg-[#050D1E] text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-slate-800 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl shadow-md">
                <Calculator className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Interactive Solar Savings Calculator
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Enter your bill or move the slider to calculate instant savings & system size
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30">
              <Sparkles className="w-4 h-4" /> PM Surya Ghar Scheme Updated
            </span>
          </div>

          {/* Calculator Inputs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-6 space-y-6 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800">
              
              {/* Property Type Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  1. Select Property Type:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPropertyType('residential')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      propertyType === 'residential'
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Residential Home
                  </button>

                  <button
                    type="button"
                    onClick={() => setPropertyType('commercial')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      propertyType === 'commercial'
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Commercial / Factory
                  </button>

                  <button
                    type="button"
                    onClick={() => setPropertyType('agri')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      propertyType === 'agri'
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Agri Pump
                  </button>
                </div>
              </div>

              {/* Monthly Electricity Bill Input & Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    2. Monthly Electricity Bill (₹):
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-amber-400 font-bold text-base">₹</span>
                    <input
                      type="number"
                      min="500"
                      max="100000"
                      step="500"
                      value={monthlyBill}
                      onChange={handleBillInputChange}
                      className="w-36 pl-8 pr-3 py-2 bg-slate-950 border border-amber-400/60 rounded-xl text-lg font-black text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
                    />
                  </div>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>₹1,000 / mo</span>
                  <span>₹25,000 / mo</span>
                  <span>₹50,000 / mo</span>
                </div>
              </div>

              {/* Roof Area Slider */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>3. Estimated Roof Shadow-Free Area:</span>
                  <span className="text-white font-black">{roofArea} sq ft</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00873e]"
                />
              </div>

            </div>

            {/* Live Results Card (Right Column) */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              
              <div className="grid grid-cols-2 gap-4">
                {/* Recommended System Size */}
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-left space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Recommended Solar Size
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400">
                    {systemSizeKw} <span className="text-lg font-bold text-white">kW</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Generates ~{systemSizeKw * 4} units/day</p>
                </div>

                {/* Govt Subsidy Amount */}
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-left space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Govt Subsidy Amount
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                    ₹{estimatedSubsidy.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-400">Direct PM Surya Ghar Benefit</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Monthly Savings */}
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-left space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Monthly Bill Savings
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                    ₹{monthlySavings.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-400">Save up to 90% every month</p>
                </div>

                {/* Payback Period */}
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-left space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    ROI Payback Period
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">
                    {paybackYears} <span className="text-base font-bold text-white">Years</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Free power after payback</p>
                </div>
              </div>

              {/* 25-Year Lifetime Savings High Impact Banner */}
              <div className="bg-gradient-to-r from-emerald-900/80 to-[#00873e]/60 p-5 rounded-2xl border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    25-Year Lifetime Financial Savings
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-black text-white mt-0.5">
                    ₹{twentyFiveYearSavings.toLocaleString()}
                  </h4>
                </div>
                <div className="p-3 bg-white/10 rounded-xl text-emerald-300">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onOpenConsultationModal(`${systemSizeKw}kW Solar System for ₹${monthlyBill}/mo (Est. Subsidy: ₹${estimatedSubsidy})`)}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-xl transition-all text-sm sm:text-base cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Claim {systemSizeKw}kW Subsidy Proposal & Site Visit</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
