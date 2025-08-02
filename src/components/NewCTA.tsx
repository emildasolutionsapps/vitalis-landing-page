import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

// This line tells TypeScript that the function exists on the window object
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => void;
  }
}

const NewCTA = () => {
  // 👇 1. Create a handler function specifically for the WhatsApp click
  const handleWhatsappClick = () => {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion();
    }
  };

  return (
    <section id="new-cta-section" className="py-12 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight">
            Choose Vitalis Healthcare today & let's make<br />
            your hair dreams a reality!
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* NO TRACKING ON THIS BUTTON */}
            <a
              href="tel:8494906440"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3 shadow-lg min-w-[180px]"
            >
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
            
            <a
              href="https://wa.link/4k4o1e"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick} // 👇 2. Add the onClick handler ONLY here
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-3 shadow-lg min-w-[180px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WHATSAPP</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span className="text-sm">vitalishealthcaregulbarga@gmail.com</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span className="text-sm">8494906440 | 8884007440</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCTA;
