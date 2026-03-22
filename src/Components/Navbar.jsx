import { useState, useEffect } from "react";
import { Menu, X, Snowflake, Wind } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
      }`}>
        <div className="max-w-screen-xl mx-auto px-6">
          
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <a href="#home" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <Snowflake className="text-white" size={24} />
                  <Wind className="absolute -right-1 -top-1 text-cyan-300" size={12} />
                </div>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-slate-900">
                  SONS
                </span>
                <span className="text-[10px] font-bold text-sky-600 tracking-wide">
                  COOLING & REFRIGERATION
                </span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-6">

              {/* Links */}
              <ul className="flex items-center gap-6">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#allservices' },
                  { name: 'Products', href: '#products' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-slate-700 hover:text-sky-600 font-semibold text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* ✅ WHATSAPP CTA BUTTON */}
              <a
                href="https://wa.me/254700695745" // <-- replace with your number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* REAL WHATSAPP IMAGE */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                WhatsApp Quote
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-6 space-y-4 border-t">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#allservices' }, 
                { name: 'Products', href: '#products' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-700 font-semibold py-2"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile WhatsApp */}
              <a
                href="https://wa.me/254700695745"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white rounded-full font-bold mt-4"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;