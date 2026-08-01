import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Database, RefreshCw, MessageSquare, PhoneCall, Mail, Calendar, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AdminLeadsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('contact_inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchLeads = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      // Fetch Contact Inquiries
      const { data: inqData, error: inqErr } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (inqErr) throw inqErr;

      // Fetch Consultations
      const { data: consData, error: consErr } = await supabase
        .from('consultations')
        .select('*')
        .order('created_at', { ascending: false });

      if (consErr) throw consErr;

      setInquiries(inqData || []);
      setConsultations(consData || []);
    } catch (err) {
      console.error('[Supabase Fetch Error]:', err);
      setErrorMsg(err.message || 'Failed to fetch database records');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const currentData = activeTab === 'contact_inquiries' ? inquiries : consultations;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-6 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-[#050D1E] text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Database className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Supabase Database Submissions Inspector
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Live Supabase Project: <code className="text-amber-400">ftxvfravftrplhqkjodh</code>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchLeads}
                  disabled={isLoading}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
                  title="Refresh Database Data"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">Refresh</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Table Tabs */}
            <div className="bg-slate-100 p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('contact_inquiries')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'contact_inquiries'
                      ? 'bg-[#00873e] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Contact Inquiries ({inquiries.length})
                </button>

                <button
                  onClick={() => setActiveTab('consultations')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'consultations'
                      ? 'bg-[#00873e] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Free Consultations ({consultations.length})
                </button>
              </div>

              <span className="text-xs font-semibold text-slate-500">
                Viewing Supabase Table: <strong className="text-slate-900">{activeTab}</strong>
              </span>
            </div>

            {/* Data Table */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-bold">
                  {errorMsg}
                </div>
              )}

              {isLoading ? (
                <div className="py-16 text-center text-slate-500 space-y-2">
                  <RefreshCw className="w-8 h-8 animate-spin mx-auto text-[#00873e]" />
                  <p className="text-sm font-semibold">Fetching records from Supabase PostgreSQL database...</p>
                </div>
              ) : currentData.length === 0 ? (
                <div className="py-16 text-center text-slate-400 space-y-2">
                  <MessageSquare className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="text-sm font-bold text-slate-600">No records found in table `{activeTab}` yet.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100 space-y-3">
                  {currentData.map((row) => (
                    <div
                      key={row.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-black text-slate-900">{row.name}</span>
                          <span className="bg-emerald-100 text-[#00873e] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                            {row.status || 'New'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{new Date(row.created_at).toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-700 font-semibold">
                          <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
                          <span>{row.phone}</span>
                        </div>

                        {row.email && (
                          <div className="flex items-center gap-2 text-slate-700 font-semibold">
                            <Mail className="w-3.5 h-3.5 text-blue-500" />
                            <span>{row.email}</span>
                          </div>
                        )}

                        {(row.subject || row.solution_type) && (
                          <div className="text-slate-600 font-bold">
                            Topic: <span className="text-slate-900">{row.subject || row.solution_type}</span>
                          </div>
                        )}
                      </div>

                      {row.message && (
                        <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs text-slate-700 font-medium leading-relaxed">
                          "{row.message}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Connected to Supabase PostgreSQL DB
              </span>
              <button
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-5 rounded-xl transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
