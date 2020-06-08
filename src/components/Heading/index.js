import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import line from "img/line.png";

const anim = keyframes`
0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`;

const HeadingTxt = styled.h2`
  text-align: center;
  margin-bottom: 70px;
  position: relative;
  font-size: ${({ size }) => size || "30px"};
  text-transform: uppercase;

  &.anim {
    animation: ${anim} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

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

const Heading = ({ children, small, white, size, noLine, contact }) => {
  const headingRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== "noLine") {
          entry.target.classList.add("anim");
        }
      });
    }, options);

    observer.observe(headingRef.current);
  });
  return (
    <HeadingTxt
      small={small}
      white={white}
      size={size}
      noLine={noLine}
      contact={contact}
      ref={headingRef}
      id={noLine ? "noLine" : null}
    >
      {children}
    </HeadingTxt>
  );
};

export default Heading;
