import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  const scrollToChat = () => {
    document.getElementById('new-cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <div className="min-h-screen flex flex-col">
          {/* Video Section - Below Header */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/byeeOqOUCAg?autoplay=1&mute=1&loop=1&playlist=byeeOqOUCAg&controls=1&showinfo=0&rel=0&modestbranding=1"
                  title="Hair Loss Treatment Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Play Button Overlay (optional) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex items-center">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold">
                  ✨ Gulbarga's Premier Hair Clinic
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Worried about 
                  <span className="text-blue-600"> hair loss</span>? 
                  You're not alone.
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Stress, poor nutrition and environmental factors could be making your hair fall worse. 
                  At Vitalis Healthcare, we offer personalized, clinically-backed treatment plans to 
                  combat hair fall and bring your hair back to life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={scrollToChat}
                  className="group relative bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Hair Revival Journey
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-12 pt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;