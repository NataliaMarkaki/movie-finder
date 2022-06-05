import { cleanup, render } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  afterEach(cleanup);

  it("renders a card component with all data shown correctly", () => {
    const { getByTestId } = render(
      <Card
        imageURL="some-url"
        title="some title"
        overview="some overview"
        id={123}
      />
    );

    expect(getByTestId("card-wrapper-123")).toBeTruthy();
    expect(getByTestId("card-image-wrapper-123")).toBeTruthy();
    expect(getByTestId("card-description-123")).toBeTruthy();
    expect(getByTestId("card-title-123")).toBeTruthy();
    expect(getByTestId("card-overview-123")).toBeTruthy();
  });
});
