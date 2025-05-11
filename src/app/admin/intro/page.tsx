"use client";
import { useState } from "react";

export default function IntroForm() {
  const [formData, setFormData] = useState({
    welcomeText: "",
    firstName: "",
    lastName: "",
    caption: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/intro", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    alert("Saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5">
        <FormField
          label="Welcome Text"
          name="welcomeText"
          value={formData.welcomeText}
          onChange={handleChange}
        />
        <FormField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <FormField
          label="Caption"
          name="caption"
          value={formData.caption}
          onChange={handleChange}
        />
        <FormField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          textarea
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Save
      </button>
    </div>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  name: string;
  value: string;
onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium mb-1 text-black-700 dark:text-black-300">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"        />
      ) : (
        <input
          id={name}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"        />
      )}
    </div>
  );
}
