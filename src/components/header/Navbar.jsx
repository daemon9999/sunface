import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    "Home",
    "Optimization",
    "Our Impact",
    "Products",
    "Pricing",
    "Contact us",
  ];

  return (
    <nav className="flex items-center gap-x-10 ">
      {links.map((link, index) => (
        <NavLink
          to={
            link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`
          }
          
          key={index}
        >
          {({isActive}) => (
            <div className="group flex flex-col gap-y-1">
                <p className="text-sm font-medium">{link}</p>
                {isActive && <span className="flex w-full h-px bg-brand"/>}
                {!isActive && <span className="flex invisible group-hover:visible w-full h-px  bg-brand scale-0 group-hover:scale-100 transition-all duration-500"/>}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
