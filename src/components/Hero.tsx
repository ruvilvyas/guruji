"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  // Hardcoded data instead of fetching from API
  const intro = {
    welcomeText: "Hello, I'm",
    firstName: "Dhruvil",
    lastName: "Vyas",
    caption: "Frontend Developer & Designer",
    description: "I craft responsive web experiences using modern tools like React, Tailwind CSS, and Next.js. Let's build something awesome together.",
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light -top-48 -left-48 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-soft-light -top-48 -right-48 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light -bottom-48 left-48 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative text-center max-w-2xl px-4 space-y-8">
        <div className="animate-fade-in">
          <p className="text-lg text-indigo-400 font-mono mb-4">{intro.welcomeText}</p>
          <h1 className="text-6xl font-extrabold md:text-7xl bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            <Typewriter
              words={[`${intro.firstName} ${intro.lastName}`]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300 mt-6 font-semibold">
            {intro.caption}
          </h2>
        </div>

        <div className="animate-slide-up">
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            {intro.description}
          </p>
          <button className="mt-8 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
            Let&apos;s Connect →
          </button>
        </div>
      </div>
    </div>
  );
}
