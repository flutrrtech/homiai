import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqs = [
    {
      id: 0,
      question: "Why is digital marketing important for my business?",
      answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
    },
    {
      id: 1,
      question: "How can digital marketing help improve my website's visibility?",
      answer: "Digital marketing improves website visibility through SEO optimization, content marketing, social media presence, and targeted advertising. These strategies help your website rank higher in search results and attract more qualified traffic."
    },
    {
      id: 2,
      question: "How long does it take to see results from digital marketing efforts?",
      answer: "Results from digital marketing can vary depending on the strategies implemented, but typically businesses start seeing initial results within 3-6 months. Long-term sustainable results usually become apparent after 6-12 months of consistent effort."
    },
    {
      id: 3,
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "Success is measured through various metrics including website traffic, conversion rates, engagement rates, ROI, lead generation, and sales growth. We use advanced analytics tools to track and report these metrics regularly."
    }
  ];

  return (
    <div className="w-[90%] mt-8 mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Title and Description */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-4">Digital Marketing FAQs</h2>
          <p className="text-gray-600">
            As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="md:col-span-2">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-lg font-medium pr-8">{faq.question}</span>
                  <span className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </span>
                </button>
                
                {/* FAQ Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;