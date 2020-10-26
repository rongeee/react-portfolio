import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { PortfolioContext } from "../contexts/PortfolioContext";
import ThemeSwitcher from "./ThemeSwitcher";
export const Header = () => {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [activePage, setActivePage] = useState(null);
  const [animClass, setAnimClass] = useState("");

  const pathArray = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Say Hi!" },
  ];

  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        setActivePage(0);
        break;
      case "/projects":
        setActivePage(1);
        break;
      case "/contact":
        setActivePage(2);
    }
  }, []);

  const handleClick = (i) => {
    setActivePage((prevState) => {
      if (prevState === 1 && i === 2) {
        setAnimClass("forward after");
      } else if (prevState === 2 && i === 1) {
        setAnimClass("back after");
      } else if (prevState === 1 && i === 0) {
        setAnimClass("back before");
      } else if (prevState === 0 && i === 1) {
        setAnimClass("forward before");
      } else if (prevState === 2 && i === 0) {
        setAnimClass("back two");
      } else if (prevState === 0 && i === 2) {
        setAnimClass("forward two");
      }
      return i;
    });
  };

  return (
    <Container>
      <StyledNav>
        {pathArray.map((item, index) => {
          return (
            <StyledNavLink
              exact
              to={item.path}
              onClick={() => handleClick(index)}
              key={index}
              activeClassName="active"
              className={index === 1 ? animClass + " projs" : ""}
            >
              {item.name}
            </StyledNavLink>
          );
        })}
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
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #afafaf;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.5 linear;

  &.active {
    color: ${(props) => props.theme.text};
  }

  &.projs {
    &::before,
    &::after {
      content: "";
      height: 1px;
      width: 70px;
      border-radius: 1px;
      margin: 0 1em;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.textInactive} 30%,
        ${(props) => props.theme.text},
        ${(props) => props.theme.textInactive} 70%
      );
      background-size: 350% 100%;
    }
  }

  &.forward.after {
    &::after {
      animation: ScrollForward 0.5s linear;
    }
  }

  &.back.after {
    &::after {
      animation: ScrollBack 0.5s linear;
    }
  }
  &.back.before {
    &::before {
      animation: ScrollBack 0.5s linear;
    }
  }
  &.forward.before {
    &::before {
      animation: ScrollForward 0.5s linear;
    }
  }
  &.forward.two {
    &::after {
      animation: ScrollForward 0.5s linear 0.3s;
    }
    &::before {
      animation: ScrollForward 0.5s linear;
    }
  }
  &.back.two {
    &::after {
      animation: ScrollBack 0.5s linear;
    }
    &::before {
      animation: ScrollBack 0.5s linear 0.3s;
    }
  }
  @keyframes ScrollForward {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes ScrollBack {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

const ToggleThemeBtn = styled.button`
  background: black;
  border: none;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  cursor: pointer;
  position: absolute;
  right: 0;
`;
