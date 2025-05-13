"use client";
import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    github: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
       const error = await res.json();
throw new Error(error.error || "Unknown error");

      }

      alert("Contact info saved successfully!");
    } catch (error) {
      alert("Error: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {["email", "phone", "address", "github"].map((field) => (
        <div key={field} className="flex flex-col">
          <label className="mb-1 capitalize font-medium text-gray-700 dark:text-black-300">
            {field}
          </label>
          <input
            type="text"
            name={field}
value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Saving..." : "Save Contact"}
      </button>
    </div>
  );
}
