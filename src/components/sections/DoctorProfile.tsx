"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, GraduationCap, Award, BookOpen, Play, X } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DoctorProfile() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Biography Card with Real Photo */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                  {/* Real Doctor Avatar Photo */}
                  <img
                    src="/images/dr-soni.jpg"
                    alt="Dr. Soni Photo"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#2D7D7A] shadow-md"
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#123B5D]">
                      Dr. Soni
                    </h3>
                    <p className="text-sm font-semibold text-[#2D7D7A]">
                      BDS, MDS (Oral & Maxillofacial Surgery)
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      15+ Years Clinical Practice • Reg No. A-4521
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif text-base font-semibold text-[#123B5D]">
                    Qualifications & Credentials
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#2D7D7A] shrink-0 mt-0.5" />
                      <span>Bachelor of Dental Surgery (BDS) – Govt. Dental College</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#2D7D7A] shrink-0 mt-0.5" />
                      <span>Master of Dental Surgery (MDS) – Gold Medalist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-[#2D7D7A] shrink-0 mt-0.5" />
                      <span>Certified Implantologist & Clear Aligner Practitioner</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-sm font-semibold text-[#2D7D7A] hover:text-[#123B5D] transition-colors"
                  >
                    Read Full Bio & Certifications →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Doctor Philosophy & Video Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider">
                Meet Your Dentist
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D] leading-tight">
                "Every Patient Deserves Honest, Gentle, and Ethical Dental Care."
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mt-3">
                Dr. Soni brings over 15 years of surgical and clinical expertise, having treated more than 10,000 patients in the Ahmedabad community. His philosophy centers around patient education, absolute painless techniques, and preserving natural tooth structure wherever possible.
              </p>

              {/* Core Values List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  "100% Transparent Treatment Plans",
                  "Strict Instrument Autoclaving",
                  "Child-Friendly & Gentle Approach",
                  "Same-Day Emergency Consultations",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-[#24323D]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D7D7A] shrink-0" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Video Message Card with HTML5 Medical Video Player */}
              <div className="pt-6">
                {!isPlayingVideo ? (
                  <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-6 shadow-md border border-slate-800 flex items-center justify-between group">
                    <div>
                      <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">
                        VIDEO MESSAGE
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white mt-0.5">
                        Welcome to Floss & Gloss Clinic
                      </h4>
                      <p className="text-xs text-slate-300">
                        A short 1-minute video intro by Dr. Soni regarding clinic standards & painless care.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-12 h-12 rounded-full bg-[#2D7D7A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-600 transition-all shrink-0"
                      aria-label="Play Doctor Welcome Video"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden bg-black shadow-2xl border border-slate-700">
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="absolute top-3 right-3 z-20 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/90 transition-colors"
                      title="Close Video"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <video
                      autoPlay
                      controls
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                      className="w-full h-64 object-cover"
                    ></video>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
