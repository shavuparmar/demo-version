import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const DemoCard = ({ demo }) => {
  return (
    <div className="group rounded-2xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden bg-dark-800">
        <img 
          src={demo.thumbnail} 
          alt={demo.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 px-3 py-1 bg-dark-900/80 backdrop-blur text-xs font-semibold rounded-full border border-white/10 text-primary-400">
          {demo.industry}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
          {demo.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {demo.description}
        </p>
        
        <div className="flex items-center justify-between mt-6">
          <Link 
            to={`/preview/${demo.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-400 transition-colors"
          >
            Preview Demo <FiArrowRight />
          </Link>
          
          <a 
            href={`/${demo.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors border border-white/10 hover:border-primary-500"
            title="Open in new tab"
          >
            <FiExternalLink className="text-gray-300 group-hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
