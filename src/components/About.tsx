import React from 'react'; 
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-12">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
        
         
<div className="md:w-1/7">
  <Image
    src="/guruji.jpg"
    alt="Guruji SMSA"
    className="rounded-full border-4 border-indigo-500 mx-auto"
    width={192}  // 48 * 4 (tailwind's w-48 is 12rem = 192px)
    height={192} // same as width for square image
    style={{ objectFit: "cover" }}
  />
</div>
         
          <div className="md:w-2/3 text-lg text-gray-300 space-y-4">
            <p>
              Hi! We&apos;re <span className="font-semibold text-pink-400">Guruji SMSA</span>, a creative video editing agency helping creators, influencers, and brands stand out online.
            </p>
            <p>
              We specialize in scroll-stopping short-form content like <b>Instagram Reels</b>, <b>YouTube Shorts</b>, and <b>promo videos</b> — all crafted to boost engagement and grow your presence.
            </p>
            <p>
              Along with clean, cinematic edits, we also offer <span className="font-semibold text-green-400">content writing support</span> to sharpen your message and make it more impactful.
            </p>
            <p>
              We&apos;re not just editors — we&apos;re your <b>creative partners</b> in making your content shine.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              "Video Editing", "Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve",
              "Motion Graphics", "Color Grading", "Sound Design", "Content Scripting"
            ].map((skill, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm text-indigo-200 py-3 rounded-lg shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
  href="https://www.instagram.com/gurujismsa?igsh=MWZtMW94aWswNjdxbQ==" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block mt-8 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20"
>
  Let&apos;s Connect →
</a>
        </div>
      </div>
    </section>
  );
}
