import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMonitor, FiSmartphone, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { demos } from '../data/demos';
import DemoCard from '../components/UI/DemoCard';

const Preview = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [demo, setDemo] = useState(null);
  const [deviceView, setDeviceView] = useState('desktop'); // 'desktop' or 'mobile'
  const [similarDemos, setSimilarDemos] = useState([]);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Find current demo
    const currentDemo = demos.find(d => d.slug === slug);

    if (currentDemo) {
      setDemo(currentDemo);
      setError(false);
      setIframeLoading(true);

      // Find similar demos (same industry, exclude current)
      const similar = demos
        .filter(d => d.industry === currentDemo.industry && d.id !== currentDemo.id)
        .slice(0, 3);

      // If not enough similar by industry, pad with others
      if (similar.length < 3) {
        const others = demos.filter(d => d.id !== currentDemo.id && !similar.find(s => s.id === d.id));
        similar.push(...others.slice(0, 3 - similar.length));
      }

      setSimilarDemos(similar);
    } else {
      // Demo not found
      setError(true);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Demo Not Found</h2>
        <p className="text-gray-400 mb-8">The website template you are looking for does not exist or has been removed.</p>
        <Link to="/demos" className="px-8 py-3 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-500 transition-colors">
          Back To Demos
        </Link>
      </div>
    );
  }

  if (!demo) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="w-full min-h-screen pb-20">

      {/* Top Navigation Bar */}
      <div className="bg-dark-900 border-b border-white/5 py-4 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-4">
            <Link to="/demos" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-300 hover:text-white">
              <FiArrowLeft />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white">{demo.name}</h1>
              <span className="text-xs text-primary-400 font-medium">{demo.industry} Template</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Device Toggle */}
            <div className="flex items-center bg-dark-800 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-2 rounded-md transition-colors ${deviceView === 'desktop' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                title="Desktop View"
              >
                <FiMonitor />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-2 rounded-md transition-colors ${deviceView === 'mobile' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                title="Mobile View"
              >
                <FiSmartphone />
              </button>
            </div>

            <a
              href={`/${demo.slug}/index.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-white/10 whitespace-nowrap"
            >
              Open Full Demo <FiExternalLink />
            </a>

            <a
              href={`https://wa.me/919879001603?text=Hi, I am interested in the ${demo.name} website template.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-6 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium text-sm hover:from-primary-500 hover:to-secondary-500 transition-all shadow-lg"
            >
              Request Similar
            </a>
          </div>

        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Preview Area */}
          <div className="lg:col-span-2">

            {/* Browser Mockup */}
            <div className={`mx-auto transition-all duration-500 ${deviceView === 'desktop' ? 'w-full' : 'w-[375px]'}`}>
              <div className="rounded-t-xl bg-dark-800 border border-white/10 border-b-0 p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto bg-dark-900 rounded text-xs px-4 py-1 text-gray-400 max-w-[200px] truncate">
                  deyzora.com/{demo.slug}
                </div>
              </div>

              <div className="bg-white border border-white/10 border-t-0 rounded-b-xl overflow-hidden shadow-2xl h-[600px] md:h-[700px] relative">

                {/* Loading State */}
                {iframeLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900 z-20">
                    <div className="w-12 h-12 border-4 border-white/10 border-t-primary-500 rounded-full animate-spin mb-4"></div>
                    <span className="text-gray-400 font-medium">Loading Template...</span>
                  </div>
                )}

                <iframe
                  src={`/${demo.slug}/index.html`}
                  title={`${demo.name} Preview`}
                  className={`w-full h-full border-none relative z-10 bg-white transition-opacity duration-500 ${iframeLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setIframeLoading(false)}
                />
              </div>
            </div>

          </div>

          {/* Project Info Sidebar */}
          <div className="space-y-8">

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Project Details</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {demo.description}
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Industry</span>
                  <p className="text-white font-medium">{demo.industry}</p>
                </div>
              </div>

              <h4 className="font-semibold text-white mb-4">Key Features</h4>
              <ul className="space-y-3 mb-8">
                {demo.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-secondary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-white mb-4">Technology Used</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {demo.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/919879001603?text=Hi, I want a website like ${demo.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold hover:shadow-lg hover:shadow-primary-500/30 transition-all"
              >
                Request Similar
              </a>
            </div>

          </div>

        </div>

        {/* Similar Projects */}
        {similarDemos.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-8">Similar <span className="text-primary-500">Projects</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarDemos.map(similarDemo => (
                <DemoCard key={similarDemo.id} demo={similarDemo} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Preview;
