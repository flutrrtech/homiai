import React from 'react';
import marketing_woman from '../../assets/marketing_woman.svg'

const MarketingThatWorksSection = () => {
    return (
      <div className="bg-[#F5F8FF] mt-8 rounded-lg border-b-4 border border-black shadow-lg  p-8 flex items-center w-[85%] m-auto justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Marketing That Works as Hard as You Do</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#01004F] hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg"
            >
              Try for Free Today
            </a>
            <a
              href="#"
              className="text-blue-900 border-2 border-blue-900 hover:text-blue-800 font-medium py-3 px-6 rounded-lg"
            >
              Contact Sales
            </a>
          </div>
        </div>
        <div>
          <img
            src={marketing_woman}
            alt="Marketing Woman"
            className="w-64 h-auto"
          />
        </div>
      </div>
    );
  };


  export default MarketingThatWorksSection;