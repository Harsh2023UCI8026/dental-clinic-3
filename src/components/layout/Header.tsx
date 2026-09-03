"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Doctor", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Patient Stories", href: "/testimonials" },
  { name: "Pricing & EMI", href: "/pricing" },
  { name: "Before & After", href: "/before-after" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      {/* 
        Full width container with px-4 sm:px-8 lg:px-12 
        removes left/right whitespace padding from extreme edges while maintaining clean alignment
      */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name (Flush Left) */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#123B5D] text-white flex items-center justify-center font-serif text-xl font-bold shadow-md group-hover:bg-[#2D7D7A] transition-colors">
            F&G
          </div>
          <div>
            <span className="block font-serif text-lg sm:text-xl font-bold text-[#123B5D] leading-tight whitespace-nowrap">
              Floss & Gloss
            </span>
            <span className="block text-[10px] text-slate-500 font-medium tracking-wide uppercase whitespace-nowrap">
              Dental Clinic • Dr. Soni (BDS, MDS)
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Increased spacing gap-8 md:gap-10) */}
        <nav className="hidden xl:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#2D7D7A] whitespace-nowrap py-1 ${
                  isActive ? "text-[#2D7D7A] font-bold border-b-2 border-[#2D7D7A]" : "text-[#24323D]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons (Flush Right) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 text-[#123B5D] text-sm font-semibold hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#2D7D7A]" />
            <span>Call Clinic</span>
          </a>
          <Link
            href="/book-appointment"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#123B5D] text-white text-sm font-semibold hover:bg-[#0A2338] transition-all shadow-sm hover:shadow whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 text-base font-medium border-b border-slate-100 ${
                pathname === link.href ? "text-[#2D7D7A] font-bold" : "text-[#24323D]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-[#123B5D] text-white font-semibold text-sm shadow"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+919876543210"
              className="w-full text-center py-3 rounded-lg border border-slate-300 text-[#123B5D] font-semibold text-sm"
            >
              Call Clinic: +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
