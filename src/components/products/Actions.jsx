import React from "react";
import Button from "../common/Button";
import LearnMoreBtn from "../common/LearnMoreBtn";

const Actions = ({title}) => {
  return (
    <div className="flex flex-col items-center gap-x-4 gap-y-3 sm:flex-row">
      <Button additionalStyle="bg-main text-brand hover:bg-brand hover:text-main transition-all w-full sm:w-auto duration-300 sm:h-auto h-10">
        Read More
      </Button>
      <LearnMoreBtn
      element="a"
        href={`/${title}`}
        additionalStyle={
          "hover:bg-main hover:text-brand px-5 transition-all duration-300 w-full sm:w-auto justify-between sm:h-auto h-10"
        }
      >
        Try
      </LearnMoreBtn>
    </div>
  );
};

export default Actions;
