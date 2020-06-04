import React from "react";
import styled from "styled-components";
import Description from "components/Description";

const Card = styled.div`
  position: relative;
  min-width: 360px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 85px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(18, 8, 81, 0.15);
`;

const ImgBox = styled.img`
  position: absolute;
  top: -50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const Name = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`;

const Profession = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
`;

const ClientCard = ({ imgSrc, name, position }) => (
  <Card>
    <ImgBox src={imgSrc} alt="name" />
    <Name>{name}</Name>
    <Profession>{position}</Profession>
    <Description align="center">
      Ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor
      incididunt ut labuore et dolore magna aliqua.
    </Description>
  </Card>
);

export default ClientCard;
