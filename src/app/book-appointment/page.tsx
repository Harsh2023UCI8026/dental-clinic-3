import AppointmentForm from "@/components/forms/AppointmentForm";

export const metadata = {
  title: "Book Dental Appointment",
  description: "Schedule your consultation with Dr. Soni at Floss & Gloss Dental Clinic.",
};

export default function BookAppointmentPage() {
  return (
    <div className="py-12 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <AppointmentForm />
      </div>
    </div>
  );
}
