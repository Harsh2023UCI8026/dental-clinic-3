import DoctorProfile from "@/components/sections/DoctorProfile";
import SterilizationSection from "@/components/sections/SterilizationSection";

export const metadata = {
  title: "About Dr. Soni & Clinic History",
  description: "Learn more about Dr. Soni's 15+ years of clinical excellence and Floss & Gloss clinic history.",
};

export default function AboutPage() {
  return (
    <div className="py-12 bg-[#F8FAF9] min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#123B5D]">
          About Our Dental Practice
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          15+ years of clinical dedication to patient comfort, ethical diagnosis, and long-term oral health.
        </p>
      </div>
      <DoctorProfile />
      <SterilizationSection />
    </div>
  );
}
