import React from "react";
import { render } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("Component: SearchInput", () => {
  it("accepts a changing value and renders it", () => {
    const { getByLabelText, rerender } = render(
      <SearchInput value={"Foo"} onChange={() => {}} />
    );
    const input = getByLabelText(/search/i);

    expect(input.value).toBe("Foo");

    rerender(<SearchInput value={"Foobar"} onChange={() => {}} />);
    expect(input.value).toBe("Foobar");
  });
});
