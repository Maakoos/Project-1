import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 15px;
  /* overflow: hidden; */

  ${({ footer }) =>
    footer &&
    css`
      padding-bottom: 40px;
    `}
`;

const Container = ({ children, footer }) => (
  <Wrapper footer={footer}>{children}</Wrapper>
);

export default Container;
