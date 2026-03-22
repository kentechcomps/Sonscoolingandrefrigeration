import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Play, CheckCircle2 } from 'lucide-react';
import pol from '../assets/89.jpeg';
import coldroom from '../assets/front.webp';
import freeze from '../assets/bitzer.webp';
import chillers from '../assets/89.jpeg';


const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
        {
      id: 1,
      image: freeze,
      title: "Freezer & Blast Rooms",
      subtitle: "Rapid Cooling Technology",
      description: "High-performance freezer rooms for long-term preservation and blast freezing capabilities for industrial needs.",
      features: ["Rapid Cooling", "Heavy Duty", "Low Maintenance"]
    } ,
    {
      id: 2,
      image: chillers,
      title: "Premium Cooling Systems",
      subtitle: "Industrial & Commercial Solutions",
      description: "State-of-the-art chiller installations for businesses that demand precision temperature control and energy efficiency.",
      features: ["Energy Efficient", "ISO Certified", "24/7 Support"]
    },
    {
      id: 3,
      image: coldroom,
      title: "Cold Room Specialists",
      subtitle: "Custom Temperature Control",
      description: "Expertly designed cold rooms for food storage, pharmaceuticals, and commercial applications with guaranteed reliability.",
      features: ["Custom Design", "Quick Installation", "Warranty Included"]
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200/30 to-sky-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content Side */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            {/* Company Badge */}
            <div className="inline-flex items-center gap-3 bg-white border-2 border-sky-200 rounded-full px-6 py-3 shadow-lg">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              <span className="text-sky-700 font-bold text-sm tracking-wider uppercase">
                Professional Cooling Solutions
              </span>
            </div>

            {/* Main Company Name */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                <span className="text-slate-900">SONS</span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Cooling &
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                  Refrigeration
                </span>
                <br />
                <span className="text-slate-900">Services</span>
              </h1>
            </div>

            {/* Dynamic Content - Changes with images */}
            <div 
              key={currentIndex}
              className="space-y-4 animate-fadeIn"
            >
              {/* Slide Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {currentSlide.title}
              </h2>
              
              {/* Slide Subtitle */}
              <p className="text-xl text-sky-600 font-semibold">
                {currentSlide.subtitle}
              </p>

              {/* Slide Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {currentSlide.description}
              </p>

              {/* Features Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {currentSlide.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-white border border-sky-200 rounded-full px-4 py-2 shadow-sm"
                  >
                    <CheckCircle2 className="text-sky-600" size={16} />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => {
                  const message = "Hi! I'm interested in your cooling and refrigeration services. Could you provide more information?";
                  window.open(`https://wa.me/254723494267?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="group px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2 justify-center">
                 
                  Get Free Quote on whatsapp
                  <svg 
                    className="group-hover:translate-x-1 transition-transform" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                  >
                    <path 
                      d="M4 10h12m0 0l-4-4m4 4l-4 4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <a
                href="tel:+254723494267"
                className="group px-8 py-4 bg-white border-2 border-sky-500 text-sky-700 rounded-full font-bold hover:bg-sky-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2 justify-center">
                  <Phone size={20} />
                  +254 723 494 267
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sky-200">
              {[
                { number: '500+', label: 'Projects' },
                { number: '24/7', label: 'Support' },
                { number: '15+', label: 'Years' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image Carousel Side */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative">
              
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-200 to-blue-300 rounded-[3rem] opacity-20 blur-2xl" />
              
              {/* Image Carousel */}
              <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`transition-opacity duration-700 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[500px] md:h-[600px] object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-sky-600 group-hover:scale-110 transition-transform" size={24} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-sky-600 group-hover:scale-110 transition-transform" size={24} />
                </button>

                {/* Slide Counter Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-10">
                  <span className="text-sm font-bold text-sky-600">
                    {currentIndex + 1} / {slides.length}
                  </span>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="group relative"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div className={`
                      h-2 rounded-full transition-all duration-300
                      ${index === currentIndex 
                        ? 'w-12 bg-gradient-to-r from-sky-600 to-blue-600' 
                        : 'w-2 bg-gray-300 group-hover:bg-sky-400'
                      }
                    `} />
                  </button>
                ))}
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-2xl px-6 py-4 shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <div className="font-black text-lg">ISO Certified</div>
                    <div className="text-xs text-sky-100">Premium Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;