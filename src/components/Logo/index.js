import React from "react";
import styled from "styled-components";
import logoImg from "img/logo.png";

const LogoWrapper = styled.div`
  width: 214px;
`;

const Logo = () => (
  <LogoWrapper>
    <img src={logoImg} alt="logo" />
  </LogoWrapper>
);

export default Logo;
