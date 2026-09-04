import ContactContent from "@/components/sections/ContactContent";

export const metadata = {
  title: "Contact Us | Floss & Gloss Dental Clinic",
  description: "Get in touch with Dr. Soni at Floss & Gloss Dental Clinic in Shela, Bopal, Ahmedabad. Book appointments, get directions or emergency care.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ContactContent />
    </div>
  );
}
