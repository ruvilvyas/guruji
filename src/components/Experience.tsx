"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Quote, Star, CheckCircle } from "lucide-react";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  review: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSelectedIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const selected = testimonials[selectedIndex];

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Trusted by Clients
        </h2>

        <div className="text-center mb-8">
          <Link href="/review">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Leave Your Review
            </button>
          </Link>
        </div>

        {/* Main Testimonial Card */}
        {selected && (
          <div className="bg-indigo-50 rounded-xl shadow-md p-8 relative">
            <Quote className="w-6 h-6 text-indigo-400 mb-4" />
            <p className="text-lg text-gray-800 italic mb-6">“{selected.review}”</p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <p className="font-semibold">{selected.name}</p>
              <span className="text-indigo-600">({selected.company})</span>
            </div>
            <div className="flex mt-4 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500" />
              ))}
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="text-indigo-600 hover:underline"
                >
                  ← Previous
                </button>
                <button
                  onClick={nextTestimonial}
                  className="text-indigo-600 hover:underline"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
