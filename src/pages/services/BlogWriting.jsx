import React from 'react';

const BlogWriting = () => {
  return (
    <div className="min-h-screen w-full py-24 px-20 space-y-8">
      {/* Input Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-black border-b-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Unleash the power of blog posting
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Fill the basic details for blog posting
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Blog Topic</label>
            <input
              type="text"
              className="w-full p-3 border border-[#0F0F0F]/[0.80] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Basic Description</label>
            <textarea
              rows={4}
              className="w-full p-3 border border-[#0F0F0F]/[0.80] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-[#0A0F2C] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
            Generate blog post
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Results</h2>
        <p className="text-gray-600 text-sm">
          Your blog post will be shown here
        </p>

        {/* Blog Writing Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            • Blog Writing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 h-48 mb-3 border border-black border-b-4">
              Blog writing - 1
            </div>
            <div className="bg-gray-50 rounded-xl p-4 h-48 mb-3 border border-black border-b-4">
              Blog writing - 2
            </div>
          </div>
        </div>

        {/* Blog Heading Section */}
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-900">
            • Blog Heading
          </h3>
          <div className="bg-gray-50 rounded-xl p-4 h-24 mb-3 border border-black border-b-4">
          </div>
        </div>

        {/* Blog Meta Description Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            • Blog Meta Description
          </h3>
          <div className="bg-gray-50 rounded-xl p-4 h-24 mb-3 border border-black border-b-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWriting;