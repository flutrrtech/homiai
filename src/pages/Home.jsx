import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PricingBox from '../components/sections/PricingBox';
import FAQSection from '../components/sections/FAQSection';
import StatsGrid from '../components/sections/CallToAction';
import Footer from '../components/layout/Footer';
import MarketingThatWorksSection from '../components/sections/MarketingThatWorksSection';
import Testimonials from '../components/sections/Testimonials';
import ContactUs from '../components/sections/ContactUs';

const Home = () => {
  return (
    <div className="home-page pt-20">
      <HeroSection />
      <WhyChooseUs />
      <MarketingThatWorksSection/>
      <PricingBox />
      <StatsGrid />
      <Testimonials/>
      <FAQSection />
      <ContactUs/>
    </div>
  );
};

export default Home;