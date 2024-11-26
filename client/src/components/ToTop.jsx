import React, { useEffect, useState } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function ToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShow(currentScrollPos > 50);
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
      className={`bg-slate-800 h-10 font-body w-10 md:h-12 md:w-12 rounded-full right-14 bottom-24 md:bottom-28 md:right-18  flex items-center justify-center fixed hover:cursor-pointer transition-all duration-300 ease-in-out ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleClick}
    >
      <ArrowUpwardOutlinedIcon style={{ color: "white", fontSize: "2.5rem" }} />
    </div>
  );
}

export default ToTop;
