import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  border: none;
  border-radius: 0 5px 5px 0;
  background: black;
  color: white;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-weight: bold;
`;

const SearchButton = () => {
  return <StyledButton type="submit">Search</StyledButton>;
};

export default SearchButton;
