import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-y-10  items-center justify-center">
      <h4 className="text-4xl text-center font-light tracking-wider">Explore SUNFACE</h4>
      <p className="w-[90%] lg:w-3/4 text-sm xs:text-base">
        Welcome to SUNFACE, your all-in-one platform for maximizing solar and
        agricultural production on farmlands. Our optimization tools provide
        customized recommendations to implement bifacial solar systems tailored
        to your specific terrain, climate, and operations.
      </p>
    </div>
  );
};

export default Welcome;
