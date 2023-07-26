import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
const HelpNotification = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="absolute bottom-10 right-10 flex items-center  gap-x-3">
      {/* MESSAGE */}
      {show && (
        <div className="bg-main px-3 py-2 rounded-[4px] relative ">
          <button
            type="button"
            onClick={() => setShow(false)}
            className="absolute bg-[#687882] text-main border border-main rounded-full -top-2 -left-2 w-6 h-6 flex items-center justify-center"
          >
            <IoMdClose size={15} />
          </button>
          <p className="text-brand ">Hey there 👋 How can we help?</p>
        </div>
      )}

      <div 
        onClick={() => {
            !show ? setShow(true) : ''
        }}
        className="bg-main rounded-[5px] relative p-1 cursor-pointer">
        <span className="absolute flex items-center justify-center text-sm bg-[#D0241B] rounded-full text-main -top-2 -right-2 h-5 w-5">
          1
        </span>

        <img src="/logo.png" alt="Sunface Logo" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default HelpNotification;
