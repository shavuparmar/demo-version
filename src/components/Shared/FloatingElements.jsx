import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiArrowUp } from 'react-icons/fi';

const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#11141B] border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 shadow-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-lg" />
        </button>
      )}

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20am%20interested%20in%20a%20website%20demo%20and%20pricing."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1"
        title="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <FiMessageSquare className="text-lg fill-current" />
        <span className="text-xs font-bold tracking-wide">
          Quick Inquiry
        </span>
      </a>

    </div>
  );
};

export default FloatingElements;
