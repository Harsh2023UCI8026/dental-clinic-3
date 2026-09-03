import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const treatmentsList = [
  {
    title: "Painless Root Canal (RCT)",
    slug: "root-canal",
    category: "Restorative Dentistry",
    desc: "Single-visit rotary root canal treatment with zero discomfort and 3D digital apex location.",
    startingPrice: "₹3,500",
  },
  {
    title: "Permanent Dental Implants",
    slug: "dental-implants",
    category: "Implants",
    desc: "High-grade titanium and zirconia implants to replace missing teeth with natural look and feel.",
    startingPrice: "₹18,000",
  },
  {
    title: "Clear Invisible Aligners",
    slug: "clear-aligners",
    category: "Orthodontics",
    desc: "Straighten teeth discreetly without metal braces using custom US-FDA approved aligner trays.",
    startingPrice: "₹45,000",
  },
  {
    title: "Laser Teeth Whitening",
    slug: "teeth-whitening",
    category: "Cosmetic Dentistry",
    desc: "Safe in-clinic whitening procedures removing deep tobacco and coffee stains in 45 minutes.",
    startingPrice: "₹4,000",
  },
  {
    title: "Ceramic Crowns & Bridges",
    slug: "crowns-bridges",
    category: "Restorative Dentistry",
    desc: "High-strength metal-free Zirconia crowns designed for maximum aesthetic durability.",
    startingPrice: "₹5,000",
  },
  {
    title: "Pediatric & Child Care",
    slug: "pediatric-dentistry",
    category: "Pediatric Dentistry",
    desc: "Gentle preventative dental care, fluoride therapies, and pit-and-fissure sealants for children.",
    startingPrice: "₹1,200",
  },
];

export default function TreatmentsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider block mb-1">
                Clinical Specializations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D]">
                Comprehensive Dental Treatments
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
                From preventative cleanings to advanced oral surgery, all treatments are executed with strict hospital-grade sterilization standards.
              </p>
            </div>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-[#123B5D] text-sm font-semibold hover:bg-slate-50 transition-colors shrink-0 shadow-sm"
            >
              <span>Explore All Treatments</span>
              <ArrowRight className="w-4 h-4 text-[#2D7D7A]" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatmentsList.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} direction="up">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-semibold text-[#2D7D7A] bg-[#EBF5F5] px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-[#123B5D]">
                      Starting {item.startingPrice}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#123B5D] group-hover:text-[#2D7D7A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="text-xs font-semibold text-[#123B5D] group-hover:text-[#2D7D7A] flex items-center gap-1 transition-colors"
                  >
                    <span>Learn Procedure Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/book-appointment"
                    className="text-xs font-medium text-slate-500 hover:text-[#123B5D]"
                  >
                    Book Slot
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
