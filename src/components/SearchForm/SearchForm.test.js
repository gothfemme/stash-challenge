import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("Component: SearchForm", () => {
  it("renders an input and button, and calls onSubmit prop with argument of the input's value", () => {
    const handleSubmit = jest.fn();

    const { getByRole } = render(<SearchForm onSubmit={handleSubmit} />);

    const input = getByRole("searchbox");
    const button = getByRole("button");

    fireEvent.change(input, { target: { value: "cats" } });

    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledWith("cats");
  });
});
