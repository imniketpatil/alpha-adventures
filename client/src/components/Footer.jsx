import React from "react";
import { NavLink, Link } from "react-router-dom";
import LogoAAFooter from "/images/AALogo-removebg.png";

const Footer = () => {
  return (
    <div className="flex items-end w-full min-h-content bg-white font-body">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-10 mx-auto md:items-center lg:items-center lg:justify-center md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center lg:mx-0 md:text-center mb-10 lg:mb-0">
            <Link
              to="/"
              className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-center"
            >
              <img src={LogoAAFooter} alt="AA Logo" className="h-20" />
            </Link>
            <p className="mt-2 text-md text-gray-500">Raw, Wild, Untamed</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                  href="https://www.facebook.com/alphadventure2018/about"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                  href="https://wa.me/+919403449240" // Replace with your WhatsApp contact link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>

                <a
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                  href="https://www.instagram.com/alphaadventures.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                  href="https://in.linkedin.com/company/alpha-adventures-travel-community"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left justify-around items-center bg-gray-100 py-5">
            {/* Platform Section */}
            <div className="w-full px-4 lg:w-1/4 md:w-1/3 mb-8">
              <h2 className="mb-4 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font">
                Our Conditions
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    to="/termsandcondition"
                    className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
                  >
                    Terms &amp; Condition
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/RefundCancellationPolicy"
                    className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
                  >
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/faqs"
                    className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
                  >
                    FAQ
                  </Link>
                </li>
              </nav>
            </div>

            {/* Contact Us Section */}
            <div className="w-full px-4 lg:w-1/4 md:w-1/3 mb-8">
              <h2 className="mb-4 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font">
                Contact Us
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a
                    className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
                    href="https://wa.me/+918180001597"
                    target="_blank"
                  >
                    +91 8180001597
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
                    href="https://wa.me/+919403449240"
                    target="_blank"
                  >
                    +91 9403449240
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
                    href="https://maps.app.goo.gl/ghdXYL2LtzKQLGyR7"
                    target="_blank"
                  >
                    C6 Takshasheela Apartment, Hiltop Layout, North Ambazari
                    Road, Nagpur, Maharashtra - 440010
                  </a>
                </li>
              </nav>
            </div>
            {/* <div className="w-full px-4 lg:w-1/4 md:w-1/3 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.347471099058!2d79.05261440000001!3d21.1385659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c068975715f3%3A0x7dbf7b35db0731b6!2sTakshsheela%20Apartment!5e0!3m2!1sen!2sin!4v1728676682328!5m2!1sen!2sin"
                width="300"
                height="300"
                style={{ border: "0" }} // Fix: Use style object
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container  px-5 py-4 mx-auto">
            <a
              className=" left-2 flex bottom-1"
              href="https://www.linkedin.com/in/niket-patil-8a86942b6/"
              target="_blank"
            >
              Developed By{""}
              <span className="ml-3 text-gray-500 flex justify-center items-center cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </span>
            </a>
            {/* <p className="text-sm text-gray-700 capitalize text-center">
              © 2024 All rights reserved
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
