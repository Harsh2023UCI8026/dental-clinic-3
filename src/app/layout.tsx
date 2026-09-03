import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Chatbot from "@/components/layout/Chatbot";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Floss & Gloss Dental Clinic | Dr. Soni - BDS, MDS",
    template: "%s | Floss & Gloss Dental Clinic",
  },
  description:
    "Established local dental practice providing compassionate, painless, and modern dental care. Root Canal, Dental Implants, Aligners, Whitening & Emergency Dental Care.",
  keywords: [
    "Dentist in Shela Bopal Ahmedabad",
    "Best Dental Clinic Ahmedabad",
    "Dental Implants Ahmedabad",
    "Root Canal Specialist Dr Soni",
    "Clear Aligners Teeth Whitening",
    "Emergency Dentist",
  ],
  authors: [{ name: "Dr. Soni - BDS, MDS" }],
  openGraph: {
    title: "Floss & Gloss Dental Clinic | Exceptional Patient-Centered Dental Care",
    description:
      "15+ Years of trusted dental excellence. Modern technology meets traditional compassionate care.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Floss & Gloss Dental Clinic",
              image: "https://flossdentalstudio.in/wp-content/uploads/2023/02/cropped-cropped-logo-1-192x192.png",
              telephone: "+91 98765 43210",
              email: "care@flossandglossdental.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Suite 204, Platinum Plaza, Shela Bopal Main Road",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "380058",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "23.0225",
                longitude: "72.4652",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              priceRange: "₹₹",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "520",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#24323D] antialiased selection:bg-[#2D7D7A] selection:text-white">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <FloatingWhatsApp />
        <Chatbot />
      </body>
    </html>
  );
}
