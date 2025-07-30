import React from 'react';

const OfferBanner = () => {
  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-6">
          <p className="text-lg md:text-xl font-medium">
            And now we are offering,
          </p>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Gulbarga's First "Hair Revival Consultation" -<br />
            Only ₹150 <span className="text-orange-200">(Earlier priced at ₹250)</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="">
              {/* Primary text */}
              <div className="text-center font-bold uppercase bg-gradient-to-r from-white via-red-500 to-white bg-[length:200%] bg-clip-text text-transparent animate-gradient">
  LIMITED TIME ONLY
</div>


            </div>
            
            <button 
              onClick={scrollToChat}
              className="bg-white text-blue-600 px-14 py-2 rounded-xl text-xl font-bold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;