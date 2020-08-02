import React from "react";
import { render } from "@testing-library/react";
import ImageList from "./ImageList";

const IMAGES_MOCK = [
  {
    id: "123",
  },
  {
    id: "1234",
  },
  {
    id: "12345",
  },
];

jest.mock("./ImageListItem/ImageListItem");

describe("Component: ImageList", () => {
  it("renders a list", () => {
    const { getAllByRole } = render(<ImageList images={IMAGES_MOCK} />);
    const listItems = getAllByRole("listitem");
    expect(listItems).toHaveLength(IMAGES_MOCK.length);
  });
});
