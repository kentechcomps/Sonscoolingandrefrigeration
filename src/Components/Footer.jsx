 
 
 
 const Footer = ()=>{

  const currentYear = new Date().getFullYear();
    return(
            <footer className="bg-[#0A1628] text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#D4AF37] mb-4">Sons Cooling Systems And Refrigeration Services</h3>
              <p className="leading-relaxed mb-6">
                Kenya's trusted professional cooling and refrigeration service providers delivering accurate, reliable services.
              </p>
              <div className="flex gap-3">
                {['f', 'in', 'tw'].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: 'Services', links: ['Cold Storage Solutions', 'Freezing Systems', 'Chillers' , 'AC System Repair' ,'Heating Systems','Heating system Installation', 'Heating System Maintenance' , 'HV/AC dust and Vent Installation', 'HV/AC Dust and Vent Maintenance'] },
              { title: 'Company', links: ['About Us', 'Portfolio', 'Contact'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Licensing'] }
            ].map((column, idx) => (
              <div key={idx}>
                <h4 className="text-white font-semibold text-lg mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-[#D4AF37] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

<p>
  &copy; {currentYear} Sons Cooling Systems And Refrigeration Services. 
  All rights reserved. | Licensed Professional Cooling and Refrigeration Service Provider in Kenya.
</p>
        </div>
      </footer>

    )
 }
 export default Footer ;

