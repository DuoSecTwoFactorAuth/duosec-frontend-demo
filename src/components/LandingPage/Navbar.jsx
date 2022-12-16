import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-10 bg-[#474554] border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <ScrollLink activeClass="active" to="home" spy={true} smooth={true}>
          <div className="flex items-center ml-12 cursor-pointer">
            <img
              src={logo}
              className="mr-1 h-6 sm:h-10"
              alt="ProjectHub Logo"
            />
            <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
              Employee Hub
            </span>
          </div>
        </ScrollLink>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium mr-10">
            <li>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                <span className="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 lg:ml-1 lg:mr-2 lg:px-6 lg:py-3 lg:text-white lg:hover:cursor-pointer lg:hover:bg-white lg:hover:text-[#5C5CC0] lg:hover:font-semibold lg:hover:rounded-md text-white text-xl md:hover:text-[#fcfcfc] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Home
                </span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
              >
                <span className="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 lg:ml-1 lg:mr-2 lg:px-6 lg:py-3 lg:text-white lg:hover:cursor-pointer lg:hover:bg-white lg:hover:text-[#5C5CC0] lg:hover:font-semibold lg:hover:rounded-md text-white text-xl md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </span>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;