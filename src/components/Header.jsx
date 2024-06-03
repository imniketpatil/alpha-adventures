import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({ type }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`flex  px-2 sm:px-4 py-2.5 rounded-b w-full items-center overflow-hidden z-10  ${
        type === "list" ? "bg-blue-700 fixed" : "bg-transparent absolute"
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap text-white`}
          >
            Alpha Adventures
          </span>
        </Link>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            onClick={handleMenuToggle}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full lg:block lg:w-auto ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 bg-gray-800 lg:bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 text-sm lg:text-lg lg:font-medium lg:items-center ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                    isActive
                      ? " lg:bg-transparent text-white"
                      : "text-slate-200"
                  }`
                }
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                    isActive
                      ? " lg:bg-transparent text-white"
                      : "text-slate-200"
                  }`
                }
                aria-current="page"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                    isActive
                      ? " lg:bg-transparent text-white"
                      : "text-slate-200"
                  }`
                }
                aria-current="page"
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                    isActive
                      ? " lg:bg-transparent text-white"
                      : "text-slate-200"
                  }`
                }
                aria-current="page"
              >
                FAQs
              </NavLink>
            </li>
            <li className="border-b-[.5px] border-gray-200 lg:border-0">
              <a
                href="https://wa.me/919403110937?text=Hey%21%20We%20are%20Alpha%20Adventures%2C%20your%20adventure%20travel%20partner.%20How%20can%20we%20assist%20you%3F"
                target="_black"
                className="relative inline-flex items-center justify-center leading-normal no-underline  py-2 pr-4 pl-3  text-slate-300 font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group lg:text-lg"
              >
                Get In Touch
                <svg
                  className="icon icon-tabler icon-tabler-arrow-up-right"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 7l-10 10"></path>
                  <path d="M8 7l9 0l0 9"></path>
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
