import React, { useState } from 'react';
import { Grid3x3, Package, Snowflake, Eye } from 'lucide-react';
import projectK3 from '../assets/ProjectK3.jpeg'; // Replace with actual project images
import Projectk5 from '../assets/Projectk5.jpeg';
import KIGUMOFUNERALHOME from '../assets/KIGUMOFUNERALHOME.jpeg';
import asumbi3 from '../assets/asumbi3.jpeg';
import Asumbifresh from '../assets/Asumbifresh.jpeg';
import gridview from '../assets/gridview.png';
import packhouse from '../assets/packhouse.jpeg';
import coldroom from '../assets/coldroom.webp';
import cold4 from '../assets/cold4.jpeg';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'PR-001',
      title: 'Industrial Cold Room Installation',
      category: 'Cold Rooms',
      image: asumbi3, // Replace with actual image
      description: 'Large-scale cold room for Asumbi exports',
      location: 'Nairobi, Kenya'
    },
    {
      id: 'PR-002',
      title: 'Commercial Pack House Setup',
      category: 'Pack House',
      image: packhouse, // Replace with actual image
      description: 'Complete pack house cooling system for export facility',
      location: 'Thika, Kenya'
    },
    {
      id: 'PR-003',
      title: 'Restaurant Cold Room',
      category: 'Cold Rooms',
      image: coldroom, // Replace with actual image
      description: 'Multi-chamber cold storage for fine dining establishment',
      location: 'Westlands, Nairobi'
    },
    {
      id: 'PR-004',
      title: 'Export Pack House',
      category: 'Pack House',
      image: projectK3, // Replace with actual image
      description: 'Advanced cooling for horticultural exports',
      location: 'Kiambu County'
    },
    {
      id: 'PR-005',
      title: 'Hotel Freezer Room',
      category: 'Cold Rooms',
      image: cold4 ,
      description: 'Walk-in freezer for 5-star hotel kitchen',
      location: 'Karen, Nairobi'
    },
    {
      id: 'PR-006',
      title: 'Flower Pack House',
      category: 'Pack House',
      image: Projectk5, // Replace with actual image
      description: 'Temperature-controlled packing facility for flowers',
      location: 'Naivasha'
    },
    {
      id: 'PR-007',
      title: 'Restaurant AC',
      category: 'Cold Rooms',
      image: gridview , // Replace with actual image
      description: 'Coldroom installation for 19 coins restaurant',
      location: '19 coins Restaurant isiolo'
    } ,
    {
        id: 'PR-008',
        title: 'Funeralhome AC',
        category: 'Cold Rooms', 
        image: KIGUMOFUNERALHOME, // Replace with actual image
        description: 'Specialized cold room for mortuary use',
        location: 'Muranga'

    }
  ];

  const filters = ['All', 'Pack House', 'Cold Rooms'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-gray-100 border border-gray-300 rounded-full px-6 py-3 mb-6">
            <Grid3x3 className="text-slate-700" size={20} />
            <span className="text-slate-700 font-semibold text-sm tracking-wider uppercase">
              Our Portfolio
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our completed projects showcasing world-class refrigeration installations 
            across Kenya. Quality you can see, reliability you can trust.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const Icon = filter === 'Pack House' ? Package : filter === 'Cold Rooms' ? Snowflake : Grid3x3;
            
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 shadow-md hover:shadow-xl'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon size={20} />
                  {filter}
                  {isActive && (
                    <span className="ml-2 bg-white/30 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {filteredProjects.length}
                    </span>
                  )}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> {activeFilter === 'All' ? 'projects' : activeFilter.toLowerCase()} 
            {activeFilter !== 'All' && <span className="text-gray-400"> of {projects.length} total</span>}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Floating Labels */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                  {/* Project ID */}
                  <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl border border-gray-300 transform group-hover:scale-110 transition-transform">
                    {project.id}
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`px-4 py-2 rounded-xl font-bold text-sm shadow-xl backdrop-blur-sm border-2 transform group-hover:scale-110 transition-transform ${
                    project.category === 'Pack House'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-white/30'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-white/30'
                  }`}>
                    {project.category === 'Pack House' ? (
                      <span className="flex items-center gap-2">
                        <Package size={16} />
                        Pack House
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Snowflake size={16} />
                        Cold Room
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-2xl">
                      <Eye size={20} />
                      View Details
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg 
                    className="text-blue-500" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 20 20" 
                    fill="none"
                  >
                    <path 
                      d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" 
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-medium">{project.location}</span>
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className={`h-1 bg-gradient-to-r ${
                project.category === 'Pack House'
                  ? 'from-green-500 to-emerald-500'
                  : 'from-blue-500 to-cyan-500'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </div>
          ))}
        </div>




      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;