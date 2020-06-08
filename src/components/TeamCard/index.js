import React from "react";
import styled from "styled-components";
import Description from "components/Description";
import SocialIcon from "components/SocialIcon";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 25px;
  border: 1px solid #d7d7d7;
  flex-basis: 100%;
  margin-bottom: 30px;
  transform: rotate(-45deg);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.showIn {
    transform: rotate(0);
    opacity: 1;
  }

  @media (min-width: 768px) {
    flex-basis: 49%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    text-align: left;
  }
`;

const ImgBox = styled.img`
  margin-bottom: 40px;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-left: 30px;
  }
`;

const Name = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
`;

const Profession = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 14px;
  font-weight: 400;
`;

const SocialsBox = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 130px;
  font-size: 16px;

  @media (min-width: 1024px) {
    align-self: flex-start;
  }
`;

const TeamCard = ({ imgSrc, name, position }) => (
  <Card>
    <ImgBox src={imgSrc} alt={name} />
    <TextContent>
      <Name>{name}</Name>
      <Profession>{position}</Profession>
      <Description>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Description>
      <SocialsBox>
        <SocialIcon iconName="fab fa-facebook-f" color="#3263af" size="16" />
        <SocialIcon iconName="fab fa-twitter" color="#40c4ff" size="16" />
        <SocialIcon iconName="fab fa-youtube" color="#ff0000" size="16" />
        <SocialIcon iconName="fab fa-instagram" color="#b309d7" size="16" />
      </SocialsBox>
    </TextContent>
  </Card>
);

export default TeamCard;
