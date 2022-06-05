import { searchMovies } from "./searchMovies";

const successResponse = {
  results: [
    {
      id: 1234,
      poster_path: "some-path",
      title: "some-title",
      overview: "some-description",
    },
  ],
};
const errorResponse = { results: [] };

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(successResponse),
  })
);

const warnMock = jest.fn();
global.console.warn = warnMock;

describe("searchMovies", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("returns the requested data when the request is successful", async () => {
    const response = await searchMovies("some-title");
    expect(response).toEqual(successResponse);
  });

  it("returns default data when the request is NOT successful", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    const response = await searchMovies("some-title");
    expect(response).toEqual(errorResponse);
    expect(warnMock).toHaveBeenCalledWith("Error: API is down");
  });
});
