import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiPhoneCall, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FloatingElements = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* Get Quote Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/#contact"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-primary-600 to-secondary-600 rounded-full text-white shadow-lg hover:shadow-primary-500/50 transition-all hover:-translate-y-1 group relative"
          title="Get Quote"
        >
          <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform" />
          <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            Get Quote
          </span>
        </Link>
      </motion.div>

      {/* Phone Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center w-14 h-14 bg-dark-800 border border-white/10 rounded-full text-white shadow-lg hover:bg-dark-700 transition-all hover:-translate-y-1 group relative"
          title="Call Us"
        >
          <FiPhoneCall className="text-xl" />
          <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            Call Us
          </span>
        </a>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-lg hover:shadow-[#25D366]/50 transition-all hover:-translate-y-1 group relative animate-bounce"
          title="WhatsApp Us"
          style={{ animationDuration: '3s' }}
        >
          <FiMessageCircle className="text-2xl" />
          <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            WhatsApp Us
          </span>
        </a>
      </motion.div>

    </div>
  );
};

export default FloatingElements;
