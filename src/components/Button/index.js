import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  ${({ light }) =>
    light &&
    css`
      width: 90%;
      background-color: #f2f2f2;
      color: #000;
    `}

  ${({ signUp }) =>
    signUp &&
    css`
      margin-left: 10px;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.primaryColor};
    `}
`;

const Button = ({ children, light, signUp }) => (
  <Btn light={light} signUp={signUp}>
    {children}
  </Btn>
);

export default Button;
