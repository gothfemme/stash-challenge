import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getImages, clearImageData } from "../redux/modules/images";

import ImageList from "../components/ImageList/ImageList";
import SearchForm from "../components/SearchForm/SearchForm";
import { imageType } from "../types/imageType";

const UnconnectedHome = ({ images, onGetImages, onClearImageData }) => {
  const onSearchSubmit = (value) => {
    onGetImages(value);
  };

  useEffect(() => {
    // We'll clear the image data in redux when a user changes routes & this component unmounts.
    // This will prevent a mismatch that would occur if a user returned Home from that route
    // between the value displayed in SearchForm (which would be blank)
    // and the displayed images in ImageList (which would be whatever the last search was)
    return () => onClearImageData();
  }, [onClearImageData]);

  return (
    <>
      <SearchForm onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </>
  );
};

UnconnectedHome.propTypes = {
  images: PropTypes.arrayOf(imageType),
  onGetImages: PropTypes.func,
  onClearImageData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  images: state.images.images,
});

const mapDispatchToProps = {
  onGetImages: getImages,
  onClearImageData: clearImageData,
};

const Home = connect(mapStateToProps, mapDispatchToProps)(UnconnectedHome);

export default Home;
