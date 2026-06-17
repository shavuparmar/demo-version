import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiSearch, FiFilter } from 'react-icons/fi';
import DemoCard from '../components/UI/DemoCard';
import { demos, industries } from '../data/demos';

const Demos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDemos, setFilteredDemos] = useState(demos);

  useEffect(() => {
    let result = demos;
    
    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(demo => demo.industry === activeCategory);
    }
    
    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        demo => 
          demo.name.toLowerCase().includes(lowerCaseQuery) || 
          demo.industry.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    setFilteredDemos(result);
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Demos <span className="text-primary-500">Gallery</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our extensive collection of premium website templates tailored for your industry.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12 space-y-6">
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400 group-focus-within:text-primary-500 transition-colors" />
            </div>
            <input
              type="text"
              className="w-full bg-dark-900 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-lg"
              placeholder="Search by demo name or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 mr-2 text-gray-400">
              <FiFilter /> <span className="text-sm font-medium">Filter:</span>
            </div>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveCategory(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === industry
                    ? 'bg-primary-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'bg-dark-800 text-gray-400 border border-white/5 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
          
        </div>

        {/* Results Grid */}
        {filteredDemos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDemos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-card rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3 text-white">No Demos Found</h3>
            <p className="text-gray-400">
              We couldn't find any demos matching your search criteria. Try adjusting your filters or search query.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Demos;
