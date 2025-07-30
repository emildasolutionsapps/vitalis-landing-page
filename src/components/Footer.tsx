import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center ">
              <img 
                src="/vitalislogo1.svg" 
                alt="Vitalis Healthcare Logo" 
                className="w-30 h-30"
              />
              </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming lives through advanced hair restoration treatments with personalized care and cutting-edge technology.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-sm">8494906440</p>
                  <p className="text-sm">8884007440</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <p className="text-sm">vitalishealthcaregulbarga@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <a href="https://maps.app.goo.gl/w1MgXhmT43ipf8Sn8" className="text-sm">Gulbarga, Karnataka</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Hair Revival Consultation</li>
              <li>Digital Scalp Analysis</li>
              <li>GFC Treatment</li>
              <li>Personalized Treatment Plans</li>
              <li>Hair Growth Therapy</li>
              <li>Scalp Health Assessment</li>
            </ul>
          </div>

          {/* Hours & Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Clinic Hours</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-blue-400 mt-1" />
              <div className="text-sm text-gray-400">
                <p>Monday - Saturday</p>
                <p className="font-semibold text-white">11:00 AM - 8:00 PM</p>
                <p className="mt-2">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Vitalis Healthcare. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for healthier hair</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;