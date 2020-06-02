import React from "react";
import styled, { css } from "styled-components";
import Container from "components/Container";
import Button from "components/Button";
import Heading from "components/Heading";
import Description from "components/Description";

const Wrapper = styled.section`
  margin: 0 auto;
  /* width: 60%; */
  text-align: center;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

/* const Heading = styled.h2`
  margin-bottom: 10px;
  font-size: 30px;
  text-transform: uppercase;
`;

const LineImg = styled.img`
  margin: 20px 0 10px;
`; */

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  padding: 2px 2px 2px 20px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50px;
`;

const Input = styled.input`
  background: transparent;
  font-size: 14px;
  border: none;
  outline: none;
`;

const CostList = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, 100px); */
  list-style: none;
`;

const CostItem = styled.li`
  /* flex-basis: 20%; */
  margin-right: 20px;
  margin-bottom: 15px;

  &:nth-last-child(1) {
    margin-right: 0;
  }
`;

const DomainTxt = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 20px;
  font-weight: 700;

  ${({ cost }) =>
    cost &&
    css`
      margin-left: 5px;
      color: #000;
    `}
`;

/* const Description = styled.p`
  margin-top: 15px;
  text-align: left;
  font-size: 14px;
  line-height: 1.8;
`; */

const RegisterSection = () => (
  <Container>
    <Wrapper>
      {/* <Heading>Register your domain now!</Heading>
      <LineImg src={line} alt="" /> */}
      <Heading>Register your domain now!</Heading>
      <Form>
        <Input placeholder="ex: cloudhost.com" />
        <Button>Search</Button>
      </Form>
      <CostList>
        <CostItem>
          <DomainTxt>.com</DomainTxt>
          <DomainTxt cost>$1.95</DomainTxt>
        </CostItem>
        <CostItem>
          <DomainTxt>.net</DomainTxt>
          <DomainTxt cost>$2.95</DomainTxt>
        </CostItem>
        <CostItem>
          <DomainTxt>.org</DomainTxt>
          <DomainTxt cost>$0.95</DomainTxt>
        </CostItem>
        <CostItem>
          <DomainTxt>.pl</DomainTxt>
          <DomainTxt cost>$1.95</DomainTxt>
        </CostItem>
        <CostItem>
          <DomainTxt>.us</DomainTxt>
          <DomainTxt cost>$2.49</DomainTxt>
        </CostItem>
      </CostList>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </Description>
    </Wrapper>
  </Container>
);

export default RegisterSection;
