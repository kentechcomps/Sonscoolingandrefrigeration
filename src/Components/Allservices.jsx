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
  import { useState } from 'react';

const Allservices = () => {

       const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      icon: Wrench,
      title: "AC Repair",
      description: "Expert diagnosis and repair of all air conditioning units. Fast, reliable service to get your cooling back on track.",
      features: ["Emergency Service", "All Brands", "Same Day"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      hoverBg: "group-hover:bg-blue-500"
    },
    {
      id: 2,
      icon: Wind,
      title: "A/C System & Repair",
      description: "Comprehensive air conditioning system services including maintenance, troubleshooting, and complete repairs.",
      features: ["System Check", "Performance Tune", "Warranty"],
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      hoverBg: "group-hover:bg-cyan-500"
    },
    {
      id: 3,
      icon: Filter,
      title: "HVAC Duct & Vent Repairs",
      description: "Professional ductwork repair and vent servicing to ensure optimal airflow and energy efficiency.",
      features: ["Leak Detection", "Air Quality", "Energy Saving"],
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      hoverBg: "group-hover:bg-teal-500"
    },
    {
      id: 4,
      icon: Thermometer,
      title: "Heating Systems",
      description: "Complete heating solutions for residential and commercial spaces with modern, efficient technology.",
      features: ["Eco-Friendly", "Cost Effective", "Reliable"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      hoverBg: "group-hover:bg-orange-500"
    },
    {
      id: 5,
      icon: Settings,
      title: "Heating System Maintenance",
      description: "Regular maintenance programs to keep your heating systems running efficiently all year round.",
      features: ["Annual Service", "Preventive Care", "Priority Support"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      hoverBg: "group-hover:bg-red-500"
    },
    {
      id: 6,
      icon: Zap,
      title: "Heating System Installation",
      description: "Professional installation of modern heating systems tailored to your specific needs and space.",
      features: ["Custom Design", "Expert Install", "Full Guarantee"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      hoverBg: "group-hover:bg-purple-500"
    },
    {
      id: 7,
      icon: Gauge,
      title: "HVAC Duct & Vent Installation",
      description: "Expert installation of HVAC ductwork and ventilation systems for optimal climate control.",
      features: ["Precision Work", "Quality Materials", "Clean Finish"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      hoverBg: "group-hover:bg-indigo-500"
    }
  ];
    return (
          <section id='allservices' className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-700 font-semibold text-sm">Our Services</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
              Expert Cooling &
            </span>
            <br />
            <span className="text-slate-900">Heating Solutions</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed">
            Professional HVAC services delivered with precision, expertise, and care. 
            Your comfort is our priority.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
        </div>

        {/* Stats Bar */}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative ${service.bgColor} border-2 border-transparent group-hover:border-gray-200 rounded-3xl p-8 h-full transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center ${service.hoverBg} transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon 
                        className={`text-gray-700 group-hover:text-white transition-colors duration-500`}
                        size={32} 
                      />
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-10 h-10 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm group-hover:bg-gradient-to-r ${service.color} group-hover:text-white group-hover:border-transparent transition-all duration-500`}>
                      {String(service.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500" style={{ backgroundImage: isHovered ? `linear-gradient(to right, var(--tw-gradient-stops))` : 'none', '--tw-gradient-from': service.color.split(' ')[1], '--tw-gradient-to': service.color.split(' ')[3] }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <button className={`group/btn flex items-center gap-2 text-gray-700 font-semibold text-sm hover:gap-4 transition-all duration-300`}>
                    <span className={`group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent ${service.color}`}>
                      Learn More
                    </span>
                    <ArrowRight 
                      className={`text-gray-400 group-hover/btn:text-transparent group-hover/btn:bg-gradient-to-r group-hover/btn:bg-clip-text transition-all`}
                      size={18} 
                    />
                  </button>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-full h-full text-gray-900" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>



      </div>
      
    </section>
    )
}

export default Allservices ;