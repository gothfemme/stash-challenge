import React from "react";
import { render } from "@testing-library/react";
import SearchButton from "./SearchButton";

describe("Component: SearchButton", () => {
  it("renders a button", () => {
    const { getByRole } = render(<SearchButton />);

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
