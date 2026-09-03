"use client";

import { useState } from "react";
import { AlertTriangle, Phone, ShieldAlert, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const emergencyOptions = [
  { id: "severe_pain", label: "Severe Unbearable Toothache", urgent: true },
  { id: "trauma", label: "Dental Trauma / Knocked Out Tooth", urgent: true },
  { id: "bleeding", label: "Uncontrolled Gum Bleeding / Swelling", urgent: true },
  { id: "broken_crown", label: "Broken Crown or Bridge", urgent: false },
  { id: "chipped", label: "Chipped Tooth (No severe pain)", urgent: false },
];

export default function EmergencyTriage() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedObj = emergencyOptions.find((o) => o.id === selected);

  return (
    <section className="py-16 bg-rose-50/50 border-y border-rose-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-rose-200 shadow-md">
          <div className="flex items-center gap-3 text-rose-600 mb-4">
            <AlertTriangle className="w-6 h-6 shrink-0" />
            <span className="font-bold text-xs uppercase tracking-wider">
              Dental Emergency Triage System
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123B5D] mb-2">
            Is This A Dental Emergency?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mb-6">
            Select your symptoms below to get instant prioritization instructions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {emergencyOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                  selected === opt.id
                    ? "border-rose-500 bg-rose-50 text-rose-900 font-bold shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {selectedObj && (
            <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-4">
              {selectedObj.urgent ? (
                <div className="space-y-2">
                  <span className="inline-block bg-rose-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase">
                    High Priority Case
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Please Call The Clinic Hotline Directly
                  </h4>
                  <p className="text-xs text-slate-300">
                    Severe pain or trauma requires immediate clinical evaluation to save the tooth or prevent infection spread.
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-rose-600 text-white font-bold text-sm hover:bg-rose-700 transition-colors shadow"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Emergency Line: +91 98765 43210</span>
                  </a>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="inline-block bg-amber-500 text-[#123B5D] text-[11px] font-bold px-2.5 py-0.5 rounded uppercase">
                    Moderate Priority
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Standard Same-Day Appointment Recommended
                  </h4>
                  <p className="text-xs text-slate-300">
                    While not immediately life-threatening, prompt clinical repair will prevent further discomfort.
                  </p>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D7D7A] text-white font-bold text-sm hover:bg-emerald-600 transition-colors shadow"
                  >
                    <span>Book Priority Slot</span>
                  </Link>
                </div>
              )}
            </div>
          )}

          <p className="text-[11px] text-slate-400 mt-4 text-center">
            Note: This triage tool provides guidance only and is not a medical diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
}
