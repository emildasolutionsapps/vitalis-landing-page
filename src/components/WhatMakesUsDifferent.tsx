import React from 'react';

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Image Section */}
          <div className="order-2 lg:order-1 flex h-full">
            <img
              src="/dr-nidaand-teams.png"
              alt="Vitalis Healthcare Clinic Interior"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6 flex flex-col justify-start h-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What makes us different?
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  We are Gulbarga's most trusted premium clinic. Our Growth Factor Concentrate (GFC) is a
                  cutting edge treatment that harnesses the power of your body's own growth factors to
                  rejuvenate the skin & promote hair growth.
                </p>

                <p className="text-lg">
                  Each treatment is tailored for your specific needs by focusing on areas where skin
                  rejuvenation is desired.
                </p>

                <p className="text-lg">
                  And because your safety is of the utmost priority for us, we use imported lasers that are
                  FDA approved, making us one of the few clinics in Gulbarga to offer this level of certified
                  care.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What you can expect:
              </h3>

              <ul className="space-y-4 text-lg">
                <li className="flex flex-col">
                  <span className="font-bold text-gray-900">Expert Evaluation :</span>
                  <span className="text-gray-700 ml-0 mt-1">In-depth hair and scalp analysis</span>
                </li>

                <li className="flex flex-col">
                  <span className="font-bold text-gray-900">Accurate Diagnosis :</span>
                  <span className="text-gray-700 ml-0 mt-1">Understand the why behind your hair loss</span>
                </li>

                <li className="flex flex-col">
                  <span className="font-bold text-gray-900">Custom Treatment Plan :</span>
                  <span className="text-gray-700 ml-0 mt-1">Personalized for your scalp and your hair</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default WhatMakesUsDifferent;