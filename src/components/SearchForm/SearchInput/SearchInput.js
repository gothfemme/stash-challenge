import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  flex: 1;
  border: 3px solid black;
  border-right: none;
  border-radius: 5px 0 0 5px;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: bold;
`;

const SearchInput = ({ onChange, value }) => {
  return (
    <StyledInput
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Oh weary traveler, what GIFs do you seek"
      aria-label="Search"
    />
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchInput;
