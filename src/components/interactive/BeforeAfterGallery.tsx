"use client";

import { useState } from "react";
import Link from "next/link";

const cases = [
  {
    category: "Teeth Whitening",
    title: "In-Clinic Laser Whitening",
    desc: "Single 45-minute laser session removing severe coffee & tobacco stains.",
    beforeImg: "/images/teeth-whitening-before.jpeg",
    afterImg: "/images/teeth-whitening-after.jpeg",
    beforeText: "Stained & Yellow Enamel",
    afterText: "Bright 8-Shade Lighter Teeth",
  },
  {
    category: "Clear Aligners",
    title: "Overcrowding Correction",
    desc: "10-month invisible aligner treatment without traditional metal braces.",
    beforeImg: "/images/clear-aligners-before.jpeg",
    afterImg: "/images/clear-aligners-after.jpeg",
    beforeText: "Crowded Lower Teeth",
    afterText: "Perfectly Aligned Arch",
  },
  {
    category: "Dental Implants",
    title: "Single Molar Replacement",
    desc: "Permanent titanium implant with natural zirconia crown.",
    beforeImg: "/images/dental-implants-before.jpeg",
    afterImg: "/images/dental-implants-after.jpeg",
    beforeText: "Missing Lower Molar",
    afterText: "Restored Chewing Function",
  },
];

export default function BeforeAfterGallery() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);

  const activeCase = cases[activeCaseIndex];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider">
            Verified Clinical Cases
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D]">
            Before & After Patient Transformations
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Drag the comparison slider to view actual clinical treatment outcomes from Dr. Soni's practice.
          </p>
        </div>

        {/* Case Category Selectors */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {cases.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCaseIndex === idx
                  ? "bg-[#123B5D] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Drag Comparison Card */}
        <div className="max-w-3xl mx-auto bg-[#F8FAF9] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="mb-4">
            <h3 className="font-serif text-xl font-bold text-[#123B5D]">
              {activeCase.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">{activeCase.desc}</p>
          </div>

          {/* Interactive Visual Image Comparison Container */}
          <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden select-none border border-slate-300 shadow-inner bg-slate-900">
            {/* After Image Layer (Base) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={activeCase.afterImg}
                alt={activeCase.afterText}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-emerald-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow backdrop-blur-sm">
                AFTER: {activeCase.afterText}
              </div>
            </div>

            {/* Before Image Layer (Clipped Top) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 left-0 w-[300px] sm:w-[672px] h-full">
                <img
                  src={activeCase.beforeImg}
                  alt={activeCase.beforeText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow backdrop-blur-sm">
                  BEFORE: {activeCase.beforeText}
                </div>
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-2xl z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#123B5D] text-white flex items-center justify-center shadow-xl border-2 border-white text-xs font-bold">
                ↔
              </div>
            </div>
          </div>

          {/* Slider Range Control */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-xs font-bold text-slate-500">BEFORE</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="flex-1 accent-[#2D7D7A] cursor-pointer"
            />
            <span className="text-xs font-bold text-[#2D7D7A]">AFTER</span>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#123B5D] text-white text-sm font-semibold hover:bg-[#0A2338] shadow"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
