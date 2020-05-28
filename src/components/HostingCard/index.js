import React from "react";
import styled from "styled-components";

const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
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
`;

const HostingCard = ({ title, price, description }) => (
  <>
    <Name>{title}</Name>
    <Price>Starts At ${price}</Price>
    <Description>{description}</Description>
  </>
);

export default HostingCard;
