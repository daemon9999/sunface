import React from "react";
import LeafletMap from "src/layouts/optimization/LeafletMap";
import Sidebar from "src/layouts/optimization/Sidebar";

const Optimization = () => {
  return (
    <div className="flex gap-x-4  h-[88vh]">
      <LeafletMap />
      <Sidebar />
    </div>
  );
};

export default Optimization;
