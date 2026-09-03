"use client";

import { Phone, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg p-2.5 flex items-center justify-around gap-2">
      <a
        href="tel:+919876543210"
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg border border-slate-200 text-[#123B5D] bg-slate-50 text-xs font-semibold hover:bg-slate-100 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#2D7D7A] mb-0.5" />
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/919876543210?text=Hello%20Dr.%20Soni%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
      >
        <MessageCircle className="w-4 h-4 mb-0.5" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/book-appointment"
        className="flex-[1.2] flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#123B5D] text-white text-xs font-semibold hover:bg-[#0A2338] transition-colors shadow-sm"
      >
        <Calendar className="w-4 h-4 text-amber-300 mb-0.5" />
        <span>Book Slot</span>
      </Link>
    </div>
  );
}
