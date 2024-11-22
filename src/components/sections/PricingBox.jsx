import React, { useState } from 'react';
import { CircleCheckBig } from 'lucide-react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'Basic',
      price: 99,
      description: 'Ideal for small teams and solopreneurs.',
      features: [
        '1 user seat',
        'Normal support',
        'Blog & Ads Writing',
        'AI Image generation'
      ],
      buttonText: 'Get started'
    },
    {
      name: 'Growth',
      price: 199,
      description: 'Perfect for growing businesses.',
      features: [
        '1 user seat, add up to 2',
        'Premium support',
        'Blog & Ads Writing',
        'AI Image generation',
        'Plan and schedule social content'
      ],
      buttonText: 'Start Free 7-Day Trial'
    },
    {
      name: 'Enterprise',
      price: 399,
      description: 'For businesses with large-scale content needs',
      features: [
        '1 user seat, add up to 5',
        'Private support',
        'Blog & Ads Writing',
        'AI Image generation & editing tools',
        'Plan and schedule social content',
        'Access to all latest LLMs'
      ],
      buttonText: 'Start Free 7-Day Trial',
      popular: true
    }
  ];

  return (
    <div className="w-[90%] mx-auto mt-10 px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get the AI built for better marketing results</h1>
        <p className="text-gray-600 mb-8">
          Whether you're a small startup or a large enterprise, we've got the perfect plan for you.
        </p>
        
        <div className="inline-flex items-center bg-gray-200 rounded-lg p-1 mb-8">
          <button
            className={`px-4 py-2 rounded-md ${
              isMonthly ? 'bg-[#01004F] text-white shadow-sm' : ''
            }`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly plan
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              !isMonthly ? 'bg-[#01004F] text-white shadow-sm' : ''
            }`}
            onClick={() => setIsMonthly(false)}
          >
            Annual plan <span className="text-gray-600">save ~20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {plans.map((plan) => (
          <div
            key={plan.name.toLowerCase()}
            className={`rounded-3xl p-8 cursor-pointer transition-all duration-200 ${
              selectedPlan === plan.name.toLowerCase()
                ? 'bg-blue-50 border border-b-4 border-r-4 border-[#01004F]'
                : 'border border-gray-200'
            }`}
            onClick={() => setSelectedPlan(plan.name.toLowerCase())}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              {plan.popular && (
                <span className="bg-[#01004F] text-white px-3 py-1 rounded-md text-sm">
                  Popular
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{plan.description}</p>
             <hr className='border border-gray-300 mb-4' />
            <button
              className={`w-full py-3 px-4 rounded-lg mb-6 ${
                selectedPlan === plan.name.toLowerCase()
                  ? 'bg-[#01004F] text-white '
                  : 'bg-white border border-gray-800'
              }`}
            >
              {plan.buttonText}
            </button>

            <ul className="space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CircleCheckBig 
                    className={`h-5 w-5 mr-3 ${
                      selectedPlan === plan.name.toLowerCase()
                        ? 'text-[#01004F]'
                        : 'text-gray-400'
                    }`}
                  />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;