import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiZap, FiMessageSquare } from 'react-icons/fi';
import logo from '../../assets/mainlogo.jpeg';
import { demos } from '../../data/demos';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu if pathname changes
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#07080B]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <img
                src={logo}
                alt="Deyzora Logo"
                className="h-10 w-10 rounded-xl object-cover ring-2 ring-blue-500/30 group-hover:ring-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/10"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  DEYZORA
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  Demos
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Production Website Showcase
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
            <Link
              to="/"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${location.pathname === '/' || location.pathname === '/demos'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
            >
              All Demos
            </Link>



            <a
              href="/#services"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              Capabilities
            </a>

            <a
              href="/#why-us"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              Why Choose Us
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Counter Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
              <FiZap className="text-blue-400 animate-pulse" />
              <span>{demos.length} Live Demos</span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20am%20exploring%20your%20demo%20showcase%20and%20want%20to%20discuss%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <FiMessageSquare className="text-sm" />
              <span>Request Custom Site</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.1] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 rounded-2xl glass-card space-y-4 border border-white/[0.1]">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/20"
              >
                All Website Demos ({demos.length})
              </Link>
              <Link
                to="/ventex"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 flex items-center justify-between"
              >
                <span>Ventex Precision (3D Demo)</span>
                <span className="text-[10px] uppercase px-2 py-0.5 bg-amber-500/20 rounded">New</span>
              </Link>
              <a
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
              >
                Industries & Capabilities
              </a>
              <a
                href="/#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
              >
                Why Choose Deyzora
              </a>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href="https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20am%20exploring%20your%20demo%20showcase%20and%20want%20to%20discuss%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-600/30"
              >
                <FiMessageSquare />
                Chat on WhatsApp (+91 98790 01603)
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
