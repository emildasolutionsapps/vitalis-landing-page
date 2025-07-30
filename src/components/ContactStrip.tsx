import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactStrip = () => {
  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Call Us</p>
              <p className="font-semibold">8494906440 | 8884007440</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Email</p>
              <p className="font-semibold text-sm">vitalishealthcaregulbarga@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Location</p>
              <p className="font-semibold">Gulbarga, Karnataka</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Timing</p>
              <p className="font-semibold">11 AM – 8 PM, Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;