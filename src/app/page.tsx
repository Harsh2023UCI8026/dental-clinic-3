import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import DoctorProfile from "@/components/sections/DoctorProfile";
import SmileAssessment from "@/components/interactive/SmileAssessment";
import TreatmentsGrid from "@/components/sections/TreatmentsGrid";
import BeforeAfterGallery from "@/components/interactive/BeforeAfterGallery";
import SterilizationSection from "@/components/sections/SterilizationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CostCalculator from "@/components/interactive/CostCalculator";
import FAQAccordion from "@/components/sections/FAQAccordion";
import EmergencyTriage from "@/components/interactive/EmergencyTriage";
import AppointmentForm from "@/components/forms/AppointmentForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Doctor Credentials & Bio */}
      <DoctorProfile />

      {/* 4. Interactive Smile Assessment */}
      <ScrollReveal direction="up" delay={0.1}>
        <SmileAssessment />
      </ScrollReveal>

      {/* 5. Comprehensive Treatments */}
      <TreatmentsGrid />

      {/* 6. Drag Before & After Case Studies */}
      <ScrollReveal direction="up" delay={0.1}>
        <BeforeAfterGallery />
      </ScrollReveal>

      {/* 7. Safety & Sterilization Protocol */}
      <SterilizationSection />

      {/* 8. Interactive Patient Testimonials & Review Submission */}
      <TestimonialsSection />

      {/* 9. Cost & EMI Estimator */}
      <ScrollReveal direction="up" delay={0.1}>
        <CostCalculator />
      </ScrollReveal>

      {/* 10. Emergency Triage Widget */}
      <ScrollReveal direction="up" delay={0.1}>
        <EmergencyTriage />
      </ScrollReveal>

      {/* 11. FAQ Accordion */}
      <ScrollReveal direction="up" delay={0.1}>
        <FAQAccordion />
      </ScrollReveal>

      {/* 12. Appointment Booking Section */}
      <section id="booking-section" className="py-16 sm:py-24 bg-[#F8FAF9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <AppointmentForm />
          </ScrollReveal>
        </div>
      </section>

      {/* 13. Clinic Location & Contact Card */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal direction="right" delay={0.1}>
                <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider">
                  Visit Our Practice
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#123B5D] mt-1">
                  Convenient Location in Shela Bopal
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Located on the main road with dedicated basement parking and elevator access for senior citizens.
                </p>
                <div className="space-y-2 text-sm text-slate-700 pt-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-[#2D7D7A] shrink-0 mt-0.5" />
                    <span>Suite 204, Platinum Plaza, Shela Bopal Main Road, Ahmedabad 380058</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#2D7D7A] shrink-0" />
                    <a href="tel:+919876543210" className="hover:text-[#2D7D7A] font-bold">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#123B5D] text-white font-semibold text-xs sm:text-sm hover:bg-[#0A2338]"
                  >
                    Get Google Maps Directions
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 h-72 sm:h-80 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-inner flex items-center justify-center text-slate-500">
              <ScrollReveal direction="left" delay={0.2} className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6 space-y-2">
                  <MapPin className="w-10 h-10 text-[#2D7D7A] mx-auto animate-bounce" />
                  <h4 className="font-serif text-lg font-bold text-[#123B5D]">
                    Floss & Gloss Dental Clinic
                  </h4>
                  <p className="text-xs text-slate-500">
                    Shela Bopal Main Road, Ahmedabad • Parking Available
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
