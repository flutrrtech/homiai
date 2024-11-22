import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import homi_icon from "../../assets/homi_icon.svg"


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <hr className='mt-14' />
    <footer className="w-[90%] mx-auto mt-4 p-8 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description Section */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-[#0A0F2C] rounded-full">
              <img src={homi_icon} alt="icon" />
            </div>
            <span className="text-xl font-semibold">homi.ai</span>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* License Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Licence</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#0A0F2C] transition-colors">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          Copyright © Homi Private Limited {currentYear}
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;