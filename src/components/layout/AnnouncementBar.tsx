"use client";

import { Phone, Clock, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AnnouncementBar() {
  const [lang, setLang] = useState<"EN" | "HI">("EN");

  return (
    <div className="bg-[#123B5D] text-white text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5 text-rose-300 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span>Emergency Care Available:</span>
            <a
              href="tel:+919876543210"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#2D7D7A]" />
            <span>Mon–Sat: 9:00 AM – 8:00 PM (Sun By Appointment)</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/emergency"
            className="text-amber-300 hover:text-amber-200 text-[11px] font-medium hidden sm:inline"
          >
            Acute Pain Triage →
          </Link>
          <div className="flex items-center gap-1.5 bg-white/10 rounded px-2 py-0.5 text-[11px]">
            <Globe className="w-3 h-3 text-slate-300" />
            <button
              onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
              className="hover:text-amber-300 font-medium transition-colors cursor-pointer"
            >
              {lang === "EN" ? "English | हिन्दी" : "हिन्दी | English"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
