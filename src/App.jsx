import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { MessageCircle } from 'lucide-react'
import './App.css'
import Footer from './Components/Footer'
import Map from './Components/Map'
import Contactus from './Components/Contactus'


function App() {
 

  return (
    <>
    <section id='home'>
        <Navbar/>
    <Hero/>
    <Contactus/>
    <Map/>
    <Footer/>
     {/* Flying WhatsApp Button */}
    <a 
      href="https://wa.me/254723494267" 
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 animate-pulse"
      target="_blank" 
      rel="noopener noreferrer"
      title="Contact us on WhatsApp"
    >
           <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
              
    </a>
    </section>  
    </>
  )
}

export default App
