const fetchMovieApi = async (pathName, query = "") => {
  try {
    const data = await fetch(
      `${API_URL}${pathName}?api_key=${key}&${query} `
    ).then((response) => response.json());
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

/// Key
const key = process.env.API_KEY;
const API_URL = "https://api.themoviedb.org/3";

// Single Category
export const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

// Top rated movie
export const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", `&page=1`);
};

// Popular Movie
export const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", `&page=1`);
};

// Get categories
export const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", `&page=1`);
};

// Movie
export const getMovies = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};
