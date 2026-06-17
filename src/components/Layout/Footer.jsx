import React from 'react';
import logo from '../../assets/mainlogo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-8 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Deyzora Logo" className="h-10 w-auto rounded" />
          <span className="text-xl font-bold tracking-wide">DEYZORA</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Deyzora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
