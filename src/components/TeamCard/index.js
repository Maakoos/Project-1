import React from "react";
import styled from "styled-components";
import Description from "components/Description";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 25px;

  border: 1px solid #d7d7d7;

  flex-basis: 100%;
  margin-bottom: 30px;

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

const SocialIcon = styled.a`
  color: ${({ color }) => color};
`;

const TeamCard = ({ imgSrc, name, position }) => (
  <Card>
    <ImgBox src={imgSrc} alt={name} />
    <TextContent>
      <Name>{name}</Name>
      <Profession>{position}</Profession>
      <Description /* align="center" */>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Description>
      <SocialsBox>
        <SocialIcon href="#" color="#3263af">
          <span className="fab fa-facebook-f"></span>
        </SocialIcon>
        <SocialIcon href="#" color="#40c4ff">
          <span className="fab fa-twitter"></span>
        </SocialIcon>
        <SocialIcon href="#" color="#ff0000">
          <span className="fab fa-youtube"></span>
        </SocialIcon>
        <SocialIcon href="#" color="#b309d7">
          <span className="fab fa-instagram"></span>
        </SocialIcon>
      </SocialsBox>
    </TextContent>
  </Card>
);

export default TeamCard;
