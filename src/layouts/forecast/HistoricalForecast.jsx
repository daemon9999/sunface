import React from "react";

const HistoricalForecast = () => {
  return (
    <div className="flex-auto ">
      <div className="w-5/6 mx-auto container p-10 overflow-hidden ">
        <img
          src="/assets/solar-power-forecast.png"
          alt="Solar Power Forecast Diagram"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HistoricalForecast;
