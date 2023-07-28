import React from "react";
import { BsArrowRight } from "react-icons/bs";
import LearnMoreBtn from "src/components/common/LearnMoreBtn";

const Details = () => {
  return (
    <div className="basis-2/5">
      <h5 className="text-4xl font-light">LCOE graph</h5>

      <p className="my-6">
        Bifacial panels generate up to 30% more energy from rear-side gain,
        spreading costs over higher output. This allows bifacial solar to
        achieve substantially lower levelized costs of electricity compared to
        conventional monofacial panels.
      </p>

      <LearnMoreBtn additionalStyle={'hover:bg-brand hover:text-main transition-all duration-300'}/>
    </div>
  );
};

export default Details;
