import { useState, useEffect } from 'react';
 import React from 'react';
import heroImg from '../assets/ob5.jpeg';
import Tp from '../assets/89.jpeg';
import pog from '../assets/pog.png';
import { Award, Zap, Users, TrendingUp ,ChevronLeft, ChevronRight, Play, Phone, MapPin, Star ,Wrench, 
  Wind, 
  Gauge, 
  Thermometer, 
  Settings,  
  Filter,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield  } from 'lucide-react';
import Services from './Services';  
import Product from './Productsection'
import Portfolio from './Portfolio'
import Allservices from './Allservices';

const Hero = () => {
  const images = [heroImg, Tp, heroImg , pog]; // Add more images as needed
  const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
 // Change image every 3 seconds


     // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);
 
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
 
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
 
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

    const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle2 },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  const features = [
    { icon: Shield, text: "Certified Professionals" },
    { icon: Zap, text: "24/7 Emergency Service" },
    { icon: Users, text: "Expert Team" },
  ];



  const stat = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle2 },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Shield }
  ];


  return (
    <>

    <Services />
     

  
 <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* ================= LEFT IMAGES ================= */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center group">
              
              {/* Slim Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="w-24 sm:w-[100px] md:w-[120px] h-[250px] sm:h-[300px] md:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={Tp}
                    alt="Refrigeration Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="relative w-full max-w-[500px]">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[60px] sm:rounded-[120px] blur-2xl opacity-20" />
                
                <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] rounded-[40px] sm:rounded-r-[120px] overflow-hidden border-4 border-white shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                  <img
                    src={pog}
                    alt="Professional Cooling Systems"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

            </div>

            {/* Floating Badge */}
            <div className="mt-6 sm:mt-0 sm:absolute sm:-bottom-8 sm:left-1/2 sm:-translate-x-1/2 flex justify-center">
              <div className="bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-3 sm:py-4 border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Industry Leaders
                    </p>
                    <p className="text-xs text-gray-500">Since 2009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              About Us
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
                Commanding
              </span>
              <br />
              <span className="text-slate-900">Kenya's Cooling</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Revolution
                </span>
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              With <span className="font-semibold text-gray-900">unparalleled expertise</span>,{" "}
              innovative technology, and unwavering commitment to excellence, we're{" "}
              <span className="font-semibold text-blue-600">transforming</span> Kenya's 
              refrigeration and cooling industry.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Icon
                        className="text-blue-600 group-hover:text-white transition-colors"
                        size={16}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  
    <Product />
    <Allservices />

    <Portfolio />
   

    
    </>
  );
};

export default Hero;