import React, { useState } from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import PlanCard from "components/PlanCard";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const InputsBox = styled.div`
  margin-bottom: 40px;
  padding: 20px 3px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50px;
`;

const Label = styled.label`
  padding: 15px 20px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.primaryColor : "transparent"};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 30px;
`;

const PlanSection = () => {
  const [isActive, setActive] = useState("monthly");

  return (
    <section>
      <Container>
        <Header>
          <Heading>Chose your plan</Heading>
          <InputsBox>
            <Label
              htmlFor="firstInput"
              isActive={isActive === "yearly" ? true : false}
              as="label"
            >
              Yearly
            </Label>
            <Input
              type="radio"
              name="planRadioInput"
              id="firstInput"
              value="yearly"
              onChange={() => setActive("yearly")}
            />
            <Label
              htmlFor="secondInput"
              isActive={isActive === "monthly" ? true : false}
            >
              Monthly
            </Label>
            <Input
              type="radio"
              name="planRadioInput"
              id="secondInput"
              value="monthly"
              onChange={() => setActive("monthly")}
            />
          </InputsBox>
        </Header>
        <CardsGrid>
          <PlanCard
            title="Started"
            price={isActive === "monthly" ? "15.90" : "150"}
            capacity="2,5"
          />
          <PlanCard
            title="Business"
            price={isActive === "monthly" ? "25.90" : "250"}
            capacity="90"
          />
          <PlanCard
            title="Premium"
            price={isActive === "monthly" ? "35.90" : "350"}
            capacity="150"
          />
          <PlanCard
            title="Dedicated"
            price={isActive === "monthly" ? "45.90" : "450"}
          />
        </CardsGrid>
      </Container>
    </section>
  );
};

export default PlanSection;
