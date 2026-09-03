import BeforeAfterGallery from "@/components/interactive/BeforeAfterGallery";

export const metadata = {
  title: "Patient Transformation Results (Before & After)",
  description: "Explore real clinical case studies and smile transformations performed by Dr. Soni.",
};

export default function BeforeAfterPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <BeforeAfterGallery />
      </div>
    </div>
  );
}
