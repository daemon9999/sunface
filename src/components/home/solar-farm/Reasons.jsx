import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { GiGroundSprout, GiSolarPower } from "react-icons/gi";

const Reasons = () => {
  const items = [
    {
      id: 1,
      icon: <AiOutlineStock size={20}/>,
      title: "Generate Income",
      description:
        "Solar farms earn revenues from long-term power sales agreements, providing stable returns for 20-30 years.",
    },
    {
        id: 2,
        icon: <GiGroundSprout size={20}/>,
        title: "Maximize Land Use",
        description:
          "Construct solar farms on marginal lands to produce energy while keeping productive land available for agriculture.",
      },
      {
        id: 3,
        icon: <GiSolarPower size={20}/>,
        title: "Maximize Land Use",
        description:
          "Large solar installations feed major clean power into the grid to meet energy demands sustainably.",
      },
      
  ];
  return (
    <div className="grid grid-cols-3 gap-10">
        {items.map(item => (
            <Item key={item.id} item={item}/>
        ))}
    </div>
  );
};

const Item = ({item}) => {
    const {title, icon, description} = item
    return (
        <div className="flex flex-col gap-y-4  justify-center">
            <span className="rounded-full bg-brand border-main w-12 h-12 flex items-center justify-center ">

                {icon}
            </span>
            <h5 className="text-lg font-light">{title}</h5>
            <p className=" text-sm ">{description}</p>

        </div>
    )

};

export default Reasons;
