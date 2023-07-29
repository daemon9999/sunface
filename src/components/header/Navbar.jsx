import classNames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import links from "src/constants/links";

const Navbar = () => {
  return (
    <nav className="flex items-center xl:gap-x-10 lg:gap-x-4 gap-x-2 ">
      {links.map((link, index) => (
        <>
          {link === "Contact us" ? (
            <Link
            className="text-sm font-medium text-brand mb-1"
              to={
                  "https://wa.me/+994705051777"
              }
              key={index}
            >
              {link}
            </Link>
          ) : (
            <NavLink
              to={
                link === "Home"
                  ? "/"
                  : `/${link.toLowerCase().replace(" ", "-")}`
              }
              key={index}
            >
              {({ isActive }) => (
                <div className="group flex flex-col gap-y-1">
                  <p className="text-sm font-medium">{link}</p>
                  {isActive && <span className="flex w-full h-px bg-brand" />}
                  {!isActive && (
                    <span className="flex invisible group-hover:visible w-full h-px  bg-brand scale-0 group-hover:scale-100 transition-all duration-500" />
                  )}
                </div>
              )}
            </NavLink>
          )}
        </>
      ))}
    </nav>
  );
};

export default Navbar;
