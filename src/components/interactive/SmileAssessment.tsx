"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, AlertCircle, ArrowRight, MessageCircle } from "lucide-react";

const concerns = [
  { id: "pain", label: "Tooth Pain / Sensitivity" },
  { id: "align", label: "Crooked / Misaligned Teeth" },
  { id: "yellow", label: "Yellow / Discolored Teeth" },
  { id: "missing", label: "Missing Teeth / Gaps" },
  { id: "gum", label: "Bleeding Gums / Bad Breath" },
  { id: "broken", label: "Broken Tooth / Damaged Cap" },
  { id: "wisdom", label: "Wisdom Tooth Discomfort" },
  { id: "checkup", label: "Routine Dental Cleaning" },
];

const urgencies = [
  { id: "today", label: "Urgent (Need help today / Severe pain)" },
  { id: "week", label: "Within a few days" },
  { id: "general", label: "Planning a general consultation" },
];

export default function SmileAssessment() {
  const [selectedConcern, setSelectedConcern] = useState<string>("");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step === 1 && selectedConcern) setStep(2);
    else if (step === 2 && selectedUrgency) setStep(3);
  };

  const reset = () => {
    setSelectedConcern("");
    setSelectedUrgency("");
    setStep(1);
  };

  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider">
            Interactive Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D]">
            What's Bothering Your Smile?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Select your concern to receive quick guidance and recommended consultation steps.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 text-xs">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Quick guidance — not a formal medical diagnosis.</span>
          </div>
        </div>

        <div className="bg-[#F8FAF9] rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 text-xs font-semibold text-slate-500">
            <span className={step >= 1 ? "text-[#123B5D]" : ""}>1. Select Concern</span>
            <span className={step >= 2 ? "text-[#123B5D]" : ""}>2. Urgency Level</span>
            <span className={step >= 3 ? "text-[#123B5D]" : ""}>3. Recommendation</span>
          </div>

          {/* Step 1: Concern Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-semibold text-[#123B5D]">
                Question 1: What would you like help with?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {concerns.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedConcern(item.id)}
                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                      selectedConcern === item.id
                        ? "border-[#2D7D7A] bg-[#EBF5F5] text-[#123B5D] shadow-sm font-semibold"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  disabled={!selectedConcern}
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-lg bg-[#123B5D] text-white text-sm font-semibold disabled:opacity-50 hover:bg-[#0A2338] transition-colors flex items-center gap-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Urgency Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-semibold text-[#123B5D]">
                Question 2: How urgent is your dental concern?
              </h3>
              <div className="space-y-3">
                {urgencies.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedUrgency(item.id)}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                      selectedUrgency === item.id
                        ? "border-[#2D7D7A] bg-[#EBF5F5] text-[#123B5D] shadow-sm font-semibold"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  ← Back
                </button>
                <button
                  disabled={!selectedUrgency}
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-lg bg-[#123B5D] text-white text-sm font-semibold disabled:opacity-50 hover:bg-[#0A2338] transition-colors flex items-center gap-2"
                >
                  <span>See Recommendation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Recommendation Result */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#123B5D]">
                Recommended Action Plan
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Based on your selection, Dr. Soni recommends a clinical examination to evaluate your condition and provide exact options.
              </p>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Selected Concern:</span>
                  <span className="font-semibold text-[#123B5D]">
                    {concerns.find((c) => c.id === selectedConcern)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Urgency:</span>
                  <span className="font-semibold text-[#2D7D7A]">
                    {urgencies.find((u) => u.id === selectedUrgency)?.label}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/book-appointment"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#123B5D] text-white font-semibold text-sm shadow hover:bg-[#0A2338]"
                >
                  Book In-Clinic Consultation
                </Link>
                <a
                  href={`https://wa.me/919876543210?text=Hello%20Dr.%20Soni%2C%20I%20completed%20the%20smile%20quiz%20for%20${encodeURIComponent(
                    concerns.find((c) => c.id === selectedConcern)?.label || ""
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm shadow hover:bg-emerald-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>

              <button
                onClick={reset}
                className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-2"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
