import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  isImageFavorited,
  addFavorite,
  removeFavorite,
} from "../../../redux/modules/favorites";
import { imageType } from "../../../types/imageType";

const StyledLi = styled.li`
  position: relative;
  margin-bottom: 1rem;
  height: 200px;
  border: 3px solid black;
  box-shadow: 3px 3px black;
  transform: translate(0px, 0px);
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 6px 6px black;
  }
`;

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
`;

const StyledFavIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 2rem;
`;

export const UnconnectedImageListItem = ({
  image,
  favorited,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  const { title } = image;
  const imageUrl = image.images.fixed_height.url;

  const handleClick = () => {
    if (favorited) {
      onRemoveFavorite(image);
    } else {
      onAddFavorite(image);
    }
  };

  return (
    <StyledLi>
      <StyledButton title={title} onClick={handleClick}>
        <img src={imageUrl} alt={title} height="200" />
        {favorited && (
          <StyledFavIcon>
            <span role="img" aria-label="favorited">
              ⭐️
            </span>
          </StyledFavIcon>
        )}
      </StyledButton>
    </StyledLi>
  );
};

UnconnectedImageListItem.propTypes = {
  image: imageType.isRequired,
  favorited: PropTypes.bool.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { image }) => ({
  favorited: isImageFavorited(state, image),
});

const mapDispatchToProps = {
  onAddFavorite: addFavorite,
  onRemoveFavorite: removeFavorite,
};

const ImageListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedImageListItem);

export default ImageListItem;
