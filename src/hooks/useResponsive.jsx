import React from "react";
import { useMediaQuery } from "react-responsive";

const useResponsive = (media) => {
  let query;
  if (media === "xs") {
    query = "(min-width: 480px)";
  } else if (media === "sm") {
    query = "(min-width: 576px)";
  } else if (media === "md") {
    query = "(min-width: 768px)";
  } else if (media === "lg") {
    query = "(min-width: 1024px)";
  } else if (media === "xl") {
    query = "(min-width: 1200px)";
  }
  const result = useMediaQuery({
    query
  });
  return result;
};

export default useResponsive;
