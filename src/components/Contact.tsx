"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contact = {
    email: "siddhantkumarparmar@gmail.com",
    phone: "+91 81609 77869",
    address: "Ahmedabad, Gujarat",
  };

  return (
    <section className="py-16 bg-gray-100" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-6">
          <ContactItem icon={<Mail />} label="Email" value={contact.email} />
          <ContactItem icon={<Phone />} label="Phone" value={contact.phone} />
          <ContactItem icon={<MapPin />} label="Address" value={contact.address} />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-4">
      <div className="text-blue-600 mt-1">{icon}</div>
      <p className="text-lg text-gray-700">
        <span className="font-semibold text-blue-700">{label}:</span>{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            {value}
          </a>
        ) : (
          value
        )}
      </p>
    </div>
  );
}
