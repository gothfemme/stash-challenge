import React from "react";
import { render } from "@testing-library/react";
import { UnconnectedImageListItem } from "./ImageListItem";

const NAME = "placeholder";

const IMAGE_MOCK = {
  id: "123",
  title: NAME,
  images: {
    fixed_height: {
      url: "https://via.placeholder.com/150",
    },
  },
};

const props = {
  image: IMAGE_MOCK,
  favorited: true,
  onAddFavorite: () => {},
  onRemoveFavorite: () => {},
};

const setup = () => {
  return render(<UnconnectedImageListItem {...props} />);
};

describe("Component: ImageListItem", () => {
  it("renders an image", () => {
    const { getByAltText } = setup();
    const image = getByAltText(NAME);
    expect(image).toBeInTheDocument();
  });

  it("shows a star when favorited", () => {
    const { queryByLabelText, rerender } = setup();
    const star = queryByLabelText("favorited");
    expect(star).toBeInTheDocument();
    rerender(<UnconnectedImageListItem {...props} favorited={false} />);
    expect(star).not.toBeInTheDocument();
  });
});
