import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink, FiMonitor, FiSmartphone, FiTablet, FiCheck, FiStar } from 'react-icons/fi';

const DemoCard = ({ demo }) => {
  const isFeatured = demo.slug === 'ventex' || demo.featured;

  return (
    <div className={`group rounded-2xl glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
      isFeatured 
        ? 'border-blue-500/30 hover:border-blue-400/60 shadow-[0_12px_40px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/20' 
        : 'hover:border-white/20'
    }`}>
      
      {/* Card Header & Preview Image */}
      <div>
        {/* Mock Browser Header Bar */}
        <div className="bg-[#0C0E14] px-4 py-2.5 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>

          <div className="bg-white/[0.04] px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-400 border border-white/[0.04] truncate max-w-[170px]">
            /{demo.slug}
          </div>

          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <FiMonitor className="hover:text-blue-400" title="Desktop Ready" />
            <FiTablet className="hover:text-blue-400" title="Tablet Ready" />
            <FiSmartphone className="hover:text-blue-400" title="Mobile Ready" />
          </div>
        </div>

        {/* Thumbnail Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img 
            src={demo.thumbnail} 
            alt={demo.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-[#0C0E14]/20 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-black/70 backdrop-blur-md text-blue-400 border border-white/10 shadow-lg">
              {demo.industry}
            </span>

            {demo.badge && (
              <span className={`px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-lg backdrop-blur-md shadow-lg flex items-center gap-1 ${
                demo.slug === 'ventex'
                  ? 'bg-amber-500 text-slate-950 font-black'
                  : 'bg-indigo-600/90 text-white'
              }`}>
                {demo.slug === 'ventex' && <FiStar className="fill-current text-xs" />}
                {demo.badge}
              </span>
            )}
          </div>

          {/* Quick Hover Overlay Link */}
          <Link
            to={`/${demo.slug}`}
            className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-blue-950/40 backdrop-blur-[2px] transition-all duration-300"
            aria-label={`Open ${demo.name} Demo`}
          >
            <span className="px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-xs shadow-xl shadow-blue-600/50 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              Launch Live Site <FiArrowRight />
            </span>
          </Link>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              <Link to={`/${demo.slug}`}>
                {demo.name}
              </Link>
            </h3>
          </div>

          {demo.tagline && (
            <p className="text-xs text-blue-400/90 font-medium mb-2.5 line-clamp-1">
              {demo.tagline}
            </p>
          )}

          <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
            {demo.description}
          </p>

          {/* Key Features Bullet Pills */}
          {demo.features && demo.features.length > 0 && (
            <div className="space-y-1 mb-4 pt-1 border-t border-white/[0.04]">
              {demo.features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300 truncate">
                  <FiCheck className="text-emerald-400 shrink-0 text-xs" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {demo.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between">
        <Link 
          to={`/${demo.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Live Demo</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <div className="flex items-center gap-2">
          <a 
            href={`/${demo.slug}/index.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors border border-white/[0.06]"
            title="Open Raw Site In New Tab"
          >
            <FiExternalLink className="text-xs" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default DemoCard;
