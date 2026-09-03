import EmergencyTriage from "@/components/interactive/EmergencyTriage";

export const metadata = {
  title: "Emergency Dental Care Triage",
  description: "Urgent dental care for severe pain, dental trauma, or broken teeth at Floss & Gloss Dental Clinic.",
};

export default function EmergencyPage() {
  return (
    <div className="py-12 bg-rose-50/40 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <EmergencyTriage />
      </div>
    </div>
  );
}
