import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const results = [
    {
      before: "/Bald-1.png",
      after: "/bald-hair-grow.png",
      title: "Receding Hairline Treatment",
      duration: "6 months"
    },
    {
      before: "/secondfirst.jpg",
      after: "/secondafter.jpg",
      title: "Crown Thinning Recovery",
      duration: "4 months"
    },
    {
      before: "/ladybefore.png",
      after: "/ladyafter.png",
      title: "Female Pattern Hair Loss",
      duration: "8 months"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section className="py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results From Real Patients
          </h2>
          <p className="text-lg text-gray-600">
            See the transformation our treatments can achieve
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div className="text-center">
    <h4 className="text-lg font-semibold text-gray-900 mb-4">BEFORE</h4>
    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
      <img
        src={results[currentSlide].before}
        alt="Before treatment"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
                
                <div className="text-center">
    <h4 className="text-lg font-semibold text-gray-900 mb-4">AFTER</h4>
    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
      <img
        src={results[currentSlide].after}
        alt="After treatment"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
              
              <div className="text-center mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {results[currentSlide].title}
                </h3>
                <p className="text-gray-600">
                  Treatment Duration: {results[currentSlide].duration}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              
              <div className="flex space-x-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;