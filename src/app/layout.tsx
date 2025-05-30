// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/auth-context"; // ✅ Import here
import WhatsAppChat from "@/components/WhatsAppChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GurujiAgency",
  description: "Hi! We’re Guruji SMSA, a creative video editing agency helping creators, influencers, and brands stand out online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider> {/* ✅ Wrap app here, NOT inside admin layout */}
          <Navbar />
          {children}
           <WhatsAppChat />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
