import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
// Pages
import Demos from './pages/Demos';
import Preview from './pages/Preview';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-950 font-sans text-white">
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Demos />} />
            <Route path="/demos" element={<Navigate to="/" replace />} />
            <Route path="/preview/:slug" element={<Preview />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
