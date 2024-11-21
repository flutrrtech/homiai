// components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isCaseStudyDropdownOpen, setIsCaseStudyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const serviceDropdownRef = useRef(null);
  const caseStudyDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setIsServiceDropdownOpen(false);
      }
      if (
        caseStudyDropdownRef.current &&
        !caseStudyDropdownRef.current.contains(event.target)
      ) {
        setIsCaseStudyDropdownOpen(false);
      }
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target)
      ) {
        setIsResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  const toggleCaseStudyDropdown = () => {
    setIsCaseStudyDropdownOpen(!isCaseStudyDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <header className="py-4 px-8 flex justify-between items-center">
      <div className="flex items-center w-full justify-between">
        <Link href="/">
          <a>
            <h1 className="text-4xl font-bold">Homi.ai</h1>
            {/* <img src="/homi-logo.svg" alt="Homi.ai Logo" className="h-8 mr-4" /> */}
          </a>
        </Link>
        <nav className="space-x-4 relative flex">
          {/* Service Dropdown */}
          <div className="relative" ref={serviceDropdownRef}>
            <button
              onClick={toggleServiceDropdown}
              className="hover:cursor-pointer flex items-center focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isServiceDropdownOpen}
            >
              Service
              <svg
                className={`h-4 w-4 ml-1 transition-transform ${
                  isServiceDropdownOpen ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isServiceDropdownOpen && (
              <div className="absolute bg-white text-black left-0 mt-2 py-2 w-32  px-4 rounded-md shadow-md z-10">
                <Link href="/service1">
                  <a className="block hover:text-gray-300">Service 1</a>
                </Link>
                <Link href="/service2">
                  <a className="block hover:text-gray-300">Service 2</a>
                </Link>
                <Link href="/service3">
                  <a className="block hover:text-gray-300">Service 3</a>
                </Link>
              </div>
            )}
          </div>
          <div>
            <p>About</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <a className="hover:text-gray-300">Contact us</a>
            </Link>
            <Link href="/get-started">
              <a className="bg-blue-900 border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-2 rounded">
                Get started
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
