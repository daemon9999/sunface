import React from "react";

import LearnMoreBtn from "src/components/common/LearnMoreBtn";

const Posts = () => {
  const postItems = [
    {
      id: 1,
      imgPath: "/assets/optimization.png",
      title: "Optimization",
      description:
        "Our model provide bifacial solar location optimization using factors like terrain, sunlight, and soil to maximize energy potential across your land.",
    },
    {
      id: 2,
      imgPath: "/assets/forecast.png",
      title: "Forecast",
      description:
        "Our proprietary forecasting models leverage your farm's hyper-local weather, solar, and operational data to provide accurate bifacial solar power production projections, optimizing revenue planning and minimizing financial risks.",
    },
  ];
  return (
    <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2  gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10">
      {postItems.map((postItem) => (
        <PostItem key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;

const PostItem = ({ postItem }) => {
  const { imgPath, title, description } = postItem;

  return (
    <div className="flex flex-col ">
      <div className="border-4 rounded-md border-brand  h-auto p-1 xs:p-2 sm:p-3 lg:p-4  inline-flex">
        <div className="group relative inline">
          <img
            src={imgPath}
            alt="title"
            className=" w-full rounded-md group-hover:scale-90 cursor-pointer transition-all duration-300"
          />
          <span className="absolute bottom-5 left-5 bg-main px-2 py-1 rounded font-semibold group-hover:bottom-8 group-hover:left-10 transition-all duration-300">
            {title}
          </span>
        </div>
      </div>

      <p className="my-3 md:my-4 lg:my-5 ">{description}</p>

      <span className="mt-auto ">
        <LearnMoreBtn
          additionalStyle={
            "hover:bg-brand hover:text-main transition-all duration-300 sm:h-auto h-10 "
          }
        />
      </span>
    </div>
  );
};
