import { useState } from 'react';

import { Form, Label, Input, Button } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (Boolean(searchQuery)) {
      setSearchTerm(searchQuery);
    }
  }

  const onInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return <Form onSubmit={onFormSubmit} role="search">
    <Label htmlFor="search">Search for a movie</Label>
    <Input id="search" type="search" placeholder="Type something..." required value={searchQuery} onChange={onInputChange} />
    <Button type="submit">Search</Button>
  </Form>
};

export default SearchBar;