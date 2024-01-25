import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h2>Let's find your MENTOR !</h2>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #2d3436;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
`;
