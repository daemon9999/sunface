import React from "react";
import Button from "src/components/common/Button";
import { BsArrowRight } from "react-icons/bs";
import LearnMoreBtn from "src/components/common/LearnMoreBtn";
const Content = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-y-2">
      <h2 className="text-main text-heading font-light">
        Double your yield <br />
        Double your power
      </h2>

      <p className="font-light text-main">
        The Future of Farming Agrivoltaics represents an innovative synergy
        between agriculture and renewable solar energy.
        <br />
        Discover the future of sustainable farming.
      </p>

      <div className="flex items-center gap-x-4 mt-6">
        <Button additionalStyle="bg-main text-sm font-medium hover:bg-brand hover:text-main transition-all duration-300">Schedule Meeting</Button>

        <LearnMoreBtn additionalStyle={'text-main hover:bg-brand transition-all duration-300'}/>
      </div>
    </div>
  );
};

export default Content;
