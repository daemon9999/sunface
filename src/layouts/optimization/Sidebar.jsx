import React from "react";
import { Link } from "react-router-dom";
import Input from "src/components/forecast/sidebar/Input";
import LocationDetail from "src/components/forecast/sidebar/LocationDetail";
import MapData from "src/components/forecast/sidebar/MapData";
import PVSystem from "src/components/optimization/sidebar/PVSystem";

const Sidebar = () => {
  return (
    <aside className="w-[500px] min-w-[500px] md:block hidden overflow-auto shrink-0 sidebar-scroll">
      <div className=" w-5/6 container py-2">
        <Input />
        <LocationDetail />
        <MapData />
        <PVSystem/>

        <Link to={'/forecast'} className="bg-brand text-main py-2 px-3 flex items-center justify-center rounded-md mt-10">Learn more about Forecast</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
