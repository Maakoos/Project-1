import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import line from "img/line.png";

const anim = keyframes`
0% {
    transform: translateX(-600px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(-68px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
`;

const HeadingTxt = styled.h2`
  text-align: center;
  margin-bottom: 70px;
  position: relative;
  font-size: ${({ size }) => size || "30px"};
  text-transform: uppercase;
  opacity: 0;

  &.anim {
    animation: ${anim} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    opacity: 1;
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
        opacity: 1;

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
  const headingRef = useRef(null);

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
