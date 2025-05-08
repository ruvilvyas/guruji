// src/components/Footer.tsx

import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-8 mt-12">
        <p className="text-xl font-semibold mb-4">Thanks for visiting my portfolio!</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/ruvilvyas" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/DhruvilVyas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:dhruvilvyas03@gmail.com">Email</a>
        </div>
        <p className="text-sm text-gray-400">© 2025 VDR. i don't need rights.</p>
      </footer>
    );
  };
  
  export default Footer;
  