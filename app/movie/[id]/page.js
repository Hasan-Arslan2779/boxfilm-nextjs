import React from "react";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";
import ErrorPage from "./error";
import { getMovies } from "@/services/movie";

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovies(params.id);

  return (
    <div>
      {movieDetail ? <MovieContainer movi={movieDetail} /> : notFound()}
    </div>
  );
}

export default MoviePage;
