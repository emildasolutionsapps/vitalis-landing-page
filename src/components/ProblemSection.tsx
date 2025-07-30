import React from 'react';
import { AlertTriangle, Users, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Thinning Hair",
      description: "Notice your hair becoming thinner and less voluminous over time?"
    },
    {
      icon: AlertTriangle,
      title: "Bald Patches",
      description: "Visible bald spots appearing on your scalp causing confidence issues?"
    },
    {
      icon: Users,
      title: "Receding Hairline",
      description: "Excessive shedding or scalp irritation affecting your daily life?"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Are You Experiencing These Hair Concerns?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These common hair problems can significantly impact your confidence and quality of life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <problem.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;