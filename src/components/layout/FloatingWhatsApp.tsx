"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Floss%20%26%20Gloss%20Dental%20Clinic%2C%20I%20have%20a%20question%20regarding%20dental%20treatment."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 left-6 z-50 items-center gap-2.5 bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white stroke-emerald-600" />
      <span className="font-semibold text-xs sm:text-sm">WhatsApp Inquiry</span>
    </a>
  );
}
