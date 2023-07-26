import classNames from "classnames";
import React from "react";
import mapData from "src/constants/mapData";
const MapData = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h5 className="text-[#FF0005] font-medium">Map Data</h5>
        <p className="text-sm">Per year</p>
      </div>

      <div className="h-px bg-brand bg-opacity-20 flex items-center justify-center w-2/3 mx-auto my-2" />



        <div className="p-2">
            {mapData.map(data => (
                <MapItem key={data.id} data={data}/>
            ))}

        </div>



        
    </div>
  );
};

export default MapData;


const MapItem = ({data}) => {
    const {title, shortTitle, unit, result} = data


    return (
        <div className="flex justify-between items-center border-b border-brand py-2 last-of-type:border-none">

            <p className={classNames('text-sm text-[#364863] w-1/3',{
                '!text-[#FF0000]  font-bold': title === 'Power output'
            })}>{title}</p>

            <p className={classNames('text-sm text-[#364863] w-1/3 text-center',{
                '!text-[#FF0000]  font-bold': shortTitle === 'PVOUT'
            })}>{shortTitle}</p>


            <div className="flex items-center gap-x-2">
                <p className="text-[#364863] font-bold text-sm">{result}</p>
                <span className="text-xs text-[#939DAC]">{unit}</span>
            </div>
            
        </div>
    )
}