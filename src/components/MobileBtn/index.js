// import React from "react";
import styled, { css } from "styled-components";

const MobileBtn = styled.button`
  padding: 5px;
  background: transparent;
  font-size: 20px;
  color: #fff;
  border: 1px solid #fff;

  @media (min-width: 768px) {
    display: none;
  }

  ${({ closeBtn }) =>
    closeBtn &&
    css`
      display: block;
      margin-left: auto;
      font-size: 30px;
      border: none;
    `}
`;

export default MobileBtn;
