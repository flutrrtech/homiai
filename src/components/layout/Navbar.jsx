import homi_icon from "../../assets/homi_icon.svg";


import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const serviceDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setIsServiceDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-4 md:px-8 flex justify-between items-center bg-transparent backdrop-blur-lg z-50">
      <div className="flex items-center w-full justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={homi_icon} alt="homi_icon" className="h-8" />
          <h1 className="text-2xl md:text-4xl font-bold">homi.ai</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
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
              <div className="absolute bg-white text-black left-0 mt-2 py-2 w-32 px-4 rounded-md shadow-md">
                <Link to="/service1" className="block py-1 hover:text-gray-300">
                  Service 1
                </Link>
                <Link to="/service2" className="block py-1 hover:text-gray-300">
                  Service 2
                </Link>
                <Link to="/service3" className="block py-1 hover:text-gray-300">
                  Service 3
                </Link>
              </div>
            )}
          </div>
          <Link to="/" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/workplace" className="hover:text-gray-300">
            Workplace
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact us
          </Link>
          {isLoggedIn ? (
            <Link to="/login">
              <span
                onClick={logout}
                className="bg-blue-900 border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-2 rounded"
              >
                Logout
              </span>
            </Link>
          ) : (
            <Link to="/login">
              <span className="bg-blue-900 border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-2 rounded">
                Get started
              </span>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
        >
          <nav className="flex flex-col p-4 space-y-4">
            <div className="relative">
              <button
                onClick={toggleServiceDropdown}
                className="w-full text-left text-black flex items-center justify-between"
              >
                Service
                <svg
                  className={`h-4 w-4 transition-transform ${
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
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/service1" className="block text-black hover:text-gray-600">
                    Service 1
                  </Link>
                  <Link to="/service2" className="block text-black hover:text-gray-600">
                    Service 2
                  </Link>
                  <Link to="/service3" className="block text-black hover:text-gray-600">
                    Service 3
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="text-black hover:text-gray-600">
              About
            </Link>
            <Link to="/workplace" className="text-black hover:text-gray-600">
              Workplace
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-600">
              Contact us
            </Link>
            {isLoggedIn ? (
              <Link to="/login">
                <span
                  onClick={logout}
                  className="block w-full text-center bg-blue-900 text-white hover:bg-blue-800 px-6 py-2 rounded"
                >
                  Logout
                </span>
              </Link>
            ) : (
              <Link to="/login">
                <span className="block w-full text-center bg-blue-900 text-white hover:bg-blue-800 px-6 py-2 rounded">
                  Get started
                </span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
