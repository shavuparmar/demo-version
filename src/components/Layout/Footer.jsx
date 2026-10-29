import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare, FiExternalLink, FiHeart, FiShield, FiZap, FiPhoneCall } from 'react-icons/fi';
import logo from '../../assets/mainlogo.jpeg';
import { demos } from '../../data/demos';

const Footer = () => {
  return (
    <footer className="relative bg-[#07080B] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Deyzora Logo" className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/10" />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wide text-white">DEYZORA</span>
                <span className="text-[11px] text-blue-400 font-semibold tracking-wider uppercase">Website Engineering & Demos</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We engineer production-ready, ultra-fast websites and custom web applications for growing businesses. Explore our live interactive templates and launch your brand online in days.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20am%20interested%20in%20building%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/20 transition-colors"
              >
                <FiMessageSquare /> WhatsApp: +91 98790 01603
              </a>
            </div>
          </div>

          {/* Quick Demos Col */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-slate-200">
              Featured Demos
            </h4>
            <ul className="space-y-2.5 text-sm">
              {demos.slice(0, 5).map(demo => (
                <li key={demo.id}>
                  <Link 
                    to={`/${demo.slug}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{demo.name}</span>
                    {demo.slug === 'ventex' && (
                      <span className="text-[10px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded font-mono">3D</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Demos Col */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-slate-200">
              More Templates
            </h4>
            <ul className="space-y-2.5 text-sm">
              {demos.slice(5).map(demo => (
                <li key={demo.id}>
                  <Link 
                    to={`/${demo.slug}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {demo.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Inquiry Col */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-slate-200">
              Start A Project
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="text-xs text-slate-400 leading-relaxed">
                Have a unique design or looking for a custom solution? Talk directly with our lead developers.
              </p>
              <a
                href="https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20have%20a%20project%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                Get Quick Quote
              </a>
              <div className="pt-2 flex flex-col gap-1 text-[11px] text-slate-500">
                <span>⚡ 24-48 Hour Setup</span>
                <span>📱 100% Mobile Responsive</span>
                <span>🔒 Secure, Modern Codebase</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Deyzora</span>. All rights reserved. Built for high performance.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-slate-300 transition-colors">Showcase Home</Link>
            <Link to="/ventex" className="hover:text-amber-400 transition-colors">Ventex Precision</Link>
            <a 
              href="https://wa.me/919879001603" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors"
            >
              Direct WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
