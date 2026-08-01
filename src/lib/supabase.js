import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ftxvfravftrplhqkjodh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eHZmcmF2ZnRycGxocWtqb2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1NTU2OTQsImV4cCI6MjEwMTEzMTY5NH0.E1WKq4McMiXDDwmkvH8wOfjpfGShS1NEJrLyuluh_yI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Submit consultation request to Supabase database
 */
export async function saveConsultation(formData) {
  try {
    const { data, error } = await supabase
      .from('consultations')
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          solution_type: formData.solutionType || 'Solar Rooftop Systems',
          message: formData.message || null,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      console.error('[Supabase Error] Error inserting consultation:', error);
      return { success: false, error };
    }

    console.log('%c [Supabase Database] Consultation saved successfully:', 'color: #10b981; font-weight: bold;', data);
    return { success: true, data };
  } catch (err) {
    console.error('[Supabase Exception] Failed to save consultation:', err);
    return { success: false, error: err };
  }
}

/**
 * Submit contact page inquiry to Supabase database
 */
export async function saveContactInquiry(formData) {
  try {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          subject: formData.subject || 'General Solar Inquiry',
          message: formData.message,
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('[Supabase Error] Error inserting contact inquiry:', error);
      return { success: false, error };
    }

    console.log('%c [Supabase Database] Contact inquiry saved successfully:', 'color: #10b981; font-weight: bold;', data);
    return { success: true, data };
  } catch (err) {
    console.error('[Supabase Exception] Failed to save contact inquiry:', err);
    return { success: false, error: err };
  }
}

/**
 * Fetch total stats count dynamically from database
 */
export async function fetchDatabaseStats() {
  try {
    const { count: consultationCount } = await supabase
      .from('consultations')
      .select('*', { count: 'exact', head: true });

    const { count: inquiryCount } = await supabase
      .from('contact_inquiries')
      .select('*', { count: 'exact', head: true });

    return {
      consultations: consultationCount || 0,
      inquiries: inquiryCount || 0
    };
  } catch (err) {
    return { consultations: 0, inquiries: 0 };
  }
}
