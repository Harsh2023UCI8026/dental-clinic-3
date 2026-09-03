"use client";

import { useState } from "react";
import { Upload, Calendar, Clock, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "Root Canal Treatment",
    date: "",
    time: "Morning (9:00 AM - 12:00 PM)",
    patientType: "New",
    notes: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto">
      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h3 className="font-serif text-3xl font-bold text-[#123B5D]">
            Appointment Request Received!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Thank you, <span className="font-bold text-[#123B5D]">{formData.name}</span>. Our desk team at Floss & Gloss will confirm your slot on WhatsApp ({formData.phone}) shortly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-[#123B5D] hover:bg-slate-50"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-serif text-2xl font-bold text-[#123B5D]">
              Book Clinical Appointment
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select your preferred date, time slot, and optional pre-assessment dental photo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1.5">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1.5">
                Required Treatment *
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A] bg-white"
              >
                <option>Root Canal Treatment</option>
                <option>Dental Implants</option>
                <option>Clear Aligners / Braces</option>
                <option>Teeth Whitening</option>
                <option>Crowns & Bridges</option>
                <option>General Dental Consultation</option>
                <option>Tooth Extraction</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1.5">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1.5">
                Time Slot *
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A] bg-white"
              >
                <option>Morning (9:00 AM - 12:00 PM)</option>
                <option>Afternoon (12:00 PM - 4:00 PM)</option>
                <option>Evening (4:00 PM - 8:00 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1.5">
                Patient Status
              </label>
              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    checked={formData.patientType === "New"}
                    onChange={() => setFormData({ ...formData, patientType: "New" })}
                    className="accent-[#2D7D7A]"
                  />
                  New Patient
                </label>
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    checked={formData.patientType === "Existing"}
                    onChange={() => setFormData({ ...formData, patientType: "Existing" })}
                    className="accent-[#2D7D7A]"
                  />
                  Existing Patient
                </label>
              </div>
            </div>
          </div>

          {/* Pre-Consultation Photo Upload (Optional) */}
          <div className="p-4 rounded-xl bg-[#EBF5F5] border border-[#2D7D7A]/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123B5D]">
              <Upload className="w-4 h-4 text-[#2D7D7A]" />
              <span>Optional: Dental Concern Photo Pre-Assessment</span>
            </div>
            <p className="text-[11px] text-slate-600">
              Want Dr. Soni to understand your concern before your visit? Upload a photo of your tooth/smile issue (JPG/PNG &lt; 5MB).
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              className="text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#123B5D] file:text-white hover:file:bg-[#0A2338]"
            />
            <p className="text-[10px] text-slate-400">
              🔒 Privacy Guarantee: Uploaded images are strictly confidential and only viewed by the clinical team.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-[#123B5D] text-white font-bold text-base hover:bg-[#0A2338] transition-colors shadow-md"
          >
            Confirm & Request Appointment
          </button>
        </form>
      )}
    </div>
  );
}
