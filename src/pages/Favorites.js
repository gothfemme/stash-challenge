import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageList from "../components/ImageList/ImageList";
import { imageType } from "../types/imageType";

const UnconnectedFavorites = ({ favorites }) => {
  return <ImageList images={favorites} />;
};

UnconnectedFavorites.propTypes = {
  favorites: PropTypes.arrayOf(imageType),
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

const Favorites = connect(mapStateToProps)(UnconnectedFavorites);

export default Favorites;
