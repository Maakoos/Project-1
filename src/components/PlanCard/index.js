import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const PriceBox = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  padding: 20px 0;
  background-color: #120851;
  color: #fff;
  border-radius: 15px;
  transition: background-color 0.3s ease;
`;

const CardBox = styled.div`
  padding: 20px 0;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 10px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 40px rgba(18, 8, 81, 0.15);
  }

  &:hover ${PriceBox} {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
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
`;

const PlanCard = ({ title, price, capacity }) => (
  <CardBox>
    <CardTitle>{title}</CardTitle>
    <PriceBox>
      <CardPrice>${price}</CardPrice>
      <CardTime>{price > 50 ? "/ year" : "/ month"}</CardTime>
    </PriceBox>
    <PlanList>
      <PlanItem>
        {capacity ? `${capacity} GB web space` : "Unlimited web space"}{" "}
      </PlanItem>
      <PlanItem>Free site building tools</PlanItem>
      <PlanItem>Free domain registar</PlanItem>
      <PlanItem>24/7 Support</PlanItem>
      <PlanItem>Free marketing tool</PlanItem>
      <PlanItem>99,9% Services uptime</PlanItem>
      <PlanItem>30 day money back</PlanItem>
    </PlanList>
    <Button light>Choose Plan</Button>
  </CardBox>
);

export default PlanCard;
