import React from 'react'
import styled from 'styled-components';

const Projects = () => {
  return (
    <Container>
      <HeadLine>Projects</HeadLine>
    </Container>
  )
}

export default Projects

const Container = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;

  /* justify-content: center;
  align-items: center;
  flex-direction: column; */
  margin: 0 auto;
`;

const HeadLine = styled.h2`
  font-size: 3rem;
  margin: 0;
`;
