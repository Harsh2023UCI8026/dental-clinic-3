"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, CheckCircle2 } from "lucide-react";

const treatments = [
  { id: "aligners", name: "Clear Aligners", baseCost: 45000 },
  { id: "implant", name: "Single Dental Implant", baseCost: 18000 },
  { id: "rct", name: "Root Canal + Zirconia Crown", baseCost: 8500 },
  { id: "whitening", name: "Laser Teeth Whitening", baseCost: 4000 },
];

export default function CostCalculator() {
  const [selectedId, setSelectedId] = useState<string>("aligners");
  const [downPayment, setDownPayment] = useState<number>(10000);
  const [tenure, setTenure] = useState<number>(6);

  const activeTreatment = treatments.find((t) => t.id === selectedId) || treatments[0];
  const remainingCost = Math.max(0, activeTreatment.baseCost - downPayment);
  const monthlyEmi = Math.round(remainingCost / tenure);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF9] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider">
            Transparent Pricing Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D]">
            Treatment Cost & 0% Interest EMI Estimator
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            We believe in complete financial transparency with zero hidden charges. Calculate estimated monthly payments.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="space-y-6">
            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-2">
                1. Select Desired Treatment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedId(t.id);
                      if (downPayment > t.baseCost) setDownPayment(Math.round(t.baseCost * 0.2));
                    }}
                    className={`p-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                      selectedId === t.id
                        ? "border-[#2D7D7A] bg-[#EBF5F5] text-[#123B5D] font-bold shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>{t.name}</span>
                      <span className="text-xs font-semibold text-[#2D7D7A]">
                        ₹{t.baseCost.toLocaleString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#123B5D] mb-2">
                <span>2. Down Payment Amount</span>
                <span className="text-[#2D7D7A]">₹{downPayment.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max={activeTreatment.baseCost}
                step="1000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-[#2D7D7A] cursor-pointer"
              />
            </div>

            {/* Tenure Selectors */}
            <div>
              <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-2">
                3. Select EMI Tenure
              </label>
              <div className="flex gap-3">
                {[3, 6, 9, 12].map((months) => (
                  <button
                    key={months}
                    onClick={() => setTenure(months)}
                    className={`flex-1 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                      tenure === months
                        ? "bg-[#123B5D] text-white border-[#123B5D]"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {months} Months
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation Result Display Card */}
            <div className="bg-[#EBF5F5] rounded-xl p-6 border border-[#2D7D7A]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-600 font-medium block">
                  Estimated Monthly Payment
                </span>
                <span className="font-serif text-3xl font-bold text-[#123B5D]">
                  ₹{monthlyEmi.toLocaleString()} <span className="text-xs font-normal text-slate-500">/ month</span>
                </span>
                <span className="text-[11px] text-[#2D7D7A] block mt-1 font-semibold">
                  0% Interest EMI Available (Subject to provider approval)
                </span>
              </div>
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#123B5D] text-white font-semibold text-sm hover:bg-[#0A2338] text-center shadow"
              >
                Apply For EMI Consultation
              </Link>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              *Illustrative estimate only. Final treatment costs depend on clinical evaluation by Dr. Soni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
