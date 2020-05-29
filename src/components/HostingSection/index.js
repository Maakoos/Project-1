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

const Item = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 40px rgba(18, 8, 81, 0.15);
  }
`;

/* const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const Price = styled.span`
  display: block;
  margin: 10px 0;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 15px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
`; */

const HostingSection = () => (
  <Wrapper>
    <Container>
      <Heading>Chose the right hosting solutuon</Heading>
      <GridBox>
        <Item>
          <HostingCard
            title="Shared Hosting"
            price="1.84"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Item>
        <Item>
          <HostingCard
            title="Wordpress Hosting"
            price="1.84"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Item>
        <Item>
          <HostingCard
            title="Dedicated Hosting"
            price="1.84"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Item>
        <Item>
          <HostingCard
            title="SSL certificate"
            price="1.84"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Item>
        <Item>
          <HostingCard
            title="Web Hosting"
            price="1.84"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Item>
        <Item>
          <HostingCard
            title="Cloud server"
            price="1.84"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Item>
      </GridBox>
    </Container>
  </Wrapper>
);

export default HostingSection;
