import React from "react";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import links from "src/constants/links";

const Footer = () => {
  return (
    <footer className="bg-main-2 ">
      <div className="container w-5/6 mx-auto flex sm:flex-row flex-col p-5 justify-center text-xs font-medium text-brand gap-x-20">
        <div className="flex flex-col gap-y-4">
          {links.map((link, key) => (
            <Link
              to={"/" + link === "Home" ? "" : link.toLowerCase()}
              key={key}
            >
              {link}
            </Link>
          ))}
          <p>Contact us</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p>BlogFarm</p>
          <p>NewsFarm</p>
        </div>
      </div>
      <div className="container mx-auto w-5/6 flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between sm:items-center p-5 border-t border-brand">
        <div className="flex sm:items-center gap-6 text-brand text-xs font-medium sm:flex-row flex-col mb-2 sm:mb-0 ">
          <p className="cursor-pointer">Copyright © SUNFACE 2023</p>
          <p className="cursor-pointer">Terms of Use</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Cookie Notice</p>
        </div>

        <div className="flex items-center gap-x-4 ">
          <AiOutlineInstagram className="cursor-pointer" size={18} />
          <FaFacebookF className="cursor-pointer" size={18} />
          <AiFillYoutube className="cursor-pointer" size={18} />
          <AiOutlineTwitter className="cursor-pointer" size={18} />
          <AiFillLinkedin className="cursor-pointer" size={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
