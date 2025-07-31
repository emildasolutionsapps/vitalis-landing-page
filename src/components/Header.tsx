import React from 'react';
import { Phone, Mail, Clock, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="./vitalislogo1.svg" 
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
