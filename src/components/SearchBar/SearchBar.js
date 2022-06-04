import { Form, Label, Input, Button } from './SearchBar.styles';

const SearchBar = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  return <Form onSubmit={onFormSubmit} role="search" className="form">
    <Label htmlFor="search">Search for a movie</Label>
    <Input id="search" type="search" placeholder="Type something..." required />
    <Button type="submit">Search</Button>
  </Form>
};

export default SearchBar;