import CostCalculator from "@/components/interactive/CostCalculator";

export const metadata = {
  title: "Treatment Pricing & 0% Interest EMI Guide",
  description: "Transparent dental treatment costs and flexible monthly payment plans at Floss & Gloss Dental Clinic.",
};

export default function PricingPage() {
  return (
    <div className="py-12 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <CostCalculator />
      </div>
    </div>
  );
}
