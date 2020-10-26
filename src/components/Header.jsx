import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { PortfolioContext } from "../contexts/PortfolioContext";
import ThemeSwitcher from "./ThemeSwitcher";
export const Header = () => {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [activePage, setActivePage] = useState(history.location.pathname);

  useEffect(() => {
    setActivePage(history.location.pathname);
  }, [history.location.pathname])

  return (
    <Container>
      <StyledNav>
        <StyledLink to="/" className={activePage === "/" ? "active" : ""}>Home</StyledLink>
        <StyledLink to="/projects" className={activePage === "/projects" ? "active" : ""}>Projects</StyledLink>
        <StyledLink href="#">Say Hi!</StyledLink>
      </StyledNav>
      <ThemeSwitcher />
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  margin: 0;
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  background: ${(props) => props.theme.bodyDarker};
  position: fixed;
  top: 0;
  z-index: 100;
  position: relative;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.textInactive};
  display: flex;
  flex-direction: row;
  align-items: center;

  &.active {
    color: ${props => props.theme.text};

    &::before {
      background: rgb(2,0,36);
      background: linear-gradient(90deg, transparent 30%, white, transparent 70%); 
      background-size: 350% 100%;
      animation: ScrollGradient 0.5s linear;
      transform-origin: 0 50%;
     
    }

    @keyframes ScrollGradient {
      0%{background-position: 100% 50%}
      100%{background-position:0% 50%}

    }
  }


  &::before {
    content: '';
    height: 1px;
    width: 40px;
    border-radius: 1px;
    background-size: 200% 100%;
    transition:all 1s ease;
    margin: 0 1em;
     background-position: 0% 50%;
}

&:last-child:after {
  display: none;
}




`

const ToggleThemeBtn = styled.button`
  background: black;
  border: none;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  cursor: pointer;
  position: absolute;
  right: 0;
`;
