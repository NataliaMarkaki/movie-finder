import { MOVIE_DB_API_KEY, MOVIE_DB_URL } from "./constants";

export const searchMovies = async (searchTerm) => {
  try {
    const url = `${MOVIE_DB_URL}?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

    const data = await fetch(url);
    const result = await data.json();
    return result;
  } catch (e) {
    console.warn(`Error: ${e}`);
    return { results: [] };
  }
};
