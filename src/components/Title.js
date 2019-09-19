import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  background-color: #bfd3c1;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;

const H1 = styled.h1`
  font-family: "Dancing Script", cursive;
`;

function Title() {
  return (
    <Header>
      <H1>Fleet Footed</H1>
    </Header>
  );
}

export default Title;
