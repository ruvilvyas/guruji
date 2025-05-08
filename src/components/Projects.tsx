import React from 'react';
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Grocery Supply Chain App",
    description:
      "A full-stack MERN app to streamline grocery supply chains with admin & user dashboards.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/ruvilvyas/grocery-app",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS featuring animation and clean UI.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/ruvilvyas/portfolio",
  },
  {
    title: "DevOps Practice Repo",
    description:
      "CI/CD pipeline examples using GitHub Actions and Docker for Node.js apps.",
    tech: ["Docker", "CI/CD", "GitHub Actions"],
    link: "https://github.com/ruvilvyas/devops-playground",
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
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl hover:scale-[1.02] transition-transform duration-300 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
