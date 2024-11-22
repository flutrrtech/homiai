import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import testimonialsvg from "../../assets/testimonial.svg";

const testimonials = [
  {
    id: 1,
    title: "What our clients say",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero",
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Sandipan Bera",
    position: "Designer at flutrr",
  },
  {
    id: 2,
    title: "What our clients say",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero",
    author: "John Doe",
    position: "CEO at TechCorp",
  },
  {
    id: 3,
    title: "What our clients say",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero",
    quote:
      "Exceptional service and outstanding results. Their team's dedication to innovation has transformed our marketing strategy.",
    author: "Sarah Smith",
    position: "Marketing Director at InnovateCo",
  },
  {
    id: 4,
    title: "What our clients say",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero",
    quote:
      "The level of creativity and attention to detail is remarkable. They've become an invaluable partner in our growth journey.",
    author: "Michael Chen",
    position: "Founder at NextGen",
  },
  {
    id: 5,
    title: "What our clients say",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero",
    quote:
      "Their data-driven approach and strategic insights have helped us achieve unprecedented growth in our market segment.",
    author: "Emma Watson",
    position: "CMO at GrowthTech",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const formatSlideNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 ">
      <div className="bg-slate-50 rounded-[32px] border-b-4 border border-black p-8 relative">
        <div className="">
          <div className=" flex justify-between items-center">
            <div>

            <h2 className="text-3xl font-bold mb-4">
              {testimonials[currentSlide].title}
            </h2>
            <p className="text-gray-600 mb-4">
              {testimonials[currentSlide].description}
            </p>
            </div>
          {/* Decorative illustration */}
          <div className="hidden lg:block ">
            <img src={testimonialsvg} alt="people" />
          </div>
          </div>
          <div className="min-h-[160px] mb-2">
            <p className="text-lg text-gray-800 leading-relaxed">
              "{testimonials[currentSlide].quote}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-lg">
                {testimonials[currentSlide].author}
              </p>
              <p className="text-gray-600">
                {testimonials[currentSlide].position}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6 sm:mt-0">
              <button
                onClick={prevSlide}
                className="p-2 rounded-md px-6 border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <span className="text-sm">
                {formatSlideNumber(currentSlide + 1)}/
                {formatSlideNumber(testimonials.length)}
              </span>

              <button
                onClick={nextSlide}
                className="p-2 rounded-md px-6 bg-[#01004F] text-white hover:bg-navy-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
