import { Menu } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import Button from "src/components/common/Button";
import useResponsive from "src/hooks/useResponsive";

const Actions = () => {
  const isLaptop = useResponsive("lg");

  if (!isLaptop) {
    return (
      <Menu as={'div'} className={`relative z-50`}>
        <Menu.Button className={`bg-brand text-main outline-none px-3 py-2 rounded flex gap-x-3 items-center text-sm font-medium`}>
        <p>Actions</p>
        <span className="rotate-90 flex">❯</span>
        </Menu.Button>
        <Menu.Items className={`flex flex-col absolute right-0 top-full bg-brand text-main w-[140px] rounded mt-1 overflow-hidden`}>
        
          <Menu.Item>
         
              <Link
                className="text-sm font-medium px-3 py-2"
                to="/login"
              >
                Login
              </Link>
          
          </Menu.Item>
          <Menu.Item>
            <Link to={'/schedule'} className="text-sm font-medium px-3 py-2   " >Schedule Meeting</Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    );
  }

  return (
    <div>
      <Button additionalStyle="hover:bg-brand hover:bg-opacity-90 hover:text-main-2 transition-all duration-300 border-y border-l border-brand">
        Login
      </Button>
      <Button additionalStyle="bg-brand text-main-2 hover:bg-main-2 hover:text-brand transition-all duration-300 border border-brand ">
        Schedule Meeting
      </Button>
    </div>
  );
};

export default Actions;
