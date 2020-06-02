import React from "react";
import styled from "styled-components";
import img from "img/about-us.png";
import Container from "components/Container";
import Heading from "components/Heading";
import Description from "components/Description";
import AchievementItem from "components/AchievementItem";
import Button from "components/Button";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  margin-bottom: 20px;
  /* max-width: 550px; */
  /* width: 550px; */
  /* min-width: 330px;
  max-width: 550px; */

  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
`;

const TextBox = styled.div`
  /* flex-basis: 50%; */

  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
`;

const ItemsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Welcome = () => (
  <Container>
    <Wrapper>
      <ImgWrapper>
        <img src={img} alt="" />
      </ImgWrapper>
      <TextBox>
        <Heading noLine size="36px">
          Welcome to deerhost
        </Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </Description>
        <ItemsBox>
          <AchievementItem
            names="clients"
            numbers="147"
            icon="far fa-user"
            small
          />
          <AchievementItem
            names="domains"
            numbers="1247"
            icon="far fa-edit"
            small
          />
          <AchievementItem
            names="servers"
            numbers="537"
            icon="far fa-clone"
            small
          />
          <AchievementItem
            names="installs"
            numbers="1784"
            icon="fa fa-cog"
            small
          />
        </ItemsBox>
        <Button>Get Started Now</Button>
      </TextBox>
    </Wrapper>
  </Container>
);

export default Welcome;
