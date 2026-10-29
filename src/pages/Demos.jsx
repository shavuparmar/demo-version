import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  FiSearch, 
  FiFilter, 
  FiCheckCircle, 
  FiArrowRight, 
  FiStar, 
  FiExternalLink, 
  FiGrid, 
  FiList, 
  FiSmartphone, 
  FiShield, 
  FiMessageSquare,
  FiZap,
  FiX
} from 'react-icons/fi';
import DemoCard from '../components/UI/DemoCard';
import { demos, industries, services } from '../data/demos';

const Demos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'compact'

  const filteredDemos = useMemo(() => {
    let result = demos;
    
    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(demo => demo.industry.toLowerCase() === activeCategory.toLowerCase());
    }
    
    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        demo => 
          demo.name.toLowerCase().includes(q) || 
          demo.industry.toLowerCase().includes(q) ||
          demo.description.toLowerCase().includes(q) ||
          demo.tech.some(t => t.toLowerCase().includes(q)) ||
          demo.features.some(f => f.toLowerCase().includes(q))
      );
    }
    
    return result;
  }, [activeCategory, searchQuery]);

  // Featured Demo (Ventex)
  const ventexDemo = demos.find(d => d.slug === 'ventex');

  return (
    <div className="w-full min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Production-Ready Website Showcase
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.15]">
            Experience High-Impact Websites{' '}
            <span className="text-gradient">Engineered for Growth</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Explore our curated catalog of live, responsive templates. Each site is custom crafted for speed, modern aesthetics, and instant business conversions.
          </p>

          {/* Key Value Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
            <div className="p-3.5 rounded-2xl glass-card flex flex-col items-center">
              <span className="text-2xl font-black text-white">{demos.length}+</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Live Demos</span>
            </div>
            <div className="p-3.5 rounded-2xl glass-card flex flex-col items-center">
              <span className="text-2xl font-black text-blue-400">100%</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Mobile Ready</span>
            </div>
            <div className="p-3.5 rounded-2xl glass-card flex flex-col items-center">
              <span className="text-2xl font-black text-emerald-400">&lt; 1.2s</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Load Time</span>
            </div>
            <div className="p-3.5 rounded-2xl glass-card flex flex-col items-center">
              <span className="text-2xl font-black text-amber-400">24-48h</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Turnaround</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Spotlight: Ventex Precision */}
      {ventexDemo && (
        <section className="container mx-auto px-4 md:px-8 mb-20">
          <div className="relative rounded-3xl overflow-hidden glass-card border border-amber-500/20 p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(245,158,11,0.08)]">
            
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <FiStar className="fill-current text-xs" /> New Release
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold">
                    Industrial & Manufacturing
                  </span>
                  <span className="text-xs font-mono text-amber-400">
                    URL: /ventex
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Ventex Precision — High-Precision Brass Engineering
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our newest flagship template engineered for manufacturing, CNC machining, and OEM precision turners. Features interactive 3D component inspection, dynamic RFQ generator, metrology showcase, and alloy specifications.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="text-amber-400 shrink-0" />
                    <span>Three.js Interactive 3D Part Viewer</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="text-amber-400 shrink-0" />
                    <span>Dynamic RFQ Quote Generator</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="text-amber-400 shrink-0" />
                    <span>Multi-Axis CNC Swiss Machining Focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="text-amber-400 shrink-0" />
                    <span>Optical Metrology Quality Lab</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/ventex"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5"
                  >
                    <span>Explore /ventex Demo</span>
                    <FiArrowRight />
                  </Link>

                  <a
                    href="/ventex/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 text-sm font-semibold border border-white/10 transition-colors"
                  >
                    <span>Open Raw Fullsite</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Right Column: Preview Image */}
              <div className="lg:col-span-5">
                <Link to="/ventex" className="block group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={ventexDemo.thumbnail}
                      alt="Ventex Precision Demo Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono text-white/90 bg-black/60 backdrop-blur px-3 py-1 rounded-md">
                      Interactive 3D Brass Showcase
                    </span>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Main Demos Catalog Section */}
      <section id="demos-grid" className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Website Demos <span className="text-blue-400">Gallery</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Select any website below to preview in interactive Desktop, Tablet, and Mobile views.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-2 bg-white/[0.04] p-1 rounded-xl border border-white/[0.08] self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid View"
            >
              <FiGrid /> <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'compact'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Compact View"
            >
              <FiList /> <span className="hidden sm:inline">Compact</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mb-8 space-y-4">
          
          {/* Search Input */}
          <div className="relative group max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-400 transition-colors">
              <FiSearch className="text-lg" />
            </div>
            <input
              type="text"
              className="w-full bg-[#0C0E14] border border-white/[0.1] rounded-2xl py-3.5 pl-11 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
              placeholder="Search by name, category, features, or tech stack (e.g., 'Three.js', 'Restaurant', 'Ventex')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
              >
                <FiX />
              </button>
            )}
          </div>

          {/* Industry Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1 mr-2">
              <FiFilter className="text-blue-400" /> Filter:
            </span>

            {industries.map((ind) => {
              const count = ind === 'All' 
                ? demos.length 
                : demos.filter(d => d.industry.toLowerCase() === ind.toLowerCase()).length;

              const isActive = activeCategory.toLowerCase() === ind.toLowerCase();

              return (
                <button
                  key={ind}
                  onClick={() => setActiveCategory(ind)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <span>{ind}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/[0.06] text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredDemos.length}</strong> of {demos.length} templates
          </span>
          {(searchQuery || activeCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="text-blue-400 hover:underline flex items-center gap-1"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Demos Grid / Compact Display */}
        {filteredDemos.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {filteredDemos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-3xl glass-card max-w-xl mx-auto p-8">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-4 text-2xl">
              <FiSearch />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Matching Demos Found</h3>
            <p className="text-slate-400 text-sm mb-6">
              We couldn't find any website templates matching "{searchQuery}". Try searching for another keyword or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
            >
              View All Demos
            </button>
          </div>
        )}

      </section>

      {/* Services & Capabilities Section */}
      <section id="services" className="container mx-auto px-4 md:px-8 mt-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            Tailored Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Custom Web Development For Every Domain
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Every template in this showcase can be customized with your brand logo, products, content, and payment systems in 24 to 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.id} className="p-6 rounded-2xl glass-card glass-card-hover border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {svc.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">0{svc.id}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{svc.description}</p>
              </div>
              <div className="pt-6">
                <a
                  href={`https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20am%20interested%20in%20${encodeURIComponent(svc.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire for this industry</span>
                  <FiArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="container mx-auto px-4 md:px-8 mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl glass-card border border-white/[0.08] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block">
                Why Partner With Deyzora
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Websites Built To Convert Visitors Into Paying Customers
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We combine bleeding-edge frontend technologies like React 19, Vite, Three.js, and Tailwind CSS to create websites that load instantly, rank higher on search engines, and captivate your audience on mobile devices.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <FiZap className="text-amber-400 text-lg mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Sub-Second Page Load Speed</h4>
                    <p className="text-xs text-slate-400">Optimized bundle size and lazy loading for instantaneous responses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiSmartphone className="text-blue-400 text-lg mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">True Mobile-First Architecture</h4>
                    <p className="text-xs text-slate-400">Pixel-perfect layout and touch interactions on smartphones and tablets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiShield className="text-emerald-400 text-lg mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Turnkey Launch in 24-48 Hours</h4>
                    <p className="text-xs text-slate-400">Complete setup including domain mapping, hosting configuration, and SEO tags.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent border border-white/[0.06]">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-3xl mb-5 shadow-inner">
                <FiMessageSquare />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Want a Website Like These?</h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
                Connect directly with our engineering team on WhatsApp to discuss your project requirements, custom features, or timeline.
              </p>

              <a
                href="https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20want%20to%20get%20started%20with%20a%20new%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-0.5"
              >
                <FiMessageSquare className="text-base" />
                <span>Chat On WhatsApp (+91 98790 01603)</span>
              </a>

              <span className="text-[11px] text-slate-500 mt-3">
                Typically responds in under 15 minutes.
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Demos;
