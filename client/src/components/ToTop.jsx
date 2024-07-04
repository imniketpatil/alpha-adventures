import React, { useEffect, useState } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function ToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShow(currentScrollPos > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`bg-slate-800 h-16 font-body w-16 md:h-20 md:w-20 rounded-full right-8 bottom-8 md:right-12 md:bottom-12 flex items-center justify-center fixed hover:cursor-pointer transition-all duration-300 ease-in-out ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleClick}
    >
      <ArrowUpwardOutlinedIcon style={{ color: "white", fontSize: "3rem" }} />
    </div>
  );
}

export default ToTop;
