import { FeaturedMovie } from "@/components/featured-movie";
import React from "react";

const MovieContainer = ({ movi }) => {
  return <FeaturedMovie isCompact={false} movie={movi} />;
};

export default MovieContainer;
