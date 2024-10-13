import { FeaturedMovie } from "@/components/featured-movie";
import React from "react";

import Categories from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";
const HomeContainer = ({
  topRatedMovies = [],
  topPopularMovies = [],
  selectedCategory,
  categories = [],
}) => {
  return (
    <div>
      <FeaturedMovie
        movie={
          topPopularMovies[Math.floor(Math.random() * topPopularMovies.length)]
        }
      />
      <Categories categories={categories.slice(1, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection
        title="Popular Films"
        movies={topPopularMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      />
    </div>
  );
};

export default HomeContainer;
