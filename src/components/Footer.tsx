import React from 'react';

const Footer = () => {
  return (
<footer className="bg-white text-black text-center py-8 mt-12">
<p className="text-xl font-semibold mb-4">Thanks for visiting my Agency!</p>

      <div className="flex justify-center gap-6 mb-4 text-blue-600 font-medium">
       
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:siddhantkumarparmar@gmail.com" className="hover:underline">
          Email
        </a>
      </div>

      <p className="text-sm text-gray-500">© 2025 GurujiAgency. all rights reserved.</p>
    </footer>
  );
};

export default Footer;
