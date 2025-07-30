import React from 'react';
import { Scan, Map, Clock, CreditCard } from 'lucide-react';

const USPSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You Get With Your Consultation
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="w-16 h-16 rounded-full mb-6 shadow-lg overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/2d/3d/62/2d3d62d2212aaaec2f5e2f98655196cb.jpg" 
                alt="Hair treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
               Scalp Scan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reveal the root cause of your hair concerns with advanced digital analysis technology
            </p>
          </div>
          
          <div className="bg-teal-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-6 shadow-lg overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
                <img 
                src="https://i.pinimg.com/736x/37/0c/29/370c296e0c3f9c263b8b2d6edfd0cfdc.jpg" 
                alt="Hair treatment" 
                className="w-full h-full object-cover"
              />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Personalised Hair Growth Roadmap
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Step‑by‑step plan tailored to your unique scalp profile and hair needs
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Limited Availability</h4>
                <p className="text-gray-700">Only 5 consultation slots available per week | Credit valid 24 hrs after your session.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CreditCard className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Money-Back Guarantee</h4>
                <p className="text-gray-700">Book any treatment within 24 hrs and we'll credit your ₹150 back. If you don't move forward, you still keep your personalised plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;