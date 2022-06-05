import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";

import { searchMovies } from "../services/searchMovies";

import App from "./App";

const successResponse = {
  results: [
    {
      id: 1234,
      poster_path: "some-path",
      title: "hello",
      overview: "some-description",
    },
  ],
};

jest.mock("../services/searchMovies");

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(cleanup);

  it("renders the app component correctly", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("app-header")).toBeTruthy();
    expect(getByTestId("app-body")).toBeTruthy();
    expect(getByTestId("app-body-text-search-prompt")).toBeTruthy();
  });

  it("fetches data when setSearchTerm is invoked with a non empty string and renders results", async () => {
    searchMovies.mockImplementationOnce(() => Promise.resolve(successResponse));

    const { getByTestId } = render(<App />);

    const input = getByTestId("search-bar-input");
    const submitButton = getByTestId("search-bar-submit-button");
    await act(async () => {
      fireEvent.change(input, { target: { value: "hello" } });
      fireEvent.click(submitButton);
    });

    expect(searchMovies).toHaveBeenCalledWith("hello");

    await waitFor(() => {
      expect(getByTestId("card-wrapper-1234")).toBeTruthy();
    });
  });

  it("shows a messages if no results were found after fetch", async () => {
    searchMovies.mockImplementationOnce(() => Promise.resolve({ results: [] }));

    const { getByTestId } = render(<App />);

    const input = getByTestId("search-bar-input");
    const submitButton = getByTestId("search-bar-submit-button");
    await act(async () => {
      fireEvent.change(input, { target: { value: "helxo" } });
      fireEvent.click(submitButton);
    });

    expect(searchMovies).toHaveBeenCalledWith("helxo");

    await waitFor(() => {
      expect(getByTestId("app-body-text-noResults")).toBeTruthy();
    });
  });

  it("does NOT fetch data when setSearchTerm is invoked with an empty string and clears the results", async () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId("search-bar-input");
    const submitButton = getByTestId("search-bar-submit-button");
    await act(async () => {
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.click(submitButton);
    });

    expect(searchMovies).not.toHaveBeenCalled();

    await waitFor(() => {
      expect(getByTestId("app-body-text-search-prompt")).toBeTruthy();
    });
  });
});
