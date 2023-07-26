import React from "react";
import {FaLocationDot} from 'react-icons/fa6'
const LocationDetail = () => {
  return (
    <div className="flex items-center my-10 gap-x-14">
      <div className="flex flex-col items-center gap-y-1 ">
        <FaLocationDot size={50} className="text-[#FF0000]"/>
        <p className="text-xs">ImLocation</p>
      </div>


      <div className="flex flex-col">
        <h5 className="text-[#364863] text-xl font-bold">Qoşabulaq</h5>
        <p>39.304676°, 046.904755°</p>
        <p className="text-[#4B5B75] text-sm">Qoşabulaq, East Zangezur, Azerbaijan</p>
        <p className="text-[#4B5B75] text-sm">Time zone: UTC+04, Asia/Baku [AZT]</p>
      </div>
    </div>
  );
};

export default LocationDetail;
