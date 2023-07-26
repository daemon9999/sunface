import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src="/logo-text.png" className="w-[150px] h-auto" alt="Sunface Logo" />
    </Link>
  );
};

export default Logo;
