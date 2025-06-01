"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewForm() {
  const [formData, setFormData] = useState({ name: "", company: "", review: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/testimonials", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    setFormData({ name: "", company: "", review: "" });
    router.push("/#reviews"); // Redirect to main page testimonials
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="bg-gray-100 rounded-xl p-6 shadow-md">
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
      </div>
    </section>
  );
}
