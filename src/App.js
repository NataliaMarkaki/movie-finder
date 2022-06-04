import { useEffect, useState } from 'react';

import { searchMovies } from './services/searchMovies';

import SearchBar from './components/SearchBar/SearchBar';
import { Header } from './App.styles';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await searchMovies('harry');
      setMovies(result);
    }
   
    fetchData();
  }, []);

  console.log(movies)

  return <>
    <Header>
      <SearchBar />
    </Header>
  </>
};

export default App;
