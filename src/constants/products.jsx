
import { AiOutlineStock } from "react-icons/ai";
import { GiGroundSprout, GiSolarPower} from "react-icons/gi";
const products = [
    {
        id: 1,
        title: "Optimization",
        imgPath: "/assets/optimization.png",
        priorities: [
            {
                id: 1,
                icon: <AiOutlineStock size={20} />,
                title: "Location",
                description: `Engage homeowners with a personalized, AI-generated 3D solar estimate: An innovativeexperience that builds your brand credibility and
                    makes you stand out.  Up to 4x higher`,
            },
            {
                id: 2,
                icon: <GiGroundSprout size={20} />,
                title: "Plant",
                description: `Capture critical qualification data upfront so you
                    can focus and act quickly on high-quality leads
                    only.`,
            },
            {
                id: 3,
                icon: <GiSolarPower size={20} />,
                title: "Solar Panel",
                description: `Streamline qualification and lead routing, reduce
                    the cost of nurturing low-quality leads, and
                    empower homeowners to self-qualify.`,
            },
        ],
    },
    {
        id: 2,
        title: "Forecast",
        imgPath: "/assets/forecast-2.png",
        priorities: [
            {
                id: 1,
                icon: <AiOutlineStock size={20} />,
                title: "Up to 4x Higher production",
                description: `Engage homeowners with a personalized, AI-
          generated 3D solar estimate: An innovative
          experience that builds your brand credibility and
          makes you stand out.  Up to 4x higher`,
            },
            {
                id: 2,
                icon: <GiGroundSprout size={20} />,
                title: "Higher irrigation system",
                description: `Capture critical qualification data upfront so you
          can focus and act quickly on high-quality leads
          only.`,
            },
            {
                id: 3,
                icon: <GiSolarPower size={20} />,
                title: "Easy to access power",
                description: `Streamline qualification and lead routing, reduce
          the cost of nurturing low-quality leads, and
          empower homeowners to self-qualify.`,
            },
        ],
    },
];

export default products