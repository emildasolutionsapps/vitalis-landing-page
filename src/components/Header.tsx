import React from 'react';
import { Phone, Clock } from 'lucide-react';

// This line tells TypeScript that the function exists on the window object
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => void;
  }
}

const Header = () => {
  // 👇 1. Create a handler function
  const handleBookConsultationClick = () => {
    // Call the function you defined in index.html
    // We don't pass a URL because the <a> tag already handles the redirect.
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion();
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/landingpage/vitalislogo1.svg"
              alt="Vitalis Healthcare Logo"
              className="w-25 h-15"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>8494906440</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Clock className="w-4 h-4" />
              <span>11 AM - 8 PM</span>
            </div>
            <a
              href="https://wa.link/4k4o1e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              onClick={handleBookConsultationClick} // 👇 2. Add the onClick handler here
            >
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Book Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
