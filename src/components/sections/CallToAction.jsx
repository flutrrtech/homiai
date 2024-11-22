import React from "react";
import business from "../../assets/business.svg";

const StatsGrid = () => {
  return (
    <div className="w-[90%] mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Homi.ai: Trusted by Thousands of Businesses
        </h1>
        <p className="text-gray-600">
          Whether you're a small startup or a large enterprise,
          <br />
          we've got the perfect plan for you.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-[1200px] mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-8 md:grid-rows-2 gap-4">
          {/* Left large card */}
          <div className="md:col-span-4 bg-[#F5F8FF] border-b-4 border border-black  md:row-span-2 bg-white rounded-[32px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
            {/* Space reserved for SVG */}
            <div className="h-[200px] w-full relative mb-8">
               <img className="w-48 m-right absolute right-0" src={business} alt="business" />
            </div>
            <div className="space-y-2">
              <h2 className="text-[28px] leading-tight font-medium text-gray-800">
                Pieces of
                <br />
                Content Generated
              </h2>
              <p className="text-[48px] font-bold">500,000+</p>
            </div>
          </div>

          {/* Top right cards */}
          <div className="md:col-span-4  grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer Satisfaction card */}
            <div className="bg-[#EBEBEB] rounded-[32px] border-b-4 border border-black  p-8 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
              <div className="space-y-2">
                <h2 className="text-[28px] leading-tight font-medium text-gray-800">
                  Customer
                  <br />
                  Satisfaction
                </h2>
                <p className="text-[48px] font-bold">98%</p>
              </div>
            </div>

            {/* Social Media Posts card */}
            <div className="bg-white rounded-[32px] border-b-4 border border-black bg-[#F5F8FF] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
              <div className="space-y-2">
                <h2 className="text-[28px] leading-tight font-medium text-gray-800">
                  Social Media
                  <br />
                  Posts
                </h2>
                <p className="text-[39px] font-bold">1 Million+</p>
              </div>
            </div>
          </div>

          {/* Bottom right card */}
          <div className="md:col-span-4 border-b-4 border border-black bg-[#EBEBEB] bg-white rounded-[32px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
            <div className="space-y-2">
              <h2 className="text-[28px] leading-tight font-medium text-gray-800">
                Content Creation
                <br />
                Process
              </h2>
              <p className="text-[48px] font-bold">10x Faster</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
