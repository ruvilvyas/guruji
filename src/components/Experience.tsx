"use client";
import React, { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

interface Experience {
  _id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        if (data.length > 0) setSelectedId(data[0]._id);
      });
  }, []);

  const selectedExperience = experiences.find((exp) => exp._id === selectedId);

  return (
    <section className="py-16 bg-gray-100" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Vertical Button Timeline */}
          <div className="flex md:flex-col gap-4 md:w-1/4">
            {experiences.map((exp) => (
              <button
                key={exp._id}
                onClick={() => setSelectedId(exp._id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium border-2 transition duration-300 ${
                  selectedId === exp._id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-blue-600 border-blue-400 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <Briefcase className="w-5 h-5" />
                {exp.duration.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Detail Card */}
          {selectedExperience && (
            <div className="bg-white rounded-xl shadow-lg p-8 md:w-3/4 transition-all duration-300">
              <h3 className="text-3xl font-semibold text-blue-700 mb-2">{selectedExperience.role}</h3>
              <p className="text-lg text-gray-600 mb-1">{selectedExperience.company}</p>
              <p className="text-sm text-gray-500 mb-4">{selectedExperience.duration}</p>
              <p className="text-gray-700 text-md leading-relaxed mb-4">
                {selectedExperience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
