import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle
} from 'lucide-react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `
*New Service Request - Sons Cooling Services*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Required:* ${formData.service}
*Details:* ${formData.message}
    `.trim();

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = '254723494267'; // Format: country code + number (no + or spaces)
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Optional: Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    "AC Repair",
    "Chiller Installation",
    "Cold Room Setup",
    "Freezer Room Installation",
    "HVAC Maintenance",
    "Heating System Repair",
    "Emergency Service",
    "Other"
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full px-6 py-3 mb-6">
              <MessageCircle className="text-blue-600" size={18} />
              <span className="text-blue-700 font-semibold text-sm tracking-wider uppercase">
                Get In Touch
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
                Let's Cool Down
              </span>
              <br />
              <span className="text-slate-900">Your Problems</span>
            </h2>


            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info - Left Side */}
            <div className="space-y-6">
              
              {/* Why Choose Us Box */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "24/7 Emergency Service Available",
                    "Certified & Experienced Technicians",
                    "Same Day Service in Nairobi",
                    "Competitive Pricing & Free Quotes",
                    "Warranty on All Work"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  { 
                    icon: <Phone size={24} />, 
                    title: 'Call Us Anytime',
                    details: ['+254 723 494 267'],
                    subtext: '24/7 Emergency Hotline',
                    color: 'from-green-500 to-emerald-500'
                  },
                  { 
                    icon: <MessageCircle size={24} />, 
                    title: 'WhatsApp',
                    details: ['+254 723 494 267'],
                    subtext: 'Quick Response Guaranteed',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  { 
                    icon: <Mail size={24} />, 
                    title: 'Email Us',
                    details: ['sonscoolingservices@gmail.com'],
                    subtext: 'We reply within 2 hours',
                    color: 'from-purple-500 to-indigo-500'
                  },
                  { 
                    icon: <MapPin size={24} />, 
                    title: 'Our Location',
                    details: ['Thika, Kiambu County', 'Kenya'],
                    subtext: 'Serving Nairobi & Surroundings',
                    color: 'from-orange-500 to-red-500'
                  },
                  { 
                    icon: <Clock size={24} />, 
                    title: 'Working Hours',
                    details: ['24/7 Emergency Service', 'Mon-Sat: 7AM - 7PM'],
                    subtext: 'Always here when you need us',
                    color: 'from-cyan-500 to-teal-500'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                    <div className="relative flex gap-5 bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-700 font-medium">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">{item.subtext}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-10" />
              
              {/* Form Card */}
              <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                
                {/* Form Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Send className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Quick Quote Request</h3>
                      <p className="text-sm text-gray-600">Get instant response via WhatsApp</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., John Kamau"
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your cooling/refrigeration needs, location, preferred time for service, etc."
                      rows={4}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {/* WhatsApp Submit Button */}
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <MessageCircle size={24} />
                      Send via WhatsApp
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
                    <div className="absolute inset-0 bg-gradient-to-r from-[#128C7E] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>

                  {/* Help Text */}
                  <p className="text-center text-sm text-gray-500">
                    By submitting, you'll be redirected to WhatsApp with your message pre-filled. 
                    We typically respond within <span className="font-semibold text-gray-700">5 minutes</span>!
                  </p>
                </form>
              </div>
            </div>

          </div>

          {/* Trust Badge Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl px-12 py-6">
              {[
                { icon: CheckCircle, text: "Licensed & Insured" },
                { icon: Clock, text: "24/7 Available" },
                { icon: Phone, text: "Same Day Service" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon className="text-blue-600" size={24} />
                    <span className="font-semibold text-gray-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contactus;