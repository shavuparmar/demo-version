import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingElements from './components/Shared/FloatingElements';

// Pages
import Demos from './pages/Demos';
import Preview from './pages/Preview';

// Helper to scroll to top on every navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Redirect /preview/:slug to /:slug for clean URLs as requested
function PreviewRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/${slug}`} replace />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#07080B] font-sans text-slate-100 selection:bg-blue-600 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-20">
          <Routes>
            {/* Showcase Homepage */}
            <Route path="/" element={<Demos />} />
            <Route path="/demos" element={<Navigate to="/" replace />} />

            {/* Legacy preview path redirects cleanly to /:slug */}
            <Route path="/preview/:slug" element={<PreviewRedirect />} />

            {/* Direct Demo URL: e.g. /ventex, /pramukh-computer, /furniture */}
            <Route path="/:slug" element={<Preview />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Action Elements */}
        <FloatingElements />

      </div>
    </Router>
  );
}

export default App;
