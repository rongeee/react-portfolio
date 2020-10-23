import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { PortfolioContext } from "../contexts/PortfolioContext";
import ThemeSwitcher from "./ThemeSwitcher";
export const Header = () => {
  const setTheme = useContext(PortfolioContext).setDTheme;

  return (
    <Container>
      <nav><Link to="/">Home</Link> - <Link to="/projects">Projects</Link> - <a href="#">Say Hi!</a></nav>
      <ThemeSwitcher />
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  margin: 0;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  background: ${(props) => props.theme.bodyDarker};
  position: fixed;
  top: 0;
  z-index: 100;

`;

// const HomeLink = styled.h2`
//   cursor: pointer;
// `;

const ToggleThemeBtn = styled.button`
  background: black;
  border: none;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  cursor: pointer;
`;
