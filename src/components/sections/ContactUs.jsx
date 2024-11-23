import React from 'react';
import contactus from '../../assets/contactus.svg'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-[90%] mt-20 mx-auto p-8 bg-[#EBEBEB] rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Let's Connect!</h2>
            <p className="text-gray-600 mt-2">
              Have questions or need assistance? We're here to help.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-[#01004F]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:hello@homi.ai" className="hover:text-blue-600">
                hello@homi.ai
              </a>
            </div>

            <div className="flex items-center space-x-3 text-[#01004F]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+91-9876543210</span>
            </div>

            <div className="flex items-center space-x-3 text-[#01004F]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Kolkata, India</span>
            </div>
          </div>

          {/* Placeholder for illustration */}
          <div className="hidden sm:block h-48 w-48">
            <img src={contactus} alt="contact-us" />
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-[#01004F] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Business Email"
              className="w-full px-4 py-2 border border-[#01004F] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-2 border border-[#01004F] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border border-[#01004F] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#01004F] text-white py-3 px-4 rounded-lg hover:opacity-90 transition duration-200"
          >
            Contact homi.ai
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;