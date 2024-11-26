import React from "react";
import WhatsAppPNG from "/images/Whatsapp.png";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919403449240?text=Hey%20Alpha%20Adventures%2C%20I%27m%20looking%20to%20book%20a%20Trek"
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 md:h-14 md:w-14 rounded-full right-12 bottom-8 md:bottom-12 md:right-12 hover:cursor-pointer flex items-center justify-center fixed group hover:scale-110 transition-transform duration-300"
    >
      <img
        src={WhatsAppPNG}
        alt="WhatsApp"
        className="h-12 w-12 md:h-14 md:w-14 object-contain"
      />
      <div className="absolute right-12 bottom-0 hidden group-hover:flex flex-col items-center justify-center py-2 bg-white shadow-lg rounded-lg text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-32">
        <p className="text-sm font-bold">Book A Trek!</p>
        <p className="text-xs font-semibold">Contact Us Now!</p>
      </div>
    </a>
  );
}

export default WhatsAppButton;
