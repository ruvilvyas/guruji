import React from 'react';
import { ExternalLink } from "lucide-react";

const works = [
  {
    title: "Instagram Reels Pack for Fashion Brand",
    description:
      "A set of high-energy Reels designed to boost engagement and showcase new arrivals for a fashion label.",
    tech: ["Premiere Pro", "After Effects", "Color Grading", "Transitions"],
    link: "https://drive.google.com/your-reel-example", // Replace with real link
  },
  {
    title: "YouTube Shorts for Tech Influencer",
    description:
      "Cinematic Shorts crafted with attention-grabbing hooks, subtitles, and motion effects for a tech content creator.",
    tech: ["DaVinci Resolve", "Subtitles", "Zoom Effects", "Sound Design"],
    link: "https://youtube.com/shorts/your-example", // Replace with real link
  },
  {
    title: "Promo Video for Event Launch",
    description:
      "A sleek promotional edit featuring dynamic transitions, music sync, and key messaging for an event company.",
    tech: ["After Effects", "Text Animation", "Sync Editing", "Cinematic Cuts"],
    link: "https://vimeo.com/your-promo-link", // Replace with real link
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-14">
          Our Work
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl hover:scale-[1.02] transition-transform duration-300 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {work.title}
              </h3>
              <p className="text-gray-300 mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {work.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:underline"
              >
                View Edit <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
