import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Button from "components/Button";
import background from "img/banner-bg.jpg";
import bannerImage from "img/bannerImage.png";

const Wrapper = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Heading = styled.h1`
  margin: 20px 0;
  font-size: 36px;
  text-transform: uppercase;
`;

const SmallHeading = styled.span`
  display: block;
  margin-top: 100px;
  font-size: 18px;
  font-weight: 500;
`;

const BannerImg = styled.img`
  display: block;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
`;

const Banner = () => (
  <Wrapper>
    <Container>
      <Content>
        <div>
          <SmallHeading>Starting At Only $2.8/month </SmallHeading>
          <Heading>Welcome to the best hosting company</Heading>
          <Button>Get started now</Button>
        </div>
        <BannerImg src={bannerImage} alt="corporation" />
      </Content>
    </Container>
  </Wrapper>
);

export default Banner;
