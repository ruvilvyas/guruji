"use client";
import { useState } from "react";

export default function ExperienceForm() {
  const [form, setForm] = useState({
    company: "",
    role: "",
    duration: "",
    description: "",
    technologies: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      technologies: form.technologies.split(",").map((tech) => tech.trim())
    };

    const res = await fetch("/api/experience", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) alert("Experience saved!");
    else alert("Failed to save.");
  };

  return (
    <div className="space-y-4">
      <input 
      
      name="company" value={form.company} onChange={handleChange} placeholder="Company" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input 
      
      name="role" value={form.role} onChange={handleChange} placeholder="Role" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input 
      
      name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea 
      
      name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input 
      
      name="technologies" value={form.technologies} onChange={handleChange} placeholder="Technologies (comma separated)" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button onClick={handleSubmit} className="btn bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
