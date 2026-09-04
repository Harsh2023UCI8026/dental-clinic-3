"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactContent() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#2D7D7A] font-semibold text-xs uppercase tracking-wider">
          Reach Out To Us
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#123B5D] mt-2">
          Contact Floss & Gloss Clinic
        </h1>
        <p className="text-slate-600 text-sm mt-3">
          Have questions or need emergency dental care? Call us or visit our modern clinic in Shela, Bopal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Clinic Contact Info */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          <h2 className="font-serif text-xl font-bold text-[#123B5D]">Clinic Details</h2>
          
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Clinic Address</h3>
                <p className="text-slate-600">
                  Floss & Gloss Dental Clinic, Sky City Township, Shela, Bopal, Ahmedabad, Gujarat 380058
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Phone / Emergency Care</h3>
                <p className="text-slate-600">+91 98765 43210 / +91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Email Address</h3>
                <p className="text-slate-600">contact@flossandglossdental.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Working Hours</h3>
                <p className="text-slate-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-slate-500 text-xs mt-0.5">Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-xl overflow-hidden border border-slate-200 h-52">
            <iframe
              title="Floss & Gloss Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.95759160533!2d72.4649!3d23.0255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzMxLjgiTiA3MsKwMjcnNTMuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Quick Inquiry Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <h2 className="font-serif text-xl font-bold text-[#123B5D] mb-1">Send a Message</h2>
          <p className="text-slate-600 text-xs mb-6">
            Fill out the form below and our team will get back to you within 2 hours.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#123B5D] outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#123B5D] outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#123B5D] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Inquiry</label>
              <textarea
                rows={4}
                placeholder="Describe your dental issue or questions..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#123B5D] outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#123B5D] hover:bg-[#0e2f4a] text-white font-semibold py-3 px-6 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow"
            >
              <Send className="w-4 h-4" /> Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
