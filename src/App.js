import { useEffect, useState, useCallback } from 'react';

import { searchMovies } from './services/searchMovies';

import SearchBar from './components/SearchBar/SearchBar';
import { Header } from './App.styles';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const fetchMovieData = useCallback(async () => {
    const result = await searchMovies(searchTerm);
    setMovies(result);
  }, [searchTerm])

  useEffect(() => {
    async function fetchData() {
      if (Boolean(searchTerm)) {
        await fetchMovieData();
      }
    }

    fetchData();
  }, [searchTerm]);

  console.log(movies)

  return <>
    <Header>
      <SearchBar setSearchTerm={setSearchTerm} />
    </Header>
  </>
};

export default App;
