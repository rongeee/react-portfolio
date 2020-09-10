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
      <WorkLink>V See my work below. V</WorkLink>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 0.5fr 1fr;
  justify-items: center;

  /* justify-content: center;
  align-items: center;
  flex-direction: column; */
  margin: 0 auto;
`;

const NameContainer = styled.div`
  grid-row: 2;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.toggleBorder};
  justify-content: center;
  padding: 2em;
  p {
    align-self: flex-start;
    margin: 0;
  }
  span {
    font-size: 2rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  grid-row: 3;
  justify-self: center;
  align-self: center;
  justify-content: center;
  font-size: 4rem;

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

const WorkLink = styled.p`
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;
