import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import links from "src/constants/links";

const HamburgerButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };
  const location = useLocation();

  return (
    <>
      <button
        id="hamburger"
        className={`w-8 h-8 flex flex-col justify-between items-center p-1 ${
          isActive ? "active" : ""
        }`}
        onClick={toggleHamburger}
      >
        <div className="h-1 w-full bg-brand"></div>
        <div className="h-1 w-2/3 bg-brand"></div>
        <div className="h-1 w-1/2 bg-brand"></div>
      </button>

      {isActive && (
        <div
          className="w-1/4 fixed top-0 left-0 z-50 h-full"
          onClick={() => setIsActive(false)}
        />
      )}
      <section
        className={classNames(
          "fixed bg-main z-50 right-0 top-0  h-full transition-all duration-300",
          {
            "w-4/5 visible": isActive,
            "w-0 invisible": !isActive,
          }
        )}
      >
        <span
          onClick={() => setIsActive(false)}
          className={classNames(
            "absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-brand text-main rounded-full",
            {
              hidden: !isActive,
            }
          )}
        >
          <IoClose size={24} />
        </span>

        <nav className="flex  flex-col justify-center h-full text-center gap-y-4">
          {links.map((link, key) => (
            <NavLink
              onClick={() => {
                "/" + link !== location.pathname && setIsActive(false);
              }}
              to={`${
                link === "Home"
                  ? "/"
                  : link === "Contact us"
                  ? "https://wa.me/+994705051777"
                  : "/" + link.toLowerCase()
              }`}
              key={key}
              className={({ isActive }) =>
                `text-lg font-semibold ${isActive && "text-red-500"}`
              }
            >
              {link}
            </NavLink>
          ))}
        </nav>
      </section>

      <style jsx>{`
        ${isActive && "body{overflow: hidden; }"}
      `}</style>
    </>
  );
};

export default HamburgerButton;
