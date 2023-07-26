import React, { createElement } from "react";
import { BsArrowRight } from "react-icons/bs";

const LearnMoreBtn = ({element='button', additionalStyle,children='Learn More', ...props}) => {
    
  return   createElement(
        element,
        {
          className: `inline-flex transition-all duration-300 items-center py-3  px-2 gap-x-3   text-sm font-medium  ${additionalStyle}`,
          ...props,
        },
        <>
            {children}
            <BsArrowRight/>
        </>
      );
    
  
};

export default LearnMoreBtn;

