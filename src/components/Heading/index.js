import React from "react";
import styled from "styled-components";
import line from "img/line.png";

const HeadingTxt = styled.h2`
  /* margin-bottom: 10px; */
  text-align: center;
  margin-bottom: 70px;
  position: relative;
  font-size: 30px;
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
`;

/* const LineImg = styled.img`
  margin: 20px 0 10px;
`; */

const Heading = ({ children }) => (
  <>
    <HeadingTxt>{children}</HeadingTxt>
    {/* <LineImg src={line} alt="" /> */}
  </>
);

export default Heading;