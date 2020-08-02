import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SearchInput from "./SearchInput/SearchInput";
import SearchButton from "./SearchButton/SearchButton";

const StyledForm = styled.form`
  display: flex;
  max-width: 32rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => setValue(e.target.value);

  // button will just auto submit since it's type="submit"
  const handleSubmit = (e) => {
    // prevent reload on form submission
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SearchInput value={value} onChange={handleInputChange} />
      <SearchButton />
    </StyledForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
