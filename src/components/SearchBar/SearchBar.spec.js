import { cleanup, fireEvent, render } from "@testing-library/react";

import SearchBar from "./SearchBar";

const mockSetSearchTerm = jest.fn();

describe("SearchBar", () => {
  afterEach(cleanup);

  it("renders a search bar component correctly", () => {
    const { getByTestId } = render(
      <SearchBar setSearchTerm={mockSetSearchTerm} />
    );

    expect(getByTestId("search-bar-form")).toBeTruthy();
    expect(getByTestId("search-bar-input")).toBeTruthy();
    expect(getByTestId("search-bar-submit-button")).toBeTruthy();
  });

  it("invokes setSearchTerm on form submission", () => {
    const { getByTestId } = render(
      <SearchBar setSearchTerm={mockSetSearchTerm} />
    );
    const input = getByTestId("search-bar-input");
    const submitButton = getByTestId("search-bar-submit-button");

    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.click(submitButton);
    expect(mockSetSearchTerm).toHaveBeenCalledWith("hello");
  });
});
