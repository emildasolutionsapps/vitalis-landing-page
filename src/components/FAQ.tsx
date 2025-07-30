import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I know if this treatment is right for me?",
      answer: "Our comprehensive digital scalp scan and consultation will determine if you're a suitable candidate for our treatments. We assess your hair loss pattern, scalp health, and medical history to recommend the best approach for your specific needs."
    },
    {
      question: "What happens during the first consultation?",
      answer: "During your first consultation, we conduct a thorough scalp analysis using digital scanning technology, review your medical history, assess your hair loss pattern, and create a personalized treatment roadmap. The entire process takes about 45-60 minutes."
    },
    {
      question: "What is GFC and how does it work?",
      answer: "Growth Factor Concentrate (GFC) is an advanced treatment that uses your body's own growth factors to stimulate hair follicles and promote natural hair growth. It's a minimally invasive procedure that harnesses your body's healing mechanisms to rejuvenate dormant hair follicles."
    },
    {
      question: "Are the treatments safe?",
      answer: "Yes, all our treatments are completely safe. We use FDA-approved imported lasers and follow strict safety protocols. Our GFC treatment uses your own blood components, eliminating the risk of allergic reactions. All procedures are performed by qualified professionals."
    },
    {
      question: "What are the most common reasons for hair loss?",
      answer: "Common causes include genetic factors, hormonal imbalances, stress, poor nutrition, environmental factors, certain medications, and medical conditions. Our digital scalp analysis helps identify the specific causes affecting your hair."
    },
    {
      question: "Is it normal to lose hair daily?",
      answer: "Yes, losing 50-100 hairs per day is normal as part of the natural hair growth cycle. However, if you notice excessive shedding, thinning, or bald patches, it's time to seek professional evaluation to prevent further loss."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our hair loss treatments
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 text-left flex justify-between items-center hover:bg-blue-50 px-4 rounded-lg transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;