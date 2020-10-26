import React from "react";
import styled from "styled-components";
import { RiLinkedinBoxLine, RiGithubFill } from "react-icons/ri";

export const Hero = () => {
  return (
    <Container>
      <NameContainer theme>
        <HeadLine>Patric Ronge</HeadLine>
        <p>Friendly Dev lmao</p>
      </NameContainer>
      <SocialContainer>
        <span>
          <RiGithubFill />
        </span>
        <span>
          <RiLinkedinBoxLine />
        </span>
      </SocialContainer>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 5em 0;
  width: 100%;
  /* justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.toggleBorder};
  justify-content: center;
  padding: 1em;
  margin-top: auto;
  align-self: center;
  max-width: 500px;
  width: 90%;
  text-align: center;

  p {
    margin: 0;
  }
  span {
    font-size: 2rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  justify-content: center;
  font-size: 4rem;
  margin-top: auto;

  span {
    transition: 200ms;
    &:hover {
      color: ${(props) => props.theme.toggleBorder};
    }
  }
`;

const HeadLine = styled.h2`
  font-size: 3rem;
  margin: 0;
`;
