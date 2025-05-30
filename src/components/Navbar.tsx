'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-2">
            <Image
              src="/guruji.jpg" // Save your image as 'public/guruji-logo.jpg'
              alt="Guruji Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
              GURUJI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'Reviews', 'Our Work', 'Contact', 'About'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-3 px-4">
              {['Home', 'Experience', 'Projects', 'Contact', 'About'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
