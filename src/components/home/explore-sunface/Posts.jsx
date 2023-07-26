import React from "react";
import Button from "../../common/Button";
import { BsArrowRight } from "react-icons/bs";
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
    <div className="mt-12 grid grid-cols-2  gap-16">
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
    <div className="flex flex-col w-[525px]">
      <div className="border-4 border-brand rounded-md p-1 inline-flex">
        <div className="border-4 rounded-md border-brand w-[525px] h-auto p-4  inline-flex">
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
      </div>

      <p className="my-5 ">{description}</p>

      <span className="mt-auto ">
        <LearnMoreBtn additionalStyle={'hover:bg-brand hover:text-main transition-all duration-300'}/>
      </span>
    </div>
  );
};
