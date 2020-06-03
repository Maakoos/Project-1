import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 15px;
  overflow: hidden;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

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
