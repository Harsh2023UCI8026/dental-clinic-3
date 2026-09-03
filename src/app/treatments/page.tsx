import TreatmentsGrid from "@/components/sections/TreatmentsGrid";
import CostCalculator from "@/components/interactive/CostCalculator";

export const metadata = {
  title: "Comprehensive Dental Treatments & Procedures",
  description: "Explore pain-free dental treatments including Root Canal, Dental Implants, Aligners, and Whitening.",
};

export default function TreatmentsPage() {
  return (
    <div className="py-12 bg-[#F8FAF9] min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#123B5D]">
          Our Specialized Treatments
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          Hospital-grade sterilization, modern digital diagnostics, and compassionate clinical execution by Dr. Soni.
        </p>
      </div>
      <TreatmentsGrid />
      <CostCalculator />
    </div>
  );
}
