"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star, Plus, Upload, X, CheckCircle2 } from "lucide-react";

interface PatientReview {
  id: string;
  name: string;
  treatment: string;
  review: string;
  photo?: string;
  rating: number;
  date: string;
  verified: boolean;
}

const initialReviews: PatientReview[] = [
  {
    id: "1",
    name: "Ananya Mehta",
    treatment: "Invisible Clear Aligners",
    review:
      "Dr. Soni explained the entire aligner process transparently. My teeth straightening took 8 months and nobody even noticed I was wearing aligners!",
    rating: 5,
    date: "2 days ago",
    verified: true,
  },
  {
    id: "2",
    name: "Vikram Patel",
    treatment: "Root Canal + Zirconia Crown",
    review:
      "I was terrified of root canals due to past painful experiences elsewhere. Dr. Soni's painless technique was unbelievable—zero pain during or after!",
    rating: 5,
    date: "1 week ago",
    verified: true,
  },
  {
    id: "3",
    name: "Neha Joshi",
    treatment: "Laser Teeth Whitening",
    review:
      "Got my teeth whitened before my wedding. Super clean clinic, strict sterilization, and very warm staff. Highly recommended in Shela Bopal!",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
  },
];

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<PatientReview[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    treatment: "Root Canal Treatment",
    review: "",
    rating: 5,
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const reviewToAdd: PatientReview = {
      id: Date.now().toString(),
      name: newReview.name,
      treatment: newReview.treatment,
      review: newReview.review,
      photo: photoPreview || undefined,
      rating: newReview.rating,
      date: "Just now",
      verified: true,
    };

    setReviews([reviewToAdd, ...reviews]);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setNewReview({ name: "", treatment: "Root Canal Treatment", review: "", rating: 5 });
      setPhotoPreview(null);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider block mb-1">
                PATIENT TESTIMONIALS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D]">
                Stories of Transformed Smiles
              </h2>
              <div className="flex items-center gap-2 text-amber-500 text-sm font-bold mt-1">
                <span>★★★★★ 4.9/5.0</span>
                <span className="text-slate-500 font-normal">from 520+ verified patient reviews</span>
              </div>
            </div>

            {/* Write a Review Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#123B5D] text-white text-sm font-semibold hover:bg-[#0A2338] transition-colors shrink-0 shadow"
            >
              <Plus className="w-4 h-4 text-amber-300" />
              <span>Write Patient Review</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Patient Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((story, idx) => (
            <ScrollReveal key={story.id} delay={idx * 0.1} direction="up">
              <div className="bg-[#F8FAF9] p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex text-amber-400 text-xs">
                      {Array.from({ length: story.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400">{story.date}</span>
                  </div>

                  {/* Patient Review Text */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{story.review}"
                  </p>

                  {/* Patient Uploaded Result Photo (If available) */}
                  {story.photo && (
                    <div className="rounded-xl overflow-hidden border border-slate-200 max-h-48 mt-2">
                      <img src={story.photo} alt="Patient Result" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-[#123B5D] block">{story.name}</span>
                    <span className="text-[#2D7D7A] font-medium">{story.treatment}</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded font-semibold">
                    ✓ Verified Patient
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add Review Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-[#123B5D]">
                    Review Published!
                  </h3>
                  <p className="text-xs text-slate-600">
                    Thank you for sharing your feedback with the Floss & Gloss community.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-serif text-xl font-bold text-[#123B5D]">
                      Share Your Treatment Review
                    </h3>
                    <p className="text-xs text-slate-500">
                      Your honest experience helps other local patients choose gentle dental care.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyesh Shah"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1">
                      Treatment Received
                    </label>
                    <select
                      value={newReview.treatment}
                      onChange={(e) => setNewReview({ ...newReview, treatment: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A] bg-white"
                    >
                      <option>Root Canal Treatment</option>
                      <option>Dental Implants</option>
                      <option>Clear Aligners</option>
                      <option>Teeth Whitening</option>
                      <option>Ceramic Crowns</option>
                      <option>Pediatric Dentistry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share details about painless care, hygiene, and doctor behavior..."
                      value={newReview.review}
                      onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2D7D7A]"
                    ></textarea>
                  </div>

                  {/* Optional Review Photo Upload */}
                  <div>
                    <label className="block text-xs font-bold text-[#123B5D] uppercase tracking-wider mb-1">
                      Upload Smile Photo (Optional)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#123B5D] file:text-white hover:file:bg-[#0A2338]"
                    />
                    {photoPreview && (
                      <div className="mt-2 w-16 h-16 rounded-lg overflow-hidden border">
                        <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#123B5D] text-white font-bold text-sm hover:bg-[#0A2338] transition-colors shadow"
                  >
                    Post Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
