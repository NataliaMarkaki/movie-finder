import { useEffect, useState, useCallback } from "react";

import { searchMovies } from "../services/searchMovies";

import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";
import { Header, Section, Text } from "./App.styles";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchMovieData = useCallback(async () => {
    const response = await searchMovies(searchTerm);
    setMovies(response.results);
  }, [searchTerm]);

  useEffect(() => {
    async function fetchData() {
      // request data only if the query isn't empty
      if (Boolean(searchTerm)) {
        await fetchMovieData();
      } else {
        // empty the list when query is empty
        setMovies([]);
      }
    }

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <Header data-testid="app-header">
        <SearchBar setSearchTerm={setSearchTerm} />
      </Header>
      <Section data-testid="app-body">
        {movies.map(({ id, poster_path, title, overview }) => (
          <Card
            key={id}
            id={id}
            imageURL={poster_path}
            title={title}
            overview={overview}
          />
        ))}
        {movies.length === 0 && searchTerm && (
          <Text data-testid="app-body-text-noResults">
            No results for {searchTerm}...
          </Text>
        )}
        {movies.length === 0 && !searchTerm && (
          <Text data-testid="app-body-text-search-prompt">
            Please, search for a movie...
          </Text>
        )}
      </Section>
    </>
  );
};

export default App;
