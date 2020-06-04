import React from "react";
import styled, { css } from "styled-components";
import line from "img/line.png";

const HeadingTxt = styled.h2`
  text-align: center;
  margin-bottom: 70px;
  position: relative;
  font-size: ${({ size }) => size || "30px"};
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    bottom: -33px;
    left: 50%;
    width: 83px;
    height: 13px;
    background-image: url(${line});
    transform: translateX(-50%);
  }

  ${({ small }) =>
    small &&
    css`
      text-align: left;
      text-transform: none;

      &::after {
        display: none;
      }
    `}

  ${({ white }) =>
    white &&
    css`
      color: #fff;
    `}
    
    ${({ noLine }) =>
      noLine &&
      css`
        text-align: left;

        &::after {
          display: none;
        }
        }
      `}

      ${({ contact }) =>
        contact &&
        css`
          grid-area: heading;
          text-align: left;
          margin-bottom: 0px;

          &::after {
            display: none;
          }
        `}
`;

const Heading = ({ children, small, white, size, noLine, contact }) => (
  <>
    <HeadingTxt
      small={small}
      white={white}
      size={size}
      noLine={noLine}
      contact={contact}
    >
      {children}
    </HeadingTxt>
  </>
);

export default Heading;
