import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageListItem from "./ImageListItem/ImageListItem";
import { imageType } from "../../types/imageType";

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 1.5rem;
`;

const ImageList = ({ images }) => {
  return (
    <StyledUl>
      {images.map((image) => {
        return <ImageListItem key={image.id} image={image} />;
      })}
    </StyledUl>
  );
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(imageType),
};

export default ImageList;
