import React from "react";
import styled from "styled-components";
import logoWhite from "../assets/logo.png";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterLink>Instagram</FooterLink>
        <FooterLink>X</FooterLink>
        <FooterLink>LinkedIn</FooterLink>
      </div>
      <FooterLogo src={logoWhite}></FooterLogo>© 2023-{new Date().getFullYear()}{" "}
    </FooterContainer>
  );
}

const FooterLogo = styled.img`
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const FooterLink = styled.a`
  height: 60px;
  margin: 10px;
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: #2d3436;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 10px;
`;
