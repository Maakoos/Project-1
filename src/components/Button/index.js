import React from "react";
import styled, { css, keyframes } from "styled-components";

const shake = keyframes`
   0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
`;

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

  &:hover {
    animation: ${shake} 0.7s ease-in-out both;
  }

  ${({ light }) =>
    light &&
    css`
      width: 90%;
      background-color: #f2f2f2;
      color: #000;
      transition: all 0.7s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.primaryColor};
        color: #fff;
      }
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
