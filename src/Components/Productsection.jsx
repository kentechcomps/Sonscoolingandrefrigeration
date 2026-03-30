import React, { useState, useMemo } from 'react';
import { 
  MessageCircle, Filter, Search, SlidersHorizontal, 
  Package, Zap, Wrench, Gauge, Wind, Droplet,
  FlaskConical, Fan, Settings, ThermometerSnowflake
} from 'lucide-react';
import evaporatingmotor from '../assets/evaporatingmotor.jpeg';
import fanmotor from '../assets/fanmotor.png';
import compressor from '../assets/Compressor.jpeg';
import brazinpen from '../assets/brazingpen.webp';
import filterdrier from '../assets/filterdrier.jpg';
import gasrefrigerant from '../assets/gasrefrigerant.png';
import RefrigerantR404 from '../assets/Refrigerant404.jpeg';
import RefrigerantR22 from '../assets/Refrigerant22.jpeg';
import RefrigerantR134A from '../assets/Refrigerant134A.jpg';
import RefrigerantR290 from '../assets/Refrigerant290.jpeg';
import regrigerationoil from '../assets/regrigerationoil.png';
import refrigratorgauge from '../assets/refrigrator gauge.jpeg';
import selfignition from '../assets/selfignition.jpg';
import chargingvalve from '../assets/chargingvalve.jpg';
import copperrods from '../assets/copperrods.avif';
import copperpipes from '../assets/copperpipes.jpeg';
import labgastap from '../assets/labgastap.jpg'
import pressurevalve from '../assets/pressurevalve.webp';
import compressoroil from '../assets/compressoroil.jpg';
import compressorfanmotor from '../assets/compressorfanmotor.png';
import condsingfanmotor from '../assets/condsingfanmotor.webp';
const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    {
      id: 1,
      name: "Filter Drier",
      category: "Components",
      description: "High-quality filter driers for removing moisture and contaminants from refrigeration systems.",
      price: 2500,
      inStock: true,
      icon: filterdrier,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Charging Valves",
      category: "Components",
      description: "Professional charging valves for precise refrigerant filling and system maintenance.",
      price: 1500,
      inStock: true,
      icon: chargingvalve,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      name: "Copper Rods",
      category: "Materials",
      description: "Premium copper rods for welding and joining refrigeration components.",
      inStock: true,
      icon: copperrods,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      name: "Compressors",
      category: "Major Components",
      description: "Industrial and commercial compressors - various capacities available.",
     
      inStock: true,
      icon: compressor,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      name: "Copper Pipes",
      category: "Materials",
      description: "High-grade copper pipes for refrigeration and HVAC installations. Various sizes available.",
     
      inStock: true,
      icon: copperpipes,
      color: "from-cyan-500 to-teal-500"
    },
    {
      id: 6,
      name: "Refrigerant Gas",
      category: "Gases",
      description: "Certified refrigerant gases - R22, R410A, R134A, R404A and more.",
      price: 8500,
      inStock: true,
      icon: gasrefrigerant,
      color: "from-blue-600 to-blue-400"
    },
    {
      id: 7,
      name: "Laboratory Gas Pipes & Taps",
      category: "Laboratory Equipment",
      description: "Complete laboratory gas piping systems and taps. Full laboratory equipping services available.",
     
      inStock: true,
      icon: labgastap,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 8,
      name: "Fan Motors - Domestic & Commercial",
      category: "Motors",
      description: "High-performance fan motors for domestic and commercial applications.",
      
      inStock: true,
      icon: fanmotor,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 9,
      name: "Pressure Cut Valves",
      category: "Components",
      description: "Safety pressure cut-off valves for refrigeration system protection.",
     
      inStock: true,
      icon: pressurevalve,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 10,
      name: "Compressor Oil",
      category: "Consumables",
      description: "Premium compressor oils for optimal performance and longevity.",
     
      inStock: true,
      icon: compressoroil,
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 11,
      name: "Condenser Fan Motors - 5W",
      category: "Motors",
      description: "5-watt condenser fan motors for small refrigeration units.",
    
      wattage: "5W",
      inStock: true,
      icon: compressorfanmotor ,
      color: "from-green-400 to-cyan-500"
    },
    {
      id: 12,
      name: "Condenser Fan Motors - 10W",
      category: "Motors",
      description: "10-watt condenser fan motors for medium refrigeration systems.",
    
      wattage: "10W",
      inStock: true,
      icon: compressorfanmotor ,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 13,
      name: "Condenser Fan Motors - 16W",
      category: "Motors",
      description: "16-watt condenser fan motors for larger commercial units.",
     
      wattage: "16W",
      inStock: true,
      icon: compressorfanmotor ,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 14,
      name: "Evaporator Fan Motors",
      category: "Motors",
      description: "Efficient evaporator fan motors for cold rooms and refrigeration units.",     
      inStock: true,
      icon: evaporatingmotor,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 15,
      name: "Condensing Unit Fan Motors",
      category: "Motors",
      description: "Heavy-duty condensing unit fan motors for commercial applications.",    
      inStock: true,
      icon: condsingfanmotor,
      color: "from-red-500 to-pink-600"
    },
    {
      id: 16,
      name: "Brazing Pen",
      category: "Tools",
      description: "Professional brazing pen for precise welding in refrigeration systems.",
      inStock: true,
      icon: brazinpen,
      color: "from-gray-500 to-slate-500"
    },
    {
      id: 17,
      name: "Refrigerant Gas R404A",
      category: "Gases",
      description: "High-quality R404A refrigerant gas for commercial refrigeration systems.",
      inStock: true,
      icon: RefrigerantR404,
      color: "from-blue-700 to-blue-500"
    },
    {
      id: 18,
      name: "Refrigerant Gas R22",
      category: "Gases",
      description: "R22 refrigerant gas for various cooling applications.",
      inStock: true,
      icon: RefrigerantR22,
      color: "from-blue-800 to-blue-600"
    },
    {
      id: 19,
      name: "Refrigerant Gas R134A",
      category: "Gases",
      description: "R134A refrigerant gas suitable for automotive and commercial use.",     
      inStock: true,
      icon: RefrigerantR134A,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 20,
      name: "Refrigerant Gas R290",
      category: "Gases",
      description: "Eco-friendly R290 refrigerant gas for modern cooling systems.",      
      inStock: true,
      icon: RefrigerantR290,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 21,
      name: "Refrigeration Oil",
      category: "Consumables",
      description: "Specialized refrigeration oil for system lubrication and performance.",
      inStock: true,
      icon: regrigerationoil,
      color: "from-amber-600 to-yellow-600"
    },
    {
      id: 22,
      name: "Refrigerator Gauge",
      category: "Components",
      description: "Precision gauges for monitoring refrigerator system pressures.",
      inStock: true,
      icon: refrigratorgauge,
      color: "from-slate-500 to-gray-500"
    },
    {
      id: 23,
      name: "Self-Ignition Device",
      category: "Components",
      description: "Automatic self-ignition components for gas appliances.",
      inStock: true,
      icon: selfignition,
      color: "from-red-600 to-orange-600"
    }
  ];

  const categories = ['All', 'Components', 'Materials', 'Major Components', 'Gases', 'Laboratory Equipment', 'Motors', 'Consumables'];

  // Filtering and Sorting Logic
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(product => {
        if (priceRange === 'low') return product.price < 5000;
        if (priceRange === 'medium') return product.price >= 5000 && product.price < 15000;
        if (priceRange === 'high') return product.price >= 15000;
        return true;
      });
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

    return sorted;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  const handleWhatsAppClick = (product) => {
    const priceText = product.price != null ? `KES ${product.price.toLocaleString()}` : 'Price on request';
    const message = `Hi! I'm interested in the *${product.name}*\n\nCategory: ${product.category}\nPrice: ${priceText}\n\nCould you provide more details?`;
    const whatsappNumber = '254723494267';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

return (
<section id="products" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
  
  <div className="max-w-7xl mx-auto">
    
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
        <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
          Premium Cooling Products
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        High-quality refrigeration and HVAC components available across Kenya
      </p>
    </div>

    {/* MOBILE FILTER BAR */}
    <div className="lg:hidden mb-6 space-y-3">

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 border rounded-lg"
      />

      <div className="flex gap-3">
        
        {/* Category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* Price */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg"
        >
          <option value="all">All</option>
          <option value="low">Under 5K</option>
          <option value="medium">5K - 15K</option>
          <option value="high">15K+</option>
        </select>
      </div>
    </div>

    {/* DESKTOP LAYOUT */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      {/* SIDEBAR (DESKTOP ONLY) */}
      <div className="hidden lg:block lg:col-span-1 bg-white p-6 rounded-2xl shadow-md border h-fit sticky top-24">
        
        <h3 className="text-xl font-bold mb-6">Filters</h3>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-3 py-2 rounded-lg ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Price</h4>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="all">All Prices</option>
            <option value="low">Under KES 5,000</option>
            <option value="medium">KES 5,000 - 15,000</option>
            <option value="high">Above KES 15,000</option>
          </select>
        </div>

        {/* Clear */}
        <button
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("All");
            setPriceRange("all");
          }}
          className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm font-semibold"
        >
          Clear Filters
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="lg:col-span-3">
        
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          
          <p className="text-gray-600">
            Showing <span className="font-bold">{filteredAndSortedProducts.length}</span> products
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full sm:w-auto"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
          </select>
        </div>

        {/* GRID */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-400">No products found</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition"
              >
                
                {/* IMAGE */}
                <div className="h-48 bg-gray-100 overflow-hidden rounded-t-2xl">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  
                  <h3 className="font-bold text-lg mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <button
                    onClick={() => handleWhatsAppClick(product)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    Order via WhatsApp
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  </div>
</section>
);
};

export default Products;