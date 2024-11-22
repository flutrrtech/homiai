import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CallToAction from '../components/sections/CallToAction';
import PricingBox from '../components/sections/PricingBox';
import FAQSection from '../components/sections/FAQSection';
import MarketingThatWorksSection from '../components/sections/MarketingThatWorksSection';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <WhyChooseUs />
      <MarketingThatWorksSection/>
      <CallToAction />
      <PricingBox />
      <FAQSection />
    </div>
  );
};

export default Home;