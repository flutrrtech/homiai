import React from "react";
import arrow from "../../assets/arrow.svg";
import why_us_one from "../../assets/why_us_one.svg";
import why_us_two from "../../assets/why_us_two.svg";
import why_us_three from "../../assets/why_us_three.svg";
import why_us_four from "../../assets/why_us_four.svg";

const WhyChooseUs = () => {
  return (
    <div className="py-12 px-6 w-[90%] m-auto" id="about">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-center mb-3">
          Why Choose Homi.ai?
        </h1>
        <p className="text-gray-500">
          Our AI-powered platform simplifies your marketing workflow and ensures
          you stay ahead of the competition.
        </p>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Instant Content Creation */}
        <div className="bg-white border-black border-b-4 border border-black rounded-lg shadow-lg p-6 flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Instant Content Creation
            </h2>
            <p className="text-gray-600">
              Generate ads, blogs, and posts with just a few clicks.
            </p>
            <a
              href="#"
              className="mt-3  hover:underline flex gap-2 items-center"
            >
              <img src={arrow} alt="arrow" />
              <span>Know more </span>
            </a>
          </div>
          <img src={why_us_one} alt="Instant Content Creation" />
        </div>

        {/* AI-Powered Personalization */}
        <div className="bg-white border-black border-b-4 border border-black rounded-lg shadow-lg p-6 flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              AI-Powered Personalization
            </h2>
            <p className="text-gray-600">
              Tailor your content to your brand's voice and target audience.
            </p>
            <a
              href="#"
              className="mt-3  hover:underline flex gap-2 items-center"
            >
              <img src={arrow} alt="arrow" />
              <span>Know more </span>
            </a>
          </div>
          <img src={why_us_two} alt="AI-Powered Personalization" />
        </div>

        {/* Multi-Platform Support */}
        <div className="bg-white border-black border-b-4 border border-black rounded-lg shadow-lg p-6 flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Multi-Platform Support</h2>
            <p className="text-gray-600">
              Export content for social media, websites, blogs, and more.
            </p>
            <a
              href="#"
              className="mt-3 hover:underline flex gap-2 items-center"
            >
              <img src={arrow} alt="arrow" />
              <span>Know more </span>
            </a>
          </div>
          <img src={why_us_three} alt="Multi-Platform Support" />
        </div>

        {/* Insights and Analytics */}
        <div className="bg-white border-black border-b-4 border border-black rounded-lg shadow-lg p-6 flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Insights and Analytics</h2>
            <p className="text-gray-600">
              Track content performance to refine your marketing strategy.
            </p>
            <a
              href="#"
              className="mt-3  hover:underline flex gap-2 items-center"
            >
              <img src={arrow} alt="arrow" />
              <span>Know more </span>
            </a>
          </div>
          <img src={why_us_four} alt="Insights and Analytics" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;


