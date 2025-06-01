"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  review: string;
}

export default function Testimonials() {
  // Dummy testimonial data
  const dummyTestimonials: Testimonial[] = [
    {
      _id: "1",
      name: "Aarav Patel",
      company: "VisionTech Pvt. Ltd.",
      review: "Absolutely loved the service! It exceeded my expectations in every way.",
    },
    {
      _id: "2",
      name: "Sneha Sharma",
      company: "DesignStudio Inc.",
      review: "Clean UI, smooth user experience. Highly recommend their product!",
    },
  ];

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    // Manually set dummy testimonials
    setTestimonials(dummyTestimonials);
    setSelectedId(dummyTestimonials[0]._id);
  }, []);

  const selected = testimonials.find((t) => t._id === selectedId);

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          What People Say
        </h2>

        {/* Review Button */}
        <div className="text-center mb-16">
          <Link href="/review">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Leave Your Review
            </button>
          </Link>
        </div>

        {/* Testimonials View */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Names */}
          <div className="flex md:flex-col gap-4 md:w-1/4 overflow-x-auto md:overflow-visible">
            {testimonials.map((t) => (
              <button
                key={t._id}
                onClick={() => setSelectedId(t._id)}
                className={`px-4 py-3 rounded-lg text-left font-medium border transition duration-300 ${
                  selectedId === t._id
                    ? "bg-indigo-600 text-white border-indigo-600 shadow"
                    : "bg-white text-indigo-600 border-indigo-400 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                <Quote className="w-4 h-4 inline-block mr-2" />
                {t.name}
              </button>
            ))}
          </div>

          {/* Main Testimonial Display */}
          {selected && (
            <div className="bg-indigo-50 rounded-xl shadow-md p-6 md:w-3/4 transition-all duration-300">
              <p className="text-lg text-gray-800 italic mb-4">“{selected.review}”</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">{selected.name}</p>
                <p className="text-indigo-700">{selected.company}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
