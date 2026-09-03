"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is root canal treatment (RCT) painful at Floss & Gloss?",
    a: "Not at all. With modern local anesthesia techniques and digital apex locators, root canal treatments at our clinic are virtually painless. Most patients report feeling instant relief from severe toothache post-procedure.",
  },
  {
    q: "How do I book an appointment with Dr. Soni?",
    a: "You can book directly via our website's online slot manager, call our desk hotline at +91 98765 43210, or send us a message on WhatsApp for instant confirmation.",
  },
  {
    q: "Do you offer emergency dental consultations for acute pain?",
    a: "Yes. We reserve dedicated emergency time slots every day for acute toothache, dental trauma, bleeding, or broken crowns. Please use our Emergency Triage page or call us immediately.",
  },
  {
    q: "What are the payment options and EMI facilities?",
    a: "We accept Cash, UPI, Credit/Debit cards, and offer 0% Interest EMI options on major treatments like Invisible Aligners and Dental Implants through our healthcare finance partners.",
  },
  {
    q: "How often should I get my teeth cleaned professionally?",
    a: "Dental associations recommend professional scaling and polishing once every 6 months to prevent gum disease, tartar buildup, and bad breath.",
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider">
            Patient Support
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Clear, honest answers to common patient questions regarding procedures, costs, and clinic safety.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-[#F8FAF9] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-serif text-base font-bold text-[#123B5D]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2D7D7A] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
