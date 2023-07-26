import React from "react";
import Button from "src/components/common/Button";
import LearnMoreBtn from "src/components/common/LearnMoreBtn";
import Actions from "src/components/products/Actions";

const Product = ({ product }) => {
  const { title, priorities, imgPath } = product;
  const beforeObj =
    "before:absolute before:bg-black before:inset-0 before:w-full before:h-full before:bg-opacity-40   before:z-[-1] z-[-2] relative";
  return (
    <section
      id={title.toLowerCase()}
      className={`bg-[url('${imgPath}')] h-[800px] w-full  bg-cover bg-no-repeat ${
        title === "Forecast" ? beforeObj : ""
      }`}
    >
      <div className="container w-5/6 mx-auto flex items-end justify-end  text-main h-full py-16 z-[99999]">
        <div className=" p-10 w-3/4">
          <h3 className="text-7xl font-light pb-14">{title}</h3>
          <div className="grid grid-cols-3 my-20 gap-10">
            {priorities.map((priority) => (
              <Priority key={priority.id} priority={priority} />
            ))}
          </div>
          <Actions title={title.toLowerCase()} />
        </div>
      </div>
    </section>
  );
};

export default Product;

const Priority = ({ priority }) => {
  const { title, icon, description } = priority;
  return (
    <div className="flex flex-col gap-y-4">
      <span className="rounded-full bg-brand border-main w-16 h-16 flex items-center justify-center ">
        {icon}
      </span>
      <h5 className="text-3xl font-light">{title}</h5>
      <p className=" text-sm font-medium">{description}</p>
    </div>
  );
};
