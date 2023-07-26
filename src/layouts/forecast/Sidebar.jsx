import React from "react";
import Input from "src/components/forecast/sidebar/Input";
import LocationDetail from "src/components/forecast/sidebar/LocationDetail";
import MapData from "src/components/forecast/sidebar/MapData";
import PVSystem from "src/components/forecast/sidebar/PVSystem";

const Sidebar = () => {
  
  return (
    <aside className="w-[500px] min-w-[500px]  overflow-auto shrink-0 sidebar-scroll">
      <div className=" w-5/6 container py-2">
        <Input />
        <LocationDetail/>
        <MapData/>
        <PVSystem/>
      </div>
    </aside>
  );
};

export default Sidebar;
