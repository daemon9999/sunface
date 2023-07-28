import React from "react";
import Button from "src/components/common/Button";
import LearnMoreBtn from "src/components/common/LearnMoreBtn";
import Actions from "src/components/products/Actions";

const Product = ({ product }) => {
  const { title, priorities, imgPath, id } = product;
  const beforeObj =
    "before:absolute before:bg-black before:inset-0 before:w-full before:h-full before:bg-opacity-40   before:z-[-1] z-[-2] relative";
  return (
    <section
      id={title.toLowerCase()}
      className={` h-auto w-full  bg-cover bg-no-repeat md:h-[700px] ${
        title === "Forecast" ? beforeObj : ""
      } ${id === 1 ? 'bg-optimization' : 'bg-forecast'}`}
    >
      <div className="container w-[90%] md:w-4/5 mx-auto flex items-center justify-center text-main h-full py-4 z-[99999]">
        <div className=" p-10 ">
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light ">{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10 md:gap-20">
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
      <span className="rounded-full bg-brand border-main w-12 h-12 flex items-center justify-center ">
        {icon}
      </span>
      <h5 className="text-xl sm:text-2xl md:text-3xl font-light">{title}</h5>
      <p className=" text-xs sm:text-sm md:text-base font-medium">{description}</p>
    </div>
  );
};
