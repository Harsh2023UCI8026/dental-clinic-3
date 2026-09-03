import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A2338] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand & Credibility */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2D7D7A] text-white flex items-center justify-center font-serif text-xl font-bold">
              F&G
            </div>
            <div>
              <span className="block font-serif text-xl font-bold text-white leading-tight">
                Floss & Gloss
              </span>
              <span className="block text-xs text-slate-400">Dental Clinic</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Providing compassionate, painless, and ethical dental care for over 15 years.
            Modern dentistry backed by traditional doctor trust.
          </p>
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
            <span>★★★★★</span>
            <span className="text-slate-300 font-normal">4.9/5 from 520+ Google Reviews</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Dr. Soni & Clinic</Link></li>
            <li><Link href="/treatments" className="hover:text-white transition-colors">All Treatments Catalog</Link></li>
            <li><Link href="/before-after" className="hover:text-white transition-colors">Before & After Results</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & EMI Guidance</Link></li>
            <li><Link href="/quiz" className="hover:text-white transition-colors">Interactive Smile Assessment</Link></li>
            <li><Link href="/emergency" className="hover:text-amber-400 transition-colors">Emergency Dental Triage</Link></li>
          </ul>
        </div>

        {/* Col 3: Popular Treatments */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">
            Specialized Care
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/treatments/root-canal" className="hover:text-white transition-colors">Painless Root Canal (RCT)</Link></li>
            <li><Link href="/treatments/dental-implants" className="hover:text-white transition-colors">Permanent Dental Implants</Link></li>
            <li><Link href="/treatments/clear-aligners" className="hover:text-white transition-colors">Invisible Clear Aligners</Link></li>
            <li><Link href="/treatments/teeth-whitening" className="hover:text-white transition-colors">Laser Teeth Whitening</Link></li>
            <li><Link href="/treatments/crowns-bridges" className="hover:text-white transition-colors">Ceramic Crowns & Bridges</Link></li>
            <li><Link href="/treatments/pediatric-dentistry" className="hover:text-white transition-colors">Pediatric Dental Care</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Hours */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">
            Clinic Location
          </h4>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-5 h-5 text-[#2D7D7A] shrink-0 mt-0.5" />
            <span>Suite 204, Platinum Plaza, Shela Bopal Main Road, Ahmedabad, Gujarat 380058</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-[#2D7D7A] shrink-0" />
            <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-[#2D7D7A] shrink-0" />
            <a href="mailto:care@flossandglossdental.com" className="hover:text-white">care@flossandglossdental.com</a>
          </div>
          <div className="flex items-start gap-3 text-sm pt-2 text-slate-400">
            <Clock className="w-4 h-4 text-[#2D7D7A] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-slate-200">Mon–Sat: 9:00 AM – 8:00 PM</p>
              <p className="text-xs">Sunday: Prior Appointment Only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Medical Disclaimer Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Floss & Gloss Dental Clinic. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
          <Link href="/disclaimer" className="hover:text-slate-400">Medical Disclaimer</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-[11px] text-slate-600 text-center leading-relaxed">
        Medical Disclaimer: Information on this website is for educational purposes only and does not constitute formal medical diagnosis or advice. Always consult a licensed dental doctor for professional clinical evaluation.
      </div>
    </footer>
  );
}
