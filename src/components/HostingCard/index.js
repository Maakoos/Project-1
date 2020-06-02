import React from "react";
import styled from "styled-components";

const Item = styled.div`
  padding: 30px;
  text-align: ${({ icon }) => (icon ? "center" : "left")};
  background-color: #fff;
  border-radius: ${({ icon }) => (icon ? "0" : "10px;")};
  box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 40px rgba(18, 8, 81, 0.15);
  }
`;

const IconBox = styled.span`
  /* display: block;
  text-align: center; */
  color: ${({ theme }) => theme.primaryColor};
  font-size: 42px;
`;

const Name = styled.h3`
  margin: ${({ icon }) => icon && "20px 0"};
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

const HostingCard = ({ title, price, description, icon }) => (
  <Item icon={icon}>
    {/* <IconBox className="fas fa-cloud-upload-alt"></IconBox> */}
    {icon && <IconBox className={icon}></IconBox>}
    <Name icon={icon}>{title}</Name>
    {price && <Price>Starts At ${price}</Price>}
    <Description>{description}</Description>
  </Item>
);

export default HostingCard;
