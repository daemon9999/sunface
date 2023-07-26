import React from "react";
import Button from "../common/Button";
import LearnMoreBtn from "../common/LearnMoreBtn";

const Actions = ({title}) => {
  return (
    <div className="flex items-center gap-x-4">
      <Button additionalStyle="bg-main text-brand hover:bg-brand hover:text-main transition-all duration-300 ">
        Read More
      </Button>
      <LearnMoreBtn
      element="a"
        href={`/${title}`}
        additionalStyle={
          "hover:bg-main hover:text-brand px-5 transition-all duration-300"
        }
      >
        Try
      </LearnMoreBtn>
    </div>
  );
};

export default Actions;
