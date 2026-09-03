"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Phone, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAF9] via-white to-[#F8FAF9] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Medical Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F5] border border-[#2D7D7A]/20 text-[#2D7D7A] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#2D7D7A]" />
              <span>Trusted Dental Care in Shela • Bopal, Ahmedabad</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#123B5D] leading-[1.15] tracking-tight">
              Healthy Smiles. <br />
              <span className="text-[#2D7D7A] italic font-normal">Confident Lives.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Personalized dental care focused on your comfort, long-term oral health, and genuine well-being.
              Painless procedures backed by 15+ years of clinical excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/book-appointment"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#123B5D] text-white font-semibold text-base shadow-md hover:bg-[#0A2338] hover:shadow-lg transition-all"
              >
                <Calendar className="w-5 h-5 text-amber-300" />
                <span>Book an Appointment</span>
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 bg-white text-[#123B5D] font-semibold text-base hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#2D7D7A]" />
                <span>Call Clinic: +91 98765 43210</span>
              </a>
            </div>

            {/* Real Credential Stats */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#123B5D]">
                  15+
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 font-medium">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#123B5D]">
                  10,000+
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 font-medium">
                  Happy Patients
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#2D7D7A]">
                  100%
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 font-medium">
                  Sterilized Care
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lead Dental Surgeon Real Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Doctor Visual Presentation with Real Photo */}
              <div className="h-[420px] sm:h-[500px] relative flex flex-col justify-between text-white overflow-hidden group">
                <img
                  src="/images/dr-soni.jpg"
                  alt="Dr. Soni - Lead Dental Surgeon"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2338] via-[#123B5D]/40 to-transparent"></div>
                
                <div className="relative z-10 p-6 flex justify-between items-start">
                  <span className="bg-[#123B5D]/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30 shadow">
                    Lead Dental Surgeon
                  </span>
                  <div className="flex items-center gap-1 bg-amber-400 text-[#123B5D] px-2.5 py-1 rounded-full text-xs font-bold shadow">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>4.9 / 5.0</span>
                  </div>
                </div>

                {/* Bottom Details Overlay */}
                <div className="relative z-10 p-6 space-y-3">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-white drop-shadow-md">Dr. Soni</h3>
                    <p className="text-xs text-slate-200 font-medium drop-shadow">
                      BDS, MDS (Gold Medalist) • Senior Implantologist
                    </p>
                  </div>

                  <div className="bg-[#123B5D]/85 backdrop-blur-md rounded-xl p-3 border border-white/20 text-xs flex justify-around text-center shadow-lg">
                    <div>
                      <span className="block font-bold text-white">BDS, MDS</span>
                      <span className="text-slate-200">Qualifications</span>
                    </div>
                    <div className="border-r border-white/20"></div>
                    <div>
                      <span className="block font-bold text-white">15+ Yrs</span>
                      <span className="text-slate-200">Practice</span>
                    </div>
                    <div className="border-r border-white/20"></div>
                    <div>
                      <span className="block font-bold text-white">Shela, Bopal</span>
                      <span className="text-slate-200">Location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Verified Rating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                G
              </div>
              <div>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
                <span className="block text-xs font-bold text-[#123B5D]">
                  520+ Google Reviews
                </span>
                <span className="block text-[10px] text-slate-500">Verified Patient Ratings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
