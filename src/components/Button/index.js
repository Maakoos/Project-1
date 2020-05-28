import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
`;

const Button = ({ children }) => <Btn>{children}</Btn>;

export default Button;
