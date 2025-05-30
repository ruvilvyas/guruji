"use client";
import React, { useState } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  _id: string;
  name: string;
  position: string;
  company: string;
  review: string;
}

// Dummy testimonials
const defaultTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Ravi Mehta",
    position: "CTO",
    company: "TechNova",
    review: "Working with this team was a fantastic experience. Their solutions are top-notch.",
  },
  {
    _id: "2",
    name: "Priya Sharma",
    position: "Design Lead",
    company: "Creatify Studio",
    review: "Truly creative minds! They turned our vision into a stunning website.",
  },
];

const Testimonial = () => {
  const [testimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [selectedId, setSelectedId] = useState<string>(defaultTestimonials[0]._id);

  const selected = testimonials.find((t) => t._id === selectedId);

  return (
    <section className="py-16 bg-white" id="testimonial">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Testimonials
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar selector */}
          <div className="flex md:flex-col gap-4 md:w-1/4">
            {testimonials.map((t) => (
              <button
                key={t._id}
                onClick={() => setSelectedId(t._id)}
                className={`px-4 py-3 rounded-lg text-left font-medium border-2 transition duration-300 ${
                  selectedId === t._id
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                    : "bg-white text-indigo-600 border-indigo-400 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                <Quote className="w-4 h-4 inline-block mr-2" />
                {t.name}
              </button>
            ))}
          </div>

          {/* Testimonial Detail Card */}
          {selected && (
            <div className="bg-gray-100 rounded-xl shadow-lg p-8 md:w-3/4 transition-all duration-300">
              <p className="text-xl text-gray-700 italic mb-6">“{selected.review}”</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">{selected.name}</p>
                <p>{selected.position} at {selected.company}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
