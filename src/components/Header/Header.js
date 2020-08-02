import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import routes from "../../constants/routes";

const StyledH1 = styled.h1`
  text-align: center;
  margin: 2rem 0 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
  -webkit-text-stroke: 2px black;
  color: magenta;
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
    5px 5px black;
`;

const StyledNavList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  margin: 1rem 0;
`;

const StyledNavListItem = styled.li`
  list-style: none;
  &:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  font-weight: bold;
  padding-bottom: 0rem;
  text-decoration: none;
  &.active {
    text-decoration: underline wavy black;
  }
`;

const Header = () => {
  return (
    <header>
      <StyledH1>Giphynator</StyledH1>
      <nav>
        <StyledNavList>
          <StyledNavListItem>
            <StyledNavLink to={routes.HOME} exact activeClassName="active">
              home
            </StyledNavLink>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavLink to={routes.FAVORITES} activeClassName="active">
              faves
            </StyledNavLink>
          </StyledNavListItem>
        </StyledNavList>
      </nav>
    </header>
  );
};

export default Header;
