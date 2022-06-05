import { useState } from "react";

import { Form, Label, Input, Button } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchQuery);
  };

  const onInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Form onSubmit={onFormSubmit} role="search" data-testid="search-bar-form">
      <Label htmlFor="search">Search for a movie</Label>
      <Input
        id="search"
        type="search"
        placeholder="Type something..."
        value={searchQuery}
        onChange={onInputChange}
        data-testid="search-bar-input"
      />
      <Button type="submit" data-testid="search-bar-submit-button">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
