import React from "react";

function ContactUsMainPage() {
  return (
    <div className=" bg-[#3a652d] text-white p-4 flex justify-center">
      <div className="max-w-[1500px] flex flex-col lg:flex-row items-start justify-around lg:gap-6">
        <div className="mb-2 lg:mb-0">
          <p className="text-xl lg:text-2xl font-bold">
            Have questions? Speak to our expert Trek Advisors
          </p>
        </div>
        <div>
          <p className="text-md lg:text-lg ">
            We have an expert team of Trek Advisors to help you choose the right
            trek.
          </p>
          <p className="text-md lg:text-lg hidden lg:block ">
            So if you have questions like, "Can I do this trek?" or "Who else is
            trekking?", please get in touch.
          </p>
          <span>
            <a
              href=""
              className="text-yellow-400 font-bold underline transition-transform duration-400 transform hover:scale-125 hover:text-yellow-500"
            >
              Talk to our Trek Advisors
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMainPage;
