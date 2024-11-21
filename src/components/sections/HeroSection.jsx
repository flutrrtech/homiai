// components/HeroSection.jsx
import React from 'react';
import Hero from "../../assets/hero.svg"
import flutrr from "../../assets/flutrr.svg"
import google from "../../assets/google.svg"
import facebook from "../../assets/facebook.svg"
import youtube from "../../assets/youtube.svg"
import pinterest from "../../assets/pinterest.svg"

const HeroSection = () => {
  return (
    <>
    <section className="bg-white py-6 lg:py-24 px-6 lg:px-12 flex flex-col items-center justify-between">
      {/* Text Section */}
      <div className="flex items-center justify-between w-[90%] m-auto gap-7">
      <div >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Create Marketing Content in Seconds with AI
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Homi.ai transforms how startups, small businesses, and enterprises create marketing content. From social media posts to blogs, our AI-powered tool makes it seamless, fast, and effective.
        </p>
        <button className="bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-blue-800 transition-all">
          Try for Free Today →
        </button>
      </div>
      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:flex lg:justify-end">
        <img
          src={Hero}
          alt="Marketing content illustration"
          className="w-full h-auto max-w-md lg:max-w-full"
        />
      </div>
      </div>
    </section>
      {/* Brand Logos */}
      <div className="w-full px-16 mt-6 lg:mt-4 bg-gray-100">
        <div className="flex px-2 py-6 flex-wrap justify-between items-center gap-6 py-4 border-t border-gray-200">
          {[flutrr, google, facebook, youtube, pinterest].map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`${brand} logo`}
              className="w-28"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
