import React, { useState } from 'react';
import { productsCatalog } from '../data/solarData';
import { Star, CheckCircle, Search, Filter, ArrowRight, ShieldCheck, Sun } from 'lucide-react';

export default function OurProductsPage({ onOpenConsultationModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Panels", "Inverters", "Batteries", "Agri Pumps", "Street Lights", "Rooftop Kits"];

  const filteredProducts = productsCatalog.filter((prod) => {
    const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00873e]">
            CERTIFIED HARDWARE CATALOG
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Solar Panels, Inverters & Energy Systems
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Browse MNRE-approved solar products built for high efficiency, maximum weather durability, and long battery life.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00873e] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00873e]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Product Image */}
              <div className="p-4 bg-slate-50 border-b border-slate-100 relative">
                <div className="h-56 w-full rounded-xl overflow-hidden bg-slate-200 relative flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-[#00873e] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#00873e] transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-2xl font-black text-slate-900 pt-1">
                    {product.price}
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Specifications:</span>
                  <ul className="space-y-1">
                    {product.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00873e] flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenConsultationModal(product.name)}
                  className="w-full mt-4 bg-slate-900 hover:bg-[#00873e] text-white text-xs font-extrabold py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Price & Install Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-white">Need Custom Wholesale or Bulk Solar Panels?</h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              We provide turnkey procurement for EPC contractors, housing societies, and industrial plants.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultationModal("Wholesale Solar Hardware")}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-full text-xs sm:text-sm whitespace-nowrap shadow-md cursor-pointer"
          >
            Get Wholesale Rate Sheet
          </button>
        </div>

      </div>
    </div>
  );
}
