import React from 'react';

// This line tells TypeScript that the function exists on the window object
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => void;
  }
}

const SocialProof = () => {
  // 👇 1. Create a handler function for the click
  const handleSpotsClick = () => {
    // First, report the conversion
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion();
    }
    // Then, perform the original action of opening the link
    window.open('https://wa.link/4k4o1e', '_blank');
  };

  return (
    <section className="py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from satisfied customers
          </p>
        </div>
        
        <div className="mb-12">
          <img
            src="/landingpage/testimonial.png"
            alt="Patient Testimonials"
            className="w-full max-w-4xl mx-auto h-auto rounded-xl object-contain cursor-pointer transform hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        </div>
        
        <div className="text-center">
          <div className="text-center">
            <button
              onClick={handleSpotsClick} // 👇 2. Update the onClick to use the new handler
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg animate-pulse"
            >
              Only two spots remaining this week
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
