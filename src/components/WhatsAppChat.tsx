import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/918160977869?text=Hi%20Guruji%20SMSA%2C%20I'm%20interested%20in%20your%20video%20editing%20services."
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
