import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { PortfolioContext } from "../contexts/PortfolioContext";
import Switch from "react-switch";
import { IoMdMoon, IoIosSunny } from "react-icons/io";

const ThemeSwitcher = () => {
  const setTheme = useContext(PortfolioContext).setDTheme;
  const currTheme = useContext(PortfolioContext).dTheme;
  const themeColors = useContext(ThemeContext);
  console.log(themeColors);

  return (
    <Root>
      <Switch
        checked={currTheme ? true : false}
        className="test"
        offColor={themeColors.text}
        onColor={themeColors.text}
        onHandleColor={themeColors.body}
        offHandleColor={themeColors.body}
        height={20}
        width={60}
        checkedIcon={
          <IoIosSunny
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              marginLeft: -20,
            }}
            color={themeColors.text}
            className="white"
          />
        }
        uncheckedIcon={
          <IoMdMoon
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              height: "100%",
              fontSize: 30,
              right: -27,
            }}
            color={themeColors.text}
            className="dark"
          />
        }
        onChange={() => {
          setTheme((prevState) => !prevState);
        }}
      />
    </Root>
  );
};

export default ThemeSwitcher;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 200px;
    width: 200px;
    padding: 30px;
  }
`;
