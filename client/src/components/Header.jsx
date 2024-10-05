import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useCourseStore from "../app/courseStore";
import LogoAA from "/images/Alpha Logo.png";
import useGetTrekTypes from "../hooks/useGetTrekTypes";

const Header = ({ type }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsSticky(currentScrollPos > 50);
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 300);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const addCourse = useCourseStore((state) => state.addCourse);
  const addTrekTypeId = useCourseStore((state) => state.addTrekTypeId);

  const addDateId = useCourseStore((state) => state.addDateId);
  const {
    data: treks = [],
    error,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ["TrekName"], queryFn: useGetTrekTypes });

  console.log("treks", treks);

  const handleTrekListClick = (trekId) => {
    // console.log("trekId", trekId);
    addTrekTypeId(trekId);
    // console.log("dateId", dateId);
  };

  return (
    <nav
      className={`flex font-body rounded-b w-full items-center overflow-hidden z-50 sm:px-4 py-6 px-2 transition-all duration-300 ease-in-out ${
        isSticky || type === "list"
          ? `bg-slate-800 text-slate-200 fixed top-0 ${
              showNavbar && type === "list"
                ? "transition-all duration-300 ease-in-out block"
                : "transition-all duration-300 ease-in-out hidden"
            }`
          : `bg-transparent fixed ${
              showNavbar
                ? "transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out hidden"
            }`
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-blue-300">
            Alpha Adventures
          </span> */}
          <img
            src={LogoAA}
            alt="Alpha Adventures Logo"
            className="h-10 w-10 lg:h-16 lg:w-16 object-cover bg-white rounded-full"
          />
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
            isMobileMenuOpen ? "relative" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4  bg-gray-800 lg:bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 gap-2 lg:gap-0 text-md lg:text-md lg:font-medium lg:items-center">
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={handleDropdownToggle}
                className="flex items-center w-full justify-between py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-400   text-white"
              >
                Upcoming Trek{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className={`z-10 font-normal md:w-[60%] lg:w-80 w-[90%]  divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600 ${
                  isDropdownOpen ? "fixed" : "hidden"
                }`}
              >
                <ul
                  className="absolute py-2 pr-4 pl-3 w-full rounded text-sm bg-gray-900 lg:-left-16 text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  {treks.map((trek) => (
                    <li key={trek._id} className="py-2 pr-4 pl-3 lg:p-0 ">
                      <NavLink to="/trektypetreks">
                        <div
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => handleTrekListClick(trek._id)}
                        >
                          {trek.name}
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Other NavLinks */}
            <li className="text-base">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                    isActive ? "lg:bg-transparent text-white" : "text-slate-200"
                  }  transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none  hover:text-blue-400  `
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
                    isActive ? "lg:bg-transparent text-white" : "text-slate-200"
                  } transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none hover:text-blue-400`
                }
                aria-current="page"
              >
                ABOUT US
              </NavLink>
            </li>
            {/* Add other NavLinks here */}
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                    isActive ? "lg:bg-transparent text-white" : "text-slate-200"
                  } transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none hover:text-blue-400`
                }
                aria-current="page"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                    isActive ? "lg:bg-transparent text-white" : "text-slate-200"
                  } transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none hover:text-blue-400`
                }
                aria-current="page"
              >
                FAQ's
              </NavLink>
            </li>
            <li className="border-b-[.5px] border-gray-200 lg:border-0 text-md ">
              <a
                href="https://wa.me/+919403449240"
                target="_black"
                className="outline-none relative inline-flex items-center justify-center leading-normal no-underline py-2 pr-4 pl-3 text-slate-100 font-sans font-bold uppercase hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group lg:text-md"
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
                <span className="outline-none absolute bottom-0 left-0 w-full h-0.5 bg-neutral-200 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
