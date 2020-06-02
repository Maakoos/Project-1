import React from "react";
import styled from "styled-components";

const Content = styled.p`
  /* text-align: left; */
  margin: 20px 0;
  text-align: ${({ align }) => align || "left"};
  font-size: 14px;
  line-height: 2;
`;

const Description = ({ children, align }) => (
  <Content align={align}>{children}</Content>
);

export default Description;
