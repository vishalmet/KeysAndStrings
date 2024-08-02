import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
// import { button } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleCloseClick = () => {
    setIsOpen(false); // Close the sidebar when the close button is clicked
  };

  return (
    <div className="">
      <div className="bg-custom-primary backdrop-filter backdrop-blur-lg bg-opacity-20 pb-3 pt-2 px-3 flex justify-between items-center text-custom-text">
        <a href="/" className="hover:cursor-pointer">
          <Image className="h-12 w-36" src={Logo} alt="Logo" />
        </a>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="block text-xl font-semibold focus:outline-none mr-4"
          >
            ☰
          </button>
        </div>
        <div
          className={`lg:hidden absolute inset-y-0 z-50 left-0 transform transition duration-300 ease-in-out bg-white text-black backdrop-filter backdrop-blur-lg h-screen w-64 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={handleCloseClick}
            className="absolute top-0 right-0 m-4 text-2xl focus:outline-none"
          >
            ×
          </button>
          <ul className="p-4 space-y-2 poppins-font font-medium">
            <li>
              <button
                to="/"
                className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                Home
              </button>
            </li>
            {/* <li><button to="#about-section" className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>About Me</button></li> */}
            <li>
              <button
                to="/experience"
                className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                Services
              </button>
            </li>
            <li>
              <button
                to="/works"
                className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                to="/works"
                className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                to="/contact"
                className="py-1 px-1 mx-1 pt-2 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                Contact Us
              </button>
            </li>
           
          </ul>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-4  space-x-2 poppins-font font-medium mr-4 text-lg">
          <div className="">
            <button
              to="/"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              {" "}
              Home{" "}
            </button>
            {/* <button to="#about-section" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"> About Me </button> */}
            <button
              to="/experience"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              {" "}
              Services{" "}
            </button>
            <button
              to="/works"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              {" "}
              Gallery{" "}
            </button>
            <button
              to="/contact"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              {" "}
              About Us{" "}
            </button>
            <button
              to="/contact"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              {" "}
              Contact Us{" "}
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
