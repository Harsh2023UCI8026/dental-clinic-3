import SmileAssessment from "@/components/interactive/SmileAssessment";

export const metadata = {
  title: "Interactive Smile Assessment Quiz",
  description: "Identify your dental concerns and get instant recommended steps from Dr. Soni.",
};

export default function QuizPage() {
  return (
    <div className="py-12 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <SmileAssessment />
      </div>
    </div>
  );
}
