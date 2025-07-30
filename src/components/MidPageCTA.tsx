import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MidPageCTA = () => {
  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const issues = [
    "Thinning hair",
    "Receding hairline", 
    "Bald patches",
    "Excessive shedding"
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-[12px] md:text-2xl font-bold text-gray-900 leading-tight">
              Are you afraid of going out due to........
            </h2>
          </div>

          {/* Issues Grid */}
          <div className="max-w-[400px]  mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
              {issues.slice(0, 4).map((issue, index) => (
                <div
  key={index}
  className="bg-blue-600 text-white px-4 h-[90px] rounded-lg text-sm font-semibold text-center shadow hover:bg-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-105 whitespace-nowrap flex items-center justify-center"
>
  {issue}
</div>

              ))}
            </div>
          </div>



        
        <div className="mt-12">
          <p className="text-lg font-semibold text-orange-500 mb-6 text-center">
            Only 5 consultation slots available per week
          </p>
          
          
          <button 
            onClick={() =>
              window.open(
                'https://wa.me/918494906440?text=Hi%2C%20I%20would%20like%20to%20book%20a%20hair%20consultation',
                '_blank'
              )
            }
            className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg flex items-center justify-center mx-auto"
          >
            BOOK A CONSULTATION NOW
            <ArrowLeft className="w-5 h-5 ml-2 text-yellow-300" />
          </button>
        </div>
    </section>
  );
};

export default MidPageCTA;