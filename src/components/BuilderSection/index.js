import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Description from "components/Description";

const Wrapper = styled.section`
  margin-top: -400px;
`;

/* const Background = styled.div`
  background-color: #fff;
`; */

const ItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(18, 8, 81, 0.1);
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 0 40px;
  max-width: 470px;
  text-align: center;

  /* &:nth-last-child(1) {
    margin-bottom: 0;
  } */
`;

const Icon = styled.span`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 53px;
`;

const SmallHeading = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 14px;
  text-transform: uppercase;
`;

const Headline = styled.h3`
  /* margin: 5px 0 20px; */
  margin-top: 5px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
`;

/* const Description = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: 14px;
  line-height: 2;
`; */

const BuilderSection = () => (
  <Wrapper>
    <Container>
      <Heading white>How to build your website online today?</Heading>
      <ItemsBox>
        <Item>
          <Icon className="fa fa-desktop"></Icon>
          <SmallHeading>Create your own website wiht our</SmallHeading>
          <Headline>Web Site Builder</Headline>
          <Description align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida facilisis.
          </Description>
          <Button>Read More</Button>
        </Item>
        <Item>
          <Icon className="fa fa-shopping-bag"></Icon>
          <SmallHeading>Easy create, manage & sell</SmallHeading>
          <Headline>Online store</Headline>
          <Description align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida facilisis.
          </Description>
          <Button>Read More</Button>
        </Item>
      </ItemsBox>
    </Container>
  </Wrapper>
);

export default BuilderSection;
