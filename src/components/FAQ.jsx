import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import TempSpace from "./TempSpace";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I know if a product is available in boutiques?",
      answer:
        "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.",
    },
    {
      question:
        "How can I find the prices or get other information about Chanel products?",
      answer:
        "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.",
      icon: KeyboardArrowDownOutlinedIcon,
    },
    {
      question: "How many collections come out every year?",
      answer:
        "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.",
    },
    {
      question: "Are all of the fashion collections featured on the website?",
      answer:
        "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.",
    },
    {
      question:
        "Where do I find products that I have seen in magazines or Social Media?",
      answer:
        "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.",
    },
  ];

  return (
    <>
      <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 md:mt-20 py-12 px-4 ">
        <h1 className="text-center  lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
          FAQ's
        </h1>

        <div className="lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
          <div className="flex justify-between md:flex-row flex-col">
            <div className="md:mb-0 mb-8 md:text-left text-center">
              <h2 className="font-medium  text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
                Questions
              </h2>
              <p className="font-normal  text-sm leading-5 text-gray-600 md:w-full md:ml-0 w-11/12 mx-auto md:font-semibold ">
                If you don’t find your answer,
                <br /> Please contact us, <br />
                We’ll be more than happy to assist you.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-slate-200 md:justify-center justify-center items-center px-4 py-3 w-full ">
                <a
                  href="https://wa.me/919403110937?text=Hey%21%20We%20are%20Alpha%20Adventures%2C%20your%20adventure%20travel%20partner.%20How%20can%20we%20assist%20you%3F"
                  target="_black"
                  className=" outline-none relative inline-flex items-center justify-center leading-normal no-underline  py-2 pr-4 pl-3  text-slate-700 font-sans font-bold text-sm uppercase hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group lg:text-lg"
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
                  <span className=" outline-none absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-8/12 w-full mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} onClick={() => toggleFAQ(index)}>
              <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

              <div className="w-full md:px-6 hover:cursor-pointer">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="flex justify-center items-center  font-medium text-base leading-6 text-gray-800">
                      <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 font-semibold text-gray-800">
                        Q{index + 1}.
                      </span>
                      {faq.question}
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => toggleFAQ(index)}
                  >
                    <KeyboardArrowDownOutlinedIcon
                      className="h-6 w-6 text-slate-900"
                      aria-hidden="true"
                    />
                    {/* <img
                    className={`transform dark:hidden ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    className={`transform dark:block hidden ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                    alt="toggler"
                  /> */}
                  </button>
                </div>
                <div
                  className={`${
                    activeIndex === index ? "block" : "hidden"
                  } mt-6 w-full`}
                >
                  <p className="text-base leading-6 text-gray-600 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <hr className="w-full lg:mt-10 my-8" />
        </div>
      </div>
    </>
  );
};

export default FAQ;
