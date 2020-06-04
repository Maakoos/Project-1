import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import HostingCard from "components/HostingCard";

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

const HostingSection = () => (
  <Wrapper>
    <Container>
      <Heading>Chose the right hosting solutuon</Heading>
      <GridBox>
        <HostingCard
          title="Shared Hosting"
          price="1.84"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <HostingCard
          title="Wordpress Hosting"
          price="1.99"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <HostingCard
          title="Dedicated Hosting"
          price="2.50"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <HostingCard
          title="SSL certificate"
          price="2.99"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <HostingCard
          title="Web Hosting"
          price="1.55"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <HostingCard
          title="Cloud server"
          price="4.99"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </GridBox>
    </Container>
  </Wrapper>
);

export default HostingSection;
