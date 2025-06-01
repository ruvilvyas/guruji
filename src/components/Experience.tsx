"use client";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  review: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    review: "",
  });

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        if (data.length) setSelectedId(data[0]._id);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/testimonials", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const newEntry = await res.json();
    setTestimonials([newEntry, ...testimonials]);
    setFormData({ name: "", company: "", review: "" });
    setSelectedId(newEntry._id);
  };

  const selected = testimonials.find((t) => t._id === selectedId);

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">What People Say</h2>

        {/* Add Review Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded-xl p-6 shadow-md max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Leave a Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border text-black border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Your Company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="border text-black border-gray-300 p-3 rounded"
            />
            <textarea
              placeholder="Write your review..."
              required
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              className="border text-black border-gray-300 p-3 rounded md:col-span-2"
              rows={4}
            ></textarea>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

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
                <p>
                  <span className="text-indigo-700">{selected.company}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
