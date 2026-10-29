import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiMonitor, 
  FiSmartphone, 
  FiTablet, 
  FiExternalLink, 
  FiCheckCircle, 
  FiRefreshCw, 
  FiCopy, 
  FiCheck, 
  FiMaximize2, 
  FiMinimize2, 
  FiMessageSquare,
  FiLock,
  FiLayers
} from 'react-icons/fi';
import { demos } from '../data/demos';
import DemoCard from '../components/UI/DemoCard';

const Preview = () => {
  const { slug } = useParams();

  const [deviceView, setDeviceView] = useState('desktop'); // 'desktop', 'tablet', 'mobile'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // Memoize finding demo
  const demo = useMemo(() => {
    return demos.find(d => d.slug.toLowerCase() === (slug || '').toLowerCase()) || null;
  }, [slug]);

  // Memoize similar demos
  const similarDemos = useMemo(() => {
    if (!demo) return [];
    const similar = demos
      .filter(d => d.industry === demo.industry && d.id !== demo.id)
      .slice(0, 3);

    if (similar.length < 3) {
      const others = demos.filter(d => d.id !== demo.id && !similar.find(s => s.id === d.id));
      similar.push(...others.slice(0, 3 - similar.length));
    }
    return similar;
  }, [demo]);

  // Handle reload iframe
  const handleReload = () => {
    setIframeLoading(true);
    setReloadKey(prev => prev + 1);
  };

  // Handle copy demo link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!demo) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-3xl mb-6">
          !
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3">Demo Not Found</h2>
        <p className="text-slate-400 max-w-md mb-8 text-sm leading-relaxed">
          The requested website demo "{slug}" does not exist or may have been renamed.
        </p>
        <Link 
          to="/" 
          className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
        >
          Return to All Demos
        </Link>
      </div>
    );
  }

  // Calculate container width based on deviceView
  const getContainerStyles = () => {
    if (isFullscreen) return 'w-full h-[92vh]';
    if (deviceView === 'desktop') return 'w-full h-[680px] md:h-[780px]';
    if (deviceView === 'tablet') return 'w-[768px] max-w-full h-[760px] mx-auto';
    if (deviceView === 'mobile') return 'w-[375px] max-w-full h-[740px] mx-auto';
    return 'w-full h-[700px]';
  };

  return (
    <div className={`w-full min-h-screen ${isFullscreen ? 'p-0 pb-0' : 'pb-24'}`}>

      {/* Top Preview Control Bar */}
      <div className={`sticky top-0 z-40 bg-[#0C0E14]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3 transition-all ${
        isFullscreen ? 'px-4' : ''
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Left: Back button & Demo Info */}
          <div className="flex items-center gap-3.5 w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center gap-3">
              <Link 
                to="/" 
                className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-all hover:-translate-x-0.5"
                title="Back to All Demos"
              >
                <FiArrowLeft className="text-base" />
              </Link>
              
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-bold text-white tracking-tight truncate max-w-[200px] sm:max-w-xs">
                    {demo.name}
                  </h1>
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                    {demo.industry}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono truncate max-w-[240px]">
                  deyzora.com/{demo.slug}
                </div>
              </div>
            </div>

            {/* Mobile-only CTA */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`/${demo.slug}/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.05] text-slate-300 hover:text-white border border-white/[0.08]"
                title="Open Direct Site"
              >
                <FiExternalLink className="text-sm" />
              </a>
            </div>
          </div>

          {/* Center: Device Switcher & Quick Controls */}
          <div className="flex items-center gap-3">
            {/* Device Switcher */}
            <div className="flex items-center bg-[#11141B] rounded-xl p-1 border border-white/[0.08]">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceView === 'desktop'
                    ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View"
              >
                <FiMonitor className="text-sm" />
                <span className="hidden sm:inline">Desktop</span>
              </button>

              <button
                onClick={() => setDeviceView('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceView === 'tablet'
                    ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet View (768px)"
              >
                <FiTablet className="text-sm" />
                <span className="hidden sm:inline">Tablet</span>
              </button>

              <button
                onClick={() => setDeviceView('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceView === 'mobile'
                    ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View (375px)"
              >
                <FiSmartphone className="text-sm" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Reload button */}
            <button
              onClick={handleReload}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors border border-white/[0.08]"
              title="Reload Frame"
            >
              <FiRefreshCw className={`text-sm ${iframeLoading ? 'animate-spin text-blue-400' : ''}`} />
            </button>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors border border-white/[0.08] relative"
              title="Copy Demo Link"
            >
              {copied ? <FiCheck className="text-emerald-400 text-sm" /> : <FiCopy className="text-sm" />}
              {copied && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-[10px] whitespace-nowrap shadow-md">
                  Copied!
                </span>
              )}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={`p-2 rounded-xl border border-white/[0.08] transition-colors ${
                isFullscreen 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white'
              }`}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Preview'}
            >
              {isFullscreen ? <FiMinimize2 className="text-sm" /> : <FiMaximize2 className="text-sm" />}
            </button>
          </div>

          {/* Right: Direct open & WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`/${demo.slug}/index.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-200 border border-white/[0.08] transition-colors"
            >
              <span>Direct Link</span>
              <FiExternalLink className="text-xs" />
            </a>

            <a
              href={`https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20am%20interested%20in%20a%20website%20like%20${encodeURIComponent(demo.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
            >
              <FiMessageSquare />
              <span>Request Similar</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Preview Container */}
      <div className={`transition-all duration-300 ${isFullscreen ? 'p-2' : 'container mx-auto px-4 md:px-8 mt-6'}`}>
        
        {/* Browser Mockup Wrapper */}
        <div className={`transition-all duration-500 mx-auto ${getContainerStyles()}`}>
          
          <div className={`h-full flex flex-col rounded-2xl overflow-hidden glass-card border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.8)] ${
            deviceView === 'mobile' ? 'ring-8 ring-[#1A1F2C] rounded-[36px]' : ''
          } ${
            deviceView === 'tablet' ? 'ring-8 ring-[#161922] rounded-[28px]' : ''
          }`}>

            {/* Realistic Browser Top Address Bar */}
            <div className="bg-[#0C0E14] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between shrink-0">
              
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>

              {/* URL Pill */}
              <div className="flex items-center gap-2 bg-[#161922] px-3.5 py-1 rounded-lg border border-white/[0.06] text-xs font-mono text-slate-300 max-w-sm w-full mx-4 justify-center shadow-inner">
                <FiLock className="text-emerald-400 text-xs shrink-0" />
                <span className="text-slate-500">https://</span>
                <span className="text-white font-semibold truncate">deyzora.com/{demo.slug}</span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-slate-400 text-[11px] uppercase hidden sm:inline">Active Demo</span>
              </div>

            </div>

            {/* Iframe Viewport Area */}
            <div className="relative flex-grow bg-white w-full h-full overflow-hidden">
              
              {/* Spinner while loading */}
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#07080B] z-20">
                  <div className="w-12 h-12 border-3 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                  <span className="text-slate-300 text-sm font-semibold mb-1">
                    Loading {demo.name}
                  </span>
                  <span className="text-slate-500 text-xs font-mono">
                    /{demo.slug}/index.html
                  </span>
                </div>
              )}

              {/* Live Demo Iframe */}
              <iframe
                key={reloadKey}
                src={`/${demo.slug}/index.html`}
                title={`${demo.name} Live Demo`}
                className={`w-full h-full border-none transition-opacity duration-300 ${
                  iframeLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIframeLoading(false)}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Details & Similar Demos (Hidden in Fullscreen) */}
      {!isFullscreen && (
        <div className="container mx-auto px-4 md:px-8 mt-12">
          
          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            
            {/* Left: Overview & Key Features */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1">
                  Project Breakdown
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  About {demo.name}
                </h3>
                {demo.tagline && (
                  <p className="text-slate-300 text-sm font-medium mt-1">
                    {demo.tagline}
                  </p>
                )}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {demo.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-400" /> Key Features & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {demo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <FiCheck className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <FiLayers className="text-blue-400" /> Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {demo.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Quick Action & Pricing Box */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl glass-card border border-blue-500/20 bg-gradient-to-b from-blue-900/10 to-transparent space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-lg">
                  <FiMessageSquare />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Get This Website</h4>
                  <span className="text-xs text-slate-400">Customized with your branding</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                We can customize this exact {demo.industry.toLowerCase()} template with your brand colors, company logo, products, and WhatsApp ordering in 24 to 48 hours.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Delivery Speed</span>
                  <strong className="text-white">24 - 48 Hours</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Mobile Responsive</span>
                  <strong className="text-emerald-400">100% Guaranteed</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Direct Inquiries</span>
                  <strong className="text-blue-400">WhatsApp / Call</strong>
                </div>
              </div>

              <a
                href={`https://wa.me/919879001603?text=Hi%20Deyzora,%20I%20want%20to%20get%20a%20website%20like%20${encodeURIComponent(demo.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <FiMessageSquare />
                <span>Chat on WhatsApp (+91 98790 01603)</span>
              </a>

              <a
                href={`/${demo.slug}/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white text-xs font-semibold border border-white/[0.08] transition-colors"
              >
                <span>Open Raw Site In New Tab</span>
                <FiExternalLink />
              </a>

            </div>

          </div>

          {/* Similar Projects Section */}
          {similarDemos.length > 0 && (
            <div className="pt-12 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Similar <span className="text-blue-400">Templates</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Explore more high-performance websites from our collection
                  </p>
                </div>
                <Link to="/" className="text-xs font-bold text-blue-400 hover:underline">
                  View All Demos &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarDemos.map(similar => (
                  <DemoCard key={similar.id} demo={similar} />
                ))}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default Preview;
