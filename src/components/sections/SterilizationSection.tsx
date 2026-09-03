import { ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Ultrasonic Cleaning",
    desc: "Instruments undergo initial debris removal using advanced ultrasonic enzymatic cavitation.",
  },
  {
    num: "02",
    title: "Class-B Autoclave Sterilization",
    desc: "100% sterilization at 134°C high pressure to eliminate all bacterial and viral pathogens.",
  },
  {
    num: "03",
    title: "Hermetic Pouch Packaging",
    desc: "Sterilized tools are sealed in clinical indicator pouches and opened directly in front of the patient.",
  },
  {
    num: "04",
    title: "Disinfected Treatment Chairs",
    desc: "Medical-grade surface disinfection between every single patient appointment without exception.",
  },
];

export default function SterilizationSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#123B5D] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Uncompromised Clinical Safety</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Your Safety Comes First
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              We enforce strict 4-step hospital-grade sterilization protocols so you can receive dental treatment with complete peace of mind.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.12} direction="up">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#2D7D7A] transition-colors relative h-full">
                <span className="font-serif text-4xl font-bold text-[#2D7D7A]/40 block mb-2">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 bg-white/10 rounded-xl p-6 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2D7D7A] text-white flex items-center justify-center font-bold text-xl shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  100% Disposable Personal Protection Equipment
                </h4>
                <p className="text-xs text-slate-300">
                  Single-use gloves, drapes, suction tips, and syringes used exclusively for every patient.
                </p>
              </div>
            </div>
            <a
              href="tel:+919876543210"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-500 transition-colors shrink-0"
            >
              Inquire About Hygiene Standards
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
