import React from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  /* ${({ isActive }) =>
    isActive &&
    css`
      color: greenyellow;
    `} */
    padding: 15px 20px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.primaryColor : "transparent"};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
`;

const Input = styled.input`
  visibility: hidden;
`;

const RadioInput = () => (
  <>
    <Label htmlFor="labelForInput" isActive={true}>
      Month
    </Label>
    <Input type="radio" id="labelForInput" />
    <Label htmlFor="labelForInput" isActive={true}>
      Week
    </Label>
    <Input type="radio" id="labelForInput" />
  </>
);

export default RadioInput;
