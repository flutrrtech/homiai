import React from 'react';
import { Upload } from 'lucide-react';
import uploadgif from '../assets/upload.svg'

import { useNavigate } from 'react-router-dom';

const CompanyUploadForm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] mx-auto py-24 p-6">
      {/* Header with icon */}
      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <img className='w-32' src={uploadgif} alt="upload" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Upload your company details
        </h1>
        <p className="text-gray-600 text-sm">
          add your company details like logo, name, tagline etc.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#01004F]">
        {/* Logo Upload Section */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-2">
            Add Company Logo
          </label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 w-32 h-32 flex items-center justify-center cursor-pointer hover:border-gray-300 transition-colors">
            <div className="text-gray-400">
              <Upload size={24} className="mx-auto mb-2" />
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            The logo will be in jpg, PNG, jpeg, svg and max 5MB
          </p>
        </div>

        {/* Company Details Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[#01004F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Tag Line
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[#01004F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* About Company */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-2">
            About Company
          </label>
          <textarea
            rows={4}
            className="w-full p-3 border border-[#01004F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#0A0F2C] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity" onClick={() => navigate('/workplace')}>
          Generate blog post
        </button>
      </div>
    </div>
  );
};

export default CompanyUploadForm;