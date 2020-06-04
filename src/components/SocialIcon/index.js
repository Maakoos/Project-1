import React from "react";
import styled from "styled-components";

const Icon = styled.a`
  color: ${({ color }) => color || "#c4c4c4"};
  font-size: ${({ size }) => `${size}px` || "16px"};
  cursor: pointer;
`;

const SocialIcon = ({ iconName, color, size }) => (
  <Icon href="#" color={color} size={size}>
    <span className={iconName}></span>
  </Icon>
);

export default SocialIcon;
