import React from "react";
import LineGraph from "src/components/forecast/historical/LineGraph";
import { useOptimization } from "src/utils/optimization";

const HistoricalForecast = () => {
  const { forecast } = useOptimization();

  

  const newData = forecast[0]?.map((time, key) => {
    const power = forecast[1][key];
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return { time: `${day}.${month < 10 ? '0' + month : month}.${year}`, power };
  });

  return (
    <div className="flex-auto ">
      <div className="w-5/6 mx-auto container p-10 overflow-hidden ">
        {/* <img
          src="/assets/solar-power-forecast.png"
          alt="Solar Power Forecast Diagram"
          className="w-full h-auto"
        /> */}

        {forecast.length > 0 && <LineGraph data={newData} angle={45}   title={'Historical Forecast'} xAxis={'time'} yAxis={'power'} yValue={'Power'}/>}
      </div>
    </div>
  );
};

export default HistoricalForecast;
