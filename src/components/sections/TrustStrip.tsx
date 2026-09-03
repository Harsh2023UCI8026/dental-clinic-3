import { Award, ShieldAlert, Cpu, Heart } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const trustItems = [
  {
    icon: Award,
    title: "15+ Years Clinical Experience",
    desc: "Senior BDS, MDS Dental Surgeons",
  },
  {
    icon: Cpu,
    title: "Modern 3D Equipment",
    desc: "Low-radiation digital radiography",
  },
  {
    icon: ShieldAlert,
    title: "4-Step Sterilization Protocol",
    desc: "100% Autoclaved & Sealed instruments",
  },
  {
    icon: Heart,
    title: "Painless Dental Care",
    desc: "Compassionate anxiety-free procedures",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#EBF5F5] text-[#2D7D7A] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#123B5D]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
