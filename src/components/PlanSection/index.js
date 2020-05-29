import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
// import Button from "components/Button";
import PlanCard from "components/PlanCard";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const InputsBox = styled.div`
  /* display: inline-block; */
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

/* const CardBox = styled.div`
  padding: 20px 0;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 10px;
`; */

// const Card = styled.div``

/* Poniżej Pojedyncza karta może przeżucimy do odzielnego pliku jako komponent */
/* const CardTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

const PriceBox = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  padding: 20px 0;
  background-color: #120851;
  color: #fff;
  border-radius: 15px;
`;

const CardPrice = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const CardTime = styled.span`
  font-size: 16px;
`;

const PlanList = styled.ul`
  padding: 20px 0;
  list-style: none;
`;

const PlanItem = styled.li`
  padding: 10px 0;
  font-size: 14px;
  font-weight: 400;
`; */

class PlanSection extends React.Component {
  state = {
    yearly: false,
    monthly: true,
  };

  handleSetPlan = (e) => {
    if (e.target.value === "yearly") {
      this.setState({
        yearly: e.target.value,
        monthly: false,
      });
    } else if (e.target.value === "monthly") {
      this.setState({
        yearly: false,
        monthly: e.target.value,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Header>
          <Heading>Chose your plan</Heading>
          <InputsBox>
            <Label htmlFor="firstInput" isActive={this.state.yearly} as="label">
              Yearly
            </Label>
            <Input
              type="radio"
              name="planRadioInput"
              id="firstInput"
              value="yearly"
              onChange={this.handleSetPlan}
            />
            <Label htmlFor="secondInput" isActive={this.state.monthly}>
              Monthly
            </Label>
            <Input
              type="radio"
              name="planRadioInput"
              id="secondInput"
              value="monthly"
              onChange={this.handleSetPlan}
            />
          </InputsBox>
        </Header>

        <CardsGrid>
          <PlanCard
            title="Started"
            price={this.state.monthly ? "15.90" : "150"}
            capacity="2,5"
            test={this.state.monthly}
          />
          <PlanCard
            title="Business"
            price={this.state.monthly ? "25.90" : "250"}
            capacity="90"
          />
          <PlanCard
            title="Premium"
            price={this.state.monthly ? "35.90" : "350"}
            capacity="150"
          />
          <PlanCard
            title="Dedicated"
            price={this.state.monthly ? "45.90" : "450"}
          />
          {/*  <CardBox>
              <CardTitle>Started</CardTitle>
              <PriceBox>
                <CardPrice>$15.90</CardPrice>
                <CardTime>/ month</CardTime>
              </PriceBox>
              <PlanList>
                <PlanItem>2,5 GB web space</PlanItem>
                <PlanItem>Free site building tools</PlanItem>
                <PlanItem>Free domain registar</PlanItem>
              </PlanList>
              <Button light>Choose Plan</Button>
            </CardBox>

            <CardBox>
              <CardTitle>Started</CardTitle>
              <PriceBox>
                <CardPrice>$15.90</CardPrice>
                <CardTime>/ month</CardTime>
              </PriceBox>
              <PlanList>
                <PlanItem>2,5 GB web space</PlanItem>
                <PlanItem>Free site building tools</PlanItem>
                <PlanItem>Free domain registar</PlanItem>
              </PlanList>
              <Button light>Choose Plan</Button>
            </CardBox>

            <CardBox>
              <CardTitle>Started</CardTitle>
              <PriceBox>
                <CardPrice>$15.90</CardPrice>
                <CardTime>/ month</CardTime>
              </PriceBox>
              <PlanList>
                <PlanItem>2,5 GB web space</PlanItem>
                <PlanItem>Free site building tools</PlanItem>
                <PlanItem>Free domain registar</PlanItem>
              </PlanList>
              <Button light>Choose Plan</Button>
            </CardBox>

            <CardBox>
              <CardTitle>Started</CardTitle>
              <PriceBox>
                <CardPrice>$15.90</CardPrice>
                <CardTime>/ month</CardTime>
              </PriceBox>
              <PlanList>
                <PlanItem>2,5 GB web space</PlanItem>
                <PlanItem>Free site building tools</PlanItem>
                <PlanItem>Free domain registar</PlanItem>
              </PlanList>
              <Button light>Choose Plan</Button>
            </CardBox> */}
        </CardsGrid>
      </Container>
    );
  }
}

/* const PlanSection = () => (
  <Container>
    <section>
      <Heading>Chose your plan</Heading>
      <label htmlFor="nazwa">test</label>
      <input type="radio" name="test" id="nazwa" />
      <input type="radio" name="test" />
    </section>
  </Container>
); */

export default PlanSection;
