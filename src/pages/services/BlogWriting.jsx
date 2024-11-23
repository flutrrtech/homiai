import React, { useState } from "react";
import { Run } from "../../utils/gemini.js";

const BlogWriting = () => {
  const [query, setQuery] = useState({
    topic: "",
    description: "",
    company_name: "flutrr",
    company_description:
      "flutrr provides the most immersive, Multilingual , Safe and Inclusive dating platform where one can find meaningful matches based around their passion and interests. We are developing and designing a whole new approach towards online dating. Our goal is to provide an immersive yet safe environment for individuals to find their right and meaningful match without having to go through multiple pay-gates. We provide a free-to-use online dating experience which is never seen before in the world of online dating apps. Love's new language.",
    company_tagline: "Match, chat and find serious, meaningful love",
  });
  const [blogData, setBlogData] = useState({
    blogs: [],
    headings: [],
    metaDescriptions: [],
  });
  const [loading, setLoading] = useState(false)

  const parseResponse = (response) => {
    const blogOptions = [];
    const headings = [];
    const metaDescriptions = [];

    // Split the response into blog options
    const responseBlocks = response.split("**Blog Option");

    responseBlocks.forEach((block, index) => {
      if (index === 0) return;
      const headingMatch = block.match(/(?<=\*\*Blog Heading:\*\* )(.*)/);
      const metaDescriptionMatch = block.match(
        /(?<=\*\*Meta Description:\*\* )(.*)/
      );
      const blogPostMatch = block.match(
        /(?<=\*\*Blog Post:\*\*\n)([\s\S]*?)(?=\n\*\*|$)/
      );

      if (headingMatch && metaDescriptionMatch && blogPostMatch) {
        blogOptions.push(blogPostMatch[1].trim());
        headings.push(headingMatch[1].trim());
        metaDescriptions.push(metaDescriptionMatch[1].trim());
      }
    });

    setBlogData({
      blogs: blogOptions,
      headings: headings,
      metaDescriptions: metaDescriptions,
    });
  };

  const handleInput = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true)
    const res = await Run(query);
    if(res){
      setLoading(false)
      parseResponse(res);
    }
  };

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
              name="topic" // Add name attribute
              value={query.topic}
              onChange={handleInput}
              type="text"
              className="w-full p-3 border border-[#0F0F0F]/[0.80] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Basic Description</label>
            <textarea
              name="description" // Add name attribute
              value={query.description}
              onChange={handleInput}
              rows={4}
              className="w-full p-3 border border-[#0F0F0F]/[0.80] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#0A0F2C] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
           {loading ? "AI is thinking...":" Generate blog post"}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {blogData.blogs.length > 0 && <BlogDisplay blogData={blogData} />}
    </div>
  );
};

export default BlogWriting;

export const BlogDisplay = ({ blogData }) => {
  const { blogs, headings, metaDescriptions } = blogData;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Results</h2>
      <p className="text-gray-600 text-sm">Your blog post will be shown here</p>

      {/* Blog Writing Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          • Blog Writing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(blogs).map((blog, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 h-48 mb-3 border border-black border-b-4 overflow-auto"
            >
              {blog.split("\n\n").map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-2 text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Blog Heading Section */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-gray-900">
          • Blog Heading
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(headings).map((heading, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 h-24 mb-3 border border-black border-b-4 overflow-auto"
            >
              <p className="text-sm font-medium">{heading}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Meta Description Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          • Blog Meta Description
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(metaDescriptions).map((meta, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 h-24 mb-3 border border-black border-b-4 overflow-auto"
            >
              <p className="text-sm">{meta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
