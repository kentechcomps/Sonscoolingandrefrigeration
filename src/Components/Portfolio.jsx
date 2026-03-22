import React, { useState } from 'react';
import { Grid3x3, Package, Snowflake, Wind, Eye } from 'lucide-react';

// Images
import projectK3 from '../assets/ProjectK3.jpeg';
import Projectk5 from '../assets/Projectk5.jpeg';
import KIGUMOFUNERALHOME from '../assets/KIGUMOFUNERALHOME.jpeg';
import asumbi3 from '../assets/asumbi3.jpeg';
import gridview from '../assets/gridview.png';
import packhouse from '../assets/packhouse.jpeg';
import coldroom from '../assets/coldroom.webp';
import cold4 from '../assets/cold4.jpeg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // ✅ CLEANED PROJECT DATA
  const projects = [
    {
      id: 'PR-001',
      title: 'Industrial Cold Room Installation',
      category: 'Cold Rooms',
      image: asumbi3,
      description: 'Large-scale cold room for Asumbi exports',
      location: 'Nairobi, Kenya'
    },
    {
      id: 'PR-002',
      title: 'Commercial Pack House Setup',
      category: 'Pack House',
      image: packhouse,
      description: 'Complete pack house cooling system for export facility',
      location: 'Thika, Kenya'
    },
    {
      id: 'PR-003',
      title: 'Restaurant Cold Room',
      category: 'Cold Rooms',
      image: coldroom,
      description: 'Multi-chamber cold storage for fine dining establishment',
      location: 'Westlands, Nairobi'
    },
    {
      id: 'PR-004',
      title: 'Export Pack House',
      category: 'Pack House',
      image: projectK3,
      description: 'Advanced cooling for horticultural exports',
      location: 'Kiambu County'
    },
    {
      id: 'PR-005',
      title: 'Hotel Freezer Room',
      category: 'Cold Rooms',
      image: cold4,
      description: 'Walk-in freezer for hotel kitchen',
      location: 'Karen, Nairobi'
    },
    {
      id: 'PR-006',
      title: 'Flower Pack House',
      category: 'Pack House',
      image: Projectk5,
      description: 'Temperature-controlled packing facility for flowers',
      location: 'Naivasha'
    },
    {
      id: 'PR-007',
      title: 'Restaurant AC Installation',
      category: 'Air Conditioning',
      image: gridview,
      description: 'AC installation for 19 Coins Restaurant',
      location: 'Isiolo'
    },
    {
      id: 'PR-008',
      title: 'Funeral Home Cold Room',
      category: 'Cold Rooms',
      image: KIGUMOFUNERALHOME,
      description: 'Specialized mortuary cold room system',
      location: 'Murang’a'
    }
  ];

  // ✅ CLEAN FILTERS
  const filters = ['All', 'Pack House', 'Cold Rooms', 'Air Conditioning'];

  // ✅ FILTER LOGIC
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">

      {/* Background Pattern */}
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

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 border rounded-full px-6 py-3 mb-6">
            <Grid3x3 size={20} />
            <span className="font-semibold text-sm uppercase">
              Our Portfolio
            </span>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed refrigeration and cooling projects across Kenya.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            const Icon =
              filter === 'Pack House'
                ? Package
                : filter === 'Cold Rooms'
                ? Snowflake
                : filter === 'Air Conditioning'
                ? Wind
                : Grid3x3;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-bold transition ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border text-gray-700 hover:text-blue-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon size={18} />
                  {filter}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => (e.target.src = '/fallback.jpg')}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  
                  {/* ✅ WHATSAPP CTA */}
                  <a
                    href={`https://wa.me/254723494267?text=Hello, I'm interested in ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-5 py-2 rounded-full flex items-center gap-2 font-bold"
                  >
                    <Eye size={18} />
                    View Details
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>

                {/* Category Badge */}
                <div className="mb-2">
                  {project.category === 'Pack House' ? (
                    <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                      <Package size={14} /> Pack House
                    </span>
                  ) : project.category === 'Cold Rooms' ? (
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                      <Snowflake size={14} /> Cold Room
                    </span>
                  ) : (
                    <span className="text-orange-600 text-sm font-semibold flex items-center gap-1">
                      <Wind size={14} /> Air Conditioning
                    </span>
                  )}
                </div>

                {/* Location */}
                <p className="text-gray-500 text-xs">
                  📍 {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;