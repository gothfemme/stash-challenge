import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Component: Header", () => {
  it("renders a title and some links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const title = getByText(/Giphynator/i);
    const home = getByText(/home/i);
    const faves = getByText(/faves/i);
    expect(title).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(faves).toBeInTheDocument();
  });
});
