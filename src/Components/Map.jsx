import { 
   MapPin
  
} from 'lucide-react';

const Map = () => {

    return(
               <div className="mt-16">
            <div className="bg-[#FAF8F3] rounded-2xl p-4 border border-[#D4AF37]/20 overflow-hidden">
              <div className="mb-4">
                <p className="text-gray-600">Visit our office for consultations</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-96">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1655974944047!2d37.068145984583204!3d-1.0364095326888987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f19ea050e5b%3A0xd83135fdbd42056c!2sBiashara%20plaza!5e0!3m2!1sen!2ske!4v1774008196783!5m2!1sen!2ske"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Biashara Plaza Location"
/>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0A1628]">Sons Cooling Systems And Refrigeration Services</p>
                  <p className="text-gray-600">Thika Kiambu County</p>
                  <p className="text-sm text-gray-500 mt-1">Biashara Building Fountain Gate</p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Map ;