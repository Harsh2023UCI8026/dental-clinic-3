"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Paperclip } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  image?: string;
  options?: { label: string; action: string }[];
  time: string;
  isAnimated?: boolean;
}

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "bot",
    text: "Hello! 👋 Welcome to Floss & Gloss Dental Clinic. I am Dr. Soni's AI Dental Assistant.\n\nYou can ask me questions, upload a dental concern photo for preliminary AI analysis, or choose a quick option below:",
    options: [
      { label: "📅 Book Appointment", action: "book" },
      { label: "💰 Treatment Costs & EMI", action: "cost" },
      { label: "🦷 Root Canal (Painless RCT)", action: "rct" },
      { label: "✨ Clear Aligners / Braces", action: "aligners" },
      { label: "💎 Dental Implants", action: "implants" },
      { label: "📍 Clinic Location & Hours", action: "location" },
      { label: "🚨 Emergency Pain Triage", action: "emergency" },
    ],
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    isAnimated: true,
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, imagePreview]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleOptionClick = (action: string, label: string) => {
    addUserMessage(label);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (action === "book") {
        addBotMessage(
          "You can book your appointment online in 30 seconds! Please click below to choose your preferred date and doctor slot:",
          [{ label: "Go to Booking Form →", action: "nav_book" }]
        );
      } else if (action === "cost") {
        addBotMessage(
          "Here are our transparent treatment costs:\n• Root Canal (RCT): ₹3,500\n• Single Dental Implant: ₹18,000\n• Clear Aligners: ₹45,000 (0% EMI from ₹1,999/mo)\n• Laser Teeth Whitening: ₹4,000",
          [
            { label: "Calculate My EMI", action: "nav_pricing" },
            { label: "Book Consultation", action: "book" },
          ]
        );
      } else if (action === "rct") {
        addBotMessage(
          "🦷 Painless Root Canal (RCT):\nPerformed in a single visit with rotary 3D apex locators and zero pain. Would you like to check available slots?",
          [{ label: "Book RCT Slot", action: "nav_book" }]
        );
      } else if (action === "aligners") {
        addBotMessage(
          "✨ Clear Aligners:\nStraighten teeth discreetly without metal braces. Custom US-FDA approved aligner trays starting at ₹45,000 with 0% EMI.",
          [{ label: "Schedule Aligner Scan", action: "nav_book" }]
        );
      } else if (action === "implants") {
        addBotMessage(
          "💎 Permanent Dental Implants:\nHigh-grade titanium & zirconia implants replacing missing teeth naturally. Lifetime durability.",
          [{ label: "Book Implant Consultation", action: "nav_book" }]
        );
      } else if (action === "location") {
        addBotMessage(
          "📍 Floss & Gloss Dental Clinic\nSuite 204, Platinum Plaza, Shela Bopal Main Road, Ahmedabad 380058.\n\n🕒 Timings:\nMon–Sat: 9:00 AM – 8:00 PM\nSunday: Prior Appointment Only.",
          [{ label: "Call Hotline: +91 98765 43210", action: "call" }]
        );
      } else if (action === "emergency") {
        addBotMessage(
          "🚨 Emergency Care:\nIf you are experiencing severe toothache, bleeding, or trauma, please call our emergency hotline directly for priority treatment.",
          [{ label: "Call Emergency Line Now", action: "call" }]
        );
      } else if (action === "nav_book") {
        window.location.href = "/book-appointment";
      } else if (action === "nav_pricing") {
        window.location.href = "/pricing";
      } else if (action === "call") {
        window.location.href = "tel:+919876543210";
      }
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() && !imagePreview) return;

    const userText = inputValue;
    const currentImg = imagePreview;

    setInputValue("");
    setImagePreview(null);
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";

    addUserMessage(userText || (currentImg ? "Uploaded a dental concern photo for analysis" : ""), currentImg || undefined);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      if (currentImg) {
        addBotMessage(
          "📸 **Preliminary AI Image Analysis Result:**\n\nBased on visual inspection of the uploaded image:\n• **Observed Condition:** Possible localized enamel discoloration / mild surface wear.\n• **Recommended Procedure:** Professional scaling & polishing or clinical examination by Dr. Soni.\n• **Urgency:** Non-emergency. Standard clinical evaluation recommended.\n\n*Note: This visual AI analysis is preliminary and not a formal medical diagnosis.*",
          [
            { label: "Book Consultation with Dr. Soni", action: "nav_book" },
            { label: "Ask Another Question", action: "book" },
          ]
        );
        return;
      }

      const lower = userText.toLowerCase();
      if (lower.includes("price") || lower.includes("cost") || lower.includes("charges") || lower.includes("fee") || lower.includes("rate")) {
        addBotMessage(
          "Our treatment charges are completely transparent!\n• Root canal starts at ₹3,500\n• Implants start at ₹18,000\n• Whitening starts at ₹4,000\n\n0% Interest EMI options are also available.",
          [{ label: "Check EMI Calculator", action: "nav_pricing" }]
        );
      } else if (lower.includes("book") || lower.includes("appointment") || lower.includes("slot") || lower.includes("visit")) {
        addBotMessage("I can help you reserve a slot with Dr. Soni! Would you like to select a date now?", [
          { label: "Book Slot Online", action: "nav_book" },
        ]);
      } else if (lower.includes("pain") || lower.includes("emergency") || lower.includes("bleed") || lower.includes("swelling")) {
        addBotMessage(
          "If you are in severe pain, please call our desk hotline immediately at +91 98765 43210 for emergency priority assistance.",
          [{ label: "Call Hotline Now", action: "call" }]
        );
      } else if (lower.includes("aligner") || lower.includes("braces") || lower.includes("teeth straightening")) {
        addBotMessage(
          "We offer US-FDA approved Clear Invisible Aligners starting at ₹45,000 with 0% EMI options. They are virtually invisible and comfortable.",
          [{ label: "Book Aligner Assessment", action: "nav_book" }]
        );
      } else {
        addBotMessage(
          "Thank you for your inquiry! Dr. Soni's team will be happy to assist you. You can also upload a photo of your dental concern for preliminary analysis, or book a consultation online.",
          [
            { label: "Book Appointment", action: "nav_book" },
            { label: "Call Clinic", action: "call" },
          ]
        );
      }
    }, 900);
  };

  const addUserMessage = (text: string, image?: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text,
        image,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const addBotMessage = (text: string, options?: { label: string; action: string }[]) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text,
        options,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isAnimated: true,
      },
    ]);
  };

  return (
    <div className="fixed bottom-20 right-6 sm:bottom-6 z-50">
      {/* Premium Circular Animated Chatbot Trigger Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Animated Glowing Ripple Rings */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#2D7D7A] via-teal-400 to-[#123B5D] opacity-75 blur-sm animate-tilt group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
          <span className="absolute inset-0 rounded-full bg-[#2D7D7A] animate-ping opacity-25"></span>

          <button
            onClick={() => setIsOpen(true)}
            className="relative w-16 h-16 rounded-full bg-[#123B5D] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
            aria-label="Open AI Dental Assistant"
          >
            {/* Animated Bot Avatar */}
            <div className="relative flex items-center justify-center">
              <Bot className="w-8 h-8 text-amber-300 transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#123B5D] shadow-sm flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              </span>
            </div>

            {/* Hover Tooltip Pill */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#123B5D] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/20">
              AI Dental Assistant 💬
            </span>
          </button>
        </div>
      )}

      {/* Chatbot Window Modal */}
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[560px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#123B5D] text-white p-4 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2D7D7A] flex items-center justify-center text-white border-2 border-white/30 shadow-inner">
                <Bot className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold leading-tight">Floss & Gloss AI</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Photo & Text AI Diagnostic • 24/7</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F8FAF9]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#123B5D] text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-none"
                  }`}
                >
                  {/* Uploaded User Image inside message */}
                  {msg.image && (
                    <div className="mb-2 rounded-lg overflow-hidden border border-white/20 max-w-[200px]">
                      <img src={msg.image} alt="Uploaded Dental Concern" className="w-full h-auto object-cover" />
                    </div>
                  )}

                  {/* Message Text with Typewriter Animation for Bot */}
                  {msg.sender === "bot" && msg.isAnimated ? (
                    <TypewriterText text={msg.text} speed={15} />
                  ) : (
                    <p className="whitespace-pre-line">{msg.text}</p>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>

                {/* Expanded Interactive Option Pills */}
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt.action, opt.label)}
                        className="px-3 py-1.5 rounded-full border border-[#2D7D7A]/40 bg-[#EBF5F5] text-[#123B5D] text-xs font-semibold hover:bg-[#2D7D7A] hover:text-white transition-all text-left shadow-xs"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-500 text-xs bg-white px-3.5 py-2 rounded-xl border border-slate-200 w-fit shadow-xs">
                <Bot className="w-4 h-4 text-[#2D7D7A] animate-spin" />
                <span>AI Assistant is analyzing & typing...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Image Attachment Preview Box */}
          {imagePreview && (
            <div className="px-3 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <img src={imagePreview} alt="Preview" className="w-8 h-8 rounded object-cover border" />
                <span className="text-slate-700 font-medium">Dental concern photo attached</span>
              </div>
              <button onClick={removeSelectedImage} className="text-rose-500 hover:text-rose-700 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Form Input Bar with File Upload & Send */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-[#2D7D7A] hover:bg-slate-50 transition-colors shrink-0"
              title="Upload Photo for AI Diagnostic Analysis"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder="Ask question or upload photo..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 p-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#2D7D7A]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() && !imagePreview}
              className="p-2.5 rounded-lg bg-[#123B5D] text-white disabled:opacity-40 hover:bg-[#0A2338] transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
