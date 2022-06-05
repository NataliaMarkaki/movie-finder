import { useEffect, useState, useCallback } from "react";

import { searchMovies } from "./services/searchMovies";

import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import { Header, Section } from "./App.styles";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchMovieData = useCallback(async () => {
    const response = await searchMovies(searchTerm);
    setMovies(response.results);
  }, [searchTerm]);

  useEffect(() => {
    async function fetchData() {
      if (Boolean(searchTerm)) {
        await fetchMovieData();
      } else {
        setMovies([]);
      }
    }

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <Header>
        <SearchBar setSearchTerm={setSearchTerm} />
        <Section>
          {movies.map(({ id, poster_path, title, overview }) => (
            <Card
              key={id}
              imageURL={poster_path}
              title={title}
              overview={overview}
            />
          ))}
        </Section>
      </Header>
    </>
  );
};

export default App;
