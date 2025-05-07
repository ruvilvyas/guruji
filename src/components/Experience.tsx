import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    period: '2022',
    title: 'Freelance Developer',
    company: 'Remote',
    description: 'Worked with clients on small projects using MERN stack and delivered responsive websites.',
  },
  {
    period: '2023',
    title: 'Full Stack Learning',
    company: 'Udemy & YouTube',
    description: 'Learned advanced React, Node.js, and MongoDB through multiple online courses.',
  },
  {
    period: '2024',
    title: 'Personal Projects',
    company: 'Self-Driven',
    description: 'Built multiple full-stack web apps including a grocery supply chain project using MERN.',
  },
  {
    period: '2025',
    title: 'Job Hunting & DevOps Learning',
    company: 'Ongoing',
    description: 'Preparing for job placements and learning DevOps tools like Docker, GitHub Actions, and CI/CD.',
  },
];

export default function Experience() {
  const [selectedYear, setSelectedYear] = useState('2022');
  const selectedExperience = experiences.find((exp) => exp.period === selectedYear);

  return (
    <section className="py-16 bg-gray-100" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Year Selector - Vertical Timeline */}
          <div className="flex md:flex-col gap-4 md:w-1/4">
            {experiences.map((exp) => (
              <button
                key={exp.period}
                onClick={() => setSelectedYear(exp.period)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium border-2 transition duration-300 ${
                  selectedYear === exp.period
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                {exp.period}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:w-3/4 transition-all duration-300">
            <h3 className="text-3xl font-semibold text-blue-700 mb-2">{selectedExperience?.title}</h3>
            <p className="text-lg text-gray-600 mb-1">{selectedExperience?.company}</p>
            <p className="text-gray-700 text-md leading-relaxed">{selectedExperience?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
