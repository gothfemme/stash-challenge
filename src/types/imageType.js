import PropTypes from "prop-types";

export const imageType = PropTypes.shape({
  title: PropTypes.string,
  images: PropTypes.shape({
    fixed_height: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
});
