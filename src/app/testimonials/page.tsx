import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata = {
  title: "Patient Stories & Reviews | Floss & Gloss Dental Clinic",
  description: "Read genuine feedback, reviews, and uploaded stories from our patients at Floss & Gloss Dental Clinic.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-8 pb-16">
        <TestimonialsSection />
      </div>
    </div>
  );
}
