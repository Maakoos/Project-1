import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 15px;
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
