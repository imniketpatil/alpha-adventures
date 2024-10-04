import React from "react";
import WhatsAppPNG from "/images/Whatsapp.png";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919403449240?text=Hey%20Alpha%20Adventures%2C%20I%27m%20looking%20to%20book%20a%20Trek"
      target="_blank"
      rel="noopener noreferrer"
      className=" h-10 w-10 md:h-8 md:w-auto rounded-full right-12 bottom-8 md:bottom-12 md:right-11 hover:cursor-pointer flex items-center justify-center fixed group hover:scale-110 transition-transform duration-300"
    >
      <img src={WhatsAppPNG} alt="WhatsApp" className="h-12 md:h-16" />
      <div className="absolute right-20 bottom-2 hidden group-hover:flex flex-col items-center justify-center px-3 py-2 bg-white shadow-lg rounded-lg text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-32">
        <p className="text-sm font-bold">Book A Trek!</p>
        <p className="text-xs font-semibold">Contact Us Now!</p>
      </div>
    </a>
  );
}

export default WhatsAppButton;
